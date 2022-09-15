"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5504],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(a),g=o,f=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return a?n.createElement(f,r(r({ref:e},d),{},{components:a})):n.createElement(f,r({ref:e},d))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4945:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={title:"Submit a Signed Transaction for Broadcast",sidebar_position:4},r=void 0,s={unversionedId:"guides/staking-api-flows/solana/undelegate/submit-signed-transaction",id:"guides/staking-api-flows/solana/undelegate/submit-signed-transaction",title:"Submit a Signed Transaction for Broadcast",description:"After signing the transaction, you will PUT /api/v1/flows/[:flow_id]/next (as always!) and the Staking API will manage broadcasting the transaction to the Solana network.",source:"@site/docs/guides/staking-api-flows/solana/undelegate/4_submit-signed-transaction.mdx",sourceDirName:"guides/staking-api-flows/solana/undelegate",slug:"/guides/staking-api-flows/solana/undelegate/submit-signed-transaction",permalink:"/guides/staking-api-flows/solana/undelegate/submit-signed-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit a Signed Transaction for Broadcast",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Sign the Deactivate Transaction",permalink:"/guides/staking-api-flows/solana/undelegate/sign-deactivate-transaction"},next:{title:"Submit Withdrawl Transaction Data",permalink:"/guides/staking-api-flows/solana/undelegate/submit-withdrawl-transaction-data"}},l={},c=[],d={toc:c};function p(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After signing the transaction, you will ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," (as always!) and the Staking API will manage broadcasting the transaction to the Solana network."),(0,o.kt)("p",null,"At this step, the ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," JSON will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transaction_payload": "[:signed_transaction_payload]"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://solana-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "sign_deactivate_tx",\n  "inputs": {\n    "transaction_payload": "[:signed_transaction_payload]"\n  }\n}\'\n')),(0,o.kt)("p",null,"With the signed transaction provided, Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deactivate_tx_broadcasting")," - Transaction has been broadcast but not confirmed."),(0,o.kt)("li",{parentName:"ul"},"next state?")),(0,o.kt)("p",null,"Upon transaction finalization, the stake account will start the process of deactivating. This generally happens at the next epoch boundary (max 2.5 days), but if there is a large change in network wide delegation levels it is possible it will be subjected to a multi-epoch cooldown period. This would mean that a portion of the stake will deactivate at each epoch boundary for a few epochs until it is fully deactivated."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can read more about warmup and cooldown period here: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cluster/stake-delegation-and-rewards#stake-warmup-cooldown-withdrawal"},"https://docs.solana.com/cluster/stake-delegation-and-rewards#stake-warmup-cooldown-withdrawal"))),(0,o.kt)("p",null,"At each epoch, a webhook notifies you about how much of the stake has deactivated until it is fully deactivated."),(0,o.kt)("p",null,"At this point, you are ready to move on to the next step \u2014 Submit Withdrawal Transaction Data collection."))}p.isMDXComponent=!0}}]);