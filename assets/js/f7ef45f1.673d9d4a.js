"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={title:"Response Codes & Error Codes",sidebar_position:2,pagination_prev:"guides/staking-api/index"},i=void 0,s={unversionedId:"guides/response-codes-and-error-codes",id:"guides/response-codes-and-error-codes",title:"Response Codes & Error Codes",description:"A quick reference for the standard HTTP response status codes and JSON-RPC error codes which you may encounter during the development process.",source:"@site/docs/guides/response-codes-and-error-codes.mdx",sourceDirName:"guides",slug:"/guides/response-codes-and-error-codes",permalink:"/guides/response-codes-and-error-codes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Response Codes & Error Codes",sidebar_position:2,pagination_prev:"guides/staking-api/index"},sidebar:"docsSidebar",previous:{title:"Staking API Overview",permalink:"/guides/staking-api/"},next:{title:"Network Guide",permalink:"/guides/network-guide"}},l={},d=[{value:"HTTP Response Status Codes",id:"http-response-status-codes",level:2},{value:"Common HTTP Status Codes",id:"common-http-status-codes",level:3},{value:"JSON-RPC Error Codes",id:"json-rpc-error-codes",level:2},{value:"Common JSON-RPC Error Codes",id:"common-json-rpc-error-codes",level:3},{value:"Quotas and Rate Limits",id:"quotas-and-rate-limits",level:2},{value:"Quotas",id:"quotas",level:3},{value:"Rate Limits",id:"rate-limits",level:3},{value:"How Do I Know If I&#39;ve Hit My Quota?",id:"how-do-i-know-if-ive-hit-my-quota",level:4},{value:"How Do I Know If I&#39;m Being Rate Limited?",id:"how-do-i-know-if-im-being-rate-limited",level:4}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A quick reference for the standard HTTP response status codes and JSON-RPC error codes which you may encounter during the development process."),(0,n.kt)("h2",{id:"http-response-status-codes"},"HTTP Response Status Codes"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"HTTP status codes are three-digit responses from a server to a client request."),(0,n.kt)("p",{parentName:"admonition"},"These status codes are grouped into 5 different categories:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"1xx - ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses"},"Informational Responses"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"2xx - ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses"},"Successful Responses"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"3xx - ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages"},"Redirection Messages"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"4xx - ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"},"Client Error Responses"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"5xx - ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses"},"Server Error Responses"))))),(0,n.kt)("h3",{id:"common-http-status-codes"},"Common HTTP Status Codes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"200")),(0,n.kt)("td",{parentName:"tr",align:"left"},"OK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The request succeeded.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"400")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bad Request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The server cannot or will not process the request due to some client error like incorrect request syntax.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"401")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unauthorized"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The client must authenticate itself to get the request response, this can occur due to an incorrect API Key or Auth token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"403")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The client doesn't have access rights to the content/service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"404")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Found"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The server can not find the requested resource. Coming from an API, it can also mean that the endpoint is correct but the requested resource doesn't exist.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"405")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Method Not Allowed"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The request method is known by the server but is not supported by the target resource.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"408")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Request Timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A timeout means the server shut down the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"429")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Too Many Requests"),(0,n.kt)("td",{parentName:"tr",align:"left"},'The user has sent too many requests in a given amount of time ("rate limiting"). Read more about it in the ',(0,n.kt)("a",{parentName:"td",href:"/guides/response-codes-and-error-codes#quotas-and-rate-limits"},"Quotas and Rate Limits")," section.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"500")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Internal Server Error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The server has encountered a situation it does not know how to handle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"501")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Not Implemented"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The request method is not supported by the server and cannot be handled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"502")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bad Gateway"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This error response means that the server, while acting as a gateway, tried to handle the request and got an invalid response.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"503")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Service Unavailable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"504")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Gateway Timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This error response is given when the server is acting as a gateway and cannot get a response in time.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"json-rpc-error-codes"},"JSON-RPC Error Codes"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When you make a request to a server like DataHub, the server will process your request to send back the expected response/result but in case the request does not succeed, the server will send back a response with error result fields."),(0,n.kt)("p",{parentName:"admonition"},"Error result fields will contain the following information:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"code")," - A Number that indicates the error type that occurred, (ex. ",(0,n.kt)("inlineCode",{parentName:"p"},"-32600"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"message")," - A String providing a short description of the error.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"data")," - A Primitive or Structured value that contains additional information about the error. This may be omitted.")))),(0,n.kt)("h3",{id:"common-json-rpc-error-codes"},"Common JSON-RPC Error Codes"),(0,n.kt)("p",null,"For more details about the JSON-RPC error codes and full reference, please see the official ",(0,n.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC docs")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"-32700")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Parse error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"-32600")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid Request"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The JSON sent is not a valid Request object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"-32601")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Method not found"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The method does not exist / is not available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"-32602")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid params"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid method parameter(s).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"-32603")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Internal error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Internal JSON-RPC error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"-32000")," to ",(0,n.kt)("strong",{parentName:"td"},"-32099")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reserved for implementation-defined server-errors.")))),(0,n.kt)("h2",{id:"quotas-and-rate-limits"},"Quotas and Rate Limits"),(0,n.kt)("h3",{id:"quotas"},"Quotas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Quota measures how many total requests you can make across all your services in one day."),(0,n.kt)("li",{parentName:"ul"},"If you go over your Quota for the day, you'll need to upgrade your plan."),(0,n.kt)("li",{parentName:"ul"},"The goal of a Quota is to allow customers to pay for what they use, similar to a cell phone plan.")),(0,n.kt)("h3",{id:"rate-limits"},"Rate Limits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Rate Limit measures how many requests you can make against a specific endpoint in 1 second."),(0,n.kt)("li",{parentName:"ul"},"If you hit a Rate Limit for an endpoint, you'll need to retry your requests."),(0,n.kt)("li",{parentName:"ul"},"The goal of a Rate Limit is to ensure quality of service, and most users will never come close to hitting a Rate Limit.")),(0,n.kt)("h4",{id:"how-do-i-know-if-ive-hit-my-quota"},"How Do I Know If I've Hit My Quota?"),(0,n.kt)("p",null,'DataHub will return status code HTTP 429 "Too Many Requests" when you exceed your Quota.\nTo confirm this, you can view your current Quota usage on your DataHub Dashboard.'),(0,n.kt)("p",null,"You can upgrade your plan to increase your Quota."),(0,n.kt)("h4",{id:"how-do-i-know-if-im-being-rate-limited"},"How Do I Know If I'm Being Rate Limited?"),(0,n.kt)("p",null,'DataHub will return status code HTTP 429 "Too Many Requests" when you are getting rate limited for a specific endpoint.'),(0,n.kt)("p",null,"If this happens, you can confirm on your DataHub Dashboard that you are not over your Quota and that you are instead getting rate limited."),(0,n.kt)("p",null,"If you are getting rate limited, you will need to retry your requests in your application. Since Rate Limits are measured per second, you could simply wait a few seconds and try again."))}m.isMDXComponent=!0}}]);