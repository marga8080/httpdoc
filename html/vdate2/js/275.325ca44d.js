"use strict";(self.webpackChunkvdate=self.webpackChunkvdate||[]).push([[275],{3275:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}}),s(4114),s(4603),s(7566),s(8721);var i=s(2588),o={props:{show:[String,Number,Boolean]},watch:{show:function(t){this.open=!!t}},data(){return{open:!1,books:[]}},mounted(){this.loadBooks("static/book/books.txt")},methods:{close(){this.open=!1},loadBooks(t){fetch(t).then((t=>t.text())).then((t=>{t=this.replaceAll(t,"\r\n","@#@"),t=this.replaceAll(t,"\n","@#@"),this.books=t.split("@#@"),this.books.length>0&&this.$emit("selectBook",this.books[0])})).catch((t=>{console.error("读取文件失败:",t)}))},replaceAll(t,e,s){return t.replace(new RegExp(e,"g"),s)},selectBook(t){this.open=!1,this.$emit("selectBook",t)}}},l=s(1656),n=(0,l.A)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"atlist"},[e("div",{class:t.open?"mask":"",on:{click:t.close}}),e("div",{class:t.open?"open":"close"},[t._m(0),t._l(t.books,(function(s,i){return e("div",{key:i,staticClass:"item",on:{click:function(e){return t.selectBook(s)}}},[t._v(" "+t._s(s)+" ")])}))],2)])}),[function(){var t=this._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"cool-text"},[this._v("目录")])])}],!1,null,"09db1d78",null).exports,a={name:"article-head",components:{Drawer:i.A,ArticleList:n},data(){return{open:!1,listShow:!1,headTile:""}},watch:{},computed:{},methods:{handleMenu(){this.open=Math.random()},selectBook(t){this.$emit("selectBook",t),this.headTile=t},dblClick(){this.$emit("dblClick",this.headTile)}}},c=(0,l.A)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ath"},[e("div",{staticClass:"at-header clear"},[e("div",{staticClass:"at-box"},[e("span",{staticClass:"drawer",on:{click:function(e){return t.handleMenu()}}},[t._v("☰")]),e("div",{staticClass:"at-content",style:{"text-align":"combination"},on:{dblclick:t.dblClick}},[t._v(" "+t._s(this.headTile)+" ")]),e("span",{staticClass:"at-right",on:{click:function(e){t.listShow=Math.random()}}},[t._v("※")])])]),e("hr"),e("drawer",{attrs:{show:t.open}}),e("article-list",{attrs:{show:t.listShow},on:{selectBook:t.selectBook}})],1)}),[],!1,null,"447ffe2a",null).exports,r=s(2125),h=s.n(r),d=s(834);(0,d.ry)({"阿弥陀佛":"ā mí tuó fó","南无":"nā mó","祗树给":"qí shù jǐ","般若波罗蜜":"bō rě bō luó mì"});var u={name:"Article",components:{ArticleHead:c},data(){return{texts:[],isMobile:!0,title:null,saving:!1}},watch:{},computed:{},mounted(){this.checkMobile()},methods:{takeScreenshot(){this.saving=!0,this.$nextTick((()=>{const t=document.getElementById("acc");h()(t).then((t=>{t.toBlob((t=>{const e=URL.createObjectURL(t),s=document.createElement("a");s.href=e,s.download=this.title,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(e),this.saving=!1}))}))}))},dblClick(){this.takeScreenshot()},selectBook(t){this.title=t,this.loadTextFile(`static/book/${t}.txt`)},checkMobile(){const t=navigator.userAgent||navigator.vendor||window.opera;console.log(t),this.isMobile=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(t)},loadTextFile(t){this.words=[],this.texts=[],fetch(t).then((t=>t.text())).then((t=>{t=this.replaceAll(t,"\r\n","\n"),t=this.replaceAll(t,"\n\n","\n"),(t=this.replaceAll(t," ","　")).split("\n").forEach((t=>{t.startsWith("#")?this.texts.push("<b>"+(0,d.qy)(t.substring(1))+"</b>"):this.texts.push((0,d.qy)(t))}))})).catch((t=>{console.error("读取文件失败:",t)}))},isChinese(t){return/^[\u4e00-\u9fa5]+$/.test(t.trim())},pinyin(t){return(0,d.iA)(t)},replaceAll(t,e,s){return t.replace(new RegExp(e,"g"),s)}}},p=(0,l.A)(u,(function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"acc"}},[e("article-head",{on:{selectBook:t.selectBook,dblClick:t.dblClick}}),e("div",{staticClass:"art-content"},[e("div",{staticClass:"article"},t._l(t.texts,(function(s,i){return e("div",{key:i,domProps:{innerHTML:t._s(s)}})})),0)])],1),e("div",{staticStyle:{"padding-bottom":"30px"}},[e("button",{staticClass:"save-btn",attrs:{disabled:t.saving},on:{click:t.takeScreenshot}},[t._v(t._s(t.saving?"保存图片中...":"保存图片"))])])])}),[],!1,null,null,null).exports}}]);