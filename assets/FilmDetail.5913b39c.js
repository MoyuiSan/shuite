import{_ as e}from"./FilmsBox.99d12001.js";import l from"./FilmsUpload.9eabe124.js";import{_ as a}from"./main.2ebbf567.js";import{i,a7 as s,a8 as t,a3 as o,a1 as n,f as m,g as d,p as c,Q as r,v as u,F as f,a9 as h}from"./vendor.6d187631.js";const p={data:()=>({loading:!1,post:null,error:null,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),dialogTableVisible:!1,userAuth:localStorage.getItem("user_auth"),isLoved:!1,test:{border:0}}),setup:e=>({filmsDetail:i(""),nickname:i("")}),created(){this.cloud.auth({persistence:"local"}),this.getFilmDetail()},methods:{formatterTime:(e,l,a,i)=>moment(a).format("YYYY/MM/DD"),formatterTimeYear:(e,l,a,i)=>moment(e).format("YYYY"),getFilmDetail(){this.$auth.getAuthHeader();const e=this.cloud.database();e.command,e.collection("films").where({_id:this.$route.params.id}).orderBy("created","desc").limit(1).get().then((l=>{this.filmsDetail=l.data[0],e.collection("user").where({_openid:this.filmsDetail._openid}).get().then((e=>{this.nickname=e.data[0].nickname})),e.collection("mylove").where({_openid:this.filmsDetail._openid,filmId:this.filmsDetail._id}).get().then((e=>{e.data[0]&&(this.isLoved=!0)})),console.log(this.filmsDetail)}))},getStar(e){const l=this.$auth.getAuthHeader(),i=this.$cloudbase.database();i.command,i.collection("mylove").where({_openid:l.uid,filmId:e}).get().then((l=>{l.data[0]||i.collection("mylove").add({filmId:e,created:Date.now(),updated:Date.now()}).then((e=>{console.log(e),this.getFilmDetail(),a.success({message:"收藏成功了!",type:"success"})}))}))},delStar(e){const l=this.$auth.getAuthHeader(),i=this.$cloudbase.database();i.command,i.collection("mylove").where({_openid:l.uid,filmId:e}).remove().then((e=>{this.getFilmDetail(),a.success({message:"取消收藏了!",type:"success"})}))}},components:{FilmsBox:e,"films-upload":l}},g=h();s("data-v-0cf34caa");const v={class:"filmdetail"},D={key:0,style:{width:"700px","margin-top":"40px"}},b={key:1,class:"film-box"},y={class:"film-top"},k={class:"film-message"},_={class:"name"},w=d("span",null,"名称:",-1),V={class:"fclass"},j=d("span",null,"类型:",-1),Y={class:"jianjie"},x=d("span",null,"年份:",-1),F={class:"upload-time"},T=d("span",null,"上传时间:",-1),I={class:"upload-owner"},$=d("span",null,"上传者:",-1),A={class:"rate",style:{display:"flex"}},L=d("span",null,"评分:",-1),S={class:"film-btn"},U=d("i",{class:"el-icon-link"},null,-1),B=d("i",{class:"el-icon-chat-square"},null,-1),C={class:"film-main"},H=d("h3",null,"简介",-1),q=d("h3",null,"推荐理由",-1);t();const z=g(((e,l,a,i,s,t)=>{const h=o("el-skeleton"),p=o("el-rate"),z=o("el-input"),M=o("films-upload"),Q=o("el-dialog");return n(),m(f,null,[d("div",v,[e.fclass||i.nickname?c("",!0):(n(),m("div",D,[d(h,{rows:5,animated:""})])),i.nickname?(n(),m("div",b,[d("div",y,[i.filmsDetail?(n(),m("img",{key:0,src:i.filmsDetail.tempFileURL},null,8,["src"])):c("",!0),d("div",k,[d("div",_,[w,r(u(i.filmsDetail.name),1)]),d("div",V,[j,r(u(i.filmsDetail.class),1)]),d("div",Y,[x,r(u(t.formatterTimeYear(i.filmsDetail.year)),1)]),d("div",F,[T,r(u(t.formatterTime(i.filmsDetail.created)),1)]),d("div",I,[$,r(u(i.nickname),1)]),d("div",A,[L,d(p,{"model-value":i.filmsDetail.rateValue,"allow-half":"",disabled:""},null,8,["model-value"])])])]),d("div",S,[d("a",{href:i.filmsDetail.link,target:"_blank"},[U],8,["href"]),s.isLoved?c("",!0):(n(),m("i",{key:0,class:"el-icon-star-off",onClick:l[1]||(l[1]=e=>t.getStar(i.filmsDetail._id))})),s.isLoved?(n(),m("i",{key:1,class:"el-icon-star-on",onClick:l[2]||(l[2]=e=>t.delStar(i.filmsDetail._id)),style:{color:"#fcc"}})):c("",!0),B,"admin"==s.userAuth?(n(),m("i",{key:2,class:"el-icon-edit",onClick:l[3]||(l[3]=e=>s.dialogTableVisible=!0)})):c("",!0)]),d("div",C,[H,d(z,{type:"textarea",modelValue:i.filmsDetail.jianjie,"onUpdate:modelValue":l[4]||(l[4]=e=>i.filmsDetail.jianjie=e),autosize:"",readonly:"",resize:"none",autofocus:"false",style:{"margin-bottom":"20px"}},null,8,["modelValue"]),q,d("p",null,u(i.filmsDetail.liyou),1)])])):c("",!0)]),d(Q,{title:"信息修改",modelValue:s.dialogTableVisible,"onUpdate:modelValue":l[5]||(l[5]=e=>s.dialogTableVisible=e),top:"5vh",fullscreen:""},{default:g((()=>[d(M,{type:"2",filmsData:i.filmsDetail},null,8,["filmsData"])])),_:1},8,["modelValue"])],64)}));p.render=z,p.__scopeId="data-v-0cf34caa";export default p;