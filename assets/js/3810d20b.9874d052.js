"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[7027],{2750:(e,t,a)=>{a.d(t,{ZP:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162),i=a(7643);const s={toc:[{value:"Authentication",id:"authentication",level:3}]};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at ",(0,r.kt)("code",null,a.url),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,r.kt)(l.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,r.kt)(l.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,r.kt)(l.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}d.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6775);function o(e){let{network:t,networks:a,methods:o,service:l}=e;const i=(0,r.TH)(),s=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{s.push(i.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},a.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:i.hash.replace("#","")||"",onChange:e=>{s.push("#"+e.target.value)}},o.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},3213:(e,t,a)=>{a.d(t,{S:()=>j});var n=a(7462),r=a(7294),o=a(1099),l=a(7748),i=a(460),s=a.n(i),d=a(3746),c=a(6412);const u={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function p(e){let{children:t="",header:a,actions:o,disabled:l=!1,status:i,onValueChange:p}=e;const h=(0,c.p)(),y=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const t=null==(e=y.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return r.createElement("div",{ref:y},r.createElement(m,{actions:o,status:i},a),r.createElement("div",{className:u.Container},r.createElement(s(),{value:t,onValueChange:p,highlight:function(e){return void 0===e&&(e=""),r.createElement(d.ZP,(0,n.Z)({},d.lG,{theme:h,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:o,getLineProps:l,getTokenProps:i}=e;return r.createElement("div",{className:u.Code},o.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},l({line:e,key:t}),{className:u.Line}),r.createElement("span",{className:u.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},i({token:e,key:t}))))))))))}))},disabled:l,ignoreTabKey:!0,padding:10,style:{...h.plain,overflow:"auto"},className:u.Editor})))}function m(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:u.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:u.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:o=a}=e;return r.createElement("button",{className:u.HeaderButton,key:t+":"+a,title:a,onClick:n},o)}))))}var h=a(195);const y="overlayHeaderButton_IGf5";const k=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[o,l]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...o,fetchData:async function(n,r){void 0===r&&(r={}),l({type:"loading"});try{const o=await fetch(e+(n?"/"+n:""),{...t,...r});if(!o.ok){let e,t,a;try{a=JSON.parse(await o.text()),e=await o.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||o.statusText)}const i=await o.json();if(a.current)return;return l({type:"fetched",payload:i}),i}catch(o){if(a.current)return;return l({type:"error",payload:o.message}),null}}}};var v,f=a(7643),g=a(4672);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}const w=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,v||(v=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var T;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const C=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,T||(T=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function P(e){let{req:t,res:a,interactive:n,endpoint:o}=e;const[l,i]=(0,r.useState)(x(t.body)),[s,d]=(0,r.useState)(t.query),[c,u]=(0,r.useState)(S(a.body)),m="string"==typeof t.body&&0==t.body.indexOf("query"),{data:v,error:b,loading:T,fetchData:E}=k(o,{method:t.method,headers:{...t.headers,"Content-Type":m?"application/graphql":"application/json"},body:x(t.body)}),[P,R]=(0,r.useState)(null);(0,r.useEffect)((()=>{T?R("LOADING"):b||null!=v&&v.error?R("ERROR"):v&&R("SUCCESS")}),[v,b,T]);const O=[n?{title:"Run request",onClick:async()=>{const e=await E(s,{body:l});e&&u(S(e))},Component:r.createElement(r.Fragment,null,r.createElement(w,null)," Run")}:null,{title:"Copy",onClick:()=>(0,h.Z)(l),Component:r.createElement(g.Z,{code:"",className:y})},n?{title:"Reset",onClick:()=>{R(null),d(t.query),i(x(t.body)),u(S(a.body))},Component:r.createElement(C,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(p,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:O,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?d(e):"POST"===t.method&&i(e))}},"GET"===t.method?s:l),r.createElement(f.Z,{title:P?"Response":"Example Response",language:"json"},b?""+b:c))}function S(e){return JSON.stringify(e,null,2)}function x(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}const R="heading_REER";var O=a(9960),N=a(3905);const Z={toc:[]};function _(e){let{components:t,...a}=e;return(0,N.kt)("wrapper",(0,n.Z)({},Z,a,{components:t,mdxType:"MDXLayout"}),(0,N.kt)("details",{open:a.accordionOpen?"open":void 0},(0,N.kt)("summary",null,(0,N.kt)("span",{className:"open"},"Specification"),(0,N.kt)("span",{className:"closed"},"View Specification")),(0,N.kt)(o.D,{mdxType:"ReactMarkdown"},a.details)))}function A(e){let{name:t,content:a="",interactive:n,request:l,accordionOpen:i=!1,response:s,endpoint:d}=e;["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(l.body={...l.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]});const[c,...u]=a.trim().split(/\n+/),p=u.join("\n");return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:R,"data-method":l.method},r.createElement(O.Z,{to:"#"+t.toLowerCase()},t)),r.createElement(o.D,null,c),r.createElement(P,{req:l,res:s,interactive:n,endpoint:d}),r.createElement(_,{details:p,accordionOpen:i}),r.createElement("hr",null))}function j(e){let{network:t,methods:a,service:o,proxy:i}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(A,(0,n.Z)({key:t+a},e,{endpoint:i+"/"+o+"/"+t,accordionOpen:"node-api"!==o})))),r.createElement(l.Z,null))}_.isMDXComponent=!0},5430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(3213),l=a(3976),i=a(2750);const s={title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Polkadot",image:"img/logo.svg",keywords:["Rewards API","Polkadot"]},d="Rewards API - Polkadot",c={unversionedId:"api-reference/rewards-api/polkadot",id:"api-reference/rewards-api/polkadot",title:"Polkadot",description:"Rewards API - Polkadot",source:"@site/docs/api-reference/rewards-api/polkadot.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/polkadot",permalink:"/api-reference/rewards-api/polkadot",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Polkadot",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Polkadot",image:"img/logo.svg",keywords:["Rewards API","Polkadot"]},sidebar:"docsSidebar"},u={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---polkadot"},"Rewards API - Polkadot"),(0,r.kt)(l.Z,{service:"rewards-api",methods:[{name:"Rewards by era"}],networks:[{label:"Ethereum",value:"ethereum"},{label:"Solana",value:"solana"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Avalanche",value:"avalanche"}],network:"polkadot",mdxType:"ApiReferenceNav"}),(0,r.kt)(i.ZP,{url:"https://polkadot-rewards.datahub.figment.io/v2",network:"Polkadot",service:"Rewards API",mdxType:"MakingCalls"}),(0,r.kt)(o.S,{methods:[{name:"Rewards by era",content:"Returns net delegator rewards (post on-chain validator commission) by epoch\n\n## Request\n\n\\* `network` is `polkadot` _(Required)_  \n\\* `chain_id` is `mainnet` _(Required)_  \n\\* `accounts` takes in an array of stash accounts addresses _(Required)_  \n\\* `start` and `end` are era numbers, both inclusive. _(Required)_\n\n## Response\n\nThe response is broken down between `meta` and `data`\n\n##### `meta`\n\n\\* `network` is the same as in the request  \n\\* `period_unit` is the unit of the `period` field under `data`\n\n##### `data`\n\nis an array of objects - one for each era - containing:\n\n\\* `validator` returns the validator that distributed the rewards  \n\\* `period` is the era number  \n\\* `timestamp` is the timestamp of the end of the era  \n\\* `rewards` is an array of objects with four components: `numeric` , `exp` and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric x 10^-exp`(`text` is the string version of this)\n\n## Limitations\n\n\\* The API returns rewards for Figment validators only  \n\\* Data is available approximatively an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.",request:{auth:{type:"noauth"},method:"POST",header:[],body:{network:"polkadot",chain_id:"mainnet",accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],start:845,end:847},url:"https://polkadot-rewards.datahub.figment.io/v2",headers:{},query:"rewards"},interactive:!0,response:{name:"by era",status:"OK",code:200,body:{data:[{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"4.4045175383 DOT",currency:"DOT",numeric:44045175383,exp:10}],period:"845",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",timestamp:"2022-09-25T15:36:18Z"},{accounts:["12m7XtVWZQuxTirqtzm2dm5J4r16vSQruPmahThMnskG8Bcp"],chain_id:"mainnet",rewards:[{text:"3.6694634053 DOT",currency:"DOT",numeric:36694634053,exp:10}],period:"846",validator:"138QdRbUTB9eNY94Q4Mj5r39FkgMiyHCAy8UFMNA5gvtrfSB",timestamp:"2022-09-26T15:36:18Z"}],meta:{network:"polkadot",period_unit:"era"}}}}],service:"rewards-api",networks:[{label:"Ethereum",value:"ethereum"},{label:"Solana",value:"solana"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Avalanche",value:"avalanche"}],network:"polkadot",proxy:"https://api-service-proxy.paulpomerleau.workers.dev",mdxType:"APIMethods"}))}h.isMDXComponent=!0}}]);