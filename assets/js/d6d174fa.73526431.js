"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,y=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={title:"DataHub Architecture",sidebar_position:3},l=void 0,o={unversionedId:"quickstart/architecture",id:"quickstart/architecture",title:"DataHub Architecture",description:"High Availability Architecture",source:"@site/docs/quickstart/architecture.mdx",sourceDirName:"quickstart",slug:"/quickstart/architecture",permalink:"/quickstart/architecture",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"DataHub Architecture",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Create an App",permalink:"/quickstart/create-an-app"},next:{title:"Using the Node API",permalink:"/quickstart/node-api"}},c={},s=[{value:"High Availability Architecture",id:"high-availability-architecture",level:2},{value:"Load Balancing Ingress Layer",id:"load-balancing-ingress-layer",level:3},{value:"High Availability Proxy Layer",id:"high-availability-proxy-layer",level:3},{value:"Blockchain Node and Indexer Layer",id:"blockchain-node-and-indexer-layer",level:3}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"high-availability-architecture"},"High Availability Architecture"),(0,n.kt)("p",null,"DataHub uses a three-tiered system architecture with high availability at each layer."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Load balancing Ingress Layer"),(0,n.kt)("li",{parentName:"ol"},"High availability Proxy Layer"),(0,n.kt)("li",{parentName:"ol"},"Blockchain Node and Indexer Layer")),(0,n.kt)("p",null,"Using this approach, we are able to provide a highly available service that can withstand multiple server failures at each level."),(0,n.kt)("h3",{id:"load-balancing-ingress-layer"},"Load Balancing Ingress Layer"),(0,n.kt)("p",null,"Requests to ",(0,n.kt)("inlineCode",{parentName:"p"},"*.datahub.figment.io")," are received and routed through a set of load balancers. This layer can tolerate failures of multiple individual load balancers and still function correctly.\nThe main job of this layer is to receive all inbound requests and terminate SSL before handing off to the Proxy Layer."),(0,n.kt)("h3",{id:"high-availability-proxy-layer"},"High Availability Proxy Layer"),(0,n.kt)("p",null,"Requests received at the Ingress Layer are then load balanced across a set of proxy servers at the Proxy Layer. This layer can tolerate failures of multiple individual proxy servers and still function correctly.\nThe main job of this layer is to authenticate requests, check Quotas and Rate Limits, and route requests to the correct service in the Blockchain Node and Indexer Layer."),(0,n.kt)("h3",{id:"blockchain-node-and-indexer-layer"},"Blockchain Node and Indexer Layer"),(0,n.kt)("p",null,"Requests authenticated at the Proxy Layer are then routed to the correct pool of blockchain nodes or indexers.\nDataHub runs many different kinds of nodes and indexers, for example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full nodes"),(0,n.kt)("li",{parentName:"ul"},"Archive nodes"),(0,n.kt)("li",{parentName:"ul"},"Higher level RPC/REST services (like Cosmos LCD)"),(0,n.kt)("li",{parentName:"ul"},"Services like Transaction Search")),(0,n.kt)("p",null,"Each of these types of nodes is run as a pool, meaning for example there will be 5 identical copies of a full node running together that can all service requests. The pool can tolerate failures of multiple individual nodes and still function correctly.\nThe main job of this layer is to either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Find and return the correct data (read)"),(0,n.kt)("li",{parentName:"ul"},"Submit a transaction (write)")))}d.isMDXComponent=!0}}]);