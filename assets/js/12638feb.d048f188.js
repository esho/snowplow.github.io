"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[15440],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(b,s(s({ref:n},p),{},{components:r})):t.createElement(b,s({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63805:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=r(87462),o=(r(67294),r(3905));const a={title:"Spark",date:"2020-08-26",sidebar_position:20},s=void 0,c={unversionedId:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/spark/index",id:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/spark/index",title:"Spark",description:"The Spark job reads bad rows from an S3 location and stores the recovered payloads in Kinesis, unrecovered and unrecoverable in other S3 buckets.",source:"@site/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/spark/index.md",sourceDirName:"managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/spark",slug:"/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/spark/",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/spark/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/spark/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:20,frontMatter:{title:"Spark",date:"2020-08-26",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Flink",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/running/flink/"},next:{title:"Monitoring",permalink:"/docs/managing-data-quality/event-recovery-for-bdp-users/manual-event-recovery-for-snowplow-bdp/monitoring/"}},l={},i=[{value:"Building",id:"building",level:4},{value:"Running",id:"running",level:4}],p={toc:i};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Spark job reads bad rows from an S3 location and stores the recovered payloads in Kinesis, unrecovered and unrecoverable in other S3 buckets."),(0,o.kt)("h4",{id:"building"},"Building"),(0,o.kt)("p",null,"To build the fat jar, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sbt spark/assembly\n")),(0,o.kt)("h4",{id:"running"},"Running"),(0,o.kt)("p",null,"Using the JAR directly (which is hosted at\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"s3://snowplow-hosted-assets/3-enrich/snowplow-event-recovery/"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark-submit \\\n  --class com.snowplowanalytcs.snowplow.event.recovery.Main \\\n  --master master-url \\\n  --deploy-mode deploy-mode \\\n  snowplow-event-recovery-spark-0.1.1.jar\n  --input s3://bad-rows-location/\n  --region eu-central-1\n  --output collector-payloads\n  --failedOutput s3://unrecovered-collector-payloads-location/\n  --unrecoverableOutput s3://unrecoverable-collector-payloads-location/\n  --config base64-encoded-configuration\n")),(0,o.kt)("p",null,"Or through an EMR step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"aws emr add-steps --cluster-id j-XXXXXXXX --steps \\\n  Name=snowplow-event-recovery,\\\n  Type=CUSTOM_JAR,\\\n  Jar=s3://snowplow-hosted-assets/3-enrich/snowplow-event-recovery/snowplow-event-recovery-spark-0.2.0.jar,\\\n  MainClass=com.snowplowanalytics.snowplow.event.recovery.Main,\\\n  Args=[--input,s3://bad-rows-location/,--region,eu-central-1,--output,collector-payloads,--failedOutput,s3://unrecovered-collector-payloads-location/,--unrecoverableOutput,s3://unrecoverable-collector-payloads-location/,--config,base64-encoded-configuration],\\\n  ActionOnFailure=CONTINUE\n")),(0,o.kt)("p",null,"Or using Dataflow Runner, with\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"emr-config.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.dataflowrunner/ClusterConfig/avro/1-1-0",\n  "data": {\n    "name": "emr-recovery-cluster",\n    "logUri": "s3://logs/",\n    "region": "eu-central-1",\n    "credentials": {\n      "accessKeyId": "{{secret "aws-access-key-id"}}",\n      "secretAccessKey": "{{secret "aws-secret-access-key"}}"\n    },\n    "roles": {\n      "jobflow": "EMR_EC2_DefaultRole",\n      "service": "{{ prefix }}-event-recovery"\n    },\n    "ec2": {\n      "amiVersion": "5.17.0",\n      "keyName": "some-key-name",\n      "location": {\n        "vpc": {\n          "subnetId": "subnet-sample"\n        }\n      },\n      "instances": {\n        "master": {\n          "type": "m1.medium",\n          "ebsConfiguration": {\n            "ebsOptimized": true,\n            "ebsBlockDeviceConfigs": [\n              {\n                "volumesPerInstance": 12,\n                "volumeSpecification": {\n                  "iops": 8,\n                  "sizeInGB": 10,\n                  "volumeType": "gp2"\n                }\n              }\n            ]\n          }\n        },\n        "core": {\n          "type": "m1.medium",\n          "count": 1\n        },\n        "task": {\n          "type": "m1.medium",\n          "count": 0,\n          "bid": "0.015"\n        }\n      }\n    },\n    "tags": [\n      {\n        "key": "client",\n        "value": "com.snplow.eng"\n      },\n      {\n        "key": "job",\n        "value": "recovery"\n      }\n    ],\n    "applications": [ "Hadoop", "Spark" ]\n  }\n}\n')),(0,o.kt)("p",null,"And\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"emr-playbook.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "schema": "iglu:com.snowplowanalytics.dataflowrunner/PlaybookConfig/avro/1-0-1",\n  "data": {\n    "region": "eu-west-1",\n    "credentials": {\n      "accessKeyId": "{{secret "aws-access-key-id"}}",\n      "secretAccessKey": "{{secret "aws-secret-access-key"}}"\n    },\n    "steps": [\n      {\n        "type": "CUSTOM_JAR",\n        "name": "Staging of bad rows",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "/usr/share/aws/emr/s3-dist-cp/lib/s3-dist-cp.jar",\n        "arguments": [\n          "--src",\n          "s3n://${BUCKET_ID}/recovery/enriched/bad/run=2019-01-12-15-04-23/",\n          "--dest",\n          "s3n://${BUCKET_ID}/stage_01_19/"\n        ]\n      },\n      {\n        "type": "CUSTOM_JAR",\n        "name": "Move to HDFS",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "/usr/share/aws/emr/s3-dist-cp/lib/s3-dist-cp.jar",\n        "arguments": [\n          "--src",\n          "s3n://${BUCKET_ID}/stage_01_19/",\n          "--dest",\n          "hdfs:///local/to-recover/",\n          "--outputCodec",\n          "none"\n        ]\n      },\n      {\n        "type": "CUSTOM_JAR",\n        "name": "snowplow-event-recovery",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "command-runner.jar",\n        "arguments": [\n          "spark-submit",\n          "--class",\n          "com.snowplowanalytics.snowplow.event.recovery.Main",\n          "--master",\n          "yarn",\n          "--deploy-mode",\n          "cluster",\n          "s3://bad-rows/snowplow-event-recovery-spark-0.2.0.jar",\n          "--input",\n          "hdfs:///local/to-recover/",\n          "--output",\n          "good-events",\n          "--region",\n          "eu-central-1",\n          "--failedOutput",\n          "s3://bad-rows/left",\n          "--unrecoverableOutput",\n          "s3://bad-rows/left/unrecoverable",\n          "--resolver",\n          "eyJzY2hlbWEiOiJpZ2x1OmNvbS5zbm93cGxvd2FuYWx5dGljcy5pZ2x1L3Jlc29sdmVyLWNvbmZpZy9qc29uc2NoZW1hLzEtMC0xIiwiZGF0YSI6eyJjYWNoZVNpemUiOjAsInJlcG9zaXRvcmllcyI6W3sibmFtZSI6ICJJZ2x1IENlbnRyYWwiLCJwcmlvcml0eSI6IDAsInZlbmRvclByZWZpeGVzIjogWyAiY29tLnNub3dwbG93YW5hbHl0aWNzIiBdLCJjb25uZWN0aW9uIjogeyJodHRwIjp7InVyaSI6Imh0dHA6Ly9pZ2x1Y2VudHJhbC5jb20ifX19LHsibmFtZSI6IlByaXYiLCJwcmlvcml0eSI6MCwidmVuZG9yUHJlZml4ZXMiOlsiY29tLnNub3dwbG93YW5hbHl0aWNzIl0sImNvbm5lY3Rpb24iOnsiaHR0cCI6eyJ1cmkiOiJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcGVlbC9zY2hlbWFzL21hc3RlciJ9fX1dfX0=",\n          "--config",\n          "eyJzY2hlbWEiOiJpZ2x1OmNvbS5zbm93cGxvd2FuYWx5dGljcy5zbm93cGxvdy9yZWNvdmVyaWVzL2pzb25zY2hlbWEvMi0wLTEiLCJkYXRhIjp7ImlnbHU6Y29tLnNub3dwbG93YW5hbHl0aWNzLnNub3dwbG93LmJhZHJvd3MvZW5yaWNobWVudF9mYWlsdXJlcy9qc29uc2NoZW1hLzEtMC0qIjpbeyJuYW1lIjoibWFpbi1mbG93IiwiY29uZGl0aW9ucyI6W10sInN0ZXBzIjpbXX1dLCJpZ2x1OmNvbS5zbm93cGxvd2FuYWx5dGljcy5zbm93cGxvdy5iYWRyb3dzL2FkYXB0ZXJfZmFpbHVyZXMvanNvbnNjaGVtYS8xLTAtKiI6W3sibmFtZSI6Im1haW4tZmxvdyIsImNvbmRpdGlvbnMiOltdLCJzdGVwcyI6W119XSwiaWdsdTpjb20uc25vd3Bsb3dhbmFseXRpY3Muc25vd3Bsb3cuYmFkcm93cy9zY2hlbWFfdmlvbGF0aW9ucy9qc29uc2NoZW1hLzEtMC0qIjpbeyJuYW1lIjoibWFpbi1mbG93IiwiY29uZGl0aW9ucyI6W10sInN0ZXBzIjpbXX1dLCJpZ2x1OmNvbS5zbm93cGxvd2FuYWx5dGljcy5zbm93cGxvdy5iYWRyb3dzL3RyYWNrZXJfcHJvdG9jb2xfdmlvbGF0aW9ucy9qc29uc2NoZW1hLzEtMC0qIjpbeyJuYW1lIjoibWFpbi1mbG93IiwiY29uZGl0aW9ucyI6W10sInN0ZXBzIjpbXX1dfX0="\n          \n        ]\n      }\n\n      {\n        "type": "CUSTOM_JAR",\n        "name": "Back to S3",\n        "actionOnFailure": "CANCEL_AND_WAIT",\n        "jar": "/usr/share/aws/emr/s3-dist-cp/lib/s3-dist-cp.jar",\n        "arguments": [\n          "--src",\n          "hdfs:///local/recovered/",\n          "--dest",\n          "s3n://${BUCKET_ID}/raw/"\n        ]\n      }\n    ],\n    "tags": [\n      {\n        "key": "client",\n        "value": "com.snowplowanalytics"\n      },\n      {\n        "key": "job",\n        "value": "recovery"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dataflow-runner run-transient --emr-config ./emr-config.json --emr-playbook ./emr-playbook.json\n")))}u.isMDXComponent=!0}}]);