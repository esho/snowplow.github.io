"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[1247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),k=s,g=p["".concat(o,".").concat(k)]||p[k]||d[k]||r;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),s=(n(67294),n(3905));const r={title:"ZenDesk",date:"2020-02-26",sidebar_position:150},a=void 0,l={unversionedId:"collecting-data/collecting-data-from-third-parties/zendesk/index",id:"collecting-data/collecting-data-from-third-parties/zendesk/index",title:"ZenDesk",description:"Setting up a collector as a Zendesk extension",source:"@site/docs/collecting-data/collecting-data-from-third-parties/zendesk/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/zendesk",slug:"/collecting-data/collecting-data-from-third-parties/zendesk/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/zendesk/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/zendesk/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:150,frontMatter:{title:"ZenDesk",date:"2020-02-26",sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Vero",permalink:"/docs/collecting-data/collecting-data-from-third-parties/vero/"},next:{title:"Adjust",permalink:"/docs/collecting-data/collecting-data-from-third-parties/adjust-webhook/"}},o={},c=[{value:"Setting up a collector as a Zendesk extension",id:"setting-up-a-collector-as-a-zendesk-extension",level:2},{value:"2. Setting up a trigger for Zendesk event",id:"2-setting-up-a-trigger-for-zendesk-event",level:2},{value:"Setting up trigger conditions",id:"setting-up-trigger-conditions",level:3},{value:"Setting up body for ticket event",id:"setting-up-body-for-ticket-event",level:3},{value:"Setting up user contexts",id:"setting-up-user-contexts",level:3},{value:"Setting up body for ticket requester",id:"setting-up-body-for-ticket-requester",level:4},{value:"Setting up body for ticket assignee",id:"setting-up-body-for-ticket-assignee",level:4},{value:"Setting up body for ticket submitter",id:"setting-up-body-for-ticket-submitter",level:4},{value:"Setting up body for current user",id:"setting-up-body-for-current-user",level:4}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"setting-up-a-collector-as-a-zendesk-extension"},"Setting up a collector as a Zendesk extension"),(0,s.kt)("p",null,"You can configure Zendesk to automatically send\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"POST"),'\xa0requests to a (Clojure or Scala) collector. The first step is to set up a Zendesk "extension" pointing at the collector.'),(0,s.kt)("p",null,'Log in to Zendesk. Click the cogwheel-shaped "Admin" icon located at the bottom-left corner of the Dashboard page to take you to the\xa0',(0,s.kt)("em",{parentName:"p"},"Admin"),"\xa0page."),(0,s.kt)("p",null,'In the "SETTINGS" menu, click on "Extensions":'),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(11121).Z,width:"364",height:"405"})),(0,s.kt)("p",null,'Click "add target":'),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(18885).Z,width:"1029",height:"290"})),(0,s.kt)("p",null,'Choose "HTTP target" from the list of target types to add:'),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(54668).Z,width:"1208",height:"443"})),(0,s.kt)("p",null,'Name the new extension something like "Snowplow Collector - Iglu POST". The "Iglu POST" here represents the fact we will be sending Zendesk events and contexts to\xa0',(0,s.kt)("a",{parentName:"p",href:"/docs/collecting-data/collecting-data-from-third-parties/iglu-webhook/"},"Iglu webhook adapter"),"\xa0via\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0request."),(0,s.kt)("p",null,"In the\xa0",(0,s.kt)("strong",{parentName:"p"},"URL"),'\xa0field, enter "https://{{collctor',"_",'domain}}/com.snowplowanalytics.iglu/v1?aid=zendesk", replacing\xa0',(0,s.kt)("inlineCode",{parentName:"p"},"{{collctor_domain}}"),"\xa0with your collector domain."),(0,s.kt)("p",null,"You can optionally have\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"?aid={{my_zendesk_namespace}}"),"\xa0added to this URL, where\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"{{my_zendesk_namespace}}"),'\xa0is a label for the application (here: "zendesk"). This label will be attached to all events fired by the extension, so you can later check where a given event came from (useful if you have more than one Zendesk account).'),(0,s.kt)("p",null,"Set the\xa0",(0,s.kt)("strong",{parentName:"p"},"Method"),'\xa0field to "POST" and the\xa0',(0,s.kt)("strong",{parentName:"p"},"Content type"),'\xa0to "JSON" from the drop-down lists.'),(0,s.kt)("p",null,'Select "Create Target" and click the\xa0',(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"Submit")),"\xa0button."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(95445).Z,width:"1028",height:"652"})),(0,s.kt)("p",null,"We have set up our collector as a Zendesk extension. We can now add a trigger which sends\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"POST"),"\xa0requests to the collector whenever certain events occur."),(0,s.kt)("h2",{id:"2-setting-up-a-trigger-for-zendesk-event"},(0,s.kt)("a",{parentName:"h2",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#2-setting-up-a-trigger-for-zendesk-event"}),"2","."," Setting up a trigger for Zendesk event"),(0,s.kt)("h3",{id:"setting-up-trigger-conditions"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#setting-up-trigger-conditions"}),"Setting up trigger conditions"),(0,s.kt)("p",null,"From the\xa0",(0,s.kt)("em",{parentName:"p"},"Admin"),'\xa0page, select "Triggers" from the "BUSINESS RULES" menu and click "add trigger":'),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(26541).Z,width:"1263",height:"281"})),(0,s.kt)("p",null,'Name the trigger something like "Ticket created or updated" to reflect Zendesk data will be send on ticket creation and update events.'),(0,s.kt)("p",null,'Under "Meet ANY of the following conditions" header click\xa0',(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"Add condition")),'\xa0button to add 2 "Ticket: Is..." conditions and set them to "Created" and "Updated" respectively.'),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(51598).Z,width:"965",height:"639"})),(0,s.kt)("h3",{id:"setting-up-body-for-ticket-event"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#setting-up-body-for-ticket-event"}),"Setting up body for ticket event"),(0,s.kt)("p",null,'In the "Actions" section, click on\xa0',(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"Add action")),'\xa0button and select "Notify target" and "Snowplow Collector - Iglu POST" (the extension you set up in\xa0',(0,s.kt)("a",{parentName:"p",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#extension"},"Setting up a collector as a Zendesk extension"),"\xa0section above)."),(0,s.kt)("p",null,"In the\xa0",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"JSON body")),"\xa0box, paste the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.zendesk.snowplow/ticket_updated/jsonschema/1-0-0",\n  "data": {\n    "via": "{{ticket.via}}",\n    "ticketType": {% if ticket.ticket_type.size > 0 %}"{{ticket.ticket_type}}"{% else %}null{% endif %},\n    "updatedAt": "{{ticket.updated_at_with_timestamp}}",\n    "ticketId": {{ticket.id}},\n    "ticketTitle": "{{ticket.title}}",\n    "priority": {% if ticket.priority.size > 0 %}"{{ticket.priority}}"{% else %}null{% endif %},\n    "inBusinessHours": {{ticket.in_business_hours}},\n    "createdAt": "{{ticket.created_at_with_timestamp}}",\n    "account": "{{ticket.account}}",\n    "brand": "{{ticket.brand.name}}",\n    "url": "{{ticket.link}}",\n    "externalId": {% if ticket.external_id.size > 0 %}"{{ticket.external_id}}"{% else %}null{% endif %},\n    "organizationName": "{{ticket.organization.name}}",\n    "organizationId": {% if ticket.requester.organization.id %}{{ticket.requester.organization.id}}{% else %}null{% endif %},\n    "status": "{{ticket.status}}",\n    "dueDate": {% if ticket.due_date_with_timestamp.size > 0 %}"{{ticket.due_date_with_timestamp}}"{% else %}null{% endif %},\n    "tags": {% if ticket.tags.size > 0 %}"{{ticket.tags}}"{% else %}null{% endif %},\n    "ccNames": "{{ticket.cc_names}}",\n    "groupAssigned": "{{ticket.group.name}}",\n    "latestCommentAuthorName": "{{ticket.latest_comment.author.name}}",\n    "latestComment": "{{ticket.latest_comment.value}}",\n    "latestCommentIsPublic": {{ticket.latest_comment.is_public}}\n  }\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(56284).Z,width:"1252",height:"529"})),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"NOTE:"),"\xa0Ignore the warning on the left-hand side of the\xa0",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"JSON body")),"\xa0textbox. It is due to usage of\xa0",(0,s.kt)("a",{parentName:"p",href:"https://shopify.github.io/liquid/"},"Liquid markup"),"\xa0in JSON."),(0,s.kt)("h3",{id:"setting-up-user-contexts"},(0,s.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#setting-up-user-contexts"}),"Setting up user contexts"),(0,s.kt)("h4",{id:"setting-up-body-for-ticket-requester"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#setting-up-body-for-ticket-requester"}),"Setting up body for ticket requester"),(0,s.kt)("p",null,'In the "Actions" section, select the 2nd "Notify target" and "Snowplow Collector - Iglu POST" extension.'),(0,s.kt)("p",null,"In the\xa0",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"JSON body")),"\xa0box, paste the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.zendesk.snowplow/user/jsonschema/1-0-0",\n  "data": {\n      "ticketId": {{ticket.id}},\n      "updatedAt": "{{ticket.updated_at_with_timestamp}}",\n      "type": "requester",\n      "firstName": {% if ticket.requester.first_name.size > 0 %}"{{ticket.requester.first_name}}"{% else %}null{% endif %},\n      "lastName": {% if ticket.requester.last_name.size > 0 %}"{{ticket.requester.last_name}}"{% else %}null{% endif %},\n      "language": {% if ticket.requester.language.size > 0 %}"{{ticket.requester.language}}"{% else %}null{% endif %},\n      "tags": {% if ticket.requester.tags.size > 0 %}"{{ticket.requester.tags}}"{% else %}null{% endif %},\n      "locale": {% if ticket.requester.locale.size > 0 %}"{{ticket.requester.locale}}"{% else %}null{% endif %},\n      "notes": {% if ticket.requester.notes.size > 0 %}"{{ticket.requester.notes}}"{% else %}null{% endif %},\n      "timeZone": {% if ticket.requester.time_zone.size > 0 %}"{{ticket.requester.time_zone}}"{% else %}null{% endif %},\n      "userId": {% if ticket.requester.id %}{{ticket.requester.id}}{% else %}null{% endif %},\n      "phone": {% if ticket.requester.phone.size > 0 %}"{{ticket.requester.phone}}"{% else %}null{% endif %},\n      "extendedRole": {% if ticket.requester.extended_role.size > 0 %}"{{ticket.requester.extended_role}}"{% else %}null{% endif %},\n      "role": {% if ticket.requester.role.size > 0 %}"{{ticket.requester.role}}"{% else %}null{% endif %},\n      "details": {% if ticket.requester.details.size > 0 %}"{{ticket.requester.details}}"{% else %}null{% endif %},\n      "signature": {% if ticket.requester.signature.size > 0 %}"{{ticket.requester.signature}}"{% else %}null{% endif %},\n      "organization": {% if ticket.requester.organization.size > 0 %}"{{ticket.requester.organization}}"{% else %}null{% endif %},\n      "externalId": {% if ticket.requester.external_id.size > 0 %}"{{ticket.requester.external_id}}"{% else %}null{% endif %},\n      "email": {% if ticket.requester.email.size > 0 %}"{{ticket.requester.email}}"{% else %}null{% endif %}\n  }\n}\n')),(0,s.kt)("h4",{id:"setting-up-body-for-ticket-assignee"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#setting-up-body-for-ticket-assignee"}),"Setting up body for ticket assignee"),(0,s.kt)("p",null,'In the "Actions" section, select the 3nd "Notify target" and "Snowplow Collector - Iglu POST" extension.'),(0,s.kt)("p",null,"In the\xa0",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"JSON body")),"\xa0box, paste the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.zendesk.snowplow/user/jsonschema/1-0-0",\n  "data": {\n      "ticketId": {{ticket.id}},\n      "updatedAt": "{{ticket.updated_at_with_timestamp}}",\n      "type": "assignee",\n      "firstName": {% if ticket.assignee.first_name.size > 0 %}"{{ticket.assignee.first_name}}"{% else %}null{% endif %},\n      "lastName": {% if ticket.assignee.last_name.size > 0 %}"{{ticket.assignee.last_name}}"{% else %}null{% endif %},\n      "language": {% if ticket.assignee.language.size > 0 %}"{{ticket.assignee.language}}"{% else %}null{% endif %},\n      "tags": {% if ticket.assignee.tags.size > 0 %}"{{ticket.assignee.tags}}"{% else %}null{% endif %},\n      "locale": {% if ticket.assignee.locale.size > 0 %}"{{ticket.assignee.locale}}"{% else %}null{% endif %},\n      "notes": {% if ticket.assignee.notes.size > 0 %}"{{ticket.assignee.notes}}"{% else %}null{% endif %},\n      "timeZone": {% if ticket.assignee.time_zone.size > 0 %}"{{ticket.assignee.time_zone}}"{% else %}null{% endif %},\n      "userId": {% if ticket.assignee.id %}{{ticket.assignee.id}}{% else %}null{% endif %},\n      "phone": {% if ticket.assignee.phone.size > 0 %}"{{ticket.assignee.phone}}"{% else %}null{% endif %},\n      "extendedRole": {% if ticket.assignee.extended_role.size > 0 %}"{{ticket.assignee.extended_role}}"{% else %}null{% endif %},\n      "role": {% if ticket.assignee.role.size > 0 %}"{{ticket.assignee.role}}"{% else %}null{% endif %},\n      "details": {% if ticket.assignee.details.size > 0 %}"{{ticket.assignee.details}}"{% else %}null{% endif %},\n      "signature": {% if ticket.assignee.signature.size > 0 %}"{{ticket.assignee.signature}}"{% else %}null{% endif %},\n      "organization": {% if ticket.assignee.organization.size > 0 %}"{{ticket.assignee.organization}}"{% else %}null{% endif %},\n      "externalId": {% if ticket.assignee.external_id.size > 0 %}"{{ticket.assignee.external_id}}"{% else %}null{% endif %},\n      "email": {% if ticket.assignee.email.size > 0 %}"{{ticket.assignee.email}}"{% else %}null{% endif %}\n  }\n}\n')),(0,s.kt)("h4",{id:"setting-up-body-for-ticket-submitter"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#setting-up-body-for-ticket-submitter"}),"Setting up body for ticket submitter"),(0,s.kt)("p",null,'In the "Actions" section, select the 4th "Notify target" and "Snowplow Collector - Iglu POST" extension.'),(0,s.kt)("p",null,"In the\xa0",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"JSON body")),"\xa0box, paste the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.zendesk.snowplow/user/jsonschema/1-0-0",\n  "data": {\n      "ticketId": {{ticket.id}},\n      "updatedAt": "{{ticket.updated_at_with_timestamp}}",\n      "type": "submitter",\n      "firstName": {% if ticket.submitter.first_name.size > 0 %}"{{ticket.submitter.first_name}}"{% else %}null{% endif %},\n      "lastName": {% if ticket.submitter.last_name.size > 0 %}"{{ticket.submitter.last_name}}"{% else %}null{% endif %},\n      "language": {% if ticket.submitter.language.size > 0 %}"{{ticket.submitter.language}}"{% else %}null{% endif %},\n      "tags": {% if ticket.submitter.tags.size > 0 %}"{{ticket.submitter.tags}}"{% else %}null{% endif %},\n      "locale": {% if ticket.submitter.locale.size > 0 %}"{{ticket.submitter.locale}}"{% else %}null{% endif %},\n      "notes": {% if ticket.submitter.notes.size > 0 %}"{{ticket.submitter.notes}}"{% else %}null{% endif %},\n      "timeZone": {% if ticket.submitter.time_zone.size > 0 %}"{{ticket.submitter.time_zone}}"{% else %}null{% endif %},\n      "userId": {% if ticket.submitter.id %}{{ticket.submitter.id}}{% else %}null{% endif %},\n      "phone": {% if ticket.submitter.phone.size > 0 %}"{{ticket.submitter.phone}}"{% else %}null{% endif %},\n      "extendedRole": {% if ticket.submitter.extended_role.size > 0 %}"{{ticket.submitter.extended_role}}"{% else %}null{% endif %},\n      "role": {% if ticket.submitter.role.size > 0 %}"{{ticket.submitter.role}}"{% else %}null{% endif %},\n      "details": {% if ticket.submitter.details.size > 0 %}"{{ticket.submitter.details}}"{% else %}null{% endif %},\n      "signature": {% if ticket.submitter.signature.size > 0 %}"{{ticket.submitter.signature}}"{% else %}null{% endif %},\n      "organization": {% if ticket.submitter.organization.size > 0 %}"{{ticket.submitter.organization}}"{% else %}null{% endif %},\n      "externalId": {% if ticket.submitter.external_id.size > 0 %}"{{ticket.submitter.external_id}}"{% else %}null{% endif %},\n      "email": {% if ticket.submitter.email.size > 0 %}"{{ticket.submitter.email}}"{% else %}null{% endif %}\n  }\n}\n')),(0,s.kt)("h4",{id:"setting-up-body-for-current-user"},(0,s.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/snowplow/wiki/Zendesk-webhook-setup#setting-up-body-for-current-user"}),"Setting up body for current user"),(0,s.kt)("p",null,'In the "Actions" section, select the 5th (final) "Notify target" and "Snowplow Collector - Iglu POST" extention.'),(0,s.kt)("p",null,"In the\xa0",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"JSON body")),"\xa0box, paste the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": "iglu:com.zendesk.snowplow/user/jsonschema/1-0-0",\n  "data": {\n      "ticketId": {{ticket.id}},\n      "updatedAt": "{{ticket.updated_at_with_timestamp}}",\n      "type": "current_user",\n      "firstName": {% if current_user.first_name.size > 0 %}"{{current_user.first_name}}"{% else %}null{% endif %},\n      "lastName": {% if current_user.last_name.size > 0 %}"{{current_user.last_name}}"{% else %}null{% endif %},\n      "language": {% if current_user.language.size > 0 %}"{{current_user.language}}"{% else %}null{% endif %},\n      "tags": {% if current_user.tags.size > 0 %}"{{current_user.tags}}"{% else %}null{% endif %},\n      "locale": {% if current_user.locale.size > 0 %}"{{current_user.locale}}"{% else %}null{% endif %},\n      "notes": {% if current_user.notes.size > 0 %}"{{current_user.notes}}"{% else %}null{% endif %},\n      "timeZone": {% if current_user.time_zone.size > 0 %}"{{current_user.time_zone}}"{% else %}null{% endif %},\n      "userId": {% if current_user.id %}{{current_user.id}}{% else %}null{% endif %},\n      "phone": {% if current_user.phone.size > 0 %}"{{current_user.phone}}"{% else %}null{% endif %},\n      "extendedRole": {% if current_user.extended_role.size > 0 %}"{{current_user.extended_role}}"{% else %}null{% endif %},\n      "role": {% if current_user.role.size > 0 %}"{{current_user.role}}"{% else %}null{% endif %},\n      "details": {% if current_user.details.size > 0 %}"{{current_user.details}}"{% else %}null{% endif %},\n      "signature": {% if current_user.signature.size > 0 %}"{{current_user.signature}}"{% else %}null{% endif %},\n      "organization": {% if current_user.organization.size > 0 %}"{{current_user.organization}}"{% else %}null{% endif %},\n      "externalId": {% if current_user.external_id.size > 0 %}"{{current_user.external_id}}"{% else %}null{% endif %},\n      "email": {% if current_user.email.size > 0 %}"{{current_user.email}}"{% else %}null{% endif %}\n  }\n}\n')),(0,s.kt)("p",null,"Submit the new trigger by clicking\xa0",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"Create")),"\xa0button. It should look something like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(33053).Z,width:"1272",height:"606"})))}d.isMDXComponent=!0},18885:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-extension-d0f1cadc80c515fba9ba2f8780682330.png"},26541:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-trigger-button-2b2cf08ed2b193b48b6cddd69ec05662.png"},95445:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/extension-form-4fc613af29cbde8a2876f6a6e249e8df.png"},11121:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/extensions-button-371bebc45257a1de8edc107adb4d5bef.png"},54668:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/http-target-ea24a5ba3fc11a7065b41456521f8496.png"},56284:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/json-body-e06e6da2d1ecf2abfa96172d7e17cbe5.png"},33053:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/submit-target-b44ec8e7ca6f1bf57767b3b2c853e35e.png"},51598:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/trigger-conditions-291f41055b3389ade6c909f47ed2bfba.png"}}]);