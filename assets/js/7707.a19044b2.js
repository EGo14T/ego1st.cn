"use strict";(self.webpackChunkego_1st_cn=self.webpackChunkego_1st_cn||[]).push([[7707],{7707:function(e,t,n){n.d(t,{Z:function(){return z}});var o=n(7462),r=n(3366),l=n(7294),a=n(2859),c=n(9960),s=n(6010),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},p={Prism:n(7410).default,theme:i};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=y({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=y({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var v=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,l=y({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==r&&(l.style=void 0!==l.style?y({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),u(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return l[n[0]];var a=o?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(c))}})),u(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,l=e.token,a=y({},f(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?y({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),u(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],l=0,a=0,c=[],s=[c];a>-1;){for(;(l=o[a]++)<r[a];){var i=void 0,p=t[a],u=n[a][l];if("string"==typeof u?(p=a>0?p:["plain"],i=u):(p=g(p,u.type),u.alias&&(p=g(p,u.alias)),i=u.content),"string"==typeof i){var y=i.split(d),h=y.length;c.push({types:p,content:y[0]});for(var f=1;f<h;f++)m(c),s.push(c=[]),c.push({types:p,content:y[f]})}else a++,t.push(p),n.push(i),o.push(0),r.push(i.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return m(c),s}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),b=v;var k=n(5999),E=n(3810),T={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Z=n(5350),N=function(){var e=(0,E.LU)().prism,t=(0,Z.Z)().isDarkTheme,n=e.theme||T,o=e.darkTheme||n;return t?o:n},C="codeBlockContainer_J+bg",_="codeBlockContent_csEI",L="codeBlockTitle_oQzk",O="codeBlock_rtdJ",P="copyButton_M3SB",S="codeBlockLines_1zSZ";function j(e){var t,n=e.children,r=e.className,a=e.metastring,c=e.title,i=(0,E.LU)().prism,u=(0,l.useState)(!1),y=u[0],d=u[1],m=(0,l.useState)(!1),g=m[0],h=m[1];(0,l.useEffect)((function(){h(!0)}),[]);var f=(0,E.bc)(a)||c,v=N(),T=Array.isArray(n)?n.join(""):n,Z=null!=(t=(0,E.Vo)(r))?t:i.defaultLanguage,j=(0,E.nZ)(T,a,Z),x=j.highlightLines,B=j.code,D=function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var a=document.getSelection(),c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(i){}r.remove(),c&&(a.removeAllRanges(),a.addRange(c)),l&&l.focus()}(B),d(!0),setTimeout((function(){return d(!1)}),2e3)};return l.createElement(b,(0,o.Z)({},p,{key:String(g),theme:v,code:B,language:Z}),(function(e){var t=e.className,n=e.style,a=e.tokens,c=e.getLineProps,i=e.getTokenProps;return l.createElement("div",{className:(0,s.Z)(C,r,E.kM.common.codeBlock)},f&&l.createElement("div",{style:n,className:L},f),l.createElement("div",{className:(0,s.Z)(_,Z)},l.createElement("pre",{tabIndex:0,className:(0,s.Z)(t,O,"thin-scrollbar"),style:n},l.createElement("code",{className:S},a.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=c({line:e,key:t});return x.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,o.Z)({key:t},n),e.map((function(e,t){return l.createElement("span",(0,o.Z)({key:t},i({token:e,key:t})))})),l.createElement("br",null))})))),l.createElement("button",{type:"button","aria-label":(0,k.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,s.Z)(P,"clean-btn"),onClick:D},y?l.createElement(k.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(k.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var x=n(1904),B="details_h+cY";function D(e){var t=Object.assign({},e);return l.createElement(E.PO,(0,o.Z)({},t,{className:(0,s.Z)("alert alert--info",B,t.className)}))}var A=["mdxType","originalType"];var z={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var o=e.props,a=(o.mdxType,o.originalType,(0,r.Z)(o,A));return l.createElement(e.props.originalType,a)}return e}(e)}));return l.createElement(a.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(j,e):l.createElement("code",e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(j,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(D,(0,o.Z)({},e,{summary:n}),r)},h1:(0,x.Z)("h1"),h2:(0,x.Z)("h2"),h3:(0,x.Z)("h3"),h4:(0,x.Z)("h4"),h5:(0,x.Z)("h5"),h6:(0,x.Z)("h6")}}}]);