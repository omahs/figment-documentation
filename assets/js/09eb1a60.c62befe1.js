"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Submit Delegate Transaction Data"},o=void 0,l={unversionedId:"guides/staking-api/Polygon/delegate/submit-delegate-transaction-data",id:"guides/staking-api/Polygon/delegate/submit-delegate-transaction-data",title:"Submit Delegate Transaction Data",description:"Now that the allowance is in place, submit a delegation transaction to delegate the MATIC.",source:"@site/docs/guides/staking-api/Polygon/delegate/6_submit-delegate-transaction-data.mdx",sourceDirName:"guides/staking-api/Polygon/delegate",slug:"/guides/staking-api/Polygon/delegate/submit-delegate-transaction-data",permalink:"/guides/staking-api/Polygon/delegate/submit-delegate-transaction-data",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Submit Delegate Transaction Data"},sidebar:"docsSidebar",previous:{title:"Submit a Signed Allowance Transaction for Broadcast",permalink:"/guides/staking-api/Polygon/delegate/submit-signed-transaction"},next:{title:"Sign the Delegate Transaction",permalink:"/guides/staking-api/Polygon/delegate/sign-delegate-transaction"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that the allowance is in place, submit a delegation transaction to delegate the MATIC.\nThe previous response indicates two required ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "gas_limit": "[:gas_limit]",\n  "gas_price": "[:gas_price]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example cURL request"',title:'"Example',cURL:!0,'request"':!0},'curl --request PUT \\\n  --url https://slate.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header \'Authorization: API_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "create_delegate_tx",\n  "inputs": {\n    "gas_limit": "[:gas_limit]",\n    "gas_price": "[:gas_price]"\n  }\n}\'\n')),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In this response you can find the unsigned, serialized transaction in ",(0,r.kt)("inlineCode",{parentName:"p"},"data[create_delegate_tx][raw]"),".")),(0,r.kt)("p",null,"There are two possible ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refresh_delegate_tx")," \u2014 If you need to get a fresh version of the transaction Payload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sign_delegate_tx")," \u2014 Submit a signed transaction Payload ready to be broadcast to the network.")),(0,r.kt)("p",null,"We will chose `sign_delegate_tx``, so note that it indicates one Input to collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction_payload")," (",(0,r.kt)("strong",{parentName:"li"},"required"),") \u2014 the signed transaction payload ready to be broadcast to the network.")))}d.isMDXComponent=!0}}]);