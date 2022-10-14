import { useEffect, useReducer, useRef } from "react";

interface State<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

// discriminated union type
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

type ReturnType<T> = State<T> & {
  fetchData: (query: string, partOptions: RequestInit) => Promise<T | null>;
};

function useFetch<T = unknown>(
  url?: string,
  options?: RequestInit
): ReturnType<T> {
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, data: action.payload, loading: false };
      case "error":
        return { ...initialState, error: action.payload, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async (query, partOptions: RequestInit = {}) => {
    dispatch({ type: "loading" });

    try {
      const response = await fetch(url + (query ? `/${query}` : ""), {
        ...options,
        ...partOptions,
      });
      if (!response.ok) {
        let errorjson, errorstring, errortext;
        try {
          errortext = JSON.parse(await response.text()) as T;
          errorjson = (await response.json()) as T;
          errorstring = JSON.stringify(errorjson, null, 2);
        } catch {
          // NOOP
        }
        throw new Error(
          JSON.stringify(errorstring, null, 2) ||
            JSON.stringify(errortext, null, 2) ||
            response.statusText
        );
      }

      const data = (await response.json()) as T;
      if (cancelRequest.current) return;

      dispatch({ type: "fetched", payload: data });

      return data;
    } catch (error) {
      if (cancelRequest.current) return;

      dispatch({ type: "error", payload: error.message as Error });

      return null;
    }
  };

  return { ...state, fetchData };
}

export default useFetch;
