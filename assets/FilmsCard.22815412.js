import{F as i}from"./FilmsBox.b43efe9c.js";import{_ as o}from"./main.21a6e740.js";import{r as t,o as l,a as r,b as s,f as a,F as c,a4 as n}from"./vendor.893c1949.js";const d={data(){return{scrollReveal:this.$scrollReveal()}},mounted(){new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}}),this.scrollReveal.reveal(".reveal-top",{duration:500,delay:100,origin:"bottom",reset:!1,mobile:!1,distance:"100px",opacity:.001,easing:"ease",scale:.9})},components:{"films-box":i}},p=n('<div class="swiper-container boxshadow"><div class="swiper-wrapper"><div class="swiper-slide"><img src="https://7975-yui-7gel1hqtaf6fb79d-1255352246.tcb.qcloud.la/shuiao/zhuixu.webp?sign=65cbb4c7e35b3d8f8928d56250a67591&amp;t=1616137702"></div><div class="swiper-slide"><img src="https://7975-yui-7gel1hqtaf6fb79d-1255352246.tcb.qcloud.la/shuiao/blr03.jpeg?sign=463bca40b7edd70385d6aec896608e11&amp;t=1616137792"></div></div><div class="swiper-pagination"></div></div>',1),m={class:"article-item reveal-top boxshadow"},v={class:"article-item reveal-top boxshadow"},b={class:"article-item reveal-top boxshadow"};function f(u,_,h,w,g,x){const e=t("films-box");return l(),r(c,null,[p,s("div",m,[a(e,{title:"\u5F71\u89C6\u5267","film-class":"\u5F71\u89C6\u5267",icon:"el-icon-video-camera"})]),s("div",v,[a(e,{title:"\u52A8\u6F2B","film-class":"\u52A8\u6F2B",icon:"el-icon-magic-stick"})]),s("div",b,[a(e,{title:"\u6E38\u620F","film-class":"\u6E38\u620F",icon:"el-icon-sugar"})])],64)}var j=o(d,[["render",f]]);export{j as default};
