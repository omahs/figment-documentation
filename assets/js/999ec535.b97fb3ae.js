"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[5823],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(k,r(r({ref:n},p),{},{components:t})):a.createElement(k,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const o={title:"Create New Undelegation Flow",slug:"/guides/staking-api/polkadot/undelegate/create-new-flow"},r=void 0,l={unversionedId:"guides/staking-api/Polkadot/undelegate/create-new-flow",id:"guides/staking-api/Polkadot/undelegate/create-new-flow",title:"Create New Undelegation Flow",description:"To initiate the undelegation process, create a new flow with a POST request to /api/v1/flows.",source:"@site/docs/guides/staking-api/Polkadot/undelegate/1_create-new-flow.mdx",sourceDirName:"guides/staking-api/Polkadot/undelegate",slug:"/guides/staking-api/polkadot/undelegate/create-new-flow",permalink:"/guides/staking-api/polkadot/undelegate/create-new-flow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create New Undelegation Flow",slug:"/guides/staking-api/polkadot/undelegate/create-new-flow"},sidebar:"docsSidebar",previous:{title:"Undelegate",permalink:"/guides/staking-api/polkadot/undelegate"},next:{title:"Assign Unstaking Data",permalink:"/guides/staking-api/polkadot/undelegate/assign-unstaking-data"}},s={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To initiate the undelegation process, create a new flow with a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"If chilling is required")," before unbonding, the Staking API will indicate that you must create a chill transaction. Proceed to ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/polkadot/undelegate/create-unbond-transaction"},"Create Chill Transaction"),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"If no chilling is required"),", you will be presented with an action to create the unbond transaction. Proceed to ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/polkadot/undelegate/create-unbond-transaction"},"Create Unbond Transaction"),"."),(0,i.kt)("p",{parentName:"admonition"},"If you want to skip the unbonding process as well, proceed to ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/polkadot/undelegate/create-withdraw-transaction"},"Create Withdrawal Transaction"),"."),(0,i.kt)("p",{parentName:"admonition"},"From a newly initialized flow you can either jump right to ",(0,i.kt)("inlineCode",{parentName:"p"},"create_withdraw_tx")," or perform ",(0,i.kt)("inlineCode",{parentName:"p"},"assign_unstaking_data"),"."),(0,i.kt)("p",{parentName:"admonition"},"If you assign the unstaking data, you may need to create, sign, and broadcast a chill transaction, followed by an unbonding transaction."),(0,i.kt)("p",{parentName:"admonition"},"After unbonding, you can either be done with the flow, or if there is a balance to withdraw, you can create, sign, and broadcast the withdraw transaction.")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flow")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"network_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Network on which this flow operates (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"polkadot"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_code")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Chain on which this flow operates (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"westend"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operation")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The operation to perform (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"unstaking"),") (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," API version to use (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"v1"),") (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-10}","{5-10}":!0},'curl -X POST \'https://polkadot-slate.datahub.figment.io/api/v1/flows\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "flow": {\n    "network_code": "polkadot",\n    "chain_code": "westend",\n    "operation": "unstaking",\n    "version": "v1"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," ID of the newly created flow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The current state of the flow.")),(0,i.kt)("p",null,"The response indicates two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assign_unstaking_data")," ","\u2014"," Use this action if you want to unbond. Chill first if needed. Optionally used to withdraw."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create_withdraw_tx")," ","\u2014"," Use this action if you want to withdraw ",(0,i.kt)("em",{parentName:"li"},"without")," unbonding.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"assign_unstaking_data")," action indicates five fields for data collection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stash_account_address")," ","\u2014"," The wallet DOT is bonded to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controller_account_address")," ","\u2014"," The account that controls the staking/unstaking actions. This is the account that will sign transactions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controller_proxy_account_address")," (optional) \u2014 A proxy account that can sign on behalf of the controller account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," The amount of DOT to be unbonded from the controller. This field should be in full DOT, not in Planck (i.e., if you want to stake 5 DOT, return ",(0,i.kt)("inlineCode",{parentName:"li"},'"amount": 5.0'),"). The Staking API will translate the amount to Plancks so you do not have to worry about the conversion factor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maximum")," ","\u2014"," This Boolean indicates if all bonded funds should be unbonded.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6,9,21,33,40,61}","{2-3,6,9,21,33,40,61}":!0},'{\n  "id": "86d4a5d4-1c75-4c6a-926d-ab930e57f504",\n  "state": "initialized",\n  "actions": [\n    {\n      "name": "assign_unstaking_data",\n      "inputs": [\n        {\n          "name": "stash_account_address",\n          "display": "Stash Account Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "controller_account_address",\n          "display": "Controller Account Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "controller_proxy_account_address",\n          "display": "Controller Proxy Account Address",\n          "description": "",\n          "type": "string",\n          "validations": []\n        },\n        {\n          "name": "amount",\n          "display": "Amount",\n          "description": "",\n          "type": "decimal",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {\n                "unless": "maximum"\n              }\n            },\n            {\n              "type": "precision",\n              "options": {\n                "unless": "maximum",\n                "max": 12\n              }\n            }\n          ]\n        },\n        {\n          "name": "maximum",\n          "display": "Maximum",\n          "description": "",\n          "type": "boolean",\n          "validations": []\n        }\n      ]\n    },\n    {\n      "name": "create_withdraw_tx",\n      "inputs": [\n        {\n          "name": "stash_account_address",\n          "display": "Stash Account Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "controller_account_address",\n          "display": "Controller Account Address",\n          "description": "",\n          "type": "string",\n          "validations": [\n            {\n              "type": "presence",\n              "options": {}\n            }\n          ]\n        },\n        {\n          "name": "controller_proxy_account_address",\n          "display": "Controller Proxy Account Address",\n          "description": "",\n          "type": "string",\n          "validations": []\n        }\n      ]\n    }\n  ],\n  "data": {\n    "controller_account_address": null,\n    "controller_proxy_account_address": null,\n    "stash_account_address": null,\n    "amount": null,\n    "maximum": null,\n    "chill_transaction": null,\n    "estimated_chilled_at": null,\n    "unbond_transaction": null,\n    "unbonding_era": null,\n    "estimated_unbonded_at": null,\n    "withdraw_transaction": null\n  },\n  "network_code": "polkadot",\n  "chain_code": "westend",\n  "created_at": "2022-10-06T16:15:36.383Z",\n  "updated_at": "2022-10-06T16:15:36.383Z"\n}\n')))}c.isMDXComponent=!0}}]);