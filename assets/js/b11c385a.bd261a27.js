"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[86858],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,w=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(w,a(a({ref:n},c),{},{components:t})):r.createElement(w,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(87462),i=(t(67294),t(3905)),o=t(29784);const a={title:"Control Plane API",date:"2020-05-25",sidebar_position:30},l=void 0,p={unversionedId:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-0/control-plane-api/index",id:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-0/control-plane-api/index",title:"Control Plane API",description:"Snowplow Mini Control Plane API is created for controlling and configuring the Snowplow Mini instance without ssh to it.",source:"@site/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-0/control-plane-api/index.md",sourceDirName:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-0/control-plane-api",slug:"/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-0/control-plane-api/",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-0/control-plane-api/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-0/control-plane-api/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:30,frontMatter:{title:"Control Plane API",date:"2020-05-25",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Usage Guide",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-9-0/usage-guide/"},next:{title:"Snowplow Mini 0.8.1",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-8-1/"}},s={},c=[],u={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Snowplow Mini Control Plane API is created for controlling and configuring the Snowplow Mini instance without ssh to it."),(0,i.kt)("p",null,"You can use control plane from Snowplow Mini dashboard or you can send a request to a specific endpoint of the API with any HTTP client e.g. cURL"),(0,i.kt)(o.ZP,{mdxType:"Block2096"}))}d.isMDXComponent=!0},29784:(e,n,t)=>{t.d(n,{ZP:()=>a});var r=t(87462),i=(t(67294),t(3905));const o={toc:[{value:"Authentication",id:"authentication",level:3},{value:"Current Methods",id:"current-methods",level:3},{value:"Service restart",id:"service-restart",level:4},{value:"Adding external Iglu Server",id:"adding-external-iglu-server",level:4},{value:"Uploading custom enrichments",id:"uploading-custom-enrichments",level:4},{value:"Adding apikey for local Iglu Server",id:"adding-apikey-for-local-iglu-server",level:4},{value:"Changing credentials for basic HTTP authentication",id:"changing-credentials-for-basic-http-authentication",level:4},{value:"Add domain name",id:"add-domain-name",level:4},{value:"Get Snowplow Mini version",id:"get-snowplow-mini-version",level:4},{value:"Uploading Iglu Server configuration",id:"uploading-iglu-server-configuration",level:4}]};function a(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The Control Plane uses\xa0",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP basic access authentication"),"."),(0,i.kt)("p",null,'This means that you need to add "-u username:password" to all\xa0',(0,i.kt)("inlineCode",{parentName:"p"},"curl"),"\xa0commands, where\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"username"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"\xa0are as you specified in the Snowplow Mini setup."),(0,i.kt)("h3",{id:"current-methods"},"Current Methods"),(0,i.kt)("h4",{id:"service-restart"},"Service restart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/control-plane/restart-services\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl -XPUT http://${snowplow_mini_ip}/control-plane/restart-services \\\n       -u username:password\n")),(0,i.kt)("p",null,"Restarts all the services running on the Snowplow Mini, including Stream Collector, Stream Enrich, Elasticsearch Loader."),(0,i.kt)("p",null,"This API call blocks until all the services have been restarted."),(0,i.kt)("p",null,"Return status 200 means that services have been successfully restarted."),(0,i.kt)("h4",{id:"adding-external-iglu-server"},"Adding external Iglu Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/control-plane/external-iglu\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/external-iglu \\\n    -d "uri=${external_iglu_uri}&apikey=${external_iglu_server_apikey}&vendor_prefix=${vendor_prefix}&name=${iglu_server_name}&priority=${priority}" \\\n    -u username:password\n')),(0,i.kt)("p",null,"Adds given pieces of information of the external Iglu Server to iglu resolver json file to use it with Stream Enrich."),(0,i.kt)("p",null,"Note that a lower priority number means that the repo is ranked higher in terms of priority."),(0,i.kt)("p",null,"Return status 200 means that pieces of information are added to iglu resolver json file and Stream Enrich is restarted successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Apikey must follow the UUID format."),(0,i.kt)("h4",{id:"uploading-custom-enrichments"},"Uploading custom enrichments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/control-plane/enrichments\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl http://${snowplow_mini_ip}/control-plane/enrichments \\\n    -F "enrichmentjson=@${path_of_the_custom_enrichment_dir}" \\\n    -u username:password\n')),(0,i.kt)("p",null,"Upload custom enrichment json file to enrichments directory and restarts the Stream Enrich to activate uploaded custom enrichment."),(0,i.kt)("p",null,"Return status 200 means that custom enrichment json file is placed in the enrichments directory and Stream Enrich is restarted successfully."),(0,i.kt)("h4",{id:"adding-apikey-for-local-iglu-server"},"Adding apikey for local Iglu Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/control-plane/local-iglu-apikey\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/local-iglu-apikey \\\n    -d "local_iglu_apikey=${new_local_iglu_apikey}" \\\n    -u username:password\n')),(0,i.kt)("p",null,"Adds provided apikey to the section of local Iglu Server in the iglu resolver json config. Restarts to Stream Enrich to activate the changes."),(0,i.kt)("p",null,"Return status 200 means that apikey is added and Stream Enrich is restarted successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Apikey must follow the UUID format."),(0,i.kt)("h4",{id:"changing-credentials-for-basic-http-authentication"},"Changing credentials for basic HTTP authentication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/control-plane/credentials\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/credentials \\\n    -d "new_username=${new_username}&new_password=${new_password}" \\\n    -u username:password\n')),(0,i.kt)("p",null,"Changes the credentials for basic HTTP authentication."),(0,i.kt)("p",null,"You will get always empty reply from the server because caddy server will be restarted after credentials are submitted and the connection will be lost until caddy server is up and running."),(0,i.kt)("h4",{id:"add-domain-name"},"Add domain name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/control-plane/domain-name\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/domain-name \\\n    -d "domain_name=${registered_domain_name}" \\\n    -u username:password\n')),(0,i.kt)("p",null,"Adds domain name for Snowplow Mini instance. After adding the domain name, your connection will be secured with TLS automatically. Make sure that given domain name is resolving to Snowplow Mini instance IP address."),(0,i.kt)("p",null,"You will get always empty reply from the server because caddy server will be restarted after the domain name is submitted and the connection will be lost until caddy server is up and running."),(0,i.kt)("h4",{id:"get-snowplow-mini-version"},"Get Snowplow Mini version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/control-plane/version\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -XGET http://${snowplow_mini_ip}/control-plane/version \\\n    -u username:password\n")),(0,i.kt)("p",null,"Returns version of the running Snowplow Mini instance."),(0,i.kt)("h4",{id:"uploading-iglu-server-configuration"},"Uploading Iglu Server configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/control-plane/iglu-config\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl http://${snowplow_mini_ip}/control-plane/iglu-config \\\n    -F "igluserverhocon=@${path_of_the_iglu_server_config}" \\\n    -u username:password\n')),(0,i.kt)("p",null,"Uploads Iglu Server configuration file and restarts the Iglu Server to activate uploaded configuration."),(0,i.kt)("p",null,"Return status 200 means that configuration is uploaded and Iglu Server is restarted successfully."))}a.isMDXComponent=!0}}]);