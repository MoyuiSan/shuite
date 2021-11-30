import{F as H}from"./FilmsBox.080bf4d7.js";import U from"./FilmsUpload.8d57526c.js";import{r as a,o as d,a as p,F as C,a4 as B,b as t,t as _,h,j as y,p as w,d as F,f as o,g as m,e as b,s as V}from"./vendor.dd298bfa.js";import{_ as k}from"./main.8482b230.js";const O={data(){return{email:"1193292553@qq.com",filmDetail:[],auth:localStorage.getItem("user_auth")=="admin"}},props:["filmid"],created(){this.getComments()},methods:{getComments(){const e=this.$cloudbase.database();e.command,e.collection("chats").where({filmId:this.filmid,chatFrom:"film",isOk:1}).get().then(l=>{this.filmDetail=l.data,console.log(l.data)})},formaTime(e){return moment(e).fromNow()},deleteComment(e){this.$cloudbase.callFunction({name:"shuiteApi",data:{id:e,event:"DELETE_FILM_COMMENT",secret:"gyc199700"}}).then(l=>{this.$ElMessage.success({message:"\u5220\u9664\u6210\u529F\u4E86!",type:"success"}),this.getComments()}).catch(console.error)}},components:{}},I=e=>(w("data-v-9f492e30"),e=e(),F(),e),z={class:"film-chats boxshadow"},G=I(()=>t("h3",null,"\u8BC4\u8BBA",-1)),J={class:"chat-box"},R=["src"],K={class:"chat-box-message"},P=I(()=>t("span",null,"\u6765\u81EA\u5FEB\u4E50\u661F\u7403",-1)),Q=["onClick"],W={class:"message"};function X(e,l,n,s,i,c){const f=a("el-empty");return d(),p("div",z,[G,(d(!0),p(C,null,B(i.filmDetail,r=>(d(),p("div",J,[t("img",{src:"https://q1.qlogo.cn/g?b=qq&nk="+r.email+"&s=640"},null,8,R),t("div",K,[t("p",null,_(r.nickname),1),t("p",null,[t("div",null,[P,t("span",null,_(c.formaTime(r.created)),1)]),i.auth?(d(),p("span",{key:0,onClick:D=>c.deleteComment(r._id),class:"chat-delete"},"\u5220\u9664",8,Q)):h("",!0)]),t("div",W,_(r.chat),1)])]))),256)),i.filmDetail[0]?h("",!0):(d(),y(f,{key:0,description:"\u6682\u65E0\u7559\u8A00..."}))])}var Z=k(O,[["render",X],["__scopeId","data-v-9f492e30"]]);const $={data(){return{input:""}},props:["filmid"],methods:{submitChat(){const e=this.$auth.currentUser,l=this.$cloudbase.database();l.command,l.collection("chats").add({filmId:this.filmid,chatFrom:"film",chat:this.input,nickname:e.nickName,appVersion:navigator.appVersion,email:e.email,created:Date.now(),updated:Date.now(),isOk:1}).then(n=>{this.$emit("nochat"),this.$ElMessage.success({message:"\u5410\u69FD\u6210\u529F\u4E86!",type:"success"})})}},components:{}},ee={class:"film-gochat boxshadow"},te=b("\u63D0\u4EA4");function le(e,l,n,s,i,c){const f=a("el-input"),r=a("el-button");return d(),p("div",ee,[o(f,{placeholder:"\u5410\u69FD\u4E00\u4E0B\u5427",modelValue:i.input,"onUpdate:modelValue":l[0]||(l[0]=D=>i.input=D),clearable:"",class:"shuite-search"},null,8,["modelValue"]),o(r,{onClick:c.submitChat,type:"small",style:{height:"40px","margin-left":"10px"}},{default:m(()=>[te]),_:1},8,["onClick"])])}var se=k($,[["render",le],["__scopeId","data-v-a08e90c8"]]);const ie={data(){return{loading:!0,post:null,error:null,cloud:cloudbase.init({env:"yui-7gel1hqtaf6fb79d"}),dialogTableVisible:!1,userAuth:localStorage.getItem("user_auth"),isLoved:!1,textareaStyle:{border:0,padding:0,color:"black"},chating:!1,islogin:!1}},setup(e){return{filmsDetail:V(""),nickname:V("")}},created(){this.cloud.auth({persistence:"local"}),this.getFilmDetail(),JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content=="EMAIL"&&(this.islogin=!0)},methods:{formatterTime(e,l,n,s){return moment(n).format("YYYY/MM/DD")},formatterTimeYear(e,l,n,s){return moment(e).format("YYYY")},getFilmDetail(){this.$auth.getAuthHeader();const e=this.cloud.database();e.command,e.collection("films").where({_id:this.$route.params.id}).orderBy("created","desc").limit(1).get().then(l=>{this.filmsDetail=l.data[0],e.collection("user").where({_openid:this.filmsDetail._openid}).get().then(n=>{this.nickname=n.data[0].nickname,e.collection("mylove").where({_openid:this.filmsDetail._openid,filmId:this.filmsDetail._id}).get().then(s=>{s.data[0]&&(this.isLoved=!0),setTimeout(()=>{this.loading=!1},1e3)})})})},getStar(e){const l=this.$auth.getAuthHeader(),n=this.$cloudbase.database();n.command,JSON.parse(localStorage.getItem("login_type_yui-7gel1hqtaf6fb79d")).content=="ANONYMOUS"?ElMessage.info("\u8BF7\u5148\u767B\u5F55\u54E6!!!"):n.collection("mylove").where({_openid:l.uid,filmId:e}).get().then(i=>{i.data[0]||n.collection("mylove").add({filmId:e,created:Date.now(),updated:Date.now()}).then(c=>{console.log(c),this.getFilmDetail(),ElMessage.success({message:"\u6536\u85CF\u6210\u529F\u4E86!",type:"success"})})})},delStar(e){const l=this.$auth.getAuthHeader(),n=this.$cloudbase.database();n.command,n.collection("mylove").where({_openid:l.uid,filmId:e}).remove().then(s=>{this.getFilmDetail(),this.$ElMessage.success({message:"\u53D6\u6D88\u6536\u85CF\u4E86!",type:"success"})})},toChat(){this.chating=!0},noChat(){this.chating=!1,this.$refs.comment.getComments()},hideDialog(){this.dialogTableVisible=!1,this.getFilmDetail()}},components:{FilmsBox:H,"films-upload":U,"film-chats":Z,"film-gochat":se}},u=e=>(w("data-v-9506b6ee"),e=e(),F(),e),oe={class:"filmdetail"},ae={style:{padding:"14px"}},ne={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},ce={class:"film-box"},de={class:"film-top"},me=["src"],re={class:"film-message"},_e={class:"name"},he=u(()=>t("span",null,"\u540D\u79F0:",-1)),ue={class:"fclass"},fe=u(()=>t("span",null,"\u7C7B\u578B:",-1)),pe={class:"jianjie"},ge=u(()=>t("span",null,"\u5E74\u4EFD:",-1)),ve={class:"upload-time"},ye=u(()=>t("span",null,"\u4E0A\u4F20\u65F6\u95F4:",-1)),be={class:"upload-owner"},De=u(()=>t("span",null,"\u4E0A\u4F20\u8005:",-1)),ke={class:"rate",style:{display:"flex"}},xe=u(()=>t("span",null,"\u8BC4\u5206:",-1)),Ce={class:"film-btn boxshadow"},we=["href"],Fe={key:1,class:"film-vedio boxshadow"},Ve=u(()=>t("h3",null,"\u89C6\u9891",-1)),Ie=["src"],Te={class:"film-main boxshadow"},Se=u(()=>t("h3",null,"\u7B80\u4ECB",-1)),Ne=u(()=>t("h3",null,"\u63A8\u8350\u7406\u7531",-1));function je(e,l,n,s,i,c){const f=a("el-skeleton-item"),r=a("el-rate"),D=a("paperclip"),g=a("el-icon"),x=a("star"),T=a("chat-round"),S=a("edit"),N=a("aim"),j=a("film-gochat"),M=a("el-input"),E=a("film-chats"),Y=a("el-skeleton"),q=a("el-space"),L=a("films-upload"),A=a("el-dialog");return d(),p(C,null,[t("div",oe,[o(q,{direction:"vertical",alignment:"flex-start",class:"shuite-el-space"},{default:m(()=>[o(Y,{rows:15,animated:"",loading:i.loading,class:"shuite-el-skeleton"},{template:m(()=>[o(f,{variant:"image",style:{height:"267px"},class:"shuite-el-skeleton-item"}),t("div",ae,[o(f,{variant:"h3",style:{width:"50%"}}),t("div",ne,[o(f,{variant:"text",style:{"margin-right":"16px"}}),o(f,{variant:"text",style:{width:"30%"}})])])]),default:m(()=>[t("div",ce,[t("div",de,[s.filmsDetail?(d(),p("img",{key:0,src:s.filmsDetail.tempFileURL},null,8,me)):h("",!0),t("div",re,[t("div",_e,[he,b(_(s.filmsDetail.name),1)]),t("div",ue,[fe,b(_(s.filmsDetail.class),1)]),t("div",pe,[ge,b(_(c.formatterTimeYear(s.filmsDetail.year)),1)]),t("div",ve,[ye,b(_(c.formatterTime(s.filmsDetail.created)),1)]),t("div",be,[De,b(_(s.nickname),1)]),t("div",ke,[xe,o(r,{"model-value":s.filmsDetail.rateValue,"allow-half":"",disabled:""},null,8,["model-value"])])])]),t("div",Ce,[t("a",{href:s.filmsDetail.link,target:"_blank"},[o(g,null,{default:m(()=>[o(D)]),_:1})],8,we),!i.isLoved&&i.islogin?(d(),y(g,{key:0,onClick:l[0]||(l[0]=v=>c.getStar(s.filmsDetail._id))},{default:m(()=>[o(x)]),_:1})):h("",!0),i.isLoved&&i.islogin?(d(),y(g,{key:1,onClick:l[1]||(l[1]=v=>c.delStar(s.filmsDetail._id))},{default:m(()=>[o(x,{style:{color:"#fcc"}})]),_:1})):h("",!0),i.islogin?(d(),y(g,{key:2,onClick:c.toChat},{default:m(()=>[o(T)]),_:1},8,["onClick"])):h("",!0),i.userAuth=="admin"?(d(),y(g,{key:3,onClick:l[2]||(l[2]=v=>i.dialogTableVisible=!0)},{default:m(()=>[o(S)]),_:1})):h("",!0),o(g,null,{default:m(()=>[o(N)]),_:1})]),i.chating?(d(),y(j,{key:0,filmid:s.filmsDetail._id,onNochat:c.noChat,class:"boxshadow"},null,8,["filmid","onNochat"])):h("",!0),s.filmsDetail.playlink?(d(),p("div",Fe,[Ve,t("iframe",{src:"//player.bilibili.com/player.html?bvid="+s.filmsDetail.playlink+"&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"iframe-vedio"},`\r
              `,8,Ie)])):h("",!0),t("div",Te,[Se,o(M,{type:"textarea",modelValue:s.filmsDetail.jianjie,"onUpdate:modelValue":l[3]||(l[3]=v=>s.filmsDetail.jianjie=v),autosize:"",readonly:"",resize:"none",autofocus:"false",style:{"margin-bottom":"20px"},"input-style":i.textareaStyle},null,8,["modelValue","input-style"]),Ne,t("p",null,_(s.filmsDetail.liyou),1)]),o(E,{filmid:s.filmsDetail._id,ref:"comment"},null,8,["filmid"])])]),_:1},8,["loading"])]),_:1})]),o(A,{title:"\u4FE1\u606F\u4FEE\u6539",modelValue:i.dialogTableVisible,"onUpdate:modelValue":l[4]||(l[4]=v=>i.dialogTableVisible=v),top:"5vh",fullscreen:""},{default:m(()=>[o(L,{type:"2",filmsData:s.filmsDetail,onHideDialog:c.hideDialog},null,8,["filmsData","onHideDialog"])]),_:1},8,["modelValue"])],64)}var Le=k(ie,[["render",je],["__scopeId","data-v-9506b6ee"]]);export{Le as default};