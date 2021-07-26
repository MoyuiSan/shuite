import{_ as e}from"./FilmsBox.8843ad69.js";import l from"./FilmsUpload.9887998c.js";import{_ as a}from"./main.584339ff.js";import{a7 as t,a8 as i,a3 as s,a1 as o,f as n,F as m,J as d,g as c,v as r,p as h,a9 as u,Q as f,i as p}from"./vendor.6d187631.js";const g={data:()=>({email:"1193292553@qq.com",filmDetail:[],auth:"admin"==localStorage.getItem("user_auth")}),props:["filmid"],created(){this.getComments()},methods:{getComments(){const e=this.$cloudbase.database();e.command,e.collection("chats").where({filmId:this.filmid,chatFrom:"film",isOk:1}).get().then((e=>{this.filmDetail=e.data,console.log(e.data)}))},formaTime:e=>moment(e).fromNow(),deleteComment(e){this.$cloudbase.callFunction({name:"shuiteApi",data:{id:e,event:"DELETE_FILM_COMMENT",secret:"gyc199700"}}).then((e=>{this.$ElMessage.success({message:"删除成功了!",type:"success"}),this.getComments()})).catch(console.error)}},components:{}},b=u();t("data-v-9f492e30");const v={class:"film-chats boxshadow"},y=c("h3",null,"评论",-1),D={class:"chat-box"},k={class:"chat-box-message"},_=c("span",null,"来自快乐星球",-1),x={class:"message"};i();const w=b(((e,l,a,t,i,u)=>{const f=s("el-empty");return o(),n("div",v,[y,(o(!0),n(m,null,d(i.filmDetail,(e=>(o(),n("div",D,[c("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+e.email+"&s=640"},null,8,["src"]),c("div",k,[c("p",null,r(e.nickname),1),c("p",null,[c("div",null,[_,c("span",null,r(u.formaTime(e.created)),1)]),i.auth?(o(),n("span",{key:0,onClick:l=>u.deleteComment(e._id),class:"chat-delete"},"删除",8,["onClick"])):h("",!0)]),c("div",x,r(e.chat),1)])])))),256)),i.filmDetail[0]?h("",!0):(o(),n(f,{key:0,description:"暂无留言..."}))])}));g.render=w,g.__scopeId="data-v-9f492e30";const C={data:()=>({input:""}),props:["filmid"],methods:{submitChat(){const e=this.$auth.currentUser,l=this.$cloudbase.database();l.command,l.collection("chats").add({filmId:this.filmid,chatFrom:"film",chat:this.input,nickname:e.nickName,appVersion:navigator.appVersion,email:e.email,created:Date.now(),updated:Date.now(),isOk:1}).then((e=>{this.$emit("nochat"),this.$ElMessage.success({message:"吐槽成功了!",type:"success"})}))}},components:{}},V=u();t("data-v-cab1d7ae");const I={class:"film-gochat boxshadow"},F=f("提交");i();const T=V(((e,l,a,t,i,m)=>{const d=s("el-input"),r=s("el-button");return o(),n("div",I,[c(d,{placeholder:"吐槽一下吧",modelValue:i.input,"onUpdate:modelValue":l[1]||(l[1]=e=>i.input=e),clearable:"",class:"shuite-search"},null,8,["modelValue"]),c(r,{onClick:m.submitChat,type:"small",style:{height:"40px","margin-left":"10px"}},{default:V((()=>[F])),_:1},8,["onClick"])])}));C.render=T,C.__scopeId="data-v-cab1d7ae";const $={data:()=>({loading:!0,post:null,error:null,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),dialogTableVisible:!1,userAuth:localStorage.getItem("user_auth"),isLoved:!1,textareaStyle:{border:0,padding:0,color:"black"},chating:!1,islogin:!1}),setup:e=>({filmsDetail:p(""),nickname:p("")}),created(){this.cloud.auth({persistence:"local"}),this.getFilmDetail();"EMAIL"==JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content&&(this.islogin=!0)},methods:{formatterTime:(e,l,a,t)=>moment(a).format("YYYY/MM/DD"),formatterTimeYear:(e,l,a,t)=>moment(e).format("YYYY"),getFilmDetail(){this.$auth.getAuthHeader();const e=this.cloud.database();e.command,e.collection("films").where({_id:this.$route.params.id}).orderBy("created","desc").limit(1).get().then((l=>{this.filmsDetail=l.data[0],e.collection("user").where({_openid:this.filmsDetail._openid}).get().then((l=>{this.nickname=l.data[0].nickname,e.collection("mylove").where({_openid:this.filmsDetail._openid,filmId:this.filmsDetail._id}).get().then((e=>{e.data[0]&&(this.isLoved=!0),setTimeout((()=>{this.loading=!1}),1e3)}))}))}))},getStar(e){const l=this.$auth.getAuthHeader(),t=this.$cloudbase.database();t.command;"ANONYMOUS"==JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content?a.info("请先登录哦!!!"):t.collection("mylove").where({_openid:l.uid,filmId:e}).get().then((l=>{l.data[0]||t.collection("mylove").add({filmId:e,created:Date.now(),updated:Date.now()}).then((e=>{console.log(e),this.getFilmDetail(),a.success({message:"收藏成功了!",type:"success"})}))}))},delStar(e){const l=this.$auth.getAuthHeader(),t=this.$cloudbase.database();t.command,t.collection("mylove").where({_openid:l.uid,filmId:e}).remove().then((e=>{this.getFilmDetail(),a.success({message:"取消收藏了!",type:"success"})}))},toChat(){this.chating=!0},noChat(){this.chating=!1,this.$refs.comment.getComments()},hideDialog(){this.dialogTableVisible=!1,this.getFilmDetail()}},components:{FilmsBox:e,"films-upload":l,"film-chats":g,"film-gochat":C}},S=u();t("data-v-2847bde6");const j={class:"filmdetail"},Y={style:{padding:"14px"}},q={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},M={class:"film-box"},N={class:"film-top"},A={class:"film-message"},L={class:"name"},E=c("span",null,"名称:",-1),O={class:"fclass"},U=c("span",null,"类型:",-1),H={class:"jianjie"},B=c("span",null,"年份:",-1),J={class:"upload-time"},z=c("span",null,"上传时间:",-1),Q={class:"upload-owner"},R=c("span",null,"上传者:",-1),G={class:"rate",style:{display:"flex"}},K=c("span",null,"评分:",-1),P={class:"film-btn boxshadow"},W=c("i",{class:"el-icon-link"},null,-1),X={key:1,class:"film-vedio boxshadow"},Z=c("h3",null,"视频",-1),ee={class:"film-main boxshadow"},le=c("h3",null,"简介",-1),ae=c("h3",null,"推荐理由",-1);i();const te=S(((e,l,a,t,i,d)=>{const u=s("el-skeleton-item"),p=s("el-rate"),g=s("film-gochat"),b=s("el-input"),v=s("film-chats"),y=s("el-skeleton"),D=s("el-space"),k=s("films-upload"),_=s("el-dialog");return o(),n(m,null,[c("div",j,[c(D,{direction:"vertical",alignment:"flex-start",class:"shuite-el-space"},{default:S((()=>[c(y,{rows:15,animated:"",loading:i.loading,class:"shuite-el-skeleton"},{template:S((()=>[c(u,{variant:"image",style:{height:"267px"},class:"shuite-el-skeleton-item"}),c("div",Y,[c(u,{variant:"h3",style:{width:"50%"}}),c("div",q,[c(u,{variant:"text",style:{"margin-right":"16px"}}),c(u,{variant:"text",style:{width:"30%"}})])])])),default:S((()=>[c("div",M,[c("div",N,[t.filmsDetail?(o(),n("img",{key:0,src:t.filmsDetail.tempFileURL},null,8,["src"])):h("",!0),c("div",A,[c("div",L,[E,f(r(t.filmsDetail.name),1)]),c("div",O,[U,f(r(t.filmsDetail.class),1)]),c("div",H,[B,f(r(d.formatterTimeYear(t.filmsDetail.year)),1)]),c("div",J,[z,f(r(d.formatterTime(t.filmsDetail.created)),1)]),c("div",Q,[R,f(r(t.nickname),1)]),c("div",G,[K,c(p,{"model-value":t.filmsDetail.rateValue,"allow-half":"",disabled:""},null,8,["model-value"])])])]),c("div",P,[c("a",{href:t.filmsDetail.link,target:"_blank"},[W],8,["href"]),!i.isLoved&&i.islogin?(o(),n("i",{key:0,class:"el-icon-star-off",onClick:l[1]||(l[1]=e=>d.getStar(t.filmsDetail._id))})):h("",!0),i.isLoved&&i.islogin?(o(),n("i",{key:1,class:"el-icon-star-on",onClick:l[2]||(l[2]=e=>d.delStar(t.filmsDetail._id)),style:{color:"#fcc"}})):h("",!0),i.islogin?(o(),n("i",{key:2,class:"el-icon-chat-square",onClick:l[3]||(l[3]=(...e)=>d.toChat&&d.toChat(...e))})):h("",!0),"admin"==i.userAuth?(o(),n("i",{key:3,class:"el-icon-edit",onClick:l[4]||(l[4]=e=>i.dialogTableVisible=!0)})):h("",!0)]),i.chating?(o(),n(g,{key:0,filmid:t.filmsDetail._id,onNochat:d.noChat,class:"boxshadow"},null,8,["filmid","onNochat"])):h("",!0),t.filmsDetail.playlink?(o(),n("div",X,[Z,c("iframe",{src:"//player.bilibili.com/player.html?bvid="+t.filmsDetail.playlink+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},"\r\n              ",8,["src"])])):h("",!0),c("div",ee,[le,c(b,{type:"textarea",modelValue:t.filmsDetail.jianjie,"onUpdate:modelValue":l[5]||(l[5]=e=>t.filmsDetail.jianjie=e),autosize:"",readonly:"",resize:"none",autofocus:"false",style:{"margin-bottom":"20px"},"input-style":i.textareaStyle},null,8,["modelValue","input-style"]),ae,c("p",null,r(t.filmsDetail.liyou),1)]),c(v,{filmid:t.filmsDetail._id,ref:"comment"},null,8,["filmid"])])])),_:1},8,["loading"])])),_:1})]),c(_,{title:"信息修改",modelValue:i.dialogTableVisible,"onUpdate:modelValue":l[6]||(l[6]=e=>i.dialogTableVisible=e),top:"5vh",fullscreen:""},{default:S((()=>[c(k,{type:"2",filmsData:t.filmsDetail,onHideDialog:d.hideDialog},null,8,["filmsData","onHideDialog"])])),_:1},8,["modelValue"])],64)}));$.render=te,$.__scopeId="data-v-2847bde6";export default $;
