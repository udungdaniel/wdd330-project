import{g as o}from"./utils-B3jpzjNX.js";/* empty css              */import{P as e}from"./productData-BDL79EoI.js";import{a as n}from"./cart-B6IKq8Cr.js";const r=o("product"),d=new e("tents");function a(t){if(!t){document.querySelector("#product-details").innerHTML="<p>Product not found.</p>";return}document.querySelector("#product-details").innerHTML=`
    <h2>${t.Name}</h2>
    <p>${t.Description}</p>
    <p><strong>Price:</strong> $${t.Price}</p>
    <button id="addToCart">Add to Cart</button>
  `,document.querySelector("#addToCart").addEventListener("click",()=>{n(r)})}async function c(){try{const t=await d.findProductById(r);a(t)}catch(t){console.error("Error loading product:",t),document.querySelector("#product-details").innerHTML="<p>There was an error loading the product.</p>"}}document.addEventListener("DOMContentLoaded",c);
