(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[6288],{3508:(e,n,t)=>{"use strict";var a=t(4836);n.Z=void 0;var o=a(t(4938)),i=t(5893),s=(0,o.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=s},4938:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=t(218)},218:(e,n,t)=>{"use strict";t.r(n),t.d(n,{capitalize:()=>o.Z,createChainedFunction:()=>i,createSvgIcon:()=>s.Z,debounce:()=>l,deprecatedPropType:()=>r,isMuiElement:()=>u,ownerDocument:()=>m,ownerWindow:()=>h,requirePropFactory:()=>k,setRef:()=>g,unstable_ClassNameGenerator:()=>T,unstable_useEnhancedEffect:()=>w,unstable_useId:()=>b,unsupportedProp:()=>y,useControlled:()=>v.Z,useEventCallback:()=>N.Z,useForkRef:()=>x.Z,useIsFocusVisible:()=>E.Z});var a=t(7078),o=t(8216);const i=function(...e){return e.reduce(((e,n)=>null==n?e:function(...t){e.apply(this,t),n.apply(this,t)}),(()=>{}))};var s=t(8169);const l=function(e,n=166){let t;function a(...a){clearTimeout(t),t=setTimeout((()=>{e.apply(this,a)}),n)}return a.clear=()=>{clearTimeout(t)},a};const r=function(e,n){return()=>null};var d=t(7294),p=t.t(d,2);const u=function(e,n){return d.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function c(e){return e&&e.ownerDocument||document}const m=c;const h=function(e){return c(e).defaultView||window};t(7462);const k=function(e,n){return()=>null};const g=t(7960).Z;const w=t(6600).Z;let _=0;const f=p.useId;const b=function(e){if(void 0!==f){const n=f();return null!=e?e:n}return function(e){const[n,t]=d.useState(e),a=e||n;return d.useEffect((()=>{null==n&&(_+=1,t(`mui-${_}`))}),[n]),a}(e)};const y=function(e,n,t,a,o){return null};var v=t(2627),N=t(9327),x=t(8031),E=t(8791);const T={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),a.Z.configure(e)}}},482:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=t(7462),o=(t(7294),t(3905)),i=t(9420),s=t(3330),l=t(3508);const r={title:"Staking API Endpoints",sidebar_position:2},d=void 0,p={unversionedId:"guides/staking-api/slate-endpoints",id:"guides/staking-api/slate-endpoints",title:"Staking API Endpoints",description:"The Staking API has 3 endpoints for managing Flows and 5 endpoints for managing Webhooks.",source:"@site/docs/guides/staking-api/slate-endpoints.mdx",sourceDirName:"guides/staking-api",slug:"/guides/staking-api/slate-endpoints",permalink:"/guides/staking-api/slate-endpoints",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Staking API Endpoints",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Working With Staking API Flows",permalink:"/guides/staking-api/working-with-staking-api-flows"},next:{title:"Validator Addresses",permalink:"/guides/staking-api/slate-validator-addresses"}},u={},c=[{value:"Managing Flows",id:"managing-flows",level:2},{value:"Code Examples",id:"code-examples",level:3},{value:"Start a new flow",id:"start-a-new-flow",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Body",id:"body",level:4},{value:"curl Request",id:"curl-request",level:4},{value:"Get status of existing flow",id:"get-status-of-existing-flow",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"curl Request",id:"curl-request-1",level:4},{value:"Continue to next step of flow",id:"continue-to-next-step-of-flow",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Body",id:"body-1",level:5},{value:"curl Request",id:"curl-request-2",level:4},{value:"Managing Webhooks",id:"managing-webhooks",level:2},{value:"Code Examples",id:"code-examples-1",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Create a new Webhook endpoint",id:"create-a-new-webhook-endpoint",level:3},{value:"Retreive a Webhook endpoint",id:"retreive-a-webhook-endpoint",level:3},{value:"Update Webhook endpoint",id:"update-webhook-endpoint",level:3},{value:"List existing Webhook endpoints",id:"list-existing-webhook-endpoints",level:3},{value:"Delete an existing Webhook endpoint",id:"delete-an-existing-webhook-endpoint",level:3}],m={toc:c};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Staking API has 3 endpoints for managing Flows and 5 endpoints for managing Webhooks."),(0,o.kt)("h2",{id:"managing-flows"},"Managing Flows"),(0,o.kt)("h3",{id:"code-examples"},"Code Examples"),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(s.Z,{expandIcon:(0,o.kt)(l.Z,{mdxType:"ExpandMoreIcon"}),mdxType:"AccordionSummary"},"Click to view sample JavaScript code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const NETWORK_CODES = {\n  ethereum: "ethereum",\n  near: "near",\n  polkadot: "dot",\n  solana: "solana",\n};\n\nconst CHAIN_CODES = {\n  mainnet: "mainnet", // All Networks\n  goerli: "goerli-prater", // Ethereum PoS testnet\n  testnet: "testnet", // NEAR testnet\n  devnet: "devnet", // Solana devnet\n  westend: "westend", // Polkadot testnet\n};\n\nconst OPERATIONS = {\n  staking: "staking", // Ethereum only supports staking\n  unstaking: "unstaking", // NEAR or Polkadot\n  transfer: "transfer", // NEAR or Polkadot or Solana\n  sol_unstaking: "unstaking", // Solana unstaking\n  add_proxy: "add_proxy", // Polkadot only\n  remove_proxy: "remove_proxy", // Polkadot only\n};\n\nconst API_KEY = "YOUR API KEY";\n\nfunction startNewFlow(network, chain, operation, params = {}) {\n  fetch(flowUrl, {\n    method: "POST",\n    headers: {\n      Authorization: `${API_KEY}`,\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify({\n      flow: {\n        network_code: NETWORK_CODES[`${network}`],\n        chain_code: CHAIN_CODES[`${chain}`],\n        operation: OPERATIONS[`${operation}`],\n        version: "v1",\n      },\n    }),\n  })\n    .then((result) => result.json())\n    .then(console.log);\n}\n\nfunction continueFlow(flowId, name, inputs = {}) {\n  console.log(name, inputs);\n  fetch(`${flowUrl}/${flowId}/next`, {\n    method: "PUT",\n    headers: {\n      Authorization: `${API_KEY}`,\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify({\n      name,\n      inputs,\n    }),\n  })\n    .then((result) => result.json())\n    .then((json) => console.log(JSON.stringify(json, null, 2)));\n}\n\nfunction getFlow(flowId) {\n  fetch(`${flowUrl}/${flowId}`, {\n    method: "GET",\n    headers: {\n      Authorization: `${API_KEY}`,\n    },\n  })\n    .then((result) => result.json())\n    .then((json) => console.log(JSON.stringify(json, null, 2)));\n}\n'))),(0,o.kt)("h3",{id:"start-a-new-flow"},"Start a new flow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/v1/flows"))),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("h4",{id:"body"},"Body"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"parameter"),(0,o.kt)("th",{parentName:"tr",align:"center"},"type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"description"),(0,o.kt)("th",{parentName:"tr",align:"right"},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"network_code")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Network this flow operates on (ex. ",(0,o.kt)("inlineCode",{parentName:"td"},"solana"),")"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"chain_code")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Chain this flow operates on (ex. ",(0,o.kt)("inlineCode",{parentName:"td"},"mainnet"),")"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"operation")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The operation to perform (ex. ",(0,o.kt)("inlineCode",{parentName:"td"},"staking"),")"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"version")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"API version to use (ex. ",(0,o.kt)("inlineCode",{parentName:"td"},"v1"),")"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Optional")))),(0,o.kt)("h4",{id:"curl-request"},"curl Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request to the Staking API to start a staking flow on NEAR"',title:'"Example',curl:!0,request:!0,to:!0,the:!0,Staking:!0,API:!0,start:!0,a:!0,staking:!0,flow:!0,on:!0,'NEAR"':!0},'curl -X POST https://near-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-d \'{"flow": {"network_code":"near", "chain_code": "testnet", "operation": "staking", "version": "v1"}}\'\n')),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(s.Z,{expandIcon:(0,o.kt)(l.Z,{mdxType:"ExpandMoreIcon"}),mdxType:"AccordionSummary"},"Click to view sample response"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the response, the ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," array contains the name of the next action in the flow and details of the expected inputs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," field.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1d9e9d5d-f4a2-4974-b549-c35531344fa9",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_delegate_tx",\n      "inputs": [\n        {\n          "name": "delegator_address",\n          "display": "Delegator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "account_balance",\n              "options": {\n                "on": "with_on_chain_validations",\n                "greater_than_or_equal_to": null\n              }\n            }\n          ]\n        },\n        {\n          "name": "delegator_pubkey",\n          "display": "Delegator Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_address",\n          "display": "Validator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "is_validator",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "max_gas",\n          "display": "Max Gas",\n          "description": "",\n          "type": "decimal",\n          "validations": []\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": null,\n    "delegator_pubkey": null,\n    "validator_address": null,\n    "amount": null,\n    "max_gas": null,\n    "delegate_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-07-19T17:54:02.882Z",\n  "updated_at": "2022-07-19T17:54:02.882Z"\n}\n'))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"get-status-of-existing-flow"},"Get status of existing flow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/v1/flows/[:flow_id]"))),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[:flow_id]"),": This is a placeholder for the actual Flow ID. Pass the Flow ID you received in the reponse when creating the flow in the GET request URL.")),(0,o.kt)("h4",{id:"curl-request-1"},"curl Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET https://eth-slate.figment.io/api/v1/flows/FLOW-ID \\\n-H "Authorization: API-KEY"\n')),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(s.Z,{expandIcon:(0,o.kt)(l.Z,{mdxType:"ExpandMoreIcon"}),mdxType:"AccordionSummary"},"Click to view sample response"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the response, the ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," array contains the name of the next action in the flow and the expected inputs for the next step in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," field.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1d9e9d5d-f4a2-4974-b549-c35531344fa9",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_delegate_tx",\n      "inputs": [\n        {\n          "name": "delegator_address",\n          "display": "Delegator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "account_balance",\n              "options": {\n                "on": "with_on_chain_validations",\n                "greater_than_or_equal_to": null\n              }\n            }\n          ]\n        },\n        {\n          "name": "delegator_pubkey",\n          "display": "Delegator Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_address",\n          "display": "Validator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "is_validator",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "max_gas",\n          "display": "Max Gas",\n          "description": "",\n          "type": "decimal",\n          "validations": []\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": null,\n    "delegator_pubkey": null,\n    "validator_address": null,\n    "amount": null,\n    "max_gas": null,\n    "delegate_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-07-19T17:54:02.882Z",\n  "updated_at": "2022-07-19T17:54:02.882Z"\n}\n'))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"continue-to-next-step-of-flow"},"Continue to next step of flow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/v1/flows/[:flow_id]/next"))),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("h5",{id:"body-1"},"Body"),(0,o.kt)("p",null,"The parameters will be different, depending on which protocol and flow you are using.\nRefer to the individual protocol guides for more details (links are in the sidebar)."),(0,o.kt)("h4",{id:"curl-request-2"},"curl Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request for the next step of a flow, with blank values"',title:'"Example',curl:!0,request:!0,for:!0,the:!0,next:!0,step:!0,of:!0,a:!0,"flow,":!0,with:!0,blank:!0,'values"':!0},'curl -X POST https://eth-slate.figment.io/api/v1/flows/FLOW-ID/next \\\n-H "Authorization: API-KEY" \\\n--data-raw \'{"name": "create_deposit_transaction", \\\n  "inputs": {\n  "funding_account_address": "",\n  "validator_pub_key": "",\n  "withdrawal_credentials": "",\n  "signature": "",\n  "deposit_data_root": ""\n  }\n}\'\n')),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(s.Z,{expandIcon:(0,o.kt)(l.Z,{mdxType:"ExpandMoreIcon"}),mdxType:"AccordionSummary"},"Click to view sample response"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In the response, the ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," array contains the name of the next action in the flow and the expected inputs for the next step in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," field.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1d9e9d5d-f4a2-4974-b549-c35531344fa9",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_delegate_tx",\n      "inputs": [\n        {\n          "name": "delegator_address",\n          "display": "Delegator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "account_balance",\n              "options": {\n                "on": "with_on_chain_validations",\n                "greater_than_or_equal_to": null\n              }\n            }\n          ]\n        },\n        {\n          "name": "delegator_pubkey",\n          "display": "Delegator Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_address",\n          "display": "Validator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "is_validator",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "max_gas",\n          "display": "Max Gas",\n          "description": "",\n          "type": "decimal",\n          "validations": []\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": null,\n    "delegator_pubkey": null,\n    "validator_address": null,\n    "amount": null,\n    "max_gas": null,\n    "delegate_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-07-19T17:54:02.882Z",\n  "updated_at": "2022-07-19T17:54:02.882Z"\n}\n'))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"managing-webhooks"},"Managing Webhooks"),(0,o.kt)("h3",{id:"code-examples-1"},"Code Examples"),(0,o.kt)(i.Z,{className:"shadow--tl",mdxType:"Accordion"},(0,o.kt)(s.Z,{expandIcon:(0,o.kt)(l.Z,{mdxType:"ExpandMoreIcon"}),mdxType:"AccordionSummary"},"Click to view sample JavaScript code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// The following example code uses the NPM packages:\n// - cross-fetch\n// - serialize-error\n// Install them with: npm install cross-fetch serialize-error\nimport fetch from "cross-fetch";\nimport { serializeError } from "serialize-error";\n\n// Production token\nconst API_KEY = "your DataHub API key";\n// Production URL\nconst webhookUrl = `https://eth-slate.datahub.figment.io/api/v1/webhook_endpoints`;\n\nfunction createWebhook(params = {}) {\n  fetch(webhookUrl, {\n    method: "POST",\n    headers: {\n      Authorization: `${API_KEY}`,\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify({\n      webhook_endpoint: {\n        ...params,\n      },\n    }),\n  })\n    .then(async (result) => ({\n      code: result.status,\n      json: await result.json(),\n    }))\n    .then(console.log);\n}\n\nfunction updateWebhook(webhookId, params = {}) {\n  fetch(`${webhookUrl}/${webhookId}`, {\n    method: "PUT",\n    headers: {\n      Authorization: `${API_KEY}`,\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify({\n      webhook_endpoint: {\n        ...params,\n      },\n    }),\n  })\n    .then(async (result) => ({\n      code: result.code,\n      json: await result.json(),\n    }))\n    .then(console.log);\n}\n\nfunction deleteWebhook(webhookId) {\n  fetch(`${webhookUrl}/${webhookId}`, {\n    method: "DELETE",\n    headers: {\n      Authorization: `${API_KEY}`,\n    },\n  })\n    .then((result) => ({\n      code: result.status,\n    }))\n    .then(console.log);\n}\n\nfunction getWebhook(webhookId) {\n  fetch(`${webhookUrl}/${webhookId}`, {\n    method: "GET",\n    headers: {\n      Authorization: `${API_KEY}`,\n    },\n  })\n    .then(async (result) => ({\n      code: result.code,\n      json: await result.json(),\n    }))\n    .then(console.log);\n}\n\nfunction getAllWebhooks() {\n  fetch(webhookUrl, {\n    method: "GET",\n    headers: {\n      Authorization: `${API_KEY}`,\n    },\n  })\n    .then(async (result) => ({\n      code: result.status,\n      json: await result.json(),\n    }))\n    .then((result) => console.log(result.json))\n    .catch((error) => {\n      console.log(serializeError(error));\n    });\n}\n'))),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"You require a DataHub API key to authenticate requests to the Webhooks API endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="curl Authorization header example"',title:'"curl',Authorization:!0,header:!0,'example"':!0},"curl -X GET 'https://eth-slate.figment.io/api/v1/webhook_endpoints/15' \\\n// highlight-next-line\n-H 'Authorization: API-KEY'\n")),(0,o.kt)("h3",{id:"create-a-new-webhook-endpoint"},"Create a new Webhook endpoint"),(0,o.kt)("p",null,"You can send a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to create a new webhook endpoint. Each webhook is identified by a sequential number. Currently when a webhook ID has been deleted it cannot be reused. You will be provided with the ",(0,o.kt)("inlineCode",{parentName:"p"},"secret")," when you first create a webhook. Remember to capture this data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request POST /webhook_endpoints"',title:'"Example',curl:!0,request:!0,POST:!0,'/webhook_endpoints"':!0},'curl -X POST \'https://eth-slate.figment.io/api/v1/webhook_endpoints\' \\\n-H \'Authorization: API-KEY\' \\\n-H \'Content-Type: application/json\' \\\n--data-raw \'{\n    "webhook_endpoint": {\n        "target_url": "https://example.com/my/endpoint",\n        "event_types": ["*"],\n        "enabled": "false"\n    }\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "id": 16,\n  "event_types": [],\n  "target_url": "https://example.com/my/endpoint",\n  "enabled": true,\n  "object": "webhook_endpoint",\n  "created": "2022-07-26T19:27:12.647Z",\n  // highlight-next-line\n  "secret": "whsec_B8sidV4Bm8NnstMuP3a9TSGYov... [REDACTED]"\n}\n')),(0,o.kt)("h3",{id:"retreive-a-webhook-endpoint"},"Retreive a Webhook endpoint"),(0,o.kt)("p",null,"You can send a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request, including the webhook ID number in the request URL, to retreive details for an existing webhook endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="GET /webhook_endpoints/[:webhook_endpoint_id]"',title:'"GET','/webhook_endpoints/[:webhook_endpoint_id]"':!0},"curl -X GET 'https://eth-slate.figment.io/api/v1/webhook_endpoints/15' \\\n-H 'Authorization: API-KEY'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "object": "list",\n  "url": "/api/v1/webhook_endpoints",\n  "has_more": false,\n  "data": [\n    {\n      "id": 15,\n      "event_types": ["*"],\n      "target_url": "https://example.com/my/endpoint",\n      "enabled": true,\n      "object": "webhook_endpoint",\n      "created": "2022-07-26T18:20:21.849Z"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"update-webhook-endpoint"},"Update Webhook endpoint"),(0,o.kt)("p",null,"You can send a ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")," request to update details for an existing webhook endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="PUT /webhook_endpoints/[:webhook_endpoint_id]"',title:'"PUT','/webhook_endpoints/[:webhook_endpoint_id]"':!0},'curl -X PUT \'https://eth-slate.figment.io/api/v1/webhook_endpoints/15\' \\\n-H \'Authorization: API-KEY\' \\\n-H \'Content-Type: application/json\' \\\n--data-raw \'{\n    "webhook_endpoint": {\n        "target_url": "https://example.com/my/new/endpoint",\n        "event_types": ["*"],\n        // highlight-next-line\n        "enabled": "true"\n    }\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "id": 15,\n  "event_types": ["*"],\n  "target_url": "https://example.com/my/new/endpoint",\n  // highlight-next-line\n  "enabled": true,\n  "object": "webhook_endpoint",\n  "created": "2022-07-26T19:27:12.647Z"\n}\n')),(0,o.kt)("h3",{id:"list-existing-webhook-endpoints"},"List existing Webhook endpoints"),(0,o.kt)("p",null,"You can send a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to retreive details for all your webhook endpoints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="GET /webhook_endpoints"',title:'"GET','/webhook_endpoints"':!0},"curl -X PUT 'https://eth-slate.figment.io/api/v1/webhook_endpoints' \\\n-H 'Authorization: API-KEY'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "object": "list",\n  "url": "/api/v1/webhook_endpoints",\n  "has_more": false,\n  "data": [\n    {\n      "id": 16,\n      "event_types": ["*"],\n      "target_url": "https://example.com/my/endpoint",\n      "enabled": true,\n      "object": "webhook_endpoint",\n      "created": "2022-07-26T19:27:12.647Z"\n    },\n    {\n      "id": 15,\n      "event_types": ["*"],\n      "target_url": "https://example.com/my/new/endpoint",\n      "enabled": false,\n      "object": "webhook_endpoint",\n      "created": "2022-07-26T18:20:21.849Z"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"delete-an-existing-webhook-endpoint"},"Delete an existing Webhook endpoint"),(0,o.kt)("p",null,"You can send a ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE")," request, including the webhook ID number in the request URL, to delete a webhook endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="DELETE /webhook_endpoints/[:webhook_endpoint_id]"',title:'"DELETE','/webhook_endpoints/[:webhook_endpoint_id]"':!0},"curl -X PUT 'https://eth-slate.figment.io/api/v1/webhook_endpoints/15' \\\n-H 'Authorization: API-KEY'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example response"',title:'"Example','response"':!0},"204 - No Content\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This response does not contain any JSON. Status Code ",(0,o.kt)("strong",{parentName:"p"},"204")," indicates a successful deletion.")))}h.isMDXComponent=!0},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);