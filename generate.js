require("dotenv").config();
const fs = require("fs-extra");

const SCHEMAS_DIR = "schemas";
const CLI_ARGS = process.argv.slice(2);

const FLOWS = {
  avalanche: {
    delegate: [
      "Create New Delegation Flow",
      "Submit Delegate Data",
      "Submit Signed Delegate Transaction for Broadcast",
      "Get Flow Status",
    ],
  },
  cardano: {
    delegate: [
      "Create New Delegation Flow",
      "Assign Staking Data",
      "Submit Signed Register Transaction for Broadcast",
      "Submit Delegate Data",
      "Submit Signed Delegate Transaction for Broadcast",
      "Get Flow Status",
    ],
    transfer: [
      "Create a New Transfer Flow",
      "Submit Transfer Data",
      "Submit Signed Transfer Transaction for Broadcast",
      "Get Flow Status",
    ],
  },
  cosmos: {
    delegate: [
      "Create a New Delegation Flow",
      "Submit Delegation Data",
      "Submit Signed Delegate Transaction for Broadcast",
      "Get Flow Status",
    ],
    redelegate: [
      "Create a New Redelegation Flow",
      "Submit Redelegation Data",
      "Submit Signed Redelegate Transaction for Broadcast",
      "Get Flow Status",
    ],
    undelegate: [
      "Create a New Undelegation Flow",
      "Submit Undelegation Data",
      "Submit Signed Undelegate Transaction for Broadcast",
      "Get Flow Status",
    ],
    claim_rewards: [
      "Create a New Claim Rewards Flow",
      "Submit Claim Rewards Data",
      "Submit Signed Claim Rewards Transaction for Broadcast",
      "Get Flow Status",
    ],
    transfer: [
      "Create a New Transfer Flow",
      "Submit Transfer Data",
      "Submit Signed Transfer Transaction for Broadcast",
      "Get Flow Status",
    ],
  },
  ethereum: {
    staking: [
      "Create New Staking Flow",
      "Submit Deposit Data",
      "Submit Signed Transaction for Broadcast",
      "Get Flow Status",
    ],
    aggregated_staking: [
      "Create New Aggregated Staking Flow",
      "Submit Aggregated Staking Data",
      "Submit Signed Transaction for Broadcast",
      "Get Flow Status",
    ],
    unstaking: [
      "Create New Unstaking Flow",
      "Submit Unstaking Data",
      "Get Flow Status",
    ],
  },
  near: {
    delegate: [
      "Create New Delegation Flow",
      "Submit Delegate Data",
      "Submit Signed Delegate Transaction for Broadcast",
      "Get Flow Status",
    ],
    undelegate: [
      "Create New Undelegation Flow",
      "Submit Undelegate Data",
      "Submit Signed Undelegate Transaction for Broadcast",
      "Submit Withdrawal Data",
      "Submit a Signed Withdrawal Transaction for Broadcast",
      "Get Flow Status",
    ],
    transfer: [
      "Create a New Transfer Flow",
      "Submit Transfer Data",
      "Submit Signed Transfer Transaction for Broadcast",
      "Get Flow Status",
    ],
  },
  polkadot: {
    delegate: [
      "Create New Delegation Flow",
      "Submit Bonding Transaction Data",
      "Submit Signed Bonding Transaction for Broadcast",
      "Bond More Transaction (Optional)",
      "Submit Nomination Addresses",
      "Submit Signed Nomination Transaction for Broadcast",
      "Get Flow Status",
    ],
    undelegate: [
      "Create New Undelegation Flow",
      "Assign Unstaking Data",
      "Chill Transactions",
      "Submit Signed Chill Transaction for Broadcast",
      "Create Unbond Transaction",
      "Submit Signed Unbond Transaction for Broadcast",
      "Create Withdrawal Transaction",
      "Submit Signed Withdrawal Transaction for Broadcast",
      "Get Flow Status",
    ],
    add_staking_proxy: [
      "Create New Add Staking Proxy Flow",
      "Submit Add Proxy Data",
      "Submit Signed Add Proxy Transaction for Broadcast",
      "Get Flow Status",
    ],
    remove_staking_proxy: [
      "Create New Flow To Remove Staking Proxy",
      "Submit Remove Proxy Data",
      "Submit a Signed Remove Proxy Transaction for Broadcast",
      "Get Flow Status",
    ],
    transfer: [
      "Create a New Transfer Flow",
      "Submit Transfer Data",
      "Submit Signed Transfer Transaction for Broadcast",
      "Get Flow Status",
    ],
  },
  polygon: {
    delegate: [
      "Create New Delegation Flow",
      "Submit Staking Data",
      "Submit Staking Allowance Data",
      "Submit a Signed Allowance Transaction for Broadcast",
      "Submit Delegate Transaction Data",
      "Submit a Signed Delegate Transaction for Broadcast",
      "Get Flow Status",
    ],
    undelegate: [
      "Create New Undelegation Flow",
      "Submit Unbonding Data",
      "Submit a Signed Unbonding Transaction for Broadcast",
      "Submit Claim Transaction Data",
      "Submit a Signed Claim Transaction for Broadcast",
      "Get Flow Status",
    ],
    claim_rewards: [
      "Create New Claim Rewards Flow",
      "Submit Claim Rewards Data",
      "Submit Signed Claim Rewards Transaction for Broadcast",
      "Get Flow Status",
    ],
  },
  solana: {
    delegate: [
      "Create New Delegation Flow",
      "Create New Staking Account",
      "Submit a Signed Stake Account Transaction for Broadcast",
      "Submit Validator Address",
      "Submit a Signed Delegate Transaction for Broadcast",
      "Get Flow Status",
    ],
    undelegate: [
      "Create New Undelegation Flow",
      "Submit Deactivate Transaction Data",
      "Submit a Signed Deactivate Transaction for Broadcast",
      "Submit Withdrawal Transaction Data",
      "Submit a Signed Withdrawal Transaction for Broadcast",
      "Get Flow Status",
    ],
    split_stake: [
      "Create New Split Stake Account Flow",
      "Submit Split Stake Account Data",
      "Submit a Signed Split Stake Account Transaction for Broadcast",
      "Get Flow Status",
    ],
    merge_stake: [
      "Create New Merge Stake Account Flow",
      "Submit Merge Stake Account Data",
      "Submit a Signed Merge Stake Account Transaction for Broadcast",
      "Get Flow Status",
    ],
    transfer: [
      "Create a New Transfer Flow",
      "Submit Transfer Data",
      "Submit Signed Transfer Transaction for Broadcast",
      "Get Flow Status",
    ],
  },
};

