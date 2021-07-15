import{_ as e}from"./FilmsBox.d747c30f.js";import l from"./FilmsUpload.29ec971a.js";import{_ as a}from"./main.95043788.js";import{i,a7 as t,a8 as s,a3 as o,a1 as n,f as d,g as m,p as c,Q as r,v as u,F as f,a9 as h}from"./vendor.6d187631.js";const p={data:()=>({loading:!0,post:null,error:null,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),dialogTableVisible:!1,userAuth:localStorage.getItem("user_auth"),isLoved:!1,textareaStyle:{border:0,padding:0,color:"black"}}),setup:e=>({filmsDetail:i(""),nickname:i("")}),created(){this.cloud.auth({persistence:"local"}),this.getFilmDetail()},methods:{formatterTime:(e,l,a,i)=>moment(a).format("YYYY/MM/DD"),formatterTimeYear:(e,l,a,i)=>moment(e).format("YYYY"),getFilmDetail(){this.$auth.getAuthHeader();const e=this.cloud.database();e.command,e.collection("films").where({_id:this.$route.params.id}).orderBy("created","desc").limit(1).get().then((l=>{this.filmsDetail=l.data[0],e.collection("user").where({_openid:this.filmsDetail._openid}).get().then((l=>{this.nickname=l.data[0].nickname,e.collection("mylove").where({_openid:this.filmsDetail._openid,filmId:this.filmsDetail._id}).get().then((e=>{e.data[0]&&(this.isLoved=!0),setTimeout((()=>{this.loading=!1}),1e3)}))}))}))},getStar(e){const l=this.$auth.getAuthHeader(),i=this.$cloudbase.database();i.command,i.collection("mylove").where({_openid:l.uid,filmId:e}).get().then((l=>{l.data[0]||i.collection("mylove").add({filmId:e,created:Date.now(),updated:Date.now()}).then((e=>{console.log(e),this.getFilmDetail(),a.success({message:"收藏成功了!",type:"success"})}))}))},delStar(e){const l=this.$auth.getAuthHeader(),i=this.$cloudbase.database();i.command,i.collection("mylove").where({_openid:l.uid,filmId:e}).remove().then((e=>{this.getFilmDetail(),a.success({message:"取消收藏了!",type:"success"})}))},hideDialog(){this.dialogTableVisible=!1,this.getFilmDetail()}},components:{FilmsBox:e,"films-upload":l}},g=h();t("data-v-15917af9");const v={class:"filmdetail"},y={style:{padding:"14px"}},D={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},b={key:0,class:"film-box"},k={class:"film-top"},_={class:"film-message"},x={class:"name"},w=m("span",null,"名称:",-1),V={class:"fclass"},j=m("span",null,"类型:",-1),F={class:"jianjie"},T=m("span",null,"年份:",-1),Y={class:"upload-time"},S=m("span",null,"上传时间:",-1),I={class:"upload-owner"},$=m("span",null,"上传者:",-1),A={class:"rate",style:{display:"flex"}},H=m("span",null,"评分:",-1),L={class:"film-btn"},U=m("i",{class:"el-icon-link"},null,-1),B=m("i",{class:"el-icon-chat-square"},null,-1),C={class:"film-main"},q=m("h3",null,"简介",-1),z=m("h3",null,"推荐理由",-1);s();const M=g(((e,l,a,i,t,s)=>{const h=o("el-skeleton-item"),p=o("el-rate"),M=o("el-input"),Q=o("el-skeleton"),R=o("el-space"),E=o("films-upload"),G=o("el-dialog");return n(),d(f,null,[m("div",v,[m(R,{direction:"vertical",alignment:"flex-start",class:"shuite-el-space"},{default:g((()=>[m(Q,{rows:15,animated:"",loading:t.loading,class:"shuite-el-skeleton"},{template:g((()=>[m(h,{variant:"image",style:{height:"267px"},class:"shuite-el-skeleton-item"}),m("div",y,[m(h,{variant:"h3",style:{width:"50%"}}),m("div",D,[m(h,{variant:"text",style:{"margin-right":"16px"}}),m(h,{variant:"text",style:{width:"30%"}})])])])),default:g((()=>[i.nickname?(n(),d("div",b,[m("div",k,[i.filmsDetail?(n(),d("img",{key:0,src:i.filmsDetail.tempFileURL},null,8,["src"])):c("",!0),m("div",_,[m("div",x,[w,r(u(i.filmsDetail.name),1)]),m("div",V,[j,r(u(i.filmsDetail.class),1)]),m("div",F,[T,r(u(s.formatterTimeYear(i.filmsDetail.year)),1)]),m("div",Y,[S,r(u(s.formatterTime(i.filmsDetail.created)),1)]),m("div",I,[$,r(u(i.nickname),1)]),m("div",A,[H,m(p,{"model-value":i.filmsDetail.rateValue,"allow-half":"",disabled:""},null,8,["model-value"])])])]),m("div",L,[m("a",{href:i.filmsDetail.link,target:"_blank"},[U],8,["href"]),t.isLoved?c("",!0):(n(),d("i",{key:0,class:"el-icon-star-off",onClick:l[1]||(l[1]=e=>s.getStar(i.filmsDetail._id))})),t.isLoved?(n(),d("i",{key:1,class:"el-icon-star-on",onClick:l[2]||(l[2]=e=>s.delStar(i.filmsDetail._id)),style:{color:"#fcc"}})):c("",!0),B,"admin"==t.userAuth?(n(),d("i",{key:2,class:"el-icon-edit",onClick:l[3]||(l[3]=e=>t.dialogTableVisible=!0)})):c("",!0)]),m("div",C,[q,m(M,{type:"textarea",modelValue:i.filmsDetail.jianjie,"onUpdate:modelValue":l[4]||(l[4]=e=>i.filmsDetail.jianjie=e),autosize:"",readonly:"",resize:"none",autofocus:"false",style:{"margin-bottom":"20px"},"input-style":t.textareaStyle},null,8,["modelValue","input-style"]),z,m("p",null,u(i.filmsDetail.liyou),1)])])):c("",!0)])),_:1},8,["loading"])])),_:1})]),m(G,{title:"信息修改",modelValue:t.dialogTableVisible,"onUpdate:modelValue":l[5]||(l[5]=e=>t.dialogTableVisible=e),top:"5vh",fullscreen:""},{default:g((()=>[m(E,{type:"2",filmsData:i.filmsDetail,onHideDialog:s.hideDialog},null,8,["filmsData","onHideDialog"])])),_:1},8,["modelValue"])],64)}));p.render=M,p.__scopeId="data-v-15917af9";export default p;