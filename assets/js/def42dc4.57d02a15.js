"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"Submit Deposit Data"},o=void 0,s={unversionedId:"guides/slate-flows/ethereum/staking/submit-deposit-data",id:"guides/slate-flows/ethereum/staking/submit-deposit-data",title:"Submit Deposit Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[",source:"@site/docs/guides/slate-flows/ethereum/staking/2_submit-deposit-data.mdx",sourceDirName:"guides/slate-flows/ethereum/staking",slug:"/guides/slate-flows/ethereum/staking/submit-deposit-data",permalink:"/figment-documentation/guides/slate-flows/ethereum/staking/submit-deposit-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Deposit Data"},sidebar:"docsSidebar",previous:{title:"Create New Flow",permalink:"/figment-documentation/guides/slate-flows/ethereum/staking/create-new-flow"},next:{title:"Sign the Deposit Transaction",permalink:"/figment-documentation/guides/slate-flows/ethereum/staking/sign-deposit-transaction"}},l={},u=[],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required Inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step. In this case, the inputs JSON would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "funding_account_address": "[:funding_account_address]",\n  "validator_pub_key": "[:validator_pub_key]",\n  "withdrawal_credentials": "[:withdrawal_credentials]",\n  "signature": "[:signature]",\n  "deposit_data_root": "[:deposit_data_root]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://eth-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "create_deposit_transaction",\n  "inputs": {\n    "funding_account_address": "[:funding_account_address]",\n    "validator_pub_key": "[:validator_pub_key]",\n    "withdrawal_credentials": "[:withdrawal_credentials]",\n    "signature": "[:signature]",\n    "deposit_data_root": "[:deposit_data_root]"\n  }\n}\'\n')),(0,r.kt)("p",null,"Note that in this response you can find the unsigned, serialized transaction in ",(0,r.kt)("inlineCode",{parentName:"p"},"data[create_deposit_transaction][raw]"),"."),(0,r.kt)("p",null,"Again we see two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_deposit_tx")," \u2014 If you need to get a fresh version of the transaction Payload (i.e., the nonce has increased)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_deposit_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network.")),(0,r.kt)("p",null,"We will choose ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_deposit_tx"),", which indicates one Input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 The signed transaction Payload ready to be broadcast to the network.")))}c.isMDXComponent=!0}}]);