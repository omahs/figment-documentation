"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Create New Flow"},l=void 0,o={unversionedId:"guides/staking-api-flows/avalanche/delegate/create-new-flow",id:"guides/staking-api-flows/avalanche/delegate/create-new-flow",title:"Create New Flow",description:"We will create a new Flow with POST /api/v1/flows.",source:"@site/docs/guides/staking-api-flows/avalanche/delegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api-flows/avalanche/delegate",slug:"/guides/staking-api-flows/avalanche/delegate/create-new-flow",permalink:"/guides/staking-api-flows/avalanche/delegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Flow"},sidebar:"docsSidebar",previous:{title:"Delegate",permalink:"/guides/staking-api-flows/avalanche/delegate/"},next:{title:"Submit Delegate Data",permalink:"/guides/staking-api-flows/avalanche/delegate/submit-delegate-data"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will create a new Flow with ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v1/flows"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"flow")," JSON field for this request will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network_code": "avalanche",\n  "chain_code": "testnet",\n  "operation": "staking",\n  "version": "v1"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST https://avalanche-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n"flow": {\n  "network_code": "avalanche",\n  "chain_code": "testnet",\n  "operation": "staking",\n  "version": "v1"\n  }\n}\'\n')),(0,r.kt)("p",null,"The response indicates one possible action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create_delegate_tx")," - use this action to generate a delegation transaction to stake your NEAR.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"create_delegate_tx")," action indicates five fields for data collection:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validator_address")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 Figment validator address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegator_address")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 The delegating address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegator_pubkey")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 The public key of the signing account. Must start with ",(0,r.kt)("inlineCode",{parentName:"li"},"ed25519:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 The amount of NEAR to be delegated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_gas")," (",(0,r.kt)("em",{parentName:"li"},"optional"),") \u2014 Adjust if you wish to limit the possible transaction fee.")))}u.isMDXComponent=!0}}]);