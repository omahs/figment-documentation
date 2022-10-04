"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1438],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:e},p),{},{components:n})):a.createElement(m,o({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4563:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Submit Signed Transaction for Broadcast",pagination_next:null},o=void 0,s={unversionedId:"guides/staking-api/Ethereum/staking/submit-signed-transaction",id:"guides/staking-api/Ethereum/staking/submit-signed-transaction",title:"Submit Signed Transaction for Broadcast",description:"After signing the transaction, you will PUT /api/v1/flows/[:flow_id]/next (as always!) and the Staking API will manage broadcasting the transaction to the Ethereum network.",source:"@site/docs/guides/staking-api/Ethereum/staking/4_submit-signed-transaction.mdx",sourceDirName:"guides/staking-api/Ethereum/staking",slug:"/guides/staking-api/Ethereum/staking/submit-signed-transaction",permalink:"/guides/staking-api/Ethereum/staking/submit-signed-transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Submit Signed Transaction for Broadcast",pagination_next:null},sidebar:"docsSidebar",previous:{title:"Sign the Deposit Transaction",permalink:"/guides/staking-api/Ethereum/staking/sign-deposit-transaction"}},l={},c=[],p={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After signing the transaction, you will ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," (as always!) and the Staking API will manage broadcasting the transaction to the Ethereum network."),(0,r.kt)("p",null,"At this stage, the inputs JSON will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transaction_payload": "[:signed_transaction_payload]"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PUT ",(0,r.kt)("inlineCode",{parentName:"li"},"http://eth-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://eth-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "sign_deposit_tx",\n  "inputs": {\n    "transaction_payload": "[:signed_transaction_payload]"\n  }\n}\'\n')),(0,r.kt)("p",null,"With the signed transaction provided, Staking API will broadcast it to the network. As the transaction progresses towards confirmation, the returned state will be one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deposit_tx_broadcasting")," \u2014 Transaction has been broadcast and confirmed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deposited")," \u2014 Transaction has been confirmed.")))}u.isMDXComponent=!0}}]);