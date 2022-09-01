"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9993],{2750:(e,t,n)=>{n.d(t,{ZP:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),l=n(5162),i=n(5413);const s={toc:[{value:"Authentication &amp; Making Calls",id:"authentication--making-calls",level:3}]};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"authentication--making-calls"},"Authentication & Making Calls"),(0,o.kt)("p",null,"Making API calls with DataHub requires authentication, which can be performed by passing your API key via the request header ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," or as a parameter in the query URL."),(0,o.kt)("p",null,"Here's some boilerplate to get you started."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+n.url.replace(/(apikey\/[^\/]+\/){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,o.kt)(l.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+n.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,o.kt)(l.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+n.url.replace(/(apikey\/[^\/]+\/){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,o.kt)(l.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+n.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}d.isMDXComponent=!0},3976:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6775);function r(e){let{network:t,networks:n,methods:r,service:l}=e;const i=(0,o.TH)(),s=(0,o.k6)();return a.createElement("div",null,a.createElement("label",null,"Change Network: "),a.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{s.push(i.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},n.map((e=>a.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),a.createElement("label",null," Jump to: "),a.createElement("select",{className:"custom-select",defaultValue:i.hash.replace("#","")||"",onChange:e=>{s.push("#"+e.target.value)}},r.map((e=>a.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},5258:(e,t,n)=>{n.d(t,{S:()=>D});var a=n(7462),o=n(7294),r=n(7748),l=n(460),i=n.n(l),s=n(3746),d=n(6412);const c={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function p(e){let{children:t="",header:n,actions:r,disabled:l=!1,status:p,onValueChange:h}=e;const m=(0,d.p)(),b=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;const t=null==(e=b.current)?void 0:e.querySelector("textarea"),n=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",n),()=>t.removeEventListener("input",n)}),[]);return o.createElement("div",{ref:b},o.createElement(u,{actions:r,status:p},n),o.createElement("div",{className:c.Container},o.createElement(i(),{value:t,onValueChange:h,highlight:function(e){return void 0===e&&(e=""),o.createElement(s.ZP,(0,a.Z)({},s.lG,{theme:m,code:e,language:"json"}),(e=>{let{className:t,style:n,tokens:r,getLineProps:l,getTokenProps:i}=e;return o.createElement("div",{className:c.Code},r.map(((e,t)=>o.createElement("div",(0,a.Z)({key:t},l({line:e,key:t}),{className:c.Line}),o.createElement("span",{className:c.LineContent},e.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},i({token:e,key:t}))))))))))}))},disabled:l,ignoreTabKey:!0,padding:10,style:{...m.plain,overflow:"auto"},className:c.Editor})))}function u(e){let{children:t,actions:n=[],status:a}=e;return o.createElement("div",{className:c.Header,"data-status":a},o.createElement("span",null,t),o.createElement("span",{className:c.Actions},n.map(((e,t)=>{let{title:n,onClick:a,Component:r=n}=e;return o.createElement("button",{className:c.HeaderButton,key:t+":"+n,title:n,onClick:a},r)}))))}var h=n(195);const m=function(e,t){const n=(0,o.useRef)(!1),a={error:void 0,data:void 0,loading:!1},[r,l]=(0,o.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...a,loading:!0};case"fetched":return{...a,data:t.payload,loading:!1};case"error":return{...a,error:t.payload,loading:!1};default:return e}}),a);return{...r,fetchData:async function(a,o){void 0===o&&(o={}),l({type:"loading"});try{const r=await fetch(e+(a||""),{...t,...o});if(!r.ok)throw new Error(r.statusText);const i=await r.json();if(n.current)return;return l({type:"fetched",payload:i}),i}catch(r){if(n.current)return;return l({type:"error",payload:r}),null}}}};var b=n(5413);const k="Banner_i5OS",y="Title_HweB";function g(e){let{title:t,content:n}=e;return o.createElement("div",{className:k},o.createElement("h4",{className:y},t),n)}var w;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}const f=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,w||(w=o.createElement("path",{d:"M15.526 2H4.79C3.805 2 3 2.818 3 3.818v12.728h1.79V3.818h10.736V2Zm2.684 3.636H8.368c-.984 0-1.79.819-1.79 1.819v12.727c0 1 .806 1.818 1.79 1.818h9.842c.985 0 1.79-.818 1.79-1.818V7.455c0-1-.805-1.819-1.79-1.819Zm0 14.546H8.368V7.455h9.842v12.727Z",fill:"#0C3F5C"})))};var E;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}const _=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",T({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,E||(E=o.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var C;function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}const R=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",P({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,C||(C=o.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function x(e){let{req:t,res:n,interactive:a}=e;const[r,l]=(0,o.useState)(N(t.body)),[i,s]=(0,o.useState)(t.query),[d,c]=(0,o.useState)(N(n.body)),{data:u,error:k,loading:y,fetchData:w}=m(t.url,{method:t.method,headers:{"Content-Type":"application/json"},body:N(t.body)}),[v,E]=(0,o.useState)(null);(0,o.useEffect)((()=>{y?E("LOADING"):k||null!=u&&u.error?E("ERROR"):u&&E("SUCCESS")}),[u,k,y]);const T=[a?{title:"Run request",onClick:async()=>{const e=await w(i,{body:r});e&&c(N(e))},Component:o.createElement(o.Fragment,null,o.createElement(_,null)," Run")}:null,{title:"Copy",onClick:()=>(0,h.Z)(r),Component:o.createElement(f,null)},a?{title:"Reset",onClick:()=>{E(null),s(t.query),l(N(t.body)),c(N(n.body))},Component:o.createElement(R,null)}:null].filter((e=>!!e));return o.createElement(o.Fragment,null,o.createElement(p,{header:"GET"===t.method?"Request Query "+(a?"(try it)":""):"Request Body "+(a?"(try it)":""),actions:T,disabled:!a,onValueChange:e=>{a&&("GET"===t.method?s(e):"POST"===t.method&&l(e))}},"GET"===t.method?i:r),k&&o.createElement(g,{title:"Network error",content:"It could be a CORS issue, or a dropped internet connection. Please check the browser console for details."}),o.createElement(b.Z,{title:v?"Response":"Example Response",language:"json"},k?"":d))}function N(e){return JSON.stringify(e,null,2)}var j=n(1099),O=n(3905);const S={toc:[]};function Z(e){let{components:t,...n}=e;return(0,O.kt)("wrapper",(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,O.kt)("details",null,(0,O.kt)("summary",null,n.title),(0,O.kt)(j.D,{mdxType:"ReactMarkdown"},n.details)))}function L(e){let{content:t=""}=e;const[n,...a]=t.trim().split(/\n+/),r=a.join("\n");return o.createElement("div",null,o.createElement(j.D,null,n),o.createElement(Z,{title:"View specification",details:r}))}Z.isMDXComponent=!0;const I="heading_REER",q="anchor_oyxB";function A(e){let{name:t,content:n="",interactive:a,request:r,response:l}=e;return o.createElement(o.Fragment,null,o.createElement("h2",{id:t.toLowerCase(),className:I,"data-method":r.method},o.createElement("code",null,t),o.createElement("a",{className:q,href:"#"+t.toLowerCase()},"#")),o.createElement(L,{content:n}),o.createElement(x,{req:r,res:l,interactive:a}),o.createElement("hr",null))}function D(e){let{network:t,methods:n}=e;return o.createElement(o.Fragment,null,o.createElement("h3",null,"Available Methods"),n.map(((e,n)=>o.createElement(A,(0,a.Z)({key:t+n},e)))),o.createElement(r.Z,null))}},9819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(5258),l=n(3976),i=n(2750);const s={title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null},d="Staking API Webhooks - Polkadot",c={unversionedId:"api-reference/staking-api-webhooks/polkadot",id:"api-reference/staking-api-webhooks/polkadot",title:"Polkadot",description:"",source:"@site/docs/api-reference/staking-api-webhooks/polkadot.mdx",sourceDirName:"api-reference/staking-api-webhooks",slug:"/api-reference/staking-api-webhooks/polkadot",permalink:"/figment-documentation/api-reference/staking-api-webhooks/polkadot",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},p={},u=[],h={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking-api-webhooks---polkadot"},"Staking API Webhooks - Polkadot"),(0,o.kt)(l.Z,{service:"staking-api-webhooks",methods:[{name:"Create New Webhook Endpoint"},{name:"Retrieve Endpoint"},{name:"List Endpoints"},{name:"Update Webhook Endpoint"},{name:"Delete an Existing Endpoint"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"polkadot",mdxType:"ApiReferenceNav"}),(0,o.kt)(i.ZP,{url:"https://polkadot-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/webhook_endpoints",mdxType:"MakingCalls"}),(0,o.kt)(r.S,{methods:[{name:"Create New Webhook Endpoint",content:"Create a new webhook endpoint with the specified parameters\n\n### Parameters\n\n- `webhook_endpoint` - `object`\n - `target_url` - `string` The target URL to send the webhook to.\n - `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n - `enabled` - `boolean` true / false\n\n### Results\n\n- `id` - `number` Id of the newly created webhook endpoint.\n- `event_types` - `string` Event type you have passed in the request parameter.\n- `target_url` - `string` The target URL to send the webhook to.\n- `enabled` - `boolean` true / false\n- `object` - `string` webhook_endpoint\n- `created` - `string` Timestamp when webhook endpoint was created.\n- `secret` - `string` Unique string for your webhook endpoint.\n\n#### Note\n\n- Each webhook is identified by a sequential number. \n- Currently when a webhook ID has been deleted it cannot be reused.\n- You will only be provided with the secret when you first create a webhook. Remember to capture this data!",request:{method:"POST",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/endpoint",event_types:["*"],enabled:"false"}},url:"https://polkadot-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/webhook_endpoints"},interactive:!1,response:{name:"Create New Webhook Endpoint",status:"Created",code:201,body:{id:19,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T19:11:14.713Z",secret:"whsec_UmXdnYm3ApdzbdfJmtM1eoD5vohrf4wqKDuuQyRoceTBxDoPKoTmoQTeWogakRKb1hPWEm22LRRDGhrszFoUFPu6NGazsg8yPJz6"}}},{name:"Retrieve Endpoint",content:"Retrieve the details of a webhook endpoint.\n\n### Parameters\n\n- For **Individual Webhook Endpoint**\n - Include the webhook ID number in the request URL, to retreive details for an individual webhook endpoint.\n\n- For **All Webhook Endpoints**\n - None\n\n### Results\n\n- `object` - `string` list\n- `url` - `string` Endpoint url\n- `has_more` - `boolean` true / false\n- `data` - `object`\n - `id` - `number` Id of the newly created webhook endpoint.\n - `event_types` - `string` Event type you have passed in the request parameter.\n - `target_url` - `string` The target URL to send the webhook to.\n - `enabled` - `boolean` true / false\n - `object` - `string` webhook_endpoint\n - `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"GET",header:[],url:"https://polkadot-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"Retrieve Endpoint",status:"OK",code:200,body:{id:19,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T19:11:14.713Z"}}},{name:"List Endpoints",content:"Get the list of all your webhook endpoints.\n\n### Parameters\n\n None\n\n### Results\n\n- `object` - `string` - The action, i.e., `list`.\n- `url` - `string` The endpoint URL.\n- `has_more` - `boolean`\n- `data` - `array` - An array of `object`s containing the details for each webhook:\n  - `id` - `number` Id of the newly created webhook endpoint.\n  - `event_types` - `string` Event type you have passed in the request parameter.\n  - `target_url` - `string` The target URL to send the webhook to.\n  - `enabled` - `boolean` true / false\n  - `object` - `string` - Describing the data object: `webhook_endpoint`.\n  - `created` - `string` Timestamp when the webhook endpoint was created.",request:{method:"GET",header:[],url:"https://polkadot-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/api/v1/webhook_endpoints"},interactive:!1,response:{name:"Get List of Existing Endpoints",status:"OK",code:200,body:{object:"list",url:"/api/v1/webhook_endpoints",has_more:!1,data:[{id:20,event_types:["*"],target_url:"https://example.com/my/endpoint",enabled:!1,object:"webhook_endpoint",created:"2022-08-15T19:11:35.102Z"},{id:19,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T19:11:14.713Z"}]}}},{name:"Update Webhook Endpoint",content:"Update details for an existing webhook endpoint.\n\n### Parameters\n\n- `webhook_endpoint` - `object`\n - `target_url` - `string` The target URL to send the webhook to.\n - `event_types` - `string` Can be a specific event type, or use an asterisk as a catchall: `['*']`\n - `enabled` - `boolean` true / false\n\n### Results\n\n- `id` - `number` Id of the newly created webhook endpoint.\n- `event_types` - `string` Event type you have passed in the request parameter.\n- `target_url` - `string` The target URL to send the webhook to.\n- `enabled` - `boolean` true / false\n- `object` - `string` webhook_endpoint\n- `created` - `string` Timestamp when webhook endpoint was created.",request:{method:"PUT",header:[],body:{webhook_endpoint:{target_url:"https://example.com/my/new/endpoint",event_types:["*"],enabled:"true"}},url:"https://{{DOT_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"Update Webhook Endpoint",status:"OK",code:200,body:{id:19,event_types:["*"],target_url:"https://example.com/my/new/endpoint",enabled:!0,object:"webhook_endpoint",created:"2022-08-15T19:11:14.713Z"}}},{name:"Delete an Existing Endpoint",content:"Delete a webhook endpoint\n\n### Parameters\n\nInclude the webhook ID number in the request URL, to delete webhook endpoint.\n\n### Results\n\nNone - `204 - No Content`",request:{method:"DELETE",header:[],url:"https://{{DOT_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/webhook_endpoints/{{webhookEndpointId}}"},interactive:!1,response:{name:"204 - No Content",status:"No Content",code:204,body:null}}],service:"staking-api-webhooks",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"polkadot",mdxType:"APIMethods"}))}m.isMDXComponent=!0}}]);