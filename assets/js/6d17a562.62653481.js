"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[54759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},71359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={title:"R35 Upgrade Guide",date:"2021-01-27",sidebar_position:300},i=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/index",title:"R35 Upgrade Guide",description:"R35 is a release with major changes in pipeline architecture:",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r35-upgrade-guide/index.md",tags:[],version:"current",lastUpdatedAt:1661793546,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:300,frontMatter:{title:"R35 Upgrade Guide",date:"2021-01-27",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"1.0.0 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/1-0-0-upgrade-guide/"},next:{title:"R33/R34 Upgrade Guide",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/previous-versions/snowplow-rdb-loader/upgrade-guides/r33-upgrade-guide/"}},l={},d=[{value:"Assets",id:"assets",level:2},{value:"New architecture",id:"new-architecture",level:2},{value:"New configuration file",id:"new-configuration-file",level:2},{value:"SQS",id:"sqs",level:2},{value:"Directory structure",id:"directory-structure",level:2},{value:"Caution",id:"caution",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"R35 is a release with major changes in pipeline architecture:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No dependency on EmrEtlRunner (neither Shredder nor Loader can be lauched using EmrEtlRunner, marking deprecation of EmrEtlRunner)"),(0,r.kt)("li",{parentName:"ul"},"Loader is not an EMR step anymore"),(0,r.kt)("li",{parentName:"ul"},"Major changes in directory structure"),(0,r.kt)("li",{parentName:"ul"},"New dependency on SQS")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://discourse.snowplowanalytics.com/t/snowplow-rdb-loader-r35-relased/4700"},"Official announcement.")),(0,r.kt)("p",null,"This is the last release in 0.x branch and breaking changes still might be introduced in 1.0.0 release."),(0,r.kt)("h2",{id:"assets"},"Assets"),(0,r.kt)("p",null,"Both RDB Shredder and Loader have 0.19.0 version. Both published on S3:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"s3://snowplow-hosted-assets-eu-central-1/4-storage/rdb-shredder/snowplow-rdb-shredder-0.19.0.jar"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"s3://snowplow-hosted-assets-eu-central-1/4-storage/rdb-loader/snowplow-rdb-loader-0.19.0.jar")))),(0,r.kt)("p",null,"For RDB Loader however it is recommended to use the docker image, published on DockerHub: ",(0,r.kt)("inlineCode",{parentName:"p"},"snowplow/snowplow-rdb-loader:0.19.0")),(0,r.kt)("h2",{id:"new-architecture"},"New architecture"),(0,r.kt)("p",null,"Previous workflow was orchestrated by EmrEtlRunner, along with multiple S3DistCp steps, recovery scenarios and dedicated RDB Loader step. RDB Loader was finding out what data needs to be loaded by scanning S3."),(0,r.kt)("p",null,"In the new architecture there are two EMR steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"S3DistCp, copying enriched data sunk by ",(0,r.kt)("a",{parentName:"li",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/s3-loader/"},"S3 Loader"),', from S3 sink bucket (same as "enriched stream bucket") into ',(0,r.kt)("em",{parentName:"li"},"enriched data lake"),' (aka shredder input, similar as previously known "enriched archive")'),(0,r.kt)("li",{parentName:"ol"},"RDB Shredder, picking up all ",(0,r.kt)("em",{parentName:"li"},"unprocessed")," folders in enriched data lake, shredding data there and writing it into ",(0,r.kt)("em",{parentName:"li"},"shredded data lake"),' (previously known as "shredded archive")')),(0,r.kt)("p",null,"RDB Loader is a stand-alone long-running app, lauched either on EC2 box or Fargate cluster. The loading gets triggered by an SQS message, sent by Shredder after it finished processing a new batch."),(0,r.kt)("p",null,"RDB Shredder decides that folder is unprocessed by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Comparing folder names in ",(0,r.kt)("em",{parentName:"li"},"enriched data lake")," and in ",(0,r.kt)("em",{parentName:"li"},"shredded data lake"),". Every folder that is ",(0,r.kt)("strong",{parentName:"li"},"in")," enriched, but ",(0,r.kt)("strong",{parentName:"li"},"not in")," shredded will be considered unprocessed"),(0,r.kt)("li",{parentName:"ol"},"...except folders that don't have ",(0,r.kt)("inlineCode",{parentName:"li"},"shredding_complete.json")," file in their root. This file is written at the end of the job and indicates that job has completed successfully. Absence of this file means that shred job has been aborted.")),(0,r.kt)("p",null,"If you're upgrading from R34 or earlier it is strictly recommended to pick new paths for enriched and shredded archives in order to avoid double-loading OR make sure that there's a strict 1:1 correspondence between content of enriched and shredded archive."),(0,r.kt)("p",null,"We recommend to use either ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/dataflow-runner/"},"Dataflow Runner")," or boto3 script to launch scheduled S3DistCp and Shredder jobs. Here's an example of a Dataflow Runner playbook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.dataflowrunner/PlaybookConfig/avro/1-0-1",\n  "data": {\n    "region": "eu-central-1",\n    "credentials": {\n      "accessKeyId": "env",\n      "secretAccessKey": "env"\n    },\n    "steps": [\n      {\n        "type": "CUSTOM_JAR",\n        "name": "S3DistCp enriched data archiving",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "/usr/share/aws/emr/s3-dist-cp/lib/s3-dist-cp.jar",\n        "arguments": [\n            "--src", "s3://com-acme/enriched/sink/",\n            "--dest", "s3://com-acme/enriched/archive/run={{nowWithFormat "2006-01-02-15-04-05"}}/",\n            "--s3Endpoint", "s3-eu-central-1.amazonaws.com",\n            "--srcPattern", ".*",\n            "--outputCodec", "gz",\n            "--deleteOnSuccess"\n        ]\n      },\n\n      {\n        "type": "CUSTOM_JAR",\n        "name": "RDB Shredder",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "command-runner.jar",\n        "arguments": [\n            "spark-submit",\n            "--class", "com.snowplowanalytics.snowplow.shredder.Main",\n            "--master", "yarn",\n            "--deploy-mode", "cluster",\n            "s3://snowplow-hosted-assets-eu-central-1/4-storage/rdb-shredder/snowplow-rdb-shredder-0.19.0.jar",\n            "--iglu-config", "{{base64File "/home/snowplow/configs/snowplow/iglu_resolver.json"}}",\n            "--config", "{{base64File "/home/snowplow/configs/snowplow/config.hocon"}}"\n        ]\n      }\n    ],\n    "tags": [ ]\n  }\n}\n')),(0,r.kt)("p",null,"We recommend to launch RDB Loader as long-running docker image."),(0,r.kt)("h2",{id:"new-configuration-file"},"New configuration file"),(0,r.kt)("p",null,"Common configuration file, previously known as ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml")," and target JSON configuration file, previously known as ",(0,r.kt)("inlineCode",{parentName:"p"},"redshift.json")," have been replaced by a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/config.hocon.sample"},"single HOCON file"),"."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  # Human-readable identificator, can be random\n  "name": "Acme Redshift",\n  # Machine-readable unique identificator, must be UUID\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n\n  # Data Lake (S3) region\n  "region": "us-east-1",\n  # SQS topic name used by Shredder and Loader to communicate\n  "messageQueue": "messages.fifo",\n\n  # Shredder-specific configs\n  "shredder": {\n    # Path to enriched archive (must be populated separately with run=YYYY-MM-DD-hh-mm-ss directories)\n    "input": "s3://com-acme/ernched/archive/",\n    # Path to shredded output\n    "output": "s3://com-acme/shredded/good/",\n    # Path to data failed being processed\n    "outputBad": "s3://com-acje/shredded/bad/",\n    # Shredder output compression, GZIP or NONE\n    "compression": "GZIP"\n  },\n\n  # Optional. S3 path that holds JSONPaths\n  "jsonpaths": "s3://bucket/jsonpaths/",\n\n  # Schema-specific format settings (recommended to leave all three groups empty and use TSV as default)\n  # To make it compatible with R34, leave default = TSV and populate json array with things from blacklistTabular\n  "formats": {\n    # Format used by default (TSV or JSON)\n    "default": "TSV",\n    # Schemas to be shredded as JSONs, corresponding JSONPath files must be present. Automigrations will be disabled\n    "json": [ ],\n    # Schemas to be shredded as TSVs, presence of the schema on Iglu Server is necessary. Automigartions enabled\n    "tsv": [ ],\n    # Schemas that won\'t be loaded\n    "skip": [ ]\n  },\n\n  # Warehouse connection details, identical to storage target config \n  "storage": {\n    # Database, redshift is the only acceptable option\n    "type": "redshift",\n    # Redshift hostname\n    "host": "redshift.amazon.com",\n    # Database name\n    "database": "snowplow",\n    # Database port\n    "port": 5439,\n    # AWS Role ARN allowing Redshift to load data from S3\n    "roleArn": "arn:aws:iam::123456789012:role/RedshiftLoadRole",\n    # DB schema name\n    "schema": "atomic",\n    # DB user with permissions to load data\n    "username": "storage-loader",\n    # DB password\n    "password": "secret",\n    # Custom JDBC configuration\n    "jdbc": {"ssl": true},\n    # MAXERROR, amount of acceptable loading errors\n    "maxError": 10,\n    "compRows": 100000\n  },\n\n  # Additional steps. analyze, vacuum and transit_load are valid values\n  "steps": ["analyze"],\n\n  # Observability and logging opitons\n  "monitoring": {\n    # Snowplow tracking (optional)\n    "snowplow": null,\n    # Sentry (optional)\n    "sentry": null\n  }\n}\n')),(0,r.kt)("p",null,"If you need to use cross-batch deduplication - the file format remains the same for DynamoDB config."),(0,r.kt)("p",null,"CLI arguments also have changed. Both applications now accept only ",(0,r.kt)("inlineCode",{parentName:"p"},"--iglu-config")," with base64-encoded string representing ",(0,r.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"Iglu Resolver JSON")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--config")," with base64-encoded above HOCON. Loader also accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"--dry-run")," flag."),(0,r.kt)("h2",{id:"sqs"},"SQS"),(0,r.kt)("p",null,"SQS serves as message bus between Shredder and Loader. Loader expects to find there self-describing messages with instructions on what to load. The queue must be FIFO."),(0,r.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,r.kt)("p",null,"There are several major changes in shredder output directory structure:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Elements of the paths have changed from Iglu-compatible to shredder-specific, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"format")," now can be either ",(0,r.kt)("inlineCode",{parentName:"li"},"json")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"tsv")," (and not ",(0,r.kt)("inlineCode",{parentName:"li"},"jsonschema")," as before) and instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," (that could have been either ",(0,r.kt)("inlineCode",{parentName:"li"},"1-0-0")," or just ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),") it is always just ",(0,r.kt)("inlineCode",{parentName:"li"},"model")),(0,r.kt)("li",{parentName:"ol"},"There's no dedicated ",(0,r.kt)("inlineCode",{parentName:"li"},"atomic-events")," folder. It is replaced with unified ",(0,r.kt)("inlineCode",{parentName:"li"},"vendor=com.snowplowanalytics.snowplow/name=atomic/format=tsv/model=1")),(0,r.kt)("li",{parentName:"ol"},"There are no ",(0,r.kt)("inlineCode",{parentName:"li"},"shredded-types")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"shredded-tsv")," either, all types are in the root of the folder.")),(0,r.kt)("p",null,"Structure of the typical shredded folder now looks like following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"run=2021-01-27-18-35-00/\n   vendor=com.snowplowanalytics.snowplow/\n     name=atomic/\n       format=tsv/\n         model=1/\n   vendor=com.snowplowanalytics.snowplow/\n     name=ad_click/\n       format=json/\n         model=1/\n   vendor=nj.basjes/\n     name=yauaa_context/\n       format=tsv/\n         model=1/\n   shredding_complete.json\n   _SUCCESS\n")),(0,r.kt)("h2",{id:"caution"},"Caution"),(0,r.kt)("p",null,"We consider this version a public beta. Although it has been carefully tested in sandbox environments showing signficantly decreased AWS costs on associated infrastructure, it still haven't been used in production."),(0,r.kt)("p",null,"One known issue in this version is absence of protection against double-loading. If Loader receives the same SQS message multiple time (i.e. sent manually) - the same batch will be loaded multiple times."),(0,r.kt)("p",null,"We also reserve right to make other breaking API changes in next versions."))}c.isMDXComponent=!0}}]);