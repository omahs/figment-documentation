"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8306],{2750:(e,t,a)=>{a.d(t,{ZP:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),s=a(5162),l=a(5413);const i={toc:[{value:"Authentication &amp; Making Calls",id:"authentication--making-calls",level:3}]};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication--making-calls"},"Authentication & Making Calls"),(0,r.kt)("p",null,"Making API calls with DataHub requires authentication, which can be performed by passing your API key via the request header ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," or as a parameter in the query URL."),(0,r.kt)("p",null,"Here's some boilerplate to get you started."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,r.kt)(s.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,r.kt)(s.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,r.kt)(s.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(l.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}c.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6775);function o(e){let{network:t,networks:a,methods:o,service:s}=e;const l=(0,r.TH)(),i=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{i.push(l.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},a.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:l.hash.replace("#","")||"",onChange:e=>{i.push("#"+e.target.value)}},o.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},5258:(e,t,a)=>{a.d(t,{S:()=>H});var n=a(7462),r=a(7294),o=a(7748),s=a(460),l=a.n(s),i=a(3746),c=a(6412);const u={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function d(e){let{children:t="",header:a,actions:o,disabled:s=!1,status:d,onValueChange:h}=e;const m=(0,c.p)(),g=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const t=null==(e=g.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return r.createElement("div",{ref:g},r.createElement(p,{actions:o,status:d},a),r.createElement("div",{className:u.Container},r.createElement(l(),{value:t,onValueChange:h,highlight:function(e){return void 0===e&&(e=""),r.createElement(i.ZP,(0,n.Z)({},i.lG,{theme:m,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:o,getLineProps:s,getTokenProps:l}=e;return r.createElement("div",{className:u.Code},o.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},s({line:e,key:t}),{className:u.Line}),r.createElement("span",{className:u.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},l({token:e,key:t}))))))))))}))},disabled:s,ignoreTabKey:!0,padding:10,style:{...m.plain,overflow:"auto"},className:u.Editor})))}function p(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:u.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:u.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:o=a}=e;return r.createElement("button",{className:u.HeaderButton,key:t+":"+a,title:a,onClick:n},o)}))))}var h=a(195);const m=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[o,s]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...o,fetchData:async function(n,r){void 0===r&&(r={}),s({type:"loading"});try{const o=await fetch(e+(n||""),{...t,...r});if(!o.ok){let e,t,a;try{a=JSON.parse(await o.text()),e=await o.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||o.statusText)}const l=await o.json();if(a.current)return;return s({type:"fetched",payload:l}),l}catch(o){if(a.current)return;return s({type:"error",payload:o.message}),null}}}};var g,b=a(5413);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(this,arguments)}const f=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,g||(g=r.createElement("path",{d:"M15.526 2H4.79C3.805 2 3 2.818 3 3.818v12.728h1.79V3.818h10.736V2Zm2.684 3.636H8.368c-.984 0-1.79.819-1.79 1.819v12.727c0 1 .806 1.818 1.79 1.818h9.842c.985 0 1.79-.818 1.79-1.818V7.455c0-1-.805-1.819-1.79-1.819Zm0 14.546H8.368V7.455h9.842v12.727Z",fill:"#0C3F5C"})))};var k;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)}const E=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,k||(k=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var C;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},w.apply(this,arguments)}const T=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,C||(C=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function Z(e){let{req:t,res:a,interactive:n}=e;const[o,s]=(0,r.useState)(P(t.body)),[l,i]=(0,r.useState)(t.query),[c,u]=(0,r.useState)(_(a.body)),p="string"==typeof t.body&&0==t.body.indexOf("query"),{data:g,error:y,loading:k,fetchData:v}=m(t.url,{method:t.method,headers:{"Content-Type":p?"application/graphql":"application/json"},body:P(t.body)}),[C,w]=(0,r.useState)(null);(0,r.useEffect)((()=>{k?w("LOADING"):y||null!=g&&g.error?w("ERROR"):g&&w("SUCCESS")}),[g,y,k]);const Z=[n?{title:"Run request",onClick:async()=>{const e=await v(l,{body:o});e&&u(_(e))},Component:r.createElement(r.Fragment,null,r.createElement(E,null)," Run")}:null,{title:"Copy",onClick:()=>(0,h.Z)(o),Component:r.createElement(f,null)},n?{title:"Reset",onClick:()=>{w(null),i(t.query),s(P(t.body)),u(_(a.body))},Component:r.createElement(T,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(d,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:Z,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?i(e):"POST"===t.method&&s(e))}},"GET"===t.method?l:o),r.createElement(b.Z,{title:C?"Response":"Example Response",language:"json"},y?""+y:c))}function _(e){return JSON.stringify(e,null,2)}function P(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}var S=a(1099),x=a(3905);const N={toc:[]};function A(e){let{components:t,...a}=e;return(0,x.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,x.kt)("details",null,(0,x.kt)("summary",null,a.title),(0,x.kt)(S.D,{mdxType:"ReactMarkdown"},a.details)))}function R(e){let{content:t=""}=e;const[a,...n]=t.trim().split(/\n+/),o=n.join("\n");return r.createElement("div",null,r.createElement(S.D,null,a),r.createElement(A,{title:"View specification",details:o}))}A.isMDXComponent=!0;const M="heading_REER",F="anchor_oyxB";function j(e){let{name:t,content:a="",interactive:n,request:o,response:s}=e;return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:M,"data-method":o.method},r.createElement("code",null,t),r.createElement("a",{className:F,href:"#"+t.toLowerCase()},"#")),r.createElement(R,{content:a}),r.createElement(Z,{req:o,res:s,interactive:n}),r.createElement("hr",null))}function H(e){let{network:t,methods:a}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(j,(0,n.Z)({key:t+a},e)))),r.createElement(o.Z,null))}},229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(5258),s=a(3976),l=a(2750);const i={title:"NEAR Protocol",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0},c="Transaction Search API - NEAR Protocol",u={unversionedId:"api-reference/transaction-search-api/near-protocol",id:"api-reference/transaction-search-api/near-protocol",title:"NEAR Protocol",description:"",source:"@site/docs/api-reference/transaction-search-api/near-protocol.mdx",sourceDirName:"api-reference/transaction-search-api",slug:"/api-reference/transaction-search-api/near-protocol",permalink:"/api-reference/transaction-search-api/near-protocol",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"NEAR Protocol",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0},sidebar:"docsSidebar"},d={},p=[],h={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-search-api---near-protocol"},"Transaction Search API - NEAR Protocol"),(0,r.kt)(s.Z,{service:"transaction-search-api",methods:[{name:"/transactions"},{name:"/transactions/{hash}"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"NEAR Protocol",value:"near-protocol"}],network:"near-protocol",mdxType:"ApiReferenceNav"}),(0,r.kt)(l.ZP,{url:"https://near--indexer.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",mdxType:"MakingCalls"}),(0,r.kt)(o.S,{methods:[{name:"/transactions",content:"Returns transactions matching the search parameters.\n\n### Parameters\n\nQuery string parameters -\n\n*   `block_hash` - `string` Filter by block hash.\n*   `block_height` - `string` Filter by block height.\n*   `sender` - Account which sent the transaction.\n*   `receiver` - Account which was the transaction recipient.\n*   `start_date` - `string` Search range start time.\n*   `end_date` - `string` Search range end time.\n*   `start_height` - `string` Search range start time.\n*   `end_height` - `string` Search range end time.\n*   `limit` - Limit results. Max is 100.\n    \n\n### Results\n\nReturns transaction details.",request:{method:"GET",header:[{key:"Authorization",value:"{{API_KEY}}",type:"text"}],url:"https://near--indexer.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/transactions?network=near&chain_id=mainnet&account=ledgerbyfigment.poolv1.near&limit=100"},interactive:!0,response:{name:"/transactions",status:"OK",code:200,body:{page:1,limit:100,records:[{id:241442098,created_at:"2022-08-31T18:27:41.31546Z",updated_at:"2022-08-31T18:27:41.31546Z",time:"2022-08-31T18:25:44.207132Z",height:73198720,hash:"EvCnvtYJvENg3gZYEyCZdXBmQGsuZReYTDbzcBCVkHsr",block_hash:"A3HeSjJhufzgXEL9AQ6Q51EiSJiGC9xLSg5Zwctj6kFc",sender:"090dda1fd01e2ad352e88ced735d502fc1fba73308ab25912639374ca97d4614",receiver:"ledgerbyfigment.poolv1.near",gas_burnt:"14636429144958",fee:"1336276395745800000000",public_key:"ed25519:cLvNDoDqyxbGaRi4padXmKaWGExwgTa2NGptC1Psrk3",signature:"ed25519:5u5Z6qwTSZiSv9irfkpurnPRY8kygf15cjbnsTvqEByv9ygdeC6JmbjRBnybeqLJJRvmnxzfJw7BmPgnpPCBhhjd",actions:[{data:{gas:125e12,deposit:"0",method_name:"unstake_all"},type:"FunctionCall"}],actions_count:1,outcome:{id:"EvCnvtYJvENg3gZYEyCZdXBmQGsuZReYTDbzcBCVkHsr",outcome:{logs:[],status:{Failure:null,SuccessValue:null,SuccessReceiptId:"A6paCY5psEVbc73yUg14UdoWc6Z1P85fbLNHNXcFN397"},gas_burnt:2427950067142,executor_id:"090dda1fd01e2ad352e88ced735d502fc1fba73308ab25912639374ca97d4614",receipt_ids:["A6paCY5psEVbc73yUg14UdoWc6Z1P85fbLNHNXcFN397"],tokens_burnt:"242795006714200000000"},block_hash:"A3HeSjJhufzgXEL9AQ6Q51EiSJiGC9xLSg5Zwctj6kFc"},receipt:[{id:"A6paCY5psEVbc73yUg14UdoWc6Z1P85fbLNHNXcFN397",outcome:{logs:["Epoch 1467: Contract received total rewards of 229141244394600000000 tokens. New total staked balance is 198971571038620008720894780269. Total number of shares 190078138940489266524847321748","Total rewards fee is 16417448882903286421 stake shares.","@090dda1fd01e2ad352e88ced735d502fc1fba73308ab25912639374ca97d4614 unstaking 109000000296738933729981199. Spent 104128027399931867651150133 staking shares. Total 109000000296738933729981200 unstaked balance and 0 staking shares","Contract total staked balance is 198862571038323269787164799071. Total number of shares 189974010913089334657196171615"],status:{Failure:null,SuccessValue:"",SuccessReceiptId:null},gas_burnt:7722698157155,executor_id:"ledgerbyfigment.poolv1.near",receipt_ids:["HesMRb7FJyrZgp5Qo5Hv2qEq1fVGK87UdWM8FU9VopBW","fLGa96MCYSwXBJi6n18LU67ZM2MwHQvHi2MYk6qbAxF","6CDW8L6raBv1g152kiFpH8d6dQW5pSe9NTUBJwATUmB3"],tokens_burnt:"772269815715500000000"},block_hash:"jZ1uWiCFPr9AP7yx2FfaUKj5xWe16AZ2oryZFRsh2GU"}],success:!0}]}}},{name:"/transactions/{hash}",content:"Returns transaction details for a given transaction hash.\n    \n### Parameters\n\nQuery string parameters -\n\n- `/transactions/{hash}` - Pass the transaction hash in the request URL.   \n\n### Results\n\nReturns transaction details for the given transaction hash.",request:{method:"GET",header:[],url:"https://near--indexer.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/transactions/DspNwXncMr9MHqsUbr7xP8oXnr8BrXZ19dtQ9z8AazQE"},interactive:!0,response:{name:"/transactions/{hash}",status:"OK",code:200,body:{id:194869603,created_at:"2022-08-10T18:12:08.323102Z",updated_at:"2022-08-10T18:12:08.323102Z",time:"2022-08-10T18:11:15.860836Z",height:71721232,hash:"DspNwXncMr9MHqsUbr7xP8oXnr8BrXZ19dtQ9z8AazQE",block_hash:"GZYkaPVMyFW1am5kHodKSedAGcNFXMLDoobGB5uHKCoa",sender:"martinovan2804.near",receiver:"app.nearcrowd.near",gas_burnt:"8072040436614",fee:"784885787411400000000",public_key:"ed25519:FootpSBurxVkPQMCaeUp6HCGPm8e61VE985bJS75XNRp",signature:"ed25519:2PnqxDnPKvdZi3bPtPXtQx7CgeTitFWtaUv4wFjXAestuyeVGeJCxC6iX3ESz1Wf2sc1wGUhGDCEzfhPbD8J12x4",actions:[{data:{gas:3e13,deposit:"0",method_name:"claim_assignment"},type:"FunctionCall"}],actions_count:1,outcome:{id:"DspNwXncMr9MHqsUbr7xP8oXnr8BrXZ19dtQ9z8AazQE",outcome:{logs:[],status:{Failure:null,SuccessValue:null,SuccessReceiptId:"HUasMs25DMhkKbwaYZe1efjsMiDY3xf75oD7bn2wa9U4"},gas_burnt:2428068571644,executor_id:"martinovan2804.near",receipt_ids:["HUasMs25DMhkKbwaYZe1efjsMiDY3xf75oD7bn2wa9U4"],tokens_burnt:"242806857164400000000"},block_hash:"GZYkaPVMyFW1am5kHodKSedAGcNFXMLDoobGB5uHKCoa"},receipt:[{id:"HUasMs25DMhkKbwaYZe1efjsMiDY3xf75oD7bn2wa9U4",outcome:{logs:[],status:{Failure:null,SuccessValue:"ZmFsc2U=",SuccessReceiptId:null},gas_burnt:5420789302470,executor_id:"app.nearcrowd.near",receipt_ids:["HMGiQFHm58fgt57idiTMrUsTRdiRpFPNUvSjxNTmEYFb"],tokens_burnt:"542078930247000000000"},block_hash:"BonucD8P4CTr828d9gvZ2rJduJgpMj3UsCG7X8LE1tPA"}],success:!0}}}],service:"transaction-search-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"NEAR Protocol",value:"near-protocol"}],network:"near-protocol",mdxType:"APIMethods"}))}m.isMDXComponent=!0}}]);