"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[2307],{2750:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(7462),i=(a(7294),a(3905)),r=a(5488),o=a(5162),d=a(5413);const c={toc:[{value:"Authentication &amp; Making Calls",id:"authentication--making-calls",level:3}]};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"authentication--making-calls"},"Authentication & Making Calls"),(0,i.kt)("p",null,"Making API calls with DataHub requires authentication, which can be performed by passing your API key via the request header ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," ",(0,i.kt)("em",{parentName:"p"},"or")," as a parameter in the query URL."),(0,i.kt)("p",null,"Here's some boilerplate to get you started."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,i.kt)(d.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,i.kt)(o.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,i.kt)(d.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,i.kt)(o.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,i.kt)(d.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,i.kt)(o.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,i.kt)(d.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}s.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6775);function r(e){let{network:t,networks:a,methods:r,service:o}=e;const d=(0,i.TH)(),c=(0,i.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{c.push("/api-reference/"+o+"/"+e.target.value)}},a.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:d.hash.replace("#","")||"",onChange:e=>{c.push("#"+e.target.value)}},r.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},1834:(e,t,a)=>{a.d(t,{S:()=>L});var n=a(7462),i=a(7294),r=a(7748),o=a(460),d=a.n(o),c=a(3746),s=a(6412);const l={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function p(e){let{children:t="",header:a,actions:r,disabled:o=!1,status:p,onValueChange:b}=e;const u=(0,s.p)(),h=(0,i.useRef)(null);(0,i.useEffect)((()=>{var e;const t=null==(e=h.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return i.createElement("div",{ref:h},i.createElement(f,{actions:r,status:p},a),i.createElement("div",{className:l.Container},i.createElement(d(),{value:t,onValueChange:b,highlight:function(e){return void 0===e&&(e=""),i.createElement(c.ZP,(0,n.Z)({},c.lG,{theme:u,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:r,getLineProps:o,getTokenProps:d}=e;return i.createElement("div",{className:l.Code},r.map(((e,t)=>i.createElement("div",(0,n.Z)({key:t},o({line:e,key:t}),{className:l.Line}),i.createElement("span",{className:l.LineContent},e.map(((e,t)=>i.createElement("span",(0,n.Z)({key:t},d({token:e,key:t}))))))))))}))},disabled:o,ignoreTabKey:!0,padding:10,style:{...u.plain,overflow:"auto"},className:l.Editor})))}function f(e){let{children:t,actions:a=[],status:n}=e;return i.createElement("div",{className:l.Header,"data-status":n},i.createElement("span",null,t),i.createElement("span",{className:l.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:r=a}=e;return i.createElement("button",{key:t+":"+a,title:a,onClick:n},r)}))))}var b=a(195);const u=function(e,t){const a=(0,i.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[r,o]=(0,i.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...r,fetchData:async function(n){void 0===n&&(n={}),o({type:"loading"});try{const i=await fetch(e,{...t,...n});if(!i.ok)throw new Error(i.statusText);const r=await i.json();if(a.current)return;return o({type:"fetched",payload:r}),r}catch(i){if(a.current)return;return o({type:"error",payload:i}),null}}}};var h=a(5413);const m="Banner_i5OS",y="Title_HweB";function g(e){let{title:t,content:a}=e;return i.createElement("div",{className:m},i.createElement("h4",{className:y},t),a)}var _,k;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)}const w=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-copy","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,_||(_=i.createElement("rect",{x:9,y:9,width:13,height:13,rx:2,ry:2})),k||(k=i.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})))};var x;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const T=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-play","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,x||(x=i.createElement("path",{d:"m5 3 14 9-14 9V3z"})))};var C;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},S.apply(this,arguments)}const P=e=>{let{title:t,titleId:a,...n}=e;return i.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-x","aria-labelledby":a},n),t?i.createElement("title",{id:a},t):null,C||(C=i.createElement("path",{d:"M20 4 4 20M4 4l16 16"})))};function N(e){let{req:t,res:a,interactive:n}=e;const[r,o]=(0,i.useState)(O(t.body)),[d,c]=(0,i.useState)(O(a.body)),{data:s,error:l,loading:f,fetchData:m}=u(t.url,{method:t.method,headers:{"Content-Type":"application/json"},body:O(t.body)}),[y,_]=(0,i.useState)(null);(0,i.useEffect)((()=>{f?_("LOADING"):l||null!=s&&s.error?_("ERROR"):s&&_("SUCCESS")}),[s,l,f]);const k=[n?{title:"Run request",onClick:async()=>{const e=await m({body:r});e&&c(O(e))},Component:i.createElement(i.Fragment,null,"RUN ",i.createElement(T,null))}:null,{title:"Copy",onClick:()=>(0,b.Z)(r),Component:i.createElement(w,null)},n?{title:"Reset",onClick:()=>{_(null),o(O(t.body)),c(O(a.body))},Component:i.createElement(P,null)}:null].filter((e=>!!e));return i.createElement(i.Fragment,null,i.createElement(p,{header:"Live Editor",actions:k,disabled:!n,onValueChange:e=>o(e)},r),l&&i.createElement(g,{title:"Network error",content:"It could be a CORS issue, or a dropped internet connection. Please check the browser console for details."}),i.createElement(h.Z,{title:y?"Response":"Example Response",language:"json"},l?"":d))}function O(e){return JSON.stringify(e,null,2)}var A=a(1099),q=a(3905);const Z={toc:[]};function F(e){let{components:t,...a}=e;return(0,q.kt)("wrapper",(0,n.Z)({},Z,a,{components:t,mdxType:"MDXLayout"}),(0,q.kt)("details",null,(0,q.kt)("summary",null,a.title),(0,q.kt)(A.D,{mdxType:"ReactMarkdown"},a.details)))}function I(e){let{content:t=""}=e;const[a,...n]=t.trim().split(/\n+/),r=n.join("\n");return i.createElement("div",null,i.createElement(A.D,null,a),i.createElement(F,{title:"View specification",details:r}))}F.isMDXComponent=!0;const R="heading_REER";function j(e){let{name:t,content:a="",interactive:n,request:r,response:o}=e;return i.createElement(i.Fragment,null,i.createElement("h2",{id:t.toLowerCase(),className:R,"data-method":r.method},i.createElement("code",null,t)),i.createElement(I,{content:a}),i.createElement(N,{req:r,res:o,interactive:n}),i.createElement("hr",null))}function L(e){let{network:t,methods:a}=e;return i.createElement(i.Fragment,null,i.createElement("h3",null,"Available Methods"),a.map(((e,a)=>i.createElement(j,(0,n.Z)({key:t+a},e)))),i.createElement(r.Z,null))}},6952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>f,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={toc:[]};function o(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Depositing ETH to stake on a validator is a simple process. We will collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The funding account address."),(0,i.kt)("li",{parentName:"ul"},"The public key of the validator that the ETH is to be deposited to."),(0,i.kt)("li",{parentName:"ul"},"The withdrawal address for the given validator"),(0,i.kt)("li",{parentName:"ul"},"A BLS proof of possession (i.e., a proof that the private key corresponding to the ",(0,i.kt)("inlineCode",{parentName:"li"},"validator_pub_key")," is known by the signer)."),(0,i.kt)("li",{parentName:"ul"},"A deposit data root which uniquely identifies the set of deposits made so far."),(0,i.kt)("li",{parentName:"ul"},"Optionally, the amount of Gas to be used and the Gas price can be specified for the staking transaction itself.")),(0,i.kt)("p",null,"Once the deposit transaction is confirmed on-chain, your validator will soon enter the activation queue. Once activated, you will be earning rewards which can be reported by Figment's Rewards API."))}o.isMDXComponent=!0;var d=a(1834),c=a(3976),s=a(2750);const l={title:"Ethereum",sidebar_position:0,pagination_prev:null,pagination_next:null},p="Staking API - Ethereum",f={unversionedId:"api-reference/staking-api/ethereum",id:"api-reference/staking-api/ethereum",title:"Ethereum",description:"Parameters",source:"@site/docs/api-reference/staking-api/ethereum.mdx",sourceDirName:"api-reference/staking-api",slug:"/api-reference/staking-api/ethereum",permalink:"/api-reference/staking-api/ethereum",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Ethereum",sidebar_position:0,pagination_prev:null,pagination_next:null},sidebar:"docsSidebar"},b={},u=[],h={toc:u};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"staking-api---ethereum"},"Staking API - Ethereum"),(0,i.kt)(c.Z,{service:"staking-api",methods:[{name:"New Staking Flow"},{name:"Get Staking Flow Status"},{name:"create_deposit_tx"},{name:"refresh_deposit_tx"},{name:"sign_deposit_tx"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"ethereum",mdxType:"ApiReferenceNav"}),(0,i.kt)(s.ZP,{url:"https://eth-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows",mdxType:"MakingCalls"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("h3",null,"Parameters")),(0,i.kt)(o,{mdxType:"Parameters"})),(0,i.kt)(d.S,{methods:[{name:"New Staking Flow",content:"Create a new flow with a `POST` request to `/api/v1/flows` to initiate the staking process.\n\n### Parameters\n\n*   `flow` - `object`\n    *   `network_code` - `string` Network this flow operates on (ex. ethereum) (required)\n    *   `chain_code` - `string` Chain this flow operates on (ex. goerli-prater) (required)\n    *   `operation` `string` The operation to -perform (ex. staking) (required)\n    *   `version` - `string` API version to use (ex. v1) (optional)\n\n### Results\n\n*   `id` - `string` Id of the newly created flow.\n*   `state` - `string` The current state of the flow i.e., `initialized`.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{auth:{type:"noauth"},method:"POST",header:[{key:"Authorization",value:"{{STAGING_API_KEY}}",type:"text"}],body:{flow:{network_code:"ethereum",chain_code:"goerli-prater",operation:"staking",version:"v1"}},url:"https://eth-slate.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows"},interactive:!1,response:{name:"New Staking Flow",status:"OK",code:200,body:{id:"610eb358-d219-47f1-9d8c-6bbd7ee32e15",state:"initialized",actions:[{name:"create_deposit_tx",inputs:[{name:"funding_account_address",display:"Funding Account Address",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"validator_pub_key",display:"Validator Pub Key",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"withdrawal_credentials",display:"Withdrawal Credentials",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"signature",display:"Signature",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"deposit_data_root",display:"Deposit Data Root",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"gas_limit",display:"Gas Limit",description:"",type:"string",validations:[{type:"numericality",options:{allow_nil:!0,only_integer:!0,greater_than:0}}]},{name:"gas_price",display:"Gas Price",description:"",type:"string",validations:[{type:"numericality",options:{allow_nil:!0,greater_than:0}}]}]}],data:{funding_account_address:null,validator_pub_key:null,withdrawal_credentials:null,signature:null,deposit_data_root:null,amount:"32.0",gas_price:null,gas_limit:null,deposit_transaction:null},network_code:"ethereum",chain_code:"goerli-prater",created_at:"2022-08-15T18:02:49.820Z",updated_at:"2022-08-15T18:02:49.820Z"}}},{name:"Get Staking Flow Status",content:"Get the status of the existing flow using the `flow_id` from the previous step.\n\n### Parameters\n\n*   `flow_id` - `string` Pass the Flow ID you received in the response when creating the flow in the GET request URL, ex. `/flows/69d02e2c-bbde-4b09-bbe9-2be287a9a6de`.\n    \n\n### Results\n\n*   `id` - `string` ID of the flow.\n*   `state` - `string` The current state of the flow, i.e., `initialized`.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{method:"GET",header:[],url:"https://{{ETH_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{ethStakingFlowId}}"},interactive:!1,response:{name:"Get Staking Flow Status",status:"OK",code:200,body:{id:"610eb358-d219-47f1-9d8c-6bbd7ee32e15",state:"initialized",actions:[{name:"create_deposit_tx",inputs:[{name:"funding_account_address",display:"Funding Account Address",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"validator_pub_key",display:"Validator Pub Key",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"withdrawal_credentials",display:"Withdrawal Credentials",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"signature",display:"Signature",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"deposit_data_root",display:"Deposit Data Root",description:"",type:"string",validations:[{type:"presence",options:{}},{type:"hex",options:{}}]},{name:"gas_limit",display:"Gas Limit",description:"",type:"string",validations:[{type:"numericality",options:{allow_nil:!0,only_integer:!0,greater_than:0}}]},{name:"gas_price",display:"Gas Price",description:"",type:"string",validations:[{type:"numericality",options:{allow_nil:!0,greater_than:0}}]}]}],data:{funding_account_address:null,validator_pub_key:null,withdrawal_credentials:null,signature:null,deposit_data_root:null,amount:"32.0",gas_price:null,gas_limit:null,deposit_transaction:null},network_code:"ethereum",chain_code:"goerli-prater",created_at:"2022-08-15T18:02:49.820Z",updated_at:"2022-08-15T18:02:49.820Z"}}},{name:"create_deposit_tx",content:"After collecting the required inputs, send a`PUT` request to `/api/v1/flows/[:flow_id]/next` to move on to the next step in the flow.\n\n### Parameters\n\n*   `name` - `string` Name of the action to execute (required).\n*   `inputs` - `array` (required).\n    *   `funding_account_address` - `string` The wallet ETH will be originating from (required).\n    *   `validator_pub_key` - `string` The public key of the validator that the ETH is to be deposited to. (required).\n    *   `withdrawal_credentials` - `string` The withdrawal address for the given validator. (required).\n    *   `signature` - `string` A BLS proof of possession i.e., a proof that the private key corresponding to the `validator_pub_key` is known by the signer (required).\n    *   `deposit_data_root` - `string` Uniquely identifies the set of deposits made so far (required).\n    *   `amount` - `number` Number of tokens you want to delegate (required).\n    *   `gas_price` - `string` Adjust the gas price (optional).\n    *   `gas_limit` - `string` Adjust the gas limit (optional).\n\n### Results\n\n*   `id` - `string` ID of the newly created flow.\n*   `state` - `string` Current state of the flow.\n*   `actions` - `array` The actions array contains the name of the next action in the flow and details of the expected inputs in the data field.\n    \n\n* * *",request:{method:"PUT",header:[],body:"",url:"https://{{ETH_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{ethStakingFlowId}}/next"},interactive:!1,response:{name:"200 - deposit_tx_signature",body:{id:"8307b0d1-fc17-45b1-b540-2d9c31578d99",state:"deposit_tx_signature",actions:[{name:"refresh_deposit_tx",inputs:[]},{name:"sign_deposit_tx",inputs:[{name:"transaction_payload",display:"Transaction Payload",description:"",type:"signed_transaction",validations:[],signers:["0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594"],transaction_payload:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0"},{name:"signatures",display:"Signatures",description:"",type:"array_of_signatures",validations:[],signers:["0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594"],transaction_payload:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0",signing_payload:"0xfa2fde357ca51a2f2c2b9aab0b00451d0b7ba8772837b2c6fab7a5371d9a509e"}]}],data:{funding_account_address:"0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594",validator_pub_key:"0xa7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549",withdrawal_credentials:"0x010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca",signature:"0x876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65b",deposit_data_root:"0xd446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f91",amount:"32.0",gas_price:null,gas_limit:null,deposit_transaction:{raw:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0",signing_payload:"0xfa2fde357ca51a2f2c2b9aab0b00451d0b7ba8772837b2c6fab7a5371d9a509e",signed:null,hash:null,status:null,error:null,signatures:null}},network_code:"ethereum",chain_code:"goerli-prater",created_at:"2022-08-04T03:56:12.111Z",updated_at:"2022-08-04T04:11:54.830Z"}}},{name:"refresh_deposit_tx",content:"Use `refresh_deposit_tx` if you need to get a fresh version of the transaction Payload (for example, if the nonce needs to be updated).\n\n### Parameters\n\n*   `name` - `string` Name of the action to execute (required).\n*   `inputs` - `array` There are no inputs for this action (optional).\n    \n\n### Results\n\nThe transaction payload is refreshed.\n\n* * *",request:{method:"PUT",header:[],body:{name:"refresh_deposit_tx",inputs:null},url:"https://{{ETH_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{ethStakingFlowId}}/next"},interactive:!1,response:{name:"refresh_deposit_tx",body:{id:"8307b0d1-fc17-45b1-b540-2d9c31578d99",state:"deposit_tx_signature",actions:[{name:"refresh_deposit_tx",inputs:[]},{name:"sign_deposit_tx",inputs:[{name:"transaction_payload",display:"Transaction Payload",description:"",type:"signed_transaction",validations:[],signers:["0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594"],transaction_payload:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0"},{name:"signatures",display:"Signatures",description:"",type:"array_of_signatures",validations:[],signers:["0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594"],transaction_payload:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0",signing_payload:"0xfa2fde357ca51a2f2c2b9aab0b00451d0b7ba8772837b2c6fab7a5371d9a509e"}]}],data:{funding_account_address:"0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594",validator_pub_key:"0xa7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549",withdrawal_credentials:"0x010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca",signature:"0x876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65b",deposit_data_root:"0xd446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f91",amount:"32.0",gas_price:null,gas_limit:null,deposit_transaction:{raw:"0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0",signing_payload:"0xfa2fde357ca51a2f2c2b9aab0b00451d0b7ba8772837b2c6fab7a5371d9a509e",signed:null,hash:null,status:null,error:null,signatures:null}},network_code:"ethereum",chain_code:"goerli-prater",created_at:"2022-08-04T03:56:12.111Z",updated_at:"2022-08-04T04:11:54.830Z"}}},{name:"sign_deposit_tx",content:"Submit a signed transaction payload ready to be broadcast to the network.\n\n### Parameters\n\n*   `name` - `string` Name of the action to execute (required).\n*   `inputs` - `array`\n    *   `transaction_payload` - `string` Transaction payload can be found in the response after creating the transaction. (required). **OR**\n    *   `signatures` - `array` An array of signatures. Slate will sign the payload if this is provided (optional).\n\n### Results\n\nThe transaction is broadcast to the network. Once it is confirmed, the staking flow is completed.\n\n* * *",request:{method:"PUT",header:[],body:{name:"sign_deposit_tx",inputs:{transaction_payload:"0x02f901d605808459682f008459682f1c82dc9e94ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120021db2ee51da4e420dac8310928e2c3c25b7f8b5056dc792a206e680a48308230000000000000000000000000000000000000000000000000000000000000030a0b60b10bdae3bdc526586163bc83a928f14c9bcb8244816f23395692a7cd613e0f3ea23aa295ae0467dc65002c95640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000dc94dbfac39af945c8186a6b3fc738c5ce97b010000000000000000000000000000000000000000000000000000000000000006088cce9fcadc43c58db4d5c0e7101cb27537be0a37b1e2fb2c096e72aee14b3bce20fca87ff11f92744abc71a221a9ceb11f52e1cfae59af00e7e42f83d482901223a100f88b532e19bc776786cd4baaddb6ec4290fdedfc3ebefcbf44fe7e413c0",signatures:[]}},url:"https://{{ETH_STAKING_HOST}}/apikey/9513550c6ba06b65633a2b6ce8c5bb01/api/v1/flows/{{ethStakingFlowId}}/next"},interactive:!1,response:{name:"200 - deposited",body:null}}],service:"staking-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"Ethereum",value:"ethereum"},{label:"NEAR",value:"near"},{label:"Polkadot",value:"polkadot"},{label:"Solana",value:"solana"}],network:"ethereum",mdxType:"APIMethods"}))}m.isMDXComponent=!0}}]);