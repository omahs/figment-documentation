"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1967],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"Create New Transfer Flow",slug:"/guides/staking-api/near/transfer/create-new-flow"},o=void 0,l={unversionedId:"guides/staking-api/Near/transfer/create-new-flow",id:"guides/staking-api/Near/transfer/create-new-flow",title:"Create New Transfer Flow",description:"To initiate the transfer process, create a new flow with a POST request to /api/v1/flows.",source:"@site/docs/guides/staking-api/Near/transfer/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Near/transfer",slug:"/guides/staking-api/near/transfer/create-new-flow",permalink:"/guides/staking-api/near/transfer/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Transfer Flow",slug:"/guides/staking-api/near/transfer/create-new-flow"},sidebar:"docsSidebar",previous:{title:"Transfer",permalink:"/guides/staking-api/near/transfer"},next:{title:"Submit Transfer Data",permalink:"/guides/staking-api/near/transfer/submit-transfer-data"}},s={},p=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To initiate the transfer process, create a new flow with a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),"."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flow")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network_code")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Network this flow operates on (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"near"),") (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chain_code")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," Chain this flow operates on (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"testnet"),") (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operation")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," The operation to perform (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"transfer"),") (required)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," API version to use (ex. ",(0,a.kt)("inlineCode",{parentName:"li"},"v1"),") (optional).")))),(0,a.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X POST \'https://near-slate.datahub.figment.io/api/v1/flows\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "flow": {\n    "network_code": "near",\n    "chain_code": "testnet",\n    "operation": "transfer",\n    "version": "v1"\n  }\n}\'\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," ID of the newly created flow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,a.kt)("p",null,"The response indicates one possible action:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create_transfer_tx"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_transfer_tx")," action indicates seven fields for data collection:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from_account_address")," ","\u2014"," The address from which NEAR will be transferred."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from_account_pubkey")," ","\u2014"," The account that will sign the transaction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"to_account_address")," ","\u2014"," The address to which NEAR will be transferred."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," The amount of NEAR to be transferred.")),(0,a.kt)("h4",{id:"sample-response"},"Sample Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6,9,21,33,45}","{2-3,6,9,21,33,45}":!0},'{\n  "id": "5f0962d5-fba0-453c-bf35-0dad79624b59",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "create_transfer_tx",\n      "inputs": [\n        {\n          "name": "from_account_pubkey",\n          "display": "From Account Pubkey",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "from_account_address",\n          "display": "From Account Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "to_account_address",\n          "display": "To Account Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            },\n            {\n              "type": "numericality",\n              "options": {\n                "greater_than": 0\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "data": {\n    "from_account_pubkey": null,\n    "from_account_address": null,\n    "to_account_address": null,\n    "amount": null,\n    "transfer_transaction": null\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T16:33:20.109Z",\n  "updated_at": "2022-09-26T16:33:20.109Z"\n}\n')))}u.isMDXComponent=!0}}]);