"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5324],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5948:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={title:"Create a New Flow"},l=void 0,o={unversionedId:"guides/staking-api/Near/undelegate/create-new-flow",id:"guides/staking-api/Near/undelegate/create-new-flow",title:"Create a New Flow",description:"To initiate the undelegation process with Staking API firstly we need to create a new Flow with POST /api/v1/flows.",source:"@site/docs/guides/staking-api/Near/undelegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Near/undelegate",slug:"/guides/staking-api/Near/undelegate/create-new-flow",permalink:"/guides/staking-api/Near/undelegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a New Flow"},sidebar:"docsSidebar",previous:{title:"Un-Delegate",permalink:"/guides/staking-api/Near/undelegate/"},next:{title:"Submit Un-Delegate Data",permalink:"/guides/staking-api/Near/undelegate/submit-undelegate-data"}},s={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To initiate the undelegation process with Staking API firstly we need to create a new Flow with ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /api/v1/flows"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flow")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"network_code")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Network this flow operates on (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_code")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Chain this flow operates on (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operation")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The operation to perform (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," API version to use (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'curl -X POST \'https://near-slate.datahub.figment.io/api/v1/flows\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: <api_key>\' \\\n--data \'{\n  // highlight-start\n  "flow": {\n    "network_code": "near",\n    "chain_code": "testnet",\n    "operation": "unstaking",\n    "version": "v1"\n  }\n  // highlight-end\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," ID of the newly created flow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,i.kt)("p",null,"The response indicates one possible action:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create_undelegate_tx")," - use this action to generate an undelegation transaction to unstake your NEAR.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"create_undelegate_tx")," action indicates five fields for data collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_address")," \u2014 The delegator address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_pubkey")," \u2014 The public key of the signing account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_address")," \u2014 Validator address from which NEAR will be un-delegated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undelegate_amount")," \u2014 The amount of NEAR to be un-delegated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undelegate_maximum")," \u2014 Set to true if you wish to unbond the full delegated balance without needing to know the exact delegated balance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_gas")," \u2014 Adjust if you wish to limit the possible transaction fee.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "96237daf-973a-456b-ae07-a5e16eeffbd1",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_withdraw_tx",\n      "inputs": [\n        {\n          "name": "delegator_address",\n          "display": "Delegator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "delegator_pubkey",\n          "display": "Delegator Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_address",\n          "display": "Validator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "is_validator",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "withdraw_amount",\n          "display": "Withdraw Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {\n                "unless": "withdraw_maximum"\n              }\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "unless": "withdraw_maximum",\n                "greater_than": 0\n              }\n            },\n            {\n              "type": "withdrawal_availability",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            },\n            {\n              "type": "withdrawal_balance",\n              "options": {\n                "unless": true,\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "withdraw_maximum",\n          "display": "Withdraw Maximum",\n          "description": "",\n          "type": "boolean",\n          "validations": []\n        },\n        {\n          "name": "max_gas",\n          "display": "Max Gas",\n          "description": "",\n          "type": "decimal",\n          "validations": []\n        }\n      ]\n    },\n    {\n      "name": "create_undelegate_tx",\n      "inputs": [\n        {\n          "name": "delegator_address",\n          "display": "Delegator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "delegator_pubkey",\n          "display": "Delegator Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_address",\n          "display": "Validator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "is_validator",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "undelegate_amount",\n          "display": "Undelegate Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {\n                "unless": "undelegate_maximum"\n              }\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "unless": "undelegate_maximum",\n                "greater_than": 0\n              }\n            },\n            {\n              "type": "staked_balance",\n              "options": {\n                "unless": true,\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "undelegate_maximum",\n          "display": "Undelegate Maximum",\n          "description": "",\n          "type": "boolean",\n          "validations": []\n        },\n        {\n          "name": "max_gas",\n          "display": "Max Gas",\n          "description": "",\n          "type": "decimal",\n          "validations": []\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": null,\n    "delegator_pubkey": null,\n    "validator_address": null,\n    "max_gas": null,\n    "undelegate_amount": null,\n    "undelegate_maximum": null,\n    "undelegate_transaction": null,\n    "estimated_inactive_at": null,\n    "withdraw_amount": null,\n    "withdraw_maximum": null,\n    "withdraw_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T16:15:50.379Z",\n  "updated_at": "2022-09-26T16:15:50.379Z"\n}\n')))}u.isMDXComponent=!0}}]);