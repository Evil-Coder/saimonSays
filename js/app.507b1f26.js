(function(e){function n(n){for(var r,o,i=n[0],u=n[1],c=n[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(d.length)d.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(r=!1)}r&&(s.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},a={app:0},s=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/saimonSays/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var l=u;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("1e5c");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"result"},[t("h1",{directives:[{name:"show",rawName:"v-show",value:e.showRating,expression:"showRating"}],staticClass:"result__message"},[e._v(e._s(e.result)+" - Вы проиграли!")]),t("h3",{directives:[{name:"show",rawName:"v-show",value:e.showRating&&e.ratings["mode"],expression:"showRating && ratings['mode']"}],staticClass:"result__rating"},[e._v(e._s(e.ratings[e.result]))])]),t("form",{staticClass:"game-mode"},[t("label",{staticClass:"game-mode__element"},[t("input",{staticClass:"game-mode__button game-mode__rating",attrs:{name:"rating-mode",type:"checkbox"},on:{click:function(n){e.ratings.mode=!e.ratings.mode}}}),e._v(" Оценка")]),t("label",{staticClass:"game-mode__element"},[t("input",{staticClass:"game-mode__button game-mode__easy",attrs:{name:"game-mode",type:"radio"},on:{click:function(n){e.gameMode=1500}}}),e._v(" Легкий")]),t("label",{staticClass:"game-mode__element"},[t("input",{staticClass:"game-mode__button game-mode__medium",attrs:{name:"game-mode",type:"radio",checked:""},on:{click:function(n){e.gameMode=1e3}}}),e._v(" Средний")]),t("label",{staticClass:"game-mode__element"},[t("input",{staticClass:"game-mode__button game-mode__hard",attrs:{name:"game-mode",type:"radio"},on:{click:function(n){e.gameMode=400}}}),e._v(" Сложный")]),t("label",{staticClass:"game-mode__element"},[t("input",{staticClass:"game-mode__button game-mode__melodi",attrs:{name:"game-mode",type:"radio"},on:{click:function(n){e.gameMode=200}}}),e._v(" Мелодия")])]),t("section",{staticClass:"simon"},[t("div",{staticClass:"simon__panel-container"},[t("div",{staticClass:"simon__panel simon__panel_top-left",on:{click:function(n){n.preventDefault(),e.melodies[1].play()&&e.userAnswer(1)}}}),t("div",{staticClass:"simon__panel simon__panel_top-right",on:{click:function(n){n.preventDefault(),e.melodies[2].play()&&e.userAnswer(2)}}})]),t("button",{staticClass:"simon__button-start",on:{click:function(n){return n.preventDefault(),e.startGame(n)}}},[e._v("Старт")]),t("div",{staticClass:"simon__panel-container"},[t("div",{staticClass:"simon__panel simon__panel_bottom-left",on:{click:function(n){n.preventDefault(),e.melodies[3].play()&&e.userAnswer(3)}}}),t("div",{staticClass:"simon__panel simon__panel_bottom-right",on:{click:function(n){n.preventDefault(),e.melodies[4].play()&&e.userAnswer(4)}}})])])])},s=[],o=t("b85c"),i=(t("96cf"),t("1da1"));t("d3b7");function u(e,n){return new Promise((function(t){setTimeout((function(){e(),t()}),n)}))}var c={name:"App",data:function(){return{gameMode:1e3,panels:[],needNumbers:[],userNumbers:[],numberAnswer:0,result:1,showRating:!1,ratings:{mode:!1,1:"Ты играешь лицом?",2:"Позорненько",3:"Ты поспорил что проиграешь?",4:"Тройка за игру",5:"Ндаа...",6:"Хватит отвлекаться! Соберись!",10:"Не впечатлил",20:"Уже лучше",30:"Хм... может ты что-то и можешь",40:"Молодец. Но все же ты просто человек",50:"5 - наконец то ты отличник. Ремень на стену и жуй конфету",60:"Хлоп хлоп",70:"7 - да ты счастливчик",80:"Фух. Это было близко",90:"Ты меня напугал",100:"Человеки победили"},melodies:{1:new Howl({src:["standardVolume/redSound.mp3"]}),2:new Howl({src:["standardVolume/orangeSound.mp3"]}),3:new Howl({src:["standardVolume/blueSound.mp3"]}),4:new Howl({src:["standardVolume/greenSound.mp3"]})}}},methods:{newRound:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var t,r,a,s,i,c,l,m;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=function(e,n){return u((function(){return t(e)}),100),u((function(){return r(e)}),n)},n.next=3,u((function(){}),600);case 3:e.needNumbers.push(Math.floor(1+4*Math.random())),e.numberAnswer=0,e.userNumbers=[],t=function(n){return e.panels[n-1].classList.add("simon__panel_active")},r=function(n){return e.panels[n-1].classList.remove("simon__panel_active")},a=function(n){return e.melodies[n].play()},s=function(e,n){return u((function(){return a(e)}),n)},c=Object(o["a"])(e.needNumbers),n.prev=11,c.s();case 13:if((l=c.n()).done){n.next=21;break}return m=l.value,n.next=17,s(m,200===e.gameMode?600:100);case 17:return n.next=19,i(m,e.gameMode-100);case 19:n.next=13;break;case 21:n.next=26;break;case 23:n.prev=23,n.t0=n["catch"](11),c.e(n.t0);case 26:return n.prev=26,c.f(),n.finish(26);case 29:case"end":return n.stop()}}),n,null,[[11,23,26,29]])})))()},userAnswer:function(e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.userNumbers.push(e),r=function(){return n.userNumbers[n.numberAnswer]===n.needNumbers[n.numberAnswer]},a=function(){return n.userNumbers.length===n.needNumbers.length},!r()||!a()){t.next=10;break}if(t.t0=++n.result,!t.t0){t.next=8;break}return t.next=8,n.newRound();case 8:t.next=11;break;case 10:r()?n.numberAnswer++:n.result>6?(n.result=10*Math.round(n.result/10),n.showRating=!0):n.showRating=!0;case 11:case"end":return t.stop()}}),t)})))()},startGame:function(){this.result=1,this.showRating=!1,this.needNumbers=[],this.userNumbers=[],this.numberAnswer=0,this.newRound()}},mounted:function(){this.panels=document.querySelectorAll(".simon__panel")}},l=c,m=(t("cf25"),t("2877")),d=Object(m["a"])(l,a,s,!1,null,null,null),p=d.exports;r["a"].config.devtools=!0,r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(p)}}).$mount("#app")},cf25:function(e,n,t){"use strict";var r=t("fea6"),a=t.n(r);a.a},fea6:function(e,n,t){}});
//# sourceMappingURL=app.507b1f26.js.map