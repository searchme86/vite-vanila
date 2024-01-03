import q from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";const o=t=>document.querySelector(t);o(".box__cartItem-container");const N=o(".text__count"),b=o(".box__cartItem-container"),g=o(".text__total-price"),y=o(".box__modal-layer"),x=o(".button__close-layer"),V=o(".button__item-cart"),z=o(".list__card-products"),j=document.querySelector(".swiper-wrapper"),D=o(".list__companies");o(".featured-center");const F=o(".box__search-item");o(".box__price-filter .box__input-box input");const G=o(".search-input"),_=t=>{let s=localStorage.getItem(t)==="undefined"?[]:localStorage.getItem(t);const n=JSON.parse(s)||[];if(n!==void 0)return n},v=(t,s)=>{s!==void 0&&localStorage.setItem(t,JSON.stringify(s))};let B=_("store");const M=t=>{const{id:s,title:n,price:i,category:e,thumbnail:a,description:c,discountPercentage:l,rating:d,stock:u,brand:P}=t;return{id:s,title:n,price:i,category:e,thumbnail:a,description:c,discountPercentage:l,rating:d,stock:u,brand:P}},K=t=>{v("store",t.map(M))},$=({id:t,title:s,price:n,thumbnail:i,amount:e})=>{const a=document.createElement("li");return a.classList.add("swiper-slide"),a.setAttribute("data-id",t),a.innerHTML=`
    <div class="box__item-top">
      <div class="box__cart-image">
        <div class="box__image">
          <img src="${i}" alt="${s} 이미지" />
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
  `,a},Q=({id:t,title:s,thumbnail:n,price:i,description:e,discountPercentage:a,rating:c,stock:l,brand:d})=>`
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
          <strong class="text__item-brand">${d}</strong>
          <p class="text__item-description">${e}</p>
          <div class="box__item-price">
            <span class="text__price-discount">
              ${a}%
            </span>
            <span class="text__cart-price">$${i}</span>
          </div>
          <div class="box__item-comment">
            <span class="text__item-rating">
              <i class="fas fa-star"></i>
              ${c}
            </span>
            <span class="text__item-stock">재고 ${l}</span>
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
  `,R=({id:t,brand:s,description:n,title:i,price:e,discountPercentage:a,rating:c,stock:l,amount:d})=>`
    <strong class="text__item-origin">${s}</strong>
    <p class="text__item-introduction">${n}</p>
    <strong class="text__item-title">${i}</strong>
    <div class="box__item-opinion">
      <span class="text__item-rating">
        <i class="fas fa-star"></i>
        ${c}
      </span>
      <div class="box__item-value">
        <span class="text__item-discount">
          ${a}<span class="text__valaue-unit">%</span>
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
  `,Y=({brand:t,category:s,title:n,description:i,price:e,discountPercentage:a,stock:c,rating:l})=>`
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
          <td colspan="3">${i}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">가격</th>
          <td>${e}</td>
          <th scope="row" class="table-head">할인율</th>
          <td>${a}%</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">재고수</th>
          <td>${c}</td>
          <th scope="row" class="table-head">평점</th>
          <td>${l}</td>
        </tr>
      </tbody>
    </table>
  `;let p,r=(p&&p.destroy(),p=new q(".swiper",{a11y:{prevSlideMessage:"이전 슬라이드",nextSlideMessage:"다음 슬라이드"},pagination:{el:".swiper-pagination"},slidesPerView:3,spaceBetween:15,breakpoints:{360:{slidesPerView:1,spaceBetween:10},760:{slidesPerView:3,spaceBetween:10},861:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:15}}}),p);const h=()=>_("cart"),w=()=>{const t=h().reduce((s,n)=>s+n.amount,0);N.textContent=t},I=()=>{const t=h().reduce((s,n)=>s+n.price*n.amount,0);g&&(g.textContent=`Total : $${t} `)},L=document.querySelector(".box__modal-layer"),S=()=>{L&&y.classList.add("show"),r.init(document.querySelector(".swiper"))},J=()=>{L&&y.classList.remove("show")};x&&(V.addEventListener("click",S),x.addEventListener("click",J));const O=S;let m;const T=document.querySelector(".swiper-wrapper"),k=()=>{v("cart",m),w(),I()},C=(t,s)=>{let n;return m=_("cart").map(e=>(e.id===Number(t)&&(n=s(e.amount),e={...e,amount:n}),e)),r&&(r.update(),r.updateSlides()),n},E=t=>C(t,s=>s+1),f=t=>{m=_("cart").filter(n=>n.id!==Number(t))},A=()=>{b&&b.addEventListener("click",t=>{const s=t.target,n=s.parentElement,i=s.dataset.id||n.dataset.id,e=n.nextElementSibling,a=n.parentElement.parentElement.parentElement;if(s.classList.contains("button__remove-item"))f(i),n.parentElement.remove();else if(n.classList.contains("button__increase-cartItem"))e.textContent=E(i);else if(n.classList.contains("button__decrease-cartItem")){let c=(l=>{let d=C(Number(l),u=>u-1);return d===0&&f(Number(l)),d})(i);c===0?a.remove():n.previousElementSibling.textContent=c}k(),document.querySelector(".swiper-wrapper").children.length===0&&document.querySelector(".box__modal-layer").classList.remove("show")})},Z=t=>{let s=_("cart");if(s.find(n=>n.id===Number(t))){let n=E(Number(t));b.querySelector(`[data-id="${t}"].text__cartItem-count`).textContent=n}else{let n=(e=>{const a=Number(e);return B.find(c=>c.id===a)})(t);n={...n,amount:1},m=[...s,n],v("cart",m);const i=$(n);T.appendChild(i),r&&(r.updateSlides(),r.update())}k(),r.init(),O()};w(),I(),_("cart").forEach(t=>{const s=$(t);j&&(r.appendSlide(s),r.updateSlides(),r.update())}),A();const tt=async()=>{try{const t=await fetch("https://dummyjson.com/products"),{products:s}=await t.json();return s}catch{return null}},st=async t=>{const s=`https://dummyjson.com/products/${t}`;try{return await(await fetch(s)).json()}catch{return null}};export{U as a,W as b,R as c,X as d,Y as e,st as f,Z as g,Q as h,F as i,D as j,tt as k,K as l,G as n,z as p,B as s};
//# sourceMappingURL=fetchProducts-IHaTeb7E.js.map
