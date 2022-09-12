"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[99923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||p[g]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const r={title:"Adding and removing users in Console",date:"2020-02-15",sidebar_position:30},a=void 0,s={unversionedId:"using-the-snowplow-console/managing-users-2/index",id:"using-the-snowplow-console/managing-users-2/index",title:"Adding and removing users in Console",description:"There are two ways to add and remove users in console; directly managed in console, or managed through your SSO provider.",source:"@site/docs/using-the-snowplow-console/managing-users-2/index.md",sourceDirName:"using-the-snowplow-console/managing-users-2",slug:"/using-the-snowplow-console/managing-users-2/",permalink:"/docs/using-the-snowplow-console/managing-users-2/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/using-the-snowplow-console/managing-users-2/index.md",tags:[],version:"current",lastUpdatedAt:1662988377,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:30,frontMatter:{title:"Adding and removing users in Console",date:"2020-02-15",sidebar_position:30},sidebar:"defaultSidebar",previous:{title:"Managing users",permalink:"/docs/using-the-snowplow-console/managing-users/"},next:{title:"Pipeline Components and Applications",permalink:"/docs/pipeline-components-and-applications/"}},l={},u=[{value:"Managing users directly in console",id:"managing-users-directly-in-console",level:2},{value:"Setting up Single-Sign-On authentication",id:"setting-up-single-sign-on-authentication",level:2},{value:"Permissions",id:"permissions",level:3},{value:"Requirements",id:"requirements",level:3},{value:"How to enable SSO for your account",id:"how-to-enable-sso-for-your-account",level:3},{value:"Which Identity Providers (IdPs) are supported?",id:"which-identity-providers-idps-are-supported",level:3},{value:"What information will you need from us?",id:"what-information-will-you-need-from-us",level:3},{value:"What happens when SSO is enabled?",id:"what-happens-when-sso-is-enabled",level:3},{value:"Adding new users",id:"adding-new-users",level:4},{value:"Existing users",id:"existing-users",level:4},{value:"Logging in\xa0",id:"logging-in",level:4},{value:"Disabling SSO",id:"disabling-sso",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two ways to add and remove users in console; directly managed in console, or managed through your SSO provider."),(0,o.kt)("h2",{id:"managing-users-directly-in-console"},"Managing users directly in console"),(0,o.kt)("p",null,"For organizations not using SSO, users can be added and removed directly in Console by navigating to ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage users")," in the navigation and creating a new user, or removing an existing user from there."),(0,o.kt)("p",null,"Newly added users will receive an email to set their password and will be added with limited permission, which you can then widen."),(0,o.kt)("h2",{id:"setting-up-single-sign-on-authentication"},"Setting up Single-Sign-On authentication"),(0,o.kt)("p",null,"SSO is an authentication process that allows users to access multiple applications after signing in to a central Identity Provider. Snowplow supports SSO integration for the majority of identity providers."),(0,o.kt)("h3",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Only system administrators can set up SSO for their company."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SSO is available to customers on the Ascent & Summit tiers."),(0,o.kt)("li",{parentName:"ul"},"Your identity provider must adhere to the OASIS SAML 2.0 protocol."),(0,o.kt)("li",{parentName:"ul"},"All users of an SSO-enabled instance of Snowplow must authenticate through the identity provider.")),(0,o.kt)("h3",{id:"how-to-enable-sso-for-your-account"},"How to enable SSO for your account"),(0,o.kt)("p",null,"Setting up SSO for your account requires some information to be exchanged between you as the Identity Provider and Snowplow as the Service Provider."),(0,o.kt)("p",null,"Depending on your Identity Provider the information that is required is slightly different."),(0,o.kt)("p",null,"To enable SSO for Snowplow ",(0,o.kt)("strong",{parentName:"p"},"please contact your Customer Success representative or send a support ticket requesting SSO to be enabled"),". We will then work with you to exchange the relevant information and set up the SSO connection.\xa0"),(0,o.kt)("h3",{id:"which-identity-providers-idps-are-supported"},"Which Identity Providers (IdPs) are supported?"),(0,o.kt)("p",null,"Snowplow\u2019s SSO capability enables connections with many IdPs, including:\xa0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Active Directory/LDAP"),(0,o.kt)("li",{parentName:"ul"},"ADFS"),(0,o.kt)("li",{parentName:"ul"},"Azure Active Directory"),(0,o.kt)("li",{parentName:"ul"},"Azure Active Directory Native"),(0,o.kt)("li",{parentName:"ul"},"Google Workspace"),(0,o.kt)("li",{parentName:"ul"},"OpenID Connect"),(0,o.kt)("li",{parentName:"ul"},"Okta"),(0,o.kt)("li",{parentName:"ul"},"PingFederate"),(0,o.kt)("li",{parentName:"ul"},"SAML")),(0,o.kt)("p",null,"Note that because we can support OpenID Connect and SAML, it should be possible to support virtually any external Identity Provider that uses those standards."),(0,o.kt)("h3",{id:"what-information-will-you-need-from-us"},"What information will you need from us?"),(0,o.kt)("p",null,"This will differ depending on your Identity Provider, but typically will include information such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Entity ID -")," the URL that identifies the identity provider issuing a SAML request,\xa0 this will be specific to your identity provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Metadata URL")," - the URL that allows access to obtain SSO configuration data,\xa0 this will be specific to your identity provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redirect Login URL")," - the URL where users in the company sign in to the identity provider."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security Certificate Fingerprint")," ","-"," the SHA-1 or SHA-256 fingerprint of the SAML certificate that can be obtained from your identity provider and allows us to create a secure connection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User information mapping")," ","-"," locations of information required by Snowplow console such as first name, last name and, optionally, job title.")),(0,o.kt)("h3",{id:"what-happens-when-sso-is-enabled"},"What happens when SSO is enabled?"),(0,o.kt)("h4",{id:"adding-new-users"},"Adding new users"),(0,o.kt)("p",null,"Snowplow supports just-in-time provisioning with SSO connections. When a user logs in for the first time, a corresponding user account with the same email is created in Snowplow."),(0,o.kt)("p",null,"A new user created via SSO will have a custom permissions set that allows them to view-only, as outlined below. This can then be edited by anyone with the Admin role on your account. For more details on setting user access, see ","[","LINK","]","(Setting User Permissions)."),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Console feature")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Permissions"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"User management"),(0,o.kt)("td",null,"No access")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Environments"),(0,o.kt)("td",null,"View access")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Data structures"),(0,o.kt)("td",null,"View access")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Data models & jobs"),(0,o.kt)("td",null,"View access")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"API keys"),(0,o.kt)("td",null,"View access")))),(0,o.kt)("h4",{id:"existing-users"},"Existing users"),(0,o.kt)("p",null,"If a user already has a Snowplow account prior to SSO being enabled, the two accounts will be merged the users current permissions will be applied."),(0,o.kt)("h4",{id:"logging-in"},"Logging in\xa0"),(0,o.kt)("p",null,"When SSO is enabled, anybody who signs into Snowplow Console with an email address that uses your specified domain will be authenticated via SSO and your Identity Provider."),(0,o.kt)("p",null,"Once SSO is enabled, users on your domain can no longer sign in with their old email address and password, or manage their personal details or password as these will all be managed within your Identity Provider."),(0,o.kt)("h3",{id:"disabling-sso"},"Disabling SSO"),(0,o.kt)("p",null,"If your company enables SSO, and later decides to disable it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users who did not set up a password before SSO was enabled must click Reset password on the login page to obtain a password."),(0,o.kt)("li",{parentName:"ul"},"Users who set up a password before SSO was enabled can login with their old username and password.")))}p.isMDXComponent=!0}}]);