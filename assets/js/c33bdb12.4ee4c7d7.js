"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3507],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>p});var n=t(7294);function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,d=function(e,a){if(null==e)return{};var t,n,d={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(d[t]=e[t]);return d}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var o=n.createContext({}),r=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):b(b({},a),e)),t},s=function(e){var a=r(e.components);return n.createElement(o.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},l=n.forwardRef((function(e,a){var t=e.components,d=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=r(t),p=d,u=l["".concat(o,".").concat(p)]||l[p]||f[p]||c;return t?n.createElement(u,b(b({ref:a},s),{},{components:t})):n.createElement(u,b({ref:a},s))}));function p(e,a){var t=arguments,d=a&&a.mdxType;if("string"==typeof e||d){var c=t.length,b=new Array(c);b[0]=l;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:d,b[1]=i;for(var r=2;r<c;r++)b[r]=t[r];return n.createElement.apply(null,b)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8660:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>b,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var n=t(7462),d=(t(7294),t(3905));const c={title:"Submit a Signed Delegate Transaction for Broadcast",slug:"/guides/staking-api/solana/delegate/sumbit-a-signed-delegate-transaction"},b=void 0,i={unversionedId:"guides/staking-api/Solana/delegate/submit-signed-transaction-2",id:"guides/staking-api/Solana/delegate/submit-signed-transaction-2",title:"Submit a Signed Delegate Transaction for Broadcast",description:"After signing the transaction, send a PUT request to /api/v1/flows/[:flow_id]/next with the signed payload.",source:"@site/docs/guides/staking-api/Solana/delegate/8_submit-signed-transaction-2.mdx",sourceDirName:"guides/staking-api/Solana/delegate",slug:"/guides/staking-api/solana/delegate/sumbit-a-signed-delegate-transaction",permalink:"/guides/staking-api/solana/delegate/sumbit-a-signed-delegate-transaction",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Submit a Signed Delegate Transaction for Broadcast",slug:"/guides/staking-api/solana/delegate/sumbit-a-signed-delegate-transaction"},sidebar:"docsSidebar",previous:{title:"Sign Delegate Transaction",permalink:"/guides/staking-api/solana/delegate/sign-delegate-transaction"},next:{title:"Get Flow Status",permalink:"/guides/staking-api/solana/delegate/get-flow-status-delegation_activating"}},o={},r=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],s={toc:r};function f(e){let{components:a,...t}=e;return(0,d.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"After signing the transaction, send a ",(0,d.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,d.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," with the signed payload.\nThe Staking API will broadcast the transaction to the Solana network."),(0,d.kt)("h3",{id:"parameters"},"Parameters"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,d.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,d.kt)("inlineCode",{parentName:"li"},"object"),(0,d.kt)("ul",{parentName:"li"},(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," Signed transaction payload from the previous step's response.")))),(0,d.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-8}","{5-8}":!0},'curl -X PUT \'https://solana-slate.datahub.figment.io/api/v1/flows/436bd609-48fc-46c4-bde8-1aa921ff2ef5/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n    "name": "sign_delegate_tx",\n    "inputs": {\n      "transaction_payload": "019a35a169f86019bf84d2808b049329278de7804dc031ecd5496cacb42aba0b7f6f9501a4cbeb78d876da9db2d301d5a8e2fec07098b29f5c2ecad1b694e8bd0e01000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000"\n    }\n}\'\n')),(0,d.kt)("admonition",{title:"important",type:"warning"},(0,d.kt)("p",{parentName:"admonition"},"The transaction signing window on Solana is sometimes less than 90 seconds."),(0,d.kt)("p",{parentName:"admonition"},"If you encounter an error ",(0,d.kt)("inlineCode",{parentName:"p"},'"Transaction simulation failed: Blockhash not found"'),", refresh the transaction, sign the payload again and submit it in < 90 seconds.")),(0,d.kt)("h3",{id:"response"},"Response"),(0,d.kt)("p",null,"With the signed transaction payload provided, the Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned ",(0,d.kt)("inlineCode",{parentName:"p"},"state")," will be either:"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"delegate_tx_broadcasting")," ","\u2014"," The delegation transaction has been broadcast but not confirmed."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"delegation_activating")," ","\u2014"," The delegation is progressing."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("inlineCode",{parentName:"li"},"delegation_active")," ","\u2014"," The delegation is active and confirmed.")),(0,d.kt)("p",null,"Since delegations on Solana activate at the next epoch boundary (epochs are approximately 2.5 days), the Staking API will also track the delegation and send a WebHook notification when it activates."),(0,d.kt)("p",null,"It is possible the delegation will be subjected to a multi-epoch warmup period, in which case you will receive a WebHook notification at each epoch, indicating how much has been activated until the full amount is active."),(0,d.kt)("h4",{id:"sample-response"},"Sample Response"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3}","{3}":!0},'{\n  "id": "436bd609-48fc-46c4-bde8-1aa921ff2ef5",\n  "state": "delegate_tx_broadcasting",\n  "actions": [\n    {\n      "name": "wait",\n      "estimated_state_change_at": "2022-10-04T19:19:03.088Z",\n      "inputs": []\n    }\n  ],\n  "data": {\n    "stake_account_pubkey": "FNN2VwQy5TMkVegyXyejbwKL5S1SvRkmYHkoK62FReo7",\n    "create_stake_account_transaction": {\n      "raw": "0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000faab033b72345bd8287d37a0b3c190d8837ef55d5444bc2d95b537827e1922f475a383aa0a27f0ee522a6701ee2e3166543265e7dc590fadedd48008c4bc540d02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "signing_payload": "02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "signed": "02534e6edc69334009871bfa180fe3ce8113805a75a67dde1d686e6fabca6712278503bae3d56b54a2781ca9df08c28ca2106b92d8a62182eecbd3d35710014e0cfaab033b72345bd8287d37a0b3c190d8837ef55d5444bc2d95b537827e1922f475a383aa0a27f0ee522a6701ee2e3166543265e7dc590fadedd48008c4bc540d02000305f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e7126000000000000000000000000000000000000000000000000000000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000cd99d35b1c9672eadb9deb72ca282469e921bb31b409d4c811d8f227cf184e8702020200013400000000002f685900000000c80000000000000006a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000030201047400000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a53400000000000000000000000000000000f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534",\n      "hash": "2fbx1JMeYsTVznPF73GM16Qvchj6VddMZuNDJGcKHa7T1TzQf7zkUSmGwgBqJfK1FyxiKwK1U1nQUTYDLGwDmvE7",\n      "status": "confirmed",\n      "error": null,\n      "signatures": []\n    },\n    "funding_account_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "stake_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "withdraw_authority_pubkey": "Hk5voGB7wh9HtXTeszbW7AFm3A4B94xWkXeeaqTYspqy",\n    "amount": "1.5",\n    "validator_address": "2qa4K3joCUXJXdqgcSmoq1t6KtChfbopm3CJyvVRefQ3",\n    "delegate_transaction": {\n      "raw": "010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "signing_payload": "01000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "signed": "019a35a169f86019bf84d2808b049329278de7804dc031ecd5496cacb42aba0b7f6f9501a4cbeb78d876da9db2d301d5a8e2fec07098b29f5c2ecad1b694e8bd0e01000507f8c4898641adada76eeeee2de872d931bc58bfb2ce5b79734e32808cc501a534d57c96845584709596f8fb1e1be584d1be3e8f258cdba157ab5a3cb8397e71261b4cf18b4932a7ee3815ab209d1d47e9737b3f63f730e24a5dc202918aedb59806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff4000000a56121592f7d0d57fc7fe37c8eeeb4bed23beeb2aef91bbd12b5922547cd4e7e0103060102050604000402000000",\n      "hash": "45pgwu5AfFrSfg7UgQ1sXzzFXrS2EWitFbNyXeA7CgwgviNitSoKYCJWSJYwSWN49EZ52aQW1kHzRJfBa7mjUWah",\n      "status": null,\n      "error": null,\n      "signatures": []\n    },\n    "delegation_active_amount": null,\n    "delegation_inactive_amount": null,\n    "delegation_status": null,\n    "delegation_status_error": null,\n    "estimated_active_at": null\n  },\n  "network_code": "solana",\n  "chain_code": "testnet",\n  "created_at": "2022-10-04T19:05:21.115Z",\n  "updated_at": "2022-10-04T19:18:02.986Z"\n}\n')))}f.isMDXComponent=!0}}]);