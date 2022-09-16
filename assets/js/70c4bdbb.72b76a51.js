"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[4089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Un-Delegate"},o=void 0,l={unversionedId:"guides/staking-api/Near/undelegate/index",id:"guides/staking-api/Near/undelegate/index",title:"Un-Delegate",description:"Un-delegating NEAR is a simple process. We will collect:",source:"@site/docs/guides/staking-api/Near/undelegate/index.mdx",sourceDirName:"guides/staking-api/Near/undelegate",slug:"/guides/staking-api/Near/undelegate/",permalink:"/guides/staking-api/Near/undelegate/",draft:!1,tags:[],version:"current",frontMatter:{title:"Un-Delegate"},sidebar:"docsSidebar",previous:{title:"Submit Signed Transaction for Broadcast",permalink:"/guides/staking-api/Near/transfer/submit-signed-transaction"},next:{title:"Create a New Flow",permalink:"/guides/staking-api/Near/undelegate/create-new-flow"}},u={},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un-delegating NEAR is a simple process. We will collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The delegating address"),(0,r.kt)("li",{parentName:"ul"},"The signing address"),(0,r.kt)("li",{parentName:"ul"},"The validator address to un-delegate from"),(0,r.kt)("li",{parentName:"ul"},"Amount of NEAR to be un-delegated"),(0,r.kt)("li",{parentName:"ul"},"Optionally, an undelegate all flag if you wish to undelegae the full amount without having to check the current balance"),(0,r.kt)("li",{parentName:"ul"},"Optionally, a max gas amount (upper limit of the transaction fee to be paid)")),(0,r.kt)("p",null,"Once the un-delegation transaction is confirmed on-chain, the unbonding process will begin immediately."),(0,r.kt)("p",null,"NEAR has an unbonding period of approximately 4 days. During this time the unbonding NEAR will be illiquid and will not earn rewards.\nUpon completion of the unbonding period, the NEAR will be available to be withdrawn."),(0,r.kt)("p",null,"By continuing with the Flow you will be able to make a withdrawal transaction."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have a balance waiting to be withdrawn and do not wish to un-delegate more NEAR, you can use the create_withdraw_tx action to withdraw from that balance without first unbonding any NEAR.")),(0,r.kt)("p",null,"Follow the steps in this section for the details on this process."))}p.isMDXComponent=!0}}]);