"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3165],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={title:"Create New Delegation Flow",slug:"/guides/staking-api/solana/delegate/create-new-flow"},r=void 0,l={unversionedId:"guides/staking-api/Solana/delegate/create-new-flow",id:"guides/staking-api/Solana/delegate/create-new-flow",title:"Create New Delegation Flow",description:"To initiate the staking process, create a new flow with a POST request to /api/v1/flows.",source:"@site/docs/guides/staking-api/Solana/delegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Solana/delegate",slug:"/guides/staking-api/solana/delegate/create-new-flow",permalink:"/guides/staking-api/solana/delegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Delegation Flow",slug:"/guides/staking-api/solana/delegate/create-new-flow"},sidebar:"docsSidebar",previous:{title:"Delegate",permalink:"/guides/staking-api/solana/delegate"},next:{title:"Create New Staking Account",permalink:"/guides/staking-api/solana/delegate/create-new-stake-account"}},s={},p=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To initiate the staking process, create a new flow with a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flow")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"network_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Network this flow operates on (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"solana"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Chain this flow operates on (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"testnet"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operation")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The operation to perform (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"staking"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," API version to use (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"v1"),") (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X POST \'https://solana-slate.datahub.figment.io/api/v1/flows\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "flow": {\n    "network_code": "solana",\n    "chain_code": "testnet",\n    "operation": "staking",\n    "version": "v1"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," ID of the newly created flow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,i.kt)("p",null,"The response indicates two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assign_stake_account")," ","\u2014"," Use this action if you already have an inactive stake account you want to activate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create_new_stake_account")," ","\u2014"," Use this action if you do not have an inactive stake account and want to create a new one.")),(0,i.kt)("p",null,"Since we want to create a new stake account, we will use the second action. The ",(0,i.kt)("inlineCode",{parentName:"p"},"create_new_stake_account")," action indicates four fields for data collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funding_account_pubkey")," ","\u2014"," The main wallet your SOL will be originating from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stake_authority_pubkey")," ","\u2014"," Grants authority to sign certain staking relation transactions to the provided address. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"funding_account_pubkey"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdraw_authority_pubkey")," ","\u2014"," Grants authority to sign certain withdrawal related transactions to the provided address. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"funding_account_pubkey"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," The amount of SOL to be sent to the stake account. This field should be in full SOL, not in lamports (i.e. if you want to stake 5 SOL, return ",(0,i.kt)("inlineCode",{parentName:"li"},'"amount": 5.0'),"). The Staking API will translate the amount to lamports so you do not have to worry about the conversion factor. Lamports are fractional SOLs.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6,35,38,50,57,64}","{2-3,6,35,38,50,57,64}":!0},'{\n  "id": "436bd609-48fc-46c4-bde8-1aa921ff2ef5",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "assign_stake_account",\n      "inputs": [\n        {\n          "name": "stake_account_pubkey",\n          "display": "Stake Account Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "funding_account_pubkey",\n          "display": "Funding Account Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "create_new_stake_account",\n      "inputs": [\n        {\n          "name": "funding_account_pubkey",\n          "display": "Funding Account Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "stake_authority_pubkey",\n          "display": "Stake Authority Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": []\n        },\n        {\n          "name": "withdraw_authority_pubkey",\n          "display": "Withdraw Authority Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": []\n        },\n        {\n          "name": "amount",\n          "display": "Amount (SOL)",\n          "description": "Amount in SOL",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            },\n            {\n              "type": "precision",\n              "options": {\n                "max": 9\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "data": {\n    "stake_account_pubkey": null,\n    "create_stake_account_transaction": null,\n    "funding_account_pubkey": null,\n    "stake_authority_pubkey": null,\n    "withdraw_authority_pubkey": null,\n    "amount": null,\n    "validator_address": null,\n    "delegate_transaction": null,\n    "delegation_active_amount": null,\n    "delegation_inactive_amount": null,\n    "delegation_status": null,\n    "delegation_status_error": null,\n    "estimated_active_at": null\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-04T19:05:21.115Z",\n  "updated_at": "2022-10-04T19:05:21.115Z"\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Learn more about account authorities: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/staking/stake-accounts#understanding-account-authorities"},"https://docs.solana.com/staking/stake-accounts#understanding-account-authorities")),(0,i.kt)("p",{parentName:"admonition"},"Learn more about lamports: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/terminology#lamport"},"https://docs.solana.com/terminology#lamport"))))}c.isMDXComponent=!0}}]);