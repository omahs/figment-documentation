"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[994],{2750:(e,a,t)=>{t.d(a,{ZP:()=>s});var n=t(7462),r=(t(7294),t(3905)),l=t(5488),d=t(5162),o=t(7643);const i={toc:[{value:"Authentication",id:"authentication",level:3}]};function s(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("div",null,"API calls require authentication with API key via ",(0,r.kt)("code",null,"Authorization")," ","request header or ",(0,r.kt)("code",null,"URL")," property. Calls are made to the"," ",(0,r.kt)("strong",null,t.network," ",t.service)," ","endpoint, hosted at"," ",(0,r.kt)("code",null,t.url.replace(/(apikey\/[^\/]+\/*){1}/,"")),(0,r.kt)("br",null),(0,r.kt)("br",null)),"Here's some boilerplate to get you started."," ",(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+t.url.replace(/(apikey\/[^\/]+\/*){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,r.kt)(d.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+t.url.replace(/(apikey\/[^\/]+\/*){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,r.kt)(d.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+t.url.replace(/(apikey\/[^\/]+\/*){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,r.kt)(d.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+t.url.replace(/(apikey\/[^\/]+\/*){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}s.isMDXComponent=!0},3976:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6775);function l(e){let{network:a,networks:t,methods:l,service:d}=e;const o=(0,r.TH)(),i=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:a,onChange:e=>{i.push(o.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},t.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:o.hash.replace("#","")||"",onChange:e=>{i.push("#"+e.target.value)}},l.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},4777:(e,a,t)=>{t.d(a,{S:()=>q});var n=t(7462),r=t(7294),l=t(7748),d=t(460),o=t.n(d),i=t(3746),s=t(6412);const u={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function c(e){let{children:a="",header:t,actions:l,disabled:d=!1,status:c,onValueChange:p}=e;const v=(0,s.p)(),h=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const a=null==(e=h.current)?void 0:e.querySelector("textarea"),t=e=>{const a=e.target;a.style.width=a.scrollWidth+"px"};return a.addEventListener("input",t),()=>a.removeEventListener("input",t)}),[]);return r.createElement("div",{ref:h},r.createElement(m,{actions:l,status:c},t),r.createElement("div",{className:u.Container},r.createElement(o(),{value:a,onValueChange:p,highlight:function(e){return void 0===e&&(e=""),r.createElement(i.ZP,(0,n.Z)({},i.lG,{theme:v,code:e,language:"json"}),(e=>{let{className:a,style:t,tokens:l,getLineProps:d,getTokenProps:o}=e;return r.createElement("div",{className:u.Code},l.map(((e,a)=>r.createElement("div",(0,n.Z)({key:a},d({line:e,key:a}),{className:u.Line}),r.createElement("span",{className:u.LineContent},e.map(((e,a)=>r.createElement("span",(0,n.Z)({key:a},o({token:e,key:a}))))))))))}))},disabled:d,ignoreTabKey:!0,padding:10,style:{...v.plain,overflow:"auto"},className:u.Editor})))}function m(e){let{children:a,actions:t=[],status:n}=e;return r.createElement("div",{className:u.Header,"data-status":n},r.createElement("span",null,a),r.createElement("span",{className:u.Actions},t.map(((e,a)=>{let{title:t,onClick:n,Component:l=t}=e;return r.createElement("button",{className:u.HeaderButton,key:a+":"+t,title:t,onClick:n},l)}))))}var p=t(195);const v="overlayHeaderButton_IGf5";const h=function(e,a){const t=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[l,d]=(0,r.useReducer)(((e,a)=>{switch(a.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:a.payload,loading:!1};case"error":return{...n,error:a.payload,loading:!1};default:return e}}),n);return{...l,fetchData:async function(n,r){void 0===r&&(r={}),d({type:"loading"});try{const l=await fetch(e+(n||""),{...a,...r});if(!l.ok){let e,a,t;try{t=JSON.parse(await l.text()),e=await l.json(),a=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(a,null,2)||JSON.stringify(t,null,2)||l.statusText)}const o=await l.json();if(t.current)return;return d({type:"fetched",payload:o}),o}catch(l){if(t.current)return;return d({type:"error",payload:l.message}),null}}}};var y,b=t(7643),f=t(4672);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}const w=e=>{let{title:a,titleId:t,...n}=e;return r.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},n),a?r.createElement("title",{id:t},a):null,y||(y=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var k;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},E.apply(this,arguments)}const T=e=>{let{title:a,titleId:t,...n}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},n),a?r.createElement("title",{id:t},a):null,k||(k=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function x(e){let{req:a,res:t,interactive:n}=e;const[l,d]=(0,r.useState)(R(a.body)),[o,i]=(0,r.useState)(a.query),[s,u]=(0,r.useState)(C(t.body)),m="string"==typeof a.body&&0==a.body.indexOf("query"),{data:y,error:g,loading:k,fetchData:E}=h(a.url,{method:a.method,headers:{"Content-Type":m?"application/graphql":"application/json"},body:R(a.body)}),[x,_]=(0,r.useState)(null);(0,r.useEffect)((()=>{k?_("LOADING"):g||null!=y&&y.error?_("ERROR"):y&&_("SUCCESS")}),[y,g,k]);const P=[n?{title:"Run request",onClick:async()=>{const e=await E(o,{body:l});e&&u(C(e))},Component:r.createElement(r.Fragment,null,r.createElement(w,null)," Run")}:null,{title:"Copy",onClick:()=>(0,p.Z)(l),Component:r.createElement(f.Z,{code:"",className:v})},n?{title:"Reset",onClick:()=>{_(null),i(a.query),d(R(a.body)),u(C(t.body))},Component:r.createElement(T,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(c,{header:"GET"===a.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:P,disabled:!n,onValueChange:e=>{n&&("GET"===a.method?i(e):"POST"===a.method&&d(e))}},"GET"===a.method?o:l),r.createElement(b.Z,{title:x?"Response":"Example Response",language:"json"},g?""+g:s))}function C(e){return JSON.stringify(e,null,2)}function R(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}var _=t(1099),P=t(3905);const S={toc:[]};function O(e){let{components:a,...t}=e;return(0,P.kt)("wrapper",(0,n.Z)({},S,t,{components:a,mdxType:"MDXLayout"}),(0,P.kt)("details",null,(0,P.kt)("summary",null,t.title),(0,P.kt)(_.D,{mdxType:"ReactMarkdown"},t.details)))}function N(e){let{content:a=""}=e;const[t,...n]=a.trim().split(/\n+/),l=n.join("\n");return r.createElement("div",null,r.createElement(_.D,null,t),r.createElement(O,{title:"View specification",details:l}))}O.isMDXComponent=!0;const A="heading_REER";var I=t(9960);function Z(e){let{name:a,content:t="",interactive:n,request:l,response:d}=e;return["Rewards (by epoch)","Rewards (daily)"].includes(a)&&(l.body={...l.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===a?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]}),r.createElement(r.Fragment,null,r.createElement("h2",{id:a.toLowerCase(),className:A,"data-method":l.method},r.createElement(I.Z,{to:"#"+a.toLowerCase()},a)),r.createElement(N,{content:t}),r.createElement(x,{req:l,res:d,interactive:n}),r.createElement("hr",null))}function q(e){let{network:a,methods:t}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),t.map(((e,t)=>r.createElement(Z,(0,n.Z)({key:a+t},e)))),r.createElement(l.Z,null))}},9407:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=t(7462),r=(t(7294),t(3905)),l=t(4777),d=t(3976),o=t(2750);const i={title:"Ethereum",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Ethereum",image:"img/logo.svg",keywords:["Rewards API","Ethereum"]},s="Rewards API - Ethereum",u={unversionedId:"api-reference/rewards-api/ethereum",id:"api-reference/rewards-api/ethereum",title:"Ethereum",description:"Rewards API - Ethereum",source:"@site/docs/api-reference/rewards-api/ethereum.mdx",sourceDirName:"api-reference/rewards-api",slug:"/api-reference/rewards-api/ethereum",permalink:"/api-reference/rewards-api/ethereum",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Ethereum",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Rewards API - Ethereum",image:"img/logo.svg",keywords:["Rewards API","Ethereum"]},sidebar:"docsSidebar"},c={},m=[],p={toc:m};function v(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rewards-api---ethereum"},"Rewards API - Ethereum"),(0,r.kt)(d.Z,{service:"rewards-api",methods:[{name:"Rewards (by epoch)"},{name:"Rewards (daily)"},{name:"Reward Rates"}],networks:[{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"ethereum",mdxType:"ApiReferenceNav"}),(0,r.kt)(o.ZP,{url:"https://eth-rewards.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/rewards",network:"Ethereum",service:"Rewards API",mdxType:"MakingCalls"}),(0,r.kt)(l.S,{methods:[{name:"Rewards (by epoch)",content:"Returns gross validator rewards grouped by epoch or day.\n\n### Parameters\n\n*   `network` => `ethereum`\n*   `chain_id` => `mainnet`\n*   `accounts` takes in an array of validator's public addresses. 50 max.\n*   `grouping`\n    *   `epoch` will return rewards grouped by epochs.\n    *   `daily` will return rewards grouped by day.\n*   `start_time` and `end_time` are ISO 8601 timestamps in UTC.\n    *   For daily grouping, we ignore the time component and only care about the YYYY-MM-DD component: `start_time` is inclusive and `end_time` is not. For example, if you wanted to query rewards for only January 1st, 2022, then `start_time` would be \u201c2022-01-01\u201d and `end_time` would be \u201c2022-01-02\".\n    *   For epoch grouping, if the start of an epoch falls into the requested date range it will be included (even if it doesn't end inside the date range).\n\n### Response\n\n*   `network` and `chain_id` are the same as the request.\n*   `accounts` returns an array of account public addresses.\n*   `validator` returns the validator that tokens were staked to.\n*   `time` and `epoch` reference the start of the daily or epoch bucket.\n*   `rewards` is an array of objects with four components: `numeric` , `exp` and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric * 10^-exp`(`text` is the string version of this).\n    \n\n### Limitations\n\n*   This API serves data for the last 7 days for epoch grouping and 60 days for daily grouping.\n*   This API returns rewards for Figment validators only.\n*   Data is available approximatively an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.\n    \n\n### FAQ\n\n#### Reward Types\n\nWe index block proposal, attestation, sync committee and slashing rewards.\n\n#### Negative Rewards\n\nIn theory, there could be a negative rewards amount for a day. But slashing events are rare. Current negative amounts would more likely be caused by repeatedly missing attestations and/or sync committee votes.\n\n* * *",request:{auth:{type:"noauth"},method:"POST",header:[{key:"",value:"",type:"text",disabled:!0}],body:{network:"ethereum",chain_id:"mainnet",accounts:["0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba"],start_time:"2022-08-25",end_time:"2022-08-26",grouping:"epoch"},url:"https://eth-rewards.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/rewards"},interactive:!0,response:{name:"ETH3 (epoch)",status:"OK",code:200,body:[{accounts:["0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba"],chain_id:"mainnet",rewards:[{text:"0.000014843 ETH",currency:"ETH",numeric:14843,exp:9}],epoch:"139163",network:"ethereum",validator:"0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba",time:"2022-08-12T00:03:12Z"}]}},{name:"Rewards (daily)",content:"Returns gross validator rewards grouped by epoch or day.\n\n### Parameters\n\n*   `network` => `ethereum`\n*   `chain_id` => `mainnet`\n*   `accounts` takes in an array of validator's public addresses. 50 max.\n*   `grouping`\n    *   `epoch` will return rewards grouped by epochs.\n    *   `daily` will return rewards grouped by day.\n*   `start_time` and `end_time` are ISO 8601 timestamps in UTC.\n    *   For daily grouping, we ignore the time component and only care about the YYYY-MM-DD component: `start_time` is inclusive and `end_time` is not. For example, if you wanted to query rewards for only January 1st, 2022, then `start_time` would be \u201c2022-01-01\u201d and `end_time` would be \u201c2022-01-02\"\n    *   For epoch grouping, if the start of an epoch falls into the requested date range it will be included (even if it doesn't end inside the date range).\n\n### Response\n\n*   `network` and `chain_id` are the same as the request.\n*   `accounts` returns an array of account public addresses.\n*   `validator` returns the validator that tokens were staked to.\n*   `time` and `epoch` reference the start of the daily or epoch bucket.\n*   `rewards` is an array of objects with four components: `numeric` , `exp` and `currency`. The formula to compute the final rewards in the `currency` unit is `numeric * 10^-exp`(`text` is the string version of this).\n    \n\n### Limitations\n\n*   This API serves data for the last 7 days for epoch grouping and 60 days for daily grouping.\n*   This API returns rewards for Figment validators only.\n*   Data is available approximatively an hour after the end of the day or epoch. When requesting daily for the current day, the data will be available but obviously partially complete as the day progresses.\n    \n\n### FAQ\n\n#### Reward Types\n\nWe index block proposal, attestation, sync committee and slashing rewards.\n\n#### Negative Rewards\n\nIn theory, there could be a negative rewards amount for a day. But slashing events are rare. Current negative amounts would more likely be caused by repeatedly missing attestations and/or sync committee votes.\n\n* * *",request:{auth:{type:"noauth"},method:"POST",header:[{key:"",value:"",type:"text",disabled:!0}],body:{network:"ethereum",chain_id:"mainnet",accounts:["0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba"],start_time:"2022-07-27",end_time:"2022-07-28",grouping:"daily"},url:"https://eth-rewards.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/rewards"},interactive:!0,response:{name:"ETH2 (daily)",status:"OK",code:200,body:[{accounts:["0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba"],chain_id:"mainnet",rewards:[{text:"0.003292558 ETH",currency:"ETH",numeric:3292558,exp:9}],network:"ethereum",validator:"0x93257a7d4f1e6998f019483f149a4dbe3bfc8b89358411be769aeedd943de907f178da1773aea9016d1ac2bdfe3794ba",time:"2022-07-21T00:00:00Z"}]}},{name:"Reward Rates",content:"This API returns a time series of daily network-wide annualized staking reward rates, in %.\n\nWe aggregate all rewards received by all validators and divide this by the aggregated balances of all validators at the beginning of the period.\n\nIt includes all rewards, on both consensus and execution layers\n\n### Parameters\n\n- None\n\n### Response\n\n- `date` - Specific date associated with `value` (staking reward rates).\n- `value` - Staking reward rates, in %.",request:{method:"GET",header:[],url:"https://eth-rewards.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/rates"},interactive:!0,response:{name:"Reward Rates",status:"OK",code:200,body:[{date:"2022-09-22",value:"5.6274"},{date:"2022-09-21",value:"6.249326"},{date:"2022-09-20",value:"5.712024"},{date:"2022-09-19",value:"5.720387"},{date:"2022-09-18",value:"5.528864"},{date:"2022-09-17",value:"5.288782"},{date:"2022-09-16",value:"5.665041"},{date:"2022-09-15",value:"5.737749"},{date:"2022-09-14",value:"4.401332"},{date:"2022-09-13",value:"4.388686"},{date:"2022-09-12",value:"4.359876"},{date:"2022-09-11",value:"4.382804"},{date:"2022-09-10",value:"4.377953"},{date:"2022-09-09",value:"4.379866"},{date:"2022-09-08",value:"4.336107"},{date:"2022-09-07",value:"4.306229"},{date:"2022-09-06",value:"4.206134"},{date:"2022-09-05",value:"4.391328"},{date:"2022-09-04",value:"4.415535"},{date:"2022-09-03",value:"4.422066"},{date:"2022-09-02",value:"4.407582"},{date:"2022-09-01",value:"4.432095"},{date:"2022-08-31",value:"4.432176"},{date:"2022-08-30",value:"4.424279"},{date:"2022-08-29",value:"4.410478"},{date:"2022-08-28",value:"4.462833"},{date:"2022-08-27",value:"4.453432"},{date:"2022-08-26",value:"4.422119"},{date:"2022-08-25",value:"4.408022"},{date:"2022-08-24",value:"4.443716"},{date:"2022-08-23",value:"4.439361"},{date:"2022-08-22",value:"4.447046"},{date:"2022-08-21",value:"4.46641"},{date:"2022-08-20",value:"4.469865"},{date:"2022-08-19",value:"4.447548"},{date:"2022-08-18",value:"4.451883"},{date:"2022-08-17",value:"4.461165"},{date:"2022-08-16",value:"4.456304"},{date:"2022-08-15",value:"4.461507"},{date:"2022-08-14",value:"4.475667"},{date:"2022-08-13",value:"4.483251"},{date:"2022-08-12",value:"4.488117"},{date:"2022-08-11",value:"4.487741"},{date:"2022-08-10",value:"4.492536"},{date:"2022-08-09",value:"4.475682"},{date:"2022-08-08",value:"4.488683"},{date:"2022-08-07",value:"4.488907"},{date:"2022-08-06",value:"4.470568"},{date:"2022-08-05",value:"4.485122"},{date:"2022-08-04",value:"4.48766"},{date:"2022-08-03",value:"4.489696"},{date:"2022-08-02",value:"4.501075"},{date:"2022-08-01",value:"4.490837"},{date:"2022-07-31",value:"4.497676"},{date:"2022-07-30",value:"4.495836"},{date:"2022-07-29",value:"4.424801"},{date:"2022-07-28",value:"4.499543"},{date:"2022-07-27",value:"4.503776"},{date:"2022-07-26",value:"4.497819"},{date:"2022-07-25",value:"4.503622"},{date:"2022-07-24",value:"4.503081"},{date:"2022-07-23",value:"4.509138"},{date:"2022-07-22",value:"4.496848"},{date:"2022-07-21",value:"4.461624"},{date:"2022-07-20",value:"4.482771"},{date:"2022-07-19",value:"4.493861"},{date:"2022-07-18",value:"4.49686"},{date:"2022-07-17",value:"4.486906"},{date:"2022-07-16",value:"4.462063"},{date:"2022-07-15",value:"4.478697"},{date:"2022-07-14",value:"4.470714"},{date:"2022-07-13",value:"4.477243"},{date:"2022-07-12",value:"4.473504"},{date:"2022-07-11",value:"4.492403"},{date:"2022-07-10",value:"4.50431"},{date:"2022-07-09",value:"4.512852"},{date:"2022-07-08",value:"4.503793"},{date:"2022-07-07",value:"4.499222"},{date:"2022-07-06",value:"4.490162"},{date:"2022-07-05",value:"4.485483"},{date:"2022-07-04",value:"4.495272"},{date:"2022-07-03",value:"4.490572"},{date:"2022-07-02",value:"4.491253"},{date:"2022-07-01",value:"4.491257"},{date:"2022-06-30",value:"4.49548"},{date:"2022-06-29",value:"4.509835"},{date:"2022-06-28",value:"4.495519"},{date:"2022-06-27",value:"4.501978"},{date:"2022-06-26",value:"4.494397"},{date:"2022-06-25",value:"4.502237"},{date:"2022-06-24",value:"4.503875"},{date:"2022-06-23",value:"4.50459"},{date:"2022-06-22",value:"4.497285"},{date:"2022-06-21",value:"4.511876"},{date:"2022-06-20",value:"4.505933"},{date:"2022-06-19",value:"4.49206"},{date:"2022-06-18",value:"4.472222"},{date:"2022-06-17",value:"4.487741"},{date:"2022-06-16",value:"4.503598"},{date:"2022-06-15",value:"4.508868"},{date:"2022-06-14",value:"4.521516"},{date:"2022-06-13",value:"4.510421"},{date:"2022-06-12",value:"4.532889"},{date:"2022-06-11",value:"4.532672"},{date:"2022-06-10",value:"4.533339"},{date:"2022-06-09",value:"4.534663"},{date:"2022-06-08",value:"4.53933"},{date:"2022-06-07",value:"4.532531"},{date:"2022-06-06",value:"4.542463"},{date:"2022-06-05",value:"4.522126"},{date:"2022-06-04",value:"4.529132"},{date:"2022-06-03",value:"4.555716"},{date:"2022-06-02",value:"4.543468"},{date:"2022-06-01",value:"4.544182"},{date:"2022-05-31",value:"4.556427"},{date:"2022-05-30",value:"4.555912"},{date:"2022-05-29",value:"4.558629"},{date:"2022-05-28",value:"4.568832"},{date:"2022-05-27",value:"4.582916"},{date:"2022-05-26",value:"4.572891"},{date:"2022-05-25",value:"4.588006"},{date:"2022-05-24",value:"4.604053"},{date:"2022-05-23",value:"4.540345"},{date:"2022-05-22",value:"4.538991"},{date:"2022-05-21",value:"4.588123"},{date:"2022-05-20",value:"4.585374"},{date:"2022-05-19",value:"4.590911"},{date:"2022-05-18",value:"4.638248"},{date:"2022-05-17",value:"4.644174"},{date:"2022-05-16",value:"4.636305"},{date:"2022-05-15",value:"4.657119"},{date:"2022-05-14",value:"4.657616"},{date:"2022-05-13",value:"4.642278"},{date:"2022-05-12",value:"4.685735"},{date:"2022-05-11",value:"4.676123"},{date:"2022-05-10",value:"4.674108"},{date:"2022-05-09",value:"4.693865"},{date:"2022-05-08",value:"4.707723"},{date:"2022-05-07",value:"4.652689"},{date:"2022-05-06",value:"4.690172"},{date:"2022-05-05",value:"4.713562"},{date:"2022-05-04",value:"4.713238"},{date:"2022-05-03",value:"4.682058"},{date:"2022-05-02",value:"4.710923"},{date:"2022-05-01",value:"4.738907"}]}}],service:"rewards-api",networks:[{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"ethereum",mdxType:"APIMethods"}))}v.isMDXComponent=!0}}]);