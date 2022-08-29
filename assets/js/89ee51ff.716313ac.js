"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[72934],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(o),h=a,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return o?n.createElement(g,s(s({ref:t},d),{},{components:o})):n.createElement(g,s({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},76226:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const i={title:"Tutorial: using Snowplow for marketing data analytics",date:"2020-02-26",sidebar_position:10},s=void 0,r={unversionedId:"tutorials/using-snowplow-for-marketing-data-analytics/index",id:"tutorials/using-snowplow-for-marketing-data-analytics/index",title:"Tutorial: using Snowplow for marketing data analytics",description:"The first step towards solving a problem is admitting one exists. And I have a lot of problems. As marketing professionals, we all do if we produced a radio commercial and saw more sales in the same month, it must have worked. Technology has changed everything.",source:"@site/docs/tutorials/using-snowplow-for-marketing-data-analytics/index.md",sourceDirName:"tutorials/using-snowplow-for-marketing-data-analytics",slug:"/tutorials/using-snowplow-for-marketing-data-analytics/",permalink:"/docs/tutorials/using-snowplow-for-marketing-data-analytics/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/tutorials/using-snowplow-for-marketing-data-analytics/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:10,frontMatter:{title:"Tutorial: using Snowplow for marketing data analytics",date:"2020-02-26",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Tutorial: define, track and query your own custom event",permalink:"/docs/tutorials/tutorial-define-track-and-query-your-own-custom-event/"},next:{title:"Tutorial: first and last touch attribution with SQL",permalink:"/docs/tutorials/tutorial-first-and-last-touch-attribution/"}},l={},c=[{value:"The right data comes from the right questions",id:"the-right-data-comes-from-the-right-questions",level:2},{value:"Is our content effective at all?",id:"is-our-content-effective-at-all",level:2},{value:"How effective is our content at driving interest and sign ups to our product?",id:"how-effective-is-our-content-at-driving-interest-and-sign-ups-to-our-product",level:2},{value:"Is our blog accomplishing its goal?",id:"is-our-blog-accomplishing-its-goal",level:2},{value:"How do we improve our content\u2019s effectiveness?",id:"how-do-we-improve-our-contents-effectiveness",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The first step towards solving a problem is admitting one exists. And I have a lot of problems. As marketing professionals, we all do: which projects are highest priority, how many leads did we generate this month, did we publish a blog post yet this week, and so on. The fundamental goal of marketing is to support organizational growth. Whether you\u2019re a retailer looking to boost sales, a B2B SaaS provider trying to increase lead generation, or a charitable organization trying to raise awareness for a social issue, you\u2019re trying to help move the needle in a positive direction around an institutional goal. In the past the success of your efforts was judged against a positive correlation with that business goal: if we produced a radio commercial and saw more sales in the same month, it must have worked. Technology has changed everything."),(0,a.kt)("p",null,"Today in the world of digital marketing, not only do we have the ability to more accurately track the direct performance of a given marketing campaign, we have the responsibility to do so. Marketing success has transformed from a given into a set of complicated, multi-layered questions to which the answers are not always clear. Despite the complexity and ambiguity, it is expected of marketing teams to be able to provide answers, in great detail, to as many of these questions as possible. How effective was our last Facebook ad at increasing sales? How many new members have we gained since we posted that blog? Is it worth having a Twitter profile- is it really generating new business for us? Ultimately, it all boils down to is our marketing working?"),(0,a.kt)("h2",{id:"the-right-data-comes-from-the-right-questions"},"The right data comes from the right questions"),(0,a.kt)("p",null,"That\u2019s one of the questions I ask myself every day when I look at where Snowplow fits in the vast digital analytics landscape. In an industry full of complicated technologies and hyper-intelligent people, are we providing useful resources? Is our blog, our newsletter, our social media something that will add value to our audience? These are the questions I have to ask myself in order to uncover and understand if our marketing is truly working."),(0,a.kt)("p",null,"Initially, I tried to confine my answers within the metrics I was accustomed to: new vs returning users, daily and weekly page views, most popular landing pages, and referral sources (to name a few). But it\u2019s only recently, now that I\u2019ve become more familiar with Snowplow\u2019s style of event-level data, that I was able to start asking the really interesting questions. For us at Snowplow, one of those interesting questions has been, \u201cHow effective is our content at driving interest and sign ups to our paid product?\u201d"),(0,a.kt)("h2",{id:"is-our-content-effective-at-all"},"Is our content effective at all?"),(0,a.kt)("p",null,"Before we can understand how effective our content is, I have to establish that it\u2019s actually working. Because Snowplow lets us track a user\u2019s journey from end to end, from the first time they visit our website to the moment they (hopefully) sign a contract with us, we are able to look at a macro view of these journeys across different sections of our website. This lets us see, clearly, how many visitors convert to leads and ultimately users without having to assume that if there\u2019s more content and more leads, the content must be working."),(0,a.kt)("p",null,"Our blog comes in at number six in terms of lead generation:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"URL-conversion",src:o(60084).Z,width:"2724",height:"756"})),(0,a.kt)("p",null,"Source:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH prep AS (\nSELECT\n    a.company,\n    a.domain_userid__c,\n    a.convertedopportunityid,\n    b.name AS accountname,\n    c.name AS servicecontract,\n    CASE WHEN .name IN ( 'Snowplow BDP - Basecamp','Snowplow BDP - Ascent','Snowplow BDP - Summit') AND .poc__c IS NOT TRUE THEN .name ELSE null END AS recurring_contract,\n    d.poc__c\n\nFROM salesforce.sf_lead AS a\n\nLEFT JOIN salesforce.sf_account AS b\nON a.convertedaccountid = b.id\n\nLEFT JOIN salesforce.sf_servicecontract AS c\nON c.accountid = b.id\n\nLEFT JOIN salesforce.sf_contractlineitem AS d\nON c.id = d.servicecontractid\n\nLEFT JOIN salesforce.sf_pricebookentry AS e\nON d.pricebookentryid = e.id\n\nWHERE a.isdeleted IS NOT TRUE\nAND b.isdeleted IS NOT TRUE\nAND c.isdeleted IS NOT TRUE\nAND d.isdeleted IS NOT TRUE\nAND e.isdeleted IS NOT TRUE\nAND a.name NOT IN ('Christophe Bogaert','Yali Sassoon', 'Test Test', 'rg fg','C C', 'test', 'Test','snowplow', 'test case','Z Y','fds dsf')\n\nGROUP BY 1,2,3,4,5,6,7\n)\n\nSELECT\n\n    --TO_CHAR(DATE_TRUNC('month', page_view_start),'YYYY-MM-DD')  AS \"month::filter\",\n    page_url,\n    COUNT(*) AS page_views,\n    COUNT(DISTINCT user_snowplow_domain_id) unique_users,\n    COUNT(DISTINCT CASE WHEN session_index = 1 THEN user_snowplow_domain_id END) AS new_users,\n    COUNT(DISTINCT CASE WHEN page_view_index = 1 THEN user_snowplow_domain_id END) AS new_users_first_page,\n\n    COUNT(DISTINCT CASE WHEN domain_userid__c IS NOT NULL THEN user_snowplow_domain_id END) AS new_lead,\n    COUNT(DISTINCT CASE WHEN recurring_contract is not null THEN user_snowplow_domain_id END) AS mrr\n\nFROM derived.page_views AS a\n\nLEFT JOIN prep AS b\nON a.user_snowplow_domain_id = b.domain_userid__c\n\nWHERE referer_url NOT IN ('webto.salesforce.com/servlet/servlet.WebToLead','webto.salesforce.com/','www.salesforce.com/servlet/servlet.WebToLead','www.salesforce.com/')\n\nGROUP BY 1\nORDER BY 7 DESC\n")),(0,a.kt)("p",null,"Being able to query across all of this data lets me see which pages are doing the most work for us bringing in new customers. (It\u2019s also important to look at data like this to identify sections of our website that are either performing below expectations or are surprisingly effective at converting visitors.) This table validates that our blog is generating some leads, but the question I want to answer is how effective is that content- is sixth place good for our blog? Or can it do better?"),(0,a.kt)("h2",{id:"how-effective-is-our-content-at-driving-interest-and-sign-ups-to-our-product"},"How effective is our content at driving interest and sign ups to our product?"),(0,a.kt)("p",null,"Looking at the URL conversion rates, we can learn a lot about how the blog is performing compared to other parts of our website. Of the 108,845 pageviews on the home page, 862 leads were generated (about .79%) and of those leads, 31 became customers (about 3.59%). On our blog, however: the 16,244 pageviews on our blog generated 203 leads (1.25%), and of those leads 15 became customers, amounting to 7.38% of the leads. Looking at a different metric,\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"NEW_USERS_FIRST_PAGE"),", we can see of the page views, how many were new visitors to our site and what their landing page was. The 862 leads generated by the homepage were 1.37% of the 63,044 new, first time users; compare that with the 39% of our blog\u2019s 519 new, first time users and we have evidence to suggest that our content is effective at driving interest and sign ups to our paid product."),(0,a.kt)("p",null,"Understanding the relationship between content and lead generation is multi-faceted and complex with many different methodologies for joining these two together. How you connect this data becomes a component of your attribution model (we\u2019ll look at attribution modeling more in a future post). With a working version of an attribution model, we can use that to compare the number of leads that are attributed to a blog post we\u2019re generating on a weekly basis with the overall total number of leads to get an idea of our blog\u2019s impact, called lead influence percentage."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"leads-weekly",src:o(55084).Z,width:"1342",height:"764"})),(0,a.kt)("p",null,"This graph shows that as our volume of leads increases, the blog influence percentage decreases, a conclusion that seems counterintuitive to the conclusion about our blog\u2019s conversion rate. Our next step is to closely analyze our leads from the past two months, as well as going forward, to understand the impact our content has, identify the positive effects, and eventually scale them."),(0,a.kt)("h2",{id:"is-our-blog-accomplishing-its-goal"},"Is our blog accomplishing its goal?"),(0,a.kt)("p",null,"When I first started working for Snowplow, we came up with a hypothesis: if our blog provides education, resources, and thought leadership around digital analytics, event-data modeling, and the business benefits of a sophisticated data stack and culture, then our content will drive traffic and leads. If we\u2019re successful along these vectors, we expect to see the several metrics move including percentage of traffic from external sources and social referrals, increases in newsletter subscriptions, and increases in overall site traffic over a longer time horizon."),(0,a.kt)("p",null,"One way we benchmark if this is to determine how evergreen our content is, or how well it retains its value. A post on\xa0",(0,a.kt)("a",{parentName:"p",href:"https://snowplowanalytics.com/blog/2018/02/09/the-product-analyst-toolkit/"},"basic analyses any product analyst can use"),"\xa0provides immediate value, and will still be relevant to readers looking to learn more about product analytics six months after publishing. Contrast this with a technical release post which sees almost no readership after the next release, or a post following a major event company event or conference which decreases exponentially."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"typical-distribution",src:o(71482).Z,width:"1342",height:"756"})),(0,a.kt)("p",null,"This is our viewership on a blog post after a company event. As expected, it shows a big spike in traffic after publication followed by a sharp decrease. Over time, it\u2019s received a modest amount of views, but with most of them coming from the initial post date, it\u2019s unlikely we\u2019ll see traffic to this post increase much going forward. Evergreen content covers topics that will frequently be top of mind or are essential to digital analytics professions, attracting new readers over time. The blog post mentioned on product analytics graphs much closer to what we want our blogs to look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"evergreen-distribution",src:o(66580).Z,width:"1340",height:"762"})),(0,a.kt)("h2",{id:"how-do-we-improve-our-contents-effectiveness"},"How do we improve our content\u2019s effectiveness?"),(0,a.kt)("p",null,"The viewership on our product analytics piece suggests we\u2019re moving in the right direction, but there are still a lot of unanswered questions. With these performance benchmarks gathered over the previous months, we can compare to the next three months and have a much better understanding of what content is the most useful and appreciated by our audience."))}u.isMDXComponent=!0},60084:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/marketingDataAnalytics1-f98d0481552ef312aa544679a6175d8f.jpg"},55084:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/marketingDataAnalytics2-3f55e59a74b93cc14e2ce4908a0fae57.jpg"},71482:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/marketingDataAnalytics3-692ec5a249d1611a496101597b136dcb.jpg"},66580:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/marketingDataAnalytics4-8adc892e0ad6c0252d349b0cc7a28adf.jpg"}}]);