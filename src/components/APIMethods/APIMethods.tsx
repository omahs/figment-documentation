import React from "react";
import ReactMarkdown from "react-markdown";
import BackToTopButton from "@theme/BackToTopButton";
import rewardRanges from "../../utilities/reward-ranges";

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
  const isByDay = ["by day", "account", "address"].find((n) =>
    name.includes(n)
  );
  const isByEpoch =
    ["by epoch", "by era"].find((n) => name.includes(n)) ||
    name.startsWith("SOL");

  if (isRewards && isByEpoch) {
    const { start, end } = rewardRanges[network]();
    request.body = {
      ...(request.body as object),
      start,
      end,
    };
  } else if (isRewards && isByDay) {
    const { start, end } = rewardRanges.days();
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

export default function APIMethods({ network, methods, service, proxy }) {
  return (
    <>
      <h3>Available Methods</h3>
      {methods.map((method, index) => (
        <APIMethod
          key={network + index}
          {...method}
          network={network}
          endpoint={`${proxy}/${service}/${network}`}
          accordionOpen={service !== "node-api"}
        />
      ))}
      <BackToTopButton />
    </>
  );
}
