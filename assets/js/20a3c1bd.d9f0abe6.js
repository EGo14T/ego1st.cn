"use strict";(self.webpackChunkego_1st_cn=self.webpackChunkego_1st_cn||[]).push([[5323],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),s=a,k=m["".concat(u,".").concat(s)]||m[s]||d[s]||l;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1033:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={title:"Java\u5e76\u53d1\u7f16\u7a0b1",date:new Date("2019-09-30T14:29:55.000Z"),tags:["\u5b66\u4e60\u7b14\u8bb0"]},u=void 0,p={permalink:"/JavaConcurrentProgramming",source:"@site/blog/JavaConcurrentProgramming.md",title:"Java\u5e76\u53d1\u7f16\u7a0b1",description:"\u6700\u8fd1\u5728\u770bJava\u5173\u4e8e\u7ebf\u7a0b\u7684\u76f8\u5173\u77e5\u8bc6\uff0c\u770b\u7684\u662f\u9a6c\u58eb\u5175\u8001\u5e08\u7684\u9ad8\u5e76\u53d1\u7f16\u7a0b\u7cfb\u5217av11076511\uff0c\u9042\u628a\u77e5\u8bc6\u70b9\u6574\u7406\u4e0b\u6765\uff0c\u4fbf\u4e8e\u4ee5\u540e\u67e5\u9605\u3002",date:"2019-09-30T14:29:55.000Z",formattedDate:"September 30, 2019",tags:[{label:"\u5b66\u4e60\u7b14\u8bb0",permalink:"/tags/\u5b66\u4e60\u7b14\u8bb0"}],readingTime:1727,truncated:!0,authors:[],prevItem:{title:"synchronized\u5173\u952e\u5b57",permalink:"/concurrent"},nextItem:{title:"SSH",permalink:"/SSH"}},c={authorsImageUrls:[]},d=[{value:"\u7ebf\u7a0b\u7684\u521b\u5efa",id:"\u7ebf\u7a0b\u7684\u521b\u5efa",children:[{value:"\u901a\u8fc7\u7ee7\u627f<code>Thread</code>\u7c7b\u5e76\u91cd\u5199<code>run()</code>\u65b9\u6cd5",id:"\u901a\u8fc7\u7ee7\u627fthread\u7c7b\u5e76\u91cd\u5199run\u65b9\u6cd5",children:[],level:3},{value:"\u901a\u8fc7\u7ee7\u627f<code>Runnable</code>\u63a5\u53e3\uff0c\u5e76\u5b9e\u73b0<code>run()</code>\u65b9\u6cd5",id:"\u901a\u8fc7\u7ee7\u627frunnable\u63a5\u53e3\u5e76\u5b9e\u73b0run\u65b9\u6cd5",children:[],level:3}],level:2},{value:"\u7ebf\u7a0b\u7684\u4e94\u79cd\u72b6\u6001",id:"\u7ebf\u7a0b\u7684\u4e94\u79cd\u72b6\u6001",children:[],level:2},{value:"\u7ebf\u7a0b\u540c\u6b65",id:"\u7ebf\u7a0b\u540c\u6b65",children:[],level:2}],m={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6700\u8fd1\u5728\u770bJava\u5173\u4e8e\u7ebf\u7a0b\u7684\u76f8\u5173\u77e5\u8bc6\uff0c\u770b\u7684\u662f\u9a6c\u58eb\u5175\u8001\u5e08\u7684\u9ad8\u5e76\u53d1\u7f16\u7a0b\u7cfb\u5217",(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/av11076511"},"av11076511"),"\uff0c\u9042\u628a\u77e5\u8bc6\u70b9\u6574\u7406\u4e0b\u6765\uff0c\u4fbf\u4e8e\u4ee5\u540e\u67e5\u9605\u3002"),(0,l.kt)("h2",{id:"\u7ebf\u7a0b\u7684\u521b\u5efa"},"\u7ebf\u7a0b\u7684\u521b\u5efa"),(0,l.kt)("h3",{id:"\u901a\u8fc7\u7ee7\u627fthread\u7c7b\u5e76\u91cd\u5199run\u65b9\u6cd5"},"\u901a\u8fc7\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"h3"},"Thread"),"\u7c7b\u5e76\u91cd\u5199",(0,l.kt)("inlineCode",{parentName:"h3"},"run()"),"\u65b9\u6cd5"),(0,l.kt)("p",null,"\u901a\u8fc7\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"p"},"Thread"),"\u7c7b\u5e76\u91cd\u5199",(0,l.kt)("inlineCode",{parentName:"p"},"run()"),"\u65b9\u6cd5\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"run()"),"\u65b9\u6cd5\u4e2d\u5b9a\u4e49\u9700\u8981\u7ebf\u7a0b\u6267\u884c\u7684\u4efb\u52a1\uff0c\u7136\u540e\u8c03\u7528\u5b9e\u73b0\u7c7b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"start()"),"\u65b9\u6cd5\u542f\u52a8\u8fd9\u4e2a\u7ebf\u7a0b\uff08ps\uff1a\u5355\u7eaf\u7684\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"run()"),"\u65b9\u6cd5\u53ea\u662f\u5355\u7eaf\u7684\u65b9\u6cd5\u4f7f\u7528\uff0c\u5e76\u4e0d\u80fd\u8fbe\u5230\u542f\u52a8\u7ebf\u7a0b\u7684\u76ee\u7684\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class Current extends Thread {\n    public void run() {\n        System.out.println("\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:" + Thread.currentThread().getId() +\n                ",\u540d\u5b57\u4e3a" + Thread.currentThread().getName());\n    }\n\n        public static void main(String[] args)  {\n            // \u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u5e76\u5f00\u542f\u7ebf\u7a0b\n            Current a = new Current();\n            a.start();\n            // \u591a\u521b\u5efa\u51e0\u4e2a\u7ebf\u7a0b\n            new Current().start();\n            new Current().start();\n            new Current().start();\n\n        }\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:14,\u540d\u5b57\u4e3aThread-2\n\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:12,\u540d\u5b57\u4e3aThread-0\n\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:13,\u540d\u5b57\u4e3aThread-1\n\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:15,\u540d\u5b57\u4e3aThread-3\n")),(0,l.kt)("h3",{id:"\u901a\u8fc7\u7ee7\u627frunnable\u63a5\u53e3\u5e76\u5b9e\u73b0run\u65b9\u6cd5"},"\u901a\u8fc7\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"h3"},"Runnable"),"\u63a5\u53e3\uff0c\u5e76\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"h3"},"run()"),"\u65b9\u6cd5"),(0,l.kt)("p",null,"\u901a\u8fc7\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"p"},"Runnable"),"\u63a5\u53e3\uff0c\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"run()"),"\u65b9\u6cd5\uff0c\u7136\u540e\u8c03\u7528\u5b9e\u73b0\u7c7b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"start\uff08\uff09"),"\u65b9\u6cd5\u542f\u52a8\u8fd9\u4e2a\u7ebf\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class WithRunnable implements Runnable {\n    @Override\n    public void run() {\n        System.out.println("\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:" + Thread.currentThread().getId() +\n                ",\u540d\u5b57\u4e3a" + Thread.currentThread().getName());\n    }\n\n    public static void main(String[] args)  {\n        // \u521b\u5efa\u4e00\u4e2a\u7ebf\u7a0b\u5e76\u5f00\u542f\u7ebf\u7a0b\n        Current a = new Current();\n        a.start();\n        // \u591a\u521b\u5efa\u51e0\u4e2a\u7ebf\u7a0b\n        new Current().start();\n        new Current().start();\n        new Current().start();\n\n    }\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:13,\u540d\u5b57\u4e3aThread-1\n\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:15,\u540d\u5b57\u4e3aThread-3\n\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:12,\u540d\u5b57\u4e3aThread-0\n\u5b50\u7ebf\u7a0b\u542f\u52a8,ID\u4e3a:14,\u540d\u5b57\u4e3aThread-2\n")),(0,l.kt)("h2",{id:"\u7ebf\u7a0b\u7684\u4e94\u79cd\u72b6\u6001"},"\u7ebf\u7a0b\u7684\u4e94\u79cd\u72b6\u6001"),(0,l.kt)("p",null,"\u7ebf\u7a0b\u6709\u4e94\u4e2a\u72b6\u6001"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u65b0\u751f\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"new"),"\uff09\uff1a\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"new"),"\u5173\u952e\u5b57\u65b0\u5efa\u4e86\u4e00\u4e2a\u7ebf\u7a0b\u5bf9\u8c61\u540e\uff0c\u8be5\u7ebf\u7a0b\u5bf9\u8c61\u5904\u4e8e\u65b0\u751f\u6001\uff0c\u6b64\u65f6\u5df2\u7ecf\u6709\u4e86\u81ea\u5df1\u7684\u5185\u5b58\u7a7a\u95f4"),(0,l.kt)("li",{parentName:"ol"},"\u5c31\u7eea\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"runnable"),"\uff09\uff1a\u8c03\u7528\u4e86",(0,l.kt)("inlineCode",{parentName:"li"},"start\uff08\uff09"),"\u65b9\u6cd5\u540e\uff0c\u7ebf\u7a0b\u4ece\u65b0\u751f\u6001\u8f6c\u5316\u4e3a\u5c31\u7eea\u6001\uff0c\u6b64\u65f6\u7ebf\u7a0b\u8fd8\u6ca1\u6709\u8fd0\u884c\uff0c\u5728\u7b49\u5f85CPU\u8c03\u5ea6"),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"running"),"\uff09\uff1a\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\u7684\u7ebf\u7a0b\u6b63\u5728\u6267\u884c\u81ea\u5df1\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"run()"),"\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ol"},"\u963b\u585e",(0,l.kt)("inlineCode",{parentName:"li"},"(blocked)"),"\uff1a\u7ebf\u7a0b\u6682\u505c\u6267\u884c\uff0c\u8ba9\u51faCPU\u65f6\u95f4\u7247\uff0c\u5e76\u5c06\u5176\u4ea4\u7ed9\u5176\u4ed6\u7ebf\u7a0b\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u6b7b\u4ea1",(0,l.kt)("inlineCode",{parentName:"li"},"dead"),"\uff1a\u5f53\u524d\u7ebf\u7a0b\u5b8c\u6210\u5de5\u4f5c\u6216\u8005\u629b\u51fa\u5f02\u5e38\u65f6\uff0c\u7ebf\u7a0b\u6b7b\u4ea1")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.ego1st.cn/postImg/xiancheng.png",alt:"\u7ebf\u7a0b\u7684\u72b6\u6001"})),(0,l.kt)("p",null,"\u4ee5\u4e0a\u7b80\u5355\u7684\u4ecb\u7ecd\u4e86\u4e00\u4e0b\u7ebf\u7a0b\u7684\u57fa\u7840\uff0c\u4e0b\u9762\u662f\u5173\u4e8e\u7ebf\u7a0b\u7684\u540c\u6b65\u95ee\u9898"),(0,l.kt)("h2",{id:"\u7ebf\u7a0b\u540c\u6b65"},"\u7ebf\u7a0b\u540c\u6b65"),(0,l.kt)("p",null,"\u5728\u5927\u591a\u6570\u5b9e\u9645\u7684\u591a\u7ebf\u7a0b\u5e94\u7528\u4e2d\uff0c \u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u7684\u7ebf\u7a0b\u9700\u8981\u5171\u4eab\u5bf9\u540c\u4e00\u6570\u636e\u7684\u5b58\u53d6\u3002\u5982\u679c\u4e24\u4e2a\u7ebf\u7a0b\u5b58\u53d6\u76f8\u540c\u7684\u5bf9\u8c61\uff0c \u5e76\u4e14\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u90fd\u8c03\u7528\u4e86\u4e00\u4e2a\u4fee\u6539\u8be5\u5bf9\u8c61\u72b6\u6001\u7684\u65b9\u6cd5\uff0c\u5c06\u4f1a\u53d1 \u751f\u4ec0\u4e48\u5462\uff1f \u53ef\u4ee5\u60f3\u8c61\uff0c\u7ebf\u7a0b\u5f7c\u6b64\u8e29\u4e86\u5bf9\u65b9\u7684\u811a\u3002\u6839\u636e\u5404\u7ebf\u7a0b\u8bbf\u95ee\u6570\u636e\u7684\u6b21\u5e8f\uff0c\u53ef\u80fd\u4f1a\u4ea7\u751fi\u5316 \u8bef\u7684\u5bf9\u8c61\u3002\u8fd9\u6837\u4e00\u4e2a\u60c5\u51b5\u901a\u5e38\u79f0\u4e3a\u7ade\u4e89\u6761\u4ef6\uff08race condition)\u3002\u4e3a\u4e86\u907f\u514d\u591a\u7ebf\u7a0b\u5f15\u8d77\u7684\u5bf9\u5171\u4eab\u6570\u636e\u7684\u8bf4\u8bef\uff0c\u5fc5\u987b\u5b66\u4e60\u5982\u4f55\u540c\u6b65\u5b58\u53d6\u3002"))}s.isMDXComponent=!0}}]);