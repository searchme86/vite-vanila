import"./bannerSlider-cObXtkYK.js";document.querySelector(".box__home-slider");const t=document.querySelector(".list__home-slider"),l=document.querySelector("[data-slider-prev]"),o=document.querySelector("[data-slider-next]");let d=3,r=t.childElementCount-d,e=0;const n=()=>{t.style.transform=`translateX(-${t.children[e].offsetLeft}px)`};o.addEventListener("click",()=>{e>=r?e=0:e++,n()}),l.addEventListener("click",()=>{e<=0?e=r:e--,n()}),window.addEventListener("resize",()=>{d=3,r=t.childElementCount-d,n()});
//# sourceMappingURL=main-j-KJxtVJ.js.map
