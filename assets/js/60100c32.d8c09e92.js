"use strict";(self.webpackChunkdocsite_poc_github_io=self.webpackChunkdocsite_poc_github_io||[]).push([[99435],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(i),m=l,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return i?n.createElement(b,r(r({ref:t},p),{},{components:i})):n.createElement(b,r({ref:t},p))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,r=new Array(a);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},60669:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(87462),l=(i(67294),i(3905));const a={title:"Ruby client",date:"2021-03-26",sidebar_position:60},r=void 0,o={unversionedId:"pipeline-components-and-applications/iglu/iglu-clients/ruby-client/index",id:"pipeline-components-and-applications/iglu/iglu-clients/ruby-client/index",title:"Ruby client",description:"This page refers to version 0.2.0 of the Iglu Ruby client.",source:"@site/docs/pipeline-components-and-applications/iglu/iglu-clients/ruby-client/index.md",sourceDirName:"pipeline-components-and-applications/iglu/iglu-clients/ruby-client",slug:"/pipeline-components-and-applications/iglu/iglu-clients/ruby-client/",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-clients/ruby-client/",draft:!1,editUrl:"https://github.com/snowplow/snowplow.github.io/tree/main/docs/pipeline-components-and-applications/iglu/iglu-clients/ruby-client/index.md",tags:[],version:"current",lastUpdatedAt:1661787e3,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:60,frontMatter:{title:"Ruby client",date:"2021-03-26",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"ObjC client",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-clients/objc-client/"},next:{title:"Scala client",permalink:"/docs/pipeline-components-and-applications/iglu/iglu-clients/scala-client-setup/"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Client compatibility",id:"client-compatibility",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"RubyGems",id:"rubygems",level:3},{value:"Manual Setup",id:"manual-setup",level:3},{value:"Clone the client",id:"clone-the-client",level:4},{value:"Build a gem",id:"build-a-gem",level:4},{value:"Initialization",id:"initialization",level:2},{value:"Importing the library",id:"importing-the-library",level:3},{value:"JSON-based initialization",id:"json-based-initialization",level:3},{value:"Usage",id:"usage",level:2},{value:"Validating JSON",id:"validating-json",level:2},{value:"Core entities",id:"core-entities",level:3},{value:"Embedded registry",id:"embedded-registry",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page refers to version 0.2.0 of the Iglu Ruby client."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-ruby-client"},"Iglu Ruby client")," allows you to resolve JSON Schemas from embedded and remote repositories."),(0,l.kt)("p",null,"This client library should be straightforward to use if you are comfortable with Ruby development."),(0,l.kt)("h3",{id:"client-compatibility"},"Client compatibility"),(0,l.kt)("p",null,"The Ruby client was tested with Ruby\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"2.1"),",\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"2.2"),",\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"2.4"),",\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"JRuby 9.0.5.0"),"\xa0and\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"JRuby 9.1.6.0"),"."),(0,l.kt)("h3",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"The library is dependant on\xa0",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ruby-json-schema/json-schema"},"Ruby JSON Schema Validator"),"\xa0library for all JSON Schema validation and\xa0",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jnunemaker/httparty"},"httparty"),"\xa0for HTTP requests."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("h3",{id:"rubygems"},"RubyGems"),(0,l.kt)("p",null,"Ruby Iglu Client is published on\xa0",(0,l.kt)("a",{parentName:"p",href:"https://rubygems.org/"},"RubyGems.org"),"."),(0,l.kt)("p",null,"You can either install it in shell via\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"gem"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ gem install iglu-ruby-client\n")),(0,l.kt)("p",null,"or add it to\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Gemfile"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"gem 'iglu-ruby-client'\n")),(0,l.kt)("h3",{id:"manual-setup"},"Manual Setup"),(0,l.kt)("p",null,"You can also build and install gem locally in case you need to introduce some changes."),(0,l.kt)("h4",{id:"clone-the-client"},(0,l.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/iglu/wiki/Ruby-client-setup#clone-the-client"}),"Clone the client"),(0,l.kt)("p",null,"First, git clone the latest version of the client to your local machine:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git clone https://github.com/snowplow/iglu-ruby-client.git\n")),(0,l.kt)("p",null,"If you don't have git installed locally,\xa0",(0,l.kt)("a",{parentName:"p",href:"http://git-scm.com/downloads"},"install it"),"\xa0first."),(0,l.kt)("h4",{id:"build-a-gem"},(0,l.kt)("a",{parentName:"h4",href:"https://github.com/snowplow/iglu/wiki/Ruby-client-setup#build-a-gem"}),"Build a gem"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ cd iglu-ruby-client\n$ gem build iglu-ruby-client.gemspec\n$ gem install iglu-ruby-client-0.1.0.gem\n")),(0,l.kt)("h2",{id:"initialization"},"Initialization"),(0,l.kt)("p",null,"Assuming you have completed the setup for your Ruby project, you are now ready to initialize the Ruby client."),(0,l.kt)("h3",{id:"importing-the-library"},"Importing the library"),(0,l.kt)("p",null,"All entities can be accessed by importing ",(0,l.kt)("inlineCode",{parentName:"p"},"iglu-client")," package.",(0,l.kt)("br",{parentName:"p"}),"\n","Client is placed in ",(0,l.kt)("inlineCode",{parentName:"p"},"Iglu::Resolver")," module, while core entities are in root ",(0,l.kt)("inlineCode",{parentName:"p"},"Iglu")," module."),(0,l.kt)("p",null,"You are now ready to instantiate a Ruby Client."),(0,l.kt)("h3",{id:"json-based-initialization"},"JSON-based initialization"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'require \'iglu-client\'\n\nresolver_config = {:schema => "iglu:com.snowplowanalytics.iglu/resolver-config/jsonschema/1-0-2",\n :data => {\n   :cacheSize => 500,\n   :repositories => [{:name => "Iglu Central", :priority => 0, :vendorPrefixes => ["com.snowplowanalytics"], :connection => {:http => {:uri => "http://iglucentral.com"}}}]\n  }\n}\n\nresolver = Iglu::Resolver.parse(resolver_config)\n')),(0,l.kt)("p",null,"Note that it is highly recommended to use JSONs as hashes with symbolized keys, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON.parse(json, {:symbolize_names => true})")," to parse JSON with all keys as symbols instead of strings."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h2",{id:"validating-json"},"Validating JSON"),(0,l.kt)("p",null,"Once you have successfully created a client you can start validating your self-describing JSON."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"json = resolver_config      # resolver config is plain self-describing JSON!\nresolver.validate(json)     # this will return same `json` value in case of success or throw IgluError in case of any failure\n")),(0,l.kt)("p",null,"Unlike Iglu Scala Client which never throws exceptions and return errors as values, Ruby client uses more common for dynamic languages approach,",(0,l.kt)("br",{parentName:"p"}),"\n","specifically it throws ",(0,l.kt)("inlineCode",{parentName:"p"},"IgluError")," exception on any non-success case, like non-self-describing JSON, not found schema, connection error etc and returns plain value (same self-describing JSON) on success."),(0,l.kt)("p",null,"To just lookup schema without any self-describing JSON, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"lookup_schema")," method, which accepts schema key as object or URI."),(0,l.kt)("h3",{id:"core-entities"},"Core entities"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"iglu-ruby-client")," gem also provides entities specific to ",(0,l.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/common-architecture/iglu-core/"},"Iglu core's"),".",(0,l.kt)("br",{parentName:"p"}),"\n","Specifically, you can initialize and utilize entities such as schema key, self-describing data, SchemaVer etc.",(0,l.kt)("br",{parentName:"p"}),"\n","Same classes will be included in Iglu Ruby Core library when it'll be released."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'schema_key = SchemaKey.new("com.acme", "event", "jsonschema", SchemaVer.new(1,0,2))\n# or \nschema_key = SchemaKey.parse("iglu:com.acme/event/jsonschema/1-0-2")\n')),(0,l.kt)("h3",{id:"embedded-registry"},"Embedded registry"),(0,l.kt)("p",null,"Ruby Client supports somewhat similar to ",(0,l.kt)("a",{parentName:"p",href:"/docs/pipeline-components-and-applications/iglu/iglu-repositories/jvm-embedded-repo/"},"JVM embedded")," registry.",(0,l.kt)("br",{parentName:"p"}),"\n","It also can be constructed from ",(0,l.kt)("inlineCode",{parentName:"p"},"embedded")," connection using path inside gems and JRuby jars (created using warbler) but it has few important differences with JVM embedded registry:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It can accept absolute filesystem paths"),(0,l.kt)("li",{parentName:"ul"},"Paths are relative from ruby file where registry is initialized"),(0,l.kt)("li",{parentName:"ul"},"There's no way to automatically merge all embedded registries, each should be created explicitly")),(0,l.kt)("p",null,"Our own's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/snowplow/iglu-ruby-client/blob/0.1.0/lib/iglu-client/bootstrap.rb"},"bootstrap resolver")," can be used as an example on how to use embedded registries in Ruby."))}u.isMDXComponent=!0}}]);