function toDashCase(str) {
  return str?.toLowerCase().replace(/\s+/g, "-");
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .replace(/(?:^|[\s-/])\w/g, function (match) {
      return match.toUpperCase();
    })
    .replace(/\-/g, " ")
    .replace("Api", "API");
}

function toTitleCaseNoSpaces(str) {
  return str
    .toLowerCase()
    .replace(/(?:^|[\s-/])\w/g, function (match) {
      return match.toUpperCase();
    })
    .replace(/\-/g, "")
    .replace("Api", "API");
}

function loadSchemas() {
  return fs
    .readdirSync(SCHEMAS_DIR)
    .map((filename) => {
      if (!filename.endsWith(".json")) return null;
      const filePath = `${SCHEMAS_DIR}/${filename}`;
      const contents = fs.readFileSync(filePath);
      return JSON.parse(contents);
    })
    .filter((schema) => schema !== null);
}

function processJSON(raw = "") {
  try {
    return JSON.parse(raw);
  } catch (e) {
    return "";
  }
}

function processMethod(method, vars) {
  if (method === undefined) return;

  let {
    request: { description, ...request },
    response: { originalRequest: exampleRequest, ...response },
    name,
  } = method;

  response = response[0] || {};
  request = exampleRequest || request;

  let url = request.url.raw !== undefined ? request.url.raw : request.url;
  url = url.replace(/\/$/g, "");

  let query;
  query = url.split("{{API_KEY}}")[1];
  query = query ? query.replace(/^\/+/, "") : query;
  query = query?.replace(/\/$/g, "");
  query = query?.replace(/v2\/rewards$/, "");
  query = query?.replace(/v2\/withdrawals$/, "");
  query = query?.replace(/rates$/, "");

  url = url.split("{{API_KEY}}")[0] + "{{API_KEY}}" + "/";
  url = url.replace(/apikey\/{{API_KEY}}\/?/, "");

  for (let key in vars) {
    url = url.replace(`{{${key}}}`, vars[key]);
  }
  url = url.replace(/\/+$/, "");

  // Prevents nested ternary operator
  let request_body;
  if (["GET", "DELETE"].indexOf(request.method) < 0) {
    if (request.body?.mode === "graphql") {
      request_body = request.body.graphql.query;
    } else {
      request_body = processJSON(request.body?.raw);
    }
  }

  return {
    name: name,
    content: description,
    request: {
      // network: network,
      ...request,
      body: request_body,
      headers: process.env.DEVELOPMENT
        ? {
            Authorization: process.env.API_KEY,
          }
        : {},
      query,
      url,
    },
    interactive: Boolean(vars.INTERACTIVE != "false"),
    response: {
      name: response.name,
      status: response.status,
      code: response.code,
      body: processJSON(response.body),
    },
  };
}

