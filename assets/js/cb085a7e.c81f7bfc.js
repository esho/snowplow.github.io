"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[95701],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Spark transformer",date:"2022-04-04",sidebar_position:10},i=void 0,s={unversionedId:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/index",id:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/index",title:"Spark transformer",description:"For a high-level overview of the Transform process, see Transforming enriched data. For guidance on picking the right transformer app, see How to pick a transformer.",source:"@site/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/index.md",sourceDirName:"pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer",slug:"/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/spark-transformer/index.md",tags:[],version:"current",lastUpdatedAt:1663236058,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:10,frontMatter:{title:"Spark transformer",date:"2022-04-04",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Transforming enriched data",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/"},next:{title:"Stream transformer",permalink:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/stream-transformer/"}},l={},p=[{value:"Downloading the artefact",id:"downloading-the-artefact",level:2},{value:"Configuring the EMR cluster",id:"configuring-the-emr-cluster",level:2},{value:"Configuring <code>snowplow-transformer-batch</code>",id:"configuring-snowplow-transformer-batch",level:2},{value:"Running the Spark transformer",id:"running-the-spark-transformer",level:2},{value:"Preparing the Dataflow Runner playbook",id:"preparing-the-dataflow-runner-playbook",level:3},{value:"Submitting the job to EMR with Dataflow Runner",id:"submitting-the-job-to-emr-with-dataflow-runner",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For a high-level overview of the Transform process, see ",(0,a.kt)("a",{parentName:"em",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/"},"Transforming enriched data"),". For guidance on picking the right ",(0,a.kt)("inlineCode",{parentName:"em"},"transformer")," app, see ",(0,a.kt)("a",{parentName:"em",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/#how-to-pick-a-transformer"},"How to pick a transformer"),".")),(0,a.kt)("p",null,"The Spark-based transformer is a batch job designed to be deployed in an EMR cluster and process a bounded data set stored on S3."),(0,a.kt)("p",null,"In order to run it, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"snowplow-transformer-batch")," jar file (from version 3.0.0 this replaces the ",(0,a.kt)("inlineCode",{parentName:"li"},"snowplow-rdb-shredder")," asset)"),(0,a.kt)("li",{parentName:"ul"},"configuration files for the jar file"),(0,a.kt)("li",{parentName:"ul"},"an EMR cluster specification"),(0,a.kt)("li",{parentName:"ul"},"a way to spin up an EMR cluster and submit a job to it.")),(0,a.kt)("p",null,"You can use any suitable tool to periodically submit the transformer job to an EMR cluster. We recommend you use our purpose-built ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/dataflow-runner"},"Dataflow Runner")," tool. All the examples below assume that Dataflow Runner is being used. Refer to the app's ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/dataflow-runner/"},"documentation")," for more details."),(0,a.kt)("h2",{id:"downloading-the-artefact"},"Downloading the artefact"),(0,a.kt)("p",null,"The asset is published as a jar file attached to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/releases"},"Github release notes")," for each version."),(0,a.kt)("p",null,"It's also available in several S3 buckets that are accessible to an EMR cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"s3://snowplow-hosted-assets/4-storage/transformer-batch/snowplow-transformer-batch-4.1.0.jar\n\n-- or --\n\ns3://snowplow-hosted-{{ region }}/4-storage/transformer-batch/snowplow-transformer-batch-4.1.0.jar\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"region")," is one of ",(0,a.kt)("inlineCode",{parentName:"p"},"us-east-1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"us-east-2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west-1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west-2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"eu-central-1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"eu-west-2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ca-central-1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sa-east-1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ap-southeast-1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ap-southeast-2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ap-northeast-1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ap-northeast-2"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"ap-south-1"),". Pick the region of your EMR cluster."),(0,a.kt)("h2",{id:"configuring-the-emr-cluster"},"Configuring the EMR cluster"),(0,a.kt)("p",null,"Here's an example of an EMR cluster config file that can be used with Dataflow Runner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.snowplowanalytics.dataflowrunner/ClusterConfig/avro/1-1-0",\n  "data": {\n    "name": "RDB Transformer",\n    "region": "eu-central-1",\n    "logUri": "s3://com-acme/logs/",\n    "credentials": {\n      "accessKeyId": "env",\n      "secretAccessKey": "env"\n    },\n    "roles": {\n      "jobflow": "EMR_EC2_DefaultRole",\n      "service": "EMR_DefaultRole"\n    },\n    "ec2": {\n      "amiVersion": "6.2.0",\n      "keyName": "ec2-key-name",\n      "location": {\n        "vpc": {\n          "subnetId": "subnet-id"\n        }\n      },\n      "instances": {\n        "master": {\n          "type": "m4.large",\n          "ebsConfiguration": {\n            "ebsOptimized": true,\n            "ebsBlockDeviceConfigs": []\n          }\n        },\n        "core": {\n          "type": "r4.xlarge",\n          "count": 1\n        },\n        "task": {\n          "type": "m4.large",\n          "count": 0,\n          "bid": "0.015"\n        }\n      }\n    },\n    "tags": [],\n    "bootstrapActionConfigs": [],\n    "configurations": [\n      {\n        "classification": "core-site",\n        "properties": {\n          "Io.file.buffer.size": "65536"\n        },\n        "configurations": []\n      },\n      {\n        "classification": "yarn-site",\n        "properties": {\n          "yarn.nodemanager.resource.memory-mb": "57344",\n          "yarn.scheduler.maximum-allocation-mb": "57344",\n          "yarn.nodemanager.vmem-check-enabled": "false"\n        },\n        "configurations": []\n      },\n      {\n        "classification": "spark",\n        "properties": {\n          "maximizeResourceAllocation": "false"\n        },\n        "configurations": []\n      },\n      {\n        "classification": "spark-defaults",\n        "properties": {\n          "spark.executor.memory": "7G",\n          "spark.driver.memory": "7G",\n          "spark.driver.cores": "3",\n          "spark.yarn.driver.memoryOverhead": "1024",\n          "spark.default.parallelism": "24",\n          "spark.executor.cores": "1",\n          "spark.executor.instances": "6",\n          "spark.yarn.executor.memoryOverhead": "1024",\n          "spark.dynamicAllocation.enabled": "false"\n        },\n        "configurations": []\n      }\n    ],\n    "applications": [\n      "Hadoop",\n      "Spark"\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"This is a typical cluster configuration for processing ~1.5GB of uncompressed enriched data."),(0,a.kt)("p",null,"You need to change the following settings with your own values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"region"),": the AWS region of your EMR cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logUri"),": the location of an S3 bucket where EMR logs will be written"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ec2.keyName")," (optional): The name of an EC2 key pair that you\u2019ll use to shh into the EMR cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ec2.location.vpc.subnetId"),": your VPN subnet ID.")),(0,a.kt)("h2",{id:"configuring-snowplow-transformer-batch"},"Configuring ",(0,a.kt)("inlineCode",{parentName:"h2"},"snowplow-transformer-batch")),(0,a.kt)("p",null,"The transformer takes two configuration files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"config.hocon")," file with application settings"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("inlineCode",{parentName:"li"},"iglu_resolver.json")," file with the resolver configuration for your ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/snowplow/iglu"},"Iglu")," schema registry.")),(0,a.kt)("p",null,"An example of the minimal required config for the Spark transformer can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.batch.config.minimal.hocon"},"here")," and a more detailed one ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-rdb-loader/blob/master/config/transformer.batch.config.reference.hocon"},"here"),". For details about each setting, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/loaders-storage-targets/snowplow-rdb-loader-3-0-0/transforming-enriched-data/rdb-transformer-configuration-reference/"},"configuration reference"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-resolver/"},"here")," for details on how to prepare the Iglu resolver file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," All self-describing schemas for events processed by the transformer ",(0,a.kt)("strong",{parentName:"p"},"must")," be hosted on ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-server/"},"Iglu Server")," 0.6.0 or above. ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/iglu-central/"},"Iglu Central")," is a registry containing Snowplow-authored schemas. If you want to use them alongside your own, you will need to add it to your resolver file. Keep it mind that it could override your own private schemas if you give it higher priority. For details on this see ",(0,a.kt)("a",{parentName:"p",href:"https://discourse.snowplow.io/t/important-changes-to-iglu-centrals-api-for-schema-lists/5720#how-will-this-affect-my-snowplow-pipeline-3"},"here"),"."),(0,a.kt)("h2",{id:"running-the-spark-transformer"},"Running the Spark transformer"),(0,a.kt)("p",null,"To run the transformer on EMR with Dataflow Runner, you need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the EMR cluster config (see ",(0,a.kt)("a",{parentName:"li",href:"#configuring-the-emr-cluster"},"Configuring the EMR cluster")," above)"),(0,a.kt)("li",{parentName:"ul"},"a Dataflow Runner playbook (a DAG with steps to be submitted to the EMR cluster).")),(0,a.kt)("h3",{id:"preparing-the-dataflow-runner-playbook"},"Preparing the Dataflow Runner playbook"),(0,a.kt)("p",null,"A typical playbook can look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.snowplowanalytics.dataflowrunner/PlaybookConfig/avro/1-0-1",\n  "data": {\n    "region": "eu-central-1",\n    "credentials": {\n      "accessKeyId": "env",\n      "secretAccessKey": "env"\n    },\n    "steps": [\n      {\n        "type": "CUSTOM_JAR",\n        "name": "S3DistCp enriched data archiving",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "/usr/share/aws/emr/s3-dist-cp/lib/s3-dist-cp.jar",\n        "arguments": [\n          "--src", "s3://com-acme/enriched/sink/",\n          "--dest", "s3://com-acme/enriched/archive/run={{nowWithFormat "2006-01-02-15-04-05"}}/",\n          "--s3Endpoint", "s3-eu-central-1.amazonaws.com",\n          "--srcPattern", ".*",\n          "--outputCodec", "gz",\n          "--deleteOnSuccess"\n        ]\n      },\n      {\n        "type": "CUSTOM_JAR",\n        "name": "RDB Transformer",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "command-runner.jar",\n        "arguments": [\n          "spark-submit",\n          "--class", "com.snowplowanalytics.snowplow.rdbloader.shredder.batch.Main",\n          "--master", "yarn",\n          "--deploy-mode", "cluster",\n          "s3://snowplow-hosted-assets-eu-central-1/4-storage/transformer-batch/snowplow-transformer-batch-4.1.0.jar",\n          "--iglu-config", "{{base64File "/home/snowplow/configs/snowplow/iglu_resolver.json"}}",\n          "--config", "{{base64File "/home/snowplow/configs/snowplow/config.hocon"}}"\n        ]\n      }\n    ],\n    "tags": []\n  }\n}\n')),(0,a.kt)("p",null,"This playbook consists of two steps. The first one copies the enriched data to a dedicated directory, from which the transformer will read it. The second step is the transformer Spark job that transforms the data."),(0,a.kt)("p",null,"You need to change the following settings with your own values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"region"),": the AWS region of the EMR cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"--src"'),": the bucket in which your enriched data is sunk by Enrich"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"--dest"'),": the bucket in which the data for your enriched data lake lives.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},'"--src"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"--dest"')," settings above apply only to the ",(0,a.kt)("inlineCode",{parentName:"p"},"s3DistCp")," step of the playbook. The source and destination buckets for the transformer step are configured via the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.hocon")," file."),(0,a.kt)("h3",{id:"submitting-the-job-to-emr-with-dataflow-runner"},"Submitting the job to EMR with Dataflow Runner"),(0,a.kt)("p",null,"Here's an example of putting all of the above together on a transient EMR cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./dataflow-runner run-transient \\\n  --emr-config path/to/cluster.conig \\\n  --emr-playbook path/to/playbook\n")),(0,a.kt)("p",null,"This will spin up the cluster with the above configuration, submit the steps from the playbook, and terminate the cluster once all steps are completed."),(0,a.kt)("p",null,"For more examples on running EMR jobs with Dataflow Runner, as well as details on cluster configurations and playbooks, see the app's ",(0,a.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/dataflow-runner/"},"documentation"),". It also details how you can submit steps to a persistent EMR cluster."))}d.isMDXComponent=!0}}]);