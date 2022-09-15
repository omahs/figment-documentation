"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Sign the Unbond Transaction"},i=void 0,s={unversionedId:"guides/staking-api-flows/polkadot/undelegate/sign-unbond-transaction",id:"guides/staking-api-flows/polkadot/undelegate/sign-unbond-transaction",title:"Sign the Unbond Transaction",description:"This part is all on you! Get that transaction signed and move on to the next step.",source:"@site/docs/guides/staking-api-flows/polkadot/undelegate/7_sign-unbond-transaction.mdx",sourceDirName:"guides/staking-api-flows/polkadot/undelegate",slug:"/guides/staking-api-flows/polkadot/undelegate/sign-unbond-transaction",permalink:"/guides/staking-api-flows/polkadot/undelegate/sign-unbond-transaction",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Sign the Unbond Transaction"},sidebar:"docsSidebar",previous:{title:"Create Unbond Transaction",permalink:"/guides/staking-api-flows/polkadot/undelegate/create-unbond-transaction"},next:{title:"Submit a Signed Unbond Transaction for Broadcast",permalink:"/guides/staking-api-flows/polkadot/undelegate/submit-signed-unbond-transaction"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This part is all on you! Get that transaction signed and move on to the next step."),(0,o.kt)("admonition",{title:"important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"At this point, it is best practice to always confirm the details of the transaction, which can be done using our provided ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@figmentio/slate"},"NPM package")," or CLI tool.")))}u.isMDXComponent=!0}}]);