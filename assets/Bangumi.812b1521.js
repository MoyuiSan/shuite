import{a0 as p,a1 as u,r as c,o,a as i,j as m,h as _,F as g,a5 as f,p as b,d as v,b as e,f as y,g as x,t as s}from"./vendor.893c1949.js";import{_ as S}from"./main.a421dcc7.js";const w={data(){return{zhuifanData:[],scrollReveal:p(),loading:!0}},created(){NProgress.start();const a=moment().format("YYYYMMDD");localStorage.getItem("bangumi_get_time")===a?(this.zhuifanData=JSON.parse(localStorage.getItem("bangumi_list")).list,localStorage.setItem("bangumi_get_time",a),this.$nextTick(()=>{this.initScrollReveal(),this.loading=!1}),NProgress.done()):u.get("https://698f6214-f151-4144-a617-9e6e592c19f9.bspapp.com/http/zhuifan").then(n=>{this.zhuifanData=n.data.data.data.list,localStorage.setItem("bangumi_list",JSON.stringify(n.data.data.data)),localStorage.setItem("bangumi_get_time",a),this.$nextTick(()=>{this.initScrollReveal(),this.loading=!1,NProgress.done()})})},methods:{initScrollReveal(){this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})}},components:{}},l=a=>(b("data-v-828204bc"),a=a(),v(),a),k={class:"zhuifan"},z={key:1,class:"zhuifan-box"},I=l(()=>e("h3",{style:{width:"100%"}},"\u6211\u7684\u8FFD\u756A\u5217\u8868",-1)),N=l(()=>e("div",{class:"zhuifan-hot"},null,-1)),D={class:"zhuifan-box-item reveal-top boxshadow"},j=l(()=>e("div",{class:"image-slot",style:{width:"125px",height:"100%"}},null,-1)),B={class:"item-message"},R={style:{position:"relative"},class:"look"},Y=["href"],C=l(()=>e("button",null,"\u89C2\u770B",-1)),P=[C],T={class:"item-jianjie"};function V(a,n,$,F,r,J){const d=c("lottie-player"),h=c("el-image");return o(),i("div",k,[r.loading?(o(),m(d,{key:0,src:"https://assets1.lottiefiles.com/packages/lf20_gmswat4t.json",background:"transparent",speed:"1",style:{width:"300px",height:"300px",color:"black",margin:"0 auto"},loop:"",autoplay:""})):_("",!0),r.loading?_("",!0):(o(),i("div",z,[I,N,(o(!0),i(g,null,f(r.zhuifanData,(t,M)=>(o(),i("div",D,[y(h,{src:t.cover,style:{width:"125px",height:"100%"},lazy:"",referrerpolicy:"no-referrer"},{placeholder:x(()=>[j]),_:2},1032,["src"]),e("div",B,[e("span",null,"\u540D\u5B57:"+s(t.title),1),e("span",null,"\u6A21\u5F0F:"+s(t.badge),1),e("span",null,"\u96C6\u6570:"+s(t.new_ep.index_show),1),e("span",null,"\u6807\u7B7E:"+s(t.subtitle?t.subtitle:"\u6682\u65E0"),1),e("span",null,"\u66F4\u65B0:"+s(t.renewal_time?t.renewal_time:"\u6682\u65E0"),1),e("span",null,"\u53D1\u5E03:"+s(t.publish.release_date_show),1)]),e("div",R,[e("a",{href:t.url,target:"_blank"},P,8,Y),e("div",T,"\u7B80\u4ECB:"+s(t.evaluate),1)])]))),256))]))])}var L=S(w,[["render",V],["__scopeId","data-v-828204bc"]]);export{L as default};