function processServices(services, variables) {
  return services.map((service) => {
    const vars = variables[service.info.name] || {};
    return {
      service: service.info.name,
      networks: service.item
        .map((network) => {
          return {
            network: network.name,
            parameters: network.description,
            service: service.info.name,
            methods: Array.isArray(network.item)
              ? network.item.map((n) => processMethod(n, vars))
              : !!network.item
              ? [processMethod(network.item, vars)]
              : [],
          };
        })
        .sort((a, b) => (a.network < b.network ? -1 : 1)),
    };
  });
}

function referenceTable(_services, variables) {
  const vars = variables["node-api"];
  const websockets = vars.WEBSOCKETS.split(", ");
  const testnets = vars.TESTNETS.split(", ");
  const devnets = vars.DEVNETS.split(", ");
  const archivenodes = new Set(vars.ARCHIVENODES.split(", "));
  const fullnodes = new Set(vars.FULLNODES.split(", "));
  const ARCHIVE_ONLY = new Set(
    [...archivenodes].filter((element) => !fullnodes.has(element))
  );
  const comment = `<!-- This file is generated at build time. See the referenceTable function in generate.js for details. -->\n\n`;
  const content = `Check this table to see which APIs are supported for each Protocol.\nClick the name of the API in the table header to go directly to that API Reference (or use the sidebar links!).\n\n`;

  let markdown = "";
  let editedProtocolList = "";

  // Determine if this can be sorted alphabetically
  const services = [
    _services.find((s) => s.service === "node-api"),
    _services.find((s) => s.service === "staking-api"),
    _services.find((s) => s.service === "staking-api-webhooks"),
    _services.find((s) => s.service === "rewards-api"),
    _services.find((s) => s.service === "rewards-rates-api"),
    ..._services.filter(
      (s) =>
        [
          "node-api",
          "staking-api",
          "staking-api-webhooks",
          "rewards-api",
          "rewards-rates-api",
        ].indexOf(s.service) < 0
    ),
  ];

  // Define column headers
  let columns = [["Protocol"], ["Network"], ["Node type"], ["WebSockets"]];
  columns = [...columns, ...services.map((s) => [s.service])];

  // Define column alignment
  let alignment =
    "| " +
    Array(3).fill(":---").join(" | ") +
    " | " +
    Array(columns.length - 3)
      .fill(":---:")
      .join(" | ") +
    " |";

  // Loop through headers
  for (let index in columns) {
    let header = columns[index][0];
    if (header === "Protocol") {
      // We only want a single protocol name to display in the table
      editedProtocolList = [
        ...new Set(
          services
            .flatMap((s) => s.networks.map((n) => n.network))
            .map((n) => n.split(" ")[0])
        ),
      ];

      // Remove need to manually check for outliers
      // Add any protocols that don't belong to a service
      // .. or protocols that don't have a Node API
      editedProtocolList = editedProtocolList.sort();

      columns[index] = [...columns[index], ...editedProtocolList];
    } else if (header === "Network") {
      columns[index] = [
        ...columns[index],
        ...columns[0]
          .filter((c) => c != "Protocol")
          .map(
            (n) =>
              `Mainnet${testnets.includes(n.toLowerCase()) ? ", Testnet" : ""}${
                devnets.includes(n.toLowerCase()) ? ", Devnet" : ""
              }`
          ),
      ];
    } else if (header === "Node type") {
      columns[index] = [
        ...columns[index],
        ...columns[0]
          .filter((c) => c != "Protocol")
          .map(
            (n) =>
              `${
                Array.from(ARCHIVE_ONLY).includes(n.toLowerCase())
                  ? "Archive"
                  : "Full"
              }${
                Array.from(archivenodes)
                  .filter(
                    (n) => !Array.from(ARCHIVE_ONLY).includes(n.toLowerCase())
                  )
                  .includes(n.toLowerCase())
                  ? " & Archive"
                  : ""
              }`
          ),
      ];
    } else if (header === "WebSockets") {
      columns[index] = [
        ...columns[index],
        ...columns[0]
          .filter((c) => c != "Protocol")
          .map((n) => `${websockets.includes(n.toLowerCase()) ? "✓" : "-"}`),
      ];
    } else {
      let service = services.find((s) => toDashCase(header) === s.service);
      let serviceLink = `[${toTitleCase(
        service.service
      )}](/api-reference/${toDashCase(service.service)})`;

      columns[index] = [
        serviceLink,
        ...columns[0]
          .filter((n) => n != "Protocol")
          .map((n) => {
            if (service.service === "node-api" && n !== "Cardano") {
              return "✓";
            }
            if (
              service.networks.filter(
                (s) => s.network.split(" ")[0].toLowerCase() === n.toLowerCase()
              ).length
            ) {
              return "✓";
            }
            return "-";
          }),
      ];
    }
  }

  function makeRow(row) {
    for (let index of columns) {
      markdown = markdown + (columns[0][0] ? "| " : " ") + index[row] + " ";
    }
    let finishedRow = markdown;
    markdown = "";
    return finishedRow;
  }

  for (let [i] of columns[0].entries()) {
    // Handle first iteration - add alignment row
    if (i === 0) {
      markdown = makeRow(i) + "|\n";
      markdown = markdown + alignment + "\n";
      continue;
    }
    // Handle last iteration
    if (i === columns[0].length - 1) {
      markdown = makeRow(i) + "|\n";
      continue;
    }
    markdown = makeRow(i) + "|\n";
  }
  let outputTable;
  return (outputTable = frontMatterTemplate({
    title: "API Reference",
    desc: "API Reference supported protocols table",
    image: "/img/logo.svg",
    keywords: "[API Reference, Documentation]",
    sidebar_position: 3,
    prev: "null",
    next: "null",
    slug: "/api-reference",
    hide_toc: true,
    body: comment + content + markdown,
  }));
}

function frontMatterTemplate({
  title = "",
  desc,
  image,
  keywords,
  sidebar_position = 0,
  prev = "null",
  next = "null",
  slug,
  hide_toc,
  sidebar_label,
  body = "",
}) {
  return `---
title: ${title}
sidebar_position: ${sidebar_position}
pagination_prev: ${prev}
pagination_next: ${next}
collapsed: true
collapsible: true
${desc ? `description: ${desc}` : ""}
${image ? `image: ${image}` : ""}
${keywords ? `keywords: ${keywords}` : ""}
${slug ? `slug: ${slug}` : ""}
${hide_toc ? `hide_table_of_contents: ${hide_toc}` : ""}
${sidebar_label ? `sidebar_label: ${sidebar_label}` : ""}
---\n
${body}`;
}

function writeIndexFileRedirect(
  path,
  title,
  position,
  sidebar_label,
  category,
  service,
  networks,
  defaultNetwork,
  partial
) {
  fs.writeFileSync(
    path,
    frontMatterTemplate({
      title: title,
      sidebar_position: position,
      prev: null,
      next: null,
      body: null,
      hide_toc: true,
      sidebar_label: sidebar_label,
      body:
        `<!--- This file was generated at build time, any modifications will be lost on next build --->\n\n` +
        `import { Redirect } from "@docusaurus/router";\n\n<Redirect to={"/staking/overview"} />\n\n`,
    }),
    "utf-8"
  );
}

/* Write an index file using the frontmatter template */
function writeIndexFile(
  path,
  title,
  sidebar_position,
  sidebar_label,
  category,
  service,
  networks,
  defaultNetwork,
  partial
) {
  fs.writeFileSync(
    path,
    frontMatterTemplate({
      title: title,
      sidebar_position: sidebar_position,
      prev: null,
      next: null,
      slug: `/${category}`,
      hide_toc: true,
      sidebar_label: sidebar_label,
      body:
        partial &&
        `<!--- This file was generated at build time, any modifications will be lost on next build --->\n\n` +
          `import Overview from '@site/overviews/${partial}'\n\n<Overview />\n\n`,
    }),
    "utf-8"
  );
}

function writeReferenceFile(
  path,
  title,
  sidebar_position,
  hide_toc,
  methods,
  service,
  network,
  networksList,
  variables,
  routeEndpoint
) {
  let host = "";

  for (const key in variables) {
    if (network.toLowerCase() === "ethereum") {
      network = "eth";
    }
    if (network.toLowerCase() === "polygon") {
      network = "matic";
    }
    if (variables[key].includes(network.toLowerCase())) {
      host = variables[key];
    }
    if (variables[key].includes("hubble")) {
      host = variables[key];
    }
    if (network.toLowerCase() === "eth") {
      network = "ethereum";
    }
    if (network.toLowerCase() === "matic") {
      network = "polygon";
    }
  }

  fs.writeFileSync(
    path,
    frontMatterTemplate({
      title: title,
      sidebar_position: sidebar_position,
      desc: `${toTitleCase(service)} - ${network}`,
      keywords: `[${toTitleCase(service)}, ${network}]`,
      hide_toc: hide_toc,
      image: "img/logo.svg",
      sidebar_label:
        network.toLowerCase() !== "near"
          ? toTitleCase(network)
          : network.toUpperCase(),
      body:
        `<!--- This file was generated at build time, any modifications will be lost on next build --->\n\n` +
        `import {APIMethods} from '@site/src/components'\n\n` +
        `import {APIReferenceNav} from '@site/src/components/APIReferenceNav'\n\n` +
        `<APIReferenceNav\n` +
        ` service="${toDashCase(service)}"\n` +
        ` network="${toDashCase(network)}"\n` +
        ` networks={${JSON.stringify(networksList, null, 2)}}\n` +
        ` methods={${
          methods
            ? JSON.stringify(
                methods.map((m) => ({ name: m.name })),
                null,
                2
              )
            : JSON.stringify({ name: "methods" })
        }}\n/>\n\n` +
        `<APIMethods\n` +
        ` methods={${JSON.stringify(methods, null, 2)}}\n` +
        ` service="${toDashCase(service)}"\n` +
        ` networks={${JSON.stringify(networksList, null, 2)}}\n` +
        ` network="${toDashCase(network)}"\n` +
        ` proxy="${process.env.PROXY_HOST}"\n` +
        ` host="${host && routeEndpoint ? host + routeEndpoint : host}"\n` +
        `/>\n\n`,
    }),
    "utf-8"
  );
}

function writeStakingIndexFile(
  path,
  title,
  sidebar_position,
  hide_toc,
  methods,
  service,
  network,
  networksList,
  variables,
  routeEndpoint,
  action,
  folders
) {
  let host = "";

  for (const key in variables) {
    if (network.toLowerCase() === "ethereum") {
      network = "eth";
    }
    if (network.toLowerCase() === "polygon") {
      network = "matic";
    }
    if (variables[key].includes(network.toLowerCase())) {
      host = variables[key];
    }
    if (network.toLowerCase() === "eth") {
      network = "Ethereum";
    }
    if (network.toLowerCase() === "matic") {
      network = "Polygon";
    }
  }

  fs.writeFileSync(
    path,
    frontMatterTemplate({
      title: title,
      desc: `${toTitleCase(service)} - ${network}`,
      image: "img/logo.svg",
      keywords: `[${toTitleCase(service)}, ${network}]`,
      sidebar_position: sidebar_position,
      slug: `/staking/${toDashCase(network)}`,
      hide_toc: hide_toc,
      sidebar_label:
        network.toLowerCase() === "near"
          ? network.toUpperCase()
          : toTitleCase(network),
      body:
        `<!--- This file was generated at build time, any modifications will be lost on next build --->\n\n` +
        `import {APIMethods} from '@site/src/components'\n\n` +
        `import {APIReferenceNav} from '@site/src/components/APIReferenceNav'\n\n` +
        `import ${toTitleCase(
          network
        )}Overview from '@site/partials/${toDashCase(
          network
        )}/overview.mdx'\n\n` +
        `<${toTitleCase(network)}Overview />\n\n` +
        // This is still useful for generating the entire APIReferenceNav,
        // don't remove it yet!
        // `<${toTitleCase(network)}${toTitleCaseNoSpaces(action)} />\n\n` +
        // `## API Reference\n\n` +
        // `<APIReferenceNav\n` +
        // ` service="${toDashCase(service)}"\n` +
        // ` network="${toDashCase(network)}"\n` +
        // ` folders={${JSON.stringify(folders, null, 2)}}\n` +
        // ` path="${toDashCase(path)}"\n` +
        // ` methods={${JSON.stringify(
        //   methods?.map((m) => ({ name: m.name })),
        //   null,
        //   2
        // )}}\n` +
        // `/>\n\n` +
        `<br />\n\n` +
        `<APIMethods\n` +
        ` service="${toDashCase(service)}"\n` +
        ` network="${toDashCase(network)}"\n` +
        ` proxy="${process.env.PROXY_HOST}"\n` +
        ` host="${host && routeEndpoint ? host + routeEndpoint : host}"\n` +
        ` methods={${JSON.stringify(methods, null, 2)}}\n` +
        `/>\n\n`,
    }),
    "utf-8"
  );
}

function createMarkdown(services, variables, schemas) {
  let directoryList = "";
  let networksList = "";

  // TODO: Decide to modify or remove the reference table
  // fs.emptyDirSync("docs/api-reference/");
  // fs.writeFileSync(
  //   "docs/api-reference/index.mdx",
  //   referenceTable(services, variables),
  //   "utf-8"
  // );

  const TOP_DIRS = [
    "authentication",
    "errors",
    "rewards",
    "staking",
    "validators",
  ];

  TOP_DIRS.forEach((directory, index, TOP_DIRS) => {
    directoryList = TOP_DIRS.map((d) => d);
    fs.ensureDirSync(`docs/${directoryList[index]}`);
  });

  /* 
    "services" here are equivalent to the names of the JSON files
    in the /schemas directory.

    The filenames are defined on Postman in the Backup to GitHub integration.
  */
  services.forEach(({ service, networks }, index) => {
    networksList = networks.map((n) => ({
      label: n.network,
      value: toDashCase(n.network),
    }));

    /*      
      - The sidebar position of the category for a service is relative to the Overview
      link at the top of the sidebar. 
      - The third argument of writeIndexFile or writeIndexFileRedirect
      sets the sidebar position of that category.
      - The spacers added to the sidebar in docusaurus.config.js do not impact the position numbers.

      1 Overview
      2 Authentication
      3 Errors
       => topspacer
      4 Staking
      5 Rewards
      6 Validators
      7 Network Data 
       => bottomspacer
    */

    /* Sidebar index 4 - Staking */
    if (service === "staking-api") {
      /* The Staking link in the sidebar immediately redirects to the Overview page */
      writeIndexFileRedirect(
        `docs/staking/index.mdx`,
        "Staking Overview",
        4,
        "Staking",
        "staking",
        service,
        networks,
        "avalanche",
        "staking.mdx"
      );
    }

    /* Sidebar index 5 - Rewards */
    if (service === "rewards-api") {
      writeIndexFile(
        "docs/rewards/index.mdx",
        "Rewards Overview",
        5,
        "Rewards",
        "rewards",
        service,
        networks,
        "avalanche",
        "rewards.mdx"
      );
    }

    /* Sidebar index 6 - Validators */
    if (service === "validator-api") {
      writeIndexFile(
        "docs/validators/index.mdx",
        "Validators Overview",
        6,
        "Validators",
        "validators",
        service,
        networks,
        "ethereum",
        "validators.mdx"
      );
    }

    /* Sidebar index 7 - Network Data */
    if (service === "rewards-rates-api") {
      writeIndexFile(
        "docs/network-data/index.mdx",
        "Network Data Overview",
        7,
        "Network Data",
        "network-data",
        service,
        networks,
        "ethereum",
        "network-data.mdx"
      );
    }

    networks.forEach(({ network, folders, methods, parameters }, index) => {
      // let routeEndpoint = methods[0].request.query
      //   ? "/" + methods[0].request.query.split("?")[0]
      //   : "";

      /* Add the network pages below the Rewards category */
      if (service === "rewards-api") {
        routeEndpoint = "/v2/rewards";
        withdrawalsEndpoint = "/v2/withdrawals";

        writeReferenceFile(
          `docs/rewards/${toDashCase(network)}.mdx`,
          `Rewards - ${
            network.toLowerCase() !== "near"
              ? toTitleCase(network)
              : network.toUpperCase()
          }`,
          2,
          true,
          methods,
          service,
          network,
          networksList,
          variables[service],
          routeEndpoint
        );
      }

      /* Add the network pages below the Network Data > Rewards Rates category */
      if (service === "rewards-rates-api") {
        routeEndpoint = "/rates";

        writeReferenceFile(
          `docs/network-data/rewards-rates/${toDashCase(network)}.mdx`,
          `Rewards Rates - ${toTitleCase(network)}`,
          2,
          true,
          methods,
          service,
          network,
          networksList,
          variables[service],
          routeEndpoint
        );
      }

      /* Add the network pages below the Staking > Networks category */
      if (service === "staking-api") {
        routeEndpoint = "/api/v1/flows";

        /*
          The third argument of writeStakingIndexFile sets the sidebar position
          within the category
        */
        if (toDashCase(network) === "avalanche") {
          writeStakingIndexFile(
            `docs/staking/02_Networks/${toDashCase(network)}/index.mdx`,
            `Staking - ${toTitleCase(network)}`,
            1,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint,
            "delegate"
          );
        }
        if (toDashCase(network) === "cardano") {
          writeStakingIndexFile(
            `docs/staking/02_Networks/${toDashCase(network)}/index.mdx`,
            `Staking - ${toTitleCase(network)}`,
            2,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint,
            "delegate"
          );
        }
        if (toDashCase(network) === "cosmos") {
          writeStakingIndexFile(
            `docs/staking/02_Networks/${toDashCase(network)}/index.mdx`,
            `Staking - ${toTitleCase(network)}`,
            3,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint,
            "delegate"
          );
        }
        if (toDashCase(network) === "ethereum") {
          writeStakingIndexFile(
            `docs/staking/02_Networks/${toDashCase(network)}/index.mdx`,
            `Staking - ${toTitleCase(network)}`,
            4,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint,
            "staking"
          );
        }
        if (toDashCase(network) === "near") {
          writeStakingIndexFile(
            `docs/staking/02_Networks/${toDashCase(network)}/index.mdx`,
            `Staking - ${network.toUpperCase()}`,
            5,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint,
            "delegate"
          );
        }
        if (toDashCase(network) === "polkadot") {
          writeStakingIndexFile(
            `docs/staking/02_Networks/${toDashCase(network)}/index.mdx`,
            `Staking - ${toTitleCase(network)}`,
            6,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint,
            "delegate"
          );
        }
        if (toDashCase(network) === "polygon") {
          writeStakingIndexFile(
            `docs/staking/02_Networks/${toDashCase(network)}/index.mdx`,
            `Staking - ${toTitleCase(network)}`,
            7,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint,
            "delegate"
          );
        }
        if (toDashCase(network) === "solana") {
          writeStakingIndexFile(
            `docs/staking/02_Networks/${toDashCase(network)}/index.mdx`,
            `Staking - ${toTitleCase(network)}`,
            8,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint,
            "delegate"
          );
        }
      }

      /* Add the network pages below the Validators category */
      if (service === "validator-api") {
        if (toDashCase(network) === "ethereum") {
          routeEndpoint = "/api/v1/prime/eth2_staking/";

          writeReferenceFile(
            `docs/validators/${toDashCase(network)}.mdx`,
            `Validators - ${toTitleCase(network)}`,
            1,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint
          );
        }
        if (toDashCase(network) === "polkadot") {
          routeEndpoint = "/api/v1/prime/polkadot/";

          writeReferenceFile(
            `docs/validators/${toDashCase(network)}.mdx`,
            `Validators - ${toTitleCase(network)}`,
            2,
            true,
            methods,
            service,
            network,
            networksList,
            variables[service],
            routeEndpoint
          );
        }
      }

      /*
        The webhooks file is handwritten, we don't currently want to re-write it every build.
      */
      if (service === "staking-api-webhooks") {
        routeEndpoint = "/api/v1/webhook_endpoints";

        fs.ensureDirSync(`docs/staking/03_webhooks`);
        // writeWebhooksGuideFile(
        //   `partials/${toDashCase(network)}/webhooks.mdx`,
        //   service,
        //   network,
        //   methods,
        //   networksList,
        //   variables[service],
        //   routeEndpoint
        // );
      }
    });
  });
}

function getEnvironmentVariables(schemas) {
  const vars = {};
  for (let schema of schemas) {
    if (schema.variable) {
      vars[schema.info.name] = schema.variable.reduce((obj, curr) => {
        return {
          ...obj,
          [curr.key]: curr.value,
        };
      }, {});
    }
  }
  return vars;
}

function generateCORSTests(services) {
  const apiCalls = services.flatMap((service) => {
    if (service.service.includes("staking")) return [];
    return service.networks.flatMap((network) => {
      return network.methods.flatMap((method) => {
        return {
          url: `${process.env.PROXY_HOST}/${toDashCase(
            service.service
          )}/${toDashCase(network.network)}/${method.request.query || ""}`,
          method: method.request.method,
          body:
            ["GET", "DELETE"].indexOf(request.method) > -1
              ? undefined
              : method.request.body,
          headers:
            ["GET", "DELETE"].indexOf(request.method) > -1
              ? {}
              : {
                  "content-type": "application/json",
                },
        };
      });
    });
  });

  const testScript = `
    async function testEndpoint(apiCall) {
      try {
        const result = await fetch(apiCall.url, { 
          method: apiCall.method,
          headers: apiCall.headers,
          body: JSON.stringify(apiCall.body),
        })
  
        return result.ok;
      } catch (e) {
        return false;
      }
    }

    async function process() {
      const apiCalls = ${JSON.stringify(apiCalls)};
      const failedCalls = [];
      for(let index = 0; index < apiCalls.length; index += 1) {
        const apiCall = apiCalls[index];
        console.clear();
        const progress = index + 1;
        // console.log(((progress/apiCalls.length)*100).toFixed(2) + "%")
        const passed = await testEndpoint(apiCall);
        if (!passed) failedCalls.push(apiCall);
      }
      console.log(failedCalls);
    }

    process()
  `;

  fs.writeFileSync("corstests.js", testScript, "utf-8");
}

(function process() {
  const schemas = loadSchemas();
  const variables = getEnvironmentVariables(schemas);
  const services = processServices(schemas, variables);
  createMarkdown(services, variables);
  switch (CLI_ARGS[0]) {
    case "corstests":
      generateCORSTests(services);
      break;
    case "tests":
      break;
    default:
      break;
  }
  process.exit?.();
})();
