import"./bannerSlider-Zr-hmn09.js";import"./homeSideBar-iWwfViMj.js";document.querySelector(".box__home-slider");const c=document.querySelector(".list__home-slider"),v=document.querySelector("[data-slider-prev]"),x=document.querySelector("[data-slider-next]");let d=3,n=c.childElementCount-d,t=0;const r=()=>{c.style.transform=`translateX(-${c.children[t].offsetLeft}px)`};x.addEventListener("click",()=>{t>=n?t=0:t++,r()}),v.addEventListener("click",()=>{t<=0?t=n:t--,r()}),window.addEventListener("resize",()=>{d=3,n=c.childElementCount-d,r()}),(()=>{const e=u=>document.querySelector(u),s=e(".button__search"),o=e(".button__close"),i=e(".box__search-box"),h=e(".box__search-box input"),m=e(".box__main-item"),l=e(".box__header-top"),_=e(".box__header-bottom"),a=()=>{i.style.width=m.clientWidth+"px",i.style.height=l.clientHeight+"px",h.style.height=l.clientHeight+"px"};_.style.height=l.clientHeight+"px",s.onclick=()=>{a(),i.classList.add("active"),o.classList.add("active"),s.classList.add("active")},o.onclick=()=>{i.classList.remove("active"),o.classList.remove("active"),s.classList.remove("active")},window.addEventListener("resize",()=>{a()})})();
//# sourceMappingURL=main-JzX8J9kI.js.map