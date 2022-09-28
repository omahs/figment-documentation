"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8008],{2750:(e,t,n)=>{n.d(t,{ZP:()=>c});var a=n(7462),o=(n(7294),n(3905)),i=n(5488),r=n(5162),s=n(7643);const l={toc:[{value:"Authentication",id:"authentication",level:3}]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Making API calls with DataHub requires authentication, which can be performed by passing your API key via the request header ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," or as a parameter in the query URL."),(0,o.kt)("p",null,"Here's some boilerplate to get you started."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+n.url.replace(/(apikey\/[^\/]+\/){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,o.kt)(r.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+n.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,o.kt)(r.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+n.url.replace(/(apikey\/[^\/]+\/){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,o.kt)(r.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"curl -X POST '"+n.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}c.isMDXComponent=!0},3976:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6775);function i(e){let{network:t,networks:n,methods:i,service:r}=e;const s=(0,o.TH)(),l=(0,o.k6)();return a.createElement("div",null,a.createElement("label",null,"Change Network: "),a.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{l.push(s.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},n.map((e=>a.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),a.createElement("label",null," Jump to: "),a.createElement("select",{className:"custom-select",defaultValue:s.hash.replace("#","")||"",onChange:e=>{l.push("#"+e.target.value)}},i.map((e=>a.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},4777:(e,t,n)=>{n.d(t,{S:()=>U});var a=n(7462),o=n(7294),i=n(7748),r=n(460),s=n.n(r),l=n(3746),c=n(6412);const d={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function h(e){let{children:t="",header:n,actions:i,disabled:r=!1,status:h,onValueChange:u}=e;const f=(0,c.p)(),m=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;const t=null==(e=m.current)?void 0:e.querySelector("textarea"),n=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",n),()=>t.removeEventListener("input",n)}),[]);return o.createElement("div",{ref:m},o.createElement(p,{actions:i,status:h},n),o.createElement("div",{className:d.Container},o.createElement(s(),{value:t,onValueChange:u,highlight:function(e){return void 0===e&&(e=""),o.createElement(l.ZP,(0,a.Z)({},l.lG,{theme:f,code:e,language:"json"}),(e=>{let{className:t,style:n,tokens:i,getLineProps:r,getTokenProps:s}=e;return o.createElement("div",{className:d.Code},i.map(((e,t)=>o.createElement("div",(0,a.Z)({key:t},r({line:e,key:t}),{className:d.Line}),o.createElement("span",{className:d.LineContent},e.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},s({token:e,key:t}))))))))))}))},disabled:r,ignoreTabKey:!0,padding:10,style:{...f.plain,overflow:"auto"},className:d.Editor})))}function p(e){let{children:t,actions:n=[],status:a}=e;return o.createElement("div",{className:d.Header,"data-status":a},o.createElement("span",null,t),o.createElement("span",{className:d.Actions},n.map(((e,t)=>{let{title:n,onClick:a,Component:i=n}=e;return o.createElement("button",{className:d.HeaderButton,key:t+":"+n,title:n,onClick:a},i)}))))}var u=n(195);const f="overlayHeaderButton_IGf5";const m=function(e,t){const n=(0,o.useRef)(!1),a={error:void 0,data:void 0,loading:!1},[i,r]=(0,o.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...a,loading:!0};case"fetched":return{...a,data:t.payload,loading:!1};case"error":return{...a,error:t.payload,loading:!1};default:return e}}),a);return{...i,fetchData:async function(a,o){void 0===o&&(o={}),r({type:"loading"});try{const i=await fetch(e+(a||""),{...t,...o});if(!i.ok){let e,t,n;try{n=JSON.parse(await i.text()),e=await i.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(n,null,2)||i.statusText)}const s=await i.json();if(n.current)return;return r({type:"fetched",payload:s}),s}catch(i){if(n.current)return;return r({type:"error",payload:i.message}),null}}}};var g,y=n(7643),b=n(4672);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}const T=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,g||(g=o.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var _;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}const k=e=>{let{title:t,titleId:n,...a}=e;return o.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?o.createElement("title",{id:n},t):null,_||(_=o.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function x(e){let{req:t,res:n,interactive:a}=e;const[i,r]=(0,o.useState)(C(t.body)),[s,l]=(0,o.useState)(t.query),[c,d]=(0,o.useState)(S(n.body)),p="string"==typeof t.body&&0==t.body.indexOf("query"),{data:g,error:w,loading:_,fetchData:v}=m(t.url,{method:t.method,headers:{"Content-Type":p?"application/graphql":"application/json"},body:C(t.body)}),[x,P]=(0,o.useState)(null);(0,o.useEffect)((()=>{_?P("LOADING"):w||null!=g&&g.error?P("ERROR"):g&&P("SUCCESS")}),[g,w,_]);const I=[a?{title:"Run request",onClick:async()=>{const e=await v(s,{body:i});e&&d(S(e))},Component:o.createElement(o.Fragment,null,o.createElement(T,null)," Run")}:null,{title:"Copy",onClick:()=>(0,u.Z)(i),Component:o.createElement(b.Z,{code:"",className:f})},a?{title:"Reset",onClick:()=>{P(null),l(t.query),r(C(t.body)),d(S(n.body))},Component:o.createElement(k,null)}:null].filter((e=>!!e));return o.createElement(o.Fragment,null,o.createElement(h,{header:"GET"===t.method?"Request Query "+(a?"(try it)":""):"Request Body "+(a?"(try it)":""),actions:I,disabled:!a,onValueChange:e=>{a&&("GET"===t.method?l(e):"POST"===t.method&&r(e))}},"GET"===t.method?s:i),o.createElement(y.Z,{title:x?"Response":"Example Response",language:"json"},w?""+w:c))}function S(e){return JSON.stringify(e,null,2)}function C(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}var P=n(1099),I=n(3905);const A={toc:[]};function q(e){let{components:t,...n}=e;return(0,I.kt)("wrapper",(0,a.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("details",null,(0,I.kt)("summary",null,n.title),(0,I.kt)(P.D,{mdxType:"ReactMarkdown"},n.details)))}function R(e){let{content:t=""}=e;const[n,...a]=t.trim().split(/\n+/),i=a.join("\n");return o.createElement("div",null,o.createElement(P.D,null,n),o.createElement(q,{title:"View specification",details:i}))}q.isMDXComponent=!0;const E="heading_REER";var N=n(9960);function O(e){let{name:t,content:n="",interactive:a,request:i,response:r}=e;return["Rewards (by epoch)","Rewards (daily)"].includes(t)&&(i.body={...i.body,start_time:new Date(Date.now()-("Rewards (by epoch)"===t?1728e5:864e5)).toISOString().split("T")[0],end_time:(new Date).toISOString().split("T")[0]}),o.createElement(o.Fragment,null,o.createElement("h2",{id:t.toLowerCase(),className:E,"data-method":i.method},o.createElement(N.Z,{to:"#"+t.toLowerCase()},t)),o.createElement(R,{content:n}),o.createElement(x,{req:i,res:r,interactive:a}),o.createElement("hr",null))}function U(e){let{network:t,methods:n}=e;return o.createElement(o.Fragment,null,o.createElement("h3",null,"Available Methods"),n.map(((e,n)=>o.createElement(O,(0,a.Z)({key:t+n},e)))),o.createElement(i.Z,null))}},9338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),i=n(4777),r=n(3976),s=n(2750);const l={title:"Polygon",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API - Polygon",image:"img/logo.svg",keywords:["Staking API","Polygon"]},c="Staking API - Polygon",d={unversionedId:"api-reference/staking-api/polygon",id:"api-reference/staking-api/polygon",title:"Polygon",description:"Staking API - Polygon",source:"@site/docs/api-reference/staking-api/polygon.mdx",sourceDirName:"api-reference/staking-api",slug:"/api-reference/staking-api/polygon",permalink:"/api-reference/staking-api/polygon",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Polygon",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0,description:"Staking API - Polygon",image:"img/logo.svg",keywords:["Staking API","Polygon"]},sidebar:"docsSidebar"},h={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking-api---polygon"},"Staking API - Polygon"),(0,o.kt)(r.Z,{service:"staking-api",methods:[{name:"New Delegation Flow"},{name:"Get Delegation Flow Status"},{name:"Assign Staking Data"},{name:"Create Allowance Transaction"},{name:"Refresh Allowance Transaction"},{name:"Sign Allowance Transaction"},{name:"Create Delegate Transaction"},{name:"Refresh Delegate Transaction"},{name:"Sign Delegate Transaction"},{name:"New Un-Delegation Flow"},{name:"Get Un-Delegation Flow Status"},{name:"Create Undelegate Transaction"},{name:"Refresh Undelegate Transaction"},{name:"Sign Undelegate Transaction"},{name:"Create Claim Transaction"},{name:"Refresh Claim Transaction"},{name:"Sign Claim Transaction"},{name:"New Claim Rewards Flow"},{name:"Get Claim Rewards Flow Status"},{name:"Create Claim Rewards Transaction"},{name:"Refresh Claim Rewards Transaction"},{name:"Sign Claim Rewards Transaction"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polygon",value:"polygon"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"polygon",mdxType:"ApiReferenceNav"}),(0,o.kt)(s.ZP,{url:"https://polygon-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows",mdxType:"MakingCalls"}),(0,o.kt)(i.S,{methods:[{name:"New Delegation Flow",content:"Create a new flow with a `POST` request to `/api/v1/flows` to initiate the staking process.\n\n### Parameters\n\n*   `flow` - `object`\n    *   `network_code` - `string` Network this flow operates on (ex. near) (required)\n    *   `chain_code` - `string` Chain this flow operates on (ex. mainnet) (required)\n    *   `operation` - `string` The operation to -perform (ex. staking) (required)\n    *   `version` - `string` API version to use (ex. v1) (optional)\n\n### Response\n\n*   `id` - `string` ID of the newly created flow.\n*   `state` - `string` The current state of the flow i.e., `initialized`.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{auth:{type:"noauth"},method:"POST",header:[],body:{flow:{network_code:"polygon",chain_code:"testnet",operation:"staking",version:"v1"}},url:"https://polygon-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows"},interactive:!1,response:{body:""}},{name:"Get Delegation Flow Status",content:"Get the status of existing flow using the flow id from the previous step.\n\n### Parameters\n\n*   `flow_id` - `string` Pass the Flow ID you received in the response when creating the flow in the GET request URL, ex. `/flows/69d02e2c-bbde-4b09-bbe9-2be287a9a6de`.\n    \n\n### Response\n\n*   `id` - `string` Id of the flow.\n*   `state` - `string` The current state of the flow, i.e., `initialized`.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{auth:{type:"noauth"},method:"GET",header:[],url:"https://polygon-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/api/v1/flows/{{polygonStakingFlowId}}"},interactive:!1,response:{body:""}},{name:"Assign Staking Data",content:"After collecting the required inputs, `PUT /api/v1/flows/[:flow_id]/next` to move on to the next step in the flow.\n\n### Parameters\n\n\\* `name` - `string` Name of the action to execute (required).  \n\\* `inputs` - `array`  \n\\* `delegator_address` - `string` The delegating address (required).  \n\\* `validator_address` - `string` Address of the validator smart contract you want to delegate your tokens to (required).  \n\\* `amount` - `number` - The amount of MATIC to be delegated (required).  \n\\* `minimum_shares_to_mint` - `string` (optional) - the minimum number of shares of the delegation pool to be minted. If the exchange rate results in fewer shares being minted, the transaction will fail.  \n\\* `max_slippage_percentage` - `number` (optional) - the maximum slippage you are willing to accept.\n\n### Response\n\n\\* `id` - `string` Id of the newly created flow.  \n\\* `state` - `string` Current state of the flow i:e; `assign_staking_data`  \n\\* `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"assign_staking_data",inputs:{delegator_address:null,valiator_address:null,amount:null,minimum_shares_to_mint:null,max_slippage_percentage:null}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Create Allowance Transaction",content:"After collecting the required inputs, `PUT /api/v1/flows/[:flow_id]/next` to move on to the next step in the flow.\n\n### Parameters\n\n\\*   `name` - `string` Name of the action to execute (required).\n\\*   `inputs` - `array`\n    \\*   `gas_limit` - `string` Adjust if you wish to limit the possible transaction fee (optional).\n    \\*   `gas_price` - `string` Adjust if you wish to limit the possible transaction fee (optional).\n\n### Response\n\n\\*   `id` - `string` Id of the newly created flow.\n\\*   `state` - `string` Current state of the flow i:e; `delegate_tx_signature`\n\\*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"create_allowance_tx",inputs:{gas_limit:null,gas_price:null}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Refresh Allowance Transaction",content:"Use `refresh_allowance_tx` if you need to get a fresh version of the transaction Payload (for example, if the nonce needs to be updated).\n\n### Parameters\n\n\\*   `name` - `string` Name of the action to execute (required).\n\\*   `inputs` - `array` There are no inputs for this action (optional).\n    \n\n### Response\n\nThe transaction payload is refreshed.\n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"refresh_allowance_tx",inputs:null},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Sign Allowance Transaction",content:"Submit a signed transaction payload ready to be broadcast to the network.\n\n### Parameters\n\n*   `name` - `string` Name of the action to execute (required).\n*   `inputs` - `array`\n    *   `transaction_payload` - `string` Transaction payload can be found in the response after creating the transaction. (required). **OR**\n    *   `signatures` - `array` An array of signatures. Staking API will sign the payload if this is provided (optional).\n\n### Response\n\nThe transaction is broadcast to the network. Once it is confirmed, the staking flow is completed.\n\n* * *",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"sign_allowance_tx",inputs:{transaction_payload:null,signatures:[]}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Create Delegate Transaction",content:"After collecting the required inputs, `PUT /api/v1/flows/[:flow_id]/next` to move on to the next step in the flow.\n\n### Parameters\n\n\\*   `name` - `string` Name of the action to execute (required).\n\\*   `inputs` - `array`\n    \\*   `gas_limit` - `string` Adjust if you wish to limit the possible transaction fee (optional).\n    \\*   `gas_price` - `string` Adjust if you wish to limit the possible transaction fee (optional).\n\n### Response\n\n\\*   `id` - `string` ID of the newly created flow.\n\\*   `state` - `string` Current state of the flow i:e; `delegate_tx_signature`\n\\*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"create_delegate_tx",inputs:{gas_limit:null,gas_price:null}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Refresh Delegate Transaction",content:"Use `refresh_delegate_tx` if you need to get a fresh version of the transaction Payload (for example, if the nonce needs to be updated).\n\n### Parameters\n\n*   `name` - `string` Name of the action to execute (required).\n*   `inputs` - `array` There are no inputs for this action (optional).\n    \n\n### Response\n\nThe transaction payload is refreshed.\n\n* * *",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"refresh_delegate_tx",inputs:null},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Sign Delegate Transaction",content:"Submit a signed transaction payload ready to be broadcast to the network.\n\n### Parameters\n\n*   `name` - `string` Name of the action to execute (required).\n*   `inputs` - `array`\n    *   `transaction_payload` - `string` Transaction payload can be found in the response after creating the transaction. (required). **OR**\n    *   `signatures` - `array` An array of signatures. Staking API will sign the payload if this is provided (optional).\n\n### Response\n\nThe transaction is broadcast to the network. Once it is confirmed, the staking flow is completed.\n\n* * *",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"sign_delegate_tx",inputs:{transaction_payload:null,signatures:[]}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"New Un-Delegation Flow",content:"Create a new flow with `POST /api/v1/flows` to initiate the unstaking process.\n\n### **Parameters**\n\n\\*   `flow` - `object`\n    \\*   `network_code` - `string` Network this flow operates on (required).\n    \\*   `chain_code` - `string` Chain this flow operates on (required).\n    \\*   `operation` `string` The operation to perform (required).\n    \\*   `version` - `string` API version to use (optional).\n\n### Response\n\n\\*   `id` - `string` ID of the newly created flow.\n\\*   `state` - `string` The current state of the flow.\n\\*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n---",request:{auth:{type:"noauth"},method:"POST",header:[],body:{flow:{network_code:"polygon",chain_code:"testnet",operation:"unstaking",version:"v1"}},url:"https://polygon-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows"},interactive:!1,response:{body:""}},{name:"Get Un-Delegation Flow Status",content:"Get the status of the existing flow using the flow id from the previous step.\n\n### Parameters\n\n*   `flow_id` - `string` Pass the Flow ID you received in the response when creating the flow in the GET request URL.\n    \n\n### Response\n\n*   `id` - `string` Id of the newly created flow.\n*   `state` - `string` The current state of the flow.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{auth:{type:"noauth"},method:"GET",header:[],url:"https://polygon-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/api/v1/flows/{{polygonUnstakingFlowId}}"},interactive:!1,response:{body:""}},{name:"Create Undelegate Transaction",content:"After collecting the required Inputs, `PUT /api/v1/flows/[:flow_id]/next` to move on to the next step in the flow.\n\n### Parameters\n\n\\*   `name` - `string` Name of the action to execute (required).\n\\*   `inputs` - `array`\n    \\*   `validator_address` - `string` Validator smart contract address from which MATIC will be un-delegated (required).\n    \\*   `delegator_address` - `string` The delegator address (required).\n    \\*   `amount` - `number` The amount of MATIC to be un-delegated (required).\n\n### Response\n\n\\*   `id` - `string` Id of the newly created flow.\n\\*   `state` - `string` The current state of the flow.\n\\*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"create_undelegate_tx",inputs:{validator_address:null,delegator_address:null,amount:null}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonUnstakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Refresh Undelegate Transaction",content:"Use this action if you need to get a fresh version of the transaction payload (i.e., if the nonce needs to be updated).\n\n### Parameters\n\n*   `name` - `string` name of the action to execute (i.e., `refresh_undelegate_tx`)\n*   `inputs` - `array` There are no inputs for this action (optional).\n    \n\n### Response\n\n*   `id` - `string` Id of the flow.\n*   `state` - `string` Current state of the flow.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"refresh_undelegate_tx",inputs:{}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonUnstakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Sign Undelegate Transaction",content:"Submit a signed transaction payload ready to be broadcast to the network.\n\n### Parameters\n\n*   `name` - `string` Name of the action to execute (required).\n*   `inputs` - `array`\n    *   `transaction_payload` - `string` Transaction payload can be found in the response after creating the transaction. (required). **OR**\n    *   `signatures` - `array` An array of signatures. Staking API will sign the payload if this is provided (optional).\n\n### Response\n\nThe transaction is broadcast to the network. Once it is confirmed, the unstaking flow is completed.\n\n* * *",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"sign_undelegate_tx",inputs:{transaction_payload:"12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3903cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d30c30f1c809a30c28077fdefdc7b0515a04ff9a8375daeb42b82fbb81858fff530010000000207000000756e7374616b65260000007b22616d6f756e74223a2232303030303030303030303030303030303030303030303030227d00e057eb481b000000000000000000000000000000000000005a130e9cde647e0f06bdd3375b811cd7205cea263d875b6ce96a7ab424129cb67a16f891f3b7117e3459b06b44fef34c462ecffbea74ca2450b5742ed48a770d",signatures:[]}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonUnstakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Create Claim Transaction",content:"After collecting the required Inputs, `PUT /api/v1/flows/[:flow_id]/next` to move on to the next step in the flow.\n\n### Parameters\n\n\\*   `name` - `string` Name of the action to execute (required).\n\\*   `inputs` - `array`\n    \\*   `gas_limit` - `number` Adjust if you wish to limit the possible transaction fee (optional).\n    \\*   `gas_price` - `number` Adjust if you wish to limit the possible transaction fee (optional).\n\n### Response\n\n\\*   `id` - `string` Id of the newly created flow.\n\\*   `state` - `string` The current state of the flow.\n\\*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"create_claim_tx",inputs:{gas_limit:null,gas_price:null}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Refresh Claim Transaction",content:"Use this action if you need to get a fresh version of the transaction payload (i.e., if the nonce needs to be updated).\n\n### Parameters\n\n\\*   `name` - `string` name of the action to execute (i.e., `refresh_undelegate_tx`)\n\\*   `inputs` - `array` There are no inputs for this action (optional).\n    \n\n### Response\n\n\\*   `id` - `string` Id of the flow.\n\\*   `state` - `string` The current state of the flow.\n\\*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n---\n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"refresh_claim_tx",inputs:{}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Sign Claim Transaction",content:"Submit a signed transaction payload ready to be broadcast to the network.\n\n### Parameters\n\n\\*   `name` - `string` Name of the action to execute (required).\n\\*   `inputs` - `array`\n    \\*   `transaction_payload` - `string` Transaction payload can be found in the response after creating the transaction. (required). **OR**\n    \\*   `signatures` - `array` An array of signatures. Staking API will sign the payload if this is provided (optional).\n\n### Response\n\nThe transaction is broadcast to the network. Once it is confirmed, the staking flow is completed.\n\n---\n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"sign_claim_tx",inputs:{transaction_payload:null,signatures:[]}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonStakingFlowId}}/next"},interactive:!1,response:{body:""}},{name:"New Claim Rewards Flow",content:"Create a new flow with `POST /api/v1/flows` to initiate the transfer process.\n\n### Parameters\n\n*   `flow` - `object`\n    *   `network_code` - `string` Network this flow operates on (required).\n    *   `chain_code` - `string` Chain this flow operates on (required).\n    *   `operation` `string` The operation to -perform (required).\n    *   `version` - `string` API version to use (optional).\n\n### Response\n\n*   `id` - `string` Id of the newly created flow.\n*   `state` - `string` Current state of the flow.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{auth:{type:"noauth"},method:"POST",header:[],body:{flow:{network_code:"polygon",chain_code:"testnet",operation:"claim_rewards",version:"v1"}},url:"https://polygon-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows"},interactive:!1,response:{body:""}},{name:"Get Claim Rewards Flow Status",content:"Get the status of the existing flow using the `flow_id` from the previous step.\n\n### Parameters\n\n*   `flow_id` - `string` Pass the Flow ID you received in the response when creating the flow in the GET request URL.\n    \n\n### Response\n\n*   `id` - `string` Id of the newly created flow.\n*   `state` - `string` The current state of the flow.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{method:"GET",header:[],url:"https://polygon-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/api/v1/flows/{{polygonClaimRewardsFlowId}}"},interactive:!1,response:{body:""}},{name:"Create Claim Rewards Transaction",content:"After collecting the required Inputs, `PUT /api/v1/flows/[:flow_id]/next` to move on to the next step in the flow.\n\n### Parameters\n\n\\* `name` - `string` Name of the action to execute i:e; `create_claim_rewards_tx`  \n\\* `inputs` - `array`  \n\\* `delegator_address` - `string`the address delegating MATIC (required).  \n\\* `validator_address` - `string` the Validator contract address to which MATIC are delegated (required).  \n\\* `gas_limit` - `number` - adjust gas limit for the claim transaction (optional).  \n\\* `gas_price` - `number` - adjust gas limit for the claim transaction (optional).\n\n### Response\n\n\\* `id` - `string` Id of the newly created flow.  \n\\* `state` - `string` Current state of the flow.  \n\\* `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"create_claim_rewards_tx",inputs:{delegator_address:null,validator_address:null,gas_limit:null,gas_price:null}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonClaimRewardsFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Refresh Claim Rewards Transaction",content:"Use this action if you need to get a fresh version of the transaction payload (i.e., if the nonce needs to be updated)\n\n### Parameters\n\n\\*   `name` - `string` name of the action to execute (i.e., `refresh_claim_rewards_tx`)\n\\*   `inputs` - `array` There are no inputs for this action (optional).\n    \n\n### Response\n\n\\*   `id` - `string` Id of the newly created flow.\n\\*   `state` - `string` The current state of the flow.\n\\*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n---",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"refresh_claim_rewards_tx",inputs:{}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonClaimRewardsFlowId}}/next"},interactive:!1,response:{body:""}},{name:"Sign Claim Rewards Transaction",content:"Submit a signed transaction payload ready to be broadcast to the network.\n\n### Parameters\n\n*   `name` - `string` Name of the action to execute (required).\n*   `inputs` - `array`\n    *   `transaction_payload` - `string` Transaction payload can be found in the response after creating the transaction. (required). **OR**\n    *   `signatures` - `array` An array of signatures. Staking API will sign the payload if this is provided (optional).\n\n### Response\n\nThe transaction is broadcast to the network. Once it is confirmed, the transfer flow is completed.\n\n* * *",request:{auth:{type:"noauth"},method:"PUT",header:[],body:{name:"sign_claim_rewards_tx",inputs:{transaction_payload:null,signatures:[]}},url:"https://{{MATIC_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{polygonClaimRewardsFlowId}}/next"},interactive:!1,response:{body:""}}],service:"staking-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polygon",value:"polygon"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"polygon",mdxType:"APIMethods"}))}f.isMDXComponent=!0}}]);