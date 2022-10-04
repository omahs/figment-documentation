"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Un-Delegate",sidebar_position:2},o=void 0,l={unversionedId:"guides/staking-api/Solana/undelegate/index",id:"guides/staking-api/Solana/undelegate/index",title:"Un-Delegate",description:"In order to un-stake SOL, we will:",source:"@site/docs/guides/staking-api/Solana/undelegate/index.mdx",sourceDirName:"guides/staking-api/Solana/undelegate",slug:"/guides/staking-api/Solana/undelegate/",permalink:"/guides/staking-api/Solana/undelegate/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Un-Delegate",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Submit a Signed Transaction for Broadcast",permalink:"/guides/staking-api/Solana/delegate/submit-a-signed-transaction"},next:{title:"Create a New Flow",permalink:"/guides/staking-api/Solana/undelegate/create-new-flow"}},c={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to un-stake SOL, we will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deactivate a given stake account"),(0,a.kt)("li",{parentName:"ul"},"Wait for the stake to become inactive (generally at the next epoch boundary)"),(0,a.kt)("li",{parentName:"ul"},"Withdraw the inactive SOL back to the funding account")))}p.isMDXComponent=!0}}]);