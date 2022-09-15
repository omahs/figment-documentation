"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Create a New Flow"},i=void 0,l={unversionedId:"guides/staking-api-flows/polkadot/delegate/create-new-flow",id:"guides/staking-api-flows/polkadot/delegate/create-new-flow",title:"Create a New Flow",description:"We will create a new Flow with POST /api/v1/flows.",source:"@site/docs/guides/staking-api-flows/polkadot/delegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api-flows/polkadot/delegate",slug:"/guides/staking-api-flows/polkadot/delegate/create-new-flow",permalink:"/guides/staking-api-flows/polkadot/delegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a New Flow"},sidebar:"docsSidebar",previous:{title:"Delegate",permalink:"/guides/staking-api-flows/polkadot/delegate/"},next:{title:"Submit Bonding Transaction Data",permalink:"/guides/staking-api-flows/polkadot/delegate/submit-bonding-transaction-data"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We will create a new Flow with ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/v1/flows"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"flow")," JSON field for this request will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "operation": "staking",\n  "version": "v1"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST https://polkadot-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "polkadot",\n    "chain_code": "westend",\n    "operation": "staking",\n    "version": "v1"\n  }\n}\'\n')),(0,o.kt)("p",null,"The response indicates two possible actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assign_stash_and_controller_account")," \u2014 Use this action if you already have a controller account set up and wish to add bond to it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create_bonding_tx")," \u2014 Use this action if you do not have a controller account set up and would like to create a controller and bond tokens.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you want to skip creating a stash / controller relationship, you will use the assign_stash_and_controller_account action and skip to step (?)")),(0,o.kt)("p",null,"Since we want to create a new controller relationship, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_bonding_tx")," action which indicates six fields for data collection:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"controller_account_address")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") - The wallet DOT will be bonded to."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"controller_proxy_account_address")," (",(0,o.kt)("em",{parentName:"li"},"optional"),") - A proxy account that will sign on behalf of the controller account."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"stash_ account_address")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") - Primary wallet from which DOT will be bonded."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"stash_proxy_account_address")," (",(0,o.kt)("em",{parentName:"li"},"optional"),") - A proxy account that will sign on behalf of the controller account."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"reward_destination")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") - Indicates whether rewards are to be:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added to the staked balance (",(0,o.kt)("inlineCode",{parentName:"li"},"staked"),")"),(0,o.kt)("li",{parentName:"ul"},"Sent to the controller account, liquid (",(0,o.kt)("inlineCode",{parentName:"li"},"controller"),")"),(0,o.kt)("li",{parentName:"ul"},"Sent to the stash account, liquid (",(0,o.kt)("inlineCode",{parentName:"li"},"stash"),")"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"amount")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") - The amount of DOT to be bonded to the controller. This field should be in full DOT, not in Planck (ie. if you want to stake 5 DOT, return ",(0,o.kt)("inlineCode",{parentName:"li"},'"amount": 5.0'),"). The Staking API will translate the amount to Plancks so you do not have to worry about the conversion factor.")))}d.isMDXComponent=!0}}]);