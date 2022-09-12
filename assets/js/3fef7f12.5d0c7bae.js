"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[25492],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=c(n),g=l,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||r;return n?a.createElement(m,o(o({ref:e},d),{},{components:n})):a.createElement(m,o({ref:e},d))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70573:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={title:"Upgrading Snowplow Micro",date:"2021-03-26",sidebar_position:10},o=void 0,i={unversionedId:"managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/upgrading-snowplow-micro/index",id:"managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/upgrading-snowplow-micro/index",title:"Upgrading Snowplow Micro",description:"Upgrading from v0.x to v1",source:"@site/docs/managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/upgrading-snowplow-micro/index.md",sourceDirName:"managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/upgrading-snowplow-micro",slug:"/managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/upgrading-snowplow-micro/",permalink:"/docs/managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/upgrading-snowplow-micro/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/upgrading-snowplow-micro/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:10,frontMatter:{title:"Upgrading Snowplow Micro",date:"2021-03-26",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Example of automated tests",permalink:"/docs/managing-data-quality/testing-and-qa-workflows/set-up-automated-testing-with-snowplow-micro/example-of-automated-tests/"},next:{title:"Verify schema dependencies with the Data Structures CI tool",permalink:"/docs/managing-data-quality/testing-and-qa-workflows/using-the-data-structures-ci-tool-for-data-quality/"}},s={},c=[{value:"Upgrading from v0.x to v1",id:"upgrading-from-v0x-to-v1",level:2}],d={toc:c};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"upgrading-from-v0x-to-v1"},"Upgrading from v0.x to v1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Snowplow Micro v1 uses the exact same validation with a production Snowplow pipeline, which is even stricter and so ensures that if Micro validates an event, then it cannot fail during the enrichment in production."),(0,l.kt)("li",{parentName:"ul"},"Micro now outputs the post-enrichment, canonical event (just with enrichments deactivated).")),(0,l.kt)("p",null,"If you have been using the previous version (v0.1.0) in your test suites, you can easily upgrade to the new version (recommended). The steps include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Point to the newest v1 version\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"1.2.1"),"\xa0of Micro in your\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"docker run"),"\xa0command or in your\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),"\xa0file."),(0,l.kt)("li",{parentName:"ul"},"Modify the configuration for Micro, an example of which can be found in the\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"micro.conf"),"\xa0file\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/snowplow-incubator/snowplow-micro/blob/master/example/micro.conf"},"here"),"."),(0,l.kt)("li",{parentName:"ul"},"The\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/snowplow-incubator/snowplow-micro#response-format-1"},"response format"),"\xa0for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"GoodEvents"),"\xa0has changed, since Micro now outputs the post-enrichment event. This means that if in your tests you were filtering on\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"GoodEvents"),"\xa0through the\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"/micro/good"),"\xa0endpoint, you will need to change:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"the expected values for\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"eventType"),".")))),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("strong",null,"v0")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("strong",null,"v1"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"pv")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"page_view"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"pp")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"page_ping"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"struct"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"ue")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"unstruct"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the event specific fields, that were transformed for enrichment. Some of them are in the table below, but you can see all of the transformations\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/snowplow/enrich/blob/master/modules/common/src/main/scala/com.snowplowanalytics.snowplow.enrich/common/enrichments/Transform.scala"},"here"),". Note: The\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"unstruct_event"),"\xa0and\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"contexts"),"\xa0fields have already parsed the\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"ue_pr"),"\xa0and\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"co"),"\xa0and have already decoded and parsed the\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"ue_px"),"\xa0and\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"cx"),"\xa0raw event fields respectively.")),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("strong",null,"v0")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("strong",null,"v1"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"e")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"event"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"aid")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"app_id"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"p")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"platform"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"uid")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"user_id"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"dtm")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"dvce_created_tstamp"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"tna")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"name_tracker"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"page")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"page_title"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_ca")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_category"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_ac")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_action"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_la")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_label"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_pr")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_property"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_va")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"se_value"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"ue_pr")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"unstruct_event"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"co")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"contexts"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"ue_px")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"unstruct_event"))),(0,l.kt)("tr",null,(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"cx")),(0,l.kt)("td",{class:"has-text-align-center","data-align":"center"},(0,l.kt)("code",null,"contexts"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the structure you expect. The event that was the output of Micro's v0, now corresponds to the\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"rawEvent"),"\xa0field of the event output of v1. A ",(0,l.kt)("em",{parentName:"li"},"partial")," example of a\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"GoodEvent"),"\xa0follows, showing the structure and highlight the differences described above:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'// raw event parameters\n"rawEvent": {\n    "parameters": {\n      "e": "ue",\n      "eid": "966d4d79-11d9-4fa6-a1a5-6a0bc2d06de1",\n      "aid": "DemoID",\n      "ue_pr": "{\\"schema\\":\\"iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0\\",\\"data\\":{\\"schema\\":\\"iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0\\",\\"data\\":{\\"formId\\":\\"FORM\\",\\"elementId\\":\\"user_email\\",\\"nodeName\\":\\"INPUT\\",\\"elementClasses\\":[\\"form-control\\"],\\"value\\":\\"fake@foo.com\\",\\"elementType\\":\\"email\\"}}}"\n    }\n}\n\n// corresponding canonical event properties\n"event": {\n    "event": "unstruct",\n    "event_id": "966d4d79-11d9-4fa6-a1a5-6a0bc2d06de1",\n    "app_id": "DemoID",\n    "unstruct_event": {\n      "schema": "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",\n      "data": {\n        "schema": "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0",\n        "data": {\n          "formId": "FORM",\n          "elementId": "user_email",\n          "nodeName": "INPUT",\n          "elementClasses": [ "form-control" ],\n          "value": "fake@foo.com",\n          "elementType": "email"\n        }\n      }\n    }\n  }\n')))}u.isMDXComponent=!0}}]);