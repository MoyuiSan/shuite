import{_ as p}from"./main.22792a72.js";import{r as v,o as n,a as c,b as t,e as d,t as o,f as g,g as m,h as r,F as h,p as b,d as f,a8 as j}from"./vendor.c71fd20d.js";const z={data(){return{onmyojiRz:null}},props:["data"],created(){const e=this.$cloudbase.database();e.command,e.collection("user").where({_openid:this.data._openid}).get().then(i=>{console.log(i.data),this.onmyojiRz=i.data[0].onmyoji})},methods:{fromNow(e){return moment(e).fromNow()}},components:{}},l=e=>(b("data-v-88e6689c"),e=e(),f(),e),k=l(()=>t("h4",null,[t("span",null,"\u5F71\u89C6"),t("i",{class:"el-icon-more"})],-1)),I={class:"new-item-box"},N=["src"],R={class:"box-message"},q={key:0,class:"onmyoji-rz"},S=l(()=>t("br",null,null,-1)),C=l(()=>t("br",null,null,-1)),V=l(()=>t("label",null,"\u9634\u9633\u5E08",-1)),D={key:0},M={key:1},B={class:"message"},F={class:"message-iamge"},H=["src"],L={class:"message-main"},U={class:"main-m"},E={class:"main-m"};function T(e,i,s,x,a,_){const u=v("el-tooltip"),w=v("router-link");return n(),c(h,null,[k,t("div",I,[t("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553@qq.com&s=640"},null,8,N),t("div",R,[t("span",null,[d(o(s.data.owner)+" ",1),a.onmyojiRz&&a.onmyojiRz.onmyojiStus==1?(n(),c("div",q,[g(u,{placement:"top"},{content:m(()=>[d(" \u6635\u79F0:"+o(a.onmyojiRz.nichen)+" ",1),S,d(" \u533A\u670D:"+o(a.onmyojiRz.qufu)+" ",1),C,d("\u7B49\u7EA7:"+o(a.onmyojiRz.level),1)]),default:m(()=>[V]),_:1})])):r("",!0)]),s.data.created===s.data.updated?(n(),c("span",D,"\u521B\u5EFA\u4E8E"+o(_.fromNow(s.data.updated)),1)):r("",!0),s.data.created!==s.data.updated?(n(),c("span",M,"\u66F4\u65B0\u4E8E"+o(_.fromNow(s.data.updated)),1)):r("",!0),g(w,{to:"/filmdetail/"+s.data._id},{default:m(()=>[t("div",B,[t("div",F,[t("img",{src:s.data.tempFileURL},null,8,H)]),t("div",L,[t("div",U,[t("label",null,o(s.data.class),1),d(o(s.data.name),1)]),t("div",E," \u8BC4\u5206"+o(s.data.rateValue)+" \u63A8\u4ECB\u7406\u7531\uFF1A"+o(s.data.liyou),1)])])]),_:1},8,["to"])])])],64)}var A=p(z,[["render",T],["__scopeId","data-v-88e6689c"]]);const G={data(){return{musicHotData:[]}},created(){this.$axios.get("https://netease-cloud-music-api-ivory-eight.vercel.app/personalized/newsong?limit=8").then(e=>{console.log(e),this.musicHotData=e.data.result})},components:{"music-item":A}},y=e=>(b("data-v-2a0061dd"),e=e(),f(),e),J={class:"music-pub boxshadow"},K=y(()=>t("h4",null,"\u70ED\u95E8\u6B4C\u66F2",-1)),O={class:"music-pub-box"},P={class:"box-item"},Q=["src"],W=y(()=>t("div",{class:"music-pub boxshadow"},[t("h4",null,"\u70ED\u95E8\u5206\u4EAB"),t("div",{class:"music-pub-box"})],-1));function X(e,i,s,x,a,_){return n(),c(h,null,[t("div",J,[K,t("div",O,[(n(!0),c(h,null,j(a.musicHotData,u=>(n(),c("div",P,[t("img",{src:u.picUrl,alt:"net"},null,8,Q)]))),256))])]),W],64)}var $=p(G,[["render",X],["__scopeId","data-v-2a0061dd"]]);export{$ as default};
