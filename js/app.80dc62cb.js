(function(t){function e(e){for(var o,s,a=e[0],u=e[1],l=e[2],d=0,p=[];d<a.length;d++)s=a[d],r[s]&&p.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-pomodoro/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen antialiased",attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("8700"),n("2877")),a={},u=Object(s["a"])(a,r,i,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,c=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"text-center text-white pt-16 pb-20"},[n("div",{staticClass:"flex justify-between w-2/3 mx-auto"},[n("button",{staticClass:"bg-pink-dark text-white hover:bg-pink-darker font-bold py-2 px-4 rounded-full border-b-4 border-pink-darker hover:border-pink-dark",on:{click:function(e){t.sessionLength=25}}},[t._v("\n        Pomodoro\n      ")]),n("button",{staticClass:"bg-pink-dark text-white hover:bg-pink-darker font-bold py-2 px-4 rounded-full border-b-4 border-pink-darker hover:border-pink-dark",on:{click:function(e){t.sessionLength=5}}},[t._v("\n        Short Break\n      ")]),n("button",{staticClass:"bg-pink-dark text-white hover:bg-pink-darker font-bold py-2 px-4 rounded-full border-b-4 border-pink-darker hover:border-pink-dark",on:{click:function(e){t.sessionLength=15}}},[t._v("\n        Long Break\n      ")])]),n("p",{staticClass:"text-20xl text-font-concert"},[t._v(t._s(t.minutes)+":"+t._s(t.seconds))]),n("div",{staticClass:"w-3/5 mx-auto flex justify-between mt-20"},[n("i",{staticClass:"fas fa-redo text-10xl cursor-pointer",on:{click:t.resetTimer}}),n("i",{staticClass:"fas fa-play text-10xl cursor-pointer",on:{click:t.startTimer}}),n("i",{staticClass:"fas fa-pause text-10xl cursor-pointer",on:{click:t.stopTimer}})]),n("div",{staticClass:"w-3/5 mt-32 bg-pink-dark mx-auto pb-10"},[n("p",{staticClass:"text-5xl text-font-concert py-2"},[t._v("TO-DO LIST")]),n("form",{staticClass:"w-full",attrs:{autocomplete:"off"},on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"appearance-none w-4/5 bg-grey-lighter text-black border border-grey-lighter rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey rounded-full text-center",attrs:{id:"grid-last-name",type:"text",placeholder:"Type your to-do and press enter"},domProps:{value:t.newTodo},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),t.handleAddTodo(e)):null},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})]),t._l(t.todos,function(e,o){return n("div",{key:o,staticClass:"w-4/5 mx-auto overflow-hidden shadow-lg bg-white mt-6"},[n("div",{staticClass:"px-6 py-4 flex justify-between align-baseline items-center"},[n("span"),n("p",{staticClass:"text-grey-darker text-base",class:{"line-through":e.done}},[t._v("\n            "+t._s(e.todo)+"\n          ")]),n("input",{staticClass:"\n            mr-2\n            leading-tight",attrs:{type:"checkbox"},on:{click:function(t){e.done=!e.done}}})])])})],2)])])},p=[],f={name:"home",data:function(){return{timeLeft:1500,timer:null,sessionLength:25,newTodo:"",todos:[]}},methods:{countdown:function(){this.timeLeft>=1?this.timeLeft--:(this.playSound("http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3"),this.timeLeft=0,this.resetTimer())},resetTimer:function(){clearInterval(this.timer),this.timer=null,this.timeLeft=60*this.sessionLength},startTimer:function(){var t=this;this.timer||(this.timer=setInterval(function(){return t.countdown()},1e3))},stopTimer:function(){clearInterval(this.timer),this.timer=null},playSound:function(t){t&&new Audio(t).play()},handleAddTodo:function(){this.todos.push({todo:this.newTodo,done:!1}),this.newTodo=""}},computed:{minutes:function(){return Math.floor(this.timeLeft/60)},seconds:function(){return this.timeLeft%60<10?"0"+this.timeLeft%60:this.timeLeft%60}},watch:{sessionLength:function(){this.resetTimer()}}},h=f,m=Object(s["a"])(h,d,p,!1,null,null,null);m.options.__file="Home.vue";var b=m.exports;o["a"].use(c["a"]);var v=new c["a"]({mode:"history",base:"/vue-pomodoro/",routes:[{path:"/",name:"home",component:b}]}),g=n("2f62");o["a"].use(g["a"]);var k=new g["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:v,store:k,render:function(t){return t(l)}}).$mount("#app")},"6e5c":function(t,e,n){},8700:function(t,e,n){"use strict";var o=n("6e5c"),r=n.n(o);r.a}});
//# sourceMappingURL=app.80dc62cb.js.map