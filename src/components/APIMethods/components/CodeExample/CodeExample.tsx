import React, { useEffect, useState } from "react";
import copy from "copy-text-to-clipboard";
import styles from "./styles.module.css";

import {
  RequestObject,
  ResponseBody,
  ResponseObject,
  ResponseStatus,
} from "@site/types/src";
import useFetch from "./useFetch";
import CodeBlock from "@theme/CodeBlock";
import { CodeEditor } from "../CodeEditor";
import CopyButton from "@theme/CodeBlock/CopyButton";
import PlayCircleOutlineFilled from "@site/static/img/icons/PlayCircleOutlineFilled.svg";
import RefreshFilled from "@site/static/img/icons/RefreshFilled.svg";

interface Props {
  req: RequestObject;
  res: ResponseObject;
  interactive: boolean;
  endpoint: string;
}

export default function CodeExample({
  req,
  res,
  interactive,
  endpoint,
}: Props) {
  const [reqBody, setReqBody] = useState<string>(formatRequest(req.body));
  const [queryString, setQueryString] = useState<string>(req.query);
  const [resBody, setResBody] = useState<string>(formatResult(res.body));
  const graphql =
    typeof req.body === "string" && req.body.indexOf("query") == 0;

  const { data, error, loading, fetchData } = useFetch<ResponseBody>(endpoint, {
    method: req.method,
    headers: {
      "Content-Type": graphql ? "application/graphql" : "application/json",
    },
    body: formatRequest(req.body),
  });

  const [status, setStatus] = useState<ResponseStatus | null>(null);
  useEffect(() => {
    if (loading) {
      setStatus("LOADING");
      return;
    }
    if (error || data?.error) {
      setStatus("ERROR");
      return;
    }
    if (data) {
      setStatus("SUCCESS");
    }
  }, [data, error, loading]);

  const handleOnValueChange = (value: string) => {
    if (!interactive) return;
    if (req.method === "GET") setQueryString(value);
    else if (req.method === "POST") setReqBody(value);
  };

  const actions = [
    interactive
      ? {
          title: "Run request",
          onClick: async () => {
            const apiData = await fetchData(queryString, { body: reqBody });
            if (apiData) setResBody(formatResult(apiData));
          },
          Component: (
            <>
              <PlayCircleOutlineFilled /> Run
            </>
          ),
        }
      : null,
    {
      title: "Copy",
      onClick: () => copy(reqBody),
      Component: (
        <CopyButton code={""} className={styles.overlayHeaderButton} />
      ),
    },
    interactive
      ? {
          title: "Reset",
          onClick: () => {
            setStatus(null);
            setQueryString(req.query);
            setReqBody(formatRequest(req.body));
            setResBody(formatResult(res.body));
          },
          Component: <RefreshFilled />,
        }
      : null,
  ].filter((action) => !!action);

  return (
    <>
      <CodeEditor
        header={
          req.method === "GET"
            ? `Request Query ${interactive ? "(try it)" : ""}`
            : `Request Body ${interactive ? "(try it)" : ""}`
        }
        actions={actions}
        disabled={!interactive}
        onValueChange={handleOnValueChange}
      >
        {req.method === "GET" ? queryString : reqBody}
      </CodeEditor>

      <CodeBlock
        title={status ? "Response" : "Example Response"}
        language="json"
      >
        {error ? `${error}` : resBody}
      </CodeBlock>
    </>
  );
}

function formatResult(json: {}) {
  return JSON.stringify(json, null, 2);
}

function formatRequest(body) {
  if (typeof body === "string") return body;
  return JSON.stringify(body, null, 2);
}
