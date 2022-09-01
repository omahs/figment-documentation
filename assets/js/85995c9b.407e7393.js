"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Submit a Signed Transaction for Broadcast"},i=void 0,l={unversionedId:"guides/slate-flows/solana/delegate/submit-a-signed-transaction",id:"guides/slate-flows/solana/delegate/submit-a-signed-transaction",title:"Submit a Signed Transaction for Broadcast",description:"After signing the transaction, you will PUT /api/v1/flows/[:flow_id]/next and Slate will manage broadcasting the transaction to the Solana network.",source:"@site/docs/guides/slate-flows/solana/delegate/7_submit-a-signed-transaction.mdx",sourceDirName:"guides/slate-flows/solana/delegate",slug:"/guides/slate-flows/solana/delegate/submit-a-signed-transaction",permalink:"/figment-documentation/guides/slate-flows/solana/delegate/submit-a-signed-transaction",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Submit a Signed Transaction for Broadcast"},sidebar:"docsSidebar",previous:{title:"Sign the Delegate Transaction",permalink:"/figment-documentation/guides/slate-flows/solana/delegate/sign-delegate-transaction"},next:{title:"Un-Delegate",permalink:"/figment-documentation/guides/slate-flows/solana/undelegate/"}},s={},c=[{value:"Delegation Flow Complete",id:"delegation-flow-complete",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After signing the transaction, you will ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," and Slate will manage broadcasting the transaction to the Solana network."),(0,o.kt)("p",null,"At this step, the ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," JSON will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transaction_payload": "[:signed_transaction_payload]"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl --request PUT https://solana-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "sign_delegate_tx",\n  "inputs": {\n    "transaction_payload": "[:signed_transaction_payload]"\n  }\n}\'\n')),(0,o.kt)("p",null,"And just as in Step 4, Slate will broadcast the transaction to the network."),(0,o.kt)("p",null,"Since delegations on Solana activate at the next epoch boundary (epochs are approximately 2.5 days), Slate will also track the delegation and send a webhook notification when it activates."),(0,o.kt)("p",null,"It is possible the delegation will be subjected to a multi-epoch warmup period, in which case you will receive a webhook at each epoch notifying you how much has been activated until the full amount is active."),(0,o.kt)("h2",{id:"delegation-flow-complete"},"Delegation Flow Complete"),(0,o.kt)("p",null,"Congratulations, your stake is now active and earning rewards!"))}d.isMDXComponent=!0}}]);