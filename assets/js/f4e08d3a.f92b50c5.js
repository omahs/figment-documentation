"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7202],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=c(a),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function f(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3082:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={title:"Submit a Signed Transaction for Broadcast",sidebar_position:4},i=void 0,s={unversionedId:"guides/slate-flows/solana/undelegate/submit-signed-transaction",id:"guides/slate-flows/solana/undelegate/submit-signed-transaction",title:"Submit a Signed Transaction for Broadcast",description:"After signing the transaction, you will PUT /api/v1/flows/[:flow_id]/next (as always!) and Slate will manage broadcasting the transaction to the Solana network.",source:"@site/docs/guides/slate-flows/solana/undelegate/4_submit-signed-transaction.mdx",sourceDirName:"guides/slate-flows/solana/undelegate",slug:"/guides/slate-flows/solana/undelegate/submit-signed-transaction",permalink:"/figment-documentation/guides/slate-flows/solana/undelegate/submit-signed-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit a Signed Transaction for Broadcast",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Sign the Deactivate Transaction",permalink:"/figment-documentation/guides/slate-flows/solana/undelegate/sign-deactivate-transaction"},next:{title:"Submit Withdrawl Transaction Data",permalink:"/figment-documentation/guides/slate-flows/solana/undelegate/submit-withdrawl-transaction-data"}},l={},c=[],d={toc:c};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After signing the transaction, you will ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," (as always!) and Slate will manage broadcasting the transaction to the Solana network."),(0,o.kt)("p",null,"At this step, the ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," JSON will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transaction_payload": "[:signed_transaction_payload]"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://solana-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "sign_deactivate_tx",\n  "inputs": {\n    "transaction_payload": "[:signed_transaction_payload]"\n  }\n}\'\n')),(0,o.kt)("p",null,"With the signed transaction provided, Slate will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be one of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deactivate_tx_broadcasting")," - Transaction has been broadcast but not confirmed."),(0,o.kt)("li",{parentName:"ul"},"next state?")),(0,o.kt)("p",null,"Upon transaction finalization, the stake account will start the process of deactivating. This generally happens at the next epoch boundary (max 2.5 days), but if there is a large change in network wide delegation levels it is possible it will be subjected to a multi-epoch cooldown period. This would mean that a portion of the stake will deactivate at each epoch boundary for a few epochs until it is fully deactivated."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can read more about warmup and cooldown period here: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cluster/stake-delegation-and-rewards#stake-warmup-cooldown-withdrawal"},"https://docs.solana.com/cluster/stake-delegation-and-rewards#stake-warmup-cooldown-withdrawal"))),(0,o.kt)("p",null,"At each epoch, a webhook notifies you about how much of the stake has deactivated until it is fully deactivated."),(0,o.kt)("p",null,"At this point, you are ready to move on to the next step \u2014 Submit Withdrawal Transaction Data collection."))}u.isMDXComponent=!0}}]);