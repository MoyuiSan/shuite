import{_ as y}from"./main.365dd05e.js";import{r as a,o as l,c as r,e as f,w as n,b as d,d as p,a as s,t as m,p as g,g as b,f as D,F as $,a7 as k}from"./vendor.8020b7fb.js";const C={data(){return{filmDetail:null,scrollReveal:this.$scrollReveal()}},props:["filmid","loved"],created(){const e=this.$cloudbase.database();e.command,e.collection("shares").where({_id:this.filmid}).get().then(t=>{this.filmDetail=t.data[0]}),this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!0,mobile:!1,distance:"50px",easing:"ease",scale:.9})},mounted(){},methods:{removeMylove(){const e=this.$auth.getAuthHeader(),t=this.$cloudbase.database();t.command,t.collection("mylove").where({_openid:e.uid,filmId:this.filmid}).remove().then(i=>{this.$emit("initdata"),this.$ElMessage.success({message:"\u53D6\u6D88\u6536\u85CF\u4E86!",type:"success"})})}},components:{}},x=e=>(g("data-v-65d72720"),e=e(),b(),e),S={class:"mylove-card"},L=x(()=>s("div",{class:"image-slot"},[D("\u52A0\u8F7D\u4E2D"),s("span",{class:"dot"},"...")],-1)),F={key:1,class:"mylove-card-msg"};function B(e,t,i,I,o,u){const h=a("el-image"),v=a("router-link"),c=a("delete"),w=a("el-icon"),M=a("el-button");return l(),r("div",S,[o.filmDetail?(l(),f(v,{key:0,to:{name:"sharedetail",params:{id:o.filmDetail._id}}},{default:n(()=>[d(h,{class:"img",src:o.filmDetail.tempFileURL,style:{width:"100%",height:"100%"}},{placeholder:n(()=>[L]),_:1},8,["src"])]),_:1},8,["to"])):p("",!0),o.filmDetail?(l(),r("div",F,[s("span",null,"\u540D\u79F0:"+m(o.filmDetail.name),1),s("span",null,"\u6536\u85CF:"+m(new Date(parseInt(this.loved)).toLocaleDateString()),1)])):p("",!0),d(M,{type:"info",circle:"",class:"mylove-card-remove",icon:e.Delete,onClick:u.removeMylove},{default:n(()=>[d(w,null,{default:n(()=>[d(c)]),_:1})]),_:1},8,["icon","onClick"])])}var N=y(C,[["render",B],["__scopeId","data-v-65d72720"]]);const R={data(){return{data:"",year:Date.parse(new Date().getFullYear())/1e3-8*60*60,total:0}},computed:{},created(){this.getMylove(),this.getMyloveCount(),this.debouncedClick=_.debounce(this.getMyloveCount,500)},unmounted(){this.debouncedClick.cancel()},methods:{getMylove(){this.data="";const e=this.$cloudbase.database(),t=e.command;e.collection("mylove").where({_openid:localStorage.getItem("openid"),updated:t.gt(this.year)}).limit(20).orderBy("created","desc").get().then(i=>{console.log(i),this.data=i.data})},getMyloveCount(){this.data="";const e=this.$cloudbase.database();e.command,e.collection("mylove").where({_openid:localStorage.getItem("openid")}).count().then(t=>{this.total=t.total,this.getMylove()})}},components:{"film-detail-love":N}},V=e=>(g("data-v-7a5d16c9"),e=e(),b(),e),E={class:"mylove boxshadow"},H=V(()=>s("h2",null,"\u6211\u7684\u6536\u85CF",-1)),Y={class:"mylove-box"};function A(e,t,i,I,o,u){const h=a("el-divider"),v=a("film-detail-love");return l(),r("div",E,[H,d(h,{class:"timeline"},{default:n(()=>[D(m(new Date(this.year*1e3).getFullYear())+"\u5E74("+m(o.total)+")",1)]),_:1}),s("div",Y,[(l(!0),r($,null,k(o.data,c=>(l(),f(v,{key:c.filmId,onInitdata:u.getMylove,filmid:c.filmId,loved:c.created,class:"mylove-item"},null,8,["onInitdata","filmid","loved"]))),128))])])}var j=y(R,[["render",A],["__scopeId","data-v-7a5d16c9"]]);export{j as default};
