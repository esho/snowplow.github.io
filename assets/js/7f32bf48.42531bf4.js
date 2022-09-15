"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[73963],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"Control Plane API",date:"2021-05-11",sidebar_position:-10},l=void 0,o={unversionedId:"pipeline-components-and-applications/snowplow-mini/control-plane-api/index",id:"pipeline-components-and-applications/snowplow-mini/control-plane-api/index",title:"Control Plane API",description:"Snowplow Mini Control Plane API is created for controlling and configuring the Snowplow Mini instance without ssh to it.",source:"@site/docs/pipeline-components-and-applications/snowplow-mini/control-plane-api/index.md",sourceDirName:"pipeline-components-and-applications/snowplow-mini/control-plane-api",slug:"/pipeline-components-and-applications/snowplow-mini/control-plane-api/",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/control-plane-api/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/snowplow-mini/control-plane-api/index.md",tags:[],version:"current",lastUpdatedAt:1663236058,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:-10,frontMatter:{title:"Control Plane API",date:"2021-05-11",sidebar_position:-10},sidebar:"defaultSidebar",previous:{title:"Snowplow Mini",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/"},next:{title:"Setup Guide for AWS",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/setup-guide-for-aws/"}},s={},p=[{value:"Authentication",id:"authentication",level:3},{value:"Current Methods",id:"current-methods",level:3},{value:"Service restart",id:"service-restart",level:4},{value:"Resetting Elasticsearch indices",id:"resetting-elasticsearch-indices",level:4},{value:"Restart services individually",id:"restart-services-individually",level:4},{value:"Configuring telemetry",id:"configuring-telemetry",level:4},{value:"Adding external Iglu Server",id:"adding-external-iglu-server",level:4},{value:"Uploading custom enrichments",id:"uploading-custom-enrichments",level:4},{value:"Adding apikey for local Iglu Server",id:"adding-apikey-for-local-iglu-server",level:4},{value:"Changing credentials for basic HTTP authentication",id:"changing-credentials-for-basic-http-authentication",level:4},{value:"Add domain name",id:"add-domain-name",level:4},{value:"Get Snowplow Mini version",id:"get-snowplow-mini-version",level:4},{value:"Uploading Iglu Server configuration",id:"uploading-iglu-server-configuration",level:4}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Snowplow Mini Control Plane API is created for controlling and configuring the Snowplow Mini instance without ssh to it."),(0,i.kt)("p",null,"You can use control plane from Snowplow Mini dashboard or you can send a request to a specific endpoint of the API with any HTTP client e.g. cURL"),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The Control Plane uses\xa0",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP basic access authentication"),"."),(0,i.kt)("p",null,'This means that you need to add "-u username:password" to all\xa0',(0,i.kt)("inlineCode",{parentName:"p"},"curl"),"\xa0commands, where\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"username"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"\xa0are as you specified in the Snowplow Mini setup."),(0,i.kt)("h3",{id:"current-methods"},"Current Methods"),(0,i.kt)("h4",{id:"service-restart"},"Service restart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/restart-services\ufeff\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -XPUT http://${snowplow_mini_ip}/control-plane/restart-services \\       -u username:password\ufeff\n")),(0,i.kt)("p",null,"Restarts all the services running on the Snowplow Mini, including Stream Collector, Stream Enrich, Elasticsearch Loader."),(0,i.kt)("p",null,"This API call blocks until all the services have been restarted."),(0,i.kt)("p",null,"Return status 200 means that services have been successfully restarted."),(0,i.kt)("h4",{id:"resetting-elasticsearch-indices"},"Resetting Elasticsearch indices",(0,i.kt)("a",{parentName:"h4",href:"/docs/pipeline-components-and-applications/snowplow-mini/usage-guide/#resetting-elasticsearch-indices"})),(0,i.kt)("p",null,"As of 0.13.0, it is possible to reset Elasticsearch indices, along with the corresponding index patterns in Kibana, through Control Plane API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L \\\n-X POST '<mini-address>/control-plane/reset-service' \\\n-u '<username>:<password>' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'service_name=elasticsearch'\n")),(0,i.kt)("p",null,"Note that resetting deletes not only indices and patterns but also all events stored so far."),(0,i.kt)("h4",{id:"restart-services-individually"},"Restart services individually",(0,i.kt)("a",{parentName:"h4",href:"/docs/pipeline-components-and-applications/snowplow-mini/usage-guide/#restart-services-individually"})),(0,i.kt)("p",null,"As of 0.13.0, it is possible to restart services one by one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L \\\n-X PUT '<mini-address>/control-plane/restart-service' \\\n-u '<username>:<password>' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'service_name=<service_name>'\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"service_name")," can be one of the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"collector"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"enrich"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"esLoaderGood"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"esLoaderBad"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"iglu"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kibana"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"elasticsearch"),"."),(0,i.kt)("h4",{id:"configuring-telemetry"},"Configuring telemetry",(0,i.kt)("a",{parentName:"h4",href:"/docs/pipeline-components-and-applications/snowplow-mini/usage-guide/#configuring-telemetry"})),(0,i.kt)("p",null,"As of 0.13.0, Mini comes with telemetry and it is possible to turn it on or off through Control Plane API."),(0,i.kt)("p",null,"HTTP GET to get current configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -X GET '<mini-address>/control-plane/telemetry' -u '<username>:<password>'\n")),(0,i.kt)("p",null,"HTTP PUT to set it (use true or false as value of key ",(0,i.kt)("inlineCode",{parentName:"p"},"disable")," to turn it on or off)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -X PUT '<mini-address>/control-plane/telemetry' -u '<username>:<password>' -H 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'disable=false'\n")),(0,i.kt)("h4",{id:"adding-external-iglu-server"},"Adding external Iglu Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/external-iglu\ufeff\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/external-iglu \\\n  -d "uri=${external_iglu_uri}&apikey=${external_iglu_server_apikey}&vendor_prefix=${vendor_prefix}&name=${iglu_server_name}&priority=${priority}" \\\n  -u username:password\n')),(0,i.kt)("p",null,"Adds given pieces of information of the external Iglu Server to iglu resolver json file to use it with Stream Enrich."),(0,i.kt)("p",null,"Note that a lower priority number means that the repo is ranked higher in terms of priority."),(0,i.kt)("p",null,"Return status 200 means that pieces of information are added to iglu resolver json file and Stream Enrich is restarted successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Apikey must follow the UUID format."),(0,i.kt)("h4",{id:"uploading-custom-enrichments"},"Uploading custom enrichments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/enrichments\ufeff\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://${snowplow_mini_ip}/control-plane/enrichments \\\n  -F "enrichmentjson=@${path_of_the_custom_enrichment_dir}" \\\n  -u username:password\n')),(0,i.kt)("p",null,"Upload custom enrichment json file to enrichments directory and restarts the Stream Enrich to activate uploaded custom enrichment."),(0,i.kt)("p",null,"Return status 200 means that custom enrichment json file is placed in the enrichments directory and Stream Enrich is restarted successfully."),(0,i.kt)("h4",{id:"adding-apikey-for-local-iglu-server"},"Adding apikey for local Iglu Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/local-iglu-apikey\ufeff\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/local-iglu-apikey \\\n  -d "local_iglu_apikey=${new_local_iglu_apikey}" \\\n  -u username:password\n')),(0,i.kt)("p",null,"Adds provided apikey to the section of local Iglu Server in the iglu resolver json config. Restarts to Stream Enrich to activate the changes."),(0,i.kt)("p",null,"Return status 200 means that apikey is added and Stream Enrich is restarted successfully."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Apikey must follow the UUID format."),(0,i.kt)("h4",{id:"changing-credentials-for-basic-http-authentication"},"Changing credentials for basic HTTP authentication"),(0,i.kt)("p",null,"As of version 0.13.0, this endpoint doesn't accept new passwords shorter than 8 chars and with a score lower than 4 according to ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/trustelem/zxcvbn"},"zxcvbn")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/credentials\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/credentials \\\n  -d "new_username=${new_username}&new_password=${new_password}" \\\n  -u username:password\n')),(0,i.kt)("p",null,"Changes the credentials for basic HTTP authentication."),(0,i.kt)("p",null,"You will get always empty reply from the server because caddy server will be restarted after credentials are submitted and the connection will be lost until caddy server is up and running."),(0,i.kt)("h4",{id:"add-domain-name"},"Add domain name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/domain-name\ufeff\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/domain-name \\\n  -d "domain_name=${registered_domain_name}" \\\n  -u username:password\n')),(0,i.kt)("p",null,"Adds domain name for Snowplow Mini instance. After adding the domain name, your connection will be secured with TLS automatically. Make sure that given domain name is resolving to Snowplow Mini instance IP address."),(0,i.kt)("p",null,"You will get always empty reply from the server because caddy server will be restarted after the domain name is submitted and the connection will be lost until caddy server is up and running."),(0,i.kt)("h4",{id:"get-snowplow-mini-version"},"Get Snowplow Mini version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/version\ufeff\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET http://${snowplow_mini_ip}/control-plane/version \\\n  -u username:password\n")),(0,i.kt)("p",null,"Returns version of the running Snowplow Mini instance."),(0,i.kt)("h4",{id:"uploading-iglu-server-configuration"},"Uploading Iglu Server configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/control-plane/iglu-config\ufeff\n")),(0,i.kt)("p",null,"Example using\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://${snowplow_mini_ip}/control-plane/iglu-config \\\n  -F "igluserverhocon=@${path_of_the_iglu_server_config}" \\\n  -u username:password\n')),(0,i.kt)("p",null,"Uploads Iglu Server configuration file and restarts the Iglu Server to activate uploaded configuration."),(0,i.kt)("p",null,"Return status 200 means that configuration is uploaded and Iglu Server is restarted successfully."))}u.isMDXComponent=!0}}]);