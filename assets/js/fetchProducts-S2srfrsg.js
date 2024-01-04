import P from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";const l=t=>document.querySelector(t);l(".box__cartItem-container");const q=l(".text__count"),v=l(".box__cartItem-container"),x=l(".text__total-price"),d=l(".box__modal-layer"),f=l(".button__close-layer"),M=l(".button__item-cart"),D=l(".list__card-products"),N=document.querySelector(".swiper-wrapper"),H=l(".list__companies");l(".featured-center");const z=l(".box__search-item");l(".box__price-filter .box__input-box input");const F=l(".search-input"),m=t=>{let s=localStorage.getItem(t)==="undefined"?[]:localStorage.getItem(t);const n=JSON.parse(s)||[];if(n!==void 0)return n},g=(t,s)=>{s!==void 0&&localStorage.setItem(t,JSON.stringify(s))};let V=m("store");const j=t=>{const{id:s,title:n,price:a,category:e,thumbnail:i,description:o,discountPercentage:r,rating:_,stock:p,brand:A}=t;return{id:s,title:n,price:a,category:e,thumbnail:i,description:o,discountPercentage:r,rating:_,stock:p,brand:A}},G=t=>{g("store",t.map(j))},h=({id:t,title:s,price:n,thumbnail:a,amount:e})=>{const i=document.createElement("li");return i.classList.add("swiper-slide"),i.setAttribute("data-id",t),i.innerHTML=`
    <div class="box__item-top">
      <div class="box__cart-image">
        <div class="box__image">
          <img src="${a}" alt="${s} 이미지" />
        </div>
      </div>
      <button type="button" class="button__remove-item" data-id="${t}">
        <i class="fas fa-trash-alt"></i>
        <span class="offscreen">상품 삭제</span>
      </button>
    </div>
    <div class="box__cartItem-content">
      <div class="box__cartItem-info">
        <strong class="text__cartItem-title">${s}</strong>
        <span class="text__cartItem-price">$${n}</span>
      </div>
      <div class="box__control">
        <button class="button__increase-cartItem" data-id="${t}">
          <span class="offscreen">상품 수량증가</span>
          <i class="fas fa-chevron-up"></i>
        </button>
        <span class="text__cartItem-count" data-id="${t}">
          <span class="offscreen">현재 상품수량</span>${e}<span class="offscreen">개</span>
        </span>
        <button class="button__decrease-cartItem" data-id="${t}">
          <span class="offscreen">상품 수량감소</span>
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  `,i},K=({id:t,title:s,thumbnail:n,price:a,description:e,discountPercentage:i,rating:o,stock:r,brand:_})=>`
    <li class="list-item__card-products">
      <a href="product.html?id=${t}" class="">
        <div class="box__item-image">
          <div class="box__image">
            <img src="${n}" alt="${s}" />
          </div>
        </div>
      </a>
      <div class="box__item-contents">
        <div class="box__item-info">
          <strong class="text__item-brand">${_}</strong>
          <p class="text__item-description">${e}</p>
          <div class="box__item-price">
            <span class="text__price-discount">
              ${i}%
            </span>
            <span class="text__cart-price">$${a}</span>
          </div>
          <div class="box__item-comment">
            <span class="text__item-rating">
              <i class="fas fa-star"></i>
              ${o}
            </span>
            <span class="text__item-stock">재고 ${r}</span>
          </div>
          <strong class="text__item-name">${s}</strong>
          <div class="box__badge">
            <ul class="list__badge">
              <li>
                <span class="text__badge text__special-discount">특가</span>
              </li>
              <li>
                <span class="text__badge text__free-delivery">무료배송</span>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" class="button__add-cart" data-id="${t}">
          <i class="fas fa-shopping-cart"></i>
          <span class="offscreen">장바구니 넣기</span>
        </button>
      </div>
    </li>
  `,Q=({id:t,brand:s,description:n,title:a,price:e,discountPercentage:i,rating:o,stock:r,amount:_})=>`
    <strong class="text__item-origin">${s}</strong>
    <p class="text__item-introduction">${n}</p>
    <strong class="text__item-title">${a}</strong>
    <div class="box__item-opinion">
      <span class="text__item-rating">
        <i class="fas fa-star"></i>
        ${o}
      </span>
      <div class="box__item-value">
        <span class="text__item-discount">
          ${i}<span class="text__valaue-unit">%</span>
        </span>
        <strong class="text__cart-price">$${e}</strong>
      </div>
      <div class="box__item-info">
        <span class="text__item-quantity">재고 수량 ${r}</span>
        <span class="text__badge-discount">특가</span>
      </div>
    </div>
    <div class="box__item-store">
      <span class="text__item-home">
        <i class="fas fa-store"></i>${s}
      </span>
      <button type="button" class="button__brand-store">
        <span>${s}</span><i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <button type="button" class="button__add-item" data-id="${t}">
     <i class="fas fa-cart-plus"></i>
      <span class="text__add-cart" data-id="${t}">장바구니</span>
    </button>
  `,U=({description:t,title:s,images:n})=>`
    <section class="box__main-detail">
      <h3 class="text__section-title">${s}</h3>
      <p class="text__section-description">${t}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${n[0]}" alt="${s} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-description">
      <div class="box__item-feature">
        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${n[1]}" alt="${s} 두번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>

        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${n[2]}" alt="${s} 세번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="section__item-description">
      <strong class="text__section-title">Lorem ipsum</strong>
      <p class="text__section-description">Velit incidunt nobis iste fuga eligendi veritatis ducimus dicta modi</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${n[3]}" alt="${s} 네번째 이미지"/>
        </div>
      </div>
    </div>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage01.png" alt="dummyImage01"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage02.png" alt="dummyImage02"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage03.png" alt="dummyImage03"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `,W=({description:t,title:s,images:n})=>`
    <section class="box__main-detail">
      <h3 class="text__section-title">${s}</h3>
      <p class="text__section-description">${t}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${n[0]}" alt="${s} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-description">
      <div class="box__item-feature">
        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${n[1]}" alt="${s} 두번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>

        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${n[2]}" alt="${s} 세번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage01.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage01.png" alt="dummyImage01"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage02.png" alt="dummyImage02"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `,X=({description:t,title:s,images:n})=>`
    <section class="box__main-detail">
      <h3 class="text__section-title">${s}</h3>
      <p class="text__section-description">${t}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${n[0]}" alt="${s} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage01.png" alt="dummyImage01"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage02.png" alt="dummyImage02"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../assets/images/dummyImage03.png" alt="dummyImage03"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `,Y=({brand:t,category:s,title:n,description:a,price:e,discountPercentage:i,stock:o,rating:r})=>`
    <strong class="offscreen">제품 상세 스펙을 정리하는 테이블</strong>
    <table>
      <colgroup>
        <col style="width:20%">
        <col style="width:30%">
        <col style="width:20%">
        <col class="width:30%">
      </colgroup>
      <tbody>
        <tr class="table-row">
          <th scope="row" class="table-head">제조회사</th>
          <td>${t}</td>
          <th scope="row" class="table-head">카테고리</th>
          <td>${s}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">제품명</th>
          <td colspan="3">${n}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">제품설명</th>
          <td colspan="3">${a}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">가격</th>
          <td>${e}</td>
          <th scope="row" class="table-head">할인율</th>
          <td>${i}%</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">재고수</th>
          <td>${o}</td>
          <th scope="row" class="table-head">평점</th>
          <td>${r}</td>
        </tr>
      </tbody>
    </table>
  `;let b,c=(b&&b.destroy(),b=new P(".swiper",{on:{slideChange:t=>{(s=>{const{slides:n,realIndex:a}=s;n.forEach((e,i)=>{((o,r)=>{const _=r?"false":"true",p=r?"0":"-1";o.setAttribute("aria-hidden",_),o.setAttribute("tabindex",p)})(e,i===a)})})(t)}},a11y:{enabled:!0,containerMessage:"카트 등록상품 미리보기 슬라이더",containerRoleDescriptionMessage:"carousel",slideRole:"group",prevSlideMessage:"이전 슬라이드",nextSlideMessage:"다음 슬라이드",slideLabelMessage:"현재 {{index}}번째 슬라이드 / 총 {{slidesLength}}개의 슬라이드",firstSlideMessage:"첫번째 슬라이드 입니다",lastSlideMessage:"마지막 슬라이드 입니다."},allowTouchMove:!0,keyboard:{enabled:!0},pagination:{el:".swiper-pagination"},slidesPerView:3,spaceBetween:15,breakpoints:{360:{slidesPerView:1,spaceBetween:10},760:{slidesPerView:3,spaceBetween:10},861:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:15}}}),b);const $=()=>m("cart"),w=()=>{const t=$().reduce((s,n)=>s+n.amount,0);q.textContent=t},I=()=>{const t=$().reduce((s,n)=>s+n.price*n.amount,0);x&&(x.textContent=`Total : $${t} `)},L=document.querySelector(".box__modal-layer"),S=()=>{L&&(d.classList.add("show"),d.removeAttribute("aria-modal","false"),d.removeAttribute("tabindex"),d.setAttribute("aria-modal","true"),d.setAttribute("tabindex","0")),c.init(document.querySelector(".swiper"))},B=()=>{L&&(d.classList.remove("show"),d.removeAttribute("aria-modal","true"),d.removeAttribute("tabindex"),d.setAttribute("aria-modal","false"),d.setAttribute("tabindex","-1"))};f&&(M.addEventListener("click",S),f.addEventListener("click",B));const T=S;let u;const J=document.querySelector(".swiper-wrapper"),k=()=>{g("cart",u),w(),I()},C=(t,s)=>{let n;return u=m("cart").map(e=>(e.id===Number(t)&&(n=s(e.amount),e={...e,amount:n}),e)),c&&(c.update(),c.updateSlides()),n},E=t=>C(t,s=>s+1),y=t=>{u=m("cart").filter(n=>n.id!==Number(t))},O=()=>{v&&v.addEventListener("click",t=>{const s=t.target,n=s.parentElement,a=s.dataset.id||n.dataset.id,e=n.nextElementSibling,i=n.parentElement.parentElement.parentElement;if(s.classList.contains("button__remove-item"))y(a),n.parentElement.remove();else if(n.classList.contains("button__increase-cartItem"))e.textContent=E(a);else if(n.classList.contains("button__decrease-cartItem")){let o=(r=>{let _=C(Number(r),p=>p-1);return _===0&&y(Number(r)),_})(a);o===0?(i.remove(),c&&(c.updateSlides(),c.update())):n.previousElementSibling.textContent=o}k(),document.querySelector(".swiper-wrapper").children.length===0&&document.querySelector(".box__modal-layer").classList.remove("show")})},Z=t=>{let s=m("cart");if(s.find(n=>n.id===Number(t))){let n=E(Number(t));v.querySelector(`[data-id="${t}"].text__cartItem-count`).textContent=n}else{let n=(e=>{const i=Number(e);return V.find(o=>o.id===i)})(t);n={...n,amount:1},u=[...s,n],g("cart",u);const a=h(n);J.appendChild(a),c&&(c.updateSlides(),c.update())}k(),c.init(),T()};w(),I(),m("cart").forEach(t=>{const s=h(t);N&&(c.appendSlide(s),c.updateSlides(),c.update())}),O();const tt=async()=>{try{const t=await fetch("https://dummyjson.com/products"),{products:s}=await t.json();return s}catch{return null}},st=async t=>{const s=`https://dummyjson.com/products/${t}`;try{return await(await fetch(s)).json()}catch{return null}};export{U as a,W as b,Q as c,X as d,Y as e,st as f,Z as g,K as h,z as i,H as j,tt as k,G as l,F as n,D as p,V as s};
//# sourceMappingURL=fetchProducts-S2srfrsg.js.map
