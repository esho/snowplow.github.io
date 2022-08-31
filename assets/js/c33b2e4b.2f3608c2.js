"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[38574],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return a?n.createElement(m,i(i({ref:e},c),{},{components:a})):n.createElement(m,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15862:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={toc:[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Download the JavaScript tracker file",id:"download-the-javascript-tracker-file",level:2},{value:"gzip and rename the file",id:"gzip-and-rename-the-file",level:2},{value:"Uploading to Amazon Web Services",id:"uploading-to-amazon-web-services",level:2},{value:"Create a bucket for the JavaScript Tracker",id:"create-a-bucket-for-the-javascript-tracker",level:3},{value:"Upload the JavaScript",id:"upload-the-javascript",level:3},{value:"Configuring metadata",id:"configuring-metadata",level:4},{value:"Create your CloudFront distribution",id:"create-your-cloudfront-distribution",level:3},{value:"Testing your JavaScript file on CloudFront",id:"testing-your-javascript-file-on-cloudfront",level:3}]};function i(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pre-requisites"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/self-hosting-snowplow-js#pre-requisites"}),"Pre-requisites"),(0,r.kt)("p",null,"For the purposes of this guide, we are going to assume that you want to serve the standard\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),"\xa0from CloudFront. To accomplish this, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An account with\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aws.amazon.com/"},"Amazon Web Services")),(0,r.kt)("li",{parentName:"ul"},"S3 and CloudFront enabled within your AWS account")),(0,r.kt)("h2",{id:"download-the-javascript-tracker-file"},"Download the JavaScript tracker file"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"https://github.com/snowplow/snowplow-javascript-tracker/releases")," and download the latest version of the Snowplow JavaScript Tracker sp.js file"),(0,r.kt)("h2",{id:"gzip-and-rename-the-file"},"gzip and rename the file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rename ",(0,r.kt)("inlineCode",{parentName:"li"},"sp.js")," to a random 8 character string to reduce the chance of AdBlockers preventing the script from loading e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"gh7rnghq.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gzip")," the file to reduce the file size and reduce associated cloud storage and egress costs.")),(0,r.kt)("p",null,"From a terminal / command prompt window, navigate to where you have downloaded the file and run:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gzip -c sp.js > gh7rnghq.js")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"N.B.")," on Windows you may need to ",(0,r.kt)("a",{parentName:"p",href:"http://gnuwin32.sourceforge.net/packages/gzip.htm"},"download the gzip binaries")),(0,r.kt)("p",null,"We will continue referring to the file as ",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js")," throughout this guide, however where ",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js")," is mentioned we are referring to your renamed and gzipped file."),(0,r.kt)("h2",{id:"uploading-to-amazon-web-services"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/self-hosting-snowplow-js#self-hosting-instructions"}),"Uploading to Amazon Web Services"),(0,r.kt)("h3",{id:"create-a-bucket-for-the-javascript-tracker"},"Create a bucket for the JavaScript Tracker"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://s3.console.aws.amazon.com/s3/home"},"S3 within AWS")," and then create a new bucket within your Amazon S3 account to store ",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Bucket Name")),(0,r.kt)("td",{parentName:"tr",align:null},"For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"[company-name]-sp-js"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"AWS Region")),(0,r.kt)("td",{parentName:"tr",align:null},"For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"EU (London) eu-west-2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Block Public Access settings for this bucket")),(0,r.kt)("td",{parentName:"tr",align:null},"Deselect: *",(0,r.kt)("strong",{parentName:"td"},"*Block ",(0,r.kt)("em",{parentName:"strong"},"all")," public access**"))))),(0,r.kt)("p",null,"You can leave all other settings as their defaults."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Create Bucket"),"."),(0,r.kt)("h3",{id:"upload-the-javascript"},"Upload the JavaScript"),(0,r.kt)("p",null,"You want to upload the\xa0",(0,r.kt)("strong",{parentName:"p"},"minified"),"\xa0version of the Snowplow JavaScript, which is called\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),", that you downloaded in an earlier step. If you haven't downloaded it yet, you can obtain the latest version of the JavaScript from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow-javascript-tracker/releases"},"Github releases"),"."),(0,r.kt)("p",null,"Now you're ready to upload the JavaScript Tracker into your S3 bucket."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your new bucket by clicking on your Buckets name"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create folder")," and create a new folder which represents the version of the JavaScript Tracker you are uploading. This will help with any browser caching issues as you update your tracker in the future.",(0,r.kt)("br",{parentName:"li"}),"If you downloaded Version 3.0.0 then create a folder called ",(0,r.kt)("inlineCode",{parentName:"li"},"3.0.0")),(0,r.kt)("li",{parentName:"ol"},"Navigate into your new folder, click\xa0",(0,r.kt)("strong",{parentName:"li"},"Upload"),", click ",(0,r.kt)("strong",{parentName:"li"},"Add Files"),"\xa0and browse to your file"),(0,r.kt)("li",{parentName:"ol"},"Your file should now be present in the ",(0,r.kt)("strong",{parentName:"li"},"Files and folders")," section"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Additoinal upload options")," to drop down to extra settings"),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Access control list (ACL)")," pane, you must select ",(0,r.kt)("strong",{parentName:"li"},"Read")," within the ",(0,r.kt)("strong",{parentName:"li"},"Objects")," column on ",(0,r.kt)("strong",{parentName:"li"},"Everyone (public access)")," row. You may need to confirm you understand the effects of this change within the UI."),(0,r.kt)("li",{parentName:"ol"},"Before uploading, we must now we will configure the required metadata for a gzipped file and the cache control for Cloudfront.")),(0,r.kt)("h4",{id:"configuring-metadata"},"Configuring metadata"),(0,r.kt)("p",null,"First we will set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Encoding")," header."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,r.kt)("strong",{parentName:"li"},"Metadata")," section within the ",(0,r.kt)("strong",{parentName:"li"},"Addtional upload options.")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Metadata")),(0,r.kt)("li",{parentName:"ol"},"Add Type: ",(0,r.kt)("strong",{parentName:"li"},"System defined"),", Key: ",(0,r.kt)("strong",{parentName:"li"},"Content-Encoding"),", Value: ",(0,r.kt)("strong",{parentName:"li"},"gzip"))),(0,r.kt)("p",null,"Now we will add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control")," header."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Metadata")),(0,r.kt)("li",{parentName:"ol"},"Add Type: ",(0,r.kt)("strong",{parentName:"li"},"System defined"),", Key: ",(0,r.kt)("strong",{parentName:"li"},"Cache-Control"),", Value: ",(0,r.kt)("strong",{parentName:"li"},"max-age=315360000")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Edit metadata"))),(0,r.kt)("p",null,"This sets your items to expire in 10 years, that is 10x365x24x60x60 = 315,360,000."),(0,r.kt)("p",null,"We recommend that you set the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control max-age"),"\xa0property on the file. This property determines\xa0",(0,r.kt)("em",{parentName:"p"},"both"),"\xa0how long Cloudfront caches\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),"\xa0in its edge locations, and crucially, how long individual browsers cache\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),"\xa0before repinging Cloudfront for a fresh copy. By setting a long expiration date, you can reduce the number of browser requests for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),", which can significantly decrease your Cloudfront costs."),(0,r.kt)("p",null,"The only disadvantage of a long expiration is that you need to find a way to\xa0",(0,r.kt)("em",{parentName:"p"},"force"),"\xa0end users to fetch a fresh copy of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),"\xa0when you upgrade to a newer version. However as you have created a versioned folder, this is easily managed by saving your new version to a new folder in your S3 bucket, and updating your Snowplow tags to point to the new version."),(0,r.kt)("p",null,"Your metadata should now look something like this:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System defined"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache-Control"),(0,r.kt)("td",{parentName:"tr",align:null},"max-age=315360000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System defined"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/javascript")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System defined"),(0,r.kt)("td",{parentName:"tr",align:null},"Cotent-Encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"gzip")))),(0,r.kt)("p",null,"Now scroll to the bottom and click\xa0",(0,r.kt)("strong",{parentName:"p"},"Upload"),"\xa0to upload the JavaScript file into your bucket. When done, you should have something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(74857).Z,width:"3360",height:"1122"})),(0,r.kt)("h3",{id:"create-your-cloudfront-distribution"},"Create your CloudFront distribution"),(0,r.kt)("p",null,"Now you are ready to create the CloudFront distribution which will serve your JavaScript. Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudfront/home"},"CloudFront within AWS"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create Distribution")," and then ",(0,r.kt)("strong",{parentName:"li"},"Get Started")),(0,r.kt)("li",{parentName:"ol"},"Use the table below to set all the required options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Origin Domain Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[","Bucket Name","]",".s3.amazonaws.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"e.g. snowplow-static-js.s3.amazonaws.com"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Other options"),(0,r.kt)("td",{parentName:"tr",align:null},"Leave as default")))),(0,r.kt)("p",null,"Click\xa0",(0,r.kt)("strong",{parentName:"p"},"Create Distribution"),"\xa0and then you should see AWS beginning to create the distribution."),(0,r.kt)("p",null,"Note down your CloudFront distribution's\xa0",(0,r.kt)("strong",{parentName:"p"},"Domain Name"),"\xa0- e.g.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"http://d1weib8el6blz6.cloudfront.net"),(0,r.kt)("br",{parentName:"p"}),"\n","You will need this later when you integrate Snowplow into your website."),(0,r.kt)("h3",{id:"testing-your-javascript-file-on-cloudfront"},"Testing your JavaScript file on CloudFront"),(0,r.kt)("p",null,"Before testing, take a 10 minute coffee break (that's how long CloudFront takes to synchronize)."),(0,r.kt)("p",null,"Done? Now just check that you can access your JavaScript file over both HTTP and HTTPS using a browser,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"wget"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://{{SUBDOMAIN}}.cloudfront.net/{{VERSION}}/sp.js\nhttps://{{SUBDOMAIN}}.cloudfront.net/{{VERSION}}/sp.js\n")),(0,r.kt)("p",null,"If you have any problems, then double-check your CloudFront distribution's URL, and check the permissions on your\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),"\xa0file: it must have Read permissions for Everyone."),(0,r.kt)("p",null,"That's it - you now have a CloudFront distribution which will serve your Snowplow JavaScript to anybody anywhere in the world, fast. Now all that remains is to update your Snowplow tag to fetch your own version of\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"sp.js"),"."))}i.isMDXComponent=!0;const l={title:"Self Hosting the JavaScript Tracker on AWS",date:"2020-02-21",sidebar_position:100},s=void 0,p={unversionedId:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/self-hosting-the-javascript-tracker-aws/index",id:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/self-hosting-the-javascript-tracker-aws/index",title:"Self Hosting the JavaScript Tracker on AWS",description:"",source:"@site/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/self-hosting-the-javascript-tracker-aws/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/self-hosting-the-javascript-tracker-aws",slug:"/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/self-hosting-the-javascript-tracker-aws/",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/self-hosting-the-javascript-tracker-aws/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/self-hosting-the-javascript-tracker-aws/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:100,frontMatter:{title:"Self Hosting the JavaScript Tracker on AWS",date:"2020-02-21",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Self hosting the JavaScript Tracker",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/"},next:{title:"Self Hosting the JavaScript Tracker on GCP",permalink:"/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/self-hosting-the-javascript-tracker/self-hosting-the-javascript-tracker-on-google-cloud/"}},c={},d=[],u={toc:d};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"Block1502"}))}k.isMDXComponent=!0},74857:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/s3-upload-2c02093f5772590d3bf33b0cd1f6caf0.png"}}]);