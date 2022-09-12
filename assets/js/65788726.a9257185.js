"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[47835],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),u=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(a),c=o,w=h["".concat(r,".").concat(c)]||h[c]||d[c]||s;return a?n.createElement(w,i(i({ref:t},p),{},{components:a})):n.createElement(w,i({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const s={title:"Tutorial: Setting up Tableau to analyze your Snowplow data",description:"How to set up Tableau to analyze your SNowplow data",date:"2021-03-26",sidebar_position:70},i=void 0,l={unversionedId:"tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data/index",id:"tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data/index",title:"Tutorial: Setting up Tableau to analyze your Snowplow data",description:"How to set up Tableau to analyze your SNowplow data",source:"@site/docs/tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data/index.md",sourceDirName:"tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data",slug:"/tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data/",permalink:"/docs/tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/tutorials/tutorial-setting-up-tableau-to-analyze-your-snowplow-data/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:70,frontMatter:{title:"Tutorial: Setting up Tableau to analyze your Snowplow data",description:"How to set up Tableau to analyze your SNowplow data",date:"2021-03-26",sidebar_position:70},sidebar:"defaultSidebar",previous:{title:"Tutorial: Getting started with Looker",permalink:"/docs/tutorials/tutorial-getting-started-with-looker/"},next:{title:"Tutorial: Setting up R to perform more sophisticated analysis on your Snowplow data",permalink:"/docs/tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/"}},r={},u=[{value:"1. What is Tableau, and why use it to analyze / visualize Snowplow data?",id:"1-what-is-tableau-and-why-use-it-to-analyze--visualize-snowplow-data",level:2},{value:"2. Download and get started with Tableau",id:"2-download-and-get-started-with-tableau",level:2},{value:"3. Connecting Tableau to Snowplow data in Redshift",id:"3-connecting-tableau-to-snowplow-data-in-redshift",level:2},{value:"4. Getting started analyzing Snowplow data in Tableau",id:"4-getting-started-analyzing-snowplow-data-in-tableau",level:2},{value:"4.1 Plotting our first graph: number of uniques over time",id:"41-plotting-our-first-graph-number-of-uniques-over-time",level:3},{value:"4.2 Further analysis: best practice when using Tableau with Snowplow",id:"42-further-analysis-best-practice-when-using-tableau-with-snowplow",level:3},{value:"5. Next steps",id:"5-next-steps",level:2}],p={toc:u};function d(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-what-is-tableau-and-why-use-it-to-analyze--visualize-snowplow-data"},"1","."," What is Tableau, and why use it to analyze / visualize Snowplow data?"),(0,o.kt)("p",null,"Tableau is a Business Intelligence program, in the mould of Microstrategy or Pentaho. These types of software make it possible for users to perform\xa0OLAP analysis, which typically involves aggregating data by different dimensions and metrics, visualizing that data graphically, and then exploring relationships in the data by slicing and dicing different metrics by different dimensions."),(0,o.kt)("p",null,"Tableau has a number of strengths which account for why we prefer it to other BI tools like Pentaho, mostly around its simplicity and connectivity:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user interface is simple and straightforward to use"),(0,o.kt)("li",{parentName:"ul"},"The interface is\xa0",(0,o.kt)("em",{parentName:"li"},"fast"),". You can setup Tableau workbooks to query the data directly in Redshift, in which case the querying speed is determined by the speed at which Redshift works. (Which is pretty good.) You can also, however, import some or all of the data (depending on the volume you're handling) into Tableau's in-memory engine, in which case analysis is blindingly fast"),(0,o.kt)("li",{parentName:"ul"},"Simple to deploy: Tableau desktop can be employed as a standalone application. You connect to directly to Snowplow data (e.g. in Redshift). There is no need to setup associated servers to manage a data pipeline from Snowplow to Tableau (although Tableau server is available as an option). There is no requirement to manage any metadata around Snowplow. Instead, you grab the Snowplow data directly, and start visualizing it instantly")),(0,o.kt)("p",null,"Like most other BI tools: Tableau has limitations when used outside of traditional OLAP analysis: we do not recommend it for statistical analysis (although it has some basic capabilities) or more bespoke graphs. For this type of capability, we recommend\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/setting-up-r-to-perform-more-sophisticated-analysis-on-your-snowplow-data/"},"R"),"."),(0,o.kt)("h2",{id:"2-download-and-get-started-with-tableau"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-Tableau-to-analyze-your-Snowplow-data/7d7d8fbf27acb2d443e760e6d08b5a7fdee80139#2-download-and-get-started-with-tableau"}),"2","."," Download and get started with Tableau"),(0,o.kt)("p",null,"If you are not already using Tableau, you can download a 30 day trial version of the desktop product from the\xa0",(0,o.kt)("a",{parentName:"p",href:"http://www.tableausoftware.com/products/trial"},"Tableau website"),"."),(0,o.kt)("p",null,"Note: Tableau desktop\xa0",(0,o.kt)("strong",{parentName:"p"},"only"),"\xa0works on Windows. If you're using Linux or a Mac, you can run Tableau in a Virtual Machine, but you really want to make available as much RAM as possible to keep the analysis on the large Snowplow datasets snappy."),(0,o.kt)("p",null,"Installing Tableau desktop for windows is straightforward: simply\xa0",(0,o.kt)("a",{parentName:"p",href:"http://www.tableausoftware.com/products/trial"},"download the executable"),"\xa0and run it."),(0,o.kt)("h2",{id:"3-connecting-tableau-to-snowplow-data-in-redshift"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-Tableau-to-analyze-your-Snowplow-data/7d7d8fbf27acb2d443e760e6d08b5a7fdee80139#3-connecting-tableau-to-snowplow-data-in-redshift"}),"3","."," Connecting Tableau to Snowplow data in Redshift"),(0,o.kt)("p",null,"Launch Tableau, and select\xa0",(0,o.kt)("strong",{parentName:"p"},"Connect to data"),"\xa0from the left hand menu"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1154).Z,width:"1012",height:"778"})),(0,o.kt)("p",null,"Tableau presents a list of data sources to connect to. Select ","*","*",'Amazon Redshift" from the\xa0',(0,o.kt)("strong",{parentName:"p"},"On a server"),"\xa0list:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(40723).Z,width:"1012",height:"778"})),(0,o.kt)("p",null,"Tableau then asks for the details of the Redshift cluster we wish to connect to:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(57599).Z,width:"411",height:"598"})),(0,o.kt)("p",null,"We can fetch these details directly from the AWS console. Log into\xa0",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/console/home"},"console.aws.amazon.com"),", select\xa0",(0,o.kt)("strong",{parentName:"p"},"Redshift"),"\xa0from the list of services and then select the Redshift cluster you want to connect to. The details of the cluster you need to connect Tableau are listed under\xa0",(0,o.kt)("strong",{parentName:"p"},"Cluster Database Properties"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(22e3).Z,width:"1032",height:"753"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the database end point from the AWS console and paste it into the\xa0",(0,o.kt)("strong",{parentName:"li"},"server name"),"\xa0field in Tableau"),(0,o.kt)("li",{parentName:"ul"},"Copy the port number from the console into Tableau"),(0,o.kt)("li",{parentName:"ul"},"Copy the database name and username into Tableau"),(0,o.kt)("li",{parentName:"ul"},"Enter the password for the Redshift database. (This is\xa0",(0,o.kt)("strong",{parentName:"li"},"not"),"\xa0displayed in the Amazon console for security reasons.)"),(0,o.kt)("li",{parentName:"ul"},"Click the\xa0",(0,o.kt)("strong",{parentName:"li"},"Connect"),"\xa0button. Tableau will ping out to Redshift to check the connection is live"),(0,o.kt)("li",{parentName:"ul"},"Select\xa0",(0,o.kt)("strong",{parentName:"li"},"public"),"\xa0from the dropdown list of schemas. Your Snowplow events table should be one of the tables listed:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(63974).Z,width:"411",height:"598"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select your Snowplow events table and click\xa0",(0,o.kt)("strong",{parentName:"li"},"OK"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(69469).Z,width:"404",height:"304"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Tableau asks if you want to "Connect live", "Import all data" or "Import some data". Select "Connect live"'),(0,o.kt)("li",{parentName:"ul"},"You should see a screen similar to the one below:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(97430).Z,width:"1012",height:"778"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Troubleshooting your connection"),": For security, Amazon only lets computers access a Redshift cluster where those computers are located at an IP address that has been white-listed. Hence, in order to connect Tableau, you must make sure that the machine running Tableau is on a white-listed IP address. Instructions on how to white-list IP addresses in Redshift are given\xa0",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started-on-snowplow-open-source/setup-snowplow-on-aws/setup-destinations/setup-redshift/launch-a-redshift-cluster/"},"here"),"."),(0,o.kt)("h2",{id:"4-getting-started-analyzing-snowplow-data-in-tableau"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-Tableau-to-analyze-your-Snowplow-data/7d7d8fbf27acb2d443e760e6d08b5a7fdee80139#4-getting-started-analyzing-snowplow-data-in-tableau"}),"4","."," Getting started analyzing Snowplow data in Tableau"),(0,o.kt)("h3",{id:"41-plotting-our-first-graph-number-of-uniques-over-time"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-Tableau-to-analyze-your-Snowplow-data/7d7d8fbf27acb2d443e760e6d08b5a7fdee80139#41-plotting-our-first-graph-number-of-uniques-over-time"}),"4.1 Plotting our first graph: number of uniques over time"),(0,o.kt)("p",null,"To kick in the tyres, we'll walk through the process of plotting the number of uniques that visit the site over time."),(0,o.kt)("p",null,'"Uniques" is a metric. (Or in Tableau terminology - a "measure".) If you look in the list of measures in Tableau, you wont see "Uniques": all the fields you\'ll see are columns in the Snowplow events table where the data type is numeric. In some case, these really are metrics / measures (e.g. "ev',"_",'value", "ti',"_",'quantity", "ti',"_",'price", "tr',"_",'total", "pp',"_","yoffset","_",'max", "pp',"_","yoffset","_",'min" etc.) In other cases, Tableau has incorrectly assumed that numeric dimensions are measures (e.g. "domain',"_",'sessionidx", "dvce',"_",'screenheight", "page',"_",'urlport", "txn',"_",'id"). We can simply drag those incorrectly classified fields from the "Measures" pane into the "Dimensions" pane.'),(0,o.kt)("p",null,'We need to create a "Uniques" measures field. This will be calculated by counting the number of distinct user IDs. (In our example, we\'re going to count the number of distinct "domain',"_",'userid".) To do this, right click on the "Measures" pane and select "Create calculated field". Name the field "Uniques" and enter the following formula into the formula box:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},"COUNTD([domain_userid])\n")),(0,o.kt)("p",null,"Tableau helpfully tells us that are calculation is valid:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1262).Z,width:"761",height:"639"})),(0,o.kt)("p",null,'Select OK. The new field appears in the Measures pane. We can now drag it into the main part of the screen, where it says "Drop field here":'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(51651).Z,width:"1012",height:"778"})),(0,o.kt)("p",null,"Note that the total number of uniques for our data set shows on the main part of the screen. Tableau reminds us what the number means: in the\xa0",(0,o.kt)("strong",{parentName:"p"},"Marks"),"\xa0section of the window,\xa0",(0,o.kt)("strong",{parentName:"p"},"AGG(Uniques)"),"\xa0is listed next to an icon that indicates that this measure is plotted simply as a label."),(0,o.kt)("p",null,'Now we want to slice the number of uniques by day. To do this, drag the "collector',"_",'tstamp" dimension from the "Dimensions" pane to columns shelf:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(80576).Z,width:"1012",height:"778"})),(0,o.kt)("p",null,'Tableau has assumed we want to plot uniques by year. To change the level of granularity so we plot it by day, hover over the "YEAR(collector',"_",'tstamp)" dimension in the column pane and then click on the dropdown option that appears. Select the 2nd "Day" option in the dropdown to make this change.'),(0,o.kt)("p",null,"Now to make the plot a familiar line graph, click on the\xa0",(0,o.kt)("strong",{parentName:"p"},"Show me"),"\xa0toolbar at the top right. A toolbar appears. Select the line graph image:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(71372).Z,width:"1012",height:"778"})),(0,o.kt)("p",null,"Bingo! Our line graph appears!"),(0,o.kt)("h3",{id:"42-further-analysis-best-practice-when-using-tableau-with-snowplow"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-Tableau-to-analyze-your-Snowplow-data/7d7d8fbf27acb2d443e760e6d08b5a7fdee80139#42-further-analysis-best-practice-when-using-tableau-with-snowplow"}),"4.2 Further analysis: best practice when using Tableau with Snowplow"),(0,o.kt)("p",null,'In the above example, we used Tableau to connect to the complete Snowplow events data table. This can, potentially, be an enormous volume of data. For that reason, when asked whether we wanted to import the data into Tableau, we declined, instead connecting "live" to Redshift. As a result, every time we performed an operation in Redshift (e.g. dragging a metric or dimension around the screen), Tableau went off and ran a query against Redshift to fetch the appropriate cut of data necessary to perform the operation we specified. Redshift, rather than Tableau, did all the heavy data lifting.'),(0,o.kt)("p",null,"Often, however, when we are performing analysis on Snowplow data, we are looking at a subset of that data, rather than the entire data set. In this situation, we may want to import the data into Tableau's fast data engine, to make the analysis snappier."),(0,o.kt)("p",null,"Tableau makes it straightforward to specify specific cuts of Snowplow data to grab from Redshift. To demonstrate this, click on the\xa0",(0,o.kt)("strong",{parentName:"p"},"Data"),"\xa0menu in Tableau and click on\xa0",(0,o.kt)("strong",{parentName:"p"},"Connect to data"),". You should see the same screen that you did before, when we set up our first connection to Redshift."),(0,o.kt)("p",null,'This time, go through the process as before: select Redshift, enter the details from the Amazon console, and select the public schema. This time, however, select "Custom SQL" instead of "Single Table" under "Step 6: Select a table or view from the database":'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(49025).Z,width:"411",height:"598"})),(0,o.kt)("p",null,"You can paste in any Redshift compatible SQL query to generate a specific slice of the data. To give a simple example, the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n domain_userid,\n domain_sessionidx,\n collector_tstamp,\n page_urlpath,\n page_title,\n event\nFROM events\nWHERE domain_userid = '594b77eb9d30435b'\nAND (event = 'page_ping' OR event = 'page_view')\nORDER BY domain_userid, tstamp\n")),(0,o.kt)("p",null,"was used to grab the data for a single visitor. That was then used in Tableau to visualize that user journey."),(0,o.kt)("p",null,"To give a more complicated example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\npv.page_urlpath,\npv.unique_visitors,\nab.uniques_that_add_to_basket,\nt.uniques_that_purchase\nFROM (\n SELECT\n page_urlpath,\n COUNT(DISTINCT(domain_userid)) AS unique_visitors,\n COUNT(*) AS page_views\n FROM \"events\"\n WHERE (                                    # Only display results for *product* pages\n  (page_urlpath LIKE '/tarot-cards/%' )\n  OR ( page_urlpath LIKE '/oracles/%' )\n  OR (page_urlpath LIKE '/pendula/%')\n  OR (page_urlpath LIKE '/jewellery/%')\n ) AND \"event\" = 'page_view'\n AND page_urlhost = 'www.psychicbazaar.com' # Only display results for the *production website*\n GROUP BY page_urlpath\n) pv\nLEFT JOIN (\n SELECT\n page_urlpath,\n ev_label AS product_sku,\n COUNT(DISTINCT(domain_userid)) AS uniques_that_add_to_basket,\n COUNT(*) AS number_of_add_to_baskets,\n SUM(ev_property) AS number_of_products_added_to_baket\n FROM events\n WHERE (                                    # Only display results for *product* pages\n  (page_urlpath LIKE '/tarot-cards/%' )\n  OR ( page_urlpath LIKE '/oracles/%' )\n  OR (page_urlpath LIKE '/pendula/%')\n  OR (page_urlpath LIKE '/jewellery/%'))\n AND \"event\" = 'struct'\n AND \"ev_category\" = 'ecomm'\n AND \"ev_action\" = 'add-to-basket'\n AND page_urlhost = 'www.psychicbazaar.com'\n GROUP BY page_urlpath, product_sku\n) ab\nON pv.page_urlpath = ab.page_urlpath\nLEFT JOIN (\n SELECT\n ti_sku,\n COUNT(DISTINCT(domain_userid)) AS uniques_that_purchase,\n COUNT(DISTINCT(ti_orderid)) AS number_of_orders,\n SUM(ti_quantity) AS actual_number_sold\n FROM events\n WHERE \"event\" = 'transaction_item'\n GROUP BY ti_sku\n) t\nON ab.product_sku = t.ti_sku\n")),(0,o.kt)("p",null,"to produce a data set where there was one line of data for every product sold on the website. Tableau then took this much smaller data set, and used it to produce a scatter plot."),(0,o.kt)("p",null,"When you fetch smaller data sets from Snowplow / Redshift, you can ask Tableau to import these rather than read them directly from Redshift:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(69469).Z,width:"404",height:"304"})),(0,o.kt)("h2",{id:"5-next-steps"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Setting-up-Tableau-to-analyze-your-Snowplow-data/7d7d8fbf27acb2d443e760e6d08b5a7fdee80139#5-next-steps"}),"5","."," Next steps"),(0,o.kt)("p",null,"There is a huge number of ways you can interrogate Snowplow data using Tableau. For some ideas, see the following blog posts for some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://snowplowanalytics.com/blog/2012/10/23/web-analytics-with-tableau-and-snowplow/"},"Performing web analytics on Snowplow data using Tableau - a video demo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://snowplowanalytics.com/blog/2013/04/23/performing-funnel-analysis-with-snowplow/"},"Funnel analysis with Snowplow"))))}d.isMDXComponent=!0},1154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-9338a8d7d78a23fed7d76b97915905e6.jpg"},80576:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-04982b1339cf34d46f31adc3c70439ad.jpg"},71372:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/11-8c1bd6d093e7ccb30a2ce8c5d2176d92.jpg"},49025:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-add2093595aaf5b09d47047f08046e01.jpg"},40723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2-73829060c769ac60fbc35eb05dd6d672.jpg"},57599:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3-4669f9ab71b25d9a1cb10bd20302aa15.jpg"},22e3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-8c1f1a8cf870f04c7d0943778f28a579.jpg"},63974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5-81f1b9f7610c718841a702f5dc6072ee.jpg"},69469:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6-e7db19cec7f05daf6584213da9b42bb0.jpg"},97430:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7-efb1199565868a1fdaf0918b6a12699d.jpg"},1262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8-718e6f77019128fcd0dcd377aac6011e.jpg"},51651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9-59b84c71211d80c5bbfd462647cd7584.jpg"}}]);