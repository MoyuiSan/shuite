import{_ as p}from"./main.8ddcf4cb.js";import{r as v,o as n,a as c,b as e,e as d,t as o,f as b,g as m,h as r,F as h,p as g,d as f,a5 as j}from"./vendor.3249e4ba.js";const z={data(){return{onmyojiRz:null}},props:["data"],created(){const t=this.$cloudbase.database();t.command,t.collection("user").where({_openid:this.data._openid}).get().then(i=>{console.log(i.data),this.onmyojiRz=i.data[0].onmyoji})},methods:{fromNow(t){return moment(t).fromNow()}},components:{}},l=t=>(g("data-v-88e6689c"),t=t(),f(),t),k=l(()=>e("h4",null,[e("span",null,"\u5F71\u89C6"),e("i",{class:"el-icon-more"})],-1)),I={class:"new-item-box"},N=["src"],R={class:"box-message"},q={key:0,class:"onmyoji-rz"},S=l(()=>e("br",null,null,-1)),C=l(()=>e("br",null,null,-1)),V=l(()=>e("label",null,"\u9634\u9633\u5E08",-1)),D={key:0},M={key:1},B={class:"message"},F={class:"message-iamge"},H=["src"],L={class:"message-main"},U={class:"main-m"},E={class:"main-m"};function T(t,i,s,x,a,_){const u=v("el-tooltip"),w=v("router-link");return n(),c(h,null,[k,e("div",I,[e("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553@qq.com&s=640"},null,8,N),e("div",R,[e("span",null,[d(o(s.data.owner)+" ",1),a.onmyojiRz&&a.onmyojiRz.onmyojiStus==1?(n(),c("div",q,[b(u,{placement:"top"},{content:m(()=>[d(" \u6635\u79F0:"+o(a.onmyojiRz.nichen)+" ",1),S,d(" \u533A\u670D:"+o(a.onmyojiRz.qufu)+" ",1),C,d("\u7B49\u7EA7:"+o(a.onmyojiRz.level),1)]),default:m(()=>[V]),_:1})])):r("",!0)]),s.data.created===s.data.updated?(n(),c("span",D,"\u521B\u5EFA\u4E8E"+o(_.fromNow(s.data.updated)),1)):r("",!0),s.data.created!==s.data.updated?(n(),c("span",M,"\u66F4\u65B0\u4E8E"+o(_.fromNow(s.data.updated)),1)):r("",!0),b(w,{to:"/filmdetail/"+s.data._id},{default:m(()=>[e("div",B,[e("div",F,[e("img",{src:s.data.tempFileURL},null,8,H)]),e("div",L,[e("div",U,[e("label",null,o(s.data.class),1),d(o(s.data.name),1)]),e("div",E," \u8BC4\u5206"+o(s.data.rateValue)+" \u63A8\u4ECB\u7406\u7531\uFF1A"+o(s.data.liyou),1)])])]),_:1},8,["to"])])])],64)}var A=p(z,[["render",T],["__scopeId","data-v-88e6689c"]]);const G={data(){return{musicHotData:[]}},created(){this.$axios.get("https://netease-cloud-music-api-ivory-eight.vercel.app/personalized/newsong?limit=8").then(t=>{console.log(t),this.musicHotData=t.data.result})},components:{"music-item":A}},y=t=>(g("data-v-2a0061dd"),t=t(),f(),t),J={class:"music-pub boxshadow"},K=y(()=>e("h4",null,"\u70ED\u95E8\u6B4C\u66F2",-1)),O={class:"music-pub-box"},P={class:"box-item"},Q=["src"],W=y(()=>e("div",{class:"music-pub boxshadow"},[e("h4",null,"\u70ED\u95E8\u5206\u4EAB"),e("div",{class:"music-pub-box"})],-1));function X(t,i,s,x,a,_){return n(),c(h,null,[e("div",J,[K,e("div",O,[(n(!0),c(h,null,j(a.musicHotData,u=>(n(),c("div",P,[e("img",{src:u.picUrl,alt:"net"},null,8,Q)]))),256))])]),W],64)}var $=p(G,[["render",X],["__scopeId","data-v-2a0061dd"]]);export{$ as default};
