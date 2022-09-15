"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Create a New Flow"},i=void 0,l={unversionedId:"guides/staking-api-flows/polkadot/transfer/create-new-flow",id:"guides/staking-api-flows/polkadot/transfer/create-new-flow",title:"Create a New Flow",description:"We will create a new Flow with POST /api/v1/flows.",source:"@site/docs/guides/staking-api-flows/polkadot/transfer/1_create-new-flow.mdx",sourceDirName:"guides/staking-api-flows/polkadot/transfer",slug:"/guides/staking-api-flows/polkadot/transfer/create-new-flow",permalink:"/guides/staking-api-flows/polkadot/transfer/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create a New Flow"},sidebar:"docsSidebar",previous:{title:"Transfer",permalink:"/guides/staking-api-flows/polkadot/transfer/"},next:{title:"Submit Transfer Data",permalink:"/guides/staking-api-flows/polkadot/transfer/submit-transfer-data"}},s={},p=[],c={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will create a new Flow with ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/v1/flows"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"flow")," JSON field for this request will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network_code": "dot",\n  "chain_code": "westend",\n  "operation": "transfer",\n  "version": "v1"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST https://polkadot-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "dot",\n    "chain_code": "westend",\n    "operation": "transfer",\n    "version": "v1"\n  }\n}\'\n')),(0,a.kt)("p",null,"The response indicates one possible action:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create_transfer_tx")," - use this action to generate a deposit transaction to stake your ETH.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_transfer_tx")," action indicates three fields for data collection:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"from_account_address")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") \u2014 The address which DOT will be transferred from."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"to_account_address")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") \u2014 The address which DOT will be transferred to."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"amount")," (",(0,a.kt)("strong",{parentName:"li"},"required"),") \u2014 The amount of DOT to be transferred.")))}f.isMDXComponent=!0}}]);