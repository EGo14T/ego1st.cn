"use strict";(self.webpackChunkego_1st_cn=self.webpackChunkego_1st_cn||[]).push([[3515],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,f=g["".concat(u,".").concat(m)]||g[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8997:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Spring Cloud\u4e4bFeign \u8f6c\u53d1\u8bf7\u6c42\u5934(header\u53c2\u6570)",date:new Date("2020-08-16T11:38:54.000Z"),tags:["SpringCloud","\u5b66\u4e60\u7b14\u8bb0"]},u=void 0,c={permalink:"/Feign-header",source:"@site/blog/Feign-header.md",title:"Spring Cloud\u4e4bFeign \u8f6c\u53d1\u8bf7\u6c42\u5934(header\u53c2\u6570)",description:"\u5728\u505a\u63a5\u53e3\u8bf7\u6c42\u65f6\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u5728header\u5934\u4e2d\u589e\u52a0\u4e00\u4e9b\u9274\u6743\u4fe1\u606f\uff0c\u5982token \u6216 jwt\uff0c\u90a3\u4e48\u5728\u901a\u8fc7fegin\u4eceA server\u53bb\u8c03\u7528B server\u7684\u63a5\u53e3\u65f6\uff0c\u5982\u679cB server\u7684\u63a5\u53e3\u9700\u8981header\u4fe1\u606f\uff0c\u6211\u4eec\u9700\u8981\u5c06A sever\u83b7\u53d6\u7684header\u8f6c\u53d1\u5230B\u4e0a\u3002",date:"2020-08-16T11:38:54.000Z",formattedDate:"August 16, 2020",tags:[{label:"SpringCloud",permalink:"/tags/spring-cloud"},{label:"\u5b66\u4e60\u7b14\u8bb0",permalink:"/tags/\u5b66\u4e60\u7b14\u8bb0"}],readingTime:994,truncated:!0,authors:[],prevItem:{title:"Gateway\u8def\u7531\u914d\u7f6e\u4ece\u6570\u636e\u5e93\u6216Redis\u83b7\u53d6",permalink:"/GatewayRoutesFromDatabase"},nextItem:{title:"Java8\u65b0\u7279\u6027\u2014\u2014Optional",permalink:"/LearnJava8New3"}},s={authorsImageUrls:[]},p=[{value:"\u89e3\u51b3\u65b9\u5f0f",id:"\u89e3\u51b3\u65b9\u5f0f",children:[],level:2}],g={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u505a\u63a5\u53e3\u8bf7\u6c42\u65f6\uff0c\u6211\u4eec\u7ecf\u5e38\u4f1a\u5728header\u5934\u4e2d\u589e\u52a0\u4e00\u4e9b\u9274\u6743\u4fe1\u606f\uff0c\u5982token \u6216 jwt\uff0c\u90a3\u4e48\u5728\u901a\u8fc7fegin\u4eceA server\u53bb\u8c03\u7528B server\u7684\u63a5\u53e3\u65f6\uff0c\u5982\u679cB server\u7684\u63a5\u53e3\u9700\u8981header\u4fe1\u606f\uff0c\u6211\u4eec\u9700\u8981\u5c06A sever\u83b7\u53d6\u7684header\u8f6c\u53d1\u5230B\u4e0a\u3002"),(0,i.kt)("h2",{id:"\u89e3\u51b3\u65b9\u5f0f"},"\u89e3\u51b3\u65b9\u5f0f"),(0,i.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5b9e\u73b0Feign\u63d0\u4f9b\u7684\u4e00\u4e2a\u63a5\u53e3",(0,i.kt)("inlineCode",{parentName:"p"},"RequestInterceptor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class FeignConfiguration implements RequestInterceptor{\n    private final Logger logger = LoggerFactory.getLogger(getClass());\n            @Override\n            public void apply(RequestTemplate template) {\n                ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder\n                        .getRequestAttributes();\n                HttpServletRequest request = attributes.getRequest();\n                Enumeration<String> headerNames = request.getHeaderNames();\n                if (headerNames != null) {\n                    while (headerNames.hasMoreElements()) {\n                        String name = headerNames.nextElement();\n                        String values = request.getHeader(name);\n                        template.header(name, values);\n \n                    }\n                    logger.info("feign interceptor header:{}",template);\n                }\n            }\n        }\n')),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"@FeignClient"),"\u6ce8\u89e3\u91cc\u9762\u7684\u5c5e\u6027\u52a0\u4e0a",(0,i.kt)("inlineCode",{parentName:"p"},"configuration = FeignConfiguration.class"),"\u5c31\u53ef\u4ee5\u4e86\u3002\u5982"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@FeignClient(value = "xinmusic-music",configuration = FeignConfig.class)\n@RequestMapping("/music")\npublic interface MusicService {\n    //todo\n}\n')))}m.isMDXComponent=!0}}]);