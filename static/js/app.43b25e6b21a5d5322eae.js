webpackJsonp([2],Array(27).concat([function(t,n,e){"use strict";function i(){var t=r.a+"videos/";return c.a.get(t)}n.a=i;var r=e(70),o=e(11),c=e.n(o)},function(t,n,e){"use strict";function i(){return o.a.get(c,a)}n.a=i;var r=e(115),o=e.n(r),c="__nx__",a=[{status:!1,Nx:"N1"},{status:!1,Nx:"N2"},{status:!0,Nx:"N3"},{status:!0,Nx:"N4"},{status:!0,Nx:"N5"}]},function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"e",function(){return r}),e.d(n,"d",function(){return o}),e.d(n,"l",function(){return c}),e.d(n,"m",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"o",function(){return s}),e.d(n,"f",function(){return l}),e.d(n,"g",function(){return d}),e.d(n,"h",function(){return f}),e.d(n,"i",function(){return v}),e.d(n,"j",function(){return _}),e.d(n,"k",function(){return m}),e.d(n,"n",function(){return p}),e.d(n,"b",function(){return g});var i="GET_NTEXT",r="GET_RANDOM_SENTENCE",o="GET_THIS_SENTENCE",c="GET_SENTENCE_FROM_FLOW",a="SET_NxChoose",u="GET_COMMENTS_LIST",s="SET_CURRENT_INDEX",l="GET_PLAYLIST",d="GET_VEDIOLIST",f="GET_MVSRC",v="GET_PLAYLIST_MUSIC",_="GET_MUSICLIST",m="GET_MUSIC_SRC",p="GET_WORD_DTAIL",g="GET_WOED_MEANING"},,,,,,,,,,,,function(t,n,e){"use strict";var i=e(80),r=e.n(i),o=e(12),c=e(21),a=e(72);o.a.use(c.a),n.a=new c.a({routes:[{path:"/",redirect:"/main"}].concat(r()(a.a))})},function(t,n,e){"use strict";var i=e(12),r=e(2),o=e(73),c=e(74),a=e(76),u=e(75);i.a.use(r.a),n.a=new r.a.Store({state:a.a,mutations:u.a,actions:o,getters:c})},function(t,n,e){function i(t){e(113)}var r=e(1)(e(62),e(130),i,null,null);t.exports=r.exports},,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e(2);n.default={data:function(){return{open:!1,docked:!0}},methods:{toggle:function(t){this.open=!this.open,this.docked=!t}},components:{}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(120),r=e.n(i),o=e(122),c=e.n(o);n.default={components:{main_content_tab1:r.a,main_content_tab2:c.a},data:function(){return{items:["流","收藏","斩"]}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{header:String,text:String,img:String},data:function(){return{}},components:{},computed:{},methods:{random_color:function(){var t=["pink lighten-2","red lighten-3","purple lighten-1","deep-purple darken-2","purple accent-4","indigo lighten-2","indigo darken-1","indigo accent-2","blue lighten-2","light-blue lighten-2","cyan lighten-2","cyan accent-3","teal lighten-3","teal accent-2","green accent-2","green lighten-1","light-green lighten-3","lime lighten-1","yellow lighten-3","amber lighten-1","orange accent-3","deep-orange accent-1","brown lighten-2","blue-grey lighten-1","blue-grey darken-2","grey darken-2"],n=t.length;return t[Math.ceil(Math.random()*n)]}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=(e(2),e(119)),r=e.n(i),o=e(27);n.default={name:"main_content_tab1",components:{main_content_tab1_card:r.a},data:function(){return{da:[]}},beforeMount:function(){},mounted:function(){this.gf()},computed:{},methods:{gf:function(){var t=this;e.i(o.a)().then(function(n){console.log("############"),console.log(n.data),t.da=n.data})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{header:String,text:String,img:String},data:function(){return{}},components:{},computed:{},methods:{}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=(e(2),e(121)),r=e.n(i),o=e(27);n.default={name:"main_content_tab2",components:{main_content_tab1_card:r.a},data:function(){return{da:[]}},beforeMount:function(){e.i(o.a)()},computed:{},methods:{gf:function(){var t=this;e.i(o.a)().then(function(n){console.log(n.data),t.da=n.data})}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(118),r=e.n(i),o=e(124),c=e.n(o);n.default={components:{main_content:r.a,main_toolbar:c.a},data:function(){return{drawer:!1}}}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={components:{},data:function(){return{items:[{icon:"contacts",text:"Contacts"},{icon:"history",text:"Frequently contacted"},{icon:"content_copy",text:"Duplicates"},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Labels",model:!0,children:[{icon:"add",text:"Create label"}]},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"More",model:!1,children:[{text:"Import"},{text:"Export"},{text:"Print"},{text:"Undo changes"},{text:"Other contacts"}]},{icon:"settings",text:"Settings"},{icon:"chat_bubble",text:"Send feedback"},{icon:"help",text:"Help"},{icon:"phonelink",text:"App downloads"},{icon:"keyboard",text:"Go to the old version"}]}}}},function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i="http://123.206.220.149:8768/"},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(12),r=e(2),o=e(21),c=e(11),a=e.n(c),u=e(43),s=e.n(u),l=e(41),d=e(42),f=e(44),v=e.n(f);e.e(0).then(e.bind(null,109)),i.a.use(r.a),i.a.use(a.a),i.a.use(o.a),i.a.use(v.a),i.a.config.productionTip=!1,new i.a({el:"#app",store:d.a,router:l.a,template:"<App/>",components:{App:s.a}})},function(t,n,e){"use strict";var i=e(123),r=e.n(i);n.a=[{path:"/main",name:"main",component:r.a}]},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"getNtext",function(){return u}),e.d(n,"getWordMeaning",function(){return s}),e.d(n,"postComment",function(){return l}),e.d(n,"getComment",function(){return d}),e.d(n,"getThisSentence",function(){return f}),e.d(n,"getSentenceFromflow",function(){return v}),e.d(n,"getRandomSentence",function(){return _}),e.d(n,"getPlaylist",function(){return m}),e.d(n,"getVediolist",function(){return p}),e.d(n,"getMvSrc",function(){return g}),e.d(n,"getPlaylistMusic",function(){return h}),e.d(n,"getMusiclist",function(){return x}),e.d(n,"getMusicSrc",function(){return b});var i=e(29),r=e(11),o=e.n(r),c=(e(28),this),a="http://123.206.220.149:8768",u=function(t,n){var e=t.commit;o.a.get(a+"/ntext/show/"+n).then(function(t){e(i.a,t.data)})},s=function(t,n){var e=t.commit;o.a.get(a+"/words/"+n).then(function(t){c.word=t.data,e(i.b,t.data)})},l=function(t,n){t.commit;o.a.get(a+"/sentences/"+n.id+"/comments/post/"+n.content).then(function(t){console.log(t.data)})},d=function(t,n){var e=t.commit;o.a.get(a+"/sentences/"+n+"/comments").then(function(t){e(i.c,t.data)})},f=function(t,n){var e=t.commit;o.a.get(a+"/sentences/"+n).then(function(t){e(i.d,t.data)})},v=function(t,n){t.commit;return o.a.get(a+"/sentences/"+n.index+"/video/"+n.id)},_=function(t,n){var e=t.commit;o.a.get(a+"/sentences/random/"+function(t){var n="";return t.forEach(function(t){1==t.status&&(n=n+t.Nx+"&")}),""==n?"null":n}(n)).then(function(t){e(i.e,t.data)})},m=function(t,n){var e=t.commit;o.a.get(a+"/videos/"+n+"/sentences").then(function(t){e(i.f,t.data)})},p=function(t,n){var e=t.commit;o.a.get(a+"/videos/").then(function(t){e(i.g,t.data)})},g=function(t,n){var e=t.commit;o.a.get(a+"/videos/"+n).then(function(t){e(i.h,t.data.mp4_url)})},h=function(t,n){var e=t.commit;o.a.get(a+"/music/"+n).then(function(t){e(i.i,t.data),console.log(t.data)})},x=function(t,n){var e=t.commit;console.log("sajdsajajs"),o.a.get(a+"/musiclist").then(function(t){e(i.j,t.data),console.log(t.data)})},b=function(t,n){var e=t.commit;o.a.get(a+"/musicurl/"+n).then(function(t){e(i.k,t.data)})}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"ntext",function(){return i}),e.d(n,"randomSentence",function(){return r}),e.d(n,"currentIndex",function(){return o}),e.d(n,"wordsListIndex",function(){return c}),e.d(n,"flowSentenceId",function(){return a}),e.d(n,"idSentence",function(){return u}),e.d(n,"chooseNx",function(){return s}),e.d(n,"commentsList",function(){return l}),e.d(n,"wordMeaning",function(){return d}),e.d(n,"wordDtail",function(){return f}),e.d(n,"vediolist",function(){return v}),e.d(n,"mvSrc",function(){return _}),e.d(n,"playlist",function(){return m}),e.d(n,"currentVedio",function(){return p}),e.d(n,"nextVedio",function(){return g}),e.d(n,"musiclist",function(){return h}),e.d(n,"musicSrc",function(){return x}),e.d(n,"playlistMusic",function(){return b}),e.d(n,"currentSong",function(){return y}),e.d(n,"nextSong",function(){return S});var i=function(t){return t.ntext},r=function(t){return t.randomSentence},o=function(t){return t.currentIndex},c=function(t){return t.wordsListIndex},a=function(t){return t.flowSentenceId},u=function(t){return t.idSentence},s=function(t){return t.chooseNx},l=function(t){return t.commentsList},d=function(t){return t.wordMeaning},f=function(t){return t.wordDtail},v=function(t){return t.vediolist},_=function(t){return t.mvSrc},m=function(t){return t.playlist},p=function(t){return t.playlist[t.currentIndex]||{}},g=function(t){return t.playlist[t.currentIndex+1]||{}},h=function(t){return t.musiclist},x=function(t){return t.musicSrc},b=function(t){return t.playlistMusic},y=function(t){return t.playlistMusic[t.currentIndex]||{}},S=function(t){return t.playlistMusic[t.currentIndex+1]||{}}},function(t,n,e){"use strict";var i,r=e(79),o=e.n(r),c=e(29),a=(i={},o()(i,c.a,function(t,n){t.ntext=n}),o()(i,c.l,function(t,n){t.flowSentenceId=n}),o()(i,c.d,function(t,n){t.idSentence=n}),o()(i,c.m,function(t,n){t.chooseNx=n}),o()(i,c.c,function(t,n){t.commentsList=n}),o()(i,c.e,function(t,n){t.randomSentence=n}),o()(i,c.b,function(t,n){t.wordMeaning=n}),o()(i,c.n,function(t,n){t.wordDtail=n}),o()(i,c.o,function(t,n){t.currentIndex=n}),o()(i,c.f,function(t,n){t.playlist=n}),o()(i,c.g,function(t,n){t.vediolist=n}),o()(i,c.h,function(t,n){t.mvSrc=n}),o()(i,c.i,function(t,n){t.playlistMusic=n}),o()(i,c.j,function(t,n){t.musiclist=n}),o()(i,c.k,function(t,n){t.musicSrc=n}),i);n.a=a},function(t,n,e){"use strict";var i=e(28),r={ntext:{},randomSentence:{},idSentence:{},flowSentenceId:"",commentsList:[],wordsListIndex:0,wordMeaning:"",wordDtail:{},currentIndex:0,vediolist:[],playlist:[],mvSrc:"",musiclist:[],playlistMusic:[],musicSrc:"",chooseNx:e.i(i.a)(),history:[],toKillCollection:[]};n.a=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){},function(t,n){},function(t,n){},function(t,n){},function(t,n){},,,,function(t,n,e){var i=e(1)(e(63),e(126),null,null,null);t.exports=i.exports},function(t,n,e){function i(t){e(114)}var r=e(1)(e(64),e(132),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(110)}var r=e(1)(e(65),e(127),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(112)}var r=e(1)(e(66),e(129),i,null,null);t.exports=r.exports},function(t,n,e){function i(t){e(111)}var r=e(1)(e(67),e(128),i,null,null);t.exports=r.exports},function(t,n,e){var i=e(1)(e(68),e(125),null,null,null);t.exports=i.exports},function(t,n,e){var i=e(1)(e(69),e(131),null,null,null);t.exports=i.exports},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{id:"inspire"}},[e("v-navigation-drawer",{attrs:{persistent:"",clipped:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("main_toolbar")],1),t._v(" "),e("v-toolbar",{attrs:{color:"deep-purple darken-1",dark:"",app:"","clipped-left":"",fixed:""}},[e("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[e("v-toolbar-side-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v("\n      初~ja\n    ")],1),t._v(" "),e("v-btn",{attrs:{icon:"",large:""}},[e("v-avatar",{attrs:{size:"32px",tile:""}},[e("img",{attrs:{src:"https://vuetifyjs.com/static/doc-images/logo.svg",alt:"Vuetify"}})])],1)],1),t._v(" "),e("main_content"),t._v(" "),e("v-footer",{staticClass:"white--text",attrs:{color:"deep-purple darken-1",app:""}},[e("span",[t._v("初~ja")]),t._v(" "),e("v-spacer"),t._v(" "),e("span",[t._v("© 2017")])],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("v-content",[e("v-tabs",{attrs:{dark:"",fixed:"",centered:""}},[e("v-tabs-bar",{staticClass:"deep-purple lighten-4"},[e("v-tabs-slider",{staticClass:"yellow"}),t._v(" "),t._l(t.items,function(n){return e("v-tabs-item",{key:n,attrs:{href:"#"+n}},[t._v("\n          "+t._s(n)+"\n        ")])})],2),t._v(" "),e("v-tabs-items",[e("v-tabs-content",{key:"流",attrs:{id:"流"}},[e("main_content_tab1")],1),t._v(" "),e("v-tabs-content",{key:"收藏",attrs:{id:"收藏"}},[e("main_content_tab2")],1),t._v(" "),e("v-tabs-content",{key:"斩",attrs:{id:"斩"}},[t._v("\n     dsa\n        ")])],1)],1)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.da,function(t){return e("main_content_tab1_card",{attrs:{header:t.name,text:t.mp4_url,img:t.img}})}))],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[t._v("\n\n  "+t._s(t.da)+"\n  "),e("v-layout",{attrs:{row:"",wrap:""}},[e("main_content_tab1_card",{attrs:{header:"多年",text:"亚十多年跋山涉水",img:"http://outka3xht.bkt.clouddn.com/kodoba.jpg"}})],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-flex",{attrs:{xs12:""}},[e("v-card",{staticClass:"white--text",attrs:{color:"cyan darken-2"}},[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs7:""}},[e("div",[e("div",{staticClass:"headline"},[t._v(t._s(t.header))]),t._v(" "),e("div",[t._v(t._s(t.text))])])]),t._v(" "),e("v-flex",{attrs:{xs5:""}},[e("v-card-media",{attrs:{src:t.img,height:"180px",contain:""}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list",{attrs:{dense:""}},[t._l(t.items,function(n,i){return[n.heading?e("v-layout",{key:i,attrs:{row:"","align-center":""}},[e("v-flex",{attrs:{xs6:""}},[n.heading?e("v-subheader",[t._v("\n          "+t._s(n.heading)+"\n        ")]):t._e()],1),t._v(" "),e("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[e("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):n.children?e("v-list-group",{attrs:{"no-action":""},model:{value:n.model,callback:function(t){n.model=t},expression:"item.model"}},[e("v-list-tile",{on:{click:function(t){}},slot:"item"},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(n.model?n.icon:n["icon-alt"]))])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v("\n            "+t._s(n.text)+"\n          ")])],1)],1),t._v(" "),t._l(n.children,function(n,i){return e("v-list-tile",{key:i,on:{click:function(t){}}},[n.icon?e("v-list-tile-action",[e("v-icon",[t._v(t._s(n.icon))])],1):t._e(),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v("\n            "+t._s(n.text)+"\n          ")])],1)],1)})],2):e("v-list-tile",{on:{click:function(t){}}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v("\n          "+t._s(n.text)+"\n        ")])],1)],1)]})],2)},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-flex",{attrs:{xs12:""}},[e("v-card",{staticClass:"white--text",attrs:{color:t.random_color()}},[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs7:""}},[e("div",[e("div",{staticClass:"headline"},[t._v(t._s(t.header))]),t._v(" "),e("div",[t._v("说好的教程终于来了，第一篇文章主要来说一说在开始写业务代码前的一些准备工作吧，但这里不会教你webpack的基础配置，热更新怎么做，webpack速度优化等等，有需求的请自行google。")])])]),t._v(" "),e("v-flex",{attrs:{xs5:""}},[e("v-card-media",{attrs:{src:t.img,height:"180px",contain:""}})],1)],1)],1)],1)],1)},staticRenderFns:[]}}]),[71]);
//# sourceMappingURL=app.43b25e6b21a5d5322eae.js.map