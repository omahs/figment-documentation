"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[456],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>g});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=a.createContext({}),p=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},d=function(n){var e=p(n.components);return a.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),u=p(t),g=i,k=u["".concat(l,".").concat(g)]||u[g]||c[g]||o;return t?a.createElement(k,r(r({ref:e},d),{},{components:t})):a.createElement(k,r({ref:e},d))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2579:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7462),i=(t(7294),t(3905)),o=t(9960);const r={title:"Working With Staking API Flows",sidebar_position:1},s=void 0,l={unversionedId:"guides/staking-api/working-with-staking-api-flows",id:"guides/staking-api/working-with-staking-api-flows",title:"Working With Staking API Flows",description:"Authentication",source:"@site/docs/guides/staking-api/working-with-staking-api-flows.mdx",sourceDirName:"guides/staking-api",slug:"/guides/staking-api/working-with-staking-api-flows",permalink:"/guides/staking-api/working-with-staking-api-flows",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Working With Staking API Flows",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Staking API Overview",permalink:"/guides/staking-api/"},next:{title:"Staking API Endpoints",permalink:"/guides/staking-api/slate-endpoints"}},p={},d=[{value:"Authentication",id:"authentication",level:2},{value:"Flows: Create a New Flow",id:"flows-create-a-new-flow",level:2},{value:"Requests",id:"requests",level:3},{value:"Response",id:"response",level:3},{value:"Actions: Response Structures and Flow Paths",id:"actions-response-structures-and-flow-paths",level:2},{value:"Inputs: Building Forms and Data Collection",id:"inputs-building-forms-and-data-collection",level:2},{value:"Payloads: Transactions and Signatures",id:"payloads-transactions-and-signatures",level:2},{value:"Transaction Payloads and Signing Payloads",id:"transaction-payloads-and-signing-payloads",level:3},{value:"Confirming the Transaction Payload",id:"confirming-the-transaction-payload",level:3},{value:"Signing the Transaction",id:"signing-the-transaction",level:3}],c={toc:d};function u(n){let{components:e,...r}=n;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The Staking API requires you to pass your API key as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header to authenticate requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request to the Staking API to start a Transfer flow on Solana Devnet"',title:'"Example',curl:!0,request:!0,to:!0,the:!0,Staking:!0,API:!0,start:!0,a:!0,Transfer:!0,flow:!0,on:!0,Solana:!0,'Devnet"':!0},'curl -X POST https://near-slate.datahub.figment.io/api/v1/flows \\\n// highlight-next-line\n-H Authorization: API-KEY\' \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "near",\n    "chain_code": "testnet",\n    "operation": "transfer",\n    "version": "v1"\n  }\n}\'\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"flows-create-a-new-flow"},"Flows: Create a New Flow"),(0,i.kt)("p",null,"The Staking API has two endpoints for starting and working through a Flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST /api/v1/flows")," to create a new flow, or"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT /api/v1/flows/[:flow_id]/next")," to proceed to the next step in the flow.")),(0,i.kt)("p",null,"For each individual operation you want to complete, hit the first endpoint once to create the flow and the second endpoint multiple times until the Flow is completed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Network codes"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Chain codes"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Operations"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"avalanche")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mainnet"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"testnet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"staking"),", ","*","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ethereum")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mainnet"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"goerli-prater")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"staking"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"near")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mainnet"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"testnet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"staking"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"unstaking"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"transfer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dot")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mainnet"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"westend")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"add_proxy"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"remove_proxy"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"staking"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"unstaking"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"transfer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"solana")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mainnet"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"devnet")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"staking"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"un-staking"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"transfer"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"*","*"," There is no un-delegate option on Avalanche."),(0,i.kt)("p",{parentName:"admonition"},"Tokens unlock automatically at the end time specified during the delegation process.")),(0,i.kt)("h3",{id:"requests"},"Requests"),(0,i.kt)("p",null,"This example request would begin a new flow for the ",(0,i.kt)("inlineCode",{parentName:"p"},"unstaking")," operation on Solana devnet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request"',title:'"Example',curl:!0,'request"':!0},'curl -X POST https://solana-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "solana",\n    "chain_code": "devnet",\n    "operation": "unstaking"\n  }\n}\'\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To continue an existing flow, you must supply the Flow ID in the request URL before the ",(0,i.kt)("inlineCode",{parentName:"p"},"/next")," route. The request body must contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," object, populated with the correct parameters depending on the protocol and flow you are using."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://eth-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "name_of_action",\n  "inputs": {\n    "field_1": "data_1",\n    "field_2": "data_2"\n  }\n}\'\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response format"',title:'"Example',JSON:!0,response:!0,'format"':!0},'{\n  "id": [:id],\n  "state": [:state],\n  "actions": [...],\n  "data": {\n  },\n  "network_code": [:network_code],\n  "chain_code": [:chain_code],\n  "created_at": [:date_time],\n  "updated_at": [:date_time]\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"actions-response-structures-and-flow-paths"},"Actions: Response Structures and Flow Paths"),(0,i.kt)("p",null,"Let's look at the response returned when we submit a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/v1/flows")," to create a new staking flow on Solana's DevNet."),(0,i.kt)("p",null,"Specifically, notice there are two actions listed: ",(0,i.kt)("inlineCode",{parentName:"p"},"assign_stake_account")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"create_new_stake_account"),", each with a few inputs defined."),(0,i.kt)("p",null,"These two actions can be presented to the end user as a possible step in the Flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user has an inactive stake account they wish to activate, in which case the ",(0,i.kt)("inlineCode",{parentName:"li"},"assign_stake_account")," Action would be followed."),(0,i.kt)("li",{parentName:"ul"},"The user does not have an account and needs to create a new one. In this case the ",(0,i.kt)("inlineCode",{parentName:"li"},"create_new_stake_account")," Action would be utilized.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "id": "268c2885-7bfa-42b9-8e4d-756d2852f62e",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "assign_stake_account",\n      "inputs": [\n        {\n          "name": "stake_account_pubkey",\n          "display": "Stake Account Public Key",\n          "description": "The public address of an existing stake account to be activated.",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "funding_account_pubkey",\n          "display": "Funding Account Public Key",\n          "description": "The public address of the account responsible for paying the transaction fee.",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "create_new_stake_account",\n      "inputs": [\n        {\n          "name": "funding_account_pubkey",\n          "display": "Funding Account Public Key",\n          "description": "The public address of the account responsible for paying the transaction fee.",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "stake_authority_pubkey",\n          "display": "Stake Authority Public Key",\n          "description": "This account will have the authority to submit certain staking transaction for the generated Stake Account.",\n          "type": "string",\n          "validations": []\n        },\n        {\n          "name": "withdraw_authority_pubkey",\n          "display": "Withdraw Authority Public Key",\n          "description": "This account will have the authority to submit a withdrawal transaction to withdraw SOL from the generated Stake Account.",\n          "type": "string",\n          "validations": []\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "Amount to be staked (in SOL).",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            },\n            {\n              "type": "precision",\n              "options": {\n                "max": 9\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "data": {},\n  "network_code": "solana",\n  "chain_code": "devnet",\n  "created_at": "2022-03-02T16:48:12.426Z",\n  "updated_at": "2022-03-02T16:48:12.426Z"\n}\n')),(0,i.kt)("h2",{id:"inputs-building-forms-and-data-collection"},"Inputs: Building Forms and Data Collection"),(0,i.kt)("p",null,"Building a dynamic form is possible regardless of the Action."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The title of the form will be the humanized version of the action name."),(0,i.kt)("li",{parentName:"ul"},"The Input fields would correspond to the inputs defined for that action."),(0,i.kt)("li",{parentName:"ul"},"Each field can be validated based on the Input's defined validations."),(0,i.kt)("li",{parentName:"ul"},"Each field can be labelled with the input's provided display value or a human readable version of the Input's name."),(0,i.kt)("li",{parentName:"ul"},"Each field can have a tooltip or other descriptive aid populated with the Input's provided description value.")),(0,i.kt)("p",null,"Let's see what that looks like in practice for the ",(0,i.kt)("inlineCode",{parentName:"p"},"assign_stake_account")," action type from the previous response."),(0,i.kt)("p",null,"This Action contains the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "name": "assign_stake_account",\n  "inputs": [\n    {\n      "name": "stake_account_pubkey",\n      "display": "Stake Account Public Key",\n      "description": "The public address of an existing stake account to be activated.",\n      "type": "string",\n      "validations": [\n        {\n          "type": "presence",\n          "options": {}\n        }\n      ]\n    },\n    {\n      "name": "funding_account_pubkey",\n      "display": "Funding Account Public Key",\n      "description": "The public adress of an account with stake authority over the given Stake Account.",\n      "type": "string",\n      "validations": [\n        {\n          "type": "presence",\n          "options": {}\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"Applying the approach for form building presented above, we would achieve the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking API Assign Staking Account",src:t(596).Z,width:"449",height:"329"})),(0,i.kt)("h2",{id:"payloads-transactions-and-signatures"},"Payloads: Transactions and Signatures"),(0,i.kt)("p",null,"All Flows will contain one or more transactions that need to be signed in order to complete the Flow."),(0,i.kt)("p",null,"These transaction steps will always have two possible actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_[transaction_type]_tx"),": returns to the same point in the flow, but with an updated transaction payload. Use this action if you need an updated nonce (or recent block hash in the case of Solana flows)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_[transaction_type]_tx"),": you will return a signed transaction payload or signing payload to the Staking API in order for the Staking API to broadcast it to the network")),(0,i.kt)("p",null,"The refresh transaction action does not require any inputs\u2014it simply regenerates the transaction payload and signing payload so the nonce is current."),(0,i.kt)("p",null,"But what happens when you are ready to sign the transaction?"),(0,i.kt)("h3",{id:"transaction-payloads-and-signing-payloads"},"Transaction Payloads and Signing Payloads"),(0,i.kt)("p",null,"After you submit data during a data collection step, the response returned by the Staking API will look similar to this (NEAR token transfer Flow used for this example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n  "id": "[:flow_id]",\n  "state": "transfer_tx_signature",\n  "actions": [\n  {\n    "name": "refresh_transfer_tx",\n    "inputs": []\n   },\n   {\n    "name": "sign_transfer_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": [\n            "[:signer_pubkey]"\n          ],\n          "transaction_payload": "[:transaction_payload]"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": [\n            "[:signer_pubkey]"\n          ],\n          "transaction_payload": "[:transaction_payload"],\n          "signing_payload": "[:signing_payload]"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "from_account_pubkey": "[:from_account_pubkey]",\n    "from_account_address": "[:from_account_address]",\n    "to_account_address": "[:to_account_address]",\n    "amount": "[:amount]",\n    "transfer_transaction": {\n      "raw": "[:raw_transaction_payload]",\n      "signing_payload": "[:signing_payload]",\n      "signed": null,\n      "hash": "",\n      "status": null,\n      "error": null,\n      "signatures": null\n    }\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-07-07T15:06:45.240Z",\n  "updated_at": "2022-07-07T21:10:25.413Z"\n}\n')),(0,i.kt)("p",null,"Staking API will expect to receive EITHER a signed transaction payload OR an array of signatures obtained from signing the ",(0,i.kt)("inlineCode",{parentName:"p"},"signing_payload"),"."),(0,i.kt)("p",null,"If you provide signatures, then the Staking API will construct the signed transaction payload for you."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Generally speaking, the signing payload is derived from the transaction payload. Signatures are the result of cryptographically signing the signing payload. And a signed transaction payload can be constructed from signatures.")),(0,i.kt)("h3",{id:"confirming-the-transaction-payload"},"Confirming the Transaction Payload"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The transaction payload and the signing payload are clearly not human readable, and it is never advisable to blind sign a transaction"),"."),(0,i.kt)("p",null,"We have published an ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@figmentio/slate"},"NPM package")," used to decode transactions and confirm the details of a given transaction. Details are available in the guide ",(0,i.kt)(o.Z,{to:"/guides/staking-api/figment-signing-transactions",mdxType:"Link"},"Signing Transactions with Figment's NPM Package"),"."),(0,i.kt)("p",null,"We encourage you to explore the code in order to understand how it works. You can run the code locally on your own system. It does not connect to the Staking API endpoints in any way, also you do not provide any identifying information for the transaction."),(0,i.kt)("p",null,"Simply provide the network ID, the operation type, and the transaction payload, and it will confirm the details of the transaction."),(0,i.kt)("p",null,"Similarly, the NPM package will return a signing payload - this should exactly match the one you received in the response from the Staking API. In this way you can be assured that the payload you sign belongs to the same transaction."),(0,i.kt)("h3",{id:"signing-the-transaction"},"Signing the Transaction"),(0,i.kt)("p",null,"If you are using Fireblocks as a custodial solution, check the following page for instructions on using the raw signing capabilities of Fireblocks: ",(0,i.kt)(o.Z,{to:"/guides/staking-api/fireblocks-signing-transactions",mdxType:"Link"},"Signing Transactions with Fireblocks")),(0,i.kt)("p",null,"Otherwise, it will be up to you to understand signing with your unique custody arrangement.\nAs a frame of reference you can follow our guide to using the slate NPM package: ",(0,i.kt)(o.Z,{to:"/guides/staking-api/figment-signing-transactions",mdxType:"Link"},"Signing Transactions with Figment's NPM Package"),". It contains signing capabilities for every network supported by the Staking API - if you have access to the private key of the delegating address, then you can sign with the NPM package.\nYou may review the code to understand how signing is performed for a given network."))}u.isMDXComponent=!0},596:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/staking_api_assign_stake_account-0f010465459c7b9c68fc10b855715d88.png"}}]);