import{D as a}from"./index.e4f9a84b.js";import{a6 as t,a7 as e,$ as s,f as o,g as i,F as c,J as l,v as n,a8 as g}from"./vendor.7cb940fd.js";const r={data:()=>({shoucangData:[]}),computed:{getShoucangDataJSON(){if(this.shoucangData)return JSON.parse(localStorage.getItem("shoucang_data"))}},created(){const t=moment().format("YYYYMMDD");localStorage.getItem("biliapi_get_time")===t?(this.shoucangData=localStorage.getItem("shoucang_data"),localStorage.setItem("biliapi_get_time",t),console.log(JSON.parse(this.shoucangData),"111")):(NProgress.start(),a.get("https://698f6214-f151-4144-a617-9e6e592c19f9.bspapp.com/http/biliapi/shoucang").then((a=>{console.log(a,"111"),this.shoucangData=a.data.data.data.medias,NProgress.done(),localStorage.setItem("shoucang_data",JSON.stringify(a.data.data.data.medias)),localStorage.setItem("biliapi_get_time",t)})))},components:{}},d=g();t("data-v-a3044bc0");const h={class:"nihon"},m=i("div",{class:"nihon-pic"},null,-1),p={class:"nihon-video"},u=i("h3",null,"我收藏的视频",-1),b={class:"nihon-video-box"},v={class:"box-item"},f={class:"box-item-img"},S={class:"box-item-msg"},_={class:"txt"},D={class:"box-item",style:{height:"0"}};e();const x=d(((a,t,e,g,r,d)=>(s(),o("div",h,[m,i("div",p,[u,i("div",b,[(s(!0),o(c,null,l(d.getShoucangDataJSON,((a,t)=>(s(),o("div",v,[i("a",{href:"https://www.bilibili.com/video/"+a.bvid,target:"_blanck"},[i("div",f,[i("img",{src:a.cover,alt:"日语视频",referrerpolicy:"no-referrer"},null,8,["src"])]),i("div",S,[i("div",_,n(a.title),1)])],8,["href"])])))),256)),(s(!0),o(c,null,l(4-d.getShoucangDataJSON.length%4,((a,t)=>(s(),o("div",D)))),256))])])]))));r.render=x,r.__scopeId="data-v-a3044bc0";export default r;
