import{r as d,l as m,g as l}from"./utils-DKSz241K.js";/* empty css              */import{P as y}from"./productData-vyC4-ngc.js";function g(t){var e,r;return`
    <li class="product-card">
      <a href="/product_pages/?product=${t.Id}">
        <img src="${((e=t.Images)==null?void 0:e.PrimaryMedium)||""}" alt="${t.Name}">
        <h3>${((r=t.Brand)==null?void 0:r.Name)||""}</h3>
        <p>${t.NameWithoutBrand||t.Name}</p>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
    `}class s{constructor(e,r,u,h=!1){this.queryOrCategory=e,this.dataSource=r,this.listElement=u,this.isSearch=h}async init(){let e=[];this.isSearch?(e=await this.dataSource.searchProducts(this.queryOrCategory),document.querySelector(".title").textContent=`Results for "${this.queryOrCategory}"`):(e=await this.dataSource.getData(this.queryOrCategory),document.querySelector(".title").textContent=this.queryOrCategory),this.renderList(e)}renderList(e){if(!e||e.length===0){this.listElement.innerHTML="<p>No products found.</p>";return}d(g,this.listElement,e)}}m();const n=l("category"),c=l("search"),i=new y,o=document.querySelector(".product-list");let a;c?a=new s(c,i,o,!0):n?a=new s(n,i,o,!1):a=new s("tents",i,o,!1);a.init();
