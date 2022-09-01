"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[22540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(d,".").concat(c)]||u[c]||s[c]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"IP Lookup enrichment",date:"2020-02-14",sidebar_position:9},r=void 0,l={unversionedId:"enriching-your-data/available-enrichments/ip-lookup-enrichment/index",id:"enriching-your-data/available-enrichments/ip-lookup-enrichment/index",title:"IP Lookup enrichment",description:"Summary",source:"@site/docs/enriching-your-data/available-enrichments/ip-lookup-enrichment/index.md",sourceDirName:"enriching-your-data/available-enrichments/ip-lookup-enrichment",slug:"/enriching-your-data/available-enrichments/ip-lookup-enrichment/",permalink:"/docs/enriching-your-data/available-enrichments/ip-lookup-enrichment/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/enriching-your-data/available-enrichments/ip-lookup-enrichment/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:9,frontMatter:{title:"IP Lookup enrichment",date:"2020-02-14",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"YAUAA enrichment",permalink:"/docs/enriching-your-data/available-enrichments/yauaa-enrichment/"},next:{title:"Custom JavaScript enrichment",permalink:"/docs/enriching-your-data/available-enrichments/custom-javascript-enrichment/"}},d={},p=[{value:"Summary",id:"summary",level:2},{value:"Overview",id:"overview",level:2},{value:"Setting up this Enrichment",id:"setting-up-this-enrichment",level:2},{value:"1. Decide which databases you\u2019d like to use and download them",id:"1-decide-which-databases-youd-like-to-use-and-download-them",level:3},{value:"2. Upload the databases to a location on your cloud",id:"2-upload-the-databases-to-a-location-on-your-cloud",level:3},{value:"3. Configure the enrichment for your pipeline",id:"3-configure-the-enrichment-for-your-pipeline",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Example minimal configuration",id:"example-minimal-configuration",level:4},{value:"On AWS",id:"on-aws",level:5},{value:"On GCS",id:"on-gcs",level:5},{value:"Example full configuration",id:"example-full-configuration",level:4},{value:"On AWS",id:"on-aws-1",level:5},{value:"On GCS",id:"on-gcs-1",level:5},{value:"Output",id:"output",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This enrichment uses\xa0",(0,i.kt)("a",{parentName:"p",href:"https://www.maxmind.com/en/geoip2-databases"},"MaxMind"),"\xa0databases to look up useful data based on the IP address collected by your Snowplow tracker(s)."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"When a user browses your site or app their IP address is collected. MaxMind maintains databases of additional points of information like geographic location, second level domain names (acme.com), Internet Service Provider, organization name and several other data points publicly associated with a given IP address."),(0,i.kt)("p",null,"The IP lookup enrichment uses MaxMind databases in order to take the IP address collected and add additional data points to every event generated by the user with a given IP address."),(0,i.kt)("p",null,"Some of the databases MaxMind maintains require a commercial subscription with MaxMind."),(0,i.kt)("h2",{id:"setting-up-this-enrichment"},"Setting up this Enrichment"),(0,i.kt)("h3",{id:"1-decide-which-databases-youd-like-to-use-and-download-them"},"1","."," Decide which databases you\u2019d like to use and download them"),(0,i.kt)("p",null,"MaxMind offers five different databases with information on different IP addresses which can be used with Snowplow, one free:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.maxmind.com/geoip/geoip2/geolite2/"},"GeoLite2 Free Database"),", which contains geographic information (e.g. country) by IP address")),(0,i.kt)("p",null,"And four paid for databases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.maxmind.com/en/geoip2-city?rld=snowplow"},"GeoIP2 City"),", which also contains geographic information, but that with a lot more precision and coverage than that found in the GeoLite2 Free Database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.maxmind.com/en/geoip2-isp-database?rld=snowplow"},"GeoIP2 ISP"),", which contains information about the ISP serving that IP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.maxmind.com/en/geoip2-domain-name-database?rld=snowplow"},"GeoIP2 Domain"),", which contains information about the domain at that IP address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.maxmind.com/en/geoip2-connection-type-database?rld=snowplow"},"GeoIP2 Connection Type"),", which contains information about the connection type at that IP address.")),(0,i.kt)("p",null,"You need to decide which of the different Maxmind databases listed above you wish to enrich your data with, download the .mmdb files and then setup the enrichment configuration accordingly."),(0,i.kt)("h3",{id:"2-upload-the-databases-to-a-location-on-your-cloud"},"2","."," Upload the databases to a location on your cloud"),(0,i.kt)("p",null,"Once downloaded, take the .mmdb file(s) and upload them to a location on your cloud:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Amazon S3 (if running Snowplow on AWS) e.g. s3://my-private-bucket/third-party/maxmind"),(0,i.kt)("li",{parentName:"ul"},"Google Cloud Storage (if running Snowplow on GCS) e.g. gs://my-private-bucket/third-party/maxmind")),(0,i.kt)("p",null,"When the database(s) need updating in future you can simply download the latest version and overwrite this file in your storage."),(0,i.kt)("p",null,"MaxMind also offer a method to\xa0",(0,i.kt)("a",{parentName:"p",href:"https://dev.maxmind.com/geoip/geoipupdate/"},"download and update their databases programmatically"),"."),(0,i.kt)("h3",{id:"3-configure-the-enrichment-for-your-pipeline"},"3","."," Configure the enrichment for your pipeline"),(0,i.kt)("p",null,"Snowplow BDP customers can enable the IP Lookup enrichment for your pipeline ",(0,i.kt)("a",{parentName:"p",href:"/docs/enriching-your-data/configuring-enrichments/"},"in the Snowplow console.")," Open Source will need to upload the enrichment json for use in their Snowplow pipeline."),(0,i.kt)("p",null,"There are four possible fields you can add to the \u201cparameters\u201d section of the enrichment configuration JSON: \u201cgeo\u201d, \u201cisp\u201d, \u201cdomain\u201d, and \u201cconnectionType\u201d:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"database"),"\xa0field contains the name of the MaxMind database file."),(0,i.kt)("li",{parentName:"ul"},"The\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"uri"),"\xa0field contains the URI of the bucket in which the database file is found. This can have either\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"http:"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"s3:"),"\xa0or\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"gs:"),"\xa0as the scheme and must not end with a trailing slash.")),(0,i.kt)("p",null,"It is important to note that accepted database filenames are the strings which are allowed in the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"database"),"\xa0subfield. If the file name you provide is not one of these, the enrichment JSON will fail validation."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ENRICHMENT PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:null},"VALID DATABASE NAMES"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo")),(0,i.kt)("td",{parentName:"tr",align:null},'"GeoLite2-City.mmdb"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"GeoIP2-City.mmdb"'),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"isp")),(0,i.kt)("td",{parentName:"tr",align:null},'"GeoIP2-ISP.mmdb"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain")),(0,i.kt)("td",{parentName:"tr",align:null},'"GeoIP2-Domain.mmdb"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connectionType")),(0,i.kt)("td",{parentName:"tr",align:null},'"GeoIP2-Connection-Type.mmdb"')))),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/ip_lookups/jsonschema/2-0-0"},"Schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/config/enrichments/ip_lookups.json"},"Example"))),(0,i.kt)("h4",{id:"example-minimal-configuration"},"Example minimal configuration"),(0,i.kt)("h5",{id:"on-aws"},"On AWS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schema": "iglu:com.snowplowanalytics.snowplow/ip_lookups/jsonschema/2-0-0",\n    "data": {\n        "name": "ip_lookups",\n        "vendor": "com.snowplowanalytics.snowplow",\n        "enabled": true,\n        "parameters": {\n            "geo": {\n                "database": "GeoLite2-City.mmdb",\n                "uri": "s3://my-private-bucket/third-party/maxmind"\n            }\n        }\n    }\n}\n')),(0,i.kt)("h5",{id:"on-gcs"},"On GCS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schema": "iglu:com.snowplowanalytics.snowplow/ip_lookups/jsonschema/2-0-0",\n    "data": {\n        "name": "ip_lookups",\n        "vendor": "com.snowplowanalytics.snowplow",\n        "enabled": true,\n        "parameters": {\n            "geo": {\n                "database": "GeoLite2-City.mmdb",\n                "uri": "gs://my-private-bucket/third-party/maxmind"\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"In the configurations above, we are enabling this enrichment to take all IP addresses from each event and do a lookup against the GeoLite2-City.mmdb."),(0,i.kt)("p",null,"The parameters to set start with the type of MaxMind database we are accessing (in this case the \u201cgeo\u201d type). Then we specify the name of the database file, and the URI it\u2019s available at."),(0,i.kt)("p",null,"When configuring the enrichment you will replace the following string\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"my-private-bucket/third-party/maxmind"),"\xa0with the path to your hosted database."),(0,i.kt)("p",null,"If we were to enable this enrichment as shown, we would see the following columns in our data warehouse get populated with data for a user with the IP Address 37.157.33.178:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"COLUMN NAME"),(0,i.kt)("th",{parentName:"tr",align:null},"SAMPLE DATA"),(0,i.kt)("th",{parentName:"tr",align:null},"PURPOSE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo_country")),(0,i.kt)("td",{parentName:"tr",align:null},"GB"),(0,i.kt)("td",{parentName:"tr",align:null},"Country of IP origin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo_region")),(0,i.kt)("td",{parentName:"tr",align:null},"ENG"),(0,i.kt)("td",{parentName:"tr",align:null},"Region of IP origin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo_city")),(0,i.kt)("td",{parentName:"tr",align:null},"London"),(0,i.kt)("td",{parentName:"tr",align:null},"City of IP origin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo_zipcode")),(0,i.kt)("td",{parentName:"tr",align:null},"EC2A"),(0,i.kt)("td",{parentName:"tr",align:null},"Zip (postal) code of IP origin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo_latitude")),(0,i.kt)("td",{parentName:"tr",align:null},"51.5237"),(0,i.kt)("td",{parentName:"tr",align:null},"An approximate latitude (coordinates)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo_longitude")),(0,i.kt)("td",{parentName:"tr",align:null},"-","0.089"),(0,i.kt)("td",{parentName:"tr",align:null},"An approximate longitude (coordinates)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo_region_name")),(0,i.kt)("td",{parentName:"tr",align:null},"England"),(0,i.kt)("td",{parentName:"tr",align:null},"Region of IP origin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geo_timezone")),(0,i.kt)("td",{parentName:"tr",align:null},"Europe/London"),(0,i.kt)("td",{parentName:"tr",align:null},"Timezone of IP origin")))),(0,i.kt)("h4",{id:"example-full-configuration"},"Example full configuration"),(0,i.kt)("p",null,"To extend this enrichment for the additional databases offered by Maxmind we would simply repeat the process for the other databases:"),(0,i.kt)("h5",{id:"on-aws-1"},"On AWS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schema": "iglu:com.snowplowanalytics.snowplow/ip_lookups/jsonschema/2-0-0",\n    "data": {\n        "name": "ip_lookups",\n        "vendor": "com.snowplowanalytics.snowplow",\n        "enabled": true,\n        "parameters": {\n            "geo": {\n                "database": "GeoIP2-City.mmdb",\n                "uri": "s3://my-private-bucket/third-party/maxmind"\n            },\n            "isp": {\n                "database": "GeoIP2-ISP.mmdb",\n                "uri": "s3://my-private-bucket/third-party/maxmind"\n            },\n            "domain": {\n                "database": "GeoIP2-Domain.mmdb",\n                "uri": "s3://my-private-bucket/third-party/maxmind"\n            },\n            "connectionType": {\n                "database": "GeoIP2-Connection-Type.mmdb",\n                "uri": "s3://my-private-bucket/third-party/maxmind"\n            }\n        }\n    }\n}\n')),(0,i.kt)("h5",{id:"on-gcs-1"},"On GCS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "schema": "iglu:com.snowplowanalytics.snowplow/ip_lookups/jsonschema/2-0-0",\n    "data": {\n        "name": "ip_lookups",\n        "vendor": "com.snowplowanalytics.snowplow",\n        "enabled": true,\n        "parameters": {\n            "geo": {\n                "database": "GeoIP2-City.mmdb",\n                "uri": "gs://my-private-bucket/third-party/maxmind"\n            },\n            "isp": {\n                "database": "GeoIP2-ISP.mmdb",\n                "uri": "gs://my-private-bucket/third-party/maxmind"\n            },\n            "domain": {\n                "database": "GeoIP2-Domain.mmdb",\n                "uri": "gs://my-private-bucket/third-party/maxmind"\n            },\n            "connectionType": {\n                "database": "GeoIP2-Connection-Type.mmdb",\n                "uri": "gs://my-private-bucket/third-party/maxmind"\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The data from these databases would then be loaded into the following columns:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"COLUMN NAME"),(0,i.kt)("th",{parentName:"tr",align:null},"PURPOSE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ip_isp")),(0,i.kt)("td",{parentName:"tr",align:null},"ISP name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ip_organization")),(0,i.kt)("td",{parentName:"tr",align:null},"Organization name for larger networks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ip_domain")),(0,i.kt)("td",{parentName:"tr",align:null},"Second level domain name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ip_netspeed")),(0,i.kt)("td",{parentName:"tr",align:null},"Indication of connection type (dial-up, cellular, cable/DSL)")))),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"This enrichment adds a new context to the enriched event with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/master/schemas/com.iab.snowplow/spiders_and_robots/jsonschema/1-0-0"},"this schema"),"."))}s.isMDXComponent=!0}}]);