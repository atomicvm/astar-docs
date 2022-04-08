"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[9373],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9574:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="Running a Full Node",u={unversionedId:"nodes/run-a-full-node",id:"nodes/run-a-full-node",title:"Running a Full Node",description:"Overview",source:"@site/docs/nodes/run-a-full-node.md",sourceDirName:"nodes",slug:"/nodes/run-a-full-node",permalink:"/astar-docs/docs/nodes/run-a-full-node",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/nodes/run-a-full-node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"9. Run Monitor Dashboard",permalink:"/astar-docs/docs/nodes/ultimateguide/start_monitoring"},next:{title:"XCM",permalink:"/astar-docs/docs/xcm/"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-full-node"},"Running a Full Node"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Running a full node on an Astar chain allows you to connect to the network, sync with a bootnode, obtain local access to RPC endpoints, author blocks on the parachain, and more."),(0,o.kt)("p",null,"We have multiple networks, including our testnet Shibuya, Shiden on Kusama, and Astar on Polkadot. Here are how these environments are named and their corresponding relay chain:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Astar ecosystem"),(0,o.kt)("th",{parentName:"tr",align:null},"Relay Chain"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Token"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,o.kt)("td",{parentName:"tr",align:null},"Tokyo (hosted by Stake)"),(0,o.kt)("td",{parentName:"tr",align:null},"Shibuya"),(0,o.kt)("td",{parentName:"tr",align:null},"SBY")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Shiden Network"),(0,o.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,o.kt)("td",{parentName:"tr",align:null},"Shiden"),(0,o.kt)("td",{parentName:"tr",align:null},"SDN")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Astar Network"),(0,o.kt)("td",{parentName:"tr",align:null},"Polkadot"),(0,o.kt)("td",{parentName:"tr",align:null},"Astar"),(0,o.kt)("td",{parentName:"tr",align:null},"ASTR")))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Requirements for running any node are similar to what we recommend to our collators. Read more about this here."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Running a node for our testnet 'Shibuya' requires less. It's a perfect place to test your node infrastructure and costs. "))),(0,o.kt)("p",null,"Astar nodes will listen on multiple ports. The default Substrate ports are used in the parachain, while the relay chain will listen on the next higher port. Both chains (parachain and relay chain) will run at the same time when you spin up your node."),(0,o.kt)("p",null,"The only ports that need to be open for incoming traffic are those designated for P2P. ",(0,o.kt)("strong",{parentName:"p"},"Collators do not need to have RPC or WS ports opened"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"There are a couple of different guides to help you get started running an Astar node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using Docker - this method provides a quick and easy way to get started with a Docker container."),(0,o.kt)("li",{parentName:"ul"},"Using Binary - this method is recommended for those with less experience compiling a Substrate node.")))}m.isMDXComponent=!0}}]);