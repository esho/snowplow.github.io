"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[99185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?i.createElement(g,l(l({ref:t},d),{},{components:n})):i.createElement(g,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Amplitude Tag Configuration",date:"2021-11-24",sidebar_position:100},l=void 0,r={unversionedId:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/index",id:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/index",title:"Amplitude Tag Configuration",description:"Amplitude API Key (Required)",source:"@site/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/index.md",sourceDirName:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration",slug:"/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/amplitude-tag-configuration/index.md",tags:[],version:"current",lastUpdatedAt:1663236058,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:100,frontMatter:{title:"Amplitude Tag Configuration",date:"2021-11-24",sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"Amplitude Tag for GTM SS",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/amplitude-tag-for-gtm-ss/"},next:{title:"Braze Tag for GTM SS",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/braze-tag-for-gtm-ss/"}},s={},p=[{value:"Amplitude API Key (Required)",id:"amplitude-api-key-required",level:2},{value:"Use Amplitude&#39;s EU servers",id:"use-amplitudes-eu-servers",level:3},{value:"Snowplow Event Mapping Options",id:"snowplow-event-mapping-options",level:2},{value:"Include Self Describing event",id:"include-self-describing-event",level:3},{value:"Snowplow Event Context Rules",id:"snowplow-event-context-rules",level:3},{value:"Extract entity from Array if single element",id:"extract-entity-from-array-if-single-element",level:4},{value:"Include Snowplow Entities in event_properties",id:"include-snowplow-entities-in-event_properties",level:4},{value:"Snowplow Entities to Add/Edit mapping",id:"snowplow-entities-to-addedit-mapping",level:4},{value:"Snowplow Entities to Exclude",id:"snowplow-entities-to-exclude",level:4},{value:"Snowplow Event Context Rules",id:"snowplow-event-context-rules-1",level:4},{value:"Extract entity from Array if single element",id:"extract-entity-from-array-if-single-element-1",level:5},{value:"Include all Entities in event_properties",id:"include-all-entities-in-event_properties",level:5},{value:"Include unmapped entities in event_properties",id:"include-unmapped-entities-in-event_properties",level:5},{value:"Additional Event Mapping Options",id:"additional-event-mapping-options",level:2},{value:"Event Property Rules",id:"event-property-rules",level:4},{value:"Include common event properties",id:"include-common-event-properties",level:5},{value:"Additional Event Property Mapping Rules",id:"additional-event-property-mapping-rules",level:5},{value:"User Property Rules",id:"user-property-rules",level:4},{value:"Include common user properties",id:"include-common-user-properties",level:5},{value:"Map Snowplow mkt fields (standard UTM parameters) to user properties",id:"map-snowplow-mkt-fields-standard-utm-parameters-to-user-properties",level:5},{value:"Additional User Property Mapping Rules",id:"additional-user-property-mapping-rules",level:5},{value:"Advanced Event Settings",id:"advanced-event-settings",level:2},{value:"Forward User IP address",id:"forward-user-ip-address",level:3},{value:"Fallback platform identifier",id:"fallback-platform-identifier",level:3},{value:"Amplitude time setting",id:"amplitude-time-setting",level:3},{value:"Logs Settings",id:"logs-settings",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"amplitude-api-key-required"},"Amplitude API Key (Required)"),(0,a.kt)("p",null,"Set this to the API of your Amplitude HTTP API Data Source."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(45564).Z,width:"306",height:"121"})),(0,a.kt)("h3",{id:"use-amplitudes-eu-servers"},"Use Amplitude's EU servers"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Available since v0.2.0)")),(0,a.kt)("p",null,"Enable this option to send the data to Amplitude's EU Residency Server ",(0,a.kt)("a",{parentName:"p",href:"https://www.docs.developers.amplitude.com/analytics/apis/http-v2-api/#endpoints"},"endpoint"),", instead of the default standard server endpoint."),(0,a.kt)("h2",{id:"snowplow-event-mapping-options"},"Snowplow Event Mapping Options"),(0,a.kt)("h3",{id:"include-self-describing-event"},"Include Self Describing event"),(0,a.kt)("p",null,"Indicates if a Snowplow Self Describing event should be in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"event_properties"),"\xa0object of the Amplitude event."),(0,a.kt)("h3",{id:"snowplow-event-context-rules"},"Snowplow Event Context Rules"),(0,a.kt)("p",null,"This section describes how the Amplitude tag will use the context Entities attached to a Snowplow Event."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92362).Z,width:"866",height:"383"})),(0,a.kt)("h4",{id:"extract-entity-from-array-if-single-element"},"Extract entity from Array if single element"),(0,a.kt)("p",null,"Snowplow Entities are always in Arrays, as multiple of the same entity can be attached to an event. This option will pick the single element from the array if the array only contains a single element."),(0,a.kt)("h4",{id:"include-snowplow-entities-in-event_properties"},"Include Snowplow Entities in event_properties"),(0,a.kt)("p",null,"Using this drop-down menu you can specify whether you want to Include ",(0,a.kt)("inlineCode",{parentName:"p"},"All")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," of the Snowplow context entities in Amplitude's ",(0,a.kt)("inlineCode",{parentName:"p"},"event_properties"),"."),(0,a.kt)("h4",{id:"snowplow-entities-to-addedit-mapping"},"Snowplow Entities to Add/Edit mapping"),(0,a.kt)("p",null,"Using this table you can specify in each row a specific mapping for a particular context entity. In the columns provided you can specify:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Entity name to add/edit-mapping (required).\xb9"),(0,a.kt)("li",{parentName:"ul"},"The key you could like to map it to (optional: leaving the mapped key blank keeps the same name)."),(0,a.kt)("li",{parentName:"ul"},"Whether to add in ",(0,a.kt)("inlineCode",{parentName:"li"},"event_properties")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"user_properties")," of the Amplitude event (default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"event_properties"),")."),(0,a.kt)("li",{parentName:"ul"},"Whether you wish the mapping to apply to all versions of the entity (default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),").\xb9")),(0,a.kt)("h4",{id:"snowplow-entities-to-exclude"},"Snowplow Entities to Exclude"),(0,a.kt)("p",null,"Using this table (which is only available if ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Snowplow Entities in event_properties")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"All"),"), you can specify the context entities you want to exclude from the Amplitude event. In its columns you can specify:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Entity name (required).\xb9"),(0,a.kt)("li",{parentName:"ul"},"Whether the exclusion applies to all versions of the entity (default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),").\xb9")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\xb9 How to specify the ",(0,a.kt)("strong",{parentName:"p"},"Entity Name")," and its relation to ",(0,a.kt)("strong",{parentName:"p"},"Apply to all versions")," option:"),(0,a.kt)("p",{parentName:"admonition"},"Entity Names can be specified in 3 ways:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By their Iglu Schema tracking URI (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"iglu:com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-2"),")")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By their enriched name (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"contexts_com_snowplowanalytics_snowplow_client_session_1"),")")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By their key in the client event object, which is the GTM-SS Snowplow prefix (",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-"),") followed by the enriched entity name (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-contexts_com_snowplowanalytics_snowplow_client_session_1"),")"))),(0,a.kt)("p",{parentName:"admonition"},"Depending on the value set for the ",(0,a.kt)("strong",{parentName:"p"},"Apply to all versions")," column, the major version number from the 2nd and 3rd naming option above may be excluded. More specifically, this is only permitted if ",(0,a.kt)("strong",{parentName:"p"},"Apply to all versions")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("i",null,"pre-v0.2.0")),(0,a.kt)("h4",{id:"snowplow-event-context-rules-1"},"Snowplow Event Context Rules"),(0,a.kt)("h5",{id:"extract-entity-from-array-if-single-element-1"},"Extract entity from Array if single element"),(0,a.kt)("p",null,"Snowplow Entities are always in Arrays, as multiple of the same entity can be attached to an event. This option will pick the single element from the array if the array only contains a single element."),(0,a.kt)("h5",{id:"include-all-entities-in-event_properties"},"Include all Entities in event_properties"),(0,a.kt)("p",null,"Leaving this option enabled ensures that all Entities on an event will be included within the Event Properties of the Amplitude event."),(0,a.kt)("p",null,"If disabling this, individual entities can be selected for inclusion. These entities can also be remapped to have different names in the Amplitude event, and can be included in either event properties or user properties. The entity can be specified in two different formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Major version match:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"x-sp-contexts_com_snowplowanalytics_snowplow_web_page_1"),"\xa0where\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"com_snowplowanalytics_snowplow"),"\xa0is the event vendor,\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"web_page"),"\xa0is the schema name and\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\xa0is the Major version number.\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"x-sp-"),"\xa0can also be omitted from this if desired"),(0,a.kt)("li",{parentName:"ul"},"Full schema match:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0"))),(0,a.kt)("h5",{id:"include-unmapped-entities-in-event_properties"},"Include unmapped entities in event_properties"),(0,a.kt)("p",null,"If remapping or moving some entities to User Properties with the above customization, you may wish to ensure all unmapped entities are still included in the event. Enabling this option will ensure that all entities are mapped into the Amplitude event.")),(0,a.kt)("h2",{id:"additional-event-mapping-options"},"Additional Event Mapping Options"),(0,a.kt)("p",null,"If you wish to map other properties from a Client event into an Amplitude event they can be specified in this section."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28131).Z,width:"735",height:"448"})),(0,a.kt)("h4",{id:"event-property-rules"},"Event Property Rules"),(0,a.kt)("h5",{id:"include-common-event-properties"},"Include common event properties"),(0,a.kt)("p",null,"Enabling this ensures properties from the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"Common Event"),"\xa0are automatically mapped to the Amplitude Event Properties."),(0,a.kt)("h5",{id:"additional-event-property-mapping-rules"},"Additional Event Property Mapping Rules"),(0,a.kt)("p",null,"Specify the Property Key from the Client Event, and then the key you could like to map it to or leave the mapped key blank to keep the same name. You can use Key Path notation here (e.g.\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-tp2.p"),"\xa0for a Snowplow events platform or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-contexts.com_snowplowanalytics_snowplow_web_page_1.0.id"),"\xa0for a Snowplow events page view id (in array index 0) or pick non-Snowplow properties if using an alternative Client. These keys will populate the Amplitude\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"eventProperties"),"\xa0object."),(0,a.kt)("h4",{id:"user-property-rules"},"User Property Rules"),(0,a.kt)("h5",{id:"include-common-user-properties"},"Include common user properties"),(0,a.kt)("p",null,"Enabling this ensures user_data properties from the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"Common Event"),"\xa0are automatically mapped to the Amplitude Event Properties."),(0,a.kt)("h5",{id:"map-snowplow-mkt-fields-standard-utm-parameters-to-user-properties"},"Map Snowplow mkt fields (standard UTM parameters) to user properties"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Available since v0.2.0)")),(0,a.kt)("p",null,"Enabling this option automatically maps all the marketing (",(0,a.kt)("inlineCode",{parentName:"p"},"mkt_")," prefixed) fields of the Snowplow event to the standard UTM parameters in Amplitude's user properties."),(0,a.kt)("h5",{id:"additional-user-property-mapping-rules"},"Additional User Property Mapping Rules"),(0,a.kt)("p",null,"Specify the Property Key from the Client Event, and then the key you could like to map it to or leave the mapped key blank to keep the same name. You can use Key Path notation here (e.g.\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-tp2.p"),"\xa0for a Snowplow events platform or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-contexts.com_snowplowanalytics_snowplow_web_page_1.0.id"),"\xa0for a Snowplow events page view id (in array index 0) or pick non-Snowplow properties if using an alternative Client. These keys will populate the Amplitude\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"eventProperties"),"\xa0object."),(0,a.kt)("h2",{id:"advanced-event-settings"},"Advanced Event Settings"),(0,a.kt)("p",null,"In this section you can find advanced configuration parameters."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(70942).Z,width:"435",height:"359"})),(0,a.kt)("h3",{id:"forward-user-ip-address"},"Forward User IP address"),(0,a.kt)("p",null,"Enabling this will forward the IP Address to Amplitude, otherwise Amplitude will not receive the users IP Address (default: ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),")."),(0,a.kt)("h3",{id:"fallback-platform-identifier"},"Fallback platform identifier"),(0,a.kt)("p",null,"If there is no Platform property on the Client event, this is the value which the Tag will forward to Amplitude (default: ",(0,a.kt)("inlineCode",{parentName:"p"},"Web"),")."),(0,a.kt)("h3",{id:"amplitude-time-setting"},"Amplitude time setting"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Available since v0.2.0)")),(0,a.kt)("p",null,"This option allows you to decide whether the event time of the Amplitude event will be set. The available options are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Do not set")," (default): this means the event time will be set automatically by Amplitude."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Set to current timestamp"),": sets the Amplitude event time to the current timestamp."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Set from event property"),": sets the Amplitude event time from the client event property. For example, in the image below the Amplitude's event time will be set from the device created timestamp (",(0,a.kt)("inlineCode",{parentName:"li"},"dvce_created_tstamp"),") of the Snowplow event (",(0,a.kt)("inlineCode",{parentName:"li"},"x-sp-")," prefix in the client event):")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91408).Z,width:"449",height:"194"})),(0,a.kt)("h2",{id:"logs-settings"},"Logs Settings"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(Available since v0.2.0)")),(0,a.kt)("p",null,"Through the Logs Settings you can control the logging behaviour of the Amplitude Tag. The available options are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Do not log"),": This option allows you to completely disable logging. No logs will be generated by the Tag."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Log to console during debug and preview"),": This option enables logging only in debug and preview containers. This is the ",(0,a.kt)("strong",{parentName:"li"},"default")," option."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Always"),": This option enables logging regardless of container mode.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": Please take into consideration that the logs generated may contain event data."),(0,a.kt)("p",null,"The logs generated by the Amplitude GTM-SS Tag are standardized JSON strings.\nThe standard log properties are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Name": "Amplitude HTTP API V2", // the name of the tag\n    "Type": "Message",   // the type of log (one of "Message", "Request", "Response")\n    "TraceId": "xxx",    // the "trace-id" header if exists\n    "EventName": "xxx"   // the name of the event the tag fired at\n}\n')),(0,a.kt)("p",null,"Depending on the type of log, additional properties are logged:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type of log"),(0,a.kt)("th",{parentName:"tr",align:null},"Additional information"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"\u201cMessage\u201d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Request"),(0,a.kt)("td",{parentName:"tr",align:null},"\u201cRequestMethod\u201d, \u201cRequestUrl\u201d, \u201cRequestHeaders\u201d, \u201cRequestBody\u201d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response"),(0,a.kt)("td",{parentName:"tr",align:null},"\u201cResponseStatusCode\u201d, \u201cResponseHeaders\u201d, \u201cResponseBody\u201d")))))}m.isMDXComponent=!0},45564:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAB5CAYAAAC6Lq3eAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AABfTSURBVHic7d15XNTV/sfx1zDAsLth7kuIBgmaC6K4sIiSYtY1vZp6KyNxKZeyq2n200zJtXBL+91S07BLF70pIWi4XHfDrVQyQ36iqAgqm8Cwzfz+mOvoCCqb4lc+z8djHsJ3Oed8vzLvOed8vzOj0uv1eoQQQsHMqrsBQghRWRJkQgjFkyATQiieBJkQQvEkyIQQiidBJoRQPAkyIYTiSZAJIRRPgkwIoXgSZEIIxXvig+xmjo4mH1yr8nKD12ew4VBelZcrhHj8qiTI/rLyJjM2Z1dFUQ/18oqbxF0oBCAxrZjvDj/+MNr/ZwHNp14jNUtnsnzfnwU0+eCa8dFudhrvhWeRrTW8nXXtgVxe/yaj1DJfWXGTTce1xt93nc3HfVYa59OKHt2BCPGUqHSQJacXczaliMhftRQVV0WTHmzOy/a4NTEHIDGtiLBqCLJNx7XYalT8eEJbYl3LemqSFjYgaWEDtr9Xl+vZOj7ZWr6QP3u1iAkbs1g1shat6ptXVbOFeGpVOsg2H9cS6G6FU301O8/mm6xznZnKgphbdPo0DfdZafx4Qsv8bbdo81Eq3UKus//PAgDOphTRZe51xm7IxGPudQKX3iQxrfRUfC88i5MXC1l/MI8J32cSf6UQz3nXAVi9J5fJ/8wybjsnMps5kYYQySvU805YJi4zUxmyOp1rd/WminXwydZsXGem0mP+dXb+bnocd9MW6ok5pWXWS/ZEHCs9RM3NDI9GtdS84WXNiYuFZTiTBqnZOl7/JoPp/e3o0drSuPzExUL6fH4D15mpvBuWSW6BnuNJhbjOTDW+gOw9V0DXkOtlrkuIp0Wlg2zTMS2B7awY0M6KTaU8sfPy9ez+wJGPAu2YsDETjYWKX2fX560eNnz6052eSmp2MW/1sCFupiN9ntfwfnjmA+t93cua5a/V4vnGFhz5yPGh7VyxK4eUTB37pjnyYT87ElLvBOXq/+TwW3IRRz6qz9LXajHp+ywy83SllrP9TD6tnjFncGdrrmToOJty/6Hf9Vs6fjiax/ONy9ar0hbqGbUmg8D2GkZ2tTYuv5Wv5801GbzXx44Ts+pTqDMcT4fmFthoVBw8b3hB2PV7PgFtNWWqS4inSaWC7NdLhaRmF9OztSX922mIjS8gK8/0481GdrPGwVrFS+2t0OnhrR7WWFuo6NtWQ9KNO2FS28aMLs9aADDWx4ZjSYXGuaWqEHM6n3f8bKhvb0anFhZ0d7Ywrtt0TMu7frY4WKvo1MIC96bmHE4svRdlCG4N5mbQt62GTcdMh5cXbhQb58i8F97ATKVi9kD7MrVxYfQtzqYUYW6mMln+nz/yaVZXTX93DVYWKkb3tCE2Ph+VCl50s2LHGUMPcudZCTJRM1VqAmbTMS1922owV0OT2mpcG5mz9VetSW/CWJH6v//+90lqpjIM6UpjZaHCzkrF9Vs6almrSt+onK5n62haR13ququZxYzdkMHt/CjUwYD2JRt345aOvefymfsXQzANaKfh7xFZTO9vZ9y3ZT01B6Y/vIdYmucamhMyyJ6Xlt3Eu42lcWh5NVPH6cuGYSSAHnCwMrwG9XfX8N4/sxjdy4abOXq6OFner3ghnloVDrIiHWw5qeX6LR0RR+/0SizNKTXIyiNbqydbq8fRzozC4rL3yszVoNOVvn19ezNu5pSenA0c1Cz5qwOdWliUuv62LSe1FBZDt3vmoQ4mFJjMZ1XU0C7WOD9jztxBDkz8PpPYKfWoa2tGAwczvJwt2Ti6Tol9ujpZkleoZ/nOHPxdLTF/4m+oEaLqVfjPfu8f+ZipIGlhAy4vNjyOfuzI8aRCLt4s/+XLmzk6tp/Jp7BYz+c7btG5hQX2Vg/ujdlYGnptt4ezzzqqOZpUyPVbOn6/WkTUb3cm7V9007Bmfy7FOriSUcyxpDtDx5faa1gUc4v0XB3puYarjFczSx7DpmNa5v7F3ni8lxc3YGRXayKOlbx6WRmvdrSiu7Ml74cbLlz0bG3JqeQiYk7nU6SDPX8UsGpPDgBqM+jzvIZ/xuXRV4aVooaqcJBtOq5lqIe1SQ+gUS01vV01bK7AE9tOY0bUr1razU7jcGIhS4Y6PHSfTi0taOBghsfcNAB8XTR0bG6B12fXmfR9pvE2DYB3/GyxUKvwmJvG2A2ZNK97Z5g5wc+WNg3M8V10g57zb6A2U9HQwXQYmphmuM3k1Y6mvc3XvWzYdkpLXmHVfvVByCAH/kgpYt2BXGrbmLF2VG1CY28ZrgRH36Jn6zuh1d9dg4Vahc9zEmSiZlI9CV8+cjaliGFfpXNyVv3qbooiHTpfwKo9uawPql3dTRGiWsiMisKl5+pYtSeXVzpYVXdThKg2EmQK5zH3OjaWKl5+QYJM1FxPxNBSCCEqQ3pkQgjFkyATQiieBJkQQvEq9Ralk5eKCP35FrHx+chEmxDVb8+4qr05u6rY2lhTr25tNJpH8xa6CgfZyUtFDFh6Az2G903KJQMhql/rVi2quwmlysjM5mLyVZo3bfRIwqzCQRb68y30wFAPK+a/6oCledW8uVsIUX6P4uPgq1LtWoYPWrhxM4PGjZ6p8vIrPEcWG294r6WEmBCiLGrXsicn99F8onOFe2R6DMNJCTEhRHWTq5ZCCMWTIBNCKJ4EmRBC8STIhBCKJ0EmhFA8CTIhhOJJkAkhFO+xBpmTk9PjrE4IUUNIj0wIoXgSZEIIxavUx/gIIZQrIiKCwsI73+86ZMgQzM3N0Wq1/Pvf/zYu12g0DBo0CIC4uDgSEhKM6zw8PHB2dn58jb4PCTIhaqj8/HwKCgpKLNfr9Wi1pX+uWVFRkcm64uLyfxn3oyBBJkQNkpWVRW5uLmAIrLtdu3YNtVpNfn6+yXKdTkdKSgqAcd/bMjMzjeueeeYZzMyqZ7ZKgkyIGuTUqVOcO3eu1HU7duwodXlBQQHR0dGlrjtz5gxnzpwBYPjw4Wg01fNt9zLZL4Qolb29PebmyujrSJAJIUrl7e2No6NjdTejTCTIhBCKp4x+oxDisVCr1SV+v71Mp9OVuEDwpJAgE0IYDRw40Dhhr9Fo8PHxMd5i8csvv5CYmFidzbsvCTIhhNHdN8IOGDCAo0ePGm+veJLJHJkQQvEkyIQQiidDSyFEqaKjo9HpdNXdjDKRIBOiBnnuuedo3LjxIynbwsLikZRbFo81yJ7UKx5C1BSOjo6Kucm1PGSOTAiheBJkQgjFkyATQiieBJkQQvEkyIQQiidBJoRQvAoHmQowU0FB0ZP5bnghRM1R4SDzf16DTg8fbsqSMBNCPFRGZja2NtaPpGyVvoIfMHTyUhEDlt5Aj6FnppMsE6LaXV7coLqbUKqMzGzSrt+kedNGaDSWVV5+hYMMDGEW+vMtYuPzkRwTovrtGVf617hVN1sba+rVrf1IQgwqGWRCCPEkkKuWQgjFkyATQiieBJkQQvEkyIQQiidBJoRQPAkyIYTiSZAJIRRPgkwIoXgSZEIIxZMgE0IongSZEELxJMiEEIonQSaEUDwJMiGE4kmQCSEUT4JMCKF4EmRCCMUzr4pCTv52mqiYnykqLq5YI9RqAl/swwvt3KqiOUKIGqZKemSVCTGAouJiomJ+roqmCCFqoCrpkd0OsVnTP6jQ/p98trhSQSiEqNlkjkwIoXgSZEIIxVNskOXm5uLk5MThw4dNlp8/fx4nJyfOnz//SOotLi7Gw8ODuXPnPpLy77Z27VoCAgIAw3F5eXlx7dq1Kiu/Z8+ehIeHP3S7BQsWsHLlynKVPXPmTJycnEo8Jk6cCMDAgQNZunRpif26dOlCWFhYuep6mmRlZRF39DixO/ew/+BhLl+5Wt1NUoQqmSOrSQ4dOkR6ejo//fQTM2bMwMzs8bwWNGzYkKCgIOrWrQtAZGQks2fP5tixY4+8br1ej5WVVbn369y5M5999pnJMjs7u6pq1lMlKzub78MjOHwkDrVajYODPbm5eWi1Wp5t2YK/jRiG07Mtq7uZTywJsnKKjIxk8ODBREdHc+TIEbp16/ZY6rW1tSUoKOix1HUvvV5foQCysbGhVatWj6BFFafT6arsxaeqykpNS2PBolDUajXjx75Nh/btMDc3R6/X83//d4HNWyIJWbCEccFv0aljhypo+dNHsUPLsoqPj2fIkCG0bdsWX19fIiIiTNavWbMGLy8vOnbsyOTJk8nIyLhvWYWFhWzfvp2BAwfSu3dvIiMjTdYPHDiQuXPnMmzYMFxcXAgICOD06dOsXbsWDw8POnTowMyZM9HpdACEhITw5ptv8u677/LCCy/g5eXF5s2b73scTk5OpKenM2bMGCZNmkR6ejpOTk7s2rWLHTt20L59e5N9hgwZYjJ8+/bbb/Hw8KBLly4sWLCA4nuuFO/bt49+/frh5ubG0KFDOXfuHADe3t506GB4Av3000/4+/vTtm1bBg0axMmTJx90+qvUg+rOy8tjxowZtG/fnu7du7N06VLj8YWEhDB06FDeeustXF1dCQ8Pp0uXLsb/B4Dx48fz0Ucflbus/Px80tPTmThxIu3bt8fT05N58+aVOLf3U1RUROjyVTg42DPr4w9p6+rKP775lnET3mP2p4be7JTJE/Dx7slXX68l+fKVKjmXT5unPshGjx5Nu3btiImJYfz48cyYMYNff/0VgA0bNrBu3Tq++OILwsPDSU1NZdasWfcta8+ePZiZmeHp6cmLL75ITEwMRUVFJttERUUxbtw4IiIiqFOnDiNGjODQoUOsW7eOkJAQIiIiiI6ONm7/yy+/MHjwYA4ePMiYMWOYOnUqSUlJDzymZcuWsWjRIurUqcPp06fx9vZ+6HmIi4vj008/JTg4mPXr16PT6UhJSTGu//333xk3bhxjxowhKioKNzc3goKCKCwsxMvLizZt2pCYmMj777/PhAkTiI6Oxt3dnaCgIPLz8x9af2U9rO4PPviAy5cv869//YslS5YQHh5uMv937NgxfHx82LJlC/379ycrK4sTJ04Ahheoffv20b9//3KXZWlpyZw5c0hLS2Pz5s0sXbqUrVu38s0335TpuHb/Zx83btxk4jtjsbWx4buN/+Tcnwn89dW/UKuWA18s/xKtNp8Rw4bQrGlT/hXx76o6pU+VpzrIcnNzSUlJoVevXjRr1owhQ4awcOFCrK2tAfjHP/7B3//+dzw9PWndujXTp09n27ZtJcLptsjISPr06YNarcbb25uCggL27dtnss2IESPw9vbGzc2N0aNHk52dzbx582jbti39+vXDw8OD06dPG7fv0qULPj4+2NjY8MYbb+Dm5samTZseeFwajQZLS0vAMHxTq9UPPRdhYWH4+voyevRoXFxcmD59Og0aNDCuX7NmDa+88gqvvPIKLVq0YMaMGWRmZnL06FHjNklJSahUKvz8/GjevDnTpk1j0qRJaLXaUuvcv38/Li4uJo+CgoKHtrU0D6o7OTmZmJgYFi1aRJs2bejatSujRo1iy5Ytxv09PT15/fXXcXFxwd7enp49e/Lzz4absA8ePIilpSVdu3Ytd1kqlYrExEQ6dOhAq1at6Nq1K6Ghobi4uJTpuA4ficOrmyd16tQG4PKVq7w2dDC+Pr0IDhpFdvYtLiUno1KpCOwXwKkz8eTk5FToHD7Nnuo5MhsbG4KDgxk3bhw+Pj74+fnRv39/bGxsyMrKIjk5mWnTpjF9+nTAMBdUXFzM1atXadasmUlZubm57Ny5kxUrVgCGMPH19WXr1q34+voatzM3v3NKbW1tAYwT9LfblJube982u7q6cvHixcof/D0uXLiAv7+/ybK72xofH09CQgI//vijcVleXh6XL182/u7l5UWnTp3w9fUlICAAf39/Ro4ced95oo4dO5aY7LewsKhQ+x9U95EjR9Dr9fj5+Rm3LyoqwtHR8b71BgYGsmzZMj788EN27txJ3759UavVxMfHl7us8ePHM2XKFI4fP46fnx8DBw6kYcOGZTqu5MtX6O3nY/z9k/+ZYfx53/6D2NvZ0bRJEwCcnZ3Q6XRcTbmGcyunMpVfUyg2yCwsLDAzM6OwsNBk+e1XfI1GA8C0adMYNmwYsbGxhIWFsXjxYn744Qdq1za8An7++ee4urqalNGoUaMS9cXGxpKXl8fYsWNRqVSAYbLX0tISrVZboat6pbn3eKqKSqUy9uLuZ9SoUbz22msmy+rVq2f8WaPRsHHjRo4fP87u3bv5+OOPadKkCWFhYSaheNuDJvs1Gk2pvbOCggLj/92929+vbgBLS0uioqJM9nlQT7VPnz5Mnz6dP//8k9jYWObPn29cV96yAgIC8PT0JDY2ltjYWEJDQwkNDaVv37733ee2oqJCLEsJ95+2xbAlchtTp0zCxsba2C6gwr3ap5lih5YWFhY0a9bMZJgGcPr0aaytrWncuDEJCQksWbKE5s2bExQUxObNm6lVqxZbt27FwcGB+vXrk5ycTIsWLYwPR0fHUp+UkZGRDBgwgG3bthEVFWV8qFQqdu3aVeHjuHvCGeDUqVO0aNHiofvdDtPb7OzsyMvLMynv7lB89tln+eOPP0z20ev1xp+dnZ1JSEgocS7uvlq5e/dufvjhBzp27MiUKVPYsmULcXFxFZrwd3Z2LvF/d/HiRbKyskoNvwfV7ezsTEFBAdnZ2ca2N23a1KQXdS9bW1t69erFF198gVarxcvLy9iu8pRVUFDAwoULycnJYfDgwaxevZrBgwezfv36Mp2H2rVrk1LKvYFR0Tt4+aX+tHa+cy6upRi2u7uHLwwUG2QAb7/9NqtWrSI8PJyzZ88SGRnJwoULCQoKwszMDDs7O77++mtCQ0O5dOkSBw4cICUlBScnQ7c8ODiY5cuXExkZyaVLl1i5ciWDBw82eYIDZGZmsnfvXgYNGkSrVq2Mj9atW5d69bI8Dh8+TEREBBcvXmTJkiUkJiby6quvPnS/OnXqkJGRwYEDB8jIyKB169aoVCq+/PJLzp07x+rVq/ntt9+M2w8fPpxt27axc+dO8vLyCAsL48qVO1fA3n77bfbs2cPy5ctJSkpi+/bt9OrVy+SCQEFBAbNmzSIqKorLly8TFRWFubl5iWH4bXl5eSQlJZk8bt/Q+8Ybb3Do0CEWLVrEmTNnOHDgABMmTKBz587GK6R3e1DdTk5O9O7dmylTphAXF8f58+eZOHFiiWHtvQIDA4mJiaFPnz7GF6/ylmVpacnu3buZPXs2CQkJxMfHc/LkSePf2MO0c2vLocO/mPzN6fV63vzbcHp4md7ac+DwERwd69GwwTNlKrsmUezQEgxPTpVKxZo1a7hw4QKNGzcmKCiI4OBgwHAT6ddff838+fP56quvqFevHsHBwcarU6NGjSInJ4d58+aRkZGBu7s7S5YsKdHbiYmJwcrKiu7du5doQ2BgIBMmTCA7O7tCx9CuXTsOHTrEvHnzsLa2NvYgH8bT05Nu3boRHBzMsmXL6N27N3PmzCE0NJQ1a9bg5+dH586djdt37tyZadOmMW3aNPR6PX379sXZ2dm43t3dnRUrVvD555+zfPlymjdvzuzZs03megICApg6dSoLFiwgNTWVli1bsnLlSpOLBneLi4szmT8Ew1zXd999h4uLCxs2bGDx4sWsX78eKysr/P39mTFjRqllPazuxYsX88knnxAUFGSc45o8efIDz6G/vz9WVlb069fPZHl5y/rqq6+YPXs2L7/8MhqNBj8/P6ZOnfrAum97sa8/e/cfJDIqhoEDDO3Q6fWs+t9vmDxxPC/Udgcg4Xwiu3bvZeTwoWUqt6ZR6e/tflTAvIVfVPrTK8zVaj6a+l5lm6IoISEhnDt3jnXr1lV3U0Q12rN3P99u2MiA/gG8/FJgiamNY8dP8PXa9bR93pV3xo4u8UIrqqhHFvhinyr5YEUhaiKfXj0wV6vZsDGcfQcO0aF9O+rWrUtuXi7x8We5eCkZn149GDl8qITYfVRJkL3Qzk0+3VWISujRvRvubm3Zs3cfv589xx/n/sTK2hpnZyfefH0Ez7Z8+AWgmqxKhpZCCFGdFH3VUgghQIJMCPEUkCATQiieBJkQQvEkyIQQiidBJoRQPAkyIYTiSZAJIRRPgkwIoXgSZEIIxZMgE0IongSZEELxJMiEEIonQSaEUDwJMiGE4v0/o6b4azBd12AAAAAASUVORK5CYII="},92362:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/02-gtm-ss-amplitude-6f8f90af92e7fefe68e952297bed66cd.png"},28131:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/03-gtm-ss-amplitude-124150b9c2edaf9f44f0ae0067a19c0d.png"},70942:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/04-gtm-ss-amplitude-6a4fa14b82a12f661bf82f175c278709.png"},91408:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/07-gtm-ss-amplitude-dda2f8b6d3e860dc2e949e845b21440b.png"}}]);