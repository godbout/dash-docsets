(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),i=(a(0),a(201)),c={title:"Data structures"},s={id:"general/data-structures",title:"Data structures",description:"The data property of a dataset can be passed in various formats. By default, that data is parsed using the associated chart type and scales.",source:"@site/docs/general/data-structures.md",permalink:"/docs/master/general/data-structures",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/general/data-structures.md",sidebar:"someSidebar",previous:{title:"3.x Migration Guide",permalink:"/docs/master/getting-started/v3-migration"},next:{title:"Accessibility",permalink:"/docs/master/general/accessibility"}},o=[{value:"Primitive[]",id:"primitive",children:[]},{value:"Object[]",id:"object",children:[]},{value:"Object[] using custom properties",id:"object-using-custom-properties",children:[{value:"<code>parsing</code> can also be specified per dataset",id:"parsing-can-also-be-specified-per-dataset",children:[]}]},{value:"Object",id:"object-1",children:[]}],l={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"data")," property of a dataset can be passed in various formats. By default, that ",Object(i.b)("inlineCode",{parentName:"p"},"data")," is parsed using the associated chart type and scales."),Object(i.b)("h2",{id:"primitive"},"Primitive[]"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data: [20, 10],\nlabels: ['a', 'b']\n")),Object(i.b)("p",null,"When the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," is an array of numbers, values from ",Object(i.b)("inlineCode",{parentName:"p"},"labels")," array at the same index are used for the index axis (",Object(i.b)("inlineCode",{parentName:"p"},"x")," for vertical, ",Object(i.b)("inlineCode",{parentName:"p"},"y")," for horizontal charts)."),Object(i.b)("h2",{id:"object"},"Object[]"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data: [{x: 10, y: 20}, {x: 15, y: 10}]\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data: [{x:'Sales', y:20}, {x:'Revenue', y:10}]\n")),Object(i.b)("p",null,"This is also the internal format used for parsed data. In this mode, parsing can be disabled by specifying ",Object(i.b)("inlineCode",{parentName:"p"},"parsing: false")," at chart options or dataset. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally."),Object(i.b)("h2",{id:"object-using-custom-properties"},"Object[] using custom properties"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"type: 'bar',\ndata: {\n    datasets: [{\n        data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}]\n    }]\n},\noptions: {\n    parsing: {\n        xAxisKey: 'id',\n        yAxisKey: 'nested.value'\n    }\n}\n")),Object(i.b)("h3",{id:"parsing-can-also-be-specified-per-dataset"},Object(i.b)("inlineCode",{parentName:"h3"},"parsing")," can also be specified per dataset"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];\nconst cfg = {\n    type: 'bar',\n    data: {\n        labels: ['Jan', 'Feb'],\n        datasets: [{\n            label: 'Net sales',\n            data: data,\n            parsing: {\n                yAxisKey: 'net'\n            }\n        }, {\n            label: 'Cost of goods sold',\n            data: data,\n            parsing: {\n                yAxisKey: 'cogs'\n            }\n        }, {\n            label: 'Gross margin',\n            data: data,\n            parsing: {\n                yAxisKey: 'gm'\n            }\n        }]\n    },\n};\n")),Object(i.b)("h2",{id:"object-1"},"Object"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data: {\n    January: 10,\n    February: 20\n}\n")),Object(i.b)("p",null,"In this mode, property name is used for ",Object(i.b)("inlineCode",{parentName:"p"},"index")," scale and value for ",Object(i.b)("inlineCode",{parentName:"p"},"value")," scale. For vertical charts, index scale is ",Object(i.b)("inlineCode",{parentName:"p"},"x")," and value scale is ",Object(i.b)("inlineCode",{parentName:"p"},"y"),"."))}p.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);