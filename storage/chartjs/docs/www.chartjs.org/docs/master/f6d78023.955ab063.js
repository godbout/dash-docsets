(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),o=(n(0),n(201)),i={title:"Configuration"},c={id:"configuration/index",title:"Configuration",description:"The configuration is used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc.",source:"@site/docs/configuration/index.md",permalink:"/docs/master/configuration/index",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/configuration/index.md",sidebar:"someSidebar",previous:{title:"Performance",permalink:"/docs/master/general/performance"},next:{title:"Animations",permalink:"/docs/master/configuration/animations"}},s=[{value:"Global Configuration",id:"global-configuration",children:[]},{value:"Dataset Configuration",id:"dataset-configuration",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The configuration is used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc."),Object(o.b)("h2",{id:"global-configuration"},"Global Configuration"),Object(o.b)("p",null,"This concept was introduced in Chart.js 1.0 to keep configuration ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"}),"DRY"),", and allow for changing options globally across chart types, avoiding the need to specify options for each instance, or the default for a particular chart type."),Object(o.b)("p",null,"Chart.js merges the options object passed to the chart with the global configuration using chart type defaults and scales defaults appropriately. This way you can be as specific as you would like in your individual chart configuration, while still changing the defaults for all chart types where applicable. The global general options are defined in ",Object(o.b)("inlineCode",{parentName:"p"},"Chart.defaults"),". The defaults for each chart type are discussed in the documentation for that chart type."),Object(o.b)("p",null,"The following example would set the hover mode to 'nearest' for all charts where this was not overridden by the chart type defaults or the options passed to the constructor on creation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.defaults.hover.mode = 'nearest';\n\n// Hover mode is set to nearest because it was not overridden here\nvar chartHoverModeNearest = new Chart(ctx, {\n    type: 'line',\n    data: data\n});\n\n// This chart would have the hover mode that was passed in\nvar chartDifferentHoverMode = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        hover: {\n            // Overrides the global setting\n            mode: 'index'\n        }\n    }\n});\n")),Object(o.b)("h2",{id:"dataset-configuration"},"Dataset Configuration"),Object(o.b)("p",null,"Options may be configured directly on the dataset. The dataset options can be changed at 3 different levels and are evaluated with the following priority:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"per dataset: dataset.*"),Object(o.b)("li",{parentName:"ul"},"per chart: options","[type]",".datasets.*"),Object(o.b)("li",{parentName:"ul"},"or globally: Chart.defaults","[type]",".datasets.*")),Object(o.b)("p",null,"where type corresponds to the dataset type."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note:")," dataset options take precedence over element options."),Object(o.b)("p",null,"The following example would set the ",Object(o.b)("inlineCode",{parentName:"p"},"showLine")," option to 'false' for all line datasets except for those overridden by options passed to the dataset on creation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Do not show lines for all datasets by default\nChart.defaults.datasets.line.showLine = false;\n\n// This chart would show a line only for the third dataset\nvar chart = new Chart(ctx, {\n    type: 'line',\n    data: {\n        datasets: [{\n            data: [0, 0],\n        }, {\n            data: [0, 1]\n        }, {\n            data: [1, 0],\n            showLine: true // overrides the `line` dataset default\n        }, {\n            type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'\n            data: [1, 1]\n        }]\n    }\n});\n")))}d.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,f=p["".concat(i,".").concat(h)]||p[h]||u[h]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);