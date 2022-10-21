"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[3943],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>b});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,d=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),b=i,u=f["".concat(o,".").concat(b)]||f[b]||p[b]||d;return t?n.createElement(u,r(r({ref:a},l),{},{components:t})):n.createElement(u,r({ref:a},l))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var d=t.length,r=new Array(d);r[0]=f;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<d;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7587:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const d={title:"Submit Deposit Data",slug:"/guides/staking-api/ethereum/staking/submit-deposit-data"},r=void 0,c={unversionedId:"guides/staking-api/Ethereum/staking/submit-deposit-data",id:"guides/staking-api/Ethereum/staking/submit-deposit-data",title:"Submit Deposit Data",description:"After collecting the required inputs, send a PUT request to /api/v1/flows/[:flow_id]/next to proceed to the next step.",source:"@site/docs/guides/staking-api/Ethereum/staking/2_submit-deposit-data.mdx",sourceDirName:"guides/staking-api/Ethereum/staking",slug:"/guides/staking-api/ethereum/staking/submit-deposit-data",permalink:"/guides/staking-api/ethereum/staking/submit-deposit-data",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Submit Deposit Data",slug:"/guides/staking-api/ethereum/staking/submit-deposit-data"},sidebar:"docsSidebar",previous:{title:"Create New Staking Flow",permalink:"/guides/staking-api/ethereum/staking/create-new-flow"},next:{title:"Sign the Deposit Transaction",permalink:"/guides/staking-api/ethereum/staking/sign-deposit-transaction"}},o={},s=[{value:"Parameters",id:"parameters",level:3},{value:"Sample cURL Request",id:"sample-curl-request",level:4},{value:"Response",id:"response",level:3},{value:"Sample Response",id:"sample-response",level:4}],l={toc:s};function p(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After collecting the required inputs, send a ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/flows/[:flow_id]/next")," to proceed to the next step."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Name of the action to execute (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," (required).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funding_account_address")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The wallet from which the ETH will originate. (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator_pub_key")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The public key of the validator to which the ETH will be deposited. (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdrawal_credentials")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," The withdrawal address for the given validator. (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," A BLS proof of possession i.e., a proof that the private key corresponding to the ",(0,i.kt)("inlineCode",{parentName:"li"},"validator_pub_key")," is known by the signer. (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deposit_data_root")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Uniquely identifies the set of deposits made so far. (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," Number of tokens you want to delegate. (required)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_price")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Adjust the gas price (optional)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas_limit")," ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Adjust the gas limit (optional).")))),(0,i.kt)("h4",{id:"sample-curl-request"},"Sample cURL Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5-11}","{5-11}":!0},'curl -X PUT \'https://eth-slate.datahub.figment.io/api/v1/flows/8307b0d1-fc17-45b1-b540-2d9c31578d99/next\' \\\n-H \'Content-Type: application/json\' \\\n-H \'Authorization: <api_key>\' \\\n-d \'{\n  "name": "create_deposit_tx",\n  "inputs": {\n    "funding_account_address": "0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594",\n    "validator_pub_key": "0xa7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549",\n    "withdrawal_credentials": "0x010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca",\n    "signature": "0x876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65b"\n  }\n}\'\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Note that in this response you can find the unsigned, serialized transaction in ",(0,i.kt)("inlineCode",{parentName:"p"},"data[create_deposit_transaction][raw]"),"."),(0,i.kt)("p",null,"The response indicates two possible ",(0,i.kt)("inlineCode",{parentName:"p"},"actions")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refresh_deposit_tx")," ","\u2014"," If you need to get a fresh version of the transaction payload (i.e., the nonce has increased)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sign_deposit_tx")," ","\u2014"," Submit a signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("p",null,"We will choose ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_deposit_tx"),", which indicates one input to collect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transaction_payload")," ","\u2014"," The signed transaction payload ready to be broadcast to the network.")),(0,i.kt)("h4",{id:"sample-response"},"Sample Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{2-3,6,10,23}","{2-3,6,10,23}":!0},'{\n  "id": "8307b0d1-fc17-45b1-b540-2d9c31578d99",\n  "state": "deposit_tx_signature",\n  "actions": [\n    {\n      "name": "refresh_deposit_tx",\n      "inputs": []\n    },\n    {\n      "name": "sign_deposit_tx",\n      "inputs": [\n        {\n          "name": "transaction_payload",\n          "display": "Transaction Payload",\n          "description": "",\n          "type": "signed_transaction",\n          "validations": [],\n          "signers": ["0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594"],\n          "transaction_payload": "0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0"\n        },\n        {\n          "name": "signatures",\n          "display": "Signatures",\n          "description": "",\n          "type": "array_of_signatures",\n          "validations": [],\n          "signers": ["0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594"],\n          "transaction_payload": "0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0",\n          "signing_payload": "0xfa2fde357ca51a2f2c2b9aab0b00451d0b7ba8772837b2c6fab7a5371d9a509e"\n        }\n      ]\n    }\n  ],\n  "data": {\n    "funding_account_address": "0x7362cC429Fd2e2abB3F1217c660967E6Ed52B594",\n    "validator_pub_key": "0xa7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549",\n    "withdrawal_credentials": "0x010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca",\n    "signature": "0x876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65b",\n    "deposit_data_root": "0xd446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f91",\n    "amount": "32.0",\n    "gas_price": null,\n    "gas_limit": null,\n    "deposit_transaction": {\n      "raw": "0x02f901d605018459682f008459682f1882e83394ff50ed3d0ec03ac01d4c79aad74928bff48a7b2b8901bc16d674ec800000b901a422895118000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000120d446d3cfa7e6783d3963d66e37003e394d53282226489ec8ac62ce0560063f910000000000000000000000000000000000000000000000000000000000000030a7d2f0af53247c58acbbaf272e538aff10cdaa61490550882bb2095e3410cd9db46c86905c0d8df50fda3e62670a1549000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020010000000000000000000000287ab3d1da953b1a53b19f859dd902b5bbff79ca0000000000000000000000000000000000000000000000000000000000000060876409ab394841bbb8ab7f6f04641443f0ecc0f9c9800484f90c5c2795962b6426c66577853158d626a273ccc554e7341016fc094791d106f0880ccbdcdcf68017bc861286b0d5b03eaa04d65f5e834efdb4ec72114497ad61c50e5254d9e65bc0",\n      "signing_payload": "0xfa2fde357ca51a2f2c2b9aab0b00451d0b7ba8772837b2c6fab7a5371d9a509e",\n      "signed": null,\n      "hash": null,\n      "status": null,\n      "error": null,\n      "signatures": null\n    }\n  },\n  "network_code": "ethereum",\n  "chain_code": "goerli-prater",\n  "created_at": "2022-08-04T03:56:12.111Z",\n  "updated_at": "2022-08-04T04:11:54.830Z"\n}\n')),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Make sure to save the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," from this response, which is what needs to be signed in the next step.")))}p.isMDXComponent=!0}}]);