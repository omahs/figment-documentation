"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"2. Submit Remove Proxy Data"},i=void 0,l={unversionedId:"guides/slate-flows/polkadot/remove-staking-proxy/submit-remove-proxy-data",id:"guides/slate-flows/polkadot/remove-staking-proxy/submit-remove-proxy-data",title:"2. Submit Remove Proxy Data",description:"After collecting the required Inputs, we PUT /api/v1/flows/[",source:"@site/docs/guides/slate-flows/polkadot/remove-staking-proxy/2_submit-remove-proxy-data.mdx",sourceDirName:"guides/slate-flows/polkadot/remove-staking-proxy",slug:"/guides/slate-flows/polkadot/remove-staking-proxy/submit-remove-proxy-data",permalink:"/guides/slate-flows/polkadot/remove-staking-proxy/submit-remove-proxy-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Submit Remove Proxy Data"},sidebar:"docsSidebar",previous:{title:"1. Create a New Flow",permalink:"/guides/slate-flows/polkadot/remove-staking-proxy/create-new-flow"},next:{title:"3. Sign the Remove Proxy Transaction",permalink:"/guides/slate-flows/polkadot/remove-staking-proxy/sign-remove-proxy-transaction"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After collecting the required Inputs, we ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," to move on to the next step. In this case, the inputs JSON would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "proxy_account_address": "[:proxy_account_address]",\n  "proxied_account_address": "[:proxied_account_address]"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PUT https://polkadot-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n-H "Authorization: API-KEY" \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "create_remove_proxy_tx",\n  "inputs": {\n    "proxy_account_address": "[:proxy_account_address]",\n    "proxied_account_address": "[:proxied_account_address]",\n  }\n}\'\n')),(0,o.kt)("p",null,"We see two possible ",(0,o.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refresh_remove_proxy_tx")," \u2014 If you need to get a fresh version of the transaction Payload (i.e., the nonce has increased)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sign_remove_proxy_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network.")),(0,o.kt)("p",null,"We will choose ",(0,o.kt)("inlineCode",{parentName:"p"},"sign_remove_proxy_tx"),", which indicates one Input to collect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,o.kt)("strong",{parentName:"li"},"required"),") \u2014 The signed transaction Payload ready to be broadcast to the network.")))}u.isMDXComponent=!0}}]);