"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[894],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5010:function(t,e,n){n.r(e),n.d(e,{assets:function(){return P},contentTitle:function(){return E},default:function(){return T},frontMatter:function(){return O},metadata:function(){return x},toc:function(){return j}});var r=n(7462),a=n(3366),o=n(7294),i=n(3905),c=n(9960),s=n(3725),l=n(6010),u="cardContainer_woeA",d="cardContainerLink_iOSj",p="cardTitle_pNjP",m="cardDescription_qC_k",f=n(3919),k=n(5999);function h(t){var e=t.href,n=t.children,r=(0,l.Z)("card margin-bottom--lg padding--lg",u,e&&d);return e?o.createElement(c.Z,{href:e,className:r},n):o.createElement("div",{className:r},n)}function y(t){var e=t.href,n=t.icon,r=t.title,a=t.description;return o.createElement(h,{href:e},o.createElement("h2",{className:(0,l.Z)("text--truncate",p),title:r},n," ",r),o.createElement("div",{className:(0,l.Z)("text--truncate",m),title:a},a))}function v(t){var e=t.item,n=(0,s.Wl)(e);return o.createElement(y,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,k.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})})}function g(t){var e,n=t.item,r=(0,f.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.xz)(null!=(e=n.docId)?e:void 0);return o.createElement(y,{href:n.href,icon:r,title:n.label,description:null==a?void 0:a.description})}function b(t){var e=t.item;switch(e.type){case"link":return o.createElement(g,{item:e});case"category":return o.createElement(v,{item:e});default:throw new Error("unknown item type "+JSON.stringify(e))}}function w(t){var e=t.items;return o.createElement("div",{className:"row"},e.map((function(t,e){return o.createElement("article",{key:e,className:"col col--6"},o.createElement(b,{item:t}))})))}var N=["components"],O={},E="Quick Start",x={unversionedId:"quickstart/index",id:"quickstart/index",title:"Quick Start",description:"Astar is a collection of networks and tools providing:",source:"@site/docs/quickstart/index.md",sourceDirName:"quickstart",slug:"/quickstart/",permalink:"/astar-docs/docs/quickstart/",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/quickstart/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/astar-docs/docs/getting-started"},next:{title:"Network endpoints",permalink:"/astar-docs/docs/quickstart/endpoints"}},P={},j=[{value:"Network Endpoints",id:"network-endpoints",level:2},{value:"Faucet",id:"faucet",level:2},{value:"Astar account scheme",id:"astar-account-scheme",level:2},{value:"Ready?",id:"ready",level:2}],S={toc:j};function T(t){var e=t.components,n=(0,a.Z)(t,N);return(0,i.kt)("wrapper",(0,r.Z)({},S,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"Astar is a collection of networks and tools providing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"native support for Wasm and EVM-compatable smart contracts,"),(0,i.kt)("li",{parentName:"ul"},"advanced cross-chain features through Polkadot's XCMP,"),(0,i.kt)("li",{parentName:"ul"},"and developer tooling for writing Wasm smart contracts in ink! (Rust-like syntax) and ask! (TypeScript-like syntax)")),(0,i.kt)("p",null,"The Astar ecosystem has two mainnets and a testnet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Astar")," - a parachain connected to the Polkadot Relay Chain"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shiden")," - a parachain connected to the Kusama Relay Chain"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shibuya")," - a standalone testnet")),(0,i.kt)("h2",{id:"network-endpoints"},"Network Endpoints"),(0,i.kt)("p",null,"Developers can connect and interact with the network via HTTPS or Websocket endpoints on the network nodes. Check out\xa0",(0,i.kt)("a",{parentName:"p",href:"endpoints"},"Network Endpoints")," to get your own endpoint and API key from one of the supported providers."),(0,i.kt)("h2",{id:"faucet"},"Faucet"),(0,i.kt)("p",null,"Developers will want to use our testnet faucet to deploy and test their contracts before mainnet deployment. This faucet is accessable via the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.astar.network"},"Astar portal")," and instructions can be found ",(0,i.kt)("a",{parentName:"p",href:"faucet"},"here"),"."),(0,i.kt)("h2",{id:"astar-account-scheme"},"Astar account scheme"),(0,i.kt)("p",null,"Astar is the only smart-contract parachain in the Polkadot ecosystem that supports multi-virtual machines (WASM and EVM). Resultingly, managing multiple types of accounts can be non-trivial. Read more about ",(0,i.kt)("a",{parentName:"p",href:"https://astarnetwork.github.io/astar-docs/docs/quickstart/addresses"},"Astar's account structure")," in our documentation."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"ready"},"Ready?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Quick Start")," is broken down into the following pages:"),(0,i.kt)(w,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}T.isMDXComponent=!0}}]);