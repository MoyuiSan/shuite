import{_ as p}from"./main.a12ce602.js";import{r as a,o as l,a as r,j as y,g as c,f as d,h as f,b as s,t as m,p as g,d as b,e as D,F as k,a7 as w}from"./vendor.1807abaf.js";const C={data(){return{filmDetail:null,scrollReveal:this.$scrollReveal()}},props:["filmid","loved"],created(){const e=this.$cloudbase.database();e.command,e.collection("shares").where({_id:this.filmid}).get().then(t=>{this.filmDetail=t.data[0]}),this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!0,mobile:!1,distance:"50px",easing:"ease",scale:.9})},mounted(){},methods:{removeMylove(){const e=this.$auth.getAuthHeader(),t=this.$cloudbase.database();t.command,t.collection("mylove").where({_openid:e.uid,filmId:this.filmid}).remove().then(i=>{this.$emit("initdata"),this.$ElMessage.success({message:"\u53D6\u6D88\u6536\u85CF\u4E86!",type:"success"})})}},components:{}},x=e=>(g("data-v-65d72720"),e=e(),b(),e),S={class:"mylove-card"},L=x(()=>s("div",{class:"image-slot"},[D("\u52A0\u8F7D\u4E2D"),s("span",{class:"dot"},"...")],-1)),F={key:1,class:"mylove-card-msg"};function B(e,t,i,I,o,u){const h=a("el-image"),v=a("router-link"),n=a("delete"),M=a("el-icon"),$=a("el-button");return l(),r("div",S,[o.filmDetail?(l(),y(v,{key:0,to:{name:"sharedetail",params:{id:o.filmDetail._id}}},{default:c(()=>[d(h,{class:"img",src:o.filmDetail.tempFileURL,style:{width:"100%",height:"100%"}},{placeholder:c(()=>[L]),_:1},8,["src"])]),_:1},8,["to"])):f("",!0),o.filmDetail?(l(),r("div",F,[s("span",null,"\u540D\u79F0:"+m(o.filmDetail.name),1),s("span",null,"\u6536\u85CF:"+m(new Date(parseInt(this.loved)).toLocaleDateString()),1)])):f("",!0),d($,{type:"info",circle:"",class:"mylove-card-remove",icon:e.Delete,onClick:u.removeMylove},{default:c(()=>[d(M,null,{default:c(()=>[d(n)]),_:1})]),_:1},8,["icon","onClick"])])}var N=p(C,[["render",B],["__scopeId","data-v-65d72720"]]);const R={data(){return{data:"",year:Date.parse(new Date().getFullYear())/1e3-8*60*60,total:0}},computed:{},created(){this.getMylove(),this.getMyloveCount(),this.debouncedClick=_.debounce(this.getMyloveCount,500)},unmounted(){this.debouncedClick.cancel()},methods:{getMylove(){this.data="";const e=this.$cloudbase.database(),t=e.command;e.collection("mylove").where({_openid:localStorage.getItem("openid"),updated:t.gt(this.year)}).limit(20).orderBy("created","desc").get().then(i=>{console.log(i),this.data=i.data})},getMyloveCount(){this.data="";const e=this.$cloudbase.database();e.command,e.collection("mylove").where({_openid:localStorage.getItem("openid")}).count().then(t=>{this.total=t.total,this.getMylove()})}},components:{"film-detail-love":N}},V=e=>(g("data-v-7a5d16c9"),e=e(),b(),e),j={class:"mylove boxshadow"},E=V(()=>s("h2",null,"\u6211\u7684\u6536\u85CF",-1)),H={class:"mylove-box"};function Y(e,t,i,I,o,u){const h=a("el-divider"),v=a("film-detail-love");return l(),r("div",j,[E,d(h,{class:"timeline"},{default:c(()=>[D(m(new Date(this.year*1e3).getFullYear())+"\u5E74("+m(o.total)+")",1)]),_:1}),s("div",H,[(l(!0),r(k,null,w(o.data,n=>(l(),y(v,{key:n.filmId,onInitdata:u.getMylove,filmid:n.filmId,loved:n.created,class:"mylove-item"},null,8,["onInitdata","filmid","loved"]))),128))])])}var U=p(R,[["render",Y],["__scopeId","data-v-7a5d16c9"]]);export{U as default};
