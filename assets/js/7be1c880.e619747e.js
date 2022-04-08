"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8903],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return o?r.createElement(m,l(l({ref:t},u),{},{components:o})):r.createElement(m,l({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8807:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),l=["components"],s={sidebar_position:1},i="Learn about Collators",c={unversionedId:"nodes/collator/learn",id:"nodes/collator/learn",title:"Learn about Collators",description:"Introduction",source:"@site/docs/nodes/collator/learn.md",sourceDirName:"nodes/collator",slug:"/nodes/collator/learn",permalink:"/astar-docs/docs/nodes/collator/learn",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/nodes/collator/learn.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Node Operators",permalink:"/astar-docs/docs/nodes/"},next:{title:"Collator Requirements",permalink:"/astar-docs/docs/nodes/collator/requirements"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Role of collators in the Astar ecosystem",id:"role-of-collators-in-the-astar-ecosystem",level:2},{value:"Aura PoS Consensus",id:"aura-pos-consensus",level:2}],d={toc:p};function f(e){var t=e.components,o=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"learn-about-collators"},"Learn about Collators"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"A collator plays an essential role in our network and is responsible for crucial tasks, including block production and transaction confirmation. A collator needs to maintain a high communication response capability to ensure the seamless operation of the Astar ecosystem."),(0,a.kt)("h2",{id:"role-of-collators-in-the-astar-ecosystem"},"Role of collators in the Astar ecosystem"),(0,a.kt)("p",null,"Collators maintain our ecosystem by collecting transactions from users and producing state transition proofs for Relay Chain validators. In other words, collators maintain the network by aggregating parachain transactions into parachain block candidates and producing state transition proofs for validators based on those blocks."),(0,a.kt)("p",null,"Unlike validators, collator nodes do not secure the network. If a parachain block is invalid, it will get rejected by validators. Therefore the assumption that having more collators is better or more secure is not correct. On the contrary, too many collators may slow down the network. The only nefarious power collators have transaction censorship. To prevent censorship, a parachain only needs to ensure some neutral collators - but not necessarily a majority. Theoretically, the censorship problem is solved by having just one honest collator (reference: ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-collator"},"https://wiki.polkadot.network/docs/learn-collator"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"XCMP")),(0,a.kt)("p",null,"Collators are a key element of ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-crosschain"},"XCMP (Cross-Chain Message Passing)"),". By being full-nodes of the Relay Chain, they are all aware of each other as peers. This makes it possible for them to send messages from parachain A to parachain B."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"aura-pos-consensus"},"Aura PoS Consensus"),(0,a.kt)("p",null,"Aura PoS consist of 2 pallets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.parity.io/pallet_aura/index.html"},"Aura pallet")),(0,a.kt)("li",{parentName:"ul"},"PoS pallet")),(0,a.kt)("p",null,"The first phase in making PoS was by deploying the Aura pallet. Aura PoA Collator Phase - permissioned block authoring and collator session key setup for Astar ecosystem. After extended testing, we have deployed the PoS pallet and switched to Aura PoS. We have enabled permissionless collator staking, network inflation, and rewards."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Let\u2019s break down the latest phase:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Collator staking"),": collators can now start with securing the network. This will be with a minimum bond of a fixed amount of tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network inflation"),": Astar mainnets has a 10% inflation. This 10% is based on a perfect block production every 12 seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Rewards"),": a fixed amount will be created at each block and divided between treasury, collators, and dApp staking.")),(0,a.kt)("p",null,"A collator (block producer) gets a reward for each block it\u2019s produced. The reward is a fixed amount for each block."))}f.isMDXComponent=!0}}]);