import{a2 as p,r as m,o as a,a as o,b as e,j as u,h as r,F as l,a6 as d,p as f,d as v,t as S}from"./vendor.3a7c3f84.js";import{_ as b}from"./main.bbe50dae.js";const x={data(){return{shoucangData:[],loading:!0}},computed:{getShoucangDataJSON(){if(this.shoucangData)return JSON.parse(localStorage.getItem("shoucang_data"))}},created(){const t=moment().format("YYYYMMDD");localStorage.getItem("biliapi_get_time")===t?(this.shoucangData=localStorage.getItem("shoucang_data"),localStorage.setItem("biliapi_get_time",t),this.loading=!1):(NProgress.start(),p.get("https://698f6214-f151-4144-a617-9e6e592c19f9.bspapp.com/http/biliapi/shoucang").then(i=>{this.shoucangData=i.data.data.data.medias,this.loading=!1,NProgress.done(),localStorage.setItem("shoucang_data",JSON.stringify(i.data.data.data.medias)),localStorage.setItem("biliapi_get_time",t)}))},components:{}},_=t=>(f("data-v-08cfe92d"),t=t(),v(),t),y={class:"nihon"},N=_(()=>e("div",{class:"nihon-pic"},null,-1)),D={class:"nihon-video"},I=_(()=>e("h3",null,"\u6211\u6536\u85CF\u7684\u89C6\u9891",-1)),k={key:1,class:"nihon-video-box"},w={class:"box-item"},J=["href"],O={class:"box-item-img"},j=["src"],B={class:"box-item-msg"},Y={class:"txt"},C={class:"box-item",style:{height:"0"}};function F(t,i,M,P,n,c){const g=m("lottie-player");return a(),o("div",y,[N,e("div",D,[I,n.loading?(a(),u(g,{key:0,src:"https://assets1.lottiefiles.com/packages/lf20_gmswat4t.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px",color:"black",margin:"0 auto"},loop:"",autoplay:""})):r("",!0),c.getShoucangDataJSON&&!n.loading?(a(),o("div",k,[(a(!0),o(l,null,d(c.getShoucangDataJSON,(s,h)=>(a(),o("div",w,[e("a",{href:"https://www.bilibili.com/video/"+s.bvid,target:"_blanck"},[e("div",O,[e("img",{src:s.cover,alt:"\u65E5\u8BED\u89C6\u9891",referrerpolicy:"no-referrer"},null,8,j)]),e("div",B,[e("div",Y,S(s.title),1)])],8,J)]))),256)),(a(!0),o(l,null,d(4-c.getShoucangDataJSON.length%4,(s,h)=>(a(),o("div",C))),256))])):r("",!0)])])}var L=b(x,[["render",F],["__scopeId","data-v-08cfe92d"]]);export{L as default};
