"use strict";(self.webpackChunkfigment_documentation=self.webpackChunkfigment_documentation||[]).push([[8959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=d(n),u=i,g=f["".concat(s,".").concat(u)]||f[u]||p[u]||o;return n?a.createElement(g,r(r({ref:t},l),{},{components:n})):a.createElement(g,r({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={title:"Sign the Nomination Transaction",slug:"/guides/staking-api/polkadot/delegate/sign-nomination-transaction"},r=void 0,c={unversionedId:"guides/staking-api/Polkadot/delegate/sign-nomination-transaction",id:"guides/staking-api/Polkadot/delegate/sign-nomination-transaction",title:"Sign the Nomination Transaction",description:"After successfully submitting the staking account data, in reasponse you have received the transactionpayload, you'll be using this transactionpayload to sign the transaction for confirmation.",source:"@site/docs/guides/staking-api/Polkadot/delegate/7_sign-nomination-transaction.mdx",sourceDirName:"guides/staking-api/Polkadot/delegate",slug:"/guides/staking-api/polkadot/delegate/sign-nomination-transaction",permalink:"/guides/staking-api/polkadot/delegate/sign-nomination-transaction",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Sign the Nomination Transaction",slug:"/guides/staking-api/polkadot/delegate/sign-nomination-transaction"},sidebar:"docsSidebar",previous:{title:"Submit Nomination Addresses",permalink:"/guides/staking-api/polkadot/delegate/submit-nomination-addresses"},next:{title:"Submit Signed Nomination Transaction for Broadcast",permalink:"/guides/staking-api/polkadot/delegate/submit-signed-nomination-transaction"}},s={},d=[],l={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After successfully submitting the staking account data, in reasponse you have received the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload"),", you'll be using this ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," to sign the transaction for confirmation."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"transaction_payload")," look something like this -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"transaction_payload": "0x0000000000000000000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423ee143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e0000000000000000000000000000000000000000000000000000000000000000000000000006050400f268995cc38974ce0686df1364875f26f2c32b246ddc18835512c3f9969f58361c77657374656e64387061726974792d77657374656e64020000004a2400000000000040df6acb689907609b0400000037e397fc7c91f5e40100000040fe3ad401f8959a06000000d2bc9897eed08f1503000000f78b278be53f454c02000000af2c0297a23e6d3d0200000049eaaf1b548a0cb00100000091d5df18b0d2cf5801000000ed99c5acb25eedf503000000cbca25e39f14238702000000687ad44ad37f03c201000000ab3c0572291feb8b01000000bc9d89904f5b923f0100000037c8bb1350a9a2a801000000f3ff14d5ab5270590100000017a6bc0d0062aeb3010000000c0000000004"\n')),(0,i.kt)("p",null,"Figment has a tool for signing and decoding payloads, see the guide ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/figment-signing-transactions"},"HERE")," to continue."),(0,i.kt)("p",null,"OR you can sign transaction using the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-transaction-construction"},"Polkadot JS Tools")," or ",(0,i.kt)("a",{parentName:"p",href:"/guides/staking-api/fireblocks-signing-transactions"},"Fireblocks"),"."),(0,i.kt)("p",null,"Once you sign the transaction successfully you'll get the signed transaction payload in response which you'll need in next step so make sure to copy/save it."),(0,i.kt)("p",null,"Signed transaction payload will look something like this -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"0x290284009864ac6455584af3c38540ec03927eca126342d266d3c9b62e44b41844a3166601ee8b719a3b17e67a5918ccd7552ec57bfa9f2b1e94ef04121434f1fc10fb413df73dd29b931bb91612e87f6c9c3abaa2bfbb2d6e1a987c08e55d1dcf4edfd78500000006050400f268995cc38974ce0686df1364875f26f2c32b246ddc18835512c3f9969f5836\n")),(0,i.kt)("p",null,"This part is all on you! Get that transaction signed and move on to the next step."),(0,i.kt)("admonition",{title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"At this point, it is best practice to always confirm the details of the transaction, which can be done using our provided ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@figmentio/slate"},"NPM package")," or CLI tool.")))}p.isMDXComponent=!0}}]);