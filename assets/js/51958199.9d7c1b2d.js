"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[1726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Sign the Withdraw Transaction"},o=void 0,c={unversionedId:"guides/staking-api/Near/undelegate/sign-withdraw-transaction",id:"guides/staking-api/Near/undelegate/sign-withdraw-transaction",title:"Sign the Withdraw Transaction",description:"After successfully submiting the withdraw data, in reasponse you have received the transactionpayload, you'll be using this transactionpayload to sign the transaction for withdraw.",source:"@site/docs/guides/staking-api/Near/undelegate/8_sign-withdraw-transaction.mdx",sourceDirName:"guides/staking-api/Near/undelegate",slug:"/guides/staking-api/Near/undelegate/sign-withdraw-transaction",permalink:"/guides/staking-api/Near/undelegate/sign-withdraw-transaction",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Sign the Withdraw Transaction"},sidebar:"docsSidebar",previous:{title:"Submit Withdraw Data",permalink:"/guides/staking-api/Near/undelegate/submit-withdraw-data"},next:{title:"Submit a Signed Transaction for Broadcast",permalink:"/guides/staking-api/Near/undelegate/submit-a-signed-transaction"}},s={},p=[],l={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After successfully submiting the withdraw data, in reasponse you have received the ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_payload"),", you'll be using this ",(0,r.kt)("inlineCode",{parentName:"p"},"transaction_payload")," to sign the transaction for withdraw."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transaction_payload")," look something like this -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'"transaction_payload": "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3907cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3084edd29289b3a590be582317bb0061016a8df058b7c29a0278f5b82f86c283010100000002080000007769746864726177270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000"\n')),(0,r.kt)("p",null,"You can sign transaction using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.near.org/integrator/create-transactions#create-sign--send-transaction"},"NearJS API"),", ",(0,r.kt)("a",{parentName:"p",href:"/guides/staking-api/fireblocks-signing-transactions"},"Fireblocks")," OR ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@figmentio/slate"},"@figmentio/slate npm package"),"."),(0,r.kt)("p",null,"To know how to sign the transaction with ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@figmentio/slate"},"@figmentio/slate npm package")," please check out this guide ",(0,r.kt)("a",{parentName:"p",href:"/guides"},"HERE"),"."),(0,r.kt)("p",null,"Once you sign the transaction successfully you'll get the signed transaction payload in response which you'll need in next step so make sure to copy/save it."),(0,r.kt)("p",null,"Signed transaction payload will look something like this -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3907cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3084edd29289b3a590be582317bb0061016a8df058b7c29a0278f5b82f86c283010100000002080000007769746864726177270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b00000000000000000000000000000000000000235397dfd3f0b7ce06a4fe11395e36ce40d12610eae07dcc1dc1d962b38fa9592cdc22f6c9164b0155967a773c369719f71d76b84185ec13c39381343c63cf0b\n")),(0,r.kt)("p",null,"This part is all on you! Get that transaction signed and move on to the next step."),(0,r.kt)("admonition",{title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"At this point, it is best practice to always confirm the details of the transaction, which can be done using our provided ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@figmentio/slate"},"NPM package")," or CLI tool.")))}d.isMDXComponent=!0}}]);