(function(){const r=document.createElement("link").relList;if(!(r&&r.supports&&r.supports("modulepreload"))){for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const e of i.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(s){if(s.ep)return;s.ep=!0;const i=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}(s);fetch(s.href,i)}})(),(()=>{const r=n=>document.querySelector(n),t=r(".button__search"),s=r(".button__close"),i=r(".box__search-box"),e=r(".box__search-box input"),o=r(".box__header-top"),c=()=>{i.style.width=o.clientWidth+"px",i.style.height=o.clientHeight+"px",e.style.height=o.clientHeight+"px"};t.onclick=()=>{c(),i.classList.add("active"),s.classList.add("active"),t.classList.add("active")},s.onclick=()=>{i.classList.remove("active"),s.classList.remove("active"),t.classList.remove("active")},window.addEventListener("resize",()=>{c()})})(),(()=>{const r=document.querySelector("header"),t=document.querySelector(".box__search .box__search-box"),s=document.querySelector(".box__control-box .button__search"),i=document.querySelector(".box__control-box .button__close");let e=r.offsetHeight;window.addEventListener("scroll",()=>{window.scrollY>e&&(s.classList.remove("active"),i.classList.remove("active"),t.classList.remove("active"))}),window.addEventListener("resize",()=>{e=r.offsetHeight})})(),(()=>{const r=()=>({buttons:document.querySelectorAll("[data-button-accordion]"),menus:document.querySelectorAll("[data-menu-accordion]")}),t=(i,e)=>{i.forEach(o=>{o.removeAttribute("aria-selected","true"),o.setAttribute("aria-selected","false"),o.classList.remove("active")}),e.forEach(o=>{o.removeAttribute("aria-expanded","true"),o.setAttribute("aria-expanded","false"),o.classList.remove("active")})},s=function(){const i=this.nextElementSibling.classList.contains("active"),{buttons:e,menus:o}=r();t(e,o),i||(this.nextElementSibling.classList.add("active"),this.nextElementSibling.setAttribute("aria-expanded","true"),this.classList.add("active"),this.setAttribute("aria-selected","true"))};(()=>{const{buttons:i,menus:e}=r();t(i,e),(()=>{const{buttons:o}=r();o.forEach(c=>c.addEventListener("click",s))})()})()})(),(()=>{const r=document.querySelector(".box__mSideBar"),t=document.querySelector(".box__overlay"),s=document.querySelector(".button__open-subMenu"),i=document.querySelector(".button__mSidebar-close"),e=()=>{r.classList.remove("active"),t.classList.remove("active"),t.removeAttribute("aria-modal","true"),t.removeAttribute("tabindex"),t.setAttribute("aria-modal","false"),t.setAttribute("tabindex","-1")};s.addEventListener("click",()=>{r.classList.add("active"),t.classList.add("active"),t.removeAttribute("aria-modal","false"),t.removeAttribute("tabindex"),t.setAttribute("aria-modal","true"),t.setAttribute("tabindex","0")}),i.addEventListener("click",e),t.addEventListener("click",e)})(),(()=>{let r,t,s=0;const i=document.querySelector(".list-item__bestSeller"),e=document.querySelectorAll(".list-item__bestSeller").length,o=parseInt(i.clientHeight);document.querySelector(".box__bestSeller .text__module-title "),document.querySelector(".box__bestSeller-contents");const c=document.querySelector(".box__bestSeller .list__bestSeller"),n=document.querySelector(".text__product-number"),a=document.querySelector(".box__bestSeller .button__slide-start"),d=document.querySelector(".box__bestSeller .button__slide-stop");n.textContent=e,t=(e-1)*o,c.setAttribute("style","top:0px");const l=()=>{s-=o,c.style.top=`${s}px`,c.style.transition="top 0.5s ease-in-out",s===-t&&setTimeout(()=>{c.style.transition="none",c.style.top="0",s=0},1500)};r=setInterval(l,1500),a.addEventListener("click",()=>{r&&clearInterval(r),r=setInterval(l,3e3)}),d.addEventListener("click",()=>{clearInterval(r)})})();
//# sourceMappingURL=bannerSlider-ORXmtDQm.js.map