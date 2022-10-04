"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Submit a Signed Delegate Transaction for Broadcast"},o=void 0,l={unversionedId:"guides/staking-api/Polygon/delegate/submit-a-signed-transaction",id:"guides/staking-api/Polygon/delegate/submit-a-signed-transaction",title:"Submit a Signed Delegate Transaction for Broadcast",description:"After signing the transaction, you will PUT /api/v1/flows/[:flow_id]/next and the Staking API will manage broadcasting the transaction to the network.",source:"@site/docs/guides/staking-api/Polygon/delegate/8_submit-a-signed-transaction.mdx",sourceDirName:"guides/staking-api/Polygon/delegate",slug:"/guides/staking-api/Polygon/delegate/submit-a-signed-transaction",permalink:"/guides/staking-api/Polygon/delegate/submit-a-signed-transaction",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Submit a Signed Delegate Transaction for Broadcast"},sidebar:"docsSidebar",previous:{title:"Sign the Delegate Transaction",permalink:"/guides/staking-api/Polygon/delegate/sign-delegate-transaction"},next:{title:"Un-Delegate",permalink:"/guides/staking-api/Polygon/undelegate/"}},s={},c=[{value:"Delegation Flow Complete!",id:"delegation-flow-complete",level:2}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After signing the transaction, you will ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT /api/v1/flows/[:flow_id]/next")," and the Staking API will manage broadcasting the transaction to the network."),(0,r.kt)("p",null,"At this step, the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," JSON will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transaction_payload": "[:signed_transaction_payload]"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example cURL request"',title:'"Example',cURL:!0,'request"':!0},'  curl --request PUT \\\n  --url https://polygon-slate.datahub.figment.io/api/v1/flows/[:flow_id]/next \\\n  --header \'Authorization: API_KEY\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "sign_delegate_tx",\n  "inputs": {\n    "transaction_payload": "[:signed_transaction_payload]"\n  }\n}\'\n')),(0,r.kt)("h2",{id:"delegation-flow-complete"},"Delegation Flow Complete!"),(0,r.kt)("p",null,"Congratulations, your stake is now active and earning rewards!"))}g.isMDXComponent=!0}}]);