(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-generals"],{"0159":function(t,e,s){var i=s("fd54");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s("967d").default;a("646d749c",i,!0,{sourceMap:!1,shadowMode:!1})},"0677":function(t,e,s){"use strict";s.r(e);var i=s("963c"),a=s.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a},"6ee2":function(t,e,s){"use strict";s.r(e);var i=s("b74c"),a=s("0677");for(var n in a)["default"].indexOf(n)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(n);s("939d");var l=s("828b"),u=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"a199e864",null,!1,i["a"],void 0);e["default"]=u.exports},"939d":function(t,e,s){"use strict";var i=s("0159"),a=s.n(i);a.a},"963c":function(t,e,s){"use strict";s("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("8f71"),s("bf0f"),s("5ef2");var i={data:function(){return{select:0,active:0,generals:[],keywords:""}},onLoad:function(t){t.select&&(this.select=t.select),this.getData()},methods:{getData:function(){var t=this;this.$ajax({url:"generals.json"}).then((function(e){t.generals=e}))},selectGeneral:function(t){uni.$emit("selectGeneral",t,this.select)}},computed:{_generals:function(){var t=this,e=this.generals;return this.keywords&&(e=e.filter((function(e){return e.name.indexOf(t.keywords)>-1}))),this.active>-1&&(e=e.filter((function(e){return e.details[2]==t._countries[t.active].name}))),e},_countries:function(){return[{name:"蜀",bgColor:"bg-green"},{name:"魏",bgColor:"bg-blue"},{name:"吴",bgColor:"bg-red"},{name:"群",bgColor:"bg-black"}]}}};e.default=i},b74c:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"app"},[s("NavBar",{staticClass:"bg-yellow",attrs:{title:"将领百科",back:!0}}),s("v-uni-view",{staticClass:"flex"},[s("v-uni-scroll-view",{staticClass:"list bg-white basis-xs",attrs:{"scroll-y":!0}},[t._l(t._countries,(function(e,i){return s("v-uni-view",{key:i,class:["country transition round shadow text-center",t.active==i?e.bgColor+" active":"bg-gray"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active=i}}},[t._v(t._s(e.name))])})),s("v-uni-view",{staticStyle:{height:"50rpx"}})],2),s("v-uni-scroll-view",{staticClass:"list bg-white basis-xl solid-left",attrs:{"scroll-y":!0}},[s("v-uni-view",{staticClass:"padding solid-bottom"},[s("v-uni-input",{attrs:{placeholder:"请输入将领姓名"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._l(t._generals,(function(e,i){return s("v-uni-view",{key:e.name,staticClass:"general padding solid-bottom animation-slide-right",style:{animationDelay:.05*i+"s"}},[s("v-uni-view",{staticClass:"flex",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.selectGeneral(e)}}},[s("v-uni-image",{staticClass:"transition general-img round",style:{transform:"rotate("+(e.isShow?180:0)+"deg)"},attrs:{src:"https://fevernode.github.io/zjws/img/"+e.name+".jpg"},on:{click:function(s){s.stopPropagation(),arguments[0]=s=t.$handleEvent(s),t.$set(e,"isShow",!e.isShow)}}}),s("v-uni-view",{class:["general-dot round text-xs text-center","男"==e.details[3]?"bg-blue":"bg-pink"]},[t._v(t._s(e.details[5][0]))]),s("v-uni-view",{class:["general-dot round text-xs text-center bg-yellow"],staticStyle:{top:"120rpx",left:"110rpx"}},[t._v(t._s(e.soldier))]),s("v-uni-view",{staticClass:"flex-sub margin-lr-sm"},[s("v-uni-view",{staticClass:"text-lg text-black"},[t._v(t._s(e.name)+"("+t._s(e.details[4])+")")]),e.description?s("v-uni-view",{staticClass:"text-sm tet-grey"},[t._v(t._s(e.description))]):t._e(),s("v-uni-view",{staticClass:"margin-top-xs"},[s("v-uni-text",{class:["cu-tag radius sm","男"==e.details[3]?"line-blue":"line-pink"]},[t._v(t._s(e.details[0]))]),s("v-uni-text",{class:["cu-tag radius sm","男"==e.details[3]?"line-blue":"line-pink"]},[t._v(t._s(e.details[1]))]),s("v-uni-text",{class:["cu-tag radius sm","男"==e.details[3]?"line-blue":"line-pink"]},[t._v(t._s(e.details[2]))]),s("v-uni-text",{class:["cu-tag radius sm","男"==e.details[3]?"line-blue":"line-pink"]},[t._v(t._s(e.details[5]))])],1),s("v-uni-view",{staticClass:"margin-top-xs"},[s("v-uni-text",{staticClass:"cu-tag line-red sm"},[t._v("武 "+t._s(e.attributes.wu))]),s("v-uni-text",{staticClass:"cu-tag line-blue sm"},[t._v("智 "+t._s(e.attributes.zhi))]),s("v-uni-text",{staticClass:"cu-tag line-black sm"},[t._v("耐 "+t._s(e.attributes.nai))]),s("v-uni-text",{staticClass:"cu-tag line-green sm"},[t._v("体 "+t._s(e.attributes.ti))])],1)],1)],1),e.isShow?s("v-uni-view",{staticClass:"more margin-top-sm"},[s("v-uni-view",{staticClass:"cu-capsule"},[s("v-uni-text",{staticClass:"cu-tag bg-green"},[t._v("普")]),s("v-uni-text",{staticClass:"cu-tag line-green"},[t._v(t._s(e.skills.pugong))])],1),e.skills.nuqi?s("v-uni-view",{staticClass:"cu-capsule",staticStyle:{margin:"0"}},[s("v-uni-text",{staticClass:"cu-tag bg-red"},[t._v("怒")]),s("v-uni-text",{staticClass:"cu-tag line-red"},[t._v(t._s(e.skills.nuqi))])],1):t._e(),e.skills.zhuiji.length?s("v-uni-view",{staticClass:"cu-capsule",staticStyle:{margin:"0"}},[s("v-uni-text",{staticClass:"cu-tag bg-blue"},[t._v("追")]),2==e.skills.zhuiji.length?s("v-uni-text",{staticClass:"cu-tag line-blue"},[t._v(t._s(e.skills.zhuiji[0])+" -> "+t._s(e.skills.zhuiji[1]))]):t._e()],1):t._e(),e.skills.beidong?s("v-uni-view",{staticClass:"w-100 cu-capsule",staticStyle:{margin:"0"}},[s("v-uni-text",{staticClass:"cu-tag bg-black"},[t._v("被")]),s("v-uni-rich-text",{staticClass:"cu-tag line-black flex-sub justify-start",attrs:{nodes:e.skills.beidong}})],1):t._e(),e.skills.yuanzhu?s("v-uni-view",{staticClass:"w-100 cu-capsule",staticStyle:{margin:"0"}},[s("v-uni-text",{staticClass:"cu-tag bg-grey"},[t._v("援")]),s("v-uni-rich-text",{staticClass:"cu-tag line-black flex-sub justify-start",attrs:{nodes:e.skills.yuanzhu}})],1):t._e(),e.professions.length?s("v-uni-view",{staticClass:"w-100 cu-capsule",staticStyle:{margin:"0"}},[s("v-uni-text",{staticClass:"cu-tag bg-brown"},[t._v("职")]),s("v-uni-text",{staticClass:"cu-tag line-brown flex-sub justify-start"},[t._v(t._s(e.professions.join(" ")))])],1):t._e()],1):t._e()],1)}))],2)],1)],1)},a=[]},fd54:function(t,e,s){var i=s("c86c");e=i(!1),e.push([t.i,".list[data-v-a199e864]{height:calc(100vh - 0px - %?90?%)}.country[data-v-a199e864]{width:%?80?%;height:%?80?%;margin:%?50?% auto;line-height:%?80?%}.country.active[data-v-a199e864]{-webkit-transform:scale(1.2);transform:scale(1.2)}.general[data-v-a199e864]{position:relative}.general-img[data-v-a199e864]{width:%?120?%;height:%?120?%}.general-dot[data-v-a199e864]{top:%?30?%;left:%?30?%;width:%?36?%;height:%?36?%;position:absolute;line-height:%?36?%}.more .cu-tag[data-v-a199e864]{height:auto;padding:%?10?%;line-height:%?28?%;white-space:pre-wrap}uni-rich-text span[data-v-a199e864]{color:red}",""]),t.exports=e}}]);