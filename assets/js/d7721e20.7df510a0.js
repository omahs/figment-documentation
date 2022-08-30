"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"1. Create a New Flow"},l=void 0,i={unversionedId:"guides/slate-flows/polkadot/undelegate/create-new-flow",id:"guides/slate-flows/polkadot/undelegate/create-new-flow",title:"1. Create a New Flow",description:"We will create a new Flow with a POST request to /api/v1/flows.",source:"@site/docs/guides/slate-flows/polkadot/undelegate/1_create-new-flow.mdx",sourceDirName:"guides/slate-flows/polkadot/undelegate",slug:"/guides/slate-flows/polkadot/undelegate/create-new-flow",permalink:"/guides/slate-flows/polkadot/undelegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Create a New Flow"},sidebar:"docsSidebar",previous:{title:"Un-Delegate",permalink:"/guides/slate-flows/polkadot/undelegate/"},next:{title:"2. Assign Unstaking Data",permalink:"/guides/slate-flows/polkadot/undelegate/assign-unstaking-data"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We will create a new Flow with a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"flow")," JSON field for this request will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network_code": "ethereum",\n  "chain_code": "goerli-prater",\n  "operation": "staking",\n  "version": "v1"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST https://polkadot-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "ethereum",\n    "chain_code": "goerli-prater",\n    "operation": "staking",\n    "version": "v1"\n  }\n}\'\n')),(0,o.kt)("p",null,"The response indicates two possible actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assign_unstaking_data")," \u2014 use this action if you want to unbond (optionally preceeded by chilling and then followed by optional withdrawing)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create_withdraw_tx")," \u2014 use this action if you want to withdraw ",(0,o.kt)("em",{parentName:"li"},"without")," unbonding.")),(0,o.kt)("p",null,"Since we want to unbond, we will use action 1."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"assign_unstaking_data")," action indicates 5 fields for data collection:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"stash_account_address")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") \u2014 the wallet DOT is bonded to"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"controller_account_address")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") \u2014 the account that controls the staking/unstaking actions. This is the account that will sign transactions"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"controller_proxy_account_address")," (",(0,o.kt)("strong",{parentName:"li"},"optional"),") \u2014 a proxy account that can sign on behalf of the controller account"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"amount")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") - the amount of DOT to be unbonded from the controller. This field should be in full DOT, not in Planck (ie. if you want to stake 5 DOT, return ",(0,o.kt)("inlineCode",{parentName:"li"},'"amount": 5.0'),"). Slate will translate the amount to Plancks so you do not have to worry about the conversion factor"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"maximum")," (",(0,o.kt)("strong",{parentName:"li"},"optional"),") - this boolean indicates if all bonded funds should be unbonded")),(0,o.kt)("p",null,"If the account does not need to be chilled, you can skip to ",(0,o.kt)("a",{parentName:"p",href:"/guides/slate-flows/polkadot/undelegate/create-unbond-transaction"},"6. Create Unbond Transaction")),(0,o.kt)("p",null,"If you want to skip the unbonding process as well, you can skip to ",(0,o.kt)("a",{parentName:"p",href:"/guides/slate-flows/polkadot/undelegate/create-withdraw-transaction"},"9. Create Withdraw Transaction")))}p.isMDXComponent=!0}}]);