"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[31021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={title:"Iterable Tag Configuration",date:"2021-11-24",sidebar_position:100},o=void 0,s={unversionedId:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration/index",id:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration/index",title:"Iterable Tag Configuration",description:"Iterable API Key (Required)",source:"@site/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration/index.md",sourceDirName:"forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration",slug:"/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration/",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/iterable-tag-configuration/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:100,frontMatter:{title:"Iterable Tag Configuration",date:"2021-11-24",sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"Iterable Tag for GTM SS",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/iterable-tag-for-gtm-ss/"},next:{title:"HTTP Request Tag for GTM SS",permalink:"/docs/forwarding-events-to-destinations/forwarding-events/google-tag-manager-server-side/http-request-tag-for-gtm-ss/"}},l={},d=[{value:"Iterable API Key (Required)",id:"iterable-api-key-required",level:2},{value:"Identity Settings",id:"identity-settings",level:2},{value:"Use client_id for anonymous users",id:"use-client_id-for-anonymous-users",level:3},{value:"Use email_address from common user data",id:"use-email_address-from-common-user-data",level:3},{value:"User user_id from common user data",id:"user-user_id-from-common-user-data",level:3},{value:"Identify Event",id:"identify-event",level:2},{value:"Use the default\xa0<code>identify</code>\xa0event",id:"use-the-defaultidentifyevent",level:3},{value:"Snowplow Event Mapping Options",id:"snowplow-event-mapping-options",level:2},{value:"Include Self Describing event",id:"include-self-describing-event",level:3},{value:"Snowplow Event Context Rules",id:"snowplow-event-context-rules",level:3},{value:"Extract entity from Array if single element",id:"extract-entity-from-array-if-single-element",level:4},{value:"Include all Entities in event_properties",id:"include-all-entities-in-event_properties",level:4},{value:"Include unmapped entities in event_properties",id:"include-unmapped-entities-in-event_properties",level:4},{value:"Additional Event Mapping Options",id:"additional-event-mapping-options",level:3},{value:"Event Property Rules",id:"event-property-rules",level:4},{value:"Include common event properties",id:"include-common-event-properties",level:5},{value:"Additional Event Property Mapping Rules",id:"additional-event-property-mapping-rules",level:5},{value:"User Property Rules",id:"user-property-rules",level:4},{value:"Include common user properties",id:"include-common-user-properties",level:5},{value:"Additional User Property Mapping Rules",id:"additional-user-property-mapping-rules",level:5},{value:"Advanced Event Settings",id:"advanced-event-settings",level:2},{value:"Merge user dataFields",id:"merge-user-datafields",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"iterable-api-key-required"},"Iterable API Key (Required)"),(0,a.kt)("p",null,"Set this to the API of your Iterable HTTP API Data Source."),(0,a.kt)("p",null,"Iterable provides four different types of API keys, each of which can access a different subset of Iterable's API endpoints. For the endpoints currently in use (",(0,a.kt)("inlineCode",{parentName:"p"},"events/track"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"users/update"),") the Javascript type key has enough permissions. The Mobile and Standard key types have more permissions than the Javascript type, so can also be used."),(0,a.kt)("h2",{id:"identity-settings"},"Identity Settings"),(0,a.kt)("p",null,"Iterable requires users to be identified to work best. The options in this section configure how you wish to identify users to Iterable based on your Snowplow events."),(0,a.kt)("h3",{id:"use-client_id-for-anonymous-users"},"Use client","_","id for anonymous users"),(0,a.kt)("p",null,"Specify whether client","_","id is used to create a placeholder email for anonymous users. This is useful for implementations where there is no identifiers for a user besides device identifiers (such as Browser Cookies)."),(0,a.kt)("h3",{id:"use-email_address-from-common-user-data"},"Use email","_","address from common user data"),(0,a.kt)("p",null,"Use email","_","address from common user data. For Snowplow Tracking, the common user data can be populated by using the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"iglu:com.google.tag-manager.server-side/user_data/jsonschema/1-0-0"),"\xa0context entity. This schema is available on\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-central/blob/853357452300b172ebc113d1d75d1997f595142a/schemas/com.google.tag-manager.server-side/user_data/jsonschema/1-0-0"},"Iglu Central"),"."),(0,a.kt)("p",null,"Deselecting this option allows for any other properties of the event to be selected for the e-mail","_","address property on the Iterable event."),(0,a.kt)("h3",{id:"user-user_id-from-common-user-data"},"User user","_","id from common user data"),(0,a.kt)("p",null,"Iterable can also accept a User Id, rather than the preferred e-mail address. Enabling this property will use the user","_","id property from the server-side common event as the userId identifier of the user."),(0,a.kt)("h2",{id:"identify-event"},"Identify Event"),(0,a.kt)("p",null,"Iterable allows for user information to be updated once a user has identified themselves. For example, to update their placeholder email to their real email address."),(0,a.kt)("h3",{id:"use-the-defaultidentifyevent"},"Use the default\xa0",(0,a.kt)("inlineCode",{parentName:"h3"},"identify"),"\xa0event"),(0,a.kt)("p",null,"To Identify a user to Iterable, you can send a Self Describing\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Identify"),"\xa0event. This schema is available on Iglu Central."),(0,a.kt)("p",null,"For example, using the JavaScript Tracker v3, this would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"window.snowplow('trackSelfDescribingEvent', {\n  schema: 'iglu:com.snowplowanalytics.snowplow/identify/jsonschema/1-0-0',\n  data: {\n    id: '2c5ba856-ee07-47b5-a3a6-63100026ed63',\n    email: 'john.doe@example.com'\n  }\n})\n")),(0,a.kt)("p",null,"If you would like to specify your own event, disabling this option allows you to select your own event name and properties which can used to fire identity updates to Iterable."),(0,a.kt)("p",null,'In general, "identity events" are the event names which will make the Iterable Tag call the\xa0',(0,a.kt)("inlineCode",{parentName:"p"},"/users/update"),"\xa0",(0,a.kt)("a",{parentName:"p",href:"https://api.iterable.com/api/docs#users_updateUser"},"API endpoint"),"\xa0(create or update a user), using the identifiers and the user","_","data specified by the tag configuration. These events might be different than the default Snowplow Identify schema, for example sign","_","up, login etc, from your own custom event schemas."),(0,a.kt)("h2",{id:"snowplow-event-mapping-options"},"Snowplow Event Mapping Options"),(0,a.kt)("h3",{id:"include-self-describing-event"},"Include Self Describing event"),(0,a.kt)("p",null,"Indicates if a Snowplow Self Describing event should be in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"dataFields"),"\xa0object."),(0,a.kt)("h3",{id:"snowplow-event-context-rules"},"Snowplow Event Context Rules"),(0,a.kt)("p",null,"This section describes how the Iterable tag will use the context Entities attached to a Snowplow Event."),(0,a.kt)("h4",{id:"extract-entity-from-array-if-single-element"},"Extract entity from Array if single element"),(0,a.kt)("p",null,"Snowplow Entities are always in Arrays, as multiple of the same entity can be attached to an event. This option will pick the single element from the array if the array only contains a single element."),(0,a.kt)("h4",{id:"include-all-entities-in-event_properties"},"Include all Entities in event","_","properties"),(0,a.kt)("p",null,"Leaving this option enabled ensures that all Entities on an event will be included within the Event Data of the Iterable event."),(0,a.kt)("p",null,"If disabling this, individual entities can be selected for inclusion. These entities can also be remapped to have different names in the Iterable event, and can be included in either event data or user data. The entity can be specified in two different formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Major version match:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"x-sp-contexts_com_snowplowanalytics_snowplow_webPage_1"),"\xa0where\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"com_snowplowanalytics_snowplow"),"\xa0is the event vendor,\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"webPage"),"\xa0is the schema name and\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"\xa0is the Major version number.\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"x-sp-"),"\xa0can also be omitted from this if desired"),(0,a.kt)("li",{parentName:"ul"},"Full schema match:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"iglu:com.snowplowanalytics.snowplow/webPage/jsonschema/1-0-0"))),(0,a.kt)("h4",{id:"include-unmapped-entities-in-event_properties"},"Include unmapped entities in event","_","properties"),(0,a.kt)("p",null,"If remapping or moving some entities to User Data with the above customization, you may wish to ensure all unmapped entities are still included in the event. Enabling this option will ensure that all entities are mapped into the Iterable event."),(0,a.kt)("h3",{id:"additional-event-mapping-options"},"Additional Event Mapping Options"),(0,a.kt)("p",null,"If you wish to map other properties from a Client event into an Iterable event they can be specified in this section."),(0,a.kt)("h4",{id:"event-property-rules"},"Event Property Rules"),(0,a.kt)("h5",{id:"include-common-event-properties"},"Include common event properties"),(0,a.kt)("p",null,"Enabling this ensures properties from the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"Common Event"),"\xa0are automatically mapped to the Iterable Event Data."),(0,a.kt)("h5",{id:"additional-event-property-mapping-rules"},"Additional Event Property Mapping Rules"),(0,a.kt)("p",null,"Specify the Property Key from the Client Event, and then the key you could like to map it to or leave the mapped key blank to keep the same name. You can use Key Path notation here (e.g.\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-tp2.p"),"\xa0for a Snowplow events platform or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-contexts.com_snowplowanalytics_snowplow_web_page_1.0.id"),"\xa0for a Snowplow events page view id (in array index 0) or pick non-Snowplow properties if using an alternative Client."),(0,a.kt)("h4",{id:"user-property-rules"},"User Property Rules"),(0,a.kt)("h5",{id:"include-common-user-properties"},"Include common user properties"),(0,a.kt)("p",null,"Enabling this ensures user","_","data properties from the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-platform/tag-manager/server-side/common-event-data"},"Common Event"),"\xa0are automatically mapped to the Iterable Event Properties."),(0,a.kt)("h5",{id:"additional-user-property-mapping-rules"},"Additional User Property Mapping Rules"),(0,a.kt)("p",null,"Specify the Property Key from the Client Event, and then the key you could like to map it to or leave the mapped key blank to keep the same name. You can use Key Path notation here (e.g.\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-tp2.p"),"\xa0for a Snowplow events platform or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"x-sp-contexts.com_snowplowanalytics_snowplow_web_page_1.0.id"),"\xa0for a Snowplow events page view id (in array index 0) or pick non-Snowplow properties if using an alternative Client."),(0,a.kt)("h2",{id:"advanced-event-settings"},"Advanced Event Settings"),(0,a.kt)("h3",{id:"merge-user-datafields"},"Merge user dataFields"),(0,a.kt)("p",null,"Enabling this option will merge the user dataFields when updating an Iterable user, instead of replacing with the new user data, which is the default behavior."))}u.isMDXComponent=!0}}]);