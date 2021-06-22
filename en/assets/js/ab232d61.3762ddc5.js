(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3850],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return g}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),g=o,m=s["".concat(l,".").concat(g)]||s[g]||d[g]||c;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=s;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5440:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l},default:function(){return u}});var t=n(2122),o=n(9756),c=(n(7294),n(3905)),i={id:"recovery",title:"Recovery",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},a={unversionedId:"component/middleware/recovery",id:"component/middleware/recovery",isDocsHomePage:!1,title:"Recovery",description:"Kratos recovery \u4e2d\u95f4\u4ef6\u4f7f\u7528 recover() \u5b9e\u73b0\u4e86\u5f02\u5e38\u6062\u590d, \u7528\u4e8e\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u9632\u6b62\u7a0b\u5e8f\u76f4\u63a5\u9000\u51fa\u3002",source:"@site/docs/component/middleware/recovery.md",sourceDirName:"component/middleware",slug:"/component/middleware/recovery",permalink:"/en/docs/component/middleware/recovery",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/recovery.md",version:"current",frontMatter:{id:"recovery",title:"Recovery",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Metrics",permalink:"/en/docs/component/middleware/metrics"},next:{title:"Tracing",permalink:"/en/docs/component/middleware/tracing"}},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]}],p={toc:l};function u(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Kratos recovery \u4e2d\u95f4\u4ef6\u4f7f\u7528 recover() \u5b9e\u73b0\u4e86\u5f02\u5e38\u6062\u590d, \u7528\u4e8e\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u9632\u6b62\u7a0b\u5e8f\u76f4\u63a5\u9000\u51fa\u3002"),(0,c.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,c.kt)("p",null,"kratos recovery \u4e2d\u95f4\u4ef6\u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u914d\u7f6e\u65b9\u6cd5 ",(0,c.kt)("inlineCode",{parentName:"p"},"WithHandler()")," \u548c ",(0,c.kt)("inlineCode",{parentName:"p"},"WithLogger()")," \u3002"),(0,c.kt)("h4",{id:"withhandler"},(0,c.kt)("inlineCode",{parentName:"h4"},"WithHandler()")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"func WithHandler(h HandlerFunc) Option {\n    return func(o *options) {\n        o.handler = h\n    }\n}\n")),(0,c.kt)("p",null,"\u7528\u4e8e\u8bbe\u7f6e\u670d\u52a1\u5f02\u5e38\u65f6\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 handler \u8fdb\u884c\u5904\u7406\uff0c\u4f8b\u5982\u6295\u9012\u5f02\u5e38\u4fe1\u606f\u5230 sentry\u3002"),(0,c.kt)("h4",{id:"withlogger"},(0,c.kt)("inlineCode",{parentName:"h4"},"WithLogger()")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"func WithLogger(logger log.Logger) Option {\n    return func(o *options) {\n        o.logger = logger\n    }\n}\n")),(0,c.kt)("p",null,"\u7528\u4e8e\u8bbe\u7f6e\u4e2d\u95f4\u4ef6\u6253\u5370\u65e5\u5fd7\u65f6\u4f7f\u7528\u7684 logger\u3002"),(0,c.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,c.kt)("h4",{id:"http"},"http"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"var opts = []http.ServerOption{\n    http.Middleware(\n        recovery.Recovery(\n      recovery.WithLogger(log.DefaultLogger),\n            recovery.WithHandler(func(ctx context.Context, req, err interface{}) error {\n                    // do someting\n                    return nil\n            }),\n    ),\n    ),\n}\nsrv := http.NewServer(opts...)\n")),(0,c.kt)("h4",{id:"grpc"},"grpc"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},"var opts = []grpc.ServerOption{\n    grpc.Middleware(\n        recovery.Recovery(\n            recovery.WithLogger(log.DefaultLogger),\n            recovery.WithHandler(func(ctx context.Context, req, err interface{}) error {\n                // do someting\n                return nil\n            }),\n        ),\n    ),\n}\nsrv := grpc.NewServer(opts...)\n")))}u.isMDXComponent=!0}}]);