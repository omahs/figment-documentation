"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9869],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=p(n),d=a,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(g,i(i({ref:e},l),{},{components:n})):r.createElement(g,i({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4660:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Sign the Transfer Transaction"},i=void 0,s={unversionedId:"guides/staking-api/Polkadot/transfer/sign-transfer-transaction",id:"guides/staking-api/Polkadot/transfer/sign-transfer-transaction",title:"Sign the Transfer Transaction",description:"This part is all on you! Get that transaction signed and move on to the next step.",source:"@site/docs/guides/staking-api/Polkadot/transfer/3_sign-transfer-transaction.mdx",sourceDirName:"guides/staking-api/Polkadot/transfer",slug:"/guides/staking-api/Polkadot/transfer/sign-transfer-transaction",permalink:"/guides/staking-api/Polkadot/transfer/sign-transfer-transaction",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Sign the Transfer Transaction"},sidebar:"docsSidebar",previous:{title:"Submit Transfer Data",permalink:"/guides/staking-api/Polkadot/transfer/submit-transfer-data"},next:{title:"Submit a Signed Transaction for Broadcast",permalink:"/guides/staking-api/Polkadot/transfer/submit-signed-transaction"}},c={},p=[],l={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This part is all on you! Get that transaction signed and move on to the next step."),(0,a.kt)("admonition",{title:"important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"At this point, it is best practice to always confirm the details of the transaction, which can be done using our provided ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@figmentio/slate"},"NPM package")," or CLI tool.")))}u.isMDXComponent=!0}}]);