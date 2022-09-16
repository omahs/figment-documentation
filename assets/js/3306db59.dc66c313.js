"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8573],{2750:(e,t,a)=>{a.d(t,{ZP:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),l=a(5162),s=a(5413);const o={toc:[{value:"Authentication &amp; Making Calls",id:"authentication--making-calls",level:3}]};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication--making-calls"},"Authentication & Making Calls"),(0,r.kt)("p",null,"Making API calls with DataHub requires authentication, which can be performed by passing your API key via the request header ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," or as a parameter in the query URL."),(0,r.kt)("p",null,"Here's some boilerplate to get you started."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js-header",label:"Fetch with Header",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/){1}/,"")+'", {\n    method: \'POST\', // can also be \'GET\', \'PUT\' or any appropriate method\n    headers: {\n        "Authorization" : "<api_key>",\n        "Content-Type": "application/json" // if method is \'POST\'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})')),(0,r.kt)(l.Z,{value:"js-parameter",label:"Fetch with Parameter",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"js",mdxType:"CodeBlock"},'fetch("'+a.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"\", {\n    method: 'POST', // can also be 'GET', 'PUT' or any appropriate method\n    headers: {\n        \"Content-Type\": \"application/json\" // if method is 'POST'\n    },\n    body: JSON.stringify({\n      // JSON Payload\n    })\n})")),(0,r.kt)(l.Z,{value:"curl-header",label:"CURL with Header",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/){1}/,"")+"' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: <api_key>' \\\n--data '{\n  // JSON Payload\n}'")),(0,r.kt)(l.Z,{value:"curl-parameter",label:"CURL with Parameter",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"curl",mdxType:"CodeBlock"},"curl -X POST '"+a.url.replace(/(apikey\/[^\/]+\/){1}/,"apikey/<api_key>/")+"' \\\n--header 'Content-Type: application/json' \\\n--data '{\n  // JSON Payload\n}'"))))}c.isMDXComponent=!0},3976:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6775);function i(e){let{network:t,networks:a,methods:i,service:l}=e;const s=(0,r.TH)(),o=(0,r.k6)();return n.createElement("div",null,n.createElement("label",null,"Change Network: "),n.createElement("select",{className:"custom-select",defaultValue:t,onChange:e=>{o.push(s.pathname.replace(/\/[^\/]+$/,"/"+e.target.value))}},a.map((e=>n.createElement("option",{key:e.value+"--n-option",value:e.value},e.label)))),n.createElement("label",null," Jump to: "),n.createElement("select",{className:"custom-select",defaultValue:s.hash.replace("#","")||"",onChange:e=>{o.push("#"+e.target.value)}},i.map((e=>n.createElement("option",{key:e.name+"--m-hash",value:e.name.toLowerCase()},e.name)))))}},5258:(e,t,a)=>{a.d(t,{S:()=>D});var n=a(7462),r=a(7294),i=a(7748),l=a(460),s=a.n(l),o=a(3746),c=a(6412);const u={Header:"Header_JfB9",blinker:"blinker_fwXa",Actions:"Actions_tjtQ",Container:"Container_SXTI",Editor:"Editor_gTle",Line:"Line_F8ZC",Code:"Code_xj0a"};function p(e){let{children:t="",header:a,actions:i,disabled:l=!1,status:p,onValueChange:h}=e;const m=(0,c.p)(),y=(0,r.useRef)(null);(0,r.useEffect)((()=>{var e;const t=null==(e=y.current)?void 0:e.querySelector("textarea"),a=e=>{const t=e.target;t.style.width=t.scrollWidth+"px"};return t.addEventListener("input",a),()=>t.removeEventListener("input",a)}),[]);return r.createElement("div",{ref:y},r.createElement(d,{actions:i,status:p},a),r.createElement("div",{className:u.Container},r.createElement(s(),{value:t,onValueChange:h,highlight:function(e){return void 0===e&&(e=""),r.createElement(o.ZP,(0,n.Z)({},o.lG,{theme:m,code:e,language:"json"}),(e=>{let{className:t,style:a,tokens:i,getLineProps:l,getTokenProps:s}=e;return r.createElement("div",{className:u.Code},i.map(((e,t)=>r.createElement("div",(0,n.Z)({key:t},l({line:e,key:t}),{className:u.Line}),r.createElement("span",{className:u.LineContent},e.map(((e,t)=>r.createElement("span",(0,n.Z)({key:t},s({token:e,key:t}))))))))))}))},disabled:l,ignoreTabKey:!0,padding:10,style:{...m.plain,overflow:"auto"},className:u.Editor})))}function d(e){let{children:t,actions:a=[],status:n}=e;return r.createElement("div",{className:u.Header,"data-status":n},r.createElement("span",null,t),r.createElement("span",{className:u.Actions},a.map(((e,t)=>{let{title:a,onClick:n,Component:i=a}=e;return r.createElement("button",{className:u.HeaderButton,key:t+":"+a,title:a,onClick:n},i)}))))}var h=a(195);const m=function(e,t){const a=(0,r.useRef)(!1),n={error:void 0,data:void 0,loading:!1},[i,l]=(0,r.useReducer)(((e,t)=>{switch(t.type){case"loading":return{...n,loading:!0};case"fetched":return{...n,data:t.payload,loading:!1};case"error":return{...n,error:t.payload,loading:!1};default:return e}}),n);return{...i,fetchData:async function(n,r){void 0===r&&(r={}),l({type:"loading"});try{const i=await fetch(e+(n||""),{...t,...r});if(!i.ok){let e,t,a;try{a=JSON.parse(await i.text()),e=await i.json(),t=JSON.stringify(e,null,2)}catch{}throw new Error(JSON.stringify(t,null,2)||JSON.stringify(a,null,2)||i.statusText)}const s=await i.json();if(a.current)return;return l({type:"fetched",payload:s}),s}catch(i){if(a.current)return;return l({type:"error",payload:i.message}),null}}}};var y,v=a(5413);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g.apply(this,arguments)}const f=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",g({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,y||(y=r.createElement("path",{d:"M15.526 2H4.79C3.805 2 3 2.818 3 3.818v12.728h1.79V3.818h10.736V2Zm2.684 3.636H8.368c-.984 0-1.79.819-1.79 1.819v12.727c0 1 .806 1.818 1.79 1.818h9.842c.985 0 1.79-.818 1.79-1.818V7.455c0-1-.805-1.819-1.79-1.819Zm0 14.546H8.368V7.455h9.842v12.727Z",fill:"#0C3F5C"})))};var b;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}const k=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,b||(b=r.createElement("path",{d:"m10 16.5 6-4.5-6-4.5v9ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z",fill:"#0C3F5C"})))};var w;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},x.apply(this,arguments)}const C=e=>{let{title:t,titleId:a,...n}=e;return r.createElement("svg",x({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},n),t?r.createElement("title",{id:a},t):null,w||(w=r.createElement("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z",fill:"#0C3F5C"})))};function Z(e){let{req:t,res:a,interactive:n}=e;const[i,l]=(0,r.useState)(S(t.body)),[s,o]=(0,r.useState)(t.query),[c,u]=(0,r.useState)(T(a.body)),d="string"==typeof t.body&&0==t.body.indexOf("query"),{data:y,error:g,loading:b,fetchData:E}=m(t.url,{method:t.method,headers:{"Content-Type":d?"application/graphql":"application/json"},body:S(t.body)}),[w,x]=(0,r.useState)(null);(0,r.useEffect)((()=>{b?x("LOADING"):g||null!=y&&y.error?x("ERROR"):y&&x("SUCCESS")}),[y,g,b]);const Z=[n?{title:"Run request",onClick:async()=>{const e=await E(s,{body:i});e&&u(T(e))},Component:r.createElement(r.Fragment,null,r.createElement(k,null)," Run")}:null,{title:"Copy",onClick:()=>(0,h.Z)(i),Component:r.createElement(f,null)},n?{title:"Reset",onClick:()=>{x(null),o(t.query),l(S(t.body)),u(T(a.body))},Component:r.createElement(C,null)}:null].filter((e=>!!e));return r.createElement(r.Fragment,null,r.createElement(p,{header:"GET"===t.method?"Request Query "+(n?"(try it)":""):"Request Body "+(n?"(try it)":""),actions:Z,disabled:!n,onValueChange:e=>{n&&("GET"===t.method?o(e):"POST"===t.method&&l(e))}},"GET"===t.method?s:i),r.createElement(v.Z,{title:w?"Response":"Example Response",language:"json"},g?""+g:c))}function T(e){return JSON.stringify(e,null,2)}function S(e){return"string"==typeof e?e:JSON.stringify(e,null,2)}var _=a(1099),R=a(3905);const q={toc:[]};function N(e){let{components:t,...a}=e;return(0,R.kt)("wrapper",(0,n.Z)({},q,a,{components:t,mdxType:"MDXLayout"}),(0,R.kt)("details",null,(0,R.kt)("summary",null,a.title),(0,R.kt)(_.D,{mdxType:"ReactMarkdown"},a.details)))}function A(e){let{content:t=""}=e;const[a,...n]=t.trim().split(/\n+/),i=n.join("\n");return r.createElement("div",null,r.createElement(_.D,null,a),r.createElement(N,{title:"View specification",details:i}))}N.isMDXComponent=!0;const j="heading_REER",G="anchor_oyxB";function F(e){let{name:t,content:a="",interactive:n,request:i,response:l}=e;return r.createElement(r.Fragment,null,r.createElement("h2",{id:t.toLowerCase(),className:j,"data-method":i.method},r.createElement("code",null,t),r.createElement("a",{className:G,href:"#"+t.toLowerCase()},"#")),r.createElement(A,{content:a}),r.createElement(Z,{req:i,res:l,interactive:n}),r.createElement("hr",null))}function D(e){let{network:t,methods:a}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,"Available Methods"),a.map(((e,a)=>r.createElement(F,(0,n.Z)({key:t+a},e)))),r.createElement(i.Z,null))}},4363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=a(5258),l=a(3976),s=a(2750);const o={title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0},c="Transaction Search API - Avalanche",u={unversionedId:"api-reference/transaction-search-api/avalanche",id:"api-reference/transaction-search-api/avalanche",title:"Avalanche",description:"",source:"@site/docs/api-reference/transaction-search-api/avalanche.mdx",sourceDirName:"api-reference/transaction-search-api",slug:"/api-reference/transaction-search-api/avalanche",permalink:"/api-reference/transaction-search-api/avalanche",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Avalanche",sidebar_position:0,pagination_prev:null,pagination_next:null,collapsed:!0,collapsible:!0},sidebar:"docsSidebar"},p={},d=[],h={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-search-api---avalanche"},"Transaction Search API - Avalanche"),(0,r.kt)(l.Z,{service:"transaction-search-api",methods:[{name:"/transactions"},{name:"/transactions/{hash}"}],networks:[{label:"Avalanche",value:"avalanche"},{label:"NEAR Protocol",value:"near-protocol"}],network:"avalanche",mdxType:"ApiReferenceNav"}),(0,r.kt)(s.ZP,{url:"https://avalanche--mainnet--indexer.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",mdxType:"MakingCalls"}),(0,r.kt)(i.S,{methods:[{name:"/transactions",content:"Returns transactions matching the search parameters.\n  \n\n### Parameters\n\nQuery string parameters -\n\n*   `chain` -`string` Filter by chain ID.\n*   `type` - `string` Filter by transaction type. Separate multiple values by comma.\n*   `start_time` - `string` Search range start time.\n*   `end_time` - `string` Search range end time.\n*   `start_height` - `string` Search range start block height (if applicable).\n*   `block_hash` - `string` Filter by block hash (if applicable).\n*   `memo` - `string` Filter by memo text field.\n*   `address` - `string` Filter by account address. Separate multiple values by comma.\n*   `asset` - `string` Filter by asset ID.\n*   `page` - `integer` Results page.\n    \n\n### Results\n\nReturns transaction details based on the given parameters.\n\n* * *",request:{method:"GET",header:[],url:"https://avalanche--mainnet--indexer.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/transactions?network=avalanche&chain_ids=mainnet&start_height=1921984&address=avax1pvkhyf0y9674p2ps40vmp0a8w427384lpr8zan,avax1rlu93pnalclt7h0dte3evua97lv4fp4qzax5wq"},interactive:!0,response:{name:"/transactions",status:"OK",code:200,body:[{id:"2a9qJQvitJd1Y5RiqLoMonxVEj76PzvusXgHD1GztYjJUXtJmL",chain:"11111111111111111111111111111111LpoYY",type:"p_add_delegator",block:"dcb81QQ2jx5SAr5BsWmgepEiWSy8RfSwupredqzZZke5w76Mu",block_height:1932215,timestamp:"2022-07-28T13:25:56.159481Z",status:"accepted",memo:"",memo_text:"",fee:0,metadata:{duration:1209710,end_time:"2022-08-11T13:32:00Z",node_id:"NodeID-GW7CvXwkPFDsfFHrix1SA148NHF5ZnSXs",start_time:"2022-07-28T13:30:10Z",weight:25e9},inputs:[{id:"25cYWZAvGhepiJUMVVu97q3fx16MQx27Z8rbdgX97tfTdhmMxh",tx_id:"E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE",chain:"",asset:"FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",type:"transfer",index:0,locktime:0,threshold:1,amount:381e6,group:0,addresses:["avax1pvkhyf0y9674p2ps40vmp0a8w427384lpr8zan"],stake:!1,reward:!1,spent:!0,spent_in_tx:"2a9qJQvitJd1Y5RiqLoMonxVEj76PzvusXgHD1GztYjJUXtJmL"}],output_amounts:{FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z:25381e6}}]}},{name:"/transactions/{hash}",content:"Returns transaction details for a given transaction hash.\n    \n\n### Parameters\n\nQuery string parameters -\n\n- `/transactions/{hash}` - Pass the transaction hash in the request URL.   \n \n### Results\n\nReturns transaction details for the given transaction hash.\n\n* * *",request:{method:"GET",header:[],url:"https://avalanche--mainnet--indexer.datahub.figment.io/apikey/9513550c6ba06b65633a2b6ce8c5bb01/",query:"/transactions/E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE"},interactive:!0,response:{name:"/transactions/{hash}",status:"OK",code:200,body:{id:"E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE",chain:"11111111111111111111111111111111LpoYY",type:"p_add_delegator",block:"hXnSceGbJajBQeKsFypokezZroD87LRF75yCsGEBoX2p4CQ5Y",block_height:1924119,timestamp:"2022-07-26T20:46:55.696341Z",status:"accepted",memo:"",memo_text:"",fee:0,metadata:{duration:1209643,end_time:"2022-08-09T20:52:00Z",node_id:"GW7CvXwkPFDsfFHrix1SA148NHF5ZnSXs",start_time:"2022-07-26T20:51:17Z",weight:25e9},inputs:[{id:"hQsWoanzMAmGrw41nJaN1bSRcGmLEBdptxtQ87ympoiJHpBtr",tx_id:"BSVFaYseLC9QUuUTtYGxCh8tf7DE7zqHpwZPBBH6CSwiutUv6",chain:"",asset:"FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",type:"transfer",index:0,locktime:0,threshold:1,amount:88e6,group:0,addresses:["avax1rlu93pnalclt7h0dte3evua97lv4fp4qzax5wq"],stake:!1,reward:!1,spent:!0,spent_in_tx:"E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE"}],input_amounts:{FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z:25381e6},outputs:[{id:"25cYWZAvGhepiJUMVVu97q3fx16MQx27Z8rbdgX97tfTdhmMxh",tx_id:"E82EwpekLxZ9DnKQquCEVR9KR6G3tF1ut3xhUjLcKjtVZQ4GE",chain:"",asset:"FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",type:"transfer",index:0,locktime:0,threshold:1,amount:381e6,group:0,addresses:["avax1pvkhyf0y9674p2ps40vmp0a8w427384lpr8zan"],stake:!1,reward:!1,spent:!0,spent_in_tx:"2a9qJQvitJd1Y5RiqLoMonxVEj76PzvusXgHD1GztYjJUXtJmL"}],output_amounts:{FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z:25381e6}}}}],service:"transaction-search-api",networks:[{label:"Avalanche",value:"avalanche"},{label:"NEAR Protocol",value:"near-protocol"}],network:"avalanche",mdxType:"APIMethods"}))}m.isMDXComponent=!0}}]);