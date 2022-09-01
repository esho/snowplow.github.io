"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[77015],{3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>g});var r=n(67294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=r.createContext({}),l=function(e){var o=r.useContext(p),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},d=function(e){var o=l(e.components);return r.createElement(p.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},c=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=t,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||i;return n?r.createElement(m,a(a({ref:o},d),{},{components:n})):r.createElement(m,a({ref:o},d))}));function g(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24507:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),t=(n(67294),n(3905));const i={title:"1.2.0 Upgrade Guide",date:"2021-09-03",sidebar_position:190},a=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/index",title:"1.2.0 Upgrade Guide",description:"RDB Loader 1.2.0 brings many improvements for monitoring subsystem. If you're not interested in new features - you can just bump versions. If you need webhook monitoring - read below instructions on how to enable it.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-2-0-upgrade-guide/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:190,frontMatter:{title:"1.2.0 Upgrade Guide",date:"2021-09-03",sidebar_position:190},sidebar:"tutorialSidebar",previous:{title:"2.0.0 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/2-0-0-upgrade-guide/"},next:{title:"1.0.0 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/"}},p={},l=[{value:"Assets",id:"assets",level:2},{value:"Enabling Webhook monitoring",id:"enabling-webhook-monitoring",level:2},{value:"Enabling folder monitoring",id:"enabling-folder-monitoring",level:2}],d={toc:l};function u(e){let{components:o,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"RDB Loader 1.2.0 brings many improvements for monitoring subsystem. If you're not interested in new features - you can just bump versions. If you need webhook monitoring - read below instructions on how to enable it."),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/snowplow-rdb-loader-1-2-0-released/5571"},"Official announcement")),(0,t.kt)("h2",{id:"assets"},"Assets"),(0,t.kt)("p",null,"RDB Shredder is published on S3:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"s3://snowplow-hosted-assets-eu-central-1/4-storage/rdb-shredder/snowplow-rdb-shredder-1.2.0.jar"))),(0,t.kt)("p",null,"RDB Loader and RDB Stream Shredder distributed as Docker images, published on DockerHub:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"snowplow/snowplow-rdb-loader:1.2.0")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"snowplow/snowplow-rdb-stream-shredder:1.2.0"))),(0,t.kt)("h2",{id:"enabling-webhook-monitoring"},"Enabling Webhook monitoring"),(0,t.kt)("p",null,"All configuration changes are scoped to ",(0,t.kt)("inlineCode",{parentName:"p"},"monitoring")," property."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'"monitoring": {\n  "webhook": {\n    "endpoint": "https://webhooks.acme.com/rdb-loader",\n    "tags": {            # Custom set of tags\n      "host": $HOST,     # Environment variables are supported\n      "pipeline": "production"\n    }\n  }\n}\n')),(0,t.kt)("p",null,"It's up to you to setup a preferable webhook backend. It can be a Snowplow Iglu webhook or custom monitoring system."),(0,t.kt)("h2",{id:"enabling-folder-monitoring"},"Enabling folder monitoring"),(0,t.kt)("p",null,"All configuration changes are scoped to ",(0,t.kt)("inlineCode",{parentName:"p"},"monitoring")," property."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'"monitoring": {\n  "folders": {\n    "staging": "s3://snowplow-acme-com/logging/",    # This path will contain temporary files\n                                                     # Redshift role must have an access for this folder\n    "period": "2 hours"                              # How often the check should be performed\n  }\n}\n')),(0,t.kt)("p",null,"It's up to you to setup a preferable webhook backend. It can be a Snowplow Iglu webhook or custom monitoring system."))}u.isMDXComponent=!0}}]);