webpackJsonp([1],{"+rKI":function(t,e){},LqN8:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW");function a(t){return t.denominator<0&&(t.numerator=-t.numerator,t.denominator=-t.denominator),t}function s(t){t=a(t);var e=function(t,e){for(var r;0!=e;)r=t%e,t=e,e=r;return t}(Math.abs(t.numerator),Math.abs(t.denominator));return t.numerator/=e,t.denominator/=e,t}var o={data:function(){return{start:0,cost:0,leftTime:0,calcNum:"4",calcType:"1",tableData:[{question:"1/22-6",answer:"342"},{question:"1/2+2/3×2÷7",answer:"144"},{question:"999-222-111=",answer:"666"}]}},filters:{dates:function(t){var e=parseInt(t/1e3/60/60/24),r=parseInt(t/1e3/60/60%24),n=parseInt(t/1e3/60%60),a=parseInt(t/1e3%60);parseInt(t%1e3);return e+"天"+r+"时"+n+"分"+a+"秒"},times:function(t){var e=parseInt(t/1e3/60/60%24),r=parseInt(t/1e3/60%60),n=parseInt(t/1e3%60);parseInt(t%1e3);return e+"时"+r+"分"+n+"秒"}},methods:{countdown:function(){var t=new Date;return t.setFullYear(2023,8,1),t.setHours(0,0,0,0),t-new Date},countup:function(){return this.start>0?new Date-this.start:0},reverseMessage:function(){alert("敬请期待")},createList:function(){this.start=new Date,this.tableData=new Array;for(var t=this.getParenthese(),e=0;e<10;e++){var r={};r.question=this.createQ(t),r.answer=this.createA(r.question),this.tableData.push(r)}},createQ:function(t){for(var e=new Array,r=0;r<this.calcNum-2;r++)e.push(this.rndInt(1,4));for(var n=new Array,a=0;a<e.length;a++)n.push(this.getDefaultW(e[a]));for(var o=t,i=0,u=0,c=0;c<n.length&&o;c++)i=c>0?n[c-1]:0,u=c<n.length-1?n[c+1]:0,(n[c]<i||n[c]<u)&&(o--,n[c]=n[c]+1,c++);for(var l=!1,f="",p=0;p<this.calcNum;p++){var h=this.getdefaultMax();p<this.calcNum-1&&this.getDefaultW(e[p])<n[p]&&(f+="(",l=!0);var d=this.rndInt(3,h);switch(parseInt(this.calcType)){case 2:f=f+d+"."+this.rndInt(1,h);break;case 3:var v=s({numerator:this.rndInt(1,d-1),denominator:d});f=f+v.numerator+"/"+v.denominator;break;default:f+=d}p>0&&this.getDefaultW(e[p-1])<n[p-1]&&l&&(f+=")",l=!1),p<this.calcNum-1&&(f+=this.getPrintOper(e[p]))}return f},createA:function(t){for(var e=0;e<10;e++);return""},getDefaultW:function(t){var e=1;return t>2&&(e=2),e},rndInt:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},getdefaultMax:function(){var t=this.calcNum>4?10*(parseInt(this.calcNum)-3):3,e=10*(parseInt(this.calcNum)-2);return this.rndInt(t,e)},getParenthese:function(){return parseInt(this.calcNum)%3},getPrintOper:function(t){var e="+";switch(t){case 2:e="-";break;case 3:e="×";break;case 4:e="÷";break;default:e="+"}return e}},mounted:function(){this.$nextTick(function(){var t=this;this.timer=setInterval(function(){t.cost=t.countup(),t.leftTime=t.countdown()},1e3)})},beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",[r("el-header",[r("el-row",[r("el-button",{attrs:{type:"primary"},on:{click:t.createList}},[t._v("生成题目")]),t._v(" "),r("el-button",{attrs:{type:"success"}},[t._v("耗时:"+t._s(t._f("times")(t.cost)))])],1)],1),t._v(" "),r("el-main",[r("el-row",[r("el-tag",{attrs:{type:"danger"}},[t._v("玩耍的日子，剩余:"+t._s(t._f("dates")(t.leftTime)))])],1),t._v(" "),r("el-row",[r("el-radio-group",{model:{value:t.calcNum,callback:function(e){t.calcNum=e},expression:"calcNum"}},[r("el-radio-button",{attrs:{label:"6"}},[t._v("困难")]),t._v(" "),r("el-radio-button",{attrs:{label:"5"}},[t._v("中等")]),t._v(" "),r("el-radio-button",{attrs:{label:"4"}},[t._v("简单")])],1)],1),t._v(" "),r("el-row",[r("el-radio-group",{model:{value:t.calcType,callback:function(e){t.calcType=e},expression:"calcType"}},[r("el-radio-button",{attrs:{label:"1"}},[t._v("整数")]),t._v(" "),r("el-radio-button",{attrs:{label:"2"}},[t._v("小数")]),t._v(" "),r("el-radio-button",{attrs:{label:"3"}},[t._v("分数")])],1)],1),t._v(" "),r("el-row",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"400"}},[r("el-table-column",{attrs:{label:"题目",prop:"question",align:"left"}})],1)],1)],1)],1)},staticRenderFns:[]};var u={name:"App",components:{Qusetion:r("VU/8")(o,i,!1,function(t){r("+rKI")},"data-v-60f4c9d2",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Qusetion")],1)},staticRenderFns:[]};var l=r("VU/8")(u,c,!1,function(t){r("LqN8")},null,null).exports,f=r("zL8q"),p=r.n(f);r("tvR6");n.default.use(p.a),n.default.config.productionTip=!1,new n.default({el:"#app",components:{App:l},template:"<App/>"})},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c4618bcf0c5110461473.js.map