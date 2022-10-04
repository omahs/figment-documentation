"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Create Chill Transaction"},o=void 0,l={unversionedId:"guides/staking-api/Polkadot/undelegate/create-chill-transaction",id:"guides/staking-api/Polkadot/undelegate/create-chill-transaction",title:"Create Chill Transaction",description:"After collecting the required Inputs, we PUT /api/v1/flows/[:flow_id]/next to move on to the next step.",source:"@site/docs/guides/staking-api/Polkadot/undelegate/3_create-chill-transaction.mdx",sourceDirName:"guides/staking-api/Polkadot/undelegate",slug:"/guides/staking-api/Polkadot/undelegate/create-chill-transaction",permalink:"/guides/staking-api/Polkadot/undelegate/create-chill-transaction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create Chill Transaction"},sidebar:"docsSidebar",previous:{title:"Assign Unstaking Data",permalink:"/guides/staking-api/Polkadot/undelegate/assign-unstaking-data"},next:{title:"Sign the Chill Transaction",permalink:"/guides/staking-api/Polkadot/undelegate/sign-chill-transaction"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required Inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step."),(0,r.kt)("p",null,"All data is already input so the inputs JSON is empty:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="inputs"',title:'"inputs"'},"{}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request"',title:'"Example',curl:!0,'request"':!0},"curl --request PUT \\\n  --url https://polkadot-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header 'Authorization: API-KEY' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n  \"name\": \"create_chill_tx\",\n  \"inputs\": {}\n}'\n")),(0,r.kt)("p",null,"We see two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_chill_tx")," \u2014 If you need to get a fresh version of the transaction Payload (ie. the nonce needs to be updated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_chill_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network")),(0,r.kt)("p",null,"We will choose `sign_chill_tx``, which indicates one Input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 the signed transaction Payload ready to be broadcast to the network")))}u.isMDXComponent=!0}}]);