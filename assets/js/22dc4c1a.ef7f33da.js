"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[6963],{3905:(e,a,t)=>{t.d(a,{Zo:()=>b,kt:()=>p});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=n.createContext({}),s=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},b=function(e){var a=s(e.components);return n.createElement(r.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,c=e.originalType,r=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(t),p=i,f=u["".concat(r,".").concat(p)]||u[p]||l[p]||c;return t?n.createElement(f,d(d({ref:a},b),{},{components:t})):n.createElement(f,d({ref:a},b))}));function p(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var c=t.length,d=new Array(c);d[0]=u;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var s=2;s<c;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3709:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>d,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const c={title:"Submit a Signed Deactivate Transaction for Broadcast",slug:"/guides/staking-api/solana/undelegate/submit-signed-deactivate-transaction"},d=void 0,o={unversionedId:"guides/staking-api/Solana/undelegate/submit-signed-transaction",id:"guides/staking-api/Solana/undelegate/submit-signed-transaction",title:"Submit a Signed Deactivate Transaction for Broadcast",description:"After signing the transaction, send a PUT request to /api/v1/flows/[:flow_id]/next with the signed payload.",source:"@site/docs/guides/staking-api/Solana/undelegate/4_submit-signed-transaction.mdx",sourceDirName:"guides/staking-api/Solana/undelegate",slug:"/guides/staking-api/solana/undelegate/submit-signed-deactivate-transaction",permalink:"/guides/staking-api/solana/undelegate/submit-signed-deactivate-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit a Signed Deactivate Transaction for Broadcast",slug:"/guides/staking-api/solana/undelegate/submit-signed-deactivate-transaction"},sidebar:"docsSidebar",previous:{title:"Sign the Deactivate Transaction",permalink:"/guides/staking-api/solana/undelegate/sign-deactivate-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/solana/undelegate/get-flow-status-deactivated"}},r={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Sample cURL Request To Refresh The Transaction",id:"sample-curl-request-to-refresh-the-transaction",level:4},{value:"Sample Updated Response",id:"sample-updated-response",level:4}],b={toc:s};function l(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After signing the transaction, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," with the signed payload.\nThe Staking API will broadcast the transaction to the Solana network."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," Signed transaction payload from the previous step's response.")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-8}","{5-8}":!0},'curl -X PUT \'https://solana-slate.datahub.figment.io/api/v1/flows/b5fb1f97-bd9d-4207-bfe1-112d33309820/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n    "name": "sign_deactivate_tx",\n    "inputs": {\n        "transaction_payload": "0152c4cb266798cfe2cf1f542d6713ccc365e6052282301aee4292217326c0dff37ca07a39df7930b96570242b5b7405ce2bde1f748f75c1b9e833829cbdc9520b01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"With the signed transaction provided, Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deactivate_tx_broadcasting")," ","\u2014"," Transaction has been broadcast but not confirmed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cool_down")," ","\u2014"," Transaction is under cool down period.")),(0,i.kt)("p",null,"Upon transaction finalization, the stake account will start the process of deactivating.\nThis generally happens at the next epoch boundary (max 2.5 days), but if there is a large change in network wide delegation levels it is possible it will be subjected to a multi-epoch cooldown period.\nThis would mean that a portion of the stake will deactivate at each epoch boundary for a few epochs, until it is fully deactivated."),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "b5fb1f97-bd9d-4207-bfe1-112d33309820",\n  "state": "deactivate_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-10-05T17:50:06.014Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "stake_account_pubkey": "FNN2VwQy5TMkVegyXyejbwKL5S1SvRkmYHkoK62FReo7",\n    "stake_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "withdraw_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "deactivate_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "signing_payload": "01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "signed": "0152c4cb266798cfe2cf1f542d6713ccc365e6052282301aee4292217326c0dff37ca07a39df7930b96570242b5b7405ce2bde1f748f75c1b9e833829cbdc9520b01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "hash": "2eynfQTjXTcJSTmsVSgPKNefVLKG6sJEx1ArhtWqieHXuQ3UnYHvcvaArscjsaCz2WBuSTTALNf6rAaCj9iN8Ddk",\n      "status": null,\n      "error": null,\n      "signatures": []\n    },\n    "delegation_active_amount": null,\n    "delegation_inactive_amount": null,\n    "delegation_status": null,\n    "delegation_status_error": null,\n    "recipient_pubkey": null,\n    "withdraw_amount": null,\n    "withdraw_transaction": null,\n    "withdraw_transaction_funding_account_pubkey": null,\n    "estimated_inactive_at": null\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-05T17:37:31.573Z",\n  "updated_at": "2022-10-05T17:49:05.858Z"\n}\n')),(0,i.kt)("h4",{id:"sample-curl-request-to-refresh-the-transaction"},"Sample cURL Request To Refresh The Transaction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET https://solana-slate.datahub.figment.io/api/v1/flows/b5fb1f97-bd9d-4207-bfe1-112d33309820 \\\n-H 'Authorization: <api_key>'\n")),(0,i.kt)("h4",{id:"sample-updated-response"},"Sample Updated Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "b5fb1f97-bd9d-4207-bfe1-112d33309820",\n  "state": "cool_down",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-10-07T14:30:23.200Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "stake_account_pubkey": "FNN2VwQy5TMkVegyXyejbwKL5S1SvRkmYHkoK62FReo7",\n    "stake_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "withdraw_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "deactivate_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "signing_payload": "01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "signed": "0152c4cb266798cfe2cf1f542d6713ccc365e6052282301aee4292217326c0dff37ca07a39df7930b96570242b5b7405ce2bde1f748f75c1b9e833829cbdc9520b01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b2100000000f40a7dc3da4a140d6dbc49cb6652f7a652896f98d99b63bb63027fbb5b6c26000102030103000405000000",\n      "hash": "2eynfQTjXTcJSTmsVSgPKNefVLKG6sJEx1ArhtWqieHXuQ3UnYHvcvaArscjsaCz2WBuSTTALNf6rAaCj9iN8Ddk",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    },\n    "delegation_active_amount": "1497717120.0",\n    "delegation_inactive_amount": "0.0",\n    "delegation_status": "deactivating",\n    "delegation_status_error": null,\n    "recipient_pubkey": null,\n    "withdraw_amount": null,\n    "withdraw_transaction": null,\n    "withdraw_transaction_funding_account_pubkey": null,\n    "estimated_inactive_at": "2022-10-07T14:30:23.200Z"\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-05T17:37:31.573Z",\n  "updated_at": "2022-10-05T17:49:20.724Z"\n}\n')),(0,i.kt)("p",null,"State is now updated from ",(0,i.kt)("inlineCode",{parentName:"p"},"deactivate_tx_broadcasting")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"cool_down"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Read more about the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/cluster/stake-delegation-and-rewards#stake-warmup-cooldown-withdrawal"},"warmup and cooldown period"),".")),(0,i.kt)("p",null,"At each epoch, a WebHook notifies you about how much of the stake has deactivated, until it is fully deactivated."))}l.isMDXComponent=!0}}]);