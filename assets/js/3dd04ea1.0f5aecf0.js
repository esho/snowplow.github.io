"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[6676],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},22197:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={title:"Tutorial: Getting started with Looker",date:"2021-03-26",sidebar_position:60},i=void 0,l={unversionedId:"tutorials/tutorial-getting-started-with-looker/index",id:"tutorials/tutorial-getting-started-with-looker/index",title:"Tutorial: Getting started with Looker",description:"What is Looker, and why use it to analyze / visualize Snowplow data",source:"@site/docs/tutorials/tutorial-getting-started-with-looker/index.md",sourceDirName:"tutorials/tutorial-getting-started-with-looker",slug:"/tutorials/tutorial-getting-started-with-looker/",permalink:"/docs/tutorials/tutorial-getting-started-with-looker/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/tutorials/tutorial-getting-started-with-looker/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:60,frontMatter:{title:"Tutorial: Getting started with Looker",date:"2021-03-26",sidebar_position:60},sidebar:"defaultSidebar",previous:{title:"Tutorial: Integrating Javascript tags with Enhanced E-commerce",permalink:"/docs/tutorials/tutorial-integrating-javascript-tags-with-enhanced-e-commerce/"},next:{title:"Tutorial: Setting up Tableau to analyze your Snowplow data",permalink:"/docs/tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data/"}},s={},p=[{value:"What is Looker, and why use it to analyze / visualize Snowplow data",id:"what-is-looker-and-why-use-it-to-analyze--visualize-snowplow-data",level:2},{value:"Setting up a Looker account",id:"setting-up-a-looker-account",level:2},{value:"Connecting to Looker to Snowplow data in Redshift or PostgreSQL",id:"connecting-to-looker-to-snowplow-data-in-redshift-or-postgresql",level:2},{value:"Create user credentials for Looker",id:"create-user-credentials-for-looker",level:3},{value:"Add the server running Looker to your Redshift white-list (Redshift only)",id:"add-the-server-running-looker-to-your-redshift-white-list-redshift-only",level:3},{value:"Add a connection from to your Snowplowplow data in Redshift or PostgreSQL",id:"add-a-connection-from-to-your-snowplowplow-data-in-redshift-or-postgresql",level:3},{value:"Importing the metadata models",id:"importing-the-metadata-models",level:2},{value:"Exploring your Snowplow data in Looker",id:"exploring-your-snowplow-data-in-looker",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-looker-and-why-use-it-to-analyze--visualize-snowplow-data"},"What is Looker, and why use it to analyze / visualize Snowplow data"),(0,a.kt)("p",null,"Looker is a next-generation BI tool that is particularly well-suited to mining Snowplow data:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It is architected to query the data stored in the database directly. (Rather than load it into its own in-memory engine.) That makes it ideally suited to exploring the very large data sets generated by Snowplow"),(0,a.kt)("li",{parentName:"ol"},"It is optimized to work with Amazon Redshift in particular"),(0,a.kt)("li",{parentName:"ol"},"It boasts a lightweight metadata model, that makes it easy for users with no SQL knowledge to perform very advanced queries against Snowplow data")),(0,a.kt)("p",null,"For more information on why Looker plays so well with Snowplow data, see this ",(0,a.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/blog/2013/12/10/introducing-looker-a-fresh-approach-to-bi-on-snowplow-data/"},"blog post"),"."),(0,a.kt)("h2",{id:"setting-up-a-looker-account"},"Setting up a Looker account"),(0,a.kt)("p",null,"You can apply for a Looker account directly from the ",(0,a.kt)("a",{parentName:"p",href:"http://www.looker.com/"},"Looker website"),". Snowplow SaaS customers or users on our free trial can ",(0,a.kt)("a",{parentName:"p",href:"mailto:contact@snowplowanalytics.com"},"get in touch with the Snowplow team")," to request a Looker trial."),(0,a.kt)("h2",{id:"connecting-to-looker-to-snowplow-data-in-redshift-or-postgresql"},"Connecting to Looker to Snowplow data in Redshift or PostgreSQL"),(0,a.kt)("p",null,"This is a three step process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create user credentials for Looker"),(0,a.kt)("li",{parentName:"ol"},"Add the server running Looker to your Redshift white-list (Redshift only)"),(0,a.kt)("li",{parentName:"ol"},"Add a connection from Looker to your Snowplowplow data in Redshift or PostgreSQL")),(0,a.kt)("h3",{id:"create-user-credentials-for-looker"},"Create user credentials for Looker"),(0,a.kt)("p",null,"We recommend you create a dedicated 'Looker' user to access your Snowplow data. This user should have read only permissions on ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic.events"),", and write permissions on a new schema called ",(0,a.kt)("inlineCode",{parentName:"p"},"looker_scratch"),", that Looker will use to persist temporary tables to. (Looker users temporary tables to make querying Snowplow data much faster.)"),(0,a.kt)("p",null,"To do so, log into your Snowplow database using admin / super user credentials with your client of choice (e.g. ",(0,a.kt)("a",{parentName:"p",href:"http://www.navicat.com/"},"Navicat"),", ",(0,a.kt)("a",{parentName:"p",href:"http://www.postgresql.org/docs/9.2/static/app-psql.html"},"psql")," etc.) and execute the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER looker PASSWORD {{ password }};\nGRANT USAGE ON SCHEMA atomic TO looker;\nGRANT SELECT ON atomic.events TO looker;\nCREATE SCHEMA looker_scratch;\nGRANT ALL ON SCHEMA looker_scratch TO looker;\n")),(0,a.kt)("h3",{id:"add-the-server-running-looker-to-your-redshift-white-list-redshift-only"},"Add the server running Looker to your Redshift white-list (Redshift only)"),(0,a.kt)("p",null,"If you are using Amazon Redshift, you will need to add the server running Looker to one of your Redshift security groups."),(0,a.kt)("p",null,"To add the server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into the AWS Management console"),(0,a.kt)("li",{parentName:"ul"},"Select Redshift"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Security")," from left hand menu. A list of security groups will appear"),(0,a.kt)("li",{parentName:"ul"},"Select the security group you would like to add the server to. (Or create a dedicated one for the purpose.)"),(0,a.kt)("li",{parentName:"ul"},"Click on the security group and scroll down to the page bottom. You should see a dropdown for adding a new connection type (either ",(0,a.kt)("strong",{parentName:"li"},"CIDR/IP")," or ",(0,a.kt)("strong",{parentName:"li"},"EC2 Security Group"),")"),(0,a.kt)("li",{parentName:"ul"},"Select the appropriate option for the server running Looker. If this has been setup by either the Looker or Snowplow teams, then they will be able to provide the appropriate details"),(0,a.kt)("li",{parentName:"ul"},"If you've created a new security group just for Looker, you will need to add this to the Cluster. Select ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," from the left hand menu, select your cluster and then click the ",(0,a.kt)("strong",{parentName:"li"},"Cluster")," dropdown at the top and select ",(0,a.kt)("strong",{parentName:"li"},"Modify"),". You should see a list of available security groups:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(61504).Z,width:"1059",height:"940"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure you highlight your new security group then click the ",(0,a.kt)("strong",{parentName:"li"},"Modify")," button"),(0,a.kt)("li",{parentName:"ul"},"Looker should now be ready to access your data!")),(0,a.kt)("h3",{id:"add-a-connection-from-to-your-snowplowplow-data-in-redshift-or-postgresql"},"Add a connection from to your Snowplowplow data in Redshift or PostgreSQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into your Looker account"),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"admin")," link on the top right menu"),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Connections")," link on the left hand menu (under ",(0,a.kt)("strong",{parentName:"li"},"Server Settings"),")"),(0,a.kt)("li",{parentName:"ul"},"Press the ",(0,a.kt)("strong",{parentName:"li"},"New Database Connection")," button (top right). The following screen appears:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(12435).Z,width:"1045",height:"1061"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Give your connection a name (e.g. "Snowplow")'),(0,a.kt)("li",{parentName:"ul"},"Select either ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgeSQL")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Amazon Redshift")," for the ",(0,a.kt)("strong",{parentName:"li"},"Dialect")),(0,a.kt)("li",{parentName:"ul"},"Enter the host, port, database name, username and password you use to access your Snowplow data"),(0,a.kt)("li",{parentName:"ul"},"Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"atomic")," for ",(0,a.kt)("strong",{parentName:"li"},"Schema")),(0,a.kt)("li",{parentName:"ul"},"Enter your connection details. (Including the username / password combination you setup in step 3.3 above.)"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Test These Settings"),". If they are working, press the ",(0,a.kt)("strong",{parentName:"li"},"Add Connection")," button."),(0,a.kt)("li",{parentName:"ul"},"Looker can now access your Snowplow data!")),(0,a.kt)("h2",{id:"importing-the-metadata-models"},"Importing the metadata models"),(0,a.kt)("p",null,"Note: if you are setting up a trial with the Looker or Snowplow teams, they should be able to set up the metadata models for you. If you want to go through the process yourself, however, follow these instructions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the Looker UI, make sure you are in ",(0,a.kt)("strong",{parentName:"li"},"Developer Mode")," (by clicking on the ",(0,a.kt)("strong",{parentName:"li"},"Developer Mode")," icon on the top left under your username)."),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Models")," on the top menu"),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Generate New Model")," on the left hand menu under ",(0,a.kt)("strong",{parentName:"li"},"Tools"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(73559).Z,width:"1045",height:"1061"})),(0,a.kt)("p",null,"Select your connection from the dropdown. Enter 'atomic' under ",(0,a.kt)("strong",{parentName:"p"},"Schemas")," and click the generate button:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(54592).Z,width:"1045",height:"1061"})),(0,a.kt)("p",null,"You will now see the new model stubbed in the left hand menu. (You may need to refresh the page.)"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(54278).Z,width:"1146",height:"1061"})),(0,a.kt)("p",null,"We now need to create a file for each of our models. Select the ",(0,a.kt)("strong",{parentName:"p"},"Edit")," link next to ",(0,a.kt)("strong",{parentName:"p"},"MODELS")," in the left-hand menu and then click the ",(0,a.kt)("em",{parentName:"p"},"New File")," link (just below) to create a new file. Create the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dashboard_last_6_months")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dashboard_last_7_days")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"geo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"landing_page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"landing_page_original")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"last_page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"page_views_by_visit_in_sequence")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source_original")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transactions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transactions_items")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"visitors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"visits"))),(0,a.kt)("p",null,"Then click the ",(0,a.kt)("strong",{parentName:"p"},"Done")," next to ",(0,a.kt)("strong",{parentName:"p"},"MODELS")," on the left hand menu."),(0,a.kt)("p",null,"Now we need to populate each of the models files. The YAML definitions to populate them can be found here, on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/tree/master/5-data-modeling/web-model/looker"},"Github repo"),". Copy the contents of each file in the repo to the corresponding file in Looker."),(0,a.kt)("p",null,"You are now ready to explore your data in Looker!"),(0,a.kt)("h2",{id:"exploring-your-snowplow-data-in-looker"},"Exploring your Snowplow data in Looker"),(0,a.kt)("p",null,"Let's perform a simple analysis to start getting used to Looker. Let's analyze visitor and engagement levels by landing page."),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Explore")," link in the top menu, select your connection and select ",(0,a.kt)("strong",{parentName:"p"},"Visits"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(76757).Z,width:"1146",height:"1061"})),(0,a.kt)("p",null,"Select the following dimensions and metrics from the left hand list. (It may be easier to type them into the search box then scroll through the long list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LANDING PAGE Landing page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VISITS Visit Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VISITS Events Per Visit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VISITS Bounce Rate"))),(0,a.kt)("p",null,"Select the run button. You should see the three metrics given for each landing page:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5732).Z,width:"1146",height:"1061"})),(0,a.kt)("p",null,"Easy - huh?"))}d.isMDXComponent=!0},12435:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/1-0dd2593e199cd21baa2f55c1a2b6b60d.jpeg"},61504:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2-6b693f54fe783f9dc736a98e40a4bdc3.jpeg"},73559:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/3-2dd5e9f25812bafe8533936548115b08.jpeg"},54592:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4-494c7852e6dbabf1f8b1dfccc569ab74.jpeg"},54278:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/5-9f655261027d985d28279b4d1e025d6e.jpeg"},76757:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/6-691246a5f4fa7a5adccc067431ad5fa1.jpeg"},5732:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/7-b6d3417998637182965bb29a76bfe5fc.jpeg"}}]);