"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[994],{2750:(e,t,a)=>{a.d(t,{ZP:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),i=a(5162),s=a(7643);const l={toc:[{value:"Authentication",id:"authentication",level:3}]};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,a.network," ",a.service)," ","endpoint, hosted at"," ",(0,r.kt)("code",null,a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,r.kt)(i.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,r.kt)(i.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,r.kt)(i.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/*){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}d.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6775);function o(e){let{network:t,networks:a,methods:o,service:i}=e;const s=(0,r.TH)(),l=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{l.push(s.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},a.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:s.hash.replace("#","")||"",onChange:e=>{l.push("#"+e.target.value)}},o.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},4777:(e,t,a)=>{a.d(t,{S:()=>I});var n=a(7462),r=a(7294),o=a(7748),i=a(460),s=a.n(i),l=a(3746),d=a(6412);const c={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function u(e){let{children:t="",header:a,actions:o,disabled:i=!1,status:u,onValueChange:m}=e;const h=(0,d.p)(),y=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const t=null==(e=y.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return r.createElement("div",{ref:y},r.createElement(p,{actions:o,status:u},a),r.createElement("div",{className:c.Container},r.createElement(s(),{value:t,onValueChange:m,highlight:function(e){return void 0===e&&(e=""),r.createElement(l.ZP,(0,n.Z)({},l.lG,{theme:h,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:o,getLineProps:i,getTokenProps:s}=e;return r.createElement("div",{className:c.Code},o.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},i({line:e,key:t}),{className:c.Line}),r.createElement("span",{className:c.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},s({token:e,key:t}))))))))))}))},disabled:i,ignoreTabKey:!0,padding:10,style:{...h.plain,overflow:"auto"},className:c.Editor})))}function p(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:c.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:c.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:o=a}=e;return r.createElement("button",{className:c.HeaderButton,key:t+":"+a,title:a,onClick:n},o)}))))}var m=a(195);const h="overlayHeaderButton_IGf5";const y=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[o,i]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...o,fetchData:async function(n,r){void 0===r&&(r={}),i({type:"loading"});try{const o=await fetch(e+(n||""),{...t,...r});if(!o.ok){let e,t,a;try{a=JSON.parse(await o.text()),e=await o.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||o.statusText)}const s=await o.json();if(a.current)return;return i({type:"fetched",payload:s}),s}catch(o){if(a.current)return;return i({type:"error",payload:o.message}),null}}}};var f,b=a(7643),g=a(4672);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},w.apply(this,arguments)}const v=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,f||(f=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var k;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const T=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,k||(k=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function x(e){let{req:t,res:a,interactive:n}=e;const[o,i]=(0,r.useState)(C(t.body)),[s,l]=(0,r.useState)(t.query),[d,c]=(0,r.useState)(R(a.body)),p="string"==typeof t.body&&0==t.body.indexOf("query"),{data:f,error:w,loading:k,fetchData:E}=y(t.url,{method:t.method,headers:{"Content-Type":p?"application/graphql":"application/json"},body:C(t.body)}),[x,_]=(0,r.useState)(null);(0,r.useEffect)((()=>{k?_("LOADING"):w||null!=f&&f.error?_("ERROR"):f&&_("SUCCESS")}),[f,w,k]);const O=[n?{title:"Run request",onClick:async()=>{const e=await E(s,{body:o});e&&c(R(e))},Component:r.createElement(r.Fragment,null,r.createElement(v,null)," Run")}:null,{title:"Copy",onClick:()=>(0,m.Z)(o),Component:r.createElement(g.Z,{code:"",className:h})},n?{title:"Reset",onClick:()=>{_(null),l(t.query),i(C(t.body)),c(R(a.body))},Component:r.createElement(T,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(u,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:O,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?l(e):"POST"===t.method&&i(e))}},"GET"===t.method?s:o),r.createElement(b.Z,{title:x?"Response":"Example Response",language:"json"},w?""+w:d))}function R(e){return JSON.stringify(e,null,2)}function C(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}var _=a(1099),O=a(3905);const P={toc:[]};function S(e){let{components:t,...a}=e;return(0,O.kt)("wrapper",(0,n.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,O.kt)("details",{open:a.accordionOpen?"open":void 0},(0,O.kt)("summary",null,(0,O.kt)("span",{className:"open"},"Specification"),(0,O.kt)("span",{className:"closed"},"View Specification")),(0,O.kt)(_.D,{mdxType:"ReactMarkdown"},a.details)))}function A(e){let{content:t="",accordionOpen:a=!1}=e;const[n,...o]=t.trim().split(/\n+/),i=o.join("\n");return r.createElement("div",null,r.createElement(_.D,null,n),r.createElement(S,{details:i,accordionOpen:a}))}S.isMDXComponent=!0;const N="heading_REER";var Z=a(9960);function q(e){let{name:t,content:a="",interactive:n,request:o,accordionOpen:i=!1,response:s}=e;return["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(o.body={...o.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]}),r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:N,"data-method":o.method},r.createElement(Z.Z,{to:"#"+t.toLowerCase()},t)),r.createElement(A,{content:a,accordionOpen:i}),r.createElement(x,{req:o,res:s,interactive:n}),r.createElement("hr",null))}function I(e){let{network:t,methods:a,service:i}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(q,(0,n.Z)({key:t+a},e,{accordionOpen:"node-api"!==i})))),r.createElement(o.Z,null))}},9407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4777),i=a(3976),s=a(2750);const l={title:"Ethereum",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Ethereum",image:"img/logo.svg",keywords:["Rewards API","Ethereum"]},d="Rewards API - Ethereum",c={unversionedId:"api-reference/rewards-api/ethereum",id:"api-reference/rewards-api/ethereum",title:"Ethereum",description:"Rewards API - Ethereum",source:"@site/docs/api-reference/rewards-api/ethereum.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/ethereum",permalink:"/api-reference/rewards-api/ethereum",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Ethereum",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Ethereum",image:"img/logo.svg",keywords:["Rewards API","Ethereum"]},sidebar:"docsSidebar"},u={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---ethereum"},"Rewards API - Ethereum"),(0,r.kt)(i.Z,{service:"rewards-api",methods:[{name:"Rewards by epoch"},{name:"Rewards  by day"}],networks:[{label:"Ethereum",value:"ethereum"},{label:"Solana",value:"solana"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"}],network:"ethereum",mdxType:"ApiReferenceNav"}),(0,r.kt)(s.ZP,{url:"https://eth-rewards.datahub.figment.io/v2/apikey/9513550c6ba06b65633a2b6ce8c5bb01/rewards",network:"Ethereum",service:"Rewards API",mdxType:"MakingCalls"}),(0,r.kt)(o.S,{methods:[{name:"Rewards by epoch",content:"Returns gross validator rewards grouped by epoch\n\n#### Request\n\n\\* `network`: `ethereum` _(Required)_  \n\\* `chain_id`: `mainnet` _(Required)_  \n\\* `accounts` takes in an array of validator's public addresses. 50 max. _(Required)_  \n\\* `start` and `end` are epoch numbers (as integers).\n\n#### Response\n\nThe response is broken down between `meta` and `data`\n\n##### `meta`\n\n\\* `network` is the same as in the request  \n\\* `period_unit` is the unit of the `period` field under `data` : `epoch` here\n\n##### `data`\n\nis an array of objects - one for each period - containing:\n\n\\* `validator` returns the validator that distributed the rewards  \n\\* `period` is the epoch number (only present when no aggregation)  \n\\* `timestamp` is the timestamp of the end of the period  \n\\* `rewards` is an array of objects with four components: `numeric` , `exp` and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric \\\\\\\\\\\\* 10^-exp`(`text` is the string version of this). `type` is either `staking` (for consensus layer rewards) or `tips` (for execution layer rewards). `recipient` is the address of the rewards recipient\n\n#### Limitations\n\n\\* This API serves data for the last 7 days for epoch and 60 days for daily aggregation  \n\\* This API returns rewards for Figment validators only  \n\\* Data is available approximatively an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.\n\n#### FAQ\n\n**Reward Types:** `staking` type rewards are the net aggregation of all consensus layer rewards: block proposal, attestation, sync committee and slashing.\n\n**Negative Rewards:** In theory, there could be a negative rewards amount for a day. But slashing events are rare. Current negative amounts would more likely be caused by repeatedly missing attestations and/or sync committee votes.",request:{method:"POST",header:[],body:{network:"ethereum",chain_id:"mainnet",accounts:["0x8914b656ad92ffd6ad2920f8f2ad186b0502e4848ad5c5451fea01e42898a2ea07009afb5ca0fd20119da155d745a299"],start:151759,end:151760},url:"https://eth-rewards.datahub.figment.io/v2/apikey/9513550c6ba06b65633a2b6ce8c5bb01/rewards"},interactive:!0,response:{name:"by epoch",status:"OK",code:200,body:{data:[{accounts:["0x8914b656ad92ffd6ad2920f8f2ad186b0502e4848ad5c5451fea01e42898a2ea07009afb5ca0fd20119da155d745a299"],chain_id:"mainnet",rewards:[{text:"0.029536246 ETH",currency:"ETH",numeric:29536246e9,exp:18,type:"staking",address:"0x8914b656ad92ffd6ad2920f8f2ad186b0502e4848ad5c5451fea01e42898a2ea07009afb5ca0fd20119da155d745a299"},{text:"0.093912121905014256 ETH",currency:"ETH",numeric:93912121905014260,exp:18,type:"tips",address:"0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5"}],period:"151759",validator:"0x8914b656ad92ffd6ad2920f8f2ad186b0502e4848ad5c5451fea01e42898a2ea07009afb5ca0fd20119da155d745a299",timestamp:"2022-10-06T23:38:48Z"}],meta:{network:"ethereum",period_unit:"epoch"}}}},{name:"Rewards  by day",content:'Returns gross validator rewards grouped by epoch\n\n#### Request\n\n\\* `network`: `ethereum` _(Required)_  \n\\* `chain_id`: `mainnet` _(Required)_  \n\\* `accounts` takes in an array of validator\'s public addresses. 50 max. _(Required)_  \n\\* `aggregation`: `daily` _(Required)_  \n\\* `start` and `end` are timestamps in the format "YYYY-MM-DD" _(Required)_\n\n#### Response\n\nThe response is broken down between `meta` and `data`\n\n##### `meta`\n\n\\* `network` is the same as in the request  \n\\* `period_unit` is the unit of the `period` field under `data`: `daily` here\n\n##### `data`\n\nis an array of objects - one for each period - containing:\n\n\\* `validator` returns the validator that distributed the rewards  \n\\* `timestamp` is the timestamp of the beginning of the day  \n\\* `rewards` is an array of objects with four components: `numeric` , `exp` and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric \\\\\\\\\\\\\\* 10^-exp`(`text` is the string version of this). `type` is either `staking` (for consensus layer rewards) or `tips` (for execution layer rewards). `recipient` is the address of the rewards recipient\n\n#### Limitations\n\n\\* This API serves data for the last 7 days for epoch and 60 days for daily aggregation  \n\\* This API returns rewards for Figment validators only  \n\\* Data is available approximatively an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.\n\n#### FAQ\n\n**Reward Types:** `staking` type rewards are the net aggregation of all consensus layer rewards: block proposal, attestation, sync committee and slashing.\n\n**Negative Rewards:** In theory, there could be a negative rewards amount for a day. But slashing events are rare. Current negative amounts would more likely be caused by repeatedly missing attestations and/or sync committee votes.',request:{method:"POST",header:[],body:{network:"ethereum",chain_id:"mainnet",accounts:["0xb851b31a812f7dc8c844cb7470560cde02e3a04161430c56493ac96c6e2630b38e37b0d839b8640c56a2b09f2f20e5ab"],start:"2022-09-20",end:"2022-09-21",aggregation:"daily"},url:"https://eth-rewards.datahub.figment.io/v2/apikey/9513550c6ba06b65633a2b6ce8c5bb01/rewards"},interactive:!0,response:{name:"by day",status:"OK",code:200,body:{data:[{accounts:["0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba"],chain_id:"mainnet",rewards:[{text:"0.003111407 ETH",currency:"ETH",numeric:3111407e9,exp:18,type:"staking",address:"0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba"}],validator:"0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba",timestamp:"2022-10-01T00:00:00Z"}],meta:{network:"ethereum",period_unit:"daily"}}}}],service:"rewards-api",networks:[{label:"Ethereum",value:"ethereum"},{label:"Solana",value:"solana"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"}],network:"ethereum",mdxType:"APIMethods"}))}h.isMDXComponent=!0}}]);