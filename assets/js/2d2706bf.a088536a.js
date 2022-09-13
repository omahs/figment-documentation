"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[6029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Submit Deactivate Transaction Data"},o=void 0,l={unversionedId:"guides/staking-api-flows/solana/undelegate/submit-deactivate-transaction-data",id:"guides/staking-api-flows/solana/undelegate/submit-deactivate-transaction-data",title:"Submit Deactivate Transaction Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[",source:"@site/docs/guides/staking-api-flows/solana/undelegate/2_submit-deactivate-transaction-data.mdx",sourceDirName:"guides/staking-api-flows/solana/undelegate",slug:"/guides/staking-api-flows/solana/undelegate/submit-deactivate-transaction-data",permalink:"/guides/staking-api-flows/solana/undelegate/submit-deactivate-transaction-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Deactivate Transaction Data"},sidebar:"docsSidebar",previous:{title:"Create a New Flow",permalink:"/guides/staking-api-flows/solana/undelegate/create-new-flow"},next:{title:"Sign the Deactivate Transaction",permalink:"/guides/staking-api-flows/solana/undelegate/sign-deactivate-transaction"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required Inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step. In this case, the inputs JSON would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "funding_account_pubkey": "[:funding_account_pubkey]",\n  "stake_account_pubkey": "[:stake_account_pubkey]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://solana-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "create_deactivate_tx",\n  "inputs": {\n    "funding_account_pubkey": "[:funding_account_pubkey]",\n    "stake_account_pubkey": "[:stake_account_pubkey]"\n  }\n}\'\n')),(0,r.kt)("p",null,"Note that in this response you can find the unsigned, serialized transaction in ",(0,r.kt)("inlineCode",{parentName:"p"},"data[create_deactivate_transaction][raw]"),"."),(0,r.kt)("p",null,"Again we see two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_deactivate_tx")," \u2014 If you need to get a fresh version of the transaction Payload (i.e., the recent blockhash has expired)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_deactivate_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network.")),(0,r.kt)("p",null,"We will choose ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_deactivate_tx"),", which indicates one Input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 The signed transaction Payload ready to be broadcast to the network.")))}p.isMDXComponent=!0}}]);