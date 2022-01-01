"use strict";(self.webpackChunkego_1st_cn=self.webpackChunkego_1st_cn||[]).push([[7760],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,v=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return t?r.createElement(v,c(c({ref:n},p),{},{components:t})):r.createElement(v,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=s;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9412:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),c=["components"],l={title:"Java\u5e76\u53d1\u7f16\u7a0b2",date:new Date("2020-01-19T18:18:30.000Z"),tags:["\u5b66\u4e60\u7b14\u8bb0"]},o=void 0,u={permalink:"/JavaConcurrentProgramming2",source:"@site/blog/JavaConcurrentProgramming2.md",title:"Java\u5e76\u53d1\u7f16\u7a0b2",description:"Java\u5173\u4e8e\u7ebf\u7a0b\u7684\u76f8\u5173\u77e5\u8bc6\uff0c\u9a6c\u58eb\u5175\u8001\u5e08\u7684\u9ad8\u5e76\u53d1\u7f16\u7a0b\u7cfb\u5217av11076511\uff0c\u77e5\u8bc6\u70b92",date:"2020-01-19T18:18:30.000Z",formattedDate:"January 19, 2020",tags:[{label:"\u5b66\u4e60\u7b14\u8bb0",permalink:"/tags/\u5b66\u4e60\u7b14\u8bb0"}],readingTime:1723,truncated:!0,authors:[],prevItem:{title:"Java8\u65b0\u7279\u6027\u2014\u2014Lambda\u8868\u8fbe\u5f0f",permalink:"/LearnJava8New1"},nextItem:{title:"Vue-Day5",permalink:"/VueDay5"}},p={authorsImageUrls:[]},d=[{value:"\u4ea7\u751f\u6b7b\u9501\u7684\u5fc5\u8981\u6761\u4ef6",id:"\u4ea7\u751f\u6b7b\u9501\u7684\u5fc5\u8981\u6761\u4ef6",children:[{value:"1.\u4e92\u65a5\u6761\u4ef6",id:"1\u4e92\u65a5\u6761\u4ef6",children:[],level:3},{value:"2.\u4e0d\u53ef\u5265\u593a\u6761\u4ef6",id:"2\u4e0d\u53ef\u5265\u593a\u6761\u4ef6",children:[],level:3},{value:"3.\u8bf7\u6c42\u4e0e\u4fdd\u6301\u6761\u4ef6",id:"3\u8bf7\u6c42\u4e0e\u4fdd\u6301\u6761\u4ef6",children:[],level:3},{value:"4.\u5faa\u73af\u7b49\u5f85\u6761\u4ef6",id:"4\u5faa\u73af\u7b49\u5f85\u6761\u4ef6",children:[],level:3}],level:2},{value:"\u4ee3\u7801\u6a21\u62df\u6b7b\u9501",id:"\u4ee3\u7801\u6a21\u62df\u6b7b\u9501",children:[{value:"\u4ee3\u7801\u5982\u4e0b\uff1a",id:"\u4ee3\u7801\u5982\u4e0b",children:[],level:3},{value:"\u7ed3\u679c\u5982\u4e0b\uff1a",id:"\u7ed3\u679c\u5982\u4e0b",children:[],level:3}],level:2}],s={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Java\u5173\u4e8e\u7ebf\u7a0b\u7684\u76f8\u5173\u77e5\u8bc6\uff0c\u9a6c\u58eb\u5175\u8001\u5e08\u7684\u9ad8\u5e76\u53d1\u7f16\u7a0b\u7cfb\u5217",(0,i.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/av11076511"},"av11076511"),"\uff0c\u77e5\u8bc6\u70b92"),(0,i.kt)("h1",{id:"\u6b7b\u9501"},"\u6b7b\u9501"),(0,i.kt)("p",null,"\u6b7b\u9501\u662f\u6307\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u7684\u7ebf\u7a0b\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u7531\u4e8e\u7ade\u4e89\u8d44\u6e90\u6216\u8005\u7531\u4e8e\u5f7c\u6b64\u901a\u4fe1\u800c\u9020\u6210\u7684\u4e00\u79cd\u963b\u585e\u7684\u73b0\u8c61\uff0c\u82e5\u65e0\u5916\u529b\u4f5c\u7528\uff0c\u5b83\u4eec\u90fd\u5c06\u65e0\u6cd5\u63a8\u8fdb\u4e0b\u53bb\u3002\u6b64\u65f6\u79f0\u7cfb\u7edf\u5904\u4e8e\u6b7b\u9501\u72b6\u6001\u6216\u7cfb\u7edf\u4ea7\u751f\u4e86\u6b7b\u9501\uff0c\u8fd9\u4e9b\u6c38\u8fdc\u5728\u4e92\u76f8\u7b49\u5f85\u7684\u8fdb\u7a0b\u79f0\u4e3a\u6b7b\u9501\u8fdb\u7a0b\u3002"),(0,i.kt)("h2",{id:"\u4ea7\u751f\u6b7b\u9501\u7684\u5fc5\u8981\u6761\u4ef6"},"\u4ea7\u751f\u6b7b\u9501\u7684\u5fc5\u8981\u6761\u4ef6"),(0,i.kt)("h3",{id:"1\u4e92\u65a5\u6761\u4ef6"},"1.\u4e92\u65a5\u6761\u4ef6"),(0,i.kt)("p",null,"\u8d44\u6e90\u662f\u72ec\u5360\u7684\u4e14\u6392\u4ed6\u4f7f\u7528\u3002\u8fdb\u7a0b\u4e92\u65a5\u4f7f\u7528\u8d44\u6e90\uff0c\u5373\u4efb\u4e00\u65f6\u523b\u4e00\u4e2a\u8d44\u6e90\u53ea\u80fd\u7ed9\u4e00\u4e2a\u8fdb\u7a0b\u4f7f\u7528\uff0c\u5176\u4ed6\u8fdb\u7a0b\u82e5\u7533\u8bf7\u4e00\u4e2a\u8d44\u6e90\uff0c\u800c\u8be5\u8d44\u6e90\u88ab\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u5360\u6709\u65f6\uff0c\u5219\u7533\u8bf7\u7b49\u5f85\uff0c\u76f4\u5230\u8be5\u8d44\u6e90\u88ab\u5360\u7528\u8005\u91ca\u653e"),(0,i.kt)("h3",{id:"2\u4e0d\u53ef\u5265\u593a\u6761\u4ef6"},"2.\u4e0d\u53ef\u5265\u593a\u6761\u4ef6"),(0,i.kt)("p",null,"\u8fdb\u7a0b\u6240\u83b7\u5f97\u7684\u8d44\u6e90\u5728\u672a\u4f7f\u7528\u5b8c\u6bd5\u4e4b\u524d\uff0c\u4e0d\u80fd\u88ab\u5176\u4ed6\u8fdb\u7a0b\u5f3a\u884c\u5265\u593a\uff0c\u800c\u53ea\u80fd\u7531\u83b7\u5f97\u8be5\u8d44\u6e90\u7684\u8fdb\u7a0b\u81ea\u613f\u91ca\u653e"),(0,i.kt)("h3",{id:"3\u8bf7\u6c42\u4e0e\u4fdd\u6301\u6761\u4ef6"},"3.\u8bf7\u6c42\u4e0e\u4fdd\u6301\u6761\u4ef6"),(0,i.kt)("p",null,"\u8fdb\u7a0b\u6bcf\u6b21\u7533\u8bf7\u5b83\u6240\u9700\u8981\u7684\u4e00\u90e8\u5206\u8d44\u6e90\uff0c\u5728\u7533\u8bf7\u65b0\u8d44\u6e90\u7684\u540c\u65f6\uff0c\u7ee7\u7eed\u5360\u7528\u5df2\u5206\u914d\u5230\u7684\u8d44\u6e90"),(0,i.kt)("h3",{id:"4\u5faa\u73af\u7b49\u5f85\u6761\u4ef6"},"4.\u5faa\u73af\u7b49\u5f85\u6761\u4ef6"),(0,i.kt)("p",null,"\u5728\u53d1\u751f\u6b7b\u9501\u65f6\uff0c\u5fc5\u7136\u5b58\u5728\u4e00\u4e2a\u8fdb\u7a0b\u7b49\u5f85\u961f\u5217\uff08P1,P2,P3....Pn\uff09\uff0c\u5176\u4e2dP1\u7b49\u5f85P2\u5360\u6709\u7684\u8d44\u6e90\uff0cP2\u7b49\u5f85P1\u5360\u6709\u7684\u8d44\u6e90\uff0c\u5f62\u6210\u4e86\u4e00\u4e2a\u8fdb\u7a0b\u7b49\u5f85\u73af\u8def\u3002\u73af\u8def\u4e2d\u6bcf\u4e2a\u8fdb\u7a0b\u5df2\u5360\u6709\u7684\u8d44\u6e90\u540c\u65f6\u88ab\u53e6\u4e00\u4e2a\u8fdb\u7a0b\u6240\u7533\u8bf7\uff0c\u5373\u524d\u4e00\u4e2a\u8fdb\u7a0b\u5360\u6709\u540e\u4e00\u4e2a\u8fdb\u7a0b\u6240\u7533\u8bf7\u7684\u8d44\u6e90"),(0,i.kt)("h2",{id:"\u4ee3\u7801\u6a21\u62df\u6b7b\u9501"},"\u4ee3\u7801\u6a21\u62df\u6b7b\u9501"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/*\n* \u7ebf\u7a0b1 \u5148\u9501\u5b9a\u5bf9\u8c61a 3s\u540e\u7533\u8bf7b\n* \u7ebf\u7a0b2 \u5148\u9501\u5b9a\u5bf9\u8c61b 3s\u540e\u7533\u8bf7a\n* \u8fdb\u7a0b\u65e0\u6cd5\u7ee7\u7eed\u63a8\u8fdb \u5bfc\u81f4\u6b7b\u9501\u95ee\u9898\n*/\npublic class T {\n \n    Object a = new Object();\n    Object b = new Object();\n \n    public void m1() {\n        synchronized (a) {\n            try {\n                Thread.sleep(3000);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            synchronized (b) {\n                System.out.println("success1");\n            }\n        }\n    }\n \n    public void m2() {\n        synchronized (b) {\n            try {\n                Thread.sleep(3000);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            synchronized (a) {\n                System.out.println("success2");\n            }\n        }\n    }\n \n    public static void main(String[] args) {\n        T t = new T();\n        new Thread(t::m1, "t1").start();\n        new Thread(t::m2, "t2").start();\n    }\n}\n\n')),(0,i.kt)("h1",{id:"\u540c\u6b65\u65b9\u6cd5\u548c\u975e\u540c\u6b65\u65b9\u6cd5\u662f\u5426\u53ef\u4ee5\u540c\u65f6\u8c03\u7528"},"\u540c\u6b65\u65b9\u6cd5\u548c\u975e\u540c\u6b65\u65b9\u6cd5\u662f\u5426\u53ef\u4ee5\u540c\u65f6\u8c03\u7528\uff1f"),(0,i.kt)("p",null,"\u540c\u6b65\u65b9\u6cd5m1\u548c\u975e\u540c\u6b65\u65b9\u6cd5m2\uff0c\u88ab\u4e24\u4e2a\u7ebf\u7a0b\u5206\u522b\u8c03\u7528"),(0,i.kt)("p",null,"\u95ee\uff1am2\u65b9\u6cd5\u662f\u5426\u9700\u8981\u7b49\u5f85m1\u65b9\u6cd5\u6267\u884c\u5b8c\u4e4b\u540e\u518d\u6267\u884c"),(0,i.kt)("h3",{id:"\u4ee3\u7801\u5982\u4e0b"},"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class T {\n    \n    public synchronized void m1() { \n        System.out.println(Thread.currentThread().getName() + " m1 start...");\n        try {\n            Thread.sleep(10000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println(Thread.currentThread().getName() + " m1 end");\n    }\n    \n    public void m2() {\n        try {\n            Thread.sleep(5000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println(Thread.currentThread().getName() + " m2 ");\n    }\n    \n    public static void main(String[] args) {\n        T t = new T();\n        new Thread(t::m1, "t1").start();\n        new Thread(t::m2, "t2").start();\n        \n    }\n    \n}   \n')),(0,i.kt)("h3",{id:"\u7ed3\u679c\u5982\u4e0b"},"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"\u8bf4\u660e\uff1a\u540c\u6b65\u65b9\u6cd5\u548c\u975e\u540c\u6b65\u65b9\u6cd5\u53ef\u4ee5\u540c\u65f6\u8c03\u7528"),(0,i.kt)("p",null,"\u539f\u56e0\uff1a\u53ea\u6709\u88ab",(0,i.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u5173\u952e\u5b57\u4fee\u9970\u7684\u65b9\u6cd5\u5728\u6267\u884c\u65f6\u624d\u9700\u8981\u83b7\u5f97\u9501\uff0c\u6ca1\u88ab\u4fee\u9970\u5219\u4e0d\u9700\u8981\uff0c\u6240\u4ee5m2\u6267\u884c\u5e76\u4e0d\u9700\u8981\u5148\u83b7\u5f97\u9501\u518d\u6267\u884c"))}m.isMDXComponent=!0}}]);