"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"2. Submit Bonding Transaction Data"},i=void 0,l={unversionedId:"guides/slate-flows/polkadot/delegate/submit-bonding-transaction-data",id:"guides/slate-flows/polkadot/delegate/submit-bonding-transaction-data",title:"2. Submit Bonding Transaction Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[",source:"@site/docs/guides/slate-flows/polkadot/delegate/2_submit-bonding-transaction-data.mdx",sourceDirName:"guides/slate-flows/polkadot/delegate",slug:"/guides/slate-flows/polkadot/delegate/submit-bonding-transaction-data",permalink:"/guides/slate-flows/polkadot/delegate/submit-bonding-transaction-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Submit Bonding Transaction Data"},sidebar:"docsSidebar",previous:{title:"1. Create a New Flow",permalink:"/guides/slate-flows/polkadot/delegate/create-new-flow"},next:{title:"3. Sign the Bonding Transaction",permalink:"/guides/slate-flows/polkadot/delegate/sign-bonding-transaction"}},s={},d=[],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After collecting the required Inputs, we ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step. In this case, the inputs JSON would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "controller_account_address": "[:controller_account_address]",\n  "stash_account_address": "[:stash_account_address]",\n  "reward_destination": "[:reward_destination]",\n  "amount": "[:amount]"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://polkadot-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "create_bonding_tx",\n  "inputs": {\n    "controller_account_address": "[:controller_account_address]",\n    "stash_account_address": "[:stash_account_address]",\n    "reward_destination": "[:reward_destination]",\n    "amount": "[:amount]"\n  }\n}\'\n')),(0,o.kt)("p",null,"Note that in this response you can find the unsigned, serialized transaction in ",(0,o.kt)("inlineCode",{parentName:"p"},"data[create_bonding_tx][raw]"),"."),(0,o.kt)("p",null,"Again we see two possible ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refresh_bonding_tx")," \u2014 If you need to get a fresh version of the transaction Payload (i.e., the nonce has increased)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sign_bonding_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network.")),(0,o.kt)("p",null,"We will choose ",(0,o.kt)("inlineCode",{parentName:"p"},"sign_bonding_tx"),", which indicates one Input to collect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") \u2014 The signed transaction Payload ready to be broadcast to the network.")))}u.isMDXComponent=!0}}]);