"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3378],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={title:"Create New Delegation Flow",slug:"/guides/staking-api/near/delegate/create-new-flow"},l=void 0,o={unversionedId:"guides/staking-api/Near/delegate/create-new-flow",id:"guides/staking-api/Near/delegate/create-new-flow",title:"Create New Delegation Flow",description:"To initiate the staking process, create a new flow with a POST request to /api/v1/flows.",source:"@site/docs/guides/staking-api/Near/delegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Near/delegate",slug:"/guides/staking-api/near/delegate/create-new-flow",permalink:"/guides/staking-api/near/delegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Delegation Flow",slug:"/guides/staking-api/near/delegate/create-new-flow"},sidebar:"docsSidebar",previous:{title:"Delegate",permalink:"/guides/staking-api/near/delegate"},next:{title:"Submit Delegate Data",permalink:"/guides/staking-api/near/delegate/submit-delegate-data"}},s={},p=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To initiate the staking process, create a new flow with a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flow")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"network_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Network this flow operates on (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"near"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Chain this flow operates on (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"mainnet"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operation")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The operation to perform (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"staking"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," API version to use (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"v1"),") (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X POST \'https://near-slate.datahub.figment.io/api/v1/flows\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "flow": {\n    "network_code": "near",\n    "chain_code": "testnet",\n    "operation": "staking",\n    "version": "v1"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," ID of the newly created flow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,i.kt)("p",null,"The response indicates one possible ",(0,i.kt)("inlineCode",{parentName:"p"},"action"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"create_delegate_tx")," ","\u2014"," Use this action to generate a delegation transaction to stake your NEAR."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"create_delegate_tx")," action indicates five fields for data collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_address")," ","\u2014"," Figment validator address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_address")," ","\u2014"," The delegating address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegator_pubkey")," ","\u2014"," The public key of the signing account. Must start with ",(0,i.kt)("inlineCode",{parentName:"li"},"ed25519:"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," The amount of NEAR to be delegated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_gas")," ","\u2014"," Adjust if you wish to limit the possible transaction fee.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6,9,28,40,58,76}","{2-3,6,9,28,40,58,76}":!0},'{\n  "id": "aeb7503c-27c8-4184-8537-8f4a77f694a9",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_delegate_tx",\n      "inputs": [\n        {\n          "name": "delegator_address",\n          "display": "Delegator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "account_balance",\n              "options": {\n                "on": "with_on_chain_validations",\n                "greater_than_or_equal_to": null\n              }\n            }\n          ]\n        },\n        {\n          "name": "delegator_pubkey",\n          "display": "Delegator Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "validator_address",\n          "display": "Validator Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "is_validator",\n              "options": {\n                "on": "with_on_chain_validations"\n              }\n            }\n          ]\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            }\n          ]\n        },\n        {\n          "name": "max_gas",\n          "display": "Max Gas",\n          "description": "",\n          "type": "decimal",\n          "validations": []\n        }\n      ]\n    }\n  ],\n  "data": {\n    "delegator_address": null,\n    "delegator_pubkey": null,\n    "validator_address": null,\n    "amount": null,\n    "max_gas": null,\n    "delegate_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T15:24:43.720Z",\n  "updated_at": "2022-09-26T15:24:43.720Z"\n}\n')))}c.isMDXComponent=!0}}]);