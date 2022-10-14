"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"Create New Undelegation Flow",slug:"/guides/staking-api/solana/undelegate/create-new-flow"},l=void 0,o={unversionedId:"guides/staking-api/Solana/undelegate/create-new-flow",id:"guides/staking-api/Solana/undelegate/create-new-flow",title:"Create New Undelegation Flow",description:"To initiate the undelegation process, create a new flow with a POST request to /api/v1/flows.",source:"@site/docs/guides/staking-api/Solana/undelegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Solana/undelegate",slug:"/guides/staking-api/solana/undelegate/create-new-flow",permalink:"/guides/staking-api/solana/undelegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Undelegation Flow",slug:"/guides/staking-api/solana/undelegate/create-new-flow"},sidebar:"docsSidebar",previous:{title:"Undelegate",permalink:"/guides/staking-api/solana/undelegate"},next:{title:"Submit Deactivate Transaction Data",permalink:"/guides/staking-api/solana/undelegate/submit-deactivate-transaction-data"}},s={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To initiate the undelegation process, create a new flow with a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),"."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flow")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"network_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Network this flow operates on (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"solana"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Chain this flow operates on (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"mainnet"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"testnet"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operation")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The operation to perform (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"unstaking"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," API version to use (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"v1"),") (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X POST \'https://solana-slate.datahub.figment.io/api/v1/flows\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "flow": {\n    "network_code": "solana",\n    "chain_code": "testnet",\n    "operation": "unstaking",\n    "version": "v1"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," ID of the newly created flow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,i.kt)("p",null,"The response indicates one possible action:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create_deactivate_tx")," ","\u2014"," Collect the data needed to build a stake deactivation transaction and submit back to the Staking API.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"create_deactivate_tx")," action indicates two fields to be collected:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stake_account_pubkey")," ","\u2014"," The address of the stake account to be deactivated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funding_account_pubkey")," ","\u2014"," The address of the wallet with signing rights to deactivate the stake account.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6}","{2-3,6}":!0},'{\n  "id": "b5fb1f97-bd9d-4207-bfe1-112d33309820",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_deactivate_tx",\n      "inputs": [\n        {\n          "name": "stake_account_pubkey",\n          "display": "Stake Account Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "funding_account_pubkey",\n          "display": "Funding Account Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "data": {\n    "funding_account_pubkey": null,\n    "stake_account_pubkey": null,\n    "stake_authority_pubkey": null,\n    "withdraw_authority_pubkey": null,\n    "deactivate_transaction": null,\n    "delegation_active_amount": null,\n    "delegation_inactive_amount": null,\n    "delegation_status": null,\n    "delegation_status_error": null,\n    "recipient_pubkey": null,\n    "withdraw_amount": null,\n    "withdraw_transaction": null,\n    "withdraw_transaction_funding_account_pubkey": null,\n    "estimated_inactive_at": null\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-05T17:37:31.573Z",\n  "updated_at": "2022-10-05T17:37:31.573Z"\n}\n')))}c.isMDXComponent=!0}}]);