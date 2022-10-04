"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));r.p;const o=r.p+"assets/images/analytics_10_days-e39517341b9c7f492af34e8087d824d2.png",s=r.p+"assets/images/request_logs-bcebe561d0822e7ec494bbfcc162da5b.png",i=r.p+"assets/images/request_logs_individual-4f1a22ec7a194091eccf7b07bdc25e71.png",l={title:"App Analytics & Request Logs",sidebar_position:11},p=void 0,c={unversionedId:"quickstart/app-analytics-and-request-logs",id:"quickstart/app-analytics-and-request-logs",title:"App Analytics & Request Logs",description:"Overview",source:"@site/docs/quickstart/app-analytics-and-request-logs.mdx",sourceDirName:"quickstart",slug:"/quickstart/app-analytics-and-request-logs",permalink:"/quickstart/app-analytics-and-request-logs",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"App Analytics & Request Logs",sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Adding Subgraphs",permalink:"/quickstart/adding-subgraphs"},next:{title:"Settings and Security",permalink:"/quickstart/settings-and-security"}},u={},d=[{value:"Overview",id:"overview",level:2}],m={toc:d};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("strong",{parentName:"p"},"Analytics")," tab shows traffic for all protocols over the past 24 hours. You can use the dropdowns at the top right of the page to select individual protocols and switch the timeframe to ",(0,a.kt)("strong",{parentName:"p"},"1"),", ",(0,a.kt)("strong",{parentName:"p"},"3"),", ",(0,a.kt)("strong",{parentName:"p"},"10"),", or ",(0,a.kt)("strong",{parentName:"p"},"30")," days."),(0,a.kt)("img",{src:o,alt:"App Analytics 10 Days",width:"500",className:"shadow--tl inline-image"}),(0,a.kt)("p",null,"Here you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See the summary of ",(0,a.kt)("strong",{parentName:"li"},"Protocols Activity")," for your app"),(0,a.kt)("li",{parentName:"ul"},"View charts of ",(0,a.kt)("strong",{parentName:"li"},"Requests"),", ",(0,a.kt)("strong",{parentName:"li"},"Latency"),", and ",(0,a.kt)("strong",{parentName:"li"},"Errors")," for all protocols in your app"),(0,a.kt)("li",{parentName:"ul"},"View the ",(0,a.kt)("strong",{parentName:"li"},"Request Logs")," for your app",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dropdowns here allow you to filter by latency (in a range of <100ms to >5sec), status groups, or response codes (200, 429, 501, etc...)")))),(0,a.kt)("img",{src:s,alt:"App Analytics Request Logs",width:"500",className:"shadow--tl inline-image"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the corner box icon below the ",(0,a.kt)("strong",{parentName:"li"},"Logs")," column to see the individual log response for that request.")),(0,a.kt)("img",{src:i,alt:"App Analytics Request Logs - Individual Request",width:"500",className:"shadow--tl inline-image"}))}g.isMDXComponent=!0}}]);