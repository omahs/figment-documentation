"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Submit Claim Rewards Data"},o=void 0,l={unversionedId:"guides/staking-api/Polygon/claim/submit-claim-rewards-data",id:"guides/staking-api/Polygon/claim/submit-claim-rewards-data",title:"Submit Claim Rewards Data",description:"After collecting the required inputs, we PUT /api/v1/flows/[:flow_id]/next to move on to the next step.",source:"@site/docs/guides/staking-api/Polygon/claim/2_submit-claim-rewards-data.mdx",sourceDirName:"guides/staking-api/Polygon/claim",slug:"/guides/staking-api/Polygon/claim/submit-claim-rewards-data",permalink:"/guides/staking-api/Polygon/claim/submit-claim-rewards-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Claim Rewards Data"},sidebar:"docsSidebar",previous:{title:"Create New Claim Flow",permalink:"/guides/staking-api/Polygon/claim/create-new-flow"},next:{title:"Sign the Claim Rewards Transaction",permalink:"/guides/staking-api/Polygon/claim/sign-claim-rewards-transaction"}},s={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step.\nIn this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," JSON would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "delegator_address": "[:delegator_address]",\n  "validator_address": "[:validator_address]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example cURL request"',title:'"Example',cURL:!0,'request"':!0},'curl -X PUT https://polygon-slate.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header \'Authorization: API_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "create_claim_rewards_tx",\n  "inputs": {\n    "delegator_address": "[:delegator_address]",\n    "validator_address": "[:validator_address]",\n  }\n}\'\n')),(0,r.kt)("p",null,"We see two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_claim_rewards_tx")," \u2014 If you need to get a fresh version of the transaction payload (for example, if the nonce needs to be updated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_claim_rewards_tx ")," \u2014 Submit a signed transaction payload ready to be broadcast to the network")),(0,r.kt)("p",null,"We will choose ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_claim_rewards_tx"),", which indicates one input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 the signed transaction payload ready to be broadcast to the network")))}p.isMDXComponent=!0}}]);