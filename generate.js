require("dotenv").config();
const fs = require("fs-extra");
const SCHEMAS_DIR = "schemas";

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

  let query;
  query = url.split("{{API_KEY}}")[1];
  query = query ? query.replace(/^\/+/, "") : query;
  url = url.split("{{API_KEY}}")[0] + "{{API_KEY}}" + "/";
  url = url.replace(/apikey\/{{API_KEY}}\/{0,1}/, "");
  for (let key in vars) {
    url = url.replace(`{{${key}}}`, vars[key]);
  }
  url = url.replace(/\/+$/, "");

  return {
    name: name,
    content: description,
    request: {
      ...request,
      body: request.body
        ? request.body.mode === "graphql"
          ? request.body.graphql.query
          : processJSON(request.body.raw)
        : undefined,
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
      networks: service.item.map((network) => {
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
      }),
    };
  });
}

function frontMatterTemplate({
  title = "",
  desc,
  image,
  keywords,
  pos = 0,
  prev = "null",
  next = "null",
  slug,
  body = "",
}) {
  return `---
title: ${title}
sidebar_position: ${pos}
pagination_prev: ${prev}
pagination_next: ${next}
collapsed: true
collapsible: true
${desc ? `description: ${desc}` : ""}
${image ? `image: ${image}` : ""}
${keywords ? `keywords: ${keywords}` : ""}
${slug ? `slug: ${slug}` : ""}
---
${body}`;
}

function sidebarIndexForService(service) {
  switch (service) {
    case "node-api":
      return 1;
    case "transaction-search-api":
      return 2;
    case "staking-api":
      return 3;
    case "staking-api-webhooks":
      return 4;
    case "rewards-api":
      return 5;
    case "rewards-rates-api":
      return 6;
    default:
      return 0;
  }
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

  // TODO: Determine if this can be sorted alphabetically
  const services = [
    _services.find((s) => s.service === "node-api"),
    _services.find((s) => s.service === "transaction-search-api"),
    _services.find((s) => s.service === "staking-api"),
    _services.find((s) => s.service === "staking-api-webhooks"),
    _services.find((s) => s.service === "rewards-api"),
    _services.find((s) => s.service === "rewards-rates-api"),
    ..._services.filter(
      (s) =>
        [
          "node-api",
          "transaction-search-api",
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

      // TODO: Remove need to manually check for outliers
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
            if (service.service === "node-api") {
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

  return (outputTable = frontMatterTemplate({
    title: "API Reference",
    desc: "API Reference supported protocols table",
    image: "/img/logo.svg",
    keywords: "[API Reference, Documentation]",
    pos: 3,
    prev: "null",
    next: "null",
    slug: "/api-reference",
    body: comment + content + markdown,
  }));
}

function createMarkdown(services, variables) {
  fs.emptyDirSync("docs/api-reference/");
  fs.writeFileSync(
    "docs/api-reference/index.mdx",
    referenceTable(services, variables),
    "utf-8"
  );
  fs.emptyDirSync(`partials/transaction-search-parameters`);

  services.forEach(({ service, networks }) => {
    fs.ensureDirSync(`docs/api-reference/${toDashCase(service)}`);
    if (!fs.existsSync(`docs/api-reference/${toDashCase(service)}/index.mdx`)) {
      fs.writeFileSync(
        `docs/api-reference/${toDashCase(service)}/index.mdx`,
        frontMatterTemplate({
          title: toTitleCase(service),
          pos: sidebarIndexForService(service),
          body: `import APIHomeRoute from '@site/src/components/APIHomeRoute'\n\n<APIHomeRoute service='${toDashCase(
            service
          )}' network='${toDashCase(networks[0].network)}' />`,
        }),
        "utf-8"
      );
    }

    const networksList = networks.map((n) => ({
      label: n.network,
      value: toDashCase(n.network),
    }));

    networks.forEach(({ network, methods, parameters }) => {
      fs.writeFileSync(
        `docs/api-reference/${toDashCase(service)}/${toDashCase(network)}.mdx`,
        frontMatterTemplate({
          title: network,
          desc: `${toTitleCase(service)} - ${network}`,
          keywords: `[${toTitleCase(service)}, ${network}]`,
          image: "img/logo.svg",
          body:
            `import {APIMethods} from '@site/src/components'\n` +
            `import ApiReferenceNav from '@site/src/components/ApiReferenceNav'\n` +
            `import MakingCalls from '@site/partials/api-reference/making-calls.mdx'\n\n` +
            `# ${toTitleCase(service)} - ${network}\n\n` +
            `<ApiReferenceNav service="${toDashCase(
              service
            )}" methods={${JSON.stringify(
              methods.map((m) => ({ name: m.name }))
            )}} networks={${JSON.stringify(
              networksList
            )}} network="${toDashCase(network)}" />\n\n` +
            `<MakingCalls url="${
              methods[0].request.url
            }" network="${toTitleCase(network)}" service="${toTitleCase(
              service
            )}" />\n\n` +
            `<APIMethods methods={${JSON.stringify(
              methods
            )}} service="${toDashCase(service)}" networks={${JSON.stringify(
              networksList
            )}} network="${toDashCase(network)}" proxy="${
              process.env.PROXY_HOST
            }" />`,
        }),
        "utf-8"
      );
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
            method.request.method === "GET" ? undefined : method.request.body,
          headers:
            method.request.method === "GET"
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
        console.log(((progress/apiCalls.length)*100).toFixed(2) + "%")
        const passed = await testEndpoint(apiCall);
        if (!passed) failedCalls.push(apiCall);
      }
      console.log(failedCalls);
    }

    process()
  `;

  fs.writeFileSync("tests.js", testScript, "utf-8");
}

(function process() {
  const schemas = loadSchemas();
  const variables = getEnvironmentVariables(schemas);
  const services = processServices(schemas, variables);
  createMarkdown(services, variables);
  //generateCORSTests(services);
  process.exit?.();
})();
