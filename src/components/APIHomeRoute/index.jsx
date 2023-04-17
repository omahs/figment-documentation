import React from "react";
import { Redirect } from "@docusaurus/router";

export default function APIHomeRoute({ category, service, network }) {
  return <Redirect to={`/${category}/${network}`.replace("//", "/")} />;
}

export { APIHomeRoute };
