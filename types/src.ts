export interface RequestObject {
  body: object | string | undefined;
  query: string | undefined;
  header: [];
  headers: {};
  method: "POST" | "GET" | "PUT";
  url: string;
}

export interface RequestBody {
  jsonrpc: string;
  id: number;
  method: [];
  params: [];
}

export type ResponseStatus = "LOADING" | "SUCCESS" | "ERROR";

export interface ResponseObject {
  body: ResponseBody;
  code: number;
  name: string;
  status: string;
}

export interface ResponseBody {
  jsonrpc: string;
  id: number;
  result?: any[];
  error?: Error;
}
