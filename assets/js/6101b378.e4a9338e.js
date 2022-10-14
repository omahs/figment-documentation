"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2052],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return a?n.createElement(m,o(o({ref:t},f),{},{components:a})):n.createElement(m,o({ref:t},f))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={title:"Get Flow Status",slug:"/guides/staking-api/near/transfer/get-flow-status-transferred"},o=void 0,i={unversionedId:"guides/staking-api/Near/transfer/get-flow-status",id:"guides/staking-api/Near/transfer/get-flow-status",title:"Get Flow Status",description:"To refresh the transaction state and get the latest status of the existing flow we'll be using the flow ID from the previous step.",source:"@site/docs/guides/staking-api/Near/transfer/5_get-flow-status.mdx",sourceDirName:"guides/staking-api/Near/transfer",slug:"/guides/staking-api/near/transfer/get-flow-status-transferred",permalink:"/guides/staking-api/near/transfer/get-flow-status-transferred",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/near/transfer/get-flow-status-transferred"},sidebar:"docsSidebar",previous:{title:"Submit Signed Transfer Transaction for Broadcast",permalink:"/guides/staking-api/near/transfer/submit-signed-transaction"},next:{title:"Delegate",permalink:"/guides/staking-api/polkadot/delegate"}},l={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Token Transfer Flow Complete",id:"token-transfer-flow-complete",level:3}],f={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To refresh the transaction state and get the latest status of the existing flow we'll be using the flow ID from the previous step."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://near-slate.datahub.figment.io/api/v1/flows/5f0962d5-fba0-453c-bf35-0dad79624b59' \\\n-H 'Authorization: <api_key>'\n")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_tx_broadcasting")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"transfered"),".")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "5f0962d5-fba0-453c-bf35-0dad79624b59",\n  "state": "transfered",\n  "actions": [],\n  "data": {\n    "from_account_pubkey": "ed25519:5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n    "from_account_address": "slate-demo.testnet",\n    "to_account_address": "pizza.testnet",\n    "amount": "10.0",\n    "transfer_transaction": {\n      "raw": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3906cc1038fc5700000d00000070697a7a612e746573746e657490121aa419ea5a902edec74ac78626fd251b8466f4c637f3ded5f0898014448001000000030000004a480114169545080000000000",\n      "signing_payload": "a7ee9bc8e05b776636571edcf4f8b6e679bb53568e384f905f3e4f682eaebcfc",\n      "signed": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3906cc1038fc5700000d00000070697a7a612e746573746e657490121aa419ea5a902edec74ac78626fd251b8466f4c637f3ded5f0898014448001000000030000004a48011416954508000000000000e7a0bf4947796c6c2962084dccd3c97fa1b78de1fab4765ab3d2cadf3e6c90b6290d5aae0a79b7c0a5bc31120210591135a7604fcc12ecc4b3b34d7513e73a0b",\n      "hash": "CJY7WBZVnMFWfRteZgHAkf1SgfwnqRvm7K8SsMTiQUSX",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    }\n  },\n  "network_code": "near",\n  "chain_code": "testnet",\n  "created_at": "2022-09-26T16:33:20.109Z",\n  "updated_at": "2022-09-26T16:49:49.708Z"\n}\n')),(0,r.kt)("h3",{id:"token-transfer-flow-complete"},"Token Transfer Flow Complete"),(0,r.kt)("p",null,"Congratulations, you have successfully transfered your tokens!"))}d.isMDXComponent=!0}}]);