import{_ as j}from"./main.8482b230.js";import{r as u,o as d,a as h,b as t,f as c,g as n,e as i,t as a,h as _,j as f,F as k,p as N,d as p}from"./vendor.dd298bfa.js";const S={data(){return{onmyojiRz:null}},emits:["get-news"],props:["data"],created(){this.getNewsData()},methods:{getNewsData(){const o=this.$cloudbase.database();o.command,o.collection("user").where({_openid:this.data._openid}).get().then(s=>{this.onmyojiRz=s.data[0].onmyoji})},fromNow(o){return moment(o).fromNow()},bingeWatching(o){const s=this.$cloudbase.database();s.command,this.data._openid==localStorage.getItem("openid")?s.collection("films").where({_openid:this.data._openid,_id:this.data._id}).update({ownerWatchStatus:this.data.ownerWatchStatus==1?"0":"1"}).then(e=>{this.$emit("get-news"),this.$ElMessage.success("\u66F4\u65B0\u6210\u529F\uFF01")}):console.log("\u4ED6\u4EBA\u4E0A\u4F20\u65E0\u6CD5\u4FEE\u6539\uFF01")}},components:{}},r=o=>(N("data-v-707c125b"),o=o(),p(),o),x=r(()=>t("span",null,"\u5F71\u89C6",-1)),z={class:"new-item-box"},R=["src"],W={class:"box-message"},q={key:0,class:"onmyoji-rz"},I=r(()=>t("br",null,null,-1)),C=r(()=>t("br",null,null,-1)),V=r(()=>t("label",null,"\u9634\u9633\u5E08",-1)),B={class:"binge-watching-status"},D=i(" \u70B9\u51FB\u53D8\u66F4\u72B6\u6001 "),F=i(" \u70B9\u51FB\u53D8\u66F4\u72B6\u6001 "),E={key:0},L={key:1},M={class:"message"},T={class:"message-iamge"},U=["src"],A={class:"message-main"},G={class:"main-name"},H={class:"filmname"},J={class:"main-bottom-mess",style:{"margin-top":"10px"}},K={class:"main-bottom-mess"};function O(o,s,e,P,l,m){const v=u("more-filled"),w=u("el-icon"),g=u("el-tooltip"),b=u("router-link");return d(),h(k,null,[t("h4",null,[x,c(w,null,{default:n(()=>[c(v)]),_:1})]),t("div",z,[t("img",{src:"https://q1.qlogo.cn/g?b=qq&nk=1193292553@qq.com&s=640"},null,8,R),t("div",W,[t("span",null,[i(a(e.data.owner)+" ",1),l.onmyojiRz&&l.onmyojiRz.onmyojiStus==1?(d(),h("div",q,[c(g,{placement:"top"},{content:n(()=>[i(" \u6635\u79F0:"+a(l.onmyojiRz.nichen)+" ",1),I,i(" \u533A\u670D:"+a(l.onmyojiRz.qufu)+" ",1),C,i("\u7B49\u7EA7:"+a(l.onmyojiRz.level),1)]),default:n(()=>[V]),_:1})])):_("",!0),t("div",B,[e.data.ownerWatchStatus==1?(d(),f(g,{key:0,placement:"top"},{content:n(()=>[D]),default:n(()=>[t("label",{onClick:s[0]||(s[0]=y=>m.bingeWatching(e.data._id))},"\u5DF2\u8FFD\u5B8C")]),_:1})):_("",!0),!e.data.ownerWatchStatus||e.data.ownerWatchStatus==0?(d(),f(g,{key:1,placement:"top"},{content:n(()=>[F]),default:n(()=>[t("label",{onClick:s[1]||(s[1]=y=>m.bingeWatching(e.data._id)),class:"zhuiju"},"\u8FFD\u5267ing")]),_:1})):_("",!0)])]),e.data.created===e.data.updated?(d(),h("span",E,"\u521B\u5EFA\u4E8E"+a(m.fromNow(e.data.updated)),1)):_("",!0),e.data.created!==e.data.updated?(d(),h("span",L,"\u66F4\u65B0\u4E8E"+a(m.fromNow(e.data.updated)),1)):_("",!0),t("div",M,[t("div",T,[c(b,{to:"/filmdetail/"+e.data._id},{default:n(()=>[t("img",{src:e.data.tempFileURL},null,8,U)]),_:1},8,["to"])]),t("div",A,[t("div",null,[c(b,{to:"/filmdetail/"+e.data._id},{default:n(()=>[t("div",G,[t("label",null,a(e.data.class),1),t("div",H,a(e.data.name),1)])]),_:1},8,["to"]),t("div",J," \u7B80\u4ECB:"+a(e.data.jianjie),1)]),t("div",K," \u8BC4\u5206 "+a(e.data.rateValue)+" \u63A8\u4ECB\u7406\u7531 "+a(e.data.liyou),1)])])])])],64)}var Y=j(S,[["render",O],["__scopeId","data-v-707c125b"]]);export{Y as N};
