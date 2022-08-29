"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[72196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={title:"Managing Console API authentication",date:"2021-12-27",sidebar_position:20},s=void 0,r={unversionedId:"using-the-snowplow-console/managing-console-api-authentication/index",id:"using-the-snowplow-console/managing-console-api-authentication/index",title:"Managing Console API authentication",description:"The API that drives BDP Console's functionality is publicly documented and available for our customers to invoke via code. All calls to it need to be properly authenticated using JSON Web Tokens (JWT) that can be acquired via the Credentials API.",source:"@site/docs/using-the-snowplow-console/managing-console-api-authentication/index.md",sourceDirName:"using-the-snowplow-console/managing-console-api-authentication",slug:"/using-the-snowplow-console/managing-console-api-authentication/",permalink:"/docs/using-the-snowplow-console/managing-console-api-authentication/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/using-the-snowplow-console/managing-console-api-authentication/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:20,frontMatter:{title:"Managing Console API authentication",date:"2021-12-27",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Accessing Collector Configuration",permalink:"/docs/using-the-snowplow-console/accessing-collector-configuration/"},next:{title:"Managing user permissions in Console",permalink:"/docs/using-the-snowplow-console/managing-user-permissions-in-console/"}},l={},c=[{value:"Credentials UI v1",id:"credentials-ui-v1",level:2},{value:"Credentials UI v2",id:"credentials-ui-v2",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The API that drives BDP Console's functionality is ",(0,a.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/api/msc/v1/docs/index.html?url=/api/msc/v1/docs/docs.yaml"},"publicly documented")," and available for our customers to invoke via code. All calls to it need to be properly authenticated using JSON Web Tokens (JWT) that can be acquired via the Credentials API."),(0,a.kt)("h2",{id:"credentials-ui-v1"},"Credentials UI v1"),(0,a.kt)("p",null,"Previously, BDP Console was using the Password authentication flow to support machine-to-machine (m2m) applications. Under that scenario a BDP customer had to create a bot user in their account, retrieve a client ID and a client secret, and use all three to acquire a JWT. Customers who have enabled these credentials in the past will see the following panel in their Console account settings:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56210).Z,width:"978",height:"234"})),(0,a.kt)("p",null,"Legacy Snowplow BDP credentials management"),(0,a.kt)("p",null,"This method and the respective credentials still work for those who have been using them, however we strongly advise that customers upgrade to the current iteration where the only secret to be used by m2m applications is an API key which can be exchanged for a JWT as described below."),(0,a.kt)("h2",{id:"credentials-ui-v2"},"Credentials UI v2"),(0,a.kt)("p",null,"The following view is available for all customers under ",(0,a.kt)("a",{parentName:"p",href:"https://console.snowplowanalytics.com/credentials"},"BDP Console settings"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(85747).Z,width:"670",height:"391"})),(0,a.kt)("p",null,"API keys generation view"),(0,a.kt)("p",null,"It is possible to have multiple different keys, and deletion of a key is also possible. When a new API key is created, the following view shows up:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58267).Z,width:"749",height:"130"})),(0,a.kt)("p",null,"Showing a newly created API key"),(0,a.kt)("p",null,"This is a secret, equivalent to a username and a password combined, and should be handled as such at all times. As soon as you have an API key, it is straightforward to exchange it for a JWT. If you would do that using curl, it would look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl \\\n  --header 'X-API-Key: <API_KEY>' \\   https://console.snowplowanalytics.com/api/msc/v1/organizations/<ORGANIZATION_ID>/credentials/v2/token\n")),(0,a.kt)("p",null,"You can find your organization's ID within the BDP Console URL:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"This image has an empty alt attribute; its file name is orgID.png",src:n(92358).Z,width:"727",height:"57"})),(0,a.kt)("p",null,"The organization ID is the UUID in the first URL segment after the host"),(0,a.kt)("p",null,"The curl command above will return a JWT as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"accessToken":"<JWT>"}\n')),(0,a.kt)("p",null,"You may then use this access token value to supply authorization headers for subsequent api requests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl --header 'Authorization: Bearer <JWT>'\n")))}p.isMDXComponent=!0},56210:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-2-6f838965c8e156bfb72506968c45c409.png"},58267:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-3-79a6aad16fd3ad1694a6ec1ba665e845.png"},85747:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-ea01afce7936055e19b7e528ab63b724.png"},92358:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/orgID-abcb03ac4037410de585e7079489d91c.png"}}]);