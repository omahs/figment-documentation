"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9904],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),f=r,g=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8556:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Get Flow Status",slug:"/guides/staking-api/polkadot/undelegate/get-flow-status-done"},l=void 0,i={unversionedId:"guides/staking-api/Polkadot/undelegate/get-flow-status",id:"guides/staking-api/Polkadot/undelegate/get-flow-status",title:"Get Flow Status",description:"To refresh the transaction state and get the latest status of the existing flow we'll be using the flow id from the previous step.",source:"@site/docs/guides/staking-api/Polkadot/undelegate/12_get-flow-status.mdx",sourceDirName:"guides/staking-api/Polkadot/undelegate",slug:"/guides/staking-api/polkadot/undelegate/get-flow-status-done",permalink:"/guides/staking-api/polkadot/undelegate/get-flow-status-done",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/polkadot/undelegate/get-flow-status-done"},sidebar:"docsSidebar",previous:{title:"Submit Signed Withdrawal Transaction for Broadcast",permalink:"/guides/staking-api/polkadot/undelegate/submit-signed-withdrawal-transaction"},next:{title:"Add a Staking Proxy",permalink:"/guides/staking-api/polkadot/add-staking-proxy"}},d={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Undelegation Flow Complete",id:"undelegation-flow-complete",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To refresh the transaction state and get the latest status of the existing flow we'll be using the flow id from the previous step."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://polkadot-slate.datahub.figment.io/api/v1/flows/86d9a004-12b6-4142-90cb-9ade53864e29' \\\n-H 'Authorization: <api_key>'\n")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw_tx_broadcasting")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"done"),".")),(0,r.kt)("h4",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "86d9a004-12b6-4142-90cb-9ade53864e29",\n  "state": "done",\n  "actions": [],\n  "data": {\n    "controller_account_address": "5GNhcVwpjND83kk6uqMeCjXNUnTSdz84SFyJmd3NmZe4uvrC",\n    "controller_proxy_account_address": null,\n    "stash_account_address": "5GQmooiNwLwjXnsNp3woVDD3xhkHzcifVVAmdWcb6FaRVA4L",\n    "amount": null,\n    "maximum": null,\n    "chill_transaction": null,\n    "estimated_chilled_at": null,\n    "unbond_transaction": null,\n    "unbonding_era": null,\n    "estimated_unbonded_at": null,\n    "withdraw_transaction": {\n      "raw": "0x0024000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e000000000000000000000000000000000000000000000000000000000000000000000000000603000000001c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004",\n      "signing_payload": "0x0603000000000024004a2400000c000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",\n      "signed": "0xb1018400beaa875b14abaeae2d1a55193ba6f175aa846b7e624dce1514fbf043638aa858012e6b1b07390a44705bc2630166187e6e1f0e35616dd51b09a9b4ca9549978237c5ecf39161c3764b06ff8dd79e261ee2b39df4a49d604766519f01e9eecbab85002400060300000000",\n      "hash": "0x77fd4db9a4852a7386300b09f6662c6f655b5b5d2e8b0feea74197117046aed0",\n      "status": null,\n      "error": null,\n      "signatures": [],\n      "block_number": 12787599,\n      "proxy": false\n    }\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-07T14:06:47.401Z",\n  "updated_at": "2022-10-07T14:12:11.118Z"\n}\n')),(0,r.kt)("h3",{id:"undelegation-flow-complete"},"Undelegation Flow Complete"),(0,r.kt)("p",null,"Congratulations, your stake is deactivated and withdrawn!"))}u.isMDXComponent=!0}}]);