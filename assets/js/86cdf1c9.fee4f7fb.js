"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4541],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,b=p["".concat(i,".").concat(u)]||p[u]||f[u]||r;return a?n.createElement(b,c(c({ref:t},l),{},{components:a})):n.createElement(b,c({ref:t},l))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var d=2;d<r;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={title:"Get Flow Status",slug:"/guides/staking-api/polkadot/delegate/get-flow-status-bonding_complete"},c=void 0,s={unversionedId:"guides/staking-api/Polkadot/delegate/get-flow-status-1",id:"guides/staking-api/Polkadot/delegate/get-flow-status-1",title:"Get Flow Status",description:"To refresh the transaction state and get the latest status of the existing flow we'll be using the flow ID from the previous step.",source:"@site/docs/guides/staking-api/Polkadot/delegate/5_get-flow-status-1.mdx",sourceDirName:"guides/staking-api/Polkadot/delegate",slug:"/guides/staking-api/polkadot/delegate/get-flow-status-bonding_complete",permalink:"/guides/staking-api/polkadot/delegate/get-flow-status-bonding_complete",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/polkadot/delegate/get-flow-status-bonding_complete"},sidebar:"docsSidebar",previous:{title:"Submit Signed Bonding Transaction for Broadcast",permalink:"/guides/staking-api/polkadot/delegate/submit-signed-bonding-transaction"},next:{title:"Submit Nomination Addresses",permalink:"/guides/staking-api/polkadot/delegate/submit-nomination-addresses"}},i={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],l={toc:d};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To refresh the transaction state and get the latest status of the existing flow we'll be using the flow ID from the previous step."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None")),(0,o.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://polkadot-slate.datahub.figment.io/api/v1/flows/90a28f6e-09b4-4fe1-aeb4-c8e3720933ab' \\\n-H 'Authorization: <api_key>'\n")),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,o.kt)("inlineCode",{parentName:"p"},"bonding_tx_broadcasting")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"bonding_complete"),".")),(0,o.kt)("h4",{id:"sample-response"},"Sample Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "90a28f6e-09b4-4fe1-aeb4-c8e3720933ab",\n  "state": "bonding_complete",\n  "actions": [\n    {\n      "name": "create_nomination_tx",\n      "inputs": [\n        {\n          "name": "validator_addresses",\n          "display": "Validator Addresses",\n          "description": "",\n          "type": "array_of_strings",\n          "validations": [\n            {\n              "type": "array",\n              "options": {\n                "allow_empty": false,\n                "allow_duplicates": false\n              }\n            },\n            {\n              "type": "length",\n              "options": {\n                "maximum": 16,\n                "message": "Cannot have more than 16 validators"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "complete",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "controller_account_address": "5FWX3P9gwg4FKAyDHp1UYJp4ZZYPPoQZHfWRcN74HwBgXifh",\n    "controller_proxy_account_address": null,\n    "stash_account_address": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n    "stash_proxy_account_address": null,\n    "validator_addresses": null,\n    "reward_destination": "5FH4Ek1u9d4V5R1REoary3MDSApLL6vkEEcW2M7fZR9bnUuz",\n    "amount": "1.0",\n    "bonding_transaction": {\n      "raw": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e000000000000000000000000000000000000000000000000000000000000000000000000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c1c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n      "signing_payload": "0x0600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c0000004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",\n      "signed": "0xc10284008e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c01feec62b92266c99ce19a4421290b1bfbb56751a783b64ce3d701a5c8ec3e971929000e1849eb07ec7016cc7ff81b67f8a8ae6858b19de6eb313a6871624fbe8d0000000600009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a31666070010a5d4e8038e20409ae393dc420d8c9efbc03028dc58718e74bf3c3fec437fc089ae80fc4c",\n      "hash": "0x0c0a1e5b08e91eaeb628437d850c147496901b252903bff2d6e40dcb9e1bfe3e",\n      "status": "confirmed",\n      "error": null,\n      "signatures": [],\n      "block_number": 12775946,\n      "proxy": false\n    },\n    "nomination_transaction": null\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-06T18:26:22.984Z",\n  "updated_at": "2022-10-06T18:33:16.602Z"\n}\n')))}f.isMDXComponent=!0}}]);