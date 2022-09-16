"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Submit Bonding Transaction Data"},i=void 0,s={unversionedId:"guides/staking-api/Polkadot/delegate/submit-bonding-transaction-data",id:"guides/staking-api/Polkadot/delegate/submit-bonding-transaction-data",title:"Submit Bonding Transaction Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[",source:"@site/docs/guides/staking-api/Polkadot/delegate/2_submit-bonding-transaction-data.mdx",sourceDirName:"guides/staking-api/Polkadot/delegate",slug:"/guides/staking-api/Polkadot/delegate/submit-bonding-transaction-data",permalink:"/guides/staking-api/Polkadot/delegate/submit-bonding-transaction-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Bonding Transaction Data"},sidebar:"docsSidebar",previous:{title:"Create a New Flow",permalink:"/guides/staking-api/Polkadot/delegate/create-new-flow"},next:{title:"Sign the Bonding Transaction",permalink:"/guides/staking-api/Polkadot/delegate/sign-bonding-transaction"}},l={},d=[],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required Inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step. In this case, the inputs JSON would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "controller_account_address": "[:controller_account_address]",\n  "stash_account_address": "[:stash_account_address]",\n  "reward_destination": "[:reward_destination]",\n  "amount": "[:amount]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://polkadot-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "create_bonding_tx",\n  "inputs": {\n    "controller_account_address": "[:controller_account_address]",\n    "stash_account_address": "[:stash_account_address]",\n    "reward_destination": "[:reward_destination]",\n    "amount": "[:amount]"\n  }\n}\'\n')),(0,r.kt)("p",null,"Note that in this response you can find the unsigned, serialized transaction in ",(0,r.kt)("inlineCode",{parentName:"p"},"data[create_bonding_tx][raw]"),"."),(0,r.kt)("p",null,"Again we see two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_bonding_tx")," \u2014 If you need to get a fresh version of the transaction Payload (i.e., the nonce has increased)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_bonding_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network.")),(0,r.kt)("p",null,"We will choose ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_bonding_tx"),", which indicates one Input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 The signed transaction Payload ready to be broadcast to the network.")))}u.isMDXComponent=!0}}]);