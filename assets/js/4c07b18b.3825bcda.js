"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,b=p["".concat(s,".").concat(u)]||p[u]||f[u]||i;return a?n.createElement(b,o(o({ref:t},l),{},{components:a})):n.createElement(b,o({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"Submit Signed Transaction for Broadcast"},o=void 0,d={unversionedId:"guides/staking-api/Near/delegate/submit-signed-transaction",id:"guides/staking-api/Near/delegate/submit-signed-transaction",title:"Submit Signed Transaction for Broadcast",description:"After signing the transaction, you will PUT /api/v1/flows/[:flow_id]/next (as always!) and the Staking API will manage broadcasting the transaction to the NEAR network.",source:"@site/docs/guides/staking-api/Near/delegate/4_submit-signed-transaction.mdx",sourceDirName:"guides/staking-api/Near/delegate",slug:"/guides/staking-api/Near/delegate/submit-signed-transaction",permalink:"/guides/staking-api/Near/delegate/submit-signed-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit Signed Transaction for Broadcast"},sidebar:"docsSidebar",previous:{title:"Sign the Deposit Transaction",permalink:"/guides/staking-api/Near/delegate/sign-deposit-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/Near/delegate/get_flow_status"}},s={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],l={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After signing the transaction, you will ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," (as always!) and the Staking API will manage broadcasting the transaction to the NEAR network."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," - Signed transaction payload from the previous step's response.")))),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'curl -X PUT \'https://near-slate.datahub.figment.io/api/v1/flows/aeb7503c-27c8-4184-8537-8f4a77f694a9/next\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: <api_key>\' \\\n--data   \'{\n    // highlight-start\n  "name": "sign_delegate_tx",\n  "inputs": {\n    "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3904cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d309ab9d36f31580c94fcf7eace07f4a286a6f69cdd3caef0efed5d78930df546880100000002110000006465706f7369745f616e645f7374616b65020000007b7d00e057eb481b0000000000b9340332b7f4ad14000000000000cd7538bc1db22a72cbaa19f54e9df00b9444863c74eefd5897d2ebbb7a52e7f8042d675c09d40684b7f7dd17feb73ecd09f6ae08c33e7f82450b438694f5430e"\n  }\n  // highlight-end\n}\'\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"With the signed transaction payload provided, Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegate_tx_broadcasting")," \u2014 Transaction has been broadcast and confirmed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegated")," \u2014 Transaction has been confirmed.")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "aeb7503c-27c8-4184-8537-8f4a77f694a9",\n  // highlight-next-line\n  "state": "delegate_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-09-26T16:06:15.163Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "delegator_address": "slate-demo.testnet",\n    "delegator_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "validator_address": "01node.pool.f863973.m0",\n    "amount": "25.0",\n    "max_gas": null,\n    "delegate_transaction": {\n      "raw": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3904cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d309ab9d36f31580c94fcf7eace07f4a286a6f69cdd3caef0efed5d78930df546880100000002110000006465706f7369745f616e645f7374616b65020000007b7d00e057eb481b0000000000b9340332b7f4ad140000000000",\n      "signing_payload": "1a45dcf2292e9f43ddb2053ed913ca84291a820549be5b04075f6e2719173fd0",\n      "signed": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3904cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d309ab9d36f31580c94fcf7eace07f4a286a6f69cdd3caef0efed5d78930df546880100000002110000006465706f7369745f616e645f7374616b65020000007b7d00e057eb481b0000000000b9340332b7f4ad14000000000000cd7538bc1db22a72cbaa19f54e9df00b9444863c74eefd5897d2ebbb7a52e7f8042d675c09d40684b7f7dd17feb73ecd09f6ae08c33e7f82450b438694f5430e",\n      "hash": "2mZPUCSVnhKNL1LwWtGXpMzzck9xgVJRtn5g8fJgwTWP",\n      "status": null,\n      "error": null,\n      "signatures": []\n    }\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T15:24:43.720Z",\n  "updated_at": "2022-09-26T16:05:13.939Z"\n}\n')))}f.isMDXComponent=!0}}]);