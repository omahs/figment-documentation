"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[6634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Submit a Signed Withdrawl Transaction for Broadcast"},o=void 0,l={unversionedId:"guides/staking-api/Solana/undelegate/submit-a-signed-transaction",id:"guides/staking-api/Solana/undelegate/submit-a-signed-transaction",title:"Submit a Signed Withdrawl Transaction for Broadcast",description:"After signing the transaction, you will PUT /api/v1/flows/[:flow_id]/next and the Staking API will manage broadcasting the transaction to the Solana network.",source:"@site/docs/guides/staking-api/Solana/undelegate/7_submit-a-signed-transaction.mdx",sourceDirName:"guides/staking-api/Solana/undelegate",slug:"/guides/staking-api/Solana/undelegate/submit-a-signed-transaction",permalink:"/guides/staking-api/Solana/undelegate/submit-a-signed-transaction",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Submit a Signed Withdrawl Transaction for Broadcast"},sidebar:"docsSidebar",previous:{title:"Sign the Delegate Transaction",permalink:"/guides/staking-api/Solana/undelegate/sign-undelegate-transaction"},next:{title:"Transfer",permalink:"/guides/staking-api/Solana/transfer/"}},s={},c=[{value:"Un-Delegation Flow Complete",id:"un-delegation-flow-complete",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After signing the transaction, you will ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," and the Staking API will manage broadcasting the transaction to the Solana network."),(0,i.kt)("p",null,"At this step, the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," JSON will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transaction_payload": "[:signed_transaction_payload]"\n}\n')),(0,i.kt)("p",null,"And just as in Step 4, Staking API will broadcast the transaction to the network."),(0,i.kt)("p",null,"Once the transaction is confirmed on-chain, the SOL will be available in the recipient account and this flow will be complete!"),(0,i.kt)("h2",{id:"un-delegation-flow-complete"},"Un-Delegation Flow Complete"),(0,i.kt)("p",null,"Congratulations, your stake is deactivated and withdrawn to your main wallet!"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you only withdrew a portion of the stake account balance and wish to reactivate the remaining portion, simply start a new staking flow on Solana and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"assign_stake_account")," action in the first step.")))}p.isMDXComponent=!0}}]);