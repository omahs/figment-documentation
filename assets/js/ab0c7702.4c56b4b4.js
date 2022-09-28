"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Create New Delegation Flow"},o=void 0,l={unversionedId:"guides/staking-api/Polygon/delegate/create-new-flow",id:"guides/staking-api/Polygon/delegate/create-new-flow",title:"Create New Delegation Flow",description:"We will create a new Flow with POST /api/v1/flows.",source:"@site/docs/guides/staking-api/Polygon/delegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Polygon/delegate",slug:"/guides/staking-api/Polygon/delegate/create-new-flow",permalink:"/guides/staking-api/Polygon/delegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Delegation Flow"},sidebar:"docsSidebar",previous:{title:"Delegate",permalink:"/guides/staking-api/Polygon/delegate/"},next:{title:"Submit Staking Data",permalink:"/guides/staking-api/Polygon/delegate/submit-staking-data"}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will create a new Flow with ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v1/flows"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"flow")," JSON field for this request will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "network_code": "polygon",\n  "chain_code": "testnet",\n  "operation": "staking",\n  "version": "v1"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example cURL request"',title:'"Example',cURL:!0,'request"':!0},'curl -X POST https://polygon-slate.datahub.figment.io/api/v1/flows \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "flow": {\n    "network_code": "polygon",\n    "chain_code": "testnet",\n    "operation": "staking",\n    "version": "v1"\n  }\n}\'\n')),(0,r.kt)("p",null,"The response indicates one possible action:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assign_staking_data")," - provide the funding address, validator contract address, and amount of tokens to be staked. The Staking API will check on-chain to determine if an allowance transaction is needed.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign_staking_data")," action indicates five fields for data collection:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegator_address")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 the main wallet MATIC will be originating from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validator_address")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 the address of the validator smart contract associated with the validator you wish to delegate to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 the number of MATIC tokens to be delegated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minimum_shares_to_mint")," (",(0,r.kt)("em",{parentName:"li"},"optional"),") \u2014 the minimum number of shares of the delegation pool to be minted. If the exchange rate results in fewer shares being minted, the transaction will fail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_slippage_percentage")," (",(0,r.kt)("em",{parentName:"li"},"optional"),") \u2014 the maximum slippage you are willing to accept.")))}d.isMDXComponent=!0}}]);