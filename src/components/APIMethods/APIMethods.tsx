import React from "react";
import ReactMarkdown from "react-markdown";
import BackToTopButton from "@theme/BackToTopButton";
import { days, polkadot, near, solana } from "../../utilities/reward-ranges";

import { RequestObject, ResponseObject } from "@site/types/src";
import { CodeExample } from "./components";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

interface Props {
  name: string;
  content: string;
  network: string;
  accordionOpen: boolean;
  interactive: boolean;
  request: RequestObject;
  response: ResponseObject;
  endpoint: string;
  host: string;
}

function APIMethod({
  name = "default_name",
  content = "",
  interactive,
  network,
  request,
  response,
  endpoint,
  host,
}: Props) {
  const isRewards = endpoint.includes("rewards-api");
  const isByDay = ["by day", "address"].find((n) => name.includes(n));
  const isByEpoch =
    ["by epoch", "by era"].find((n) => name.includes(n)) ||
    name.startsWith("SOL");

  if (isRewards && isByDay) {
    const { start, end } = days();
    request.body = {
      ...(request.body as object),
      start,
      end,
    };
  }

  if (isRewards && isByEpoch && network === "near") {
    const { start, end } = near();
    request.body = {
      ...(request.body as object),
      start,
      end,
    };
  }

  if (isRewards && isByEpoch && network === "solana") {
    const { start, end } = solana();
    request.body = {
      ...(request.body as object),
      start,
      end,
    };
  }

  if (isRewards && isByEpoch && network === "polkadot") {
    const { start, end } = polkadot();
    request.body = {
      ...(request.body as object),
      start,
      end,
    };
  }

  const [description, ...rest] = content.trim().split(/\n+/);
  const specs = rest.join("\n");

  /* 
    Ternary for requests with the same endpoint or name:
    we can differentiate them based on the name in the schema
    however, the request method is displayed with data-method, 
    so we need to avoid duplicating the method in the link title. 
    TODO: This can be made more flexible with a regex.
  */
  if (name === undefined || name === null) {
    return <></>;
  }

  return (
    <>
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col col--6">
          <h2
            id={name.toLowerCase()}
            className={styles.heading}
            data-method={request?.method}
          >
            <Link to={`#${name.toLowerCase()}`}>
              {name === "POST /eth2_staking/positions" ||
              name === "GET /eth2_staking/positions"
                ? "/eth2_staking/positions"
                : name === "POST /api/v1/blockfrost_projects" ||
                  name === "GET /api/v1/blockfrost_projects" ||
                  name === "DELETE /api/v1/blockfrost_projects"
                ? "/api/v1/blockfrost_projects"
                : name === "POST /api/v1/webhook_endpoints" ||
                  name === "GET /api/v1/webhook_endpoints" ||
                  name === "DELETE /api/v1/webhook_endpoints"
                ? "/api/v1/webhook_endpoints"
                : name ===
                    "GET /api/v1/webhook_endpoints/{{webhookEndpointId}}" ||
                  name === "GET /api/v1/webhook_endpoints/" ||
                  name ===
                    "PUT /api/v1/webhook_endpoints/{{webhookEndpointId}}" ||
                  name ===
                    "DELETE /api/v1/webhook_endpoints/{{webhookEndpointId}}"
                ? "/api/v1/webhook_endpoints/{{webhookEndpointId}}"
                : name}
            </Link>
          </h2>

          <ReactMarkdown>{description}</ReactMarkdown>

          <h3>{endpoint.includes("staking-api-webhooks") ? "Route" : "URL"}</h3>
          <pre className={styles.hostURL}>
            {endpoint.includes("staking-api-webhooks")
              ? "/api/v1/webhook_endpoints"
              : `https://${host !== undefined && host}`}
          </pre>

          <ReactMarkdown className={styles.list}>{specs}</ReactMarkdown>
        </div>

        <div className="col col--6">
          <CodeExample
            req={request}
            res={response}
            interactive={interactive}
            endpoint={endpoint}
          />
        </div>
      </div>
    </>
  );
}

export default function APIMethods({ network, methods, service, proxy, host }) {
  return (
    <>
      {!methods && (
        <>
          <h2>Oops! No methods were passed to the APIMethods component.</h2>
        </>
      )}
      {methods && (
        <>
          {methods.map((method, index) => (
            <>
              <APIMethod
                key={network + index + Math.random()}
                {...method}
                network={network}
                endpoint={`${proxy}/${service}/${
                  methods[index].name.includes("Withdrawals")
                    ? "ethereum_withdrawals"
                    : network
                }`}
                host={
                  methods[index].name.includes("Withdrawals")
                    ? host.replace(/v2\/rewards$/, "") + "v2/withdrawals"
                    : host
                }
              />
              {methods.length > 1 && (
                <>
                  <br />
                  <hr />
                </>
              )}
            </>
          ))}
          <BackToTopButton />
        </>
      )}
    </>
  );
}

export { APIMethod, APIMethods };
