"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Submit Transfer Data",slug:"/guides/staking-api/near/transfer/submit-transfer-data"},s=void 0,o={unversionedId:"guides/staking-api/Near/transfer/submit-transfer-data",id:"guides/staking-api/Near/transfer/submit-transfer-data",title:"Submit Transfer Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to move on to the next step.",source:"@site/docs/guides/staking-api/Near/transfer/2_submit-transfer-data.mdx",sourceDirName:"guides/staking-api/Near/transfer",slug:"/guides/staking-api/near/transfer/submit-transfer-data",permalink:"/guides/staking-api/near/transfer/submit-transfer-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Transfer Data",slug:"/guides/staking-api/near/transfer/submit-transfer-data"},sidebar:"docsSidebar",previous:{title:"Create New Transfer Flow",permalink:"/guides/staking-api/near/transfer/create-new-flow"},next:{title:"Sign the Transfer Transaction",permalink:"/guides/staking-api/near/transfer/sign-transfer-transaction"}},l={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required inputs, send a ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to move on to the next step."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute - ",(0,r.kt)("inlineCode",{parentName:"li"},"create_transfer_tx"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from_account_pubkey")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The account that will sign the transaction (required)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from_account_address")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," the address which NEAR will be transferred from (required)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_account_address")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The address to which NEAR will be transferred (required)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," The amount of NEAR to be transferred (required).")))),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X PUT \'https://near-slate.datahub.figment.io/api/v1/flows/5f0962d5-fba0-453c-bf35-0dad79624b59/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "create_transfer_tx",\n  "inputs": {\n    "from_account_address": "slate-demo.testnet",\n    "from_account_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "to_account_address": "pizza.testnet",\n    "amount": "10"\n  }\n}\'\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"Note that in this response you can find the unsigned, serialized transaction in ",(0,r.kt)("inlineCode",{parentName:"p"},"data[create_deposit_transaction][raw]"),"."),(0,r.kt)("p",null,"The response indicates two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_deposit_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the nonce has increased)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_deposit_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,r.kt)("p",null,"We will choose ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_deposit_tx"),", which indicates one Input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "5f0962d5-fba0-453c-bf35-0dad79624b59",\n  "state": "transfer_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_transfer_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_transfer_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY"],\n          "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3906cc1038fc5700000d00000070697a7a612e746573746e657490121aa419ea5a902edec74ac78626fd251b8466f4c637f3ded5f0898014448001000000030000004a480114169545080000000000"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY"],\n          "transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3906cc1038fc5700000d00000070697a7a612e746573746e657490121aa419ea5a902edec74ac78626fd251b8466f4c637f3ded5f0898014448001000000030000004a480114169545080000000000",\n          "signing_payload": "a7ee9bc8e05b776636571edcf4f8b6e679bb53568e384f905f3e4f682eaebcfc"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "from_account_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "from_account_address": "slate-demo.testnet",\n    "to_account_address": "pizza.testnet",\n    "amount": "10.0",\n    "transfer_transaction": {\n      "raw": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3906cc1038fc5700000d00000070697a7a612e746573746e657490121aa419ea5a902edec74ac78626fd251b8466f4c637f3ded5f0898014448001000000030000004a480114169545080000000000",\n      "signing_payload": "a7ee9bc8e05b776636571edcf4f8b6e679bb53568e384f905f3e4f682eaebcfc",\n      "signed": null,\n      "hash": "CJY7WBZVnMFWfRteZgHAkf1SgfwnqRvm7K8SsMTiQUSX",\n      "status": null,\n      "error": null,\n      "signatures": null\n    }\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T16:33:20.109Z",\n  "updated_at": "2022-09-26T16:45:15.042Z"\n}\n')),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}p.isMDXComponent=!0}}]);