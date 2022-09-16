"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Submit Transfer Data"},i=void 0,s={unversionedId:"guides/staking-api/Polkadot/transfer/submit-transfer-data",id:"guides/staking-api/Polkadot/transfer/submit-transfer-data",title:"Submit Transfer Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[",source:"@site/docs/guides/staking-api/Polkadot/transfer/2_submit-transfer-data.mdx",sourceDirName:"guides/staking-api/Polkadot/transfer",slug:"/guides/staking-api/Polkadot/transfer/submit-transfer-data",permalink:"/guides/staking-api/Polkadot/transfer/submit-transfer-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Transfer Data"},sidebar:"docsSidebar",previous:{title:"Create a New Flow",permalink:"/guides/staking-api/Polkadot/transfer/create-new-flow"},next:{title:"Sign the Transfer Transaction",permalink:"/guides/staking-api/Polkadot/transfer/sign-transfer-transaction"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After collecting the required Inputs, we ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step. In this case, the inputs JSON would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "from_account_address": "[:from_account_address]",\n  "to_account_address": "[:to_account_address]",\n  "amount": "[:amount]"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://polkadot-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "create_transfer_tx",\n  "inputs": {\n    "from_account_address": "[:from_account_address]",\n    "to_account_address": "[:to_account_address]",\n    "amount": "[:amount]"\n  }\n}\'\n')),(0,a.kt)("p",null,"We see two possible ",(0,a.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"refresh_transfer_tx")," \u2014 If you need to get a fresh version of the transaction Payload (i.e., the nonce has increased)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sign_transfer_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network.")),(0,a.kt)("p",null,"We will choose ",(0,a.kt)("inlineCode",{parentName:"p"},"sign_transfert_tx"),", which indicates one Input to collect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") \u2014 The signed transaction Payload ready to be broadcast to the network.")))}p.isMDXComponent=!0}}]);