import N from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";const o=t=>document.querySelector(t);o(".box__cartItem-container");const P=o(".text__count"),b=o(".box__cartItem-container"),g=o(".text__total-price"),$=o(".box__modal-layer"),x=o(".button__close-layer"),j=o(".button__item-cart"),z=o(".list__card-products"),M=document.querySelector(".swiper-wrapper"),D=o(".list__companies");o(".featured-center");const F=o(".box__search-item");o(".box__price-filter .box__input-box input");const G=o(".search-input"),_=t=>{let n=localStorage.getItem(t)==="undefined"?[]:localStorage.getItem(t);const s=JSON.parse(n)||[];if(s!==void 0)return s},v=(t,n)=>{n!==void 0&&localStorage.setItem(t,JSON.stringify(n))};let J=_("store");const O=t=>{const{id:n,title:s,price:a,category:e,thumbnail:i,description:c,discountPercentage:l,rating:d,stock:u,brand:q}=t;return{id:n,title:s,price:a,category:e,thumbnail:i,description:c,discountPercentage:l,rating:d,stock:u,brand:q}},K=t=>{v("store",t.map(O))},h=({id:t,title:n,price:s,thumbnail:a,amount:e})=>{const i=document.createElement("li");return i.classList.add("swiper-slide"),i.setAttribute("data-id",t),i.innerHTML=`
    <div class="box__item-top">
      <div class="box__cart-image">
        <div class="box__image">
          <img src="${a}" alt="${n} 이미지" />
        </div>
      </div>
      <button type="button" class="button__remove-item" data-id="${t}">
        <i class="fas fa-trash-alt"></i>
        <span class="offscreen">상품 삭제</span>
      </button>
    </div>
    <div class="box__cartItem-content">
      <div class="box__cartItem-info">
        <strong class="text__cartItem-title">${n}</strong>
        <span class="text__cartItem-price">$${s}</span>
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
  `,i},Q=({id:t,title:n,thumbnail:s,price:a,description:e,discountPercentage:i,rating:c,stock:l,brand:d})=>`
    <li class="list-item__card-products">
      <a href="product.html?id=${t}" class="">
        <div class="box__item-image">
          <div class="box__image">
            <img src="${s}" alt="${n}" />
          </div>
        </div>
      </a>
      <div class="box__item-contents">
        <div class="box__item-info">
          <strong class="text__item-brand">${d}</strong>
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
              ${c}
            </span>
            <span class="text__item-stock">재고 ${l}</span>
          </div>
          <strong class="text__item-name">${n}</strong>
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
  `,R=({id:t,brand:n,description:s,title:a,price:e,discountPercentage:i,rating:c,stock:l,amount:d})=>`
    <strong class="text__item-origin">${n}</strong>
    <p class="text__item-introduction">${s}</p>
    <strong class="text__item-title">${a}</strong>
    <div class="box__item-opinion">
      <span class="text__item-rating">
        <i class="fas fa-star"></i>
        ${c}
      </span>
      <div class="box__item-value">
        <span class="text__item-discount">
          ${i}<span class="text__valaue-unit">%</span>
        </span>
        <strong class="text__cart-price">$${e}</strong>
      </div>
      <div class="box__item-info">
        <span class="text__item-quantity">재고 수량 ${l}</span>
        <span class="text__badge-discount">특가</span>
      </div>
    </div>
    <div class="box__item-store">
      <span class="text__item-home">
        <i class="fas fa-store"></i>${n}
      </span>
      <button type="button" class="button__brand-store">
        <span>${n}</span><i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <button type="button" class="button__add-item" data-id="${t}">
     <i class="fas fa-cart-plus"></i>
      <span class="text__add-cart" data-id="${t}">장바구니</span>
    </button>
  `,U=({description:t,title:n,images:s})=>`
    <section class="box__main-detail">
      <h3 class="text__section-title">${n}</h3>
      <p class="text__section-description">${t}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${s[0]}" alt="${n} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-description">
      <div class="box__item-feature">
        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${s[1]}" alt="${n} 두번째 이미지"/>
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
              <img src="${s[2]}" alt="${n} 세번째 이미지"/>
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
          <img src="${s[3]}" alt="${n} 네번째 이미지"/>
        </div>
      </div>
    </div>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/dummyImage01.png" alt="lego batman"/>
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
            <img src="../../assets/images/cart/dummyImage02.png" alt="lego batman"/>
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
            <img src="../../assets/images/cart/dummyImage03.png" alt="lego batman"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `,W=({description:t,title:n,images:s})=>`
    <section class="box__main-detail">
      <h3 class="text__section-title">${n}</h3>
      <p class="text__section-description">${t}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${s[0]}" alt="${n} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-description">
      <div class="box__item-feature">
        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${s[1]}" alt="${n} 두번째 이미지"/>
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
              <img src="${s[2]}" alt="${n} 세번째 이미지"/>
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
            <img src="../../assets/images/cart/alert.png" alt=""/>
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
            <img src="../../assets/images/cart/management.png" alt=""/>
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
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `,X=({description:t,title:n,images:s})=>`
    <section class="box__main-detail">
      <h3 class="text__section-title">${n}</h3>
      <p class="text__section-description">${t}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${s[0]}" alt="${n} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/alert.png" alt=""/>
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
            <img src="../../assets/images/cart/management.png" alt=""/>
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
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `,Y=({brand:t,category:n,title:s,description:a,price:e,discountPercentage:i,stock:c,rating:l})=>`
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
          <td>${n}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">제품명</th>
          <td colspan="3">${s}</td>
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
          <td>${c}</td>
          <th scope="row" class="table-head">평점</th>
          <td>${l}</td>
        </tr>
      </tbody>
    </table>
  `;let p,r=(p&&p.destroy(),p=new N(".swiper",{a11y:{prevSlideMessage:"이전 슬라이드",nextSlideMessage:"다음 슬라이드"},pagination:{el:".swiper-pagination"},slidesPerView:3,spaceBetween:15}),p);const y=()=>_("cart"),w=()=>{const t=y().reduce((n,s)=>n+s.amount,0);P.textContent=t},L=()=>{const t=y().reduce((n,s)=>n+s.price*s.amount,0);g&&(g.textContent=`Total : $${t} `)},S=document.querySelector(".box__modal-layer"),I=()=>{S&&$.classList.add("show"),r.init(document.querySelector(".swiper"))},T=()=>{S&&$.classList.remove("show")};x&&(j.addEventListener("click",I),x.addEventListener("click",T));const V=I;let m;const A=document.querySelector(".swiper-wrapper"),C=()=>{v("cart",m),w(),L()},k=(t,n)=>{let s;return m=_("cart").map(e=>(e.id===Number(t)&&(s=n(e.amount),e={...e,amount:s}),e)),r&&(r.update(),r.updateSlides()),s},E=t=>k(t,n=>n+1),f=t=>{m=_("cart").filter(s=>s.id!==Number(t))},B=()=>{b&&b.addEventListener("click",t=>{const n=t.target,s=n.parentElement,a=n.dataset.id||s.dataset.id,e=s.nextElementSibling,i=s.parentElement.parentElement.parentElement;if(n.classList.contains("button__remove-item"))f(a),s.parentElement.remove();else if(s.classList.contains("button__increase-cartItem"))e.textContent=E(a);else if(s.classList.contains("button__decrease-cartItem")){let c=(l=>{let d=k(Number(l),u=>u-1);return d===0&&f(Number(l)),d})(a);c===0?i.remove():s.previousElementSibling.textContent=c}C(),document.querySelector(".swiper-wrapper").children.length===0&&document.querySelector(".box__modal-layer").classList.remove("show")})},Z=t=>{let n=_("cart");if(n.find(s=>s.id===Number(t))){let s=E(Number(t));b.querySelector(`[data-id="${t}"].text__cartItem-count`).textContent=s}else{let s=(e=>{const i=Number(e);return J.find(c=>c.id===i)})(t);s={...s,amount:1},m=[...n,s],v("cart",m);const a=h(s);A.appendChild(a),r&&(r.updateSlides(),r.update())}C(),r.init(),V()};w(),L(),_("cart").forEach(t=>{const n=h(t);M&&(r.appendSlide(n),r.updateSlides(),r.update())}),B();const tt=async()=>{try{const t=await fetch("https://dummyjson.com/products"),{products:n}=await t.json();return n}catch{return null}},nt=async t=>{const n=`https://dummyjson.com/products/${t}`;try{return await(await fetch(n)).json()}catch{return null}};export{U as a,W as b,R as c,X as d,Y as e,nt as f,Z as g,Q as h,F as i,D as j,tt as k,K as l,G as n,z as p,J as s};
//# sourceMappingURL=fetchProducts-w4PLmLwb.js.map
