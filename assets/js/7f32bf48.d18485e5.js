"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[73963],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(h,o(o({ref:n},c),{},{components:t})):i.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const a={title:"Control Plane API",date:"2021-05-11",sidebar_position:-10},o=void 0,l={unversionedId:"pipeline-components-and-applications/snowplow-mini/control-plane-api/index",id:"pipeline-components-and-applications/snowplow-mini/control-plane-api/index",title:"Control Plane API",description:"Snowplow Mini Control Plane API is created for controlling and configuring the Snowplow Mini instance without ssh to it.",source:"@site/docs/pipeline-components-and-applications/snowplow-mini/control-plane-api/index.md",sourceDirName:"pipeline-components-and-applications/snowplow-mini/control-plane-api",slug:"/pipeline-components-and-applications/snowplow-mini/control-plane-api/",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/control-plane-api/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/snowplow-mini/control-plane-api/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:-10,frontMatter:{title:"Control Plane API",date:"2021-05-11",sidebar_position:-10},sidebar:"tutorialSidebar",previous:{title:"Snowplow Mini",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/"},next:{title:"Setup Guide for AWS",permalink:"/docs/pipeline-components-and-applications/snowplow-mini/setup-guide-for-aws/"}},s={},p=[{value:"Authentication",id:"authentication",level:3},{value:"Current Methods",id:"current-methods",level:3},{value:"Service restart",id:"service-restart",level:4},{value:"Resetting Elasticsearch indices",id:"resetting-elasticsearch-indices",level:4},{value:"Restart services individually",id:"restart-services-individually",level:4},{value:"Configuring telemetry",id:"configuring-telemetry",level:4},{value:"Adding external Iglu Server",id:"adding-external-iglu-server",level:4},{value:"Uploading custom enrichments",id:"uploading-custom-enrichments",level:4},{value:"Adding apikey for local Iglu Server",id:"adding-apikey-for-local-iglu-server",level:4},{value:"Changing credentials for basic HTTP authentication",id:"changing-credentials-for-basic-http-authentication",level:4},{value:"Add domain name",id:"add-domain-name",level:4},{value:"Get Snowplow Mini version",id:"get-snowplow-mini-version",level:4},{value:"Uploading Iglu Server configuration",id:"uploading-iglu-server-configuration",level:4}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Snowplow Mini Control Plane API is created for controlling and configuring the Snowplow Mini instance without ssh to it."),(0,r.kt)("p",null,"You can use control plane from Snowplow Mini dashboard or you can send a request to a specific endpoint of the API with any HTTP client e.g. cURL"),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The Control Plane uses\xa0",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP basic access authentication"),"."),(0,r.kt)("p",null,'This means that you need to add "-u username:password" to all\xa0',(0,r.kt)("inlineCode",{parentName:"p"},"curl"),"\xa0commands, where\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"username"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"\xa0are as you specified in the Snowplow Mini setup."),(0,r.kt)("h3",{id:"current-methods"},"Current Methods"),(0,r.kt)("h4",{id:"service-restart"},"Service restart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/control-plane/restart-services\ufeff\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -XPUT http://${snowplow_mini_ip}/control-plane/restart-services \\       -u username:password\ufeff\n")),(0,r.kt)("p",null,"Restarts all the services running on the Snowplow Mini, including Stream Collector, Stream Enrich, Elasticsearch Loader."),(0,r.kt)("p",null,"This API call blocks until all the services have been restarted."),(0,r.kt)("p",null,"Return status 200 means that services have been successfully restarted."),(0,r.kt)("h4",{id:"resetting-elasticsearch-indices"},"Resetting Elasticsearch indices",(0,r.kt)("a",{parentName:"h4",href:"/docs/pipeline-components-and-applications/snowplow-mini/usage-guide/#resetting-elasticsearch-indices"})),(0,r.kt)("p",null,"As of 0.13.0, it is possible to reset Elasticsearch indices, along with the corresponding index patterns in Kibana, through Control Plane API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -L \\\n-X POST '<mini-address>/control-plane/reset-service' \\\n-u '<username>:<password>' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'service_name=elasticsearch'\n")),(0,r.kt)("p",null,"Note that resetting deletes not only indices and patterns but also all events stored so far."),(0,r.kt)("h4",{id:"restart-services-individually"},"Restart services individually",(0,r.kt)("a",{parentName:"h4",href:"/docs/pipeline-components-and-applications/snowplow-mini/usage-guide/#restart-services-individually"})),(0,r.kt)("p",null,"As of 0.13.0, it is possible to restart services one by one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -L \\\n-X PUT '<mini-address>/control-plane/restart-service' \\\n-u '<username>:<password>' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'service_name=<service_name>'\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"service_name")," can be one of the following: ",(0,r.kt)("inlineCode",{parentName:"p"},"collector"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enrich"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"esLoaderGood"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"esLoaderBad"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"iglu"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kibana"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch"),"."),(0,r.kt)("h4",{id:"configuring-telemetry"},"Configuring telemetry",(0,r.kt)("a",{parentName:"h4",href:"/docs/pipeline-components-and-applications/snowplow-mini/usage-guide/#configuring-telemetry"})),(0,r.kt)("p",null,"As of 0.13.0, Mini comes with telemetry and it is possible to turn it on or off through Control Plane API."),(0,r.kt)("p",null,"HTTP GET to get current configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -L -X GET '<mini-address>/control-plane/telemetry' -u '<username>:<password>'\n")),(0,r.kt)("p",null,"HTTP PUT to set it (use true or false as value of key ",(0,r.kt)("inlineCode",{parentName:"p"},"disable")," to turn it on or off)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -L -X PUT '<mini-address>/control-plane/telemetry' -u '<username>:<password>' -H 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'disable=false'\n")),(0,r.kt)("h4",{id:"adding-external-iglu-server"},"Adding external Iglu Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/control-plane/external-iglu\ufeff\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/external-iglu \\\n  -d "uri=${external_iglu_uri}&apikey=${external_iglu_server_apikey}&vendor_prefix=${vendor_prefix}&name=${iglu_server_name}&priority=${priority}" \\\n  -u username:password\n')),(0,r.kt)("p",null,"Adds given pieces of information of the external Iglu Server to iglu resolver json file to use it with Stream Enrich."),(0,r.kt)("p",null,"Note that a lower priority number means that the repo is ranked higher in terms of priority."),(0,r.kt)("p",null,"Return status 200 means that pieces of information are added to iglu resolver json file and Stream Enrich is restarted successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Apikey must follow the UUID format."),(0,r.kt)("h4",{id:"uploading-custom-enrichments"},"Uploading custom enrichments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/control-plane/enrichments\ufeff\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl http://${snowplow_mini_ip}/control-plane/enrichments \\\n  -F "enrichmentjson=@${path_of_the_custom_enrichment_dir}" \\\n  -u username:password\n')),(0,r.kt)("p",null,"Upload custom enrichment json file to enrichments directory and restarts the Stream Enrich to activate uploaded custom enrichment."),(0,r.kt)("p",null,"Return status 200 means that custom enrichment json file is placed in the enrichments directory and Stream Enrich is restarted successfully."),(0,r.kt)("h4",{id:"adding-apikey-for-local-iglu-server"},"Adding apikey for local Iglu Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/control-plane/local-iglu-apikey\ufeff\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/local-iglu-apikey \\\n  -d "local_iglu_apikey=${new_local_iglu_apikey}" \\\n  -u username:password\n')),(0,r.kt)("p",null,"Adds provided apikey to the section of local Iglu Server in the iglu resolver json config. Restarts to Stream Enrich to activate the changes."),(0,r.kt)("p",null,"Return status 200 means that apikey is added and Stream Enrich is restarted successfully."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Apikey must follow the UUID format."),(0,r.kt)("h4",{id:"changing-credentials-for-basic-http-authentication"},"Changing credentials for basic HTTP authentication"),(0,r.kt)("p",null,"As of version 0.13.0, this endpoint doesn't accept new passwords shorter than 8 chars and with a score lower than 4 according to ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/trustelem/zxcvbn"},"zxcvbn")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/control-plane/credentials\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/credentials \\\n  -d "new_username=${new_username}&new_password=${new_password}" \\\n  -u username:password\n')),(0,r.kt)("p",null,"Changes the credentials for basic HTTP authentication."),(0,r.kt)("p",null,"You will get always empty reply from the server because caddy server will be restarted after credentials are submitted and the connection will be lost until caddy server is up and running."),(0,r.kt)("h4",{id:"add-domain-name"},"Add domain name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/control-plane/domain-name\ufeff\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -XPOST http://${snowplow_mini_ip}/control-plane/domain-name \\\n  -d "domain_name=${registered_domain_name}" \\\n  -u username:password\n')),(0,r.kt)("p",null,"Adds domain name for Snowplow Mini instance. After adding the domain name, your connection will be secured with TLS automatically. Make sure that given domain name is resolving to Snowplow Mini instance IP address."),(0,r.kt)("p",null,"You will get always empty reply from the server because caddy server will be restarted after the domain name is submitted and the connection will be lost until caddy server is up and running."),(0,r.kt)("h4",{id:"get-snowplow-mini-version"},"Get Snowplow Mini version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/control-plane/version\ufeff\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -XGET http://${snowplow_mini_ip}/control-plane/version \\\n  -u username:password\n")),(0,r.kt)("p",null,"Returns version of the running Snowplow Mini instance."),(0,r.kt)("h4",{id:"uploading-iglu-server-configuration"},"Uploading Iglu Server configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/control-plane/iglu-config\ufeff\n")),(0,r.kt)("p",null,"Example using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl http://${snowplow_mini_ip}/control-plane/iglu-config \\\n  -F "igluserverhocon=@${path_of_the_iglu_server_config}" \\\n  -u username:password\n')),(0,r.kt)("p",null,"Uploads Iglu Server configuration file and restarts the Iglu Server to activate uploaded configuration."),(0,r.kt)("p",null,"Return status 200 means that configuration is uploaded and Iglu Server is restarted successfully."))}u.isMDXComponent=!0}}]);