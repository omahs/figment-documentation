import React from "react";
import { useLocation, useHistory } from "@docusaurus/router";

export default function ChangeNetwork({ service, network, methods, networks }) {
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <label>Change Network: </label>
      <select
        className="custom-select"
        defaultValue={network}
        onChange={(e) => {
          history.push(
            location.pathname.replace(/\/[^\/]+$/, `/${e.target.value}`)
          );
        }}
      >
        {networks.map((n) => (
          <option key={`${n.value}--n-option`} value={n.value}>
            {n.label}
          </option>
        ))}
      </select>

      <label> Jump to: </label>
      <select
        className="custom-select"
        defaultValue={location.hash.replace("#", "") || ""}
        onChange={(e) => {
          history.push(`#${e.target.value}`);
        }}
      >
        {methods.map((m) => (
          <option
            key={`${m.name}-${m.method}--m-hash`}
            value={m.name.toLowerCase()}
          >
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
}
