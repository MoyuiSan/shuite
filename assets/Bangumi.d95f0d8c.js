import{a1 as u,a2 as p,r as c,o,c as i,e as m,d as _,F as g,a5 as f,p as b,g as v,a as e,b as S,w as x,t as s}from"./vendor.7bf13f67.js";import{_ as w,S as y}from"./main.4b1474ee.js";const z={data(){return{zhuifanData:[],scrollReveal:u(),loading:!0}},created(){NProgress.start();const a=moment().format("YYYYMMDD");localStorage.getItem("bangumi_get_time")===a?(this.zhuifanData=JSON.parse(localStorage.getItem("bangumi_list")).list,localStorage.setItem("bangumi_get_time",a),this.$nextTick(()=>{this.initScrollReveal(),this.loading=!1}),NProgress.done()):p.get("https://698f6214-f151-4144-a617-9e6e592c19f9.bspapp.com/http/zhuifan").then(n=>{this.zhuifanData=n.data.data.data.list,localStorage.setItem("bangumi_list",JSON.stringify(n.data.data.data)),localStorage.setItem("bangumi_get_time",a),this.$nextTick(()=>{this.initScrollReveal(),this.loading=!1,NProgress.done()})})},methods:{initScrollReveal(){this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})}},components:{ShuiteInput:y}},l=a=>(b("data-v-5e997e0f"),a=a(),v(),a),I={class:"zhuifan"},k={key:0,class:"zhuifan-box"},N=l(()=>e("h3",{style:{width:"100%"}},"\u6211\u7684\u8FFD\u756A\u5217\u8868",-1)),D=l(()=>e("div",{class:"zhuifan-hot"},null,-1)),B={class:"zhuifan-box-item reveal-top boxshadow"},R=l(()=>e("div",{class:"image-slot",style:{width:"125px",height:"100%"}},null,-1)),j={class:"item-message"},Y={style:{position:"relative"},class:"look"},C=["href"],P=l(()=>e("button",null,"\u89C2\u770B",-1)),T=[P],V={class:"item-jianjie"};function $(a,n,F,J,r,M){const d=c("shuite-loading"),h=c("el-image");return o(),i("div",I,[r.loading?_("",!0):(o(),i("div",k,[N,r.loading?(o(),m(d,{key:0,class:"boxshadow",style:{width:"100%"}})):_("",!0),D,(o(!0),i(g,null,f(r.zhuifanData,(t,O)=>(o(),i("div",B,[S(h,{src:t.cover,style:{width:"125px",height:"100%"},lazy:"",referrerpolicy:"no-referrer"},{placeholder:x(()=>[R]),_:2},1032,["src"]),e("div",j,[e("span",null,"\u540D\u5B57:"+s(t.title),1),e("span",null,"\u6A21\u5F0F:"+s(t.badge),1),e("span",null,"\u96C6\u6570:"+s(t.new_ep.index_show),1),e("span",null,"\u6807\u7B7E:"+s(t.subtitle?t.subtitle:"\u6682\u65E0"),1),e("span",null,"\u66F4\u65B0:"+s(t.renewal_time?t.renewal_time:"\u6682\u65E0"),1),e("span",null,"\u53D1\u5E03:"+s(t.publish.release_date_show),1)]),e("div",Y,[e("a",{href:t.url,target:"_blank"},T,8,C),e("div",V,"\u7B80\u4ECB:"+s(t.evaluate),1)])]))),256))]))])}var q=w(z,[["render",$],["__scopeId","data-v-5e997e0f"]]);export{q as default};
