"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[6887],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,c(c({ref:e},p),{},{components:r})):n.createElement(m,c({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75055:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Contracts",date:"2020-02-26",sidebar_position:70},c=void 0,i={unversionedId:"collecting-data/collecting-from-own-applications/python-tracker/contracts/index",id:"collecting-data/collecting-from-own-applications/python-tracker/contracts/index",title:"Contracts",description:"Python is a dynamically typed language, but each of our methods expects its arguments to be of specific types and value ranges. To avoid wrong inputs, the tracker takes two approaches:",source:"@site/docs/collecting-data/collecting-from-own-applications/python-tracker/contracts/index.md",sourceDirName:"collecting-data/collecting-from-own-applications/python-tracker/contracts",slug:"/collecting-data/collecting-from-own-applications/python-tracker/contracts/",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/contracts/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/collecting-data/collecting-from-own-applications/python-tracker/contracts/index.md",tags:[],version:"current",lastUpdatedAt:1662023745,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:70,frontMatter:{title:"Contracts",date:"2020-02-26",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Emitters",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/emitters/"},next:{title:"Logging",permalink:"/docs/collecting-data/collecting-from-own-applications/python-tracker/logging/"}},s={},l=[{value:"Contracts in tracker version 0.9.1",id:"contracts-in-tracker-version-091",level:2}],p={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Python is a dynamically typed language, but each of our methods expects its arguments to be of specific types and value ranges. To avoid wrong inputs, the tracker takes two approaches:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It specifies\xa0",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html"},"type hints"),"\xa0on each function argument and return value. This allows IDEs to validate function calls in your code and also enables static type checking using tools such as\xa0",(0,o.kt)("a",{parentName:"li",href:"http://mypy-lang.org/"},"mypy"),". However, type violations do not result in runtime errors."),(0,o.kt)("li",{parentName:"ol"},"It validates expected value ranges during runtime and throws\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"ValueError"),"\xa0errors in case they are violated. Contracts are defined for arguments to check that they belong to expected value ranges such as:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'s = Subject()\nt.set_platform("coffee") # throws ValueError because "coffee" is not one of supported platforms\nt.set_screen_resolution(width=-1, height=-1) # throws ValueError because width and height arguments have to be greater than 0\n')),(0,o.kt)("p",null,"You can turn off runtime contract validation like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from snowplow_tracker import disable_contracts\ndisable_contracts()\n")),(0,o.kt)("h2",{id:"contracts-in-tracker-version-091"},"Contracts in tracker version 0.9.1"),(0,o.kt)("p",null,"Earlier versions of the tracker up to v0.9.1 used the\xa0",(0,o.kt)("a",{parentName:"p",href:"http://andreacensi.github.io/contracts/"},"PyContracts"),"\xa0library to validate argument types and value ranges. In contrast with the latest versions, pycontracts was also used to validate argument types, raising\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"ContractNotRespected"),"\xa0errors at runtime when passing values with wrong types (this behavior was dropped in favor of type hints in Python 3):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'s = Subject()\nt.set_color_depth("walrus")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"contracts.interface.ContractNotRespected: Breach for argument 'depth' to Subject:set_color_depth().\nExpected type 'int', got 'str'.\nchecking: Int      for value: Instance of str: 'walrus'\nchecking: $(Int)   for value: Instance of str: 'walrus'\nchecking: int      for value: Instance of str: 'walrus'\nVariables bound in inner context:\n- self: Instance of Tracker: <snowplow_tracker.tracker.Tracker object...> [clip]\n")),(0,o.kt)("p",null,"If your value is of the wrong type, convert it before passing it into the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"track...()"),"\xa0method, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'level_idx = 42\nt.track_screen_view("Game Level", str(level_idx))\n')),(0,o.kt)("p",null,"You can turn off type checking to improve performance like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from snowplow_tracker import disable_contracts\ndisable_contracts()\n")))}u.isMDXComponent=!0}}]);