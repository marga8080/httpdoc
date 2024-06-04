"use strict";(self.webpackChunkvdate=self.webpackChunkvdate||[]).push([[553],{3553:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var o=s(7667),i={props:{show:[String,Number,Boolean]},watch:{show:function(t){this.open=!!t}},data(){return{open:!1,books:[]}},mounted(){this.loadBooks("static/book/books.txt")},methods:{close(){this.open=!1},loadBooks(t){fetch(t).then((t=>t.text())).then((t=>{t=this.replaceAll(t,"\r\n","@#@"),t=this.replaceAll(t,"\n","@#@"),this.books=t.split("@#@"),this.books.length>0&&this.$emit("selectBook",this.books[0])})).catch((t=>{console.error("读取文件失败:",t)}))},replaceAll(t,e,s){return t.replace(new RegExp(e,"g"),s)},selectBook(t){this.open=!1,this.$emit("selectBook",t)}}},n=s(1656),l=(0,n.A)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"atlist"},[e("div",{class:t.open?"mask":"",on:{click:t.close}}),e("div",{class:t.open?"open":"close"},[t._m(0),t._l(t.books,(function(s,o){return e("div",{key:o,staticClass:"item",on:{click:function(e){return t.selectBook(s)}}},[t._v(" "+t._s(s)+" ")])}))],2)])}),[function(){var t=this._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"cool-text"},[this._v("目录")])])}],!1,null,"09db1d78",null).exports,a={name:"article-head",components:{Drawer:o.A,ArticleList:l},data(){return{open:!1,listShow:!1,headTile:""}},watch:{},computed:{},methods:{handleMenu(){this.open=Math.random()},selectBook(t){this.$emit("selectBook",t),this.headTile=t}}},r=(0,n.A)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ath"},[e("div",{staticClass:"at-header clear"},[e("div",{staticClass:"at-box"},[e("span",{staticClass:"drawer",on:{click:function(e){return t.handleMenu()}}},[t._v("☰")]),e("div",{staticClass:"at-content",style:{"text-align":"combination"}},[t._v(" "+t._s(this.headTile)+" ")]),e("span",{staticClass:"at-right",on:{click:function(e){t.listShow=Math.random()}}},[t._v("※")])])]),e("hr"),e("drawer",{attrs:{show:t.open}}),e("article-list",{attrs:{show:t.listShow},on:{selectBook:t.selectBook}})],1)}),[],!1,null,"79beb6a4",null).exports,c=s(834),h=s(9821);(0,c.iM)(h);var d={name:"Article",components:{ArticleHead:r},data(){return{words:null,wordNum:0,delay:30,isMobile:!0}},watch:{},computed:{},mounted(){this.checkMobile()},methods:{selectBook(t){this.loadTextFile(`static/book/${t}.txt`)},checkMobile(){const t=navigator.userAgent||navigator.vendor||window.opera;console.log(t),this.isMobile=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(t)},loadTextFile(t){this.words=null,fetch(t).then((t=>t.text())).then((t=>{t=this.replaceAll(t,"\r\n","\n"),t=this.replaceAll(t,"\n\n","\n"),t=this.replaceAll(t," ","　"),this.words=t.split(""),console.log(this.words),this.wordNum=this.words.length})).catch((t=>{console.error("读取文件失败:",t)}))},isChinese(t){return/^[\u4e00-\u9fa5]+$/.test(t.trim())},pinyin(t){return(0,c.iA)(t)},replaceAll(t,e,s){return t.replace(new RegExp(e,"g"),s)}}},u=(0,n.A)(d,(function(){var t=this,e=t._self._c;return e("div",[e("article-head",{on:{selectBook:t.selectBook}}),e("div",{staticClass:"content",style:{"text-align":t.isMobile?"left":"center"}},t._l(t.words,(function(s,o){return e("span",{key:o,class:{"word-enter-active":!0,"word-leave-active":!1},style:{"animation-delay":o*t.delay+"ms"}},["\n"===s?e("span",[e("br")]):t.isChinese(s)?e("ruby",{staticClass:"word"},[t._v(" "+t._s(s)+" "),e("rp",[t._v("(")]),e("rt",[t._v(t._s(t.pinyin(s)))]),e("rp",[t._v(")")])]):e("span",[t._v(" "+t._s(s)+" ")])])})),0)],1)}),[],!1,null,"81a892c4",null).exports}}]);