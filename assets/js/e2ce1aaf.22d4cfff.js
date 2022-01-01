"use strict";(self.webpackChunkego_1st_cn=self.webpackChunkego_1st_cn||[]).push([[6317],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),N=r,k=u["".concat(m,".").concat(N)]||u[N]||o[N]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2027:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return s},assets:function(){return c},toc:function(){return o},default:function(){return N}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={title:"Java8\u65b0\u7279\u6027\u2014\u2014Stream\u6d41",date:new Date("2020-06-12T13:40:55.000Z"),tags:["Java8\u65b0\u7279\u6027","\u5b66\u4e60\u7b14\u8bb0"]},m="Stream\u6d41",s={permalink:"/LearnJava8New2",source:"@site/blog/LearnJava8New2.md",title:"Java8\u65b0\u7279\u6027\u2014\u2014Stream\u6d41",description:"Java 8 API\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u62bd\u8c61\u79f0\u4e3a\u6d41Stream\uff0c\u53ef\u4ee5\u8ba9\u4f60\u4ee5\u4e00\u79cd\u58f0\u660e\u7684\u65b9\u5f0f\u5904\u7406\u6570\u636e\u3002",date:"2020-06-12T13:40:55.000Z",formattedDate:"June 12, 2020",tags:[{label:"Java8\u65b0\u7279\u6027",permalink:"/tags/java-8-\u65b0\u7279\u6027"},{label:"\u5b66\u4e60\u7b14\u8bb0",permalink:"/tags/\u5b66\u4e60\u7b14\u8bb0"}],readingTime:8418,truncated:!0,authors:[],prevItem:{title:"Java8\u65b0\u7279\u6027\u2014\u2014Optional",permalink:"/LearnJava8New3"},nextItem:{title:"Java8\u65b0\u7279\u6027\u2014\u2014Lambda\u8868\u8fbe\u5f0f",permalink:"/LearnJava8New1"}},c={authorsImageUrls:[]},o=[{value:"\u4ec0\u4e48\u662fStream\u6d41",id:"\u4ec0\u4e48\u662fstream\u6d41",children:[],level:3},{value:"\u5982\u4f55\u83b7\u5f97Stream\u6d41",id:"\u5982\u4f55\u83b7\u5f97stream\u6d41",children:[],level:3},{value:"Stream\u6d41\u7684\u4e2d\u95f4\u64cd\u4f5c",id:"stream\u6d41\u7684\u4e2d\u95f4\u64cd\u4f5c",children:[{value:"\u7b5b\u9009\u4e0e\u5207\u7247",id:"\u7b5b\u9009\u4e0e\u5207\u7247",children:[],level:4},{value:"\u6620\u5c04",id:"\u6620\u5c04",children:[],level:4},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",children:[],level:4}],level:3},{value:"Stream\u6d41\u7684\u7ec8\u6b62\u64cd\u4f5c",id:"stream\u6d41\u7684\u7ec8\u6b62\u64cd\u4f5c",children:[{value:"\u67e5\u627e\u4e0e\u5339\u914d",id:"\u67e5\u627e\u4e0e\u5339\u914d",children:[],level:4},{value:"\u5f52\u7ea6",id:"\u5f52\u7ea6",children:[],level:4},{value:"\u6536\u96c6",id:"\u6536\u96c6",children:[],level:4}],level:3}],u={toc:o};function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Java 8 API\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u62bd\u8c61\u79f0\u4e3a\u6d41Stream\uff0c\u53ef\u4ee5\u8ba9\u4f60\u4ee5\u4e00\u79cd\u58f0\u660e\u7684\u65b9\u5f0f\u5904\u7406\u6570\u636e\u3002"),(0,l.kt)("p",null,"Stream API\u53ef\u4ee5\u6781\u5927\u63d0\u9ad8Java\u7a0b\u5e8f\u5458\u7684\u751f\u4ea7\u529b\uff0c\u8ba9\u7a0b\u5e8f\u5458\u5199\u51fa\u9ad8\u6548\u7387\u3001\u5e72\u51c0\u3001\u7b80\u6d01\u7684\u4ee3\u7801\u3002"),(0,l.kt)("h3",{id:"\u4ec0\u4e48\u662fstream\u6d41"},"\u4ec0\u4e48\u662fStream\u6d41"),(0,l.kt)("p",null,"Stream \u662f\u5bf9\u96c6\u5408(Collection)\u5bf9\u8c61\u529f\u80fd\u7684\u589e\u5f3a\u3002"),(0,l.kt)("p",null,"Stream \u4f7f\u7528\u4e00\u79cd\u7c7b\u4f3c\u7528 SQL \u8bed\u53e5\u4ece\u6570\u636e\u5e93\u67e5\u8be2\u6570\u636e\u7684\u76f4\u89c2\u65b9\u5f0f\u6765\u63d0\u4f9b\u4e00\u79cd\u5bf9 Java \u96c6\u5408\u8fd0\u7b97\u548c\u8868\u8fbe\u7684\u9ad8\u9636\u62bd\u8c61\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u98ce\u683c\u5c06\u8981\u5904\u7406\u7684\u5143\u7d20\u96c6\u5408\u770b\u4f5c\u4e00\u79cd\u6d41\uff0c \u6d41\u5728\u7ba1\u9053\u4e2d\u4f20\u8f93\uff0c \u5e76\u4e14\u53ef\u4ee5\u5728\u7ba1\u9053\u7684\u8282\u70b9\u4e0a\u8fdb\u884c\u5904\u7406\uff0c \u6bd4\u5982\u7b5b\u9009\uff0c \u6392\u5e8f\uff0c\u805a\u5408\u7b49\u3002"),(0,l.kt)("p",null,"\u5143\u7d20\u6d41\u5728\u7ba1\u9053\u4e2d\u7ecf\u8fc7\u4e2d\u95f4\u64cd\u4f5c\uff08intermediate operation\uff09\u7684\u5904\u7406\uff0c\u6700\u540e\u7531\u6700\u7ec8\u64cd\u4f5c(terminal operation)\u5f97\u5230\u524d\u9762\u5904\u7406\u7684\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u4e3e\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<String> strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");\nList<String> filtered = strings.stream()\n                               .filter(string -> !string.isEmpty())\n                               .collect(Collectors.toList());\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u5f97\u5230\u7684\u7ed3\u679c\u662f\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"strings"),"\u4e2d\u4e0d\u4e3a\u7a7a\u7684\u7b5b\u9009\u51fa\u6765\uff1b"),(0,l.kt)("p",null,"Stream\u5bf9\u6570\u636e\u7684\u5904\u7406\u6d41\u7a0b\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"+--------------------+       +------+   +------+   +---+   +-------+\n| stream of elements +-----\x3e |filter+-> |sorted+-> |map+-> |collect|\n+--------------------+       +------+   +------+   +---+   +-------+\n")),(0,l.kt)("h3",{id:"\u5982\u4f55\u83b7\u5f97stream\u6d41"},"\u5982\u4f55\u83b7\u5f97Stream\u6d41"),(0,l.kt)("p",null,"\u5728Java8\u4e2d\uff0c\u6709\u4e09\u79cd\u65b9\u6cd5\u751f\u6210Stream\u6d41"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Collection"),"\u7cfb\u5217\u96c6\u5408\u63d0\u4f9b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"stream()"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parallelStream()"),"\u65b9\u6cd5\u83b7\u5f97\u6d41"),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"stream()"),"\u65b9\u6cd5\u751f\u6210\u7684\u662f\u4e32\u884c\u6d41\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"parallelStream()"),"\u65b9\u6cd5\u751f\u6210\u7684\u662f\u5e76\u884c\u6d41"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<String> list = new ArrayList<>();\nStream<String> stream1 = list.stream();\nStream<String> stream2 = list.`parallelStream();\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Arrays"),"\u4e2d\u7684\u9759\u6001\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"stream()"),"\u83b7\u5f97\u6d41"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Music[] music = new Music[10];\nStream<Music> stream3 = Arrays.stream(music);\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7Stream\u7c7b\u4e2d\u7684\u9759\u6001\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"of()"),"\u83b7\u5f97\u6d41"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Stream<String> stream4 = Stream.of("abc","a","b");\n')))),(0,l.kt)("p",null,"\u8fd8\u6709\u4e24\u79cd\u65b9\u6cd5\u521b\u5efa\u65e0\u9650\u6d41"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fed\u4ee3"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Stream<Integer> stream5 = Stream.iterate(0,(x)->x+2);\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u751f\u6210"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Stream<Double> stream6 = Stream.generate(() -> Math.random());\n")))),(0,l.kt)("p",null,"\u8bb2\u5b8c\u4e86\u5982\u4f55\u83b7\u5f97\u6d41\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u8bb2Stream\u6d41\u7684\u4e2d\u95f4\u64cd\u4f5c"),(0,l.kt)("h3",{id:"stream\u6d41\u7684\u4e2d\u95f4\u64cd\u4f5c"},"Stream\u6d41\u7684\u4e2d\u95f4\u64cd\u4f5c"),(0,l.kt)("p",null,"Stream\u6d41\u7684\u4e2d\u95f4\u64cd\u4f5c\u5305\u62ec\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7b5b\u9009\u4e0e\u5207\u7247"),(0,l.kt)("li",{parentName:"ol"},"\u6620\u5c04"),(0,l.kt)("li",{parentName:"ol"},"\u6392\u5e8f")),(0,l.kt)("p",null,"\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Music"),"\u7c7b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Music {\n    private String name;\n    private String singer;\n    private Integer num;\n    public Status status;\n    \n    public enum Status {\n        FREE,\n        BUSY\n    }\n    ...\n    //get,set,toString,equals,hashCode,\u6784\u9020\u5668\u7701\u7565\n}\n")),(0,l.kt)("p",null,"\u7136\u540e\u5b9a\u4e49\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"List<Music>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'List<Music> music = Arrays.asList(\n        new Music("\u6b4c1","\u624b1",1),\n        new Music("\u6b4c2","\u624b2",20),\n        new Music("\u6b4c3","\u624b3",30),\n        new Music("\u6b4c4","\u624b4",40),\n        new Music("\u6b4c5","\u624b5",50),\n        new Music("\u6b4c6","\u624b6",60),\n        new Music("\u6b4c6","\u624b6",70),\n        new Music("\u6b4c6","\u624b6",60)\n);\n')),(0,l.kt)("h4",{id:"\u7b5b\u9009\u4e0e\u5207\u7247"},"\u7b5b\u9009\u4e0e\u5207\u7247"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"filter"),"\uff1a\u63a5\u6536Lambda\uff0c\u4ece\u6d41\u4e2d\u6392\u9664\u67d0\u4e9b\u5143\u7d20"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test1(){\n    //\u5185\u90e8\u8fed\u4ee3\uff1a\u8fed\u4ee3\u64cd\u4f5c\u7531Stream API\u5b8c\u6210\n    music.stream()\n               .filter((e)->e.getNum()>10)\n               .forEach(System.out::println);\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"limit"),"\uff1a\u622a\u65ad\u6d41\uff0c\u4f7f\u5176\u5143\u7d20\u4e0d\u8d85\u8fc7\u7ed9\u5b9a\u6570\u91cf"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void test2(){\n    //limit\u64cd\u4f5c\u62ff\u5230\u7ed9\u5b9a\u6570\u91cf\u7684\u503c\u540e\uff0c\u5c31\u4e0d\u518d\u7ee7\u7eed\u6267\u884c\u79f0\u4e3a\u77ed\u8def\u64cd\u4f5c"\n    music.stream()\n        .filter((e)->{\n                System.out.println("\u77ed\u8def!);\n                return e.getNum()>10;})\n        .limit(2)\n        .forEach(System.out::println);\n}\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"skip"),"\uff1a\u8df3\u8fc7\u5143\u7d20\uff0c\u8fd4\u56de\u4e00\u4e2a\u6254\u6389\u4e86\u524dn\u4e2a\u5143\u7d20\u7684\u6d41"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test3(){\n    /// \u82e5\u6d41\u4e2d\u5143\u7d20\u4e0d\u8db3n\u4e2a\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6d41\uff0c\u4e0elimit(n)\u4e92\u8865\n    music.stream()\n            .filter((e)->e.getNum()>10)\n            .skip(2)\n            .forEach(System.out::println);\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"distinct"),"\u7b5b\u9009\uff0c\u901a\u8fc7\u6d41\u751f\u6210\u5143\u7d20\u7684hashCode()\u548cequals()\u53bb\u9664\u91cd\u590d\u5143\u7d20"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test4(){\n    music.stream()\n            .filter((e)->e.getNum()>10)\n            .skip(2)\n            .distinct()\n            .forEach(System.out::println);\n\n}\n")))),(0,l.kt)("h4",{id:"\u6620\u5c04"},"\u6620\u5c04"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"map"),"\uff1a\u63a5\u6536Lambda\uff0c\u5c06\u5143\u7d20\u8f6c\u6362\u6210\u5176\u4ed6\u5f62\u5f0f\u6216\u63d0\u53d6\u4fe1\u606f\u3002\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u4f1a\u88ab\u5e94\u7528\u5230\u6bcf\u4e2a\u5143\u7d20\u4e0a\uff0c\u5e76\u5c06\u5176\u6620\u5c04\u6210\u4e00\u4e2a\u65b0\u7684\u5143\u7d20"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void test5(){\n    //\u628alist\u4e2d\u7684\u5143\u7d20\u8f6c\u6362\u4e3a\u5927\u5199\n     List<String> list = Arrays.asList("aaa","bbb","ccc");\n     list.stream()\n             .map(s -> s.toUpperCase())\n             .forEach(System.out::println);\n}\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"flatMap"),"\uff1a\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u5c06\u6d41\u4e2d\u7684\u6bcf\u4e2a\u503c\u90fd\u6362\u6210\u53e6\u4e00\u4e2a\u6d41\uff0c\u7136\u540e\u628a\u6240\u6709\u7684\u6d41\u8fde\u63a5\u6210\u4e00\u4e2a\u6d41"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void test6(){\n    List<String> list = Arrays.asList("aaa","bbb","ccc");\n    list.stream()\n            .flatMap(StreamLearn2::filterCharater)\n            .forEach(System.out::println);\n\n}\n\npublic static Stream<Character> filterCharater(String str){\n     List<Character> list = new ArrayList<>();\n\n    for (Character ch :\n            str.toCharArray()) {\n        list.add(ch);\n    }\n    return list.stream();\n}\n')))),(0,l.kt)("h4",{id:"\u6392\u5e8f"},"\u6392\u5e8f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sorted"),"\uff1a\u81ea\u7136\u6392\u5e8f\uff08Comparable\uff09"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void test7(){\n    List<String> list = Arrays.asList("aaa","bbb","ccc");\n    list.stream()\n            .sorted()\n            .forEach(System.out::println);\n}\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sorted(Comparator com)"),"\uff1a\u5b9a\u5236\u6392\u5e8f\uff08Comparator\uff09"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test8(){\n    music.stream()\n            .sorted((e1,e2)->{\n                if (e1.getName().equals(e2.getName())){\n                    return e1.getNum().compareTo(e2.getNum());\n                }else {\n                    return e1.getName().compareTo(e2.getName());\n                }\n            })\n            .forEach(System.out::println);\n}\n")))),(0,l.kt)("h3",{id:"stream\u6d41\u7684\u7ec8\u6b62\u64cd\u4f5c"},"Stream\u6d41\u7684\u7ec8\u6b62\u64cd\u4f5c"),(0,l.kt)("p",null,"Stream\u6d41\u7684\u7ec8\u6b62\u64cd\u4f5c\u5305\u62ec"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u67e5\u627e\u4e0e\u5339\u914d"),(0,l.kt)("li",{parentName:"ol"},"\u5f52\u7ea6"),(0,l.kt)("li",{parentName:"ol"},"\u6536\u96c6")),(0,l.kt)("h4",{id:"\u67e5\u627e\u4e0e\u5339\u914d"},"\u67e5\u627e\u4e0e\u5339\u914d"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"allMatch"),"\uff1a\u68c0\u67e5\u662f\u5426\u5339\u914d\u6240\u6709\u5143\u7d20\uff0c\u5fc5\u987b\u5168\u90e8\u6ee1\u8db3\u624d\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test1(){\n    boolean b1 = music.stream()\n            .allMatch(e->e.getStatus().equals(Music.Status.BUSY));\n    System.out.println(b1);\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"anyMatch"),"\uff1a\u68c0\u67e5\u662f\u5426\u5339\u914d\u81f3\u5c11\u4e00\u4e2a\u5143\u7d20\uff0c\u53ea\u8981\u6709\u4e00\u4e2a\u5143\u7d20\u6ee1\u8db3\u6761\u4ef6\u5c31\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test2(){\n    boolean b2 = music.stream()\n            .anyMatch(e->e.getStatus().equals(Music.Status.BUSY));\n    System.out.println(b2);\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"noneMatch"),"\uff1a\u68c0\u67e5\u662f\u5426\u6ca1\u6709\u5339\u914d\u6240\u6709\u5143\u7d20\uff0c\u5168\u90e8\u4e0d\u6ee1\u8db3\u624d\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test3(){\n    boolean b3 = music.stream()\n            .noneMatch(e->e.getStatus().equals(Music.Status.BUSY));\n    System.out.println(b3);\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"findFirst"),"\uff1a\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5143\u7d20"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test4(){\n    Optional<Music> optional = music.stream()\n            .sorted((e1, e2) -> e1.getNum().compareTo(e2.getNum()))\n            .findFirst();\n\n    System.out.println(optional.get());\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"findAny"),"\uff1a\u8fd4\u56de\u4efb\u610f\u4e00\u4e2a\u5143\u7d20"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test5(){\n    Optional<Music> optional = music.stream()\n            .filter(e -> e.getStatus().equals(Music.Status.FREE))\n            .findAny();\n\n    System.out.println(optional.get());\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"count"),"\uff1a\u8fd4\u56de\u6d41\u5143\u7d20\u7684\u603b\u4e2a\u6570"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public void test6(){\n    long count = music.stream()\n            .filter(e -> e.getStatus().equals(Music.Status.FREE))\n            .count();\n\n    System.out.println(count);\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"max"),"\uff1a\u8fd4\u56de\u6d41\u4e2d\u5143\u7d20\u7684\u6700\u5927\u503c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test7(){\n    Optional<Music> max = music.stream()\n            .max((e1, e2) -> Integer.compare(e1.getNum(), e2.getNum()));\n    System.out.println(max.get());\n}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"min"),"\uff1a\u8fd4\u56de\u6d41\u4e2d\u5143\u7d20\u7684\u6700\u5c0f\u503c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void test8(){\n    Optional<Integer> min = music.stream()\n            .map(Music::getNum)\n            .min(Integer::compare);\n    System.out.println(min.get());\n}\n")))),(0,l.kt)("h4",{id:"\u5f52\u7ea6"},"\u5f52\u7ea6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"reduce"),"\uff1a\u53ef\u4ee5\u5c06\u6d41\u4e2d\u7684\u5143\u7d20\u53cd\u590d\u7ed3\u5408\u8d77\u6765\uff0c\u5f97\u5230\u4e00\u4e2a\u503c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"}," Optional<T> reduce(BinaryOperator<T> accumulator)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Optional<Integer> optional = music.stream()\n        .map(Music::getNum)\n        .reduce(Integer::sum);\nSystem.out.println(optional.get());\n")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u80fd\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"p"},"Optional"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"T reduce(T identity, BinaryOperator<T> accumulator)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Integer reduce = music.stream()\n        .map(Music::getNum)\n        .reduce(0, (x, y) -> x + y);\n")),(0,l.kt)("p",{parentName:"li"},"\u8d77\u59cb\u503c\u4e3a0\uff0c\u8fd4\u56de\u5bf9\u5e94\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"<U> U reduce(U identity, BiFunction<U, ? super T, U> accumulator, BinaryOperator<U> combiner);")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void reduceTest() {\n    ArrayList<Integer> newList = new ArrayList<>();\n\n    ArrayList<Integer> accResult_ = Stream.of(2, 3, 4)\n            .reduce(newList,\n                    (acc, item) -> {\n                        acc.add(item);\n                        System.out.println("item: " + item);\n                        System.out.println("acc+ : " + acc);\n                        System.out.println("BiFunction");\n                        return acc;\n                    }, (acc, item) -> null);\n    System.out.println("accResult_: " + accResult_);\n}\n')),(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"item: 2\nacc+ : [2]\nBiFunction\nitem: 3\nacc+ : [2, 3]\nBiFunction\nitem: 4\nacc+ : [2, 3, 4]\nBiFunction\naccResult_: [2, 3, 4]\n")),(0,l.kt)("p",{parentName:"li"},"\u9996\u5148\u770b\u4e00\u4e0bBiFunction\u7684\u4e09\u4e2a\u6cdb\u578b\u7c7b\u578b\u5206\u522b\u662fU\u3001 ? super T\u3001U\uff0c\u53c2\u8003BiFunction\u51fd\u6570\u5f0f\u63a5\u53e3apply\u65b9\u6cd5\u5b9a\u4e49\u53ef\u4ee5\u77e5\u9053\uff0c\u7d2f\u52a0\u5668\u901a\u8fc7\u7c7b\u578b\u4e3aU\u548c? super T\u7684\u4e24\u4e2a\u8f93\u5165\u503c\u8ba1\u7b97\u5f97\u5230\u4e00\u4e2aU\u7c7b\u578b\u7684\u7ed3\u679c\u8fd4\u56de\u3002\u4e5f\u5c31\u662f\u8bf4\u8fd9\u79cdreduce\u65b9\u6cd5\uff0c\u63d0\u4f9b\u4e00\u4e2a\u4e0d\u540c\u4e8eStream\u4e2d\u6570\u636e\u7c7b\u578b\u7684\u521d\u59cb\u503c\uff0c\u901a\u8fc7\u7d2f\u52a0\u5668\u89c4\u5219\u8fed\u4ee3\u8ba1\u7b97Stream\u4e2d\u7684\u6570\u636e\uff0c\u6700\u7ec8\u5f97\u5230\u4e00\u4e2a\u540c\u521d\u59cb\u503c\u540c\u7c7b\u578b\u7684\u7ed3\u679c"))),(0,l.kt)("h4",{id:"\u6536\u96c6"},"\u6536\u96c6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"collect"),"\uff1a\u5c06\u6d41\u8f6c\u5316\u4e3a\u5176\u4ed6\u5f62\u5f0f\u3002\u63a5\u53d7\u4e00\u4e2aCollector\u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u7528\u4e8e\u7ed9Stream\u4e2d\u5143\u7d20\u505a\u6c47\u603b\u7684\u65b9\u6cd5"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public void collectTest(){\n    List<String> collect = music.stream()\n            .map(Music::getName)\n            .collect(Collectors.toList());\n\n    HashSet<String> collect1 = music.stream()\n            .map(Music::getName)\n            .collect(Collectors.toCollection(HashSet::new));\n\n    collect.forEach(System.out::println);\n    collect1.forEach(System.out::println);\n}\n")),(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\u6b4c1\n\u6b4c2\n\u6b4c3\n\u6b4c4\n\u6b4c5\n\u6b4c6\n\u6b4c4\n\u6b4c5\n\u6b4c6\n\u6b4c1\n\u6b4c2\n\u6b4c3\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"groupingBy"),"\uff1a\u5206\u7ec4&\u591a\u7ea7\u5206\u7ec4"),(0,l.kt)("p",{parentName:"li"},"\u5206\u7ec4\uff0c\u6309\u7167\u76f8\u540c\u7684\u5c5e\u6027\u8fdb\u884c\u5206\u7ec4"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public void groupTest1(){\n    Map<Music.Status, List<Music>> collect = music.stream()\n            .collect(Collectors.groupingBy(Music::getStatus));\n\n    System.out.println(collect);\n}\n")),(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"{BUSY=[Music{name='\u6b4c1', singer='\u624b1', num=1, status=BUSY}, Music{name='\u6b4c3', singer='\u624b3', num=30, status=BUSY}, Music{name='\u6b4c4', singer='\u624b4', num=40, status=BUSY}], FREE=[Music{name='\u6b4c2', singer='\u624b2', num=20, status=FREE}, Music{name='\u6b4c5', singer='\u624b5', num=50, status=FREE}, Music{name='\u6b4c6', singer='\u624b6', num=60, status=FREE}]}\n")),(0,l.kt)("p",{parentName:"li"},"\u591a\u7ea7\u5206\u7ec4\uff0c\u9996\u5148\u6309\u7167\u76f8\u540c\u7684\u5c5e\u6027\u5206\u7ec4\uff0c\u7136\u540e\u518d\u6309\u7167\u6761\u4ef6\u5206\uff0c\u6216\u8005\u8fd8\u53ef\u4ee5\u6309\u7167\u5c5e\u6027\u5206\uff0c\u5d4c\u5957\u4e0b\u53bb"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public void groupTest2(){\n    Map<Music.Status, Map<String, List<Music>>> collect = music.stream()\n        .collect(Collectors.groupingBy(Music::getStatus, \n                Collectors.groupingBy(e -> {\n                    if (e.getNum() >= 30) {\n                        return "\u9ad8\u4ea7";\n                    } else {\n                        return "\u4f4e\u4ea7";\n                    }\n                })));\n    System.out.println(collect);\n}\n')),(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"{BUSY={\u4f4e\u4ea7=[Music{name='\u6b4c1', singer='\u624b1', num=1, status=BUSY}], \u9ad8\u4ea7=[Music{name='\u6b4c3', singer='\u624b3', num=30, status=BUSY}, Music{name='\u6b4c4', singer='\u624b4', num=40, status=BUSY}]}, FREE={\u4f4e\u4ea7=[Music{name='\u6b4c2', singer='\u624b2', num=20, status=FREE}], \u9ad8\u4ea7=[Music{name='\u6b4c5', singer='\u624b5', num=50, status=FREE}, Music{name='\u6b4c6', singer='\u624b6', num=60, status=FREE}]}}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"partitioningBy"),"\uff1a\u5206\u533a\uff0c\u7b26\u5408\u6761\u4ef6\u7684\u653e\u5728\u4e00\u8d77\uff0c\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u653e\u5728\u4e00\u8d77"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public void partTest(){\n    Map<Boolean, List<Music>> collect = music.stream()\n            .collect(Collectors.partitioningBy(e -> e.getNum() > 30));\n    System.out.println(collect);\n}\n")),(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"{false=[Music{name='\u6b4c1', singer='\u624b1', num=1, status=BUSY}, Music{name='\u6b4c2', singer='\u624b2', num=20, status=FREE}, Music{name='\u6b4c3', singer='\u624b3', num=30, status=BUSY}], true=[Music{name='\u6b4c4', singer='\u624b4', num=40, status=BUSY}, Music{name='\u6b4c5', singer='\u624b5', num=50, status=FREE}, Music{name='\u6b4c6', singer='\u624b6', num=60, status=FREE}]}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"join"),"\u8fde\u63a5\uff0c\u5c06\u7ed3\u679c\uff0c\u4ee5\u4ec0\u4e48\u5b57\u7b26\u5f00\u5934\uff0c\u7ed3\u5c3e\uff0c\u548c\u5206\u5272"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public void joinTest(){\n    String collect = music.stream()\n            .map(Music::getName)\n            .collect(Collectors.joining(",", "[", "]"));\n\n    System.out.println(collect);\n}\n')),(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"[\u6b4c1,\u6b4c2,\u6b4c3,\u6b4c4,\u6b4c5,\u6b4c6]\n")))))}N.isMDXComponent=!0}}]);