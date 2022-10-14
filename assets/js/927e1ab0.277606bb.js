"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[6901],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>b});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=i,f=p["".concat(s,".").concat(b)]||p[b]||u[b]||r;return t?n.createElement(f,o(o({ref:a},l),{},{components:t})):n.createElement(f,o({ref:a},l))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9464:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const r={title:"Submit Deactivate Transaction Data",slug:"/guides/staking-api/solana/undelegate/submit-deactivate-transaction-data"},o=void 0,c={unversionedId:"guides/staking-api/Solana/undelegate/submit-deactivate-transaction-data",id:"guides/staking-api/Solana/undelegate/submit-deactivate-transaction-data",title:"Submit Deactivate Transaction Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Solana/undelegate/2_submit-deactivate-transaction-data.mdx",sourceDirName:"guides/staking-api/Solana/undelegate",slug:"/guides/staking-api/solana/undelegate/submit-deactivate-transaction-data",permalink:"/guides/staking-api/solana/undelegate/submit-deactivate-transaction-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Deactivate Transaction Data",slug:"/guides/staking-api/solana/undelegate/submit-deactivate-transaction-data"},sidebar:"docsSidebar",previous:{title:"Create New Undelegation Flow",permalink:"/guides/staking-api/solana/undelegate/create-new-flow"},next:{title:"Sign the Deactivate Transaction",permalink:"/guides/staking-api/solana/undelegate/sign-deactivate-transaction"}},s={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],l={toc:d};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After collecting the required inputs, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funding_account_pubkey")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The address of the stake account to be deactivated (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stake_account_pubkey")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The address of the wallet with signing rights to deactivate the stake account (required).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-9}","{5-9}":!0},'curl -X PUT \'https://solana-slate.datahub.figment.io/api/v1/flows/b5fb1f97-bd9d-4207-bfe1-112d33309820/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n    "name": "create_deactivate_tx",\n    "inputs": {\n        "stake_account_pubkey": "FNN2VwQy5TMkVegyXyejbwKL5S1SvRkmYHkoK62FReo7",\n        "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can find the unsigned, serialized transaction in ",(0,i.kt)("inlineCode",{parentName:"p"},"data[create_deactivate_transaction][raw]"),".")),(0,i.kt)("p",null,"There are two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_deactivate_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the recent blockhash has expired)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_deactivate_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("p",null,"We will choose ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_deactivate_tx"),", which indicates one input to collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6,10,19}","{2-3,6,10,19}":!0},'{\n  "id": "b5fb1f97-bd9d-4207-bfe1-112d33309820",\n  "state": "deactivate_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_deactivate_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_deactivate_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy"],\n          "transaction_payload": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b21000000005afa09621c026f3bee396f91e3f6f77ab70c6b9160e7fa8ee35a89f82611914e0102030103000405000000"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy"],\n          "transaction_payload": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b21000000005afa09621c026f3bee396f91e3f6f77ab70c6b9160e7fa8ee35a89f82611914e0102030103000405000000",\n          "signing_payload": "01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b21000000005afa09621c026f3bee396f91e3f6f77ab70c6b9160e7fa8ee35a89f82611914e0102030103000405000000"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "stake_account_pubkey": "FNN2VwQy5TMkVegyXyejbwKL5S1SvRkmYHkoK62FReo7",\n    "stake_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "withdraw_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "deactivate_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b21000000005afa09621c026f3bee396f91e3f6f77ab70c6b9160e7fa8ee35a89f82611914e0102030103000405000000",\n      "signing_payload": "01000204f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e712606a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b21000000005afa09621c026f3bee396f91e3f6f77ab70c6b9160e7fa8ee35a89f82611914e0102030103000405000000",\n      "signed": null,\n      "hash": null,\n      "status": null,\n      "error": null,\n      "signatures": null\n    },\n    "delegation_active_amount": null,\n    "delegation_inactive_amount": null,\n    "delegation_status": null,\n    "delegation_status_error": null,\n    "recipient_pubkey": null,\n    "withdraw_amount": null,\n    "withdraw_transaction": null,\n    "withdraw_transaction_funding_account_pubkey": null,\n    "estimated_inactive_at": null\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-05T17:37:31.573Z",\n  "updated_at": "2022-10-05T17:43:53.209Z"\n}\n')),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}u.isMDXComponent=!0}}]);