"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[27469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=o,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},71697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Marketo",date:"2020-02-26",sidebar_position:70},i=void 0,l={unversionedId:"collecting-data/collecting-data-from-third-parties/marketo/index",id:"collecting-data/collecting-data-from-third-parties/marketo/index",title:"Marketo",description:"Overview",source:"@site/docs/collecting-data/collecting-data-from-third-parties/marketo/index.md",sourceDirName:"collecting-data/collecting-data-from-third-parties/marketo",slug:"/collecting-data/collecting-data-from-third-parties/marketo/",permalink:"/docs/collecting-data/collecting-data-from-third-parties/marketo/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-data-from-third-parties/marketo/index.md",tags:[],version:"current",lastUpdatedAt:1661951716,formattedLastUpdatedAt:"Aug 31, 2022",sidebarPosition:70,frontMatter:{title:"Marketo",date:"2020-02-26",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Mandrill",permalink:"/docs/collecting-data/collecting-data-from-third-parties/mandrill/"},next:{title:"Olark",permalink:"/docs/collecting-data/collecting-data-from-third-parties/olark/"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Compatibility",id:"compatibility",level:3},{value:"Setup",id:"setup",level:2},{value:"Marketo",id:"marketo",level:2},{value:"Creating the webhook",id:"creating-the-webhook",level:3},{value:"Webhook payload template",id:"webhook-payload-template",level:3},{value:"2.1.3 Using the webhook",id:"213-using-the-webhook",level:3}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This webhook integration lets you track webhook events logged by\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.marketo.com/"},"Marketo"),"."),(0,o.kt)("h3",{id:"compatibility"},"Compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snowplow/snowplow/releases/tag/r107-trypillia"},"Snowplow R107 Trypillia")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://developers.marketo.com/webhooks/"},"Marketo webhooks"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Integrating Marketo's webhooks into Snowplow is a two-stage process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure Marketo to send events to Snowplow"),(0,o.kt)("li",{parentName:"ol"},"(Optional) Create the Marketo events tables for Amazon Redshift")),(0,o.kt)("h2",{id:"marketo"},"Marketo"),(0,o.kt)("h3",{id:"creating-the-webhook"},"Creating the webhook"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to\xa0",(0,o.kt)("strong",{parentName:"li"},"Admin"),"\xa0and click on\xa0",(0,o.kt)("strong",{parentName:"li"},"Webhooks"),"."),(0,o.kt)("li",{parentName:"ol"},"Click\xa0",(0,o.kt)("strong",{parentName:"li"},"New Webhook"),"."),(0,o.kt)("li",{parentName:"ol"},"Name and configure your webhook.")),(0,o.kt)("h3",{id:"webhook-payload-template"},"Webhook payload template"),(0,o.kt)("p",null,"Set the \u2018Request Token Encoding\u2019 to JSON and the \u2018Request Type\u2019 to POST. Enter your URL endpoint in the \u2018URL\u2019 box. The URL for your webhook is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},"http://collector.domain.com/com.marketo/v1?aid=<company code>\n")),(0,o.kt)("p",null,"To further distinguish the webhooks 3 additional fields are included: \u201cname\u201d, \u201cdescription\u201d and \u201cstep\u201d. In order to populate these fields custom tokens must be created for each webhook. Custom tokens (begins with \u2018{{my.\u2019 followed by the name you created for the token) can be created in either campaign folders or programs. For our custom \u201cstep\u201d field please create the custom token as a \u201cnumber\u201d type."),(0,o.kt)("p",null,"In the below example the webhook is called at the 3rd step in Campaign A\u2019s flow."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"),"\xa0change the token names for the first 3 fields to align with the event your own webhook is activated on.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{   \n   "name": {{my.Campaign A}},\n   "description": {{my.Campaign A desc}},\n   "step": {{my.Campaign A step}},\n   "campaign": {\n      "description": {{campaign.description}},\n      "id": {{campaign.id}},\n      "name": {{campaign.name}}\n   },\n   "company": {\n      "account_owner_email_address": {{company.Account Owner Email Address}},\n      "account_owner_first_name": {{company.Account Owner First Name}},\n      "account_owner_last_name": {{company.Account Owner Last Name}},\n      "annual_revenue": {{company.Annual Revenue}},\n      "billing_address": {{company.Billing Address}},\n      "billing_city": {{company.Billing City}},\n      "billing_country": {{company.Billing Country}},\n      "billing_postal_code": {{company.Billing Postal Code}},\n      "billing_state": {{company.Billing State}},\n      "name": {{company.Company Name}},\n      "notes": {{company.Company Notes}},\n      "industry": {{company.Industry}},\n      "main_phone": {{company.Main Phone}},\n      "num_employees": {{company.Num Employees}},\n      "parent_company_name": {{company.Parent Company Name}},\n      "sic_code": {{company.SIC Code}},\n      "site": {{company.Site}},\n      "website": {{company.Website}}\n   },\n   "lead": {\n      "acquisition_date": {{lead.Acquisition Date}},\n      "acquisition_program_name": {{lead.Acquisition Program Name}},\n      "acquisition_program": {{lead.Acquisition Program}},\n      "address": {{lead.Address}},\n      "anonymous_ip": {{lead.Anonymous IP}},\n      "black_listed": {{lead.Black Listed}},\n      "city": {{lead.City}},\n      "country": {{lead.Country}},\n      "created_at": {{lead.Created At}},\n      "date_of_birth": {{lead.Date of Birth}},\n      "department": {{lead.Department}},\n      "do_not_call_reason": {{lead.Do Not Call Reason}},\n      "do_not_call": {{lead.Do Not Call}},\n      "email_address": {{lead.Email Address}},\n      "email_invalid_cause": {{lead.Email Invalid Cause}},\n      "email_invalid": {{lead.Email Invalid}},\n      "email_suspended_at": {{lead.Email Suspended At}},\n      "email_suspended_cause": {{lead.Email Suspended Cause}},\n      "email_suspended": {{lead.Email Suspended}},\n      "fax_number": {{lead.Fax Number}},\n      "first_name": {{lead.First Name}},\n      "full_name": {{lead.Full Name}},\n      "inferred_city": {{lead.Inferred City}},\n      "inferred_company": {{lead.Inferred Company}},\n      "inferred_country": {{lead.Inferred Country}},\n      "inferred_metropolitan_area": {{lead.Inferred Metropolitan Area}},\n      "inferred_phone_area_code": {{lead.Inferred Phone Area Code}},\n      "inferred_postal_code": {{lead.Inferred Postal Code}},\n      "inferred_state_region": {{lead.Inferred State Region}},\n      "is_customer": {{lead.Is Customer}},\n      "is_partner": {{lead.Is Partner}},\n      "job_title": {{lead.Job Title}},\n      "last_interesting_moment_date": {{lead.Last Interesting Moment Date}},\n      "last_interesting_moment_description": {{lead.Last Interesting Moment Desc}},\n      "last_interesting_moment_source": {{lead.Last Interesting Moment Source}},\n      "last_interseting_moment_type": {{lead.Last Interesting Moment Type}},\n      "last_name": {{lead.Last Name}},\n      "lead_owner_email_address": {{lead.Lead Owner Email Address}},\n      "lead_owner_first_name": {{lead.Lead Owner First Name}},\n      "lead_owner_job_title": {{lead.Lead Owner Job Title}},\n      "lead_owner_last_name": {{lead.Lead Owner Last Name}},\n      "lead_owner_phone_numnber": {{lead.Lead Owner Phone Number}},\n      "lead_rating": {{lead.Lead Rating}},\n      "lead_score": {{lead.Lead Score}},\n      "lead_source": {{lead.Lead Source}},\n      "lead_status": {{lead.Lead Status}},\n      "lead_marketing_suspended": {{lead.Marketing Suspended}},\n      "facebook_display_name": {{lead.Marketo Social Facebook Display Name}},\n      "facebook_id": {{lead.Marketo Social Facebook Id}},\n      "facebook_photo_url": {{lead.Marketo Social Facebook Photo URL}},\n      "facebook_profile_url": {{lead.Marketo Social Facebook Profile URL}},\n      "facebook_reach": {{lead.Marketo Social Facebook Reach}},\n      "facebook_referred_enrollments": {{lead.Marketo Social Facebook Referred Enrollments}},\n      "facebook_referred_visits": {{lead.Marketo Social Facebook Referred Visits}},\n      "gender": {{lead.Marketo Social Gender}},\n      "last_referred_enrollment": {{lead.Marketo Social Last Referred Enrollment}},\n      "last_referred_visit": {{lead.Marketo Social Last Referred Visit}},\n      "linkedin_display_name": {{lead.Marketo Social LinkedIn Display Name}},\n      "linkedin_id": {{lead.Marketo Social LinkedIn Id}},\n      "linkedin_photo_url": {{lead.Marketo Social LinkedIn Photo URL}},\n      "linkedin_profile_url": {{lead.Marketo Social LinkedIn Profile URL}},\n      "linkedin_reach": {{lead.Marketo Social LinkedIn Reach}},\n      "linkedin_referred_enrollments": {{lead.Marketo Social LinkedIn Referred Enrollments}},\n      "linkedin_referred_visits": {{lead.Marketo Social LinkedIn Referred Visits}},\n      "syndication_id": {{lead.Marketo Social Syndication Id}},\n      "total_referred_enrollments": {{lead.Marketo Social Total Referred Enrollments}},\n      "total_referred_visits": {{lead.Marketo Social Total Referred Visits}},\n      "twitter_display_name": {{lead.Marketo Social Twitter Display Name}},\n      "twitter_id": {{lead.Marketo Social Twitter Id}},\n      "twitter_photo_url": {{lead.Marketo Social Twitter Photo URL}},\n      "twitter_profile_url": {{lead.Marketo Social Twitter Profile URL}},\n      "twitter_reach": {{lead.Marketo Social Twitter Reach}},\n      "twitter_referred_enrollments": {{lead.Marketo Social Twitter Referred Enrollments}},\n      "twitter_referred_visits": {{lead.Marketo Social Twitter Referred Visits}},\n      "middle_name": {{lead.Middle Name}},\n      "mobile_phone_number": {{lead.Mobile Phone Number}},\n      "number_of_optys": {{lead.Number of Optys}},\n      "original_referrer": {{lead.Original Referrer}},\n      "original_search_engine": {{lead.Original Search Engine}},\n      "original_search_phrase": {{lead.Original Search Phrase}},\n      "original_source_info": {{lead.Original Source Info}},\n      "original_source_type": {{lead.Original Source Type}},\n      "person_note": {{lead.Person Notes}},\n      "person_timezone": {{lead.Person Time Zone}},\n      "phone_number": {{lead.Phone Number}},\n      "postal_code": {{lead.Postal Code}},\n      "priority": {{lead.Priority}},\n      "registration_source_info": {{lead.Registration Source Info}},\n      "registration_source_type": {{lead.Registration Source Type}},\n      "relative_score": {{lead.Relative Score}},\n      "relative_urgency": {{lead.Relative Urgency}},\n      "role": {{lead.Role}},\n      "salutation": {{lead.Salutation}},\n      "state": {{lead.State}},\n      "total_opty_amount": {{lead.Total Opty Amount}},\n      "total_opty_expected_revenue": {{lead.Total Opty Expected Revenue}},\n      "unsubscribed_reason": {{lead.Unsubscribed Reason}},\n      "unsubscribed": {{lead.Unsubscribed}},\n      "updated_at": {{lead.Updated At}},\n      "urgency": {{lead.Urgency}}\n   },\n   "program": {\n      "description": {{program.description}},\n      "id": {{program.id}},\n      "name": {{program.name}}\n   },\n   "social": {\n      "promo_code": {{social.Promo Code}},\n      "share_url": {{social.Share Url}},\n      "email": {{social.Social Email}}\n   },\n   "sp_send_alert_info": {{SP_Send_Alert_Info}},\n   "datetime": {{system.dateTime}},\n   "forward_to_friend_link": {{system.forwardToFriendLink}},\n   "munkinId": {{system.munchkinId}},\n   "unsubscribed_link": {{system.unsubscribeLink}},\n   "view_as_webpage_link": {{system.viewAsWebpageLink}}\n}\n')),(0,o.kt)("h3",{id:"213-using-the-webhook"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/snowplow/snowplow/wiki/Marketo-webhook-setup#213-using-the-webhook"}),"2.1.3 Using the webhook"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create or edit an existing smart campaign."),(0,o.kt)("li",{parentName:"ol"},"Go to the\xa0",(0,o.kt)("strong",{parentName:"li"},"Flow"),"\xa0tab and drag in the\xa0",(0,o.kt)("strong",{parentName:"li"},"Call Webhook"),"\xa0flow action."),(0,o.kt)("li",{parentName:"ol"},"Select the name of the webhook from the first step.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can also use webhooks in a smart list."),(0,o.kt)("li",{parentName:"ul"},"You can also use webhooks in\xa0",(0,o.kt)("strong",{parentName:"li"},"Add Choice"),"\xa0in a flow step.")))),(0,o.kt)("p",null,"The selected webhook will now be called whenever people enter the smart campaign flow. If you\u2019d like to test a webhook before sending to Snowplow we recommend substituting the Snowplow webhook URL with a\xa0",(0,o.kt)("a",{parentName:"p",href:"https://requestb.in/"},"Request Bin")))}m.isMDXComponent=!0}}]);