"use strict";(self.webpackChunkego_1st_cn=self.webpackChunkego_1st_cn||[]).push([[4013],{7341:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(7294),r=n(3366),l=n(6010),c=n(2664),s=n(3713),i=["sidebar","toc","children"];var o=function(e){var t=e.sidebar,n=e.toc,o=e.children,m=(0,r.Z)(e,i),u=t&&t.items.length>0;return a.createElement(c.Z,m,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},u&&a.createElement("aside",{className:"col col--3"},a.createElement(s.Z,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":u,"col--9 col--offset-1":!u}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))},m=n(9960),u="tag_WK-t",d="tagRegular_LXbV",f="tagWithCount_S5Zl";var v=function(e){var t,n=e.permalink,r=e.name,c=e.count;return a.createElement(m.Z,{href:n,className:(0,l.Z)(u,(t={},t[d]=!c,t[f]=c,t))},r,c&&a.createElement("span",null,c))},E=n(3810),p="tag_7kA+";function g(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:p},a.createElement(v,e))}))),a.createElement("hr",null))}var h=function(e){var t=e.tags,n=(0,E.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(g,{key:e.letter,letterEntry:e})})))};var N=function(e){var t=e.tags,n=e.sidebar,r=(0,E.MA)();return a.createElement(o,{title:r,wrapperClassName:E.kM.wrapper.blogPages,pageClassName:E.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,r),a.createElement(h,{tags:Object.values(t)}))}},3713:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294),r=n(2263),l=n(3810);function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e){var t,n=e.anchorTopOffset,a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((function(e){return c(e).top>=n}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(t=a[a.indexOf(r)-1])?t:null:a[a.length-1]}var i=function(e){var t=(0,a.useRef)(void 0),n=function(){var e=(0,a.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=0}),[t]),e}();(0,a.useEffect)((function(){var a=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=s({anchorTopOffset:n.current}),c=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.id)}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},o="table-of-contents__link",m={linkClassName:o,linkActiveClassName:"table-of-contents__link--active"};function u(e){var t=e.toc;e.isChild;if(!t.length)return null;return a.createElement("ol",null,t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{id:"tag"+e.id,className:o,onClick:function(){return t=e.id,n=document.getElementById(t).offsetTop,void window.scrollTo({top:n+745,behavior:"smooth"});var t,n},dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children}))})))}var d=function(e){var t=e.toc;return i(m),a.createElement("div",{className:"post-toc"},a.createElement(u,{toc:t}))},f=n(6010);var v=function(e){var t=(0,r.Z)().siteConfig.customFields.social,n=e.isBlogPostPage,l=e.toc,c=n?1:2,s=(0,a.useState)(c),i=s[0],o=s[1];return a.createElement("aside",{className:"sidebar"},a.createElement("div",{className:"sidebar-inner"},n&&a.createElement("ul",{className:"sidebar-nav"},a.createElement("li",{className:(0,f.Z)(1===i&&"sidebar-nav-active"),onClick:function(){return o(1)}},"\u6587\u7ae0\u76ee\u5f55"),a.createElement("li",{className:(0,f.Z)(2===i&&"sidebar-nav-active"),onClick:function(){return o(2)}},"\u5173\u4e8e\u6211")),n&&a.createElement("section",{className:(0,f.Z)(2===i&&"section-hide",1===i&&"section-show")},a.createElement(d,{toc:l})),a.createElement("section",{className:(0,f.Z)(1===i&&"section-hide",2===i&&"section-show")},a.createElement("p",{className:"site-description motion-element",itemProp:"description"},"\u8054\u7cfb\u6211"),a.createElement("div",{className:"links-of-author"},t.map((function(e){return a.createElement("span",{className:"links-of-author-item",key:e.title},a.createElement("a",{href:e.url,target:"_blank",title:e.title,"data-balloon":e.title,"data-balloon-pos":"up",dangerouslySetInnerHTML:{__html:e.icon}}))}))),a.createElement("p",{className:"site-description motion-element",itemProp:"description"},"\u7279\u522b\u8d5e\u52a9"),a.createElement("div",{className:"cc-license motion-element",itemProp:"license"},a.createElement("a",{href:"https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral",className:"cc-opacity",target:"_blank"},a.createElement("img",{src:"https://www.laobuluo.com/banner/upyun.png",alt:"Creative Commons"}))),a.createElement("div",{className:"feed-link"},a.createElement("a",{className:"feed-rss",href:"/sitemap.xml",rel:"alternate",target:"_blank"},a.createElement("i",{className:"fa fa-rss"})," ",a.createElement("span",null,"RSS \u8ba2\u9605"))))))}}}]);