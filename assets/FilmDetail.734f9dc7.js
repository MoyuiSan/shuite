import{_ as l}from"./FilmsBox.6d656904.js";import a from"./FilmsUpload.35e51a1c.js";import{i as e,a6 as s,a7 as i,a1 as t,$ as n,f as o,g as m,p as c,Q as d,v as f,F as r,a8 as u}from"./vendor.7cb940fd.js";import"./main.7aa2fb9c.js";const p={data:()=>({loading:!1,post:null,error:null,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),dialogTableVisible:!1,userAuth:localStorage.getItem("user_auth")}),setup:l=>({fclass:e(""),filmsDetail:e(""),nickname:e("")}),created(){this.cloud.auth({persistence:"local"});const l=this.cloud.database();l.command,l.collection("films").where({_id:this.$route.params.id}).orderBy("created","desc").limit(1).get().then((a=>{this.filmsDetail=a.data[0],l.collection("fclass").where({cid:this.filmsDetail.class}).get().then((l=>{this.fclass=l.data[0].fname})),l.collection("user").where({_openid:this.filmsDetail._openid}).get().then((l=>{this.nickname=l.data[0].nickname})),console.log(this.filmsDetail)}))},methods:{formatterTime:(l,a,e,s)=>moment(e).format("YYYY/MM/DD"),formatterTimeYear:(l,a,e,s)=>moment(l).format("YYYY")},components:{FilmsBox:l,"films-upload":a}},h=u();s("data-v-97fa6538");const v={class:"filmdetail"},D={key:0,style:{width:"700px","margin-top":"40px"}},g={key:1,class:"film-box"},b={class:"film-top"},k={class:"film-message"},y={class:"name"},Y=m("span",null,"名称:",-1),_={key:0,class:"fclass"},j=m("span",null,"类型:",-1),T={class:"jianjie"},V=m("span",null,"年份:",-1),w={class:"upload-time"},x=m("span",null,"上传时间:",-1),F={class:"upload-owner"},B=m("span",null,"上传者:",-1),U={class:"rate",style:{display:"flex"}},q=m("span",null,"评分:",-1),A={class:"film-btn"},I=m("i",{class:"el-icon-link"},null,-1),M=m("i",{class:"el-icon-star-off"},null,-1),$=m("i",{class:"el-icon-chat-square"},null,-1),C={class:"film-main"},L=m("h3",null,"简介",-1),Q=m("h3",null,"推荐理由",-1);i();const R=h(((l,a,e,s,i,u)=>{const p=t("el-skeleton"),R=t("el-rate"),S=t("films-upload"),z=t("el-dialog");return n(),o(r,null,[m("div",v,[s.fclass||s.nickname?c("",!0):(n(),o("div",D,[m(p,{rows:5,animated:""})])),s.fclass&&s.nickname?(n(),o("div",g,[m("div",b,[s.filmsDetail?(n(),o("img",{key:0,src:s.filmsDetail.tempFileURL},null,8,["src"])):c("",!0),m("div",k,[m("div",y,[Y,d(f(s.filmsDetail.name),1)]),s.fclass?(n(),o("div",_,[j,d(f(s.fclass),1)])):c("",!0),m("div",T,[V,d(f(u.formatterTimeYear(s.filmsDetail.year)),1)]),m("div",w,[x,d(f(u.formatterTime(s.filmsDetail.created)),1)]),m("div",F,[B,d(f(s.nickname),1)]),m("div",U,[q,m(R,{"model-value":s.filmsDetail.rateValue,"allow-half":"",disabled:""},null,8,["model-value"])])])]),m("div",A,[m("a",{href:s.filmsDetail.link,target:"_blank"},[I],8,["href"]),M,$,"admin"==i.userAuth?(n(),o("i",{key:0,class:"el-icon-edit",onClick:a[1]||(a[1]=l=>i.dialogTableVisible=!0)})):c("",!0)]),m("div",C,[L,m("p",null,f(s.filmsDetail.jianjie),1),Q,m("p",null,f(s.filmsDetail.liyou),1)])])):c("",!0)]),m(z,{title:"收货地址",modelValue:i.dialogTableVisible,"onUpdate:modelValue":a[2]||(a[2]=l=>i.dialogTableVisible=l),top:"5vh",fullscreen:""},{default:h((()=>[m(S,{type:"2",filmsData:s.filmsDetail},null,8,["filmsData"])])),_:1},8,["modelValue"])],64)}));p.render=R,p.__scopeId="data-v-97fa6538";export default p;
