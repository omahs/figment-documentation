"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[9066],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),i=a(7294),l=a(6010),r=a(2389),o=a(7392),s=a(7094),p=a(2466);const d="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,a;const{lazy:r,block:u,defaultValue:m,values:k,groupId:g,className:f}=e,N=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(t=null!=m?m:null==(a=N.find((e=>e.props.default)))?void 0:a.props.value)?t:N[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,s.U)(),[C,w]=(0,i.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=g){const e=v[g];null!=e&&e!==C&&b.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==C&&(P(t),w(n),null!=g&&T(g,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var i;const t=x.indexOf(e.currentTarget)-1;a=null!=(i=x[t])?i:x[x.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},b.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:O,onClick:O},r,{className:(0,l.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),r?(0,i.cloneElement)(N.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,r.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}},1498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),l=a(5488),r=a(5162),o=a(9960);const s={title:"Signing Transactions with Figment's npm Package",sidebar_position:4},p=void 0,d={unversionedId:"guides/staking-api/figment-signing-transactions",id:"guides/staking-api/figment-signing-transactions",title:"Signing Transactions with Figment's npm Package",description:"Figment's npm package @figmentio/slate simplifies the signing and payload decoding process for networks supported by the Staking API.",source:"@site/docs/guides/staking-api/figment-signing-transactions.mdx",sourceDirName:"guides/staking-api",slug:"/guides/staking-api/figment-signing-transactions",permalink:"/guides/staking-api/figment-signing-transactions",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Signing Transactions with Figment's npm Package",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Validator Addresses",permalink:"/guides/staking-api/slate-validator-addresses"},next:{title:"Signing Transactions with Fireblocks",permalink:"/guides/staking-api/fireblocks-signing-transactions"}},c={},u=[{value:"Installing the package",id:"installing-the-package",level:2},{value:"Usage",id:"usage",level:2},{value:"Sign",id:"sign",level:3},{value:"Decode",id:"decode",level:3},{value:"Operations and Transaction Types",id:"operations-and-transaction-types",level:3}],m={toc:u};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Figment's npm package ",(0,i.kt)(o.Z,{to:"https://www.npmjs.com/package/@figmentio/slate",mdxType:"Link"},"@figmentio/slate")," simplifies the signing and payload decoding process for networks supported by the Staking API.\nThis guide covers everything you will need to sign and decode Staking API transaction payloads."),(0,i.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @figmentio/slate\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @figmentio/slate\n")))),(0,i.kt)("p",null,"Check your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," dependencies to confirm which version you\u2019re using."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n    ...\n    "@figmentio/slate": "^1.6.0",\n    ...\n}\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In your code, require ",(0,i.kt)("inlineCode",{parentName:"p"},"@figmentio/slate"),". The package exports two methods: ",(0,i.kt)("inlineCode",{parentName:"p"},"decode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sign"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const slate = require("@figmentio/slate");\n')),(0,i.kt)("h3",{id:"sign"},"Sign"),(0,i.kt)("p",null,"This method takes four parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<network_code>"),": The name of the network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<version>"),": The Staking API version number used to generate the transaction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<transaction_payload>"),": The raw, unsigned transaction payload returned by the Staking API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[<signing_private_keys>]"),": An array of private keys used to sign the transaction payload.")),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Because the format of private keys differs between networks, attempting to sign a payload with a private key from another network will fail.\nThe private key used to sign the payload must match the delegator's public key or address.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Code Example"',title:'"Code','Example"':!0},'await slate.sign(\n  "near",\n  "v1",\n  "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3907cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d30192fc3497d275b958dea9de8d901c456292125c060c1304318ae9582a7bff20f0100000002110000006465706f7369745f616e645f7374616b65020000007b7d00e057eb481b000000000025a4000a8bca22040000000000",\n  ["ed25519:<private_key>"]\n);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example Output: Signed Transaction Payload"',title:'"Example',"Output:":!0,Signed:!0,Transaction:!0,'Payload"':!0},"12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3907cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d3084edd29289b3a590be582317bb0061016a8df058b7c29a0278f5b82f86c283010100000002080000007769746864726177270000007b22616d6f756e74223a223235303030303030303030303030303030303030303030303030227d00e057eb481b00000000000000000000000000000000000000235397dfd3f0b7ce06a4fe11395e36ce40d12610eae07dcc1dc1d962b38fa9592cdc22f6c9164b0155967a773c369719f71d76b84185ec13c39381343c63cf0b\n")),(0,i.kt)("admonition",{title:"note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The array of private keys ",(0,i.kt)("inlineCode",{parentName:"p"},"[<signing_private_keys>]")," only requires the private key of the delegator, however it can accommodate multiple private keys in cases where a multisig is used for delegation. Signing occurs entirely offline; your private keys are never exposed during this process."),(0,i.kt)("p",{parentName:"admonition"},"See the guide on ",(0,i.kt)(o.Z,{to:"/guides/staking-api/fireblocks-signing-transactions",mdxType:"Link"},"Signing Transactions with Fireblocks")," if you require a custodial signing solution.")),(0,i.kt)("h3",{id:"decode"},"Decode"),(0,i.kt)("p",null,"This method takes five parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<network_code>"),": The name of the network (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"near"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<operation>"),": The operation the transaction is built to accomplish (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"staking"),", ",(0,i.kt)("a",{parentName:"li",href:"/guides/staking-api/figment-signing-transactions#operations-and-transaction-types"},"see below")," for a complete list)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<version>"),": The Staking API version number used to generate the transaction (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"v1"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<transaction_type>"),": The type of transaction being decoded (ex. ",(0,i.kt)("inlineCode",{parentName:"li"},"delegateTransaction"),", ",(0,i.kt)("a",{parentName:"li",href:"/guides/staking-api/figment-signing-transactions#operations-and-transaction-types"},"see below")," for a complete list)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<transaction_payload>"),": The raw, unsigned transaction payload returned by the Staking API")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Code Example"',title:'"Code','Example"':!0},'await slate.decode(\n  "near",\n  "staking",\n  "v1",\n  "delegateTransaction",\n  "12000000736c6174652d64656d6f2e746573746e657400415d57cdf21d28e35e0cfa864e895c18b4bc6a711642d38eb6762af81ec1cf3907cc1038fc5700001600000030316e6f64652e706f6f6c2e663836333937332e6d30192fc3497d275b958dea9de8d901c456292125c060c1304318ae9582a7bff20f0100000002110000006465706f7369745f616e645f7374616b65020000007b7d00e057eb481b000000000025a4000a8bca22040000000000"\n);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example Output: Decoded Transaction Payload"',title:'"Example',"Output:":!0,Decoded:!0,Transaction:!0,'Payload"':!0},'{\n  "delegatorPubkey": "5QA46X6NkNmsFdu9xWVBaLNowh9gGeF1c5r9u6NcxaLY",\n  "delegatorAddress": "slate-demo.testnet",\n  "validatorAddress": "01node.pool.f863973.m0",\n  "amount": "5"\n}\n')),(0,i.kt)("h3",{id:"operations-and-transaction-types"},"Operations and Transaction Types"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"avax",label:"Avalanche",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegateTransaction")))))),(0,i.kt)(r.Z,{value:"eth",label:"Ethereum",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"depositTransaction")))))),(0,i.kt)(r.Z,{value:"dot",label:"Polkadot",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bondingTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nominationTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unstaking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chillTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unbondTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdrawTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transfer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transferTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addProxy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addProxyTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removeProxy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"removeProxyTransaction")))))),(0,i.kt)(r.Z,{value:"matic",label:"Polygon",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bondingTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nominationTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unstaking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chillTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unbondTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdrawTransaction")))))),(0,i.kt)(r.Z,{value:"near",label:"NEAR",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegateTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unstaking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undelegateTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdrawTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transfer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transferTransaction")))))),(0,i.kt)(r.Z,{value:"sol",label:"Solana",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createStakeAccountTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegateTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unstaking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deactivateTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withdrawTransaction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transfer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transferTransaction"))))))))}k.isMDXComponent=!0}}]);