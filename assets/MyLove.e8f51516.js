import{_ as m}from"./main.a421dcc7.js";import{r as c,o as l,a as d,j as _,g as p,f as y,h as $,p as h,d as u,b as a,e as b,F as v,a5 as x}from"./vendor.893c1949.js";const I={data(){return{filmDetail:null,scrollReveal:this.$scrollReveal()}},props:["filmid","loved"],created(){const e=this.$cloudbase.database();e.command,e.collection("films").where({_id:this.filmid}).get().then(t=>{this.filmDetail=t.data[0]}),this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!0,mobile:!1,distance:"50px",easing:"ease",scale:.9})},mounted(){},methods:{nolove(){const e=this.$auth.getAuthHeader(),t=this.$cloudbase.database();t.command,t.collection("mylove").where({_openid:e.uid,filmId:this.filmid}).remove().then(n=>{this.$emit("initdata"),this.$ElMessage.success({message:"\u53D6\u6D88\u6536\u85CF\u4E86!",type:"success"})})}},components:{}},f=e=>(h("data-v-48fae6bc"),e=e(),u(),e),w={class:"mylove-card",style:{width:"160px","min-height":"160px"}},k=f(()=>a("div",{class:"image-slot"},[b("\u52A0\u8F7D\u4E2D"),a("span",{class:"dot"},"...")],-1)),M=f(()=>a("div",{class:"mylove-card-ctl"},[a("span",null,"23123"),a("span",null,"\u5173\u6CE8\u65F6\u95F4"),a("span",null,"\u53D6\u6D88\u5173\u6CE8")],-1));function D(e,t,n,g,o,r){const i=c("el-image"),s=c("router-link");return l(),d("div",w,[o.filmDetail?(l(),_(s,{key:0,to:{name:"filmdetail",params:{id:o.filmDetail._id}}},{default:p(()=>[y(i,{class:"img",src:o.filmDetail.tempFileURL,style:{width:"160px",height:"auto"}},{placeholder:p(()=>[k]),_:1},8,["src"])]),_:1},8,["to"])):$("",!0),M])}var L=m(I,[["render",D],["__scopeId","data-v-48fae6bc"]]);const B={data(){return{data:""}},computed:{},created(){this.getMylove()},methods:{getMylove(){this.data="";const e=this.$cloudbase.database();e.command,e.collection("mylove").where({_openid:localStorage.getItem("openid")}).limit(20).orderBy("created","desc").get().then(t=>{console.log(t),this.data=t.data})}},components:{"film-detail-love":L}},S=e=>(h("data-v-78cc60c2"),e=e(),u(),e),C=S(()=>a("h2",null,"\u6211\u7684\u6536\u85CF",-1)),F={class:"mylove"};function N(e,t,n,g,o,r){const i=c("film-detail-love");return l(),d(v,null,[C,a("div",F,[(l(!0),d(v,null,x(o.data,s=>(l(),_(i,{key:s.filmId,onInitdata:r.getMylove,filmid:s.filmId,loved:s.created,class:"mylove-item"},null,8,["onInitdata","filmid","loved"]))),128))])],64)}var j=m(B,[["render",N],["__scopeId","data-v-78cc60c2"]]);export{j as default};