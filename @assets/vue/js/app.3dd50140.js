(function(t){function e(e){for(var a,n,i=e[0],o=e[1],c=e[2],h=0,u=[];h<i.length;h++)n=i[h],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(u.length)u.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],a=!0,i=1;i<s.length;i++){var o=s[i];0!==r[o]&&(a=!1)}a&&(l.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},l=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=o;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Nav",{attrs:{setLight:t.toggle,light:t.light}}),s("div",{staticClass:"flex flex-grow items-center justify-center h-full text-gray-600 main-container",class:t.light?"bg-gray-200":"bg-gray-900"},[s("div",{staticClass:"max-w-full p-8 rounded-lg shadow-lg w-96 list-parent",class:t.light?"bg-white":"bg-gray-800 text-white"},[s("CardTitle"),s("AddForm",{attrs:{light:t.light,onCreate:t.onCreate,addInput:t.addInput,setAddInput:t.setAddInput}}),s("Lists",{attrs:{lists:t.lists,light:t.light,onRemove:t.onRemove,onFieldChange:t.onFieldChange}})],1)])],1)},l=[],n=(s("99af"),s("13d5"),s("07ac"),s("2909")),i=s("ade3"),o=s("5530"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("div",{staticClass:"flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"},[s("svg",{staticClass:"w-5 h-5 text-gray-400 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"}})]),s("input",{staticClass:"flex-grow h-8 ml-3 bg-transparent focus:outline-none font-medium",attrs:{required:"",type:"text",placeholder:"Add a new task"},domProps:{value:t.addInput},on:{change:function(e){return t.setAddInput(e.target.value)}}}),s("button",{staticClass:"pl-2 pr-2 pt-1 pb-1 rounded-sm focus:outline-none",class:t.light?"hover:bg-gray-200 bg-gray-300 text-gray-900":"hover:bg-gray-700 bg-gray-900",on:{click:function(e){return t.onCreate(e)}}},[t._v(" Add ")])])])},d=[],h={props:{light:Boolean,onCreate:Function,addInput:String,setAddInput:Function}},u=h,f=s("2877"),p=Object(f["a"])(u,c,d,!1,null,null,null),g=p.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center mb-6"},[s("svg",{attrs:{id:"Layer_1_1_",enableBackground:"new 0 0 64 64",height:"40",viewBox:"0 0 64 64",width:"40",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"m50 61h-47v-58h37l10 10z",fill:"#50b6cf"}}),s("path",{attrs:{d:"m50 13h-10v-10z",fill:"#3cadc9"}}),s("path",{attrs:{d:"m8 49h8v8h-8z",fill:"#ded8d0"}}),s("path",{attrs:{d:"m8 36h8v8h-8z",fill:"#ded8d0"}}),s("path",{attrs:{d:"m8 23h8v8h-8z",fill:"#ded8d0"}}),s("path",{attrs:{d:"m8 10h8v8h-8z",fill:"#ded8d0"}}),s("path",{attrs:{d:"m25 38 32-32 4 4-32 32-6 2z",fill:"#f5a947"}}),s("path",{attrs:{d:"m50 35c-5 10-28.15985 23.39606-47 23.95081v2.04919h47z",fill:"#3cadc9"}}),s("path",{attrs:{d:"m29 42 32-32-1.5-1.5-35 35z",fill:"#f09d3a"}}),s("path",{attrs:{d:"m25 38 4 4-6 2z",fill:"#e34e4b"}}),s("g",{attrs:{fill:"#0d0f23"}},[s("path",{attrs:{d:"m8 19h8c.55225 0 1-.44775 1-1v-3h-2v2h-6v-6h3v-2h-4c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1z"}}),s("path",{attrs:{d:"m12 13.58594-1.29297-1.29297-1.41406 1.41406 2 2c.19531.19531.45117.29297.70703.29297s.51172-.09766.70703-.29297l6-6-1.41406-1.41406z"}}),s("path",{attrs:{d:"m15 30h-6v-6h3v-2h-4c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-3h-2z"}}),s("path",{attrs:{d:"m12 26.58594-1.29297-1.29297-1.41406 1.41406 2 2c.19531.19531.45117.29297.70703.29297s.51172-.09766.70703-.29297l6-6-1.41406-1.41406z"}}),s("path",{attrs:{d:"m16 35h-8c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-8c0-.55225-.44775-1-1-1zm-1 8h-6v-6h6z"}}),s("path",{attrs:{d:"m16 48h-8c-.55225 0-1 .44775-1 1v8c0 .55225.44775 1 1 1h8c.55225 0 1-.44775 1-1v-8c0-.55225-.44775-1-1-1zm-1 8h-6v-6h6z"}}),s("path",{attrs:{d:"m57.70703 5.29297c-.39062-.39062-1.02344-.39062-1.41406 0l-6.29297 6.29297-9.29297-9.29297c-.1875-.1875-.44189-.29297-.70703-.29297h-37c-.55225 0-1 .44775-1 1v58c0 .55225.44775 1 1 1h47c.55225 0 1-.44775 1-1v-39.58594l10.70703-10.70703c.39062-.39062.39062-1.02344 0-1.41406zm-8.70703 54.70703h-45v-56h35.58594l8 8h-6.58594v-5h-2v6c0 .55225.44775 1 1 1h7.58594l-23.29297 23.29297c-.10986.10986-.19238.24365-.2417.39062l-2 6c-.11963.35938-.02637.75586.2417 1.02344.19043.19092.44629.29297.70703.29297.10596 0 .2124-.0166.31641-.05127l6-2c.14697-.04932.28076-.13184.39062-.2417l19.29297-19.29297zm-23.56299-20.14893 1.71191 1.71191-2.56787.85596zm3.56299.73487-2.58594-2.58594 30.58594-30.58594 2.58594 2.58594z"}}),s("path",{attrs:{d:"m45 56h2v2h-2z"}}),s("path",{attrs:{d:"m41 56h2v2h-2z"}}),s("path",{attrs:{d:"m37 56h2v2h-2z"}})])]),s("h4",{staticClass:"font-semibold ml-3 text-lg mr-3"},[t._v(" Vue Todo list ")])])},v=[],b={},x=b,y=Object(f["a"])(x,m,v,!1,null,null,null),w=y.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-container",class:{"list-scroll-dark":!t.light}},[t.lists.length?s("div",t._l(t.lists,(function(e,a){return s("div",{key:a},[s("input",{staticClass:"hidden",attrs:{type:"checkbox",id:e.id},domProps:{checked:e.checked}}),s("label",{staticClass:"flex items-center h-10 px-2 rounded cursor-pointer",class:(t.light,"hover:bg-gray-300"),attrs:{htmlFor:e.id},on:{click:function(s){return s.preventDefault(),t.onFieldChange(e.id,"checked")}}},[s("span",{staticClass:"flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full"},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}})])]),s("input",{staticClass:"bg-transparent pl-4 text-sm focus:outline-none ",attrs:{type:"text"},domProps:{value:e.task},on:{change:function(s){return t.onFieldChange(e.id,"task",s.target.value)}}}),s("button",{staticClass:"text-xs focus:outline-none delete-button",on:{click:function(s){return t.onRemove(e.id)}}},[t._v(" Delete ")])])])})),0):t._e()])},k=[],_={props:{light:Boolean,lists:Array,onRemove:Function,onFieldChange:Function}},j=_,O=Object(f["a"])(j,C,k,!1,null,null,null),z=O.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"bg-gray-800"},[s("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[s("div",{staticClass:"relative flex items-center justify-between h-16"},[s("div",{staticClass:"absolute inset-y-0 left-0 flex items-center sm:hidden"},[s("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",attrs:{"aria-expanded":"false"},on:{click:function(e){t.visible=!t.visible}}},[s("span",{staticClass:"sr-only"},[t._v("Open main menu")]),s("svg",{staticClass:"block h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}})]),s("svg",{staticClass:"hidden h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}})])])]),s("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[s("div",{staticClass:"flex-shrink-0 flex items-center logo-image",attrs:{click:function(){return t.window.location.pathname="/"}}},[s("img",{staticClass:"block lg:hidden h-8 w-auto",attrs:{src:"",alt:""}}),s("img",{staticClass:"hidden lg:block h-8 w-auto",attrs:{src:"https://via.placeholder.com/110x32",alt:""}})]),t._m(0)]),s("div",{staticClass:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},[s("span",{staticClass:"border rounded-full border-grey flex items-center cursor-pointer w-12",class:{"bg-gray-200 justify-start":t.light,"bg-gray-800 justify-end":!t.light},on:{click:function(e){return t.setLight()}}},[s("span",{staticClass:"rounded-full border w-6 h-6 border-grey shadow-inner bg-blue-400 shadow"})]),t._m(1)])])]),t.visible?s("div",{staticClass:"sm:hidden"},[t._m(2)]):t._e()])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hidden sm:block sm:ml-6"},[s("div",{staticClass:"flex space-x-4"},[s("a",{staticClass:"text-white px-3 py-2 rounded-md text-sm font-small hover:bg-gray-300 hover:text-black",attrs:{href:"/"}},[t._v(" React ")]),s("a",{staticClass:"text-white px-3 py-2 rounded-md text-sm font-small hover:bg-gray-300 hover:text-black",attrs:{href:"/angular"}},[t._v(" Angular ")]),s("a",{staticClass:"text-white px-3 py-2 rounded-md text-sm font-small hover:bg-gray-300 hover:text-black",attrs:{href:"/angular"}},[t._v(" Svelte ")]),s("a",{staticClass:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{href:"/vue"}},[t._v(" Vue ")]),s("a",{staticClass:"text-white px-3 py-2 rounded-md text-sm font-small hover:bg-gray-300 hover:text-black",attrs:{href:"/ember"}},[t._v(" Ember ")]),s("a",{staticClass:"text-white px-3 py-2 rounded-md text-sm font-small hover:bg-gray-300 hover:text-black",attrs:{href:"/jquery"}},[t._v(" jQuery ")]),s("a",{staticClass:"text-white px-3 py-2 rounded-md text-sm font-small hover:bg-gray-300 hover:text-black",attrs:{href:"/backbone"}},[t._v(" Backbone ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ml-3 relative"},[s("div",[s("a",{staticClass:"bg-gray-800 flex text-sm rounded-full focus:outline-none",attrs:{href:"https://github.com/devlargs/todo-lists",target:"_blank"}},[s("span",{staticClass:"sr-only"},[t._v("Ralph Largo | @devlargs")]),s("img",{staticClass:"h-8 w-8 rounded-full",attrs:{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",alt:"Go to github page"}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-2 pt-2 pb-3 space-y-1"},[s("a",{staticClass:"text-white block px-3 py-2 rounded-md text-base font-small",attrs:{href:"/react"}},[t._v(" React ")]),s("a",{staticClass:"text-white block px-3 py-2 rounded-md text-base font-small",attrs:{href:"/angular"}},[t._v(" Angular ")]),s("a",{staticClass:"text-white block px-3 py-2 rounded-md text-base font-small",attrs:{href:"/svelte"}},[t._v(" Svelte ")]),s("a",{staticClass:"text-white block px-3 py-2 rounded-md text-base font-medium bg-gray-900 ",attrs:{href:"/vue"}},[t._v(" Vue ")]),s("a",{staticClass:"text-white block px-3 py-2 rounded-md text-base font-small",attrs:{href:"/ember"}},[t._v(" Ember ")]),s("a",{staticClass:"text-white block px-3 py-2 rounded-md text-base font-small",attrs:{href:"/jquery"}},[t._v(" jQuery ")]),s("a",{staticClass:"text-white block px-3 py-2 rounded-md text-base font-small",attrs:{href:"/backbone"}},[t._v(" Backbone ")])])}],L={name:"Nav",props:{setLight:Function,light:Boolean},data:function(){return{visible:!1}}},B=L,F=Object(f["a"])(B,S,I,!1,null,null,null),A=F.exports,E={name:"App",components:{AddForm:g,CardTitle:w,Lists:z,Nav:A},data:function(){return{addInput:"",lists:localStorage.lists?JSON.parse(localStorage.lists):[],light:!!localStorage.light&&JSON.parse(localStorage.light)}},methods:{setAddInput:function(t){this.addInput=t},keyBy:function(t,e){return(t||[]).reduce((function(t,s){return Object(o["a"])(Object(o["a"])({},t),{},Object(i["a"])({},e?s[e]:s,s))}),{})},maxCharError:function(){alert("too long")},toggle:function(){this.light=!this.light,localStorage.setItem("light",this.light)},onCreate:function(t){var e=this.addInput;e.length>=15&&this.maxCharError(),e&&(this.lists=[{id:+new Date,task:e,checked:!1}].concat(Object(n["a"])(this.lists)),t.preventDefault(),localStorage.setItem("lists",JSON.stringify(this.lists)),this.addInput="")},onFieldChange:function(t,e,s){var a=this.keyBy(Object(n["a"])(this.lists),"id");if("checked"===e){a[t].checked=!a[t].checked;var r=Object.values(a);this.lists=r,localStorage.setItem("lists",JSON.stringify(r))}else if("task"===e&&s.length>=15)this.maxCharError();else{var l=Object.values(a);a[t].task=s,this.lists=l,localStorage.setItem("lists",JSON.stringify(l))}},onRemove:function(t){var e=this.keyBy(Object(n["a"])(this.lists),"id");delete e[t],this.lists=Object.values(e),localStorage.setItem("lists",JSON.stringify(Object.values(e)))}}},M=E,P=(s("034f"),Object(f["a"])(M,r,l,!1,null,null,null)),R=P.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(R)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.3dd50140.js.map