(()=>{const e=a=>document.querySelector(a),t=e(".button__search"),o=e(".button__close"),c=e(".box__search-box"),s=e(".box__search-box input"),i=e(".box__header-top"),r=()=>{c.style.width=i.clientWidth+"px",c.style.height=i.clientHeight+"px",s.style.height=i.clientHeight+"px"};t.onclick=()=>{r(),c.classList.add("active"),o.classList.add("active"),t.classList.add("active")},o.onclick=()=>{c.classList.remove("active"),o.classList.remove("active"),t.classList.remove("active")},window.addEventListener("resize",()=>{r()})})(),(()=>{const e=document.querySelector("header"),t=document.querySelector(".box__search .box__search-box"),o=document.querySelector(".box__control-box .button__search"),c=document.querySelector(".box__control-box .button__close");let s=e.offsetHeight;window.addEventListener("scroll",()=>{window.scrollY>s&&(o.classList.remove("active"),c.classList.remove("active"),t.classList.remove("active"))}),window.addEventListener("resize",()=>{s=e.offsetHeight})})(),(()=>{const e=document.querySelector(".box__mSideBar"),t=document.querySelector(".box__overlay"),o=document.querySelector(".button__open-subMenu"),c=document.querySelector(".button__mSidebar-close"),s=()=>{e.classList.remove("active"),t.classList.remove("active")};o.addEventListener("click",()=>{e.classList.add("active"),t.classList.add("active")}),c.addEventListener("click",s),t.addEventListener("click",s)})();
//# sourceMappingURL=homeSideBar-3ax7sDzc.js.map