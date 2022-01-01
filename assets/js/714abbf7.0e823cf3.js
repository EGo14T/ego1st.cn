"use strict";(self.webpackChunkego_1st_cn=self.webpackChunkego_1st_cn||[]).push([[2],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},m=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),s=p(t),d=o,h=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return t?r.createElement(h,i(i({ref:e},m),{},{components:t})):r.createElement(h,i({ref:e},m))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6221:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"synchronized\u5173\u952e\u5b57",date:new Date("2019-10-08T10:18:47.000Z"),tags:["\u5b66\u4e60\u7b14\u8bb0"]},c=void 0,p={permalink:"/concurrent",source:"@site/blog/concurrent.md",title:"synchronized\u5173\u952e\u5b57",description:"synchronized\u5173\u952e\u5b57\u7684\u610f\u4e49",date:"2019-10-08T10:18:47.000Z",formattedDate:"October 8, 2019",tags:[{label:"\u5b66\u4e60\u7b14\u8bb0",permalink:"/tags/\u5b66\u4e60\u7b14\u8bb0"}],readingTime:3226,truncated:!0,authors:[],prevItem:{title:"volatile\u5173\u952e\u5b57",permalink:"/volatile"},nextItem:{title:"Java\u5e76\u53d1\u7f16\u7a0b1",permalink:"/JavaConcurrentProgramming"}},m={authorsImageUrls:[]},u=[{value:"<code>synchronized</code>\u5173\u952e\u5b57\u7684\u610f\u4e49",id:"synchronized\u5173\u952e\u5b57\u7684\u610f\u4e49",children:[],level:2},{value:"<code>synchronized</code>\u5173\u952e\u5b57\u7684\u4f5c\u7528",id:"synchronized\u5173\u952e\u5b57\u7684\u4f5c\u7528",children:[],level:2},{value:"<code>synchronized</code>\u5173\u952e\u5b57\u7684\u6ce8\u610f\u70b9",id:"synchronized\u5173\u952e\u5b57\u7684\u6ce8\u610f\u70b9",children:[],level:2},{value:"<code>synchronized</code>\u7684\u539f\u7406",id:"synchronized\u7684\u539f\u7406",children:[{value:"\u540c\u6b65\u4ee3\u7801\u5757",id:"\u540c\u6b65\u4ee3\u7801\u5757",children:[],level:3},{value:"\u540c\u6b65\u65b9\u6cd5",id:"\u540c\u6b65\u65b9\u6cd5",children:[],level:3}],level:2}],s={toc:u};function d(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"synchronized\u5173\u952e\u5b57\u7684\u610f\u4e49"},(0,a.kt)("inlineCode",{parentName:"h2"},"synchronized"),"\u5173\u952e\u5b57\u7684\u610f\u4e49"),(0,a.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u4ee3\u7801\u5757\u53d7\u5e76\u53d1\u8bbf\u95ee\u7684\u5e72\u6270\uff0cJava\u8bed\u8a00\u63d0\u4f9b\u4e00\u4e2a synchronized\u5173\u952e\u5b57\u8fbe \u5230\u8fd9\u4e00\u76ee\u7684\uff0c\u5e76\u4e14 Java SE 5.0\u5f15\u5165\u4e86 ReentrantLock \u7c7b\u3002synchronized \u5173\u952e\u5b57\u81ea\u52a8\u63d0\u4f9b\u4e00\u4e2a \u9501\u4ee5\u53ca\u76f8\u5173\u7684\u201c \u6761\u4ef6\u201d\uff0c \u5bf9\u4e8e\u5927\u591a\u6570\u9700\u8981\u663e\u5f0f\u9501\u7684\u60c5\u51b5\uff0c \u8fd9\u662f\u5f88\u4fbf\u5229\u7684\u3002"),(0,a.kt)("h2",{id:"synchronized\u5173\u952e\u5b57\u7684\u4f5c\u7528"},(0,a.kt)("inlineCode",{parentName:"h2"},"synchronized"),"\u5173\u952e\u5b57\u7684\u4f5c\u7528"),(0,a.kt)("p",null,"synchronized\u5173\u952e\u5b57\u662f\u5bf9\u67d0\u4e2a\u5bf9\u8c61\u52a0\u9501"),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u4ee5\u4e0b\u4ee3\u7801\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private Object o = new Object();\npublic void m() {\n    synchronized(o) { //\u4efb\u4f55\u7ebf\u7a0b\u8981\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5fc5\u987b\u5148\u62ff\u5230o\u7684\u9501\n        count--;\n        System.out.println(Thread.currentThread().getName() + " count = " + count);\n        }\n}\n')),(0,a.kt)("p",null,"\u8fd8\u6709\u53e6\u4e00\u79cd\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public void m() {   \n    synchronized(this) { //\u4efb\u4f55\u7ebf\u7a0b\u8981\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5fc5\u987b\u5148\u62ff\u5230this\u7684\u9501      \n        count--;                \n        System.out.println(Thread.currentThread().getName() + " count = " + count);   \n    }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u7b49\u540c\u4e8e\u5982\u4e0b\u4ee3\u7801\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public synchronized void m() { //\u7b49\u540c\u4e8e\u5728\u65b9\u6cd5\u7684\u4ee3\u7801\u6267\u884c\u65f6\u8981synchronized(this)   \n    count--;   \n    System.out.println(Thread.currentThread().getName() + " count = " + count);\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u5173\u952e\u5b57\u4fee\u9970\u65b9\u6cd5\u65f6\uff0c\u9501\u5b9a\u7684\u662fthis\uff0c\u4e5f\u5c31\u662f\u8be5\u5bf9\u8c61\u672c\u8eab\uff1b\u5f53",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u5173\u952e\u5b57\u4fee\u9970\u7684\u662f\u9759\u6001\u65b9\u6cd5\u6216\u8005\u9759\u6001\u53d8\u91cf\u65f6\uff0c\u9501\u5b9a\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u5bf9\u8c61.class")),(0,a.kt)("h2",{id:"synchronized\u5173\u952e\u5b57\u7684\u6ce8\u610f\u70b9"},(0,a.kt)("inlineCode",{parentName:"h2"},"synchronized"),"\u5173\u952e\u5b57\u7684\u6ce8\u610f\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u65b9\u6cd5\u548c\u975e\u540c\u6b65\u65b9\u6cd5\u53ef\u4ee5\u540c\u65f6\u8c03\u7528\uff0c\u539f\u56e0\u662f\u8c03\u7528\u975e\u540c\u6b65\u65b9\u6cd5\u65f6\u4e0d\u9700\u8981\u62ff\u5230\u9501")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5e94\u7528\u573a\u666f\u4e2d\uff0c\u5bf9\u5199\u65b9\u6cd5\uff08set\uff09\u52a0\u9501\uff0c\u5bf9\u8bfb\u65b9\u6cd5\uff08get\uff09\u4e0d\u52a0\u9501\uff0c\u5bb9\u6613\u4ea7\u751f\u810f\u8bfb\u95ee\u9898\uff0c\u539f\u56e0\u662f\uff0c\u5728\u2460\u7ebf\u7a0b\u5199\u5165\u64cd\u4f5c\u8fd8\u6ca1\u6709\u5b8c\u6210\u65f6\uff0c\u6b64\u65f6\u2461\u7ebf\u7a0b\u8bfb\u53d6\u6570\u636e\uff0c\u6b64\u65f6\u8bfb\u5230\u7684\u6570\u636e\u4e0d\u662f\u5b9e\u9645\u5199\u5165\u7684\u6570\u636e")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u540c\u6b65\u65b9\u6cd5\u53ef\u4ee5\u8c03\u7528\u53e6\u4e00\u4e2a\u540c\u6b65\u65b9\u6cd5\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u5df2\u7ecf\u62e5\u6709\u67d0\u4e2a\u5bf9\u8c61\u7684\u9501\uff0c\u518d\u6b21\u7533\u8bf7\u7684\u65f6\u5019\uff0c\u4ecd\u7136\u4f1a\u5f97\u5230\u8be5\u5bf9\u8c61\u7684\u9501\uff0c\u4e5f\u5c31\u662f\u8bf4",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u83b7\u5f97\u7684\u9501\u662f\u53ef\u91cd\u5165\u7684")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u91cd\u5165\u9501\u7684\u5b9e\u73b0\u673a\u5236\u662f\uff1a\u6bcf\u4e00\u4e2a\u9501\u5173\u8054\u4e00\u4e2a\u7ebf\u7a0b\u6301\u6709\u8005\u548c\u8ba1\u6570\u5668\uff0c\u5f53\u8ba1\u6570\u5668\u4e3a 0 \u65f6\u8868\u793a\u8be5\u9501\u6ca1\u6709\u88ab\u4efb\u4f55\u7ebf\u7a0b\u6301\u6709\uff0c\u90a3\u4e48\u4efb\u4f55\u7ebf\u7a0b\u90fd\u53ef\u80fd\u83b7\u5f97\u8be5\u9501\u800c\u8c03\u7528\u76f8\u5e94\u7684\u65b9\u6cd5\uff1b\u5f53\u67d0\u4e00\u7ebf\u7a0b\u8bf7\u6c42\u6210\u529f\u540e\uff0cJVM\u4f1a\u8bb0\u4e0b\u9501\u7684\u6301\u6709\u7ebf\u7a0b\uff0c\u5e76\u4e14\u5c06\u8ba1\u6570\u5668\u7f6e\u4e3a 1\uff1b\u6b64\u65f6\u5176\u5b83\u7ebf\u7a0b\u8bf7\u6c42\u8be5\u9501\uff0c\u5219\u5fc5\u987b\u7b49\u5f85\uff1b\u800c\u8be5\u6301\u6709\u9501\u7684\u7ebf\u7a0b\u5982\u679c\u518d\u6b21\u8bf7\u6c42\u8fd9\u4e2a\u9501\uff0c\u5c31\u53ef\u4ee5\u518d\u6b21\u62ff\u5230\u8fd9\u4e2a\u9501\uff0c\u540c\u65f6\u8ba1\u6570\u5668\u4f1a\u9012\u589e\uff1b\u5f53\u7ebf\u7a0b\u9000\u51fa\u540c\u6b65\u4ee3\u7801\u5757\u65f6\uff0c\u8ba1\u6570\u5668\u4f1a\u9012\u51cf\uff0c\u5982\u679c\u8ba1\u6570\u5668\u4e3a 0\uff0c\u5219\u91ca\u653e\u8be5\u9501\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b50\u7c7b\u53ef\u4ee5\u8c03\u7528\u7236\u7c7b\u7684\u540c\u6b65\u65b9\u6cd5\uff0c\u9501\u4f4f\u7684\u662f\u5b50\u7c7b\u5bf9\u8c61")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u540c\u6b65\u65b9\u6cd5\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u51fa\u73b0\u5f02\u5e38\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u9501\u4f1a\u88ab\u91ca\u653e\uff0c\u82e5\u4e0d\u60f3\u88ab\u91ca\u653e\uff0c\u5219\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"catch"),"\u5f02\u5e38")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u540c\u6b65\u4ee3\u7801\u5757\u4e2d\u7684\u8bed\u53e5\u8d8a\u5c11\u8d8a\u597d\uff0c\u91c7\u7528\u7ec6\u7c92\u5ea6\u7684\u9501\uff0c\u53ef\u4ee5\u4f7f\u7ebf\u7a0b\u4e89\u7528\u7684\u65f6\u95f4\u53d8\u77ed\uff0c\u4ece\u800c\u63d0\u9ad8\u6548\u7387")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9501\u5b9a\u7684\u67d0\u4e2a\u5bf9\u8c61o\uff0c\u5982\u679co\u7684\u5c5e\u6027\u53d1\u751f\u6539\u53d8\uff0c\u4e0d\u5f71\u54cd\u9501\u7684\u4f7f\u7528\uff0c\u4f46\u662f\u5982\u679co\u53d8\u6210\u53e6\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5219\u9501\u5b9a\u7684\u5bf9\u8c61\u53d1\u751f\u6539\u53d8\uff0c\u5982\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class T {\n    Object o = new Object();\n    void m() {\n        synchronized(o) {\n            while(true) {\n                try {\n                    TimeUnit.SECONDS.sleep(1);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n                System.out.println(Thread.currentThread().getName());\n            }\n        }\n    }\n    public static void main(String[] args) {\n        T t = new T();\n        //\u542f\u52a8\u7b2c\u4e00\u4e2a\u7ebf\u7a0b\n        new Thread(t::m, "t1").start();\n        \n        try {\n            TimeUnit.SECONDS.sleep(3);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        //\u521b\u5efa\u7b2c\u4e8c\u4e2a\u7ebf\u7a0b\n        Thread t2 = new Thread(t::m, "t2");\n        //\u9501\u5bf9\u8c61\u53d1\u751f\u6539\u53d8\uff0c\u6240\u4ee5t2\u7ebf\u7a0b\u5f97\u4ee5\u6267\u884c\uff0c\u5982\u679c\u6ce8\u91ca\u6389\u8fd9\u53e5\u8bdd\uff0c\u7ebf\u7a0b2\u5c06\u6c38\u8fdc\u5f97\u4e0d\u5230\u6267\u884c\u673a\u4f1a\n        t.o = new Object(); \n        t2.start();\n        \n    }\n}\n\n\u8f93\u51fa\uff1a\nt1\nt1\nt1\nt2\nt1\nt2\nt1\nt2\nt1\nt2\nt1\n\nProcess finished with exit code -1\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u8981\u7528\u5b57\u7b26\u4e32\u5e38\u91cf\u4f5c\u4e3a\u9501\u5b9a\u5bf9\u8c61\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class T {\n    String s1 = "Hello";\n    String s2 = "Hello";\n    void m1() {\n        synchronized(s1) {\n            \n        }\n    }\n    void m2() {\n        synchronized(s2) {\n            \n        }\n    }\n}\n')),(0,a.kt)("p",{parentName:"li"},"m1\u548cm2\u5176\u5b9e\u9501\u5b9a\u7684\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\uff1b\u6b64\u65f6\u6709\u53ef\u80fd\u53d1\u751f\u8be1\u5f02\u7684\u73b0\u8c61\uff0c\u6bd4\u5982\u4f60\u7528\u5230\u7684\u4e00\u4e2a\u7c7b\u5e93\uff0c\u5728\u8be5\u7c7b\u5e93\u4e2d\u4ee3\u7801\u4e2d\u4e5f\u9501\u5b9a\u4e86\u5b57\u7b26\u4e32\u201cHello\u201d\uff0c\u8fd9\u65f6\u5c31\u6709\u53ef\u80fd\u53d1\u751f\u6b7b\u9501\u963b\u585e\uff0c\u56e0\u4e3a\u4f60\u7684\u7a0b\u5e8f\u548c\u4f60\u7528\u5230\u7684\u7c7b\u5e93\u5728\u4e0d\u7ecf\u610f\u95f4\u4f7f\u7528\u4e86\u540c\u4e00\u628a\u9501"))),(0,a.kt)("h2",{id:"synchronized\u7684\u539f\u7406"},(0,a.kt)("inlineCode",{parentName:"h2"},"synchronized"),"\u7684\u539f\u7406"),(0,a.kt)("h3",{id:"\u540c\u6b65\u4ee3\u7801\u5757"},"\u540c\u6b65\u4ee3\u7801\u5757"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.ego1st.cn/postImg/synchronized1.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"monitorenter \uff1a")),(0,a.kt)("p",null,"\u6bcf\u4e2a\u5bf9\u8c61\u6709\u4e00\u4e2a\u76d1\u89c6\u5668\u9501\uff08monitor\uff09\u3002\u5f53monitor\u88ab\u5360\u7528\u65f6\u5c31\u4f1a\u5904\u4e8e\u9501\u5b9a\u72b6\u6001\uff0c\u7ebf\u7a0b\u6267\u884cmonitorenter\u6307\u4ee4\u65f6\u5c1d\u8bd5\u83b7\u53d6monitor\u7684\u6240\u6709\u6743\uff0c\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"1\u3001\u5982\u679cmonitor\u7684\u8fdb\u5165\u6570\u4e3a0\uff0c\u5219\u8be5\u7ebf\u7a0b\u8fdb\u5165monitor\uff0c\u7136\u540e\u5c06\u8fdb\u5165\u6570\u8bbe\u7f6e\u4e3a1\uff0c\u8be5\u7ebf\u7a0b\u5373\u4e3amonitor\u7684\u6240\u6709\u8005\u3002"),(0,a.kt)("p",null,"2\u3001\u5982\u679c\u7ebf\u7a0b\u5df2\u7ecf\u5360\u6709\u8be5monitor\uff0c\u53ea\u662f\u91cd\u65b0\u8fdb\u5165\uff0c\u5219\u8fdb\u5165monitor\u7684\u8fdb\u5165\u6570\u52a01."),(0,a.kt)("p",null,"3.\u5982\u679c\u5176\u4ed6\u7ebf\u7a0b\u5df2\u7ecf\u5360\u7528\u4e86monitor\uff0c\u5219\u8be5\u7ebf\u7a0b\u8fdb\u5165\u963b\u585e\u72b6\u6001\uff0c\u76f4\u5230monitor\u7684\u8fdb\u5165\u6570\u4e3a0\uff0c\u518d\u91cd\u65b0\u5c1d\u8bd5\u83b7\u53d6monitor\u7684\u6240\u6709\u6743\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"monitorexit\uff1a")),(0,a.kt)("p",null,"\u3000\u3000\u6267\u884cmonitorexit\u7684\u7ebf\u7a0b\u5fc5\u987b\u662fobjectref\u6240\u5bf9\u5e94\u7684monitor\u7684\u6240\u6709\u8005\u3002"),(0,a.kt)("p",null,"\u200b\t\t\u6307\u4ee4\u6267\u884c\u65f6\uff0cmonitor\u7684\u8fdb\u5165\u6570\u51cf1\uff0c\u5982\u679c\u51cf1\u540e\u8fdb\u5165\u6570\u4e3a0\uff0c\u90a3\u7ebf\u7a0b\u9000\u51famonitor\uff0c\u4e0d\u518d\u662f\u8fd9\u4e2amonitor\u7684\u6240\u6709\u8005\u3002\u5176\u4ed6\u88ab\u8fd9\u4e2amonitor\u963b\u585e\u7684\u7ebf\u7a0b\u53ef\u4ee5\u5c1d\u8bd5\u53bb\u83b7\u53d6\u8fd9\u4e2a monitor \u7684\u6240\u6709\u6743\u3002"),(0,a.kt)("p",null,"\u3000\u3000Synchronized\u7684\u8bed\u4e49\u5e95\u5c42\u662f\u901a\u8fc7\u4e00\u4e2amonitor\u7684\u5bf9\u8c61\u6765\u5b8c\u6210\uff0c\u5176\u5b9ewait/notify\u7b49\u65b9\u6cd5\u4e5f\u4f9d\u8d56\u4e8emonitor\u5bf9\u8c61\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u53ea\u6709\u5728\u540c\u6b65\u7684\u5757\u6216\u8005\u65b9\u6cd5\u4e2d\u624d\u80fd\u8c03\u7528wait/notify\u7b49\u65b9\u6cd5\uff0c\u5426\u5219\u4f1a\u629b\u51fajava.lang.IllegalMonitorStateException\u7684\u5f02\u5e38\u7684\u539f\u56e0\u3002"),(0,a.kt)("h3",{id:"\u540c\u6b65\u65b9\u6cd5"},"\u540c\u6b65\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.ego1st.cn/postImg/synchronized2.png",alt:null})),(0,a.kt)("p",null,"\u4ece\u53cd\u7f16\u8bd1\u7684\u7ed3\u679c\u6765\u770b\uff0c\u65b9\u6cd5\u7684\u540c\u6b65\u5e76\u6ca1\u6709\u901a\u8fc7\u6307\u4ee4monitorenter\u548cmonitorexit\u6765\u5b8c\u6210\uff08\u7406\u8bba\u4e0a\u5176\u5b9e\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e24\u6761\u6307\u4ee4\u6765\u5b9e\u73b0\uff09\uff0c\u4e0d\u8fc7\u76f8\u5bf9\u4e8e\u666e\u901a\u65b9\u6cd5\uff0c\u5176\u5e38\u91cf\u6c60\u4e2d\u591a\u4e86ACC_SYNCHRONIZED\u6807\u793a\u7b26\u3002JVM\u5c31\u662f\u6839\u636e\u8be5\u6807\u793a\u7b26\u6765\u5b9e\u73b0\u65b9\u6cd5\u7684\u540c\u6b65\u7684\uff1a\u5f53\u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u8c03\u7528\u6307\u4ee4\u5c06\u4f1a\u68c0\u67e5\u65b9\u6cd5\u7684 ACC_SYNCHRONIZED \u8bbf\u95ee\u6807\u5fd7\u662f\u5426\u88ab\u8bbe\u7f6e\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\uff0c\u6267\u884c\u7ebf\u7a0b\u5c06\u5148\u83b7\u53d6monitor\uff0c\u83b7\u53d6\u6210\u529f\u4e4b\u540e\u624d\u80fd\u6267\u884c\u65b9\u6cd5\u4f53\uff0c\u65b9\u6cd5\u6267\u884c\u5b8c\u540e\u518d\u91ca\u653emonitor\u3002\u5728\u65b9\u6cd5\u6267\u884c\u671f\u95f4\uff0c\u5176\u4ed6\u4efb\u4f55\u7ebf\u7a0b\u90fd\u65e0\u6cd5\u518d\u83b7\u5f97\u540c\u4e00\u4e2amonitor\u5bf9\u8c61\u3002 \u5176\u5b9e\u672c\u8d28\u4e0a\u6ca1\u6709\u533a\u522b\uff0c\u53ea\u662f\u65b9\u6cd5\u7684\u540c\u6b65\u662f\u4e00\u79cd\u9690\u5f0f\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\uff0c\u65e0\u9700\u901a\u8fc7\u5b57\u8282\u7801\u6765\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/huangyin/p/6586469.html"},"https://www.cnblogs.com/huangyin/p/6586469.html")))}d.isMDXComponent=!0}}]);