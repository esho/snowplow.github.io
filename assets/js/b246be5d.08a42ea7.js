"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[15775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Tutorial: Setting up R to perform more sophisticated analysis on your Snowplow data",description:"How to set up R for analysis of Snowplow data",date:"2021-03-26",sidebar_position:80},i=void 0,s={unversionedId:"tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/index",id:"tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/index",title:"Tutorial: Setting up R to perform more sophisticated analysis on your Snowplow data",description:"How to set up R for analysis of Snowplow data",source:"@site/docs/tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/index.md",sourceDirName:"tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data",slug:"/tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/",permalink:"/docs/tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:80,frontMatter:{title:"Tutorial: Setting up R to perform more sophisticated analysis on your Snowplow data",description:"How to set up R for analysis of Snowplow data",date:"2021-03-26",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Setting up Tableau to analyze your Snowplow data",permalink:"/docs/tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data/"},next:{title:"Tutorial: A Guide to Using the Poplin Chrome Extension",permalink:"/docs/tutorials/tutorial-a-guide-to-using-the-poplin-chrome-extension/"}},l={},p=[{value:"1. What is R, and why use it to analyze / visualize Snowplow data?",id:"1-what-is-r-and-why-use-it-to-analyze--visualize-snowplow-data",level:2},{value:"2. Download and get started with R",id:"2-download-and-get-started-with-r",level:2},{value:"3. Connecting R to Snowplow data in Redshift",id:"3-connecting-r-to-snowplow-data-in-redshift",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-what-is-r-and-why-use-it-to-analyze--visualize-snowplow-data"},"1","."," What is R, and why use it to analyze / visualize Snowplow data?"),(0,o.kt)("p",null,"R is free, open source software for performing statistical and graphical analysis."),(0,o.kt)("p",null,"R is in many respects a very strange analytics environment for the newbie. (It is not really a 'program' or 'service' as such.) It is a programming language, and as a result, can be daunting to use for business analysts who do not have development experience."),(0,o.kt)("p",null,"However, R is not a straightforward tool for developers to use either: many features of the language are unique to R, even amongst other interpreted languages (like Python) and functional languages (like Scala or Haskell)."),(0,o.kt)("p",null,"In spite of its 'unusualness', there is one very good reasons to use R to analyze Snowplow (and other data sets): there is a huge amount you can do with R that is very difficult with traditional analytics programmes. To give just some examples:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Advanced visualizations"),". R supports graphing data in many more ways, much more flexibly, than standard analytics packages like Excel or BI tools like Tableau"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Statistical analysis"),". R supports a staggering array of statistical analyzes: making it easy to run standard statistical tests on data to see if e.g. two groups of visitors behave in a way that is significantly different"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Algorithmic analysis"),". R libraries include a wide range of algorithmic analytical techniques including market basket analyzes, principle component analysis, to give just two that are relevant with web analytics data.")),(0,o.kt)("h2",{id:"2-download-and-get-started-with-r"},"2","."," Download and get started with R"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.r-project.org/"},"To download and install R on Windows or Mac, visit the download page"),", choose a nearby mirror and select the download appropriate for your platform. Then run the installer once the download is completed. You can then launch R from your start/applications menu."),(0,o.kt)("p",null,"To install R on Ubuntu, add the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deb http://<my.favorite.cran.mirror>/bin/linux/ubuntu precise/\n")),(0,o.kt)("p",null,"but swap out ",(0,o.kt)("inlineCode",{parentName:"p"},"<my.favorite.cran.mirror>")," for your nearest mirror e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"deb http://cran.ma.imperial.ac.uk/bin/linux/ubuntu precise/")),(0,o.kt)("p",null,"Then simply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install r-base\n")),(0,o.kt)("p",null,"You can then launch R by typing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"R\n")),(0,o.kt)("p",null,"at the prompt."),(0,o.kt)("h2",{id:"3-connecting-r-to-snowplow-data-in-redshift"},"3","."," Connecting R to Snowplow data in Redshift"),(0,o.kt)("p",null,"You can pull Snowplow data stored in Redshift directly into R using the ",(0,o.kt)("inlineCode",{parentName:"p"},"RPostgreSQL")," package."),(0,o.kt)("p",null,"First, install the package. (This only needs to be done once for your R installation.) Run at the R command prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'install.packages("RPostgreSQL")\n')),(0,o.kt)("p",null,"To use the library (e.g. at the beginning of an R session), enter the following at the command prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'library("RPostgreSQL")\n')),(0,o.kt)("p",null,"Then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'drv <- dbDriver("PostgreSQL")\ncon <- dbConnect(drv, host="<<ENTER HOST DETAILS HERE>>", port="<<ENTER PORT DETAILS HERE>>",dbname="<<ENTER DB NAME HERE>>", user="<<ENTER USERNAME HERE>>", password="<<ENTER PASSWORD HERE>>")\n')),(0,o.kt)("p",null,"Note: you can access the relevant host, port, dbname and username fields by logging into the AWS console ",(0,o.kt)("a",{parentName:"p",href:"http://console.aws.amazon.com/"},"console.aws.amazon.com"),", selecting Redshift and then clicking on the cluster you use for Snowplow:"),(0,o.kt)("p",null,"You can now fetch Snowplow data directly from Redshift into a dataframe in R, by executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"dbGetQuery")," statement to run a SQL statement against that data and return the data into R as a data frame. For example, the following query returns a list of visits to an ecommerce site, classified by whether the stage in the purchase funnel that each visit got to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\na.domain_userid,\na.first_touch,\nCASE WHEN d.shopper = 1 THEN 'shopper' WHEN c.checkout = 1 THEN 'checkout' WHEN b.basket = 1 THEN 'basket' ELSE 'window-shopper' END AS type\nFROM (\n    SELECT\n    domain_userid,\n    MIN(DATE(collector_tstamp)) AS first_touch\n    FROM events_new\n    GROUP BY domain_userid\n) a\nLEFT JOIN (\n    SELECT\n    domain_userid,\n    1 AS basket\n    FROM events_new\n    WHERE ev_action = 'add-to-basket'\n    GROUP BY domain_userid\n) b ON a.domain_userid = b.domain_userid\nLEFT JOIN (\n    SELECT\n    domain_userid,\n    1 AS checkout\n    FROM events_new\n    WHERE ev_action = 'checkout'\n    GROUP BY domain_userid\n) c ON a.domain_userid = c.domain_userid\nLEFT JOIN (\n    SELECT\n    domain_userid,\n    1 AS shopper\n    FROM events_new\n    WHERE event='transaction'\n    GROUP BY domain_userid\n) d ON a.domain_userid = d.domain_userid\n")),(0,o.kt)("p",null,"We can pull that data into R by executing the following at the R command prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"visits <- dbGetQuery(con, \"\n    SELECT\n    a.domain_userid,\n    a.first_touch,\n    CASE WHEN d.shopper = 1 THEN 'shopper' WHEN c.checkout = 1 THEN 'checkout' WHEN b.basket = 1 THEN 'basket' ELSE 'window-shopper' END AS type\n    FROM (\n        SELECT\n        domain_userid,\n        MIN(DATE(collector_tstamp)) AS first_touch\n        FROM events_new\n        GROUP BY domain_userid\n    ) a\n    LEFT JOIN (\n        SELECT\n        domain_userid,\n        1 AS basket\n        FROM events_new\n        WHERE ev_action = 'add-to-basket'\n        GROUP BY domain_userid\n    ) b ON a.domain_userid = b.domain_userid\n    LEFT JOIN (\n        SELECT\n        domain_userid,\n        1 AS checkout\n        FROM events_new\n        WHERE ev_action = 'checkout'\n        GROUP BY domain_userid\n    ) c ON a.domain_userid = c.domain_userid\n    LEFT JOIN (\n        SELECT\n        domain_userid,\n        1 AS shopper\n        FROM events_new\n        WHERE event='transaction'\n        GROUP BY domain_userid\n    ) d ON a.domain_userid = d.domain_userid\n\")\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.r-project.org/"},"r"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://www.r-project.org/"},"download-r"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/console/home"},"aws-console"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://snowplowanalytics.com/analytics/tools-and-techniques/get-started-analysing-snowplow-data-with-r.html"},"get-started-with-r")))}u.isMDXComponent=!0}}]);