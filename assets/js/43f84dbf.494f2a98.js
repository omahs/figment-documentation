"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1801],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>p});var n=t(7294);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var r=n.createContext({}),f=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=f(e.components);return n.createElement(r.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,c=e.mdxType,i=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=f(t),p=c,u=b["".concat(r,".").concat(p)]||b[p]||l[p]||i;return t?n.createElement(u,o(o({ref:a},s),{},{components:t})):n.createElement(u,o({ref:a},s))}));function p(e,a){var t=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var i=t.length,o=new Array(i);o[0]=b;var d={};for(var r in a)hasOwnProperty.call(a,r)&&(d[r]=a[r]);d.originalType=e,d.mdxType="string"==typeof e?e:c,o[1]=d;for(var f=2;f<i;f++)o[f]=t[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6578:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>f});var n=t(7462),c=(t(7294),t(3905));const i={title:"Submit Signed Nomination Transaction for Broadcast",slug:"/guides/staking-api/polkadot/delegate/submit-signed-nomination-transaction"},o=void 0,d={unversionedId:"guides/staking-api/Polkadot/delegate/submit-signed-transaction-2",id:"guides/staking-api/Polkadot/delegate/submit-signed-transaction-2",title:"Submit Signed Nomination Transaction for Broadcast",description:"After signing the transaction, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Polkadot/delegate/8_submit-signed-transaction-2.mdx",sourceDirName:"guides/staking-api/Polkadot/delegate",slug:"/guides/staking-api/polkadot/delegate/submit-signed-nomination-transaction",permalink:"/guides/staking-api/polkadot/delegate/submit-signed-nomination-transaction",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Submit Signed Nomination Transaction for Broadcast",slug:"/guides/staking-api/polkadot/delegate/submit-signed-nomination-transaction"},sidebar:"docsSidebar",previous:{title:"Sign the Nomination Transaction",permalink:"/guides/staking-api/polkadot/delegate/sign-nomination-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/polkadot/delegate/get-flow-status-delegated"}},r={},f=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],s={toc:f};function l(e){let{components:a,...t}=e;return(0,c.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"After signing the transaction, send a ",(0,c.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,c.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step.\nThe Staking API will broadcast the transaction to the Polkadot network."),(0,c.kt)("h3",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"array"),(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," Signed transaction payload from the previous step's response.")))),(0,c.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-8}","{5-8}":!0},'curl -X PUT \'https://polkadot-slate.datahub.figment.io/api/v1/flows/90a28f6e-09b4-4fe1-aeb4-c8e3720933ab/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n    "name": "sign_nomination_tx",\n    "inputs": {\n        "transaction_payload": "0x290284009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a3166601ee8b719a3b17e67a5918ccd7552ec57bfa9f2b1e94ef04121434f1fc10fb413df73dd29b931bb91612e87f6c9c3abaa2bfbb2d6e1a987c08e55d1dcf4edfd78500000006050400f268995cc38974ce0686df1364875f26f2c32b246ddc18835512c3f9969f5836"\n    }\n}\'\n')),(0,c.kt)("h3",{id:"response"},"Response"),(0,c.kt)("p",null,"With the signed transaction provided, the Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be either:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"nomination_tx_broadcasting")," ","\u2014"," The transaction has been broadcasted and is waiting for confirmation."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"delegated")," ","\u2014"," The transaction is complete and the nomination is active.")),(0,c.kt)("admonition",{title:"note",type:"info"},(0,c.kt)("p",{parentName:"admonition"},"Since nominations on Polkadot activate at the next epoch boundary, the Staking API will also track the nomination and send a webhook notification when it activates. An epoch on Polkadot lasts approximately 24 hours, but can vary.")),(0,c.kt)("h4",{id:"sample-response"},"Sample Response"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3,7}","{3,7}":!0},'{\n  "id": "90a28f6e-09b4-4fe1-aeb4-c8e3720933ab",\n  "state": "nomination_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-10-06T18:37:59.295Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "controller_account_address": "5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh",\n    "controller_proxy_account_address": null,\n    "stash_account_address": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n    "stash_proxy_account_address": null,\n    "validator_addresses": ["5HYYWyhyUQ7Ae11f8fCid58bhJ7ikLHM9bU8A6Ynwoc3dStR"],\n    "reward_destination": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n    "amount": "1.0",\n    "bonding_transaction": {\n      "raw": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e000000000000000000000000000000000000000000000000000000000000000000000000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c1c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n      "signing_payload": "0x0600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c0000004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",\n      "signed": "0xc10284008e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c01feec62b92266c99ce19a4421290b1bfbb56751a783b64ce3d701a5c8ec3e971929000e1849eb07ec7016cc7ff81b67f8a8ae6858b19de6eb313a6871624fbe8d0000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c",\n      "hash": "0x0c0a1e5b08e91eaeb628437d850c147496901b252903bff2d6e40dcb9e1bfe3e",\n      "status": "confirmed",\n      "error": null,\n      "signatures": [],\n      "block_number": 12775946,\n      "proxy": false\n    },\n    "nomination_transaction": {\n      "raw": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e0000000000000000000000000000000000000000000000000000000000000000000000000006050400f268995cc38974ce0686df1364875f26f2c32b246ddc18835512c3f9969f58361c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n      "signing_payload": "0x06050400f268995cc38974ce0686df1364875f26f2c32b246ddc18835512c3f9969f58360000004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",\n      "signed": "0x290284009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a3166601ee8b719a3b17e67a5918ccd7552ec57bfa9f2b1e94ef04121434f1fc10fb413df73dd29b931bb91612e87f6c9c3abaa2bfbb2d6e1a987c08e55d1dcf4edfd78500000006050400f268995cc38974ce0686df1364875f26f2c32b246ddc18835512c3f9969f5836",\n      "hash": "0xa11b85fead33991c4bcae2ac9b4ddf8a7b9aee7ebb46907955745d5e6deb38a7",\n      "status": null,\n      "error": null,\n      "signatures": [],\n      "block_number": 12775987,\n      "proxy": false\n    }\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-06T18:26:22.984Z",\n  "updated_at": "2022-10-06T18:36:59.284Z"\n}\n')))}l.isMDXComponent=!0}}]);