"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[95087],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905)),i=t(29784);const l={title:"Control Plane API",date:"2020-04-03",sidebar_position:40},o=void 0,s={unversionedId:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/control-plane-api/index",id:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/control-plane-api/index",title:"Control Plane API",description:"Snowplow Mini Control Plane API is created for controlling and configuring the Snowplow Mini instance without ssh to it.",source:"@site/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/control-plane-api/index.md",sourceDirName:"pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/control-plane-api",slug:"/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/control-plane-api/",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/control-plane-api/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/control-plane-api/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:40,frontMatter:{title:"Control Plane API",date:"2020-04-03",sidebar_position:40},sidebar:"defaultSidebar",previous:{title:"Usage Guide",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-3/usage-guide/"},next:{title:"Snowplow Mini 0.6.2",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/previous-releases/snowplow-mini-0-6-2/"}},p={},c=[],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow Mini Control Plane API is created for controlling and configuring the Snowplow Mini instance without ssh to it."),(0,r.kt)("p",null,"You can use control plane from Snowplow Mini dashboard or you can send a request to a specific endpoint of the API with any HTTP client e.g. cURL"),(0,r.kt)(i.ZP,{mdxType:"Block2096"}))}d.isMDXComponent=!0},29784:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={toc:[{value:"Authentication",id:"authentication",level:3},{value:"Current Methods",id:"current-methods",level:3},{value:"Service restart",id:"service-restart",level:4},{value:"Adding external Iglu Server",id:"adding-external-iglu-server",level:4},{value:"Uploading custom enrichments",id:"uploading-custom-enrichments",level:4},{value:"Adding apikey for local Iglu Server",id:"adding-apikey-for-local-iglu-server",level:4},{value:"Changing credentials for basic HTTP authentication",id:"changing-credentials-for-basic-http-authentication",level:4},{value:"Add domain name",id:"add-domain-name",level:4},{value:"Get Snowplow Mini version",id:"get-snowplow-mini-version",level:4},{value:"Uploading Iglu Server configuration",id:"uploading-iglu-server-configuration",level:4}]};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The Control Plane uses\xa0",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP basic access authentication"),"."),(0,r.kt)("p",null,'This means that you need to add "-u username:password" to all\xa0',(0,r.kt)("inlineCode",{parentName:"p"},"curl"),"\xa0commands, where\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"username"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"\xa0are as you specified in the Snowplow Mini setup."),(0,r.kt)("h3",{id:"current-methods"},"Current Methods"),(0,r.kt)("h4",{id:"service-restart"},"Service restart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/restart-services\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XPUT http://${snowplow_mini_ip}/control-plane/restart-services \\\n       -u username:password\n")),(0,r.kt)("p",null,"Restarts all the services running on the Snowplow Mini, including Stream Collector, Stream Enrich, Elasticsearch Loader."),(0,r.kt)("p",null,"This API call blocks until all the services have been restarted."),(0,r.kt)("p",null,"Return status 200 means that services have been successfully restarted."),(0,r.kt)("h4",{id:"adding-external-iglu-server"},"Adding external Iglu Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/external-iglu\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/external-iglu \\\n    -d "uri=${external_iglu_uri}&apikey=${external_iglu_server_apikey}&vendor_prefix=${vendor_prefix}&name=${iglu_server_name}&priority=${priority}" \\\n    -u username:password\n')),(0,r.kt)("p",null,"Adds given pieces of information of the external Iglu Server to iglu resolver json file to use it with Stream Enrich."),(0,r.kt)("p",null,"Note that a lower priority number means that the repo is ranked higher in terms of priority."),(0,r.kt)("p",null,"Return status 200 means that pieces of information are added to iglu resolver json file and Stream Enrich is restarted successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Apikey must follow the UUID format."),(0,r.kt)("h4",{id:"uploading-custom-enrichments"},"Uploading custom enrichments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/enrichments\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://${snowplow_mini_ip}/control-plane/enrichments \\\n    -F "enrichmentjson=@${path_of_the_custom_enrichment_dir}" \\\n    -u username:password\n')),(0,r.kt)("p",null,"Upload custom enrichment json file to enrichments directory and restarts the Stream Enrich to activate uploaded custom enrichment."),(0,r.kt)("p",null,"Return status 200 means that custom enrichment json file is placed in the enrichments directory and Stream Enrich is restarted successfully."),(0,r.kt)("h4",{id:"adding-apikey-for-local-iglu-server"},"Adding apikey for local Iglu Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/local-iglu-apikey\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/local-iglu-apikey \\\n    -d "local_iglu_apikey=${new_local_iglu_apikey}" \\\n    -u username:password\n')),(0,r.kt)("p",null,"Adds provided apikey to the section of local Iglu Server in the iglu resolver json config. Restarts to Stream Enrich to activate the changes."),(0,r.kt)("p",null,"Return status 200 means that apikey is added and Stream Enrich is restarted successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Apikey must follow the UUID format."),(0,r.kt)("h4",{id:"changing-credentials-for-basic-http-authentication"},"Changing credentials for basic HTTP authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/credentials\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/credentials \\\n    -d "new_username=${new_username}&new_password=${new_password}" \\\n    -u username:password\n')),(0,r.kt)("p",null,"Changes the credentials for basic HTTP authentication."),(0,r.kt)("p",null,"You will get always empty reply from the server because caddy server will be restarted after credentials are submitted and the connection will be lost until caddy server is up and running."),(0,r.kt)("h4",{id:"add-domain-name"},"Add domain name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/domain-name\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/domain-name \\\n    -d "domain_name=${registered_domain_name}" \\\n    -u username:password\n')),(0,r.kt)("p",null,"Adds domain name for Snowplow Mini instance. After adding the domain name, your connection will be secured with TLS automatically. Make sure that given domain name is resolving to Snowplow Mini instance IP address."),(0,r.kt)("p",null,"You will get always empty reply from the server because caddy server will be restarted after the domain name is submitted and the connection will be lost until caddy server is up and running."),(0,r.kt)("h4",{id:"get-snowplow-mini-version"},"Get Snowplow Mini version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/version\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET http://${snowplow_mini_ip}/control-plane/version \\\n    -u username:password\n")),(0,r.kt)("p",null,"Returns version of the running Snowplow Mini instance."),(0,r.kt)("h4",{id:"uploading-iglu-server-configuration"},"Uploading Iglu Server configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/iglu-config\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://${snowplow_mini_ip}/control-plane/iglu-config \\\n    -F "igluserverhocon=@${path_of_the_iglu_server_config}" \\\n    -u username:password\n')),(0,r.kt)("p",null,"Uploads Iglu Server configuration file and restarts the Iglu Server to activate uploaded configuration."),(0,r.kt)("p",null,"Return status 200 means that configuration is uploaded and Iglu Server is restarted successfully."))}l.isMDXComponent=!0}}]);