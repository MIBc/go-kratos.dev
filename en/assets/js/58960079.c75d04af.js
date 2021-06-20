(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5058],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5994:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={id:"layout",title:"Layout"},c={unversionedId:"intro/layout",id:"intro/layout",isDocsHomePage:!1,title:"Layout",description:"The kratos-layout is used by command kratos new for new project creation. The directory structures and tool chains are included in this layout project. Which help you be more efficient in developing. This project could also considered as the best practice of building microservices with Go and Kratos.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro/layout.md",sourceDirName:"intro",slug:"/intro/layout",permalink:"/en/docs/intro/layout",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/intro/layout.md",version:"current",frontMatter:{id:"layout",title:"Layout"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/en/docs/getting-started/start"},next:{title:"Usage",permalink:"/en/docs/getting-started/usage"}},s=[],l={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos-layout"},"kratos-layout")," is used by command ",(0,i.kt)("inlineCode",{parentName:"p"},"kratos new")," for new project creation. The directory structures and tool chains are included in this layout project. Which help you be more efficient in developing. This project could also considered as the best practice of building microservices with Go and Kratos."),(0,i.kt)("img",{src:"/images/ddd.jpg",alt:"kratos ddd",width:"500px"}),(0,i.kt)("p",null,"To create a new project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kratos new <project-name>\n")),(0,i.kt)("p",null,"The following directory structures will be generated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'.\n\u251c\u2500\u2500 go.mod           \n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 api        // Includes .proto API files and the .go files which generated from them.\n\u2502\xa0\xa0 \u2514\u2500\u2500 helloworld\n\u2502\xa0\xa0     \u251c\u2500\u2500 errors\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 helloworld.pb.go\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 helloworld.proto\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 helloworld_errors.pb.go\n\u2502\xa0\xa0     \u2514\u2500\u2500 v1\n\u2502\xa0\xa0         \u251c\u2500\u2500 greeter.pb.go\n\u2502\xa0\xa0         \u251c\u2500\u2500 greeter.proto\n\u2502\xa0\xa0         \u251c\u2500\u2500 greeter_grpc.pb.go\n\u2502\xa0\xa0         \u2514\u2500\u2500 greeter_http.pb.go\n\u251c\u2500\u2500 cmd    // The entry point of the kratos app\n\u2502\xa0\xa0 \u2514\u2500\u2500 server\n\u2502\xa0\xa0     \u251c\u2500\u2500 main.go\n\u2502\xa0\xa0     \u251c\u2500\u2500 wire.go  // wire library is for dependency injection\n\u2502\xa0\xa0     \u2514\u2500\u2500 wire_gen.go\n\u251c\u2500\u2500 configs     // The configuration files for local development.\n\u2502\xa0\xa0 \u2514\u2500\u2500 config.yaml\n\u2514\u2500\u2500 internal    // All the codes which are private. Business logics are often exist in there, under "internal" directory for preventing from unwilling import.\n    \u251c\u2500\u2500 conf    // The structure for configuration parsing, generated from .proto file\n    \u2502\xa0\xa0 \u251c\u2500\u2500 conf.pb.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 conf.proto\n    \u251c\u2500\u2500 data    // For accessing data sources. This layer is mainly used as the encapsulation of databases, caches etc. The implementation of repo interface which defined in biz layer should be placed here. In order to distinguish from DAO (data access object), the data layer stress on business. Its responsibility is to transform PO to DTO. We dropped the infra layer of DDD.\n    \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n    \u2502\xa0\xa0 \u251c\u2500\u2500 data.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 greeter.go\n    \u251c\u2500\u2500 biz     // The layer for composing business logics. It is similar to the domain layer in DDD. The interface of repo are defined in there, following the Dependence Inversion Principle.\n    \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n    \u2502\xa0\xa0 \u251c\u2500\u2500 biz.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 greeter.go\n    \u251c\u2500\u2500service  // The service layer which implements API definition. It is similar to the application layer in DDD. The transformations of DTO to DO and the composing of biz are processed in this layer. We should avoid to write complex business logics here. \n    \u2502   \u251c\u2500\u2500 README.md\n    \u2502   \u251c\u2500\u2500 greeter.go\n    \u2502   \u2514\u2500\u2500 service.go\n    \u2514\u2500\u2500 server  // The creation of http and grpc instance\n     \xa0\xa0 \u251c\u2500\u2500 grpc.go\n     \xa0\xa0 \u251c\u2500\u2500 http.go\n     \xa0\xa0 \u2514\u2500\u2500 server.go\n')))}u.isMDXComponent=!0}}]);