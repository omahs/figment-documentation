"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,g=p["".concat(s,".").concat(f)]||p[f]||c[f]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Un-Delegate",sidebar_position:2},i=void 0,l={unversionedId:"guides/slate-flows/polkadot/undelegate/index",id:"guides/slate-flows/polkadot/undelegate/index",title:"Un-Delegate",description:"Slate's DOT unstaking flow will walk your application through the process of unbonding DOT, and optional processes of chilling and withdrawing. There are a few different routes through this process:",source:"@site/docs/guides/slate-flows/polkadot/undelegate/index.mdx",sourceDirName:"guides/slate-flows/polkadot/undelegate",slug:"/guides/slate-flows/polkadot/undelegate/",permalink:"/figment-documentation/guides/slate-flows/polkadot/undelegate/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Un-Delegate",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Submit a Signed Transaction for Broadcast",permalink:"/figment-documentation/guides/slate-flows/polkadot/delegate/submit-a-signed-transaction"},next:{title:"Create a New Flow",permalink:"/figment-documentation/guides/slate-flows/polkadot/undelegate/create-new-flow"}},s={},u=[],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Slate's DOT unstaking flow will walk your application through the process of unbonding DOT, and optional processes of chilling and withdrawing. There are a few different routes through this process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Withdraw")," from delegated account"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unbond")," from the delegated account")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before")," unbonding:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the user selects the maximum amount and the delegation has active nominators, the account will first be chilled")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After")," unbonding:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If an unbonded entry does not exist, then it is considered rebonded and we are done"),(0,o.kt)("li",{parentName:"ul"},"If there are no funds to withdraw, then it is considered unbonded and we are done"),(0,o.kt)("li",{parentName:"ul"},"If there are funds to withdraw, we proceed to withdraw funds and are done")),(0,o.kt)("p",null,"In the following steps we will illustrate the entire flow from chilling to withdrawing."))}c.isMDXComponent=!0}}]);