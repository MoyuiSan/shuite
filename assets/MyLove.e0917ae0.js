import{_ as e}from"./main.9a7d79f6.js";import{a7 as a,a8 as t,a3 as l,a1 as s,f as i,g as o,v as d,Q as m,p as c,a9 as n,F as r,J as p}from"./vendor.6d187631.js";const v={data:()=>({filmDetail:null}),props:["filmid","loved"],created(){const e=this.$cloudbase.database();e.command,e.collection("films").where({_id:this.filmid}).get().then((e=>{this.filmDetail=e.data[0]}))},methods:{nolove(){const a=this.$auth.getAuthHeader(),t=this.$cloudbase.database();t.command,t.collection("mylove").where({_openid:a.uid,filmId:this.filmid}).remove().then((a=>{this.$emit("initdata"),e.success({message:"取消收藏了!",type:"success"})}))}},components:{}},f=n();a("data-v-5a824693");const h={class:"mylove-card-crl"},u=o("div",{class:"image-slot"},[m("加载中"),o("span",{class:"dot"},"...")],-1),g={class:"mylove-card-name"},y={class:"mylove-card-class"},_=m(" 收藏时间 ");t();const b=f(((e,a,t,n,r,p)=>{const v=l("el-image"),b=l("router-link"),D=l("Timer"),I=l("el-card");return r.filmDetail?(s(),i(I,{key:0},{default:f((()=>[o("div",h,[o("span",{onClick:a[1]||(a[1]=(...e)=>p.nolove&&p.nolove(...e))},"取消收藏")]),o(b,{to:{name:"filmdetail",params:{id:r.filmDetail._id}}},{default:f((()=>[o(v,{class:"img",src:r.filmDetail.tempFileURL,lazy:"",style:{width:"120px",height:"165px"}},{placeholder:f((()=>[u])),_:1},8,["src"])])),_:1},8,["to"]),o("h4",g,[o("span",y,d(r.filmDetail.class),1),m(d(r.filmDetail.name),1)]),o("p",null,[_,o(D,{time:t.loved},null,8,["time"])])])),_:1})):c("",!0)}));v.render=b,v.__scopeId="data-v-5a824693";const D={data:()=>({data:""}),computed:{},created(){this.getMylove()},methods:{getMylove(){this.data="";const e=this.$cloudbase.database();e.command,e.collection("mylove").where({_openid:localStorage.getItem("openid")}).limit(10).orderBy("created","desc").get().then((e=>{console.log(e),this.data=e.data}))}},components:{"film-detail-love":v}},I=n();a("data-v-88c6ba6c");const F={class:"mylove"};t();const $=I(((e,a,t,d,m,c)=>{const n=l("film-detail-love"),v=l("el-timeline-item"),f=l("el-timeline");return s(),i("div",F,[(s(!0),i(r,null,p(m.data,(e=>(s(),i(f,null,{default:I((()=>[o(v,{timestamp:e.created,placement:"top","hide-timestamp":"",color:"#FFF"},{default:I((()=>[o(n,{onInitdata:c.getMylove,filmid:e.filmId,loved:e.created},null,8,["onInitdata","filmid","loved"])])),_:2},1032,["timestamp"])])),_:2},1024)))),256))])}));D.render=$,D.__scopeId="data-v-88c6ba6c";export default D;
