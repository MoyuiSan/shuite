import{D as a}from"./main.584339ff.js";import{a7 as t,a8 as e,a3 as s,a1 as o,f as i,g as l,p as c,F as n,J as g,v as r,a9 as d}from"./vendor.6d187631.js";const h={data:()=>({shoucangData:[],loading:!0}),computed:{getShoucangDataJSON(){if(this.shoucangData)return JSON.parse(localStorage.getItem("shoucang_data"))}},created(){const t=moment().format("YYYYMMDD");localStorage.getItem("biliapi_get_time")===t?(this.shoucangData=localStorage.getItem("shoucang_data"),localStorage.setItem("biliapi_get_time",t),this.loading=!1):(NProgress.start(),a.get("https://698f6214-f151-4144-a617-9e6e592c19f9.bspapp.com/http/biliapi/shoucang").then((a=>{this.shoucangData=a.data.data.data.medias,this.loading=!1,NProgress.done(),localStorage.setItem("shoucang_data",JSON.stringify(a.data.data.data.medias)),localStorage.setItem("biliapi_get_time",t)})))},components:{}},m=d();t("data-v-48e45cca");const p={class:"nihon"},u=l("div",{class:"nihon-pic"},null,-1),f={class:"nihon-video"},v=l("h3",null,"我收藏的视频",-1),b={key:1,class:"nihon-video-box"},S={class:"box-item"},_={class:"box-item-img"},D={class:"box-item-msg"},x={class:"txt"},y={class:"box-item",style:{height:"0"}};e();const N=m(((a,t,e,d,h,m)=>{const N=s("lottie-player");return o(),i("div",p,[u,l("div",f,[v,h.loading?(o(),i(N,{key:0,src:"https://assets1.lottiefiles.com/packages/lf20_gmswat4t.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px",color:"black",margin:"0 auto"},loop:"",autoplay:""})):c("",!0),m.getShoucangDataJSON&&!h.loading?(o(),i("div",b,[(o(!0),i(n,null,g(m.getShoucangDataJSON,((a,t)=>(o(),i("div",S,[l("a",{href:"https://www.bilibili.com/video/"+a.bvid,target:"_blanck"},[l("div",_,[l("img",{src:a.cover,alt:"日语视频",referrerpolicy:"no-referrer"},null,8,["src"])]),l("div",D,[l("div",x,r(a.title),1)])],8,["href"])])))),256)),(o(!0),i(n,null,g(4-m.getShoucangDataJSON.length%4,((a,t)=>(o(),i("div",y)))),256))])):c("",!0)])])}));h.render=N,h.__scopeId="data-v-48e45cca";export default h;
