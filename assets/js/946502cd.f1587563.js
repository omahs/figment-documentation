"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Create Withdraw Transaction"},i=void 0,l={unversionedId:"guides/staking-api/Polkadot/undelegate/create-withdraw-transaction",id:"guides/staking-api/Polkadot/undelegate/create-withdraw-transaction",title:"Create Withdraw Transaction",description:"This transaction be created directly from initializing or after the unbonding flow.",source:"@site/docs/guides/staking-api/Polkadot/undelegate/9_create-withdraw-transaction.mdx",sourceDirName:"guides/staking-api/Polkadot/undelegate",slug:"/guides/staking-api/Polkadot/undelegate/create-withdraw-transaction",permalink:"/guides/staking-api/Polkadot/undelegate/create-withdraw-transaction",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Create Withdraw Transaction"},sidebar:"docsSidebar",previous:{title:"Submit a Signed Unbond Transaction for Broadcast",permalink:"/guides/staking-api/Polkadot/undelegate/submit-signed-unbond-transaction"},next:{title:"Sign the Withdraw Transaction",permalink:"/guides/staking-api/Polkadot/undelegate/sign-withdraw-transaction"}},s={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This transaction be created directly from initializing or after the unbonding flow."),(0,r.kt)("p",null,"If this is created directly after initializing, inputs will be required to gather stash account address, controller account address, and an optional controller proxy account address. Otherwise, ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," will not be required."),(0,r.kt)("p",null,"If the information ",(0,r.kt)("strong",{parentName:"p"},"has not")," been collected:"),(0,r.kt)("p",null,"After collecting the required inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step."),(0,r.kt)("p",null,"In this case, the inputs JSON would be like in Step 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="inputs"',title:'"inputs"'},'{\n  "stash_account_address": "[:stash_account_address]",\n  "controller_account_address": "[:controller_account_address]",\n  "controller_proxy_account_address": "[:controller_proxy_account_address]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request"',title:'"Example',curl:!0,'request"':!0},'curl --request PUT \\\n  --url https://slate.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header \'Authorization: API-KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "create_withdraw_tx",\n  "inputs": {\n    "stash_account_address": "[:stash_account_address]",\n    "controller_account_address": "[:controller_account_address]",\n    "controller_proxy_account_address": "[:controller_proxy_account_address]"\n  }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If this is following the flow from unbonding, no inputs are required!")),(0,r.kt)("p",null,"Now that the account is unbonded, submit a withdraw transaction to withdraw from the stake."),(0,r.kt)("p",null,"Once again, there are no required ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," for this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request"',title:'"Example',curl:!0,'request"':!0},"curl --request PUT \\\n  --url https://slate.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header 'Authorization: API-KEY' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n  \"name\": \"create_withdraw_tx\",\n  \"inputs\": {}\n}'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"After creating the withdraw transaction, the rest will follow the same in both cases"),":"),(0,r.kt)("p",null,"We see two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_withdraw_tx")," \u2014 If you need to get a fresh version of the transaction Payload (ie. the nonce needs to be updated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_withdraw_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network")),(0,r.kt)("p",null,"We will choose ",(0,r.kt)("inlineCode",{parentName:"p"},"sign_withdraw_tx"),", which indicates one Input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 the signed transaction Payload ready to be broadcast to the network")))}u.isMDXComponent=!0}}]);