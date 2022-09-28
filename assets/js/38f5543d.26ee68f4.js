"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Submit Staking Data"},o=void 0,l={unversionedId:"guides/staking-api/Polygon/delegate/submit-staking-data",id:"guides/staking-api/Polygon/delegate/submit-staking-data",title:"Submit Staking Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[:flow_id]/next to move on to the next step.",source:"@site/docs/guides/staking-api/Polygon/delegate/2_submit-staking-data.mdx",sourceDirName:"guides/staking-api/Polygon/delegate",slug:"/guides/staking-api/Polygon/delegate/submit-staking-data",permalink:"/guides/staking-api/Polygon/delegate/submit-staking-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Staking Data"},sidebar:"docsSidebar",previous:{title:"Create New Delegation Flow",permalink:"/guides/staking-api/Polygon/delegate/create-new-flow"},next:{title:"Submit Staking Allowance Data",permalink:"/guides/staking-api/Polygon/delegate/submit-allowance-transaction-data"}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required Inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step.\nIn this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," JSON would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "delegator_address": "[:delegator_address]",\n  "validator_address": "[:validator_address]",\n  "amount": "[:amount]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example cURL request"',title:'"Example',cURL:!0,'request"':!0},'curl -X PUT https://polygon-slate.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header \'Authorization: API_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "assign_staking_data",\n  "inputs": {\n    "delegator_address": "[:delegator_address]",\n    "validator_address": "[:validator_address]",\n    "amount": "[:amount]"\n  }\n}\'\n')),(0,r.kt)("p",null,"In the response received from the Staking API we see one possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If an allowance transaction is needed, ",(0,r.kt)("inlineCode",{parentName:"li"},"create_allowance_tx")),(0,r.kt)("li",{parentName:"ul"},"Otherwise, if no further allowance is needed, ",(0,r.kt)("inlineCode",{parentName:"li"},"create_delegate_tx"))),(0,r.kt)("p",null,"Assuming an allowance is needed we will proceed with ",(0,r.kt)("inlineCode",{parentName:"p"},"create_allowance_transaction")," which indicates two optional Inputs to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gas_limit")," (",(0,r.kt)("em",{parentName:"li"},"optional"),") - The gas limit for the transaction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gas_price")," (",(0,r.kt)("em",{parentName:"li"},"optional"),") - The highest gas price you will pay for the transaction.")))}d.isMDXComponent=!0}}]);