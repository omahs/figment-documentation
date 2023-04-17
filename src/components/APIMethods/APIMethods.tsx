import React from "react";
import ReactMarkdown from "react-markdown";
import BackToTopButton from "@theme/BackToTopButton";
import { days, polkadot, near, solana } from "../../utilities/reward-ranges";

import { RequestObject, ResponseObject } from "@site/types/src";
import { CodeExample } from "./components";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import MDDetails from "./MDDetails.mdx";

interface Props {
  name: string;
  content: string;
  network: string;
  accordionOpen: boolean;
  interactive: boolean;
  request: RequestObject;
  response: ResponseObject;
  endpoint: string;
}

function APIMethod({
  name,
  content = "",
  interactive,
  network,
  request,
  accordionOpen = false,
  response,
  endpoint,
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

  return (
    <>
      <h2
        id={name.toLowerCase()}
        className={styles.heading}
        data-method={request.method}
      >
        <Link to={`#${name.toLowerCase()}`}>
          {name === "POST /eth2_staking/positions" ||
          name === "GET /eth2_staking/positions"
            ? "/eth2_staking/positions"
            : name === "POST /api/v1/blockfrost_projects" ||
              name === "GET /api/v1/blockfrost_projects" ||
              name === "DELETE /api/v1/blockfrost_projects"
            ? "/api/v1/blockfrost_projects"
            : name}
        </Link>
      </h2>

      <ReactMarkdown>{description}</ReactMarkdown>

      <CodeExample
        req={request}
        res={response}
        interactive={interactive}
        endpoint={endpoint}
      />

      <MDDetails details={specs} accordionOpen={accordionOpen} />

      <hr />
    </>
  );
}

export default function APIMethods({ network, methods, service, proxy, host }) {
  return (
    <>
      <h3>Available Methods</h3>
      {methods.map((method, index) => (
        <APIMethod
          key={network + index}
          {...method}
          network={network}
          endpoint={`${proxy}/${service}/${
            methods[index].name.includes("Withdrawals")
              ? "ethereum_withdrawals"
              : network
          }`}
          host={
            methods[index].name.includes("Withdrawals")
              ? host + "/v2/withdrawals"
              : host
          }
          accordionOpen={service !== "node-api"}
        />
      ))}
      <BackToTopButton />
    </>
  );
}
