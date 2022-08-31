"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[20741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),w=s,h=d["".concat(i,".").concat(w)]||d[w]||c[w]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function w(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),s=(n(67294),n(3905));const a={title:"Setup the Snowplow database and events table",date:"2020-02-26",sidebar_position:10},r=void 0,l={unversionedId:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table/index",id:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table/index",title:"Setup the Snowplow database and events table",description:"Now that you have Redshift up and running, you need to create the Snowplow database (if you didn't do this as part of the process of firing up your Redshift cluster) and creating your Snowplow events table.",source:"@site/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table/index.md",sourceDirName:"getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table",slug:"/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table/",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/setup-the-snowplow-database-and-events-table/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:10,frontMatter:{title:"Setup the Snowplow database and events table",date:"2020-02-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Connect to your cluster",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/connect-to-your-cluster/"},next:{title:"Setup user access on Redshift",permalink:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/set-up-user-access-on-redshift/"}},i={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Now that you have Redshift up and running, you need to create the Snowplow database (if you didn't do this as part of the process of firing up your Redshift cluster) and creating your Snowplow events table."),(0,s.kt)("p",null,"To create a new database on Redshift, right click on the new connection and select 'New database'. Give your database a suitable name and click OK."),(0,s.kt)("p",null,"The Snowplow events table definition for Redshift is available on the repo ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/blob/master/4-storage/redshift-storage/sql/atomic-def.sql"},"here"),". Execute the queries in the file - this can be done using psql as follows:"),(0,s.kt)("p",null,"Navigate to your snowplow github repo:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd snowplow\n")),(0,s.kt)("p",null,"Navigate to the sql file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd 4-storage/redshift-storage/sql\n")),(0,s.kt)("p",null,"Now execute the ",(0,s.kt)("inlineCode",{parentName:"p"},"atomic-def.sql")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ psql -h <HOSTNAME> -U {{ admin_username }} -d snowplow -p <PORT> -f atomic-def.sql\n")),(0,s.kt)("p",null,"Where ",(0,s.kt)("inlineCode",{parentName:"p"},"{{ admin_username }}")," is the username you created when you setup the Redshift cluster."),(0,s.kt)("p",null,"If you prefer using a GUI (e.g. Navicat) rather than ",(0,s.kt)("inlineCode",{parentName:"p"},"psql"),", you can do so. These will let you either run the files directly, or you can simply copy and paste the queries in the files into your GUI of choice, and execute them from there."),(0,s.kt)("p",null,"If you capture unstructured events or contexts, you also need to create the corresponding tables in Redshift. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ psql -h <HOSTNAME> -U {{ admin_username }} -d snowplow -p <PORT> -f com.snowplowanalytics.snowplow/mobile_context_1.sql\n$ psql -h <HOSTNAME> -U {{ admin_username }} -d snowplow -p <PORT> -f com.snowplowanalytics.snowplow/link_click_1.sql\n$ psql -h <HOSTNAME> -U {{ admin_username }} -d snowplow -p <PORT> -f org.w3/performance_timing_1.sql\n")))}c.isMDXComponent=!0}}]);