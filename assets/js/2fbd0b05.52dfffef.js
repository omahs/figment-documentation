"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Delegate",pagination_prev:null},o=void 0,l={unversionedId:"guides/staking-api/Near/delegate/index",id:"guides/staking-api/Near/delegate/index",title:"Delegate",description:"Delegating NEAR is a simple process. We will collect:",source:"@site/docs/guides/staking-api/Near/delegate/index.mdx",sourceDirName:"guides/staking-api/Near/delegate",slug:"/guides/staking-api/Near/delegate/",permalink:"/guides/staking-api/Near/delegate/",draft:!1,tags:[],version:"current",frontMatter:{title:"Delegate",pagination_prev:null},sidebar:"docsSidebar",next:{title:"Create New Flow",permalink:"/guides/staking-api/Near/delegate/create-new-flow"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delegating NEAR is a simple process. We will collect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The delegating address"),(0,a.kt)("li",{parentName:"ul"},"The signing public key"),(0,a.kt)("li",{parentName:"ul"},"The validator address"),(0,a.kt)("li",{parentName:"ul"},"Amount of NEAR to be staked"),(0,a.kt)("li",{parentName:"ul"},"and optionally a max gas amount (upper limit of the transaction fee to be paid)")),(0,a.kt)("p",null,"Once the delegating transaction is confirmed on-chain, the delegation will immediately be active and earning staking rewards."),(0,a.kt)("p",null,"Follow the steps in this section for the details on this process."))}u.isMDXComponent=!0}}]);