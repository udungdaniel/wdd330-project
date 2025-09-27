import{g as c}from"./utils-DKSz241K.js";/* empty css              */import{P as d}from"./productData-vyC4-ngc.js";import{a as l}from"./cart-AcSasb2b.js";const n=c("id"),p=new d;function m(e){const r=document.querySelector("#product-details");if(!e){r.innerHTML="<p>Product not found.</p>";return}const s=e.Images&&e.Images.PrimaryLarge||e.Images&&e.Images.PrimaryMedium||e.Image||"",t=e.FinalPrice||e.ListPrice||e.SuggestedRetailPrice||0,a=e.SuggestedRetailPrice||e.ListPrice||0;let i=`<span class="new-price">$${t.toFixed(2)}</span>`;if(a>t){const o=Math.round((a-t)/a*100);i=`<span class="old-price">$${a.toFixed(2)}</span> <span class="new-price">$${t.toFixed(2)}</span> <span class="discount">-${o}% OFF</span>`}r.innerHTML=`
    <div class="product-detail-card">
      <img src="${s}" alt="${e.Name}" class="product-detail-image" />
      <h2>${e.Name}</h2>
      <p class="product-description">${e.Description||"No description available."}</p>
      <p class="product-price"><strong>Price:</strong> ${i}</p>
      <button id="addToCart">Add to Cart</button>
    </div>
  `,document.querySelector("#addToCart").addEventListener("click",()=>{l(n)})}async function u(){try{const e=await p.findProductById(n);m(e)}catch(e){console.error("Error loading product:",e),document.querySelector("#product-details").innerHTML="<p>There was an error loading the product.</p>"}}document.addEventListener("DOMContentLoaded",u);
