(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),c=(n(0),n(201)),s={title:"Accessibility"},i={id:"general/accessibility",title:"Accessibility",description:"Chart.js charts are rendered on user provided canvas elements. Thus, it is up to the user to create the canvas element in a way that is accessible. The canvas element has support in all browsers and will render on screen but the canvas content will not be accessible to screen readers.",source:"@site/docs/general/accessibility.md",permalink:"/docs/master/general/accessibility",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/general/accessibility.md",sidebar:"someSidebar",previous:{title:"Data structures",permalink:"/docs/master/general/data-structures"},next:{title:"Responsive Charts",permalink:"/docs/master/general/responsive"}},l=[{value:"Examples",id:"examples",children:[]}],o={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Chart.js charts are rendered on user provided ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," elements. Thus, it is up to the user to create the ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," element in a way that is accessible. The ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," element has support in all browsers and will render on screen but the ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," content will not be accessible to screen readers."),Object(c.b)("p",null,"With ",Object(c.b)("inlineCode",{parentName:"p"},"canvas"),", the accessibility has to be added with ARIA attributes on the ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," element or added using internal fallback content placed within the opening and closing canvas tags."),Object(c.b)("p",null,"This ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://pauljadam.com/demos/canvas.html"}),"website")," has a more detailed explanation of ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," accessibility as well as in depth examples."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"These are some examples of ",Object(c.b)("strong",{parentName:"p"},"accessible")," ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," elements."),Object(c.b)("p",null,"By setting the ",Object(c.b)("inlineCode",{parentName:"p"},"role")," and ",Object(c.b)("inlineCode",{parentName:"p"},"aria-label"),", this ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," now has an accessible name."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<canvas id="goodCanvas1" width="400" height="100" aria-label="Hello ARIA World" role="img"></canvas>\n')),Object(c.b)("p",null,"This ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," element has a text alternative via fallback content."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<canvas id="okCanvas2" width="400" height="100">\n    <p>Hello Fallback World</p>\n</canvas>\n')),Object(c.b)("p",null,"These are some bad examples of ",Object(c.b)("strong",{parentName:"p"},"inaccessible")," ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," elements."),Object(c.b)("p",null,"This ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," element does not have an accessible name or role."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<canvas id="badCanvas1" width="400" height="100"></canvas>\n')),Object(c.b)("p",null,"This ",Object(c.b)("inlineCode",{parentName:"p"},"canvas")," element has inaccessible fallback content."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<canvas id="badCanvas2" width="400" height="100">Your browser does not support the canvas element.</canvas>\n')))}b.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(m,i(i({ref:t},o),{},{components:n})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<c;o++)s[o]=n[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);