import{_ as p}from"./main.365dd05e.js";import{r as m,o as d,c as r,a as e,b as l,w as s,f as c,t as a,d as h,e as w,p as y,g as N}from"./vendor.8020b7fb.js";const j={data(){return{onmyojiRz:null,scrollReveal:this.$scrollReveal()}},emits:["get-news"],props:["data"],created(){this.getNewsData(),this.delayShow=!0,this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",easing:"ease",opacity:0,scale:.9})},mounted(){},methods:{getNewsData(){const o=this.$cloudbase.database();o.command,o.collection("user").where({_openid:this.data._openid}).get().then(n=>{this.onmyojiRz=n.data[0].onmyoji})},fromNow(o){return moment(o).fromNow()},bingeWatching(o){const n=this.$cloudbase.database();n.command,this.data._openid==localStorage.getItem("openid")?n.collection("shares").where({_openid:this.data._openid,_id:this.data._id}).update({ownerWatchStatus:this.data.ownerWatchStatus==1?"0":"1"}).then(t=>{this.$emit("get-news"),this.$ElMessage.success("\u66F4\u65B0\u6210\u529F\uFF01")}):(alert(),console.log("\u4ED6\u4EBA\u4E0A\u4F20\u65E0\u6CD5\u4FEE\u6539\uFF01"))}},components:{}},_=o=>(y("data-v-3b902c89"),o=o(),N(),o),x={class:"reveal-top boxshadow"},R=_(()=>e("span",null,"\u5F71\u89C6",-1)),k={class:"new-item-box"},S=["src"],z={class:"box-message"},q={key:0,class:"onmyoji-rz"},I=_(()=>e("br",null,null,-1)),V=_(()=>e("br",null,null,-1)),B=_(()=>e("label",null,"\u9634\u9633\u5E08",-1)),W={class:"binge-watching-status"},C=c(" \u4E0A\u4F20\u8005\u63A8\u8350 "),D=_(()=>e("label",null,"\u63A8 \u8350",-1)),E={key:0},F={key:1},L={class:"message"},M={class:"message-iamge"},T=["src"],U={class:"message-main"},A={class:"main-name"},G={class:"filmname"},H={class:"main-bottom-mess",style:{"margin-top":"10px"}},J={class:"main-bottom-mess"};function K(o,n,t,O,i,u){const b=m("more-filled"),f=m("el-icon"),g=m("el-tooltip"),v=m("router-link");return d(),r("div",x,[e("h4",null,[R,l(f,null,{default:s(()=>[l(b)]),_:1})]),e("div",k,[e("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553@qq.com&s=640"},null,8,S),e("div",z,[e("span",null,[c(a(t.data.owner)+" ",1),i.onmyojiRz&&i.onmyojiRz.onmyojiStus==1?(d(),r("div",q,[l(g,{placement:"top"},{content:s(()=>[c(" \u6635\u79F0:"+a(i.onmyojiRz.nichen)+" ",1),I,c(" \u533A\u670D:"+a(i.onmyojiRz.qufu)+" ",1),V,c("\u7B49\u7EA7:"+a(i.onmyojiRz.level),1)]),default:s(()=>[B]),_:1})])):h("",!0),e("div",W,[t.data.ownerWatchStatus==1?(d(),w(g,{key:0,placement:"top"},{content:s(()=>[C]),default:s(()=>[D]),_:1})):h("",!0)])]),t.data.created===t.data.updated?(d(),r("span",E,"\u521B\u5EFA\u4E8E"+a(u.fromNow(t.data.updated)),1)):h("",!0),t.data.created!==t.data.updated?(d(),r("span",F,"\u66F4\u65B0\u4E8E"+a(u.fromNow(t.data.updated)),1)):h("",!0),e("div",L,[e("div",M,[l(v,{to:"/share/detail/"+t.data._id},{default:s(()=>[e("img",{src:t.data.tempFileURL},null,8,T)]),_:1},8,["to"])]),e("div",U,[e("div",null,[l(v,{to:"/share/detail/"+t.data._id},{default:s(()=>[e("div",A,[e("label",null,a(t.data.class),1),e("div",G,a(t.data.name),1)])]),_:1},8,["to"]),e("div",H," \u7B80\u4ECB:"+a(t.data.jianjie),1)]),e("div",J," \u8BC4\u5206 "+a(t.data.rateValue)+" \u63A8\u4ECB\u7406\u7531 "+a(t.data.liyou),1)])])])])])}var X=p(j,[["render",K],["__scopeId","data-v-3b902c89"]]);export{X as N};
