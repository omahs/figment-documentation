"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Assign Unstaking Data"},i=void 0,s={unversionedId:"guides/staking-api-flows/polkadot/undelegate/assign-unstaking-data",id:"guides/staking-api-flows/polkadot/undelegate/assign-unstaking-data",title:"Assign Unstaking Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[:flow_id]/next to move on to the next step.",source:"@site/docs/guides/staking-api-flows/polkadot/undelegate/2_assign-unstaking-data.mdx",sourceDirName:"guides/staking-api-flows/polkadot/undelegate",slug:"/guides/staking-api-flows/polkadot/undelegate/assign-unstaking-data",permalink:"/guides/staking-api-flows/polkadot/undelegate/assign-unstaking-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Assign Unstaking Data"},sidebar:"docsSidebar",previous:{title:"Create a New Flow",permalink:"/guides/staking-api-flows/polkadot/undelegate/create-new-flow"},next:{title:"Create Chill Transaction",permalink:"/guides/staking-api-flows/polkadot/undelegate/create-chill-transaction"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After collecting the required Inputs, we ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step."),(0,r.kt)("p",null,"In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," JSON would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="inputs"',title:'"inputs"'},'{\n  "controller_account_address": "[:controller_account_address]",\n  "stash_account_address": "[:stash_account_address]",\n  "controller_proxy_account_address": "[:controller_proxy_account_address]",\n  "amount": "[:amount]",\n  "maximum": "[:maximum]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example curl request"',title:'"Example',curl:!0,'request"':!0},'curl --request PUT \\\n  --url https://polkadot-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header \'Authorization: API-KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "assign_unstaking_data",\n  "inputs": {\n    "controller_account_address": "[:controller_account_address]",\n    "stash_account_address": "[:stash_account_address]",\n    "controller_proxy_account_address": "[:controller_proxy_account_address]",\n    "amount": "[:amount]",\n    "maximum": "[:maximum]"\n  }\n}\'\n')),(0,r.kt)("p",null,"If chilling is required before unbonding, we will be required to create a chill transaction: ",(0,r.kt)("a",{parentName:"p",href:"/guides/staking-api-flows/polkadot/undelegate/create-chill-transaction"},"3. Create Chill Transaction")),(0,r.kt)("p",null,"If no chilling is required, we can move straight to creating the unbond transaction: ",(0,r.kt)("a",{parentName:"p",href:"/guides/staking-api-flows/polkadot/undelegate/create-unbond-transaction"},"6. Create Unbond Transaction")))}p.isMDXComponent=!0}}]);