(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(9),i=(n(0),n(201)),c={title:"Responsive Charts"},o={id:"general/responsive",title:"Responsive Charts",description:"When it comes to changing the chart size based on the window size, a major limitation is that the canvas render size (canvas.width and .height) can not be expressed with relative values, contrary to the display size (canvas.style.width and .height). Furthermore, these sizes are independent from each other and thus the canvas render size does not adjust automatically based on the display size, making the rendering inaccurate.",source:"@site/docs/general/responsive.md",permalink:"/docs/master/general/responsive",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/general/responsive.md",sidebar:"someSidebar",previous:{title:"Accessibility",permalink:"/docs/master/general/accessibility"},next:{title:"Device Pixel Ratio",permalink:"/docs/master/general/device-pixel-ratio"}},b=[{value:"Configuration Options",id:"configuration-options",children:[]},{value:"Important Note",id:"important-note",children:[]},{value:"Printing Resizeable Charts",id:"printing-resizeable-charts",children:[]}],s={rightToc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When it comes to changing the chart size based on the window size, a major limitation is that the canvas ",Object(i.b)("em",{parentName:"p"},"render")," size (",Object(i.b)("inlineCode",{parentName:"p"},"canvas.width")," and ",Object(i.b)("inlineCode",{parentName:"p"},".height"),") can ",Object(i.b)("strong",{parentName:"p"},"not")," be expressed with relative values, contrary to the ",Object(i.b)("em",{parentName:"p"},"display")," size (",Object(i.b)("inlineCode",{parentName:"p"},"canvas.style.width")," and ",Object(i.b)("inlineCode",{parentName:"p"},".height"),"). Furthermore, these sizes are independent from each other and thus the canvas ",Object(i.b)("em",{parentName:"p"},"render")," size does not adjust automatically based on the ",Object(i.b)("em",{parentName:"p"},"display")," size, making the rendering inaccurate."),Object(i.b)("p",null,"The following examples ",Object(i.b)("strong",{parentName:"p"},"do not work"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'<canvas height="40vh" width="80vw">'),": ",Object(i.b)("strong",{parentName:"li"},"invalid")," values, the canvas doesn't resize (",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codepen.io/chartjs/pen/oWLZaR"}),"example"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'<canvas style="height:40vh; width:80vw">'),": ",Object(i.b)("strong",{parentName:"li"},"invalid")," behavior, the canvas is resized but becomes blurry (",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://codepen.io/chartjs/pen/WjxpmO"}),"example"),")")),Object(i.b)("p",null,"Chart.js provides a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#configuration-options"}),"few options")," to enable responsiveness and control the resize behavior of charts by detecting when the canvas ",Object(i.b)("em",{parentName:"p"},"display")," size changes and update the ",Object(i.b)("em",{parentName:"p"},"render")," size accordingly."),Object(i.b)("h2",{id:"configuration-options"},"Configuration Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"responsive")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Resizes the chart canvas when its container does (",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#important-note"}),"important note..."),").")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"maintainAspectRatio")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Maintain the original canvas aspect ratio ",Object(i.b)("inlineCode",{parentName:"td"},"(width / height)")," when resizing.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"aspectRatio")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"2")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Canvas aspect ratio (i.e. ",Object(i.b)("inlineCode",{parentName:"td"},"width / height"),", a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"onResize")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.")))),Object(i.b)("h2",{id:"important-note"},"Important Note"),Object(i.b)("p",null,"Detecting when the canvas size changes can not be done directly from the ",Object(i.b)("inlineCode",{parentName:"p"},"canvas")," element. Chart.js uses its parent container to update the canvas ",Object(i.b)("em",{parentName:"p"},"render")," and ",Object(i.b)("em",{parentName:"p"},"display")," sizes. However, this method requires the container to be ",Object(i.b)("strong",{parentName:"p"},"relatively positioned")," and ",Object(i.b)("strong",{parentName:"p"},"dedicated to the chart canvas only"),". Responsiveness can then be achieved by setting relative values for the container size (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://codepen.io/chartjs/pen/YVWZbz"}),"example"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div class="chart-container" style="position: relative; height:40vh; width:80vw">\n    <canvas id="chart"></canvas>\n</div>\n')),Object(i.b)("p",null,"The chart can also be programmatically resized by modifying the container size:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"chart.canvas.parentNode.style.height = '128px';\nchart.canvas.parentNode.style.width = '128px';\n")),Object(i.b)("p",null,"Note that in order for the above code to correctly resize the chart height, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#configuration-options"}),Object(i.b)("inlineCode",{parentName:"a"},"maintainAspectRatio"))," option must also be set to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h2",{id:"printing-resizeable-charts"},"Printing Resizeable Charts"),Object(i.b)("p",null,"CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, one needs to hook the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint"}),"onbeforeprint")," event and manually trigger resizing of each chart."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function beforePrintHandler () {\n    for (var id in Chart.instances) {\n        Chart.instances[id].resize();\n    }\n}\n")))}l.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=h;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);