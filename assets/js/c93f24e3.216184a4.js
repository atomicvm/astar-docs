"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[5173],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6949:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l="Spin up the Collator",p={unversionedId:"nodes/collator/spinup_collator",id:"nodes/collator/spinup_collator",title:"Spin up the Collator",description:"\u200bStart by building the collator node by following this guide:",source:"@site/docs/nodes/collator/spinup_collator.md",sourceDirName:"nodes/collator",slug:"/nodes/collator/spinup_collator",permalink:"/astar-docs/docs/nodes/collator/spinup_collator",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/nodes/collator/spinup_collator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Collator Requirements",permalink:"/astar-docs/docs/nodes/collator/requirements"},next:{title:"Ultimate Beginners Guide",permalink:"/astar-docs/docs/nodes/ultimateguide/"}},c={},u=[{value:"Verify synchronization",id:"verify-synchronization",level:3},{value:"Session Keys",id:"session-keys",level:3},{value:"Author session keys",id:"author-session-keys",level:4},{value:"Set session keys",id:"set-session-keys",level:4},{value:"Identity",id:"identity",level:3},{value:"Set identity",id:"set-identity",level:4},{value:"Request judgment",id:"request-judgment",level:4},{value:"Bond funds",id:"bond-funds",level:3},{value:"Production blocks",id:"production-blocks",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spin-up-the-collator"},"Spin up the Collator"),(0,a.kt)("p",null,"\u200bStart by building the collator node by following this guide:\nLINK"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Collators are responsible for the network stability, it is very important to be able to react at any time of the day or night in case of trouble. We strongly encourage collators to set up a monitoring and alerting system, learn more about this from our 'Beginners Guide'."))),(0,a.kt)("h3",{id:"verify-synchronization"},"Verify synchronization"),(0,a.kt)("p",null,"Before jumping to the next steps, you have to wait until your node is ",(0,a.kt)("strong",{parentName:"p"},"fully synchronized"),". This can take a long time depending on the chain height. Please node that syncing to one of our networks requires the node to sync with the network and with the relay chain."),(0,a.kt)("p",null,"Check the current synchronization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"journalctl -f -u shibuya-node -n100\n")),(0,a.kt)("h3",{id:"session-keys"},"Session Keys"),(0,a.kt)("h4",{id:"author-session-keys"},"Author session keys"),(0,a.kt)("p",null,"Run the following command to author session keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),(0,a.kt)("p",null,"Result will look like this, you just need to copy the key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"jsonrpc":"2.0","result":"0x600e6cea49bdeaab301e9e03215c0bcebab3cafa608fe3b8fb6b07a820386048","id":1}\n')),(0,a.kt)("h4",{id:"set-session-keys"},"Set session keys"),(0,a.kt)("p",null,"Go to the Polkadot.js portal: ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Developper > Extrinsic"))),(0,a.kt)("p",null,"Select your ",(0,a.kt)("strong",{parentName:"p"},"collator account")," and extrinsic type: ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"session / setKeys"))),(0,a.kt)("p",null,"Enter the ",(0,a.kt)("strong",{parentName:"p"},"session keys")," and set proof to ",(0,a.kt)("inlineCode",{parentName:"p"},"0x00")),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://i.imgur.com/fXfqGal.png",border:"1"})),(0,a.kt)("p",null,"Submit the transaction."),(0,a.kt)("h3",{id:"identity"},"Identity"),(0,a.kt)("h4",{id:"set-identity"},"Set identity"),(0,a.kt)("p",null,"Go to the Polkadot.js portal: ",(0,a.kt)("strong",{parentName:"p"},"Accounts")),(0,a.kt)("p",null,"Open the 3 dots next to your collators address: ",(0,a.kt)("strong",{parentName:"p"},"Set on-chain Identity")),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://i.imgur.com/YIIWINt.png",border:"1"})),(0,a.kt)("p",null,"Enter all fields you want to set."),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://i.imgur.com/pkC4glq.png",border:"1"})),(0,a.kt)("p",null,"Send the transaction."),(0,a.kt)("h4",{id:"request-judgment"},"Request judgment"),(0,a.kt)("p",null,"Go to the Polkadot.js portal: ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Developper > Extrinsic"))),(0,a.kt)("p",null,"Select your ",(0,a.kt)("strong",{parentName:"p"},"collator account")," and extrinsic type: ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"identity / requestJudgment"))),(0,a.kt)("p",null,"Send the transaction."),(0,a.kt)("h3",{id:"bond-funds"},"Bond funds"),(0,a.kt)("p",null,"To start collating, you need to have ",(0,a.kt)("strong",{parentName:"p"},"32 000 SDN")," tokens for Shiden or ",(0,a.kt)("strong",{parentName:"p"},"3 200 000 ASTR")," tokens for Astar."),(0,a.kt)("p",null,"Go to the Shibuya Polkadot.js portal: ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Developper > Extrinsic"))),(0,a.kt)("p",null,"Select your ",(0,a.kt)("strong",{parentName:"p"},"collator account")," and extrinsic type: ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"CollatorSelection / registerAsCandidate"))),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://i.imgur.com/3YvdJbt.png",border:"1"})),(0,a.kt)("p",null,"Submit the transaction."),(0,a.kt)("h3",{id:"production-blocks"},"Production blocks"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Onboarding takes place at ",(0,a.kt)("inlineCode",{parentName:"p"},"n+1")," session"))),(0,a.kt)("p",null,"Once your collator is active, you will see your name inside ",(0,a.kt)("strong",{parentName:"p"},"Network")," tab every time you produce a block:"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://i.imgur.com/e70Tpbq.png",border:"1"})))}m.isMDXComponent=!0}}]);