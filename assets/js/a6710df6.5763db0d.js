"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Assign Unstaking Data"},l=void 0,s={unversionedId:"guides/slate-flows/polkadot/undelegate/assign-unstaking-data",id:"guides/slate-flows/polkadot/undelegate/assign-unstaking-data",title:"Assign Unstaking Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[:flow_id]/next to move on to the next step.",source:"@site/docs/guides/slate-flows/polkadot/undelegate/2_assign-unstaking-data.mdx",sourceDirName:"guides/slate-flows/polkadot/undelegate",slug:"/guides/slate-flows/polkadot/undelegate/assign-unstaking-data",permalink:"/figment-documentation/guides/slate-flows/polkadot/undelegate/assign-unstaking-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Assign Unstaking Data"},sidebar:"docsSidebar",previous:{title:"Create a New Flow",permalink:"/figment-documentation/guides/slate-flows/polkadot/undelegate/create-new-flow"},next:{title:"Create Chill Transaction",permalink:"/figment-documentation/guides/slate-flows/polkadot/undelegate/create-chill-transaction"}},i={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required Inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step."),(0,r.kt)("p",null,"In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," JSON would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="inputs"',title:'"inputs"'},'{\n  "controller_account_address": "[:controller_account_address]",\n  "stash_account_address": "[:stash_account_address]",\n  "controller_proxy_account_address": "[:controller_proxy_account_address]",\n  "amount": "[:amount]",\n  "maximum": "[:maximum]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request"',title:'"Example',curl:!0,'request"':!0},'curl --request PUT \\\n  --url https://polkadot-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header \'Authorization: API-KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "assign_unstaking_data",\n  "inputs": {\n    "controller_account_address": "[:controller_account_address]",\n    "stash_account_address": "[:stash_account_address]",\n    "controller_proxy_account_address": "[:controller_proxy_account_address]",\n    "amount": "[:amount]",\n    "maximum": "[:maximum]"\n  }\n}\'\n')),(0,r.kt)("p",null,"If chilling is required before unbonding, we will be required to create a chill transaction: ",(0,r.kt)("a",{parentName:"p",href:"/guides/slate-flows/polkadot/undelegate/create-chill-transaction"},"3. Create Chill Transaction")),(0,r.kt)("p",null,"If no chilling is required, we can move straight to creating the unbond transaction: ",(0,r.kt)("a",{parentName:"p",href:"/guides/slate-flows/polkadot/undelegate/create-unbond-transaction"},"6. Create Unbond Transaction")))}d.isMDXComponent=!0}}]);