NexT.motion={},NexT.motion.integrator={queue:[],init:function(){return this.queue=[],this},add:function(e){e=e();return CONFIG.motion.async?this.queue.push(e):this.queue=this.queue.concat(e),this},bootstrap:function(){CONFIG.motion.async||(this.queue=[this.queue]),this.queue.forEach(e=>{const t=window.anime.timeline({duration:200,easing:"linear"});e.forEach(e=>{e.deltaT?t.add(e,e.deltaT):t.add(e)})})}},NexT.motion.middleWares={header:function(){const o=[];function e(e,t=!1){o.push({targets:e,opacity:1,top:0,deltaT:t?"-=200":"-=0"})}return e("header.header"),"Mist"===CONFIG.scheme&&o.push({targets:".logo-line",scaleX:[0,1],duration:500,deltaT:"-=200"}),"Muse"===CONFIG.scheme&&e(".custom-logo-image"),e(".site-title"),e(".site-brand-container .toggle",!0),e(".site-subtitle"),"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme||e(".custom-logo-image"),document.querySelectorAll(".menu-item").forEach(e=>{o.push({targets:e,complete:()=>e.classList.add("animated","fadeInDown"),deltaT:"-=200"})}),o},subMenu:function(){const e=document.querySelectorAll(".sub-menu .menu-item");return 0<e.length&&e.forEach(e=>{e.classList.add("animated")}),[]},postList:function(){const o=[];var{post_block:e,post_header:t,post_body:n,coll_header:i}=CONFIG.motion.transition;function s(t,e){t&&document.querySelectorAll(e).forEach(e=>{o.push({targets:e,complete:()=>e.classList.add("animated",t),deltaT:"-=100"})})}return s(e,".post-block, .pagination, .comments"),s(i,".collection-header"),s(t,".post-header"),s(n,".post-body"),o},sidebar:function(){const e=document.querySelector(".sidebar"),t=CONFIG.motion.transition.sidebar;return!t||"Pisces"!==CONFIG.scheme&&"Gemini"!==CONFIG.scheme?[]:[{targets:e,complete:()=>e.classList.add("animated",t)}]},footer:function(){return[{targets:document.querySelector(".footer"),opacity:1}]}};