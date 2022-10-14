"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5304],{3905:(e,a,d)=>{d.d(a,{Zo:()=>r,kt:()=>u});var b=d(7294);function c(e,a,d){return a in e?Object.defineProperty(e,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[a]=d,e}function t(e,a){var d=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);a&&(b=b.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),d.push.apply(d,b)}return d}function n(e){for(var a=1;a<arguments.length;a++){var d=null!=arguments[a]?arguments[a]:{};a%2?t(Object(d),!0).forEach((function(a){c(e,a,d[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(d)):t(Object(d)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(d,a))}))}return e}function f(e,a){if(null==e)return{};var d,b,c=function(e,a){if(null==e)return{};var d,b,c={},t=Object.keys(e);for(b=0;b<t.length;b++)d=t[b],a.indexOf(d)>=0||(c[d]=e[d]);return c}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(b=0;b<t.length;b++)d=t[b],a.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(e,d)&&(c[d]=e[d])}return c}var i=b.createContext({}),o=function(e){var a=b.useContext(i),d=a;return e&&(d="function"==typeof e?e(a):n(n({},a),e)),d},r=function(e){var a=o(e.components);return b.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return b.createElement(b.Fragment,{},a)}},l=b.forwardRef((function(e,a){var d=e.components,c=e.mdxType,t=e.originalType,i=e.parentName,r=f(e,["components","mdxType","originalType","parentName"]),l=o(d),u=c,p=l["".concat(i,".").concat(u)]||l[u]||s[u]||t;return d?b.createElement(p,n(n({ref:a},r),{},{components:d})):b.createElement(p,n({ref:a},r))}));function u(e,a){var d=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var t=d.length,n=new Array(t);n[0]=l;var f={};for(var i in a)hasOwnProperty.call(a,i)&&(f[i]=a[i]);f.originalType=e,f.mdxType="string"==typeof e?e:c,n[1]=f;for(var o=2;o<t;o++)n[o]=d[o];return b.createElement.apply(null,n)}return b.createElement.apply(null,d)}l.displayName="MDXCreateElement"},6632:(e,a,d)=>{d.r(a),d.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>s,frontMatter:()=>t,metadata:()=>f,toc:()=>o});var b=d(7462),c=(d(7294),d(3905));const t={title:"Get Flow Status",slug:"/guides/staking-api/solana/delegate/get-flow-status-delegation_activating"},n=void 0,f={unversionedId:"guides/staking-api/Solana/delegate/get-flow-status-2",id:"guides/staking-api/Solana/delegate/get-flow-status-2",title:"Get Flow Status",description:"To refresh the transaction state and get the latest status of the existing flow, use the flow ID from the previous step.",source:"@site/docs/guides/staking-api/Solana/delegate/9_get-flow-status-2.mdx",sourceDirName:"guides/staking-api/Solana/delegate",slug:"/guides/staking-api/solana/delegate/get-flow-status-delegation_activating",permalink:"/guides/staking-api/solana/delegate/get-flow-status-delegation_activating",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Get Flow Status",slug:"/guides/staking-api/solana/delegate/get-flow-status-delegation_activating"},sidebar:"docsSidebar",previous:{title:"Submit a Signed Delegate Transaction for Broadcast",permalink:"/guides/staking-api/solana/delegate/sumbit-a-signed-delegate-transaction"},next:{title:"Undelegate",permalink:"/guides/staking-api/solana/undelegate"}},i={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4},{value:"Delegation Flow Complete",id:"delegation-flow-complete",level:3}],r={toc:o};function s(e){let{components:a,...d}=e;return(0,c.kt)("wrapper",(0,b.Z)({},r,d,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"To refresh the transaction state and get the latest status of the existing flow, use the flow ID from the previous step."),(0,c.kt)("h3",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"None")),(0,c.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://solana-slate.datahub.figment.io/api/v1/flows/436bd609-48fc-46c4-bde8-1aa921ff2ef5' \\\n-H 'Authorization: <api_key>'\n")),(0,c.kt)("h3",{id:"response"},"Response"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,c.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,c.kt)("admonition",{title:"note",type:"info"},(0,c.kt)("p",{parentName:"admonition"},"The ",(0,c.kt)("inlineCode",{parentName:"p"},"state")," field will update from ",(0,c.kt)("inlineCode",{parentName:"p"},"delegation_activating")," to ",(0,c.kt)("inlineCode",{parentName:"p"},"delegation_active"),".")),(0,c.kt)("h4",{id:"sample-response"},"Sample Response"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "436bd609-48fc-46c4-bde8-1aa921ff2ef5",\n  "state": "delegation_activating",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-10-05T13:45:18.338Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "stake_account_pubkey": "FNN2VwQy5TMkVegyXyejbwKL5S1SvRkmYHkoK62FReo7",\n    "create_stake_account_transaction": {\n      "raw": "0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000faab033b72345bd8287d37a0b3c190d8837ef55d5444bc2d95b537827e1922f475a383aa0a27f0ee522a6701ee2e3166543265e7dc590fadedd48008c4bc540d02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "signing_payload": "02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "signed": "02534e6edc69334009871bfa180fe3ce8113805a75a67dde1d686e6fabca6712278503bae3d56b54a2781ca9df08c28ca2106b92d8a62182eecbd3d35710014e0cfaab033b72345bd8287d37a0b3c190d8837ef55d5444bc2d95b537827e1922f475a383aa0a27f0ee522a6701ee2e3166543265e7dc590fadedd48008c4bc540d02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "hash": "2fbx1JMeYsTVznPF73GM16Qvchj6VddMZuNDJGcKHa7T1TzQf7zkUSmGwgBqJfK1FyxiKwK1U1nQUTYDLGwDmvE7",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    },\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "stake_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "withdraw_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "amount": "1.5",\n    "validator_address": "2qa4K3joCUXJXdqgcSmoq1t6KtChfbopm3CJyvVRefQ3",\n    "delegate_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "signing_payload": "01000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "signed": "019a35a169f86019bf84d2808b049329278de7804dc031ecd5496cacb42aba0b7f6f9501a4cbeb78d876da9db2d301d5a8e2fec07098b29f5c2ecad1b694e8bd0e01000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "hash": "45pgwu5AfFrSfg7UgQ1sXzzFXrS2EWitFbNyXeA7CgwgviNitSoKYCJWSJYwSWN49EZ52aQW1kHzRJfBa7mjUWah",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    },\n    "delegation_active_amount": "0.0",\n    "delegation_inactive_amount": "1497717120.0",\n    "delegation_status": "activating",\n    "delegation_status_error": null,\n    "estimated_active_at": "2022-10-05T13:45:18.338Z"\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-04T19:05:21.115Z",\n  "updated_at": "2022-10-04T19:18:21.217Z"\n}\n')),(0,c.kt)("p",null,"Confirm final state change after ",(0,c.kt)("inlineCode",{parentName:"p"},"estimated_state_change_at")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "436bd609-48fc-46c4-bde8-1aa921ff2ef5",\n  "state": "delegation_active",\n  "actions": [],\n  "data": {\n    "stake_account_pubkey": "FNN2VwQy5TMkVegyXyejbwKL5S1SvRkmYHkoK62FReo7",\n    "create_stake_account_transaction": {\n      "raw": "0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000faab033b72345bd8287d37a0b3c190d8837ef55d5444bc2d95b537827e1922f475a383aa0a27f0ee522a6701ee2e3166543265e7dc590fadedd48008c4bc540d02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "signing_payload": "02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "signed": "02534e6edc69334009871bfa180fe3ce8113805a75a67dde1d686e6fabca6712278503bae3d56b54a2781ca9df08c28ca2106b92d8a62182eecbd3d35710014e0cfaab033b72345bd8287d37a0b3c190d8837ef55d5444bc2d95b537827e1922f475a383aa0a27f0ee522a6701ee2e3166543265e7dc590fadedd48008c4bc540d02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "hash": "2fbx1JMeYsTVznPF73GM16Qvchj6VddMZuNDJGcKHa7T1TzQf7zkUSmGwgBqJfK1FyxiKwK1U1nQUTYDLGwDmvE7",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    },\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "stake_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "withdraw_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "amount": "1.5",\n    "validator_address": "2qa4K3joCUXJXdqgcSmoq1t6KtChfbopm3CJyvVRefQ3",\n    "delegate_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "signing_payload": "01000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "signed": "019a35a169f86019bf84d2808b049329278de7804dc031ecd5496cacb42aba0b7f6f9501a4cbeb78d876da9db2d301d5a8e2fec07098b29f5c2ecad1b694e8bd0e01000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "hash": "45pgwu5AfFrSfg7UgQ1sXzzFXrS2EWitFbNyXeA7CgwgviNitSoKYCJWSJYwSWN49EZ52aQW1kHzRJfBa7mjUWah",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    },\n    "delegation_active_amount": "1497717120.0",\n    "delegation_inactive_amount": "0.0",\n    "delegation_status": "active",\n    "delegation_status_error": null,\n    "estimated_active_at": "2022-10-05T13:45:18.338Z"\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-04T19:05:21.115Z",\n  "updated_at": "2022-10-05T14:19:14.886Z"\n}\n')),(0,c.kt)("h3",{id:"delegation-flow-complete"},"Delegation Flow Complete"),(0,c.kt)("p",null,"Congratulations, your stake is now active and earning rewards!"))}s.isMDXComponent=!0}}]);