import{a as l}from"./utils-CQY4PpNB.js";function o(){const t=l("so-cart")||[],a=document.querySelector(".product-list"),e=document.getElementById("cart-totals");if(!a)return;if(t.length===0){a.innerHTML="<p>Your cart is empty at the moment, please make a purchase while stock last.</p>",e&&(e.innerHTML="");return}const c=t.map(r=>m(r));a.innerHTML=c.join(""),document.querySelectorAll(".remove-from-cart").forEach(r=>{r.addEventListener("click",y)});let s=0,i=0;t.forEach(r=>{const d=r.quantity||1,g=r.SuggestedRetailPrice||r.ListPrice||r.FinalPrice||0,f=r.FinalPrice||r.ListPrice||0;s+=g*d,i+=f*d});const u=s-i;e&&(e.innerHTML=`
      <div class="cart-footer">
        <p class="cart-total">Total: <span class="old-price">${n(s)}</span></p>
        <p class="cart-total">Discount: <span class="discount-indicator">-${n(u)}</span></p>
        <p class="cart-total">To Pay: <span class="new-price">${n(i)}</span></p>
      </div>
    `)}function n(t){return`$${t.toFixed(2)}`}function m(t){let a="";return t.FinalPrice<t.SuggestedRetailPrice?a=`<span class="discount">-${Math.round((t.SuggestedRetailPrice-t.FinalPrice)/t.SuggestedRetailPrice*100)}% OFF</span> <span class="old-price">${n(t.SuggestedRetailPrice)}</span> <span class="new-price">${n(t.FinalPrice)}</span>`:a=n(t.FinalPrice),`
  <li class="cart-card divider">
    <span class="remove-from-cart" data-id="${t.Id}" style="cursor:pointer; color:red; float:right; font-weight:bold;">&times;</span>
    <a href="#" class="cart-card__image">
      <img
        src="${t.Image}"
        alt="${t.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${t.Name}</h2>
    </a>
    <p class="cart-card__color">${t.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: ${t.quantity||1}</p>
    <p class="cart-card__price">${a}</p>
  </li>`}function y(t){const a=t.target.dataset.id;let e=l("so-cart")||[];const c=e.findIndex(s=>String(s.Id)===String(a));c!==-1&&(e.splice(c,1),localStorage.setItem("so-cart",JSON.stringify(e)),o())}function h(t){let a=l("so-cart")||[];const e=a.findIndex(c=>String(c.Id)===String(t.Id));e!==-1?a[e].quantity=(a[e].quantity||1)+1:a.push({...t,quantity:1}),localStorage.setItem("so-cart",JSON.stringify(a)),o()}function I(){localStorage.removeItem("so-cart"),o()}const p=document.getElementById("emptyCart");p&&p.addEventListener("click",I);o();export{h as a};
