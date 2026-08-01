/* ==========================================
   PRAKASH PHARMA
   products.js
========================================== */

"use strict";

/* ==========================================
   PRODUCT DATABASE
========================================== */

const products = [

{
id:1,
name:"Paracetamol 500mg",
category:"Tablets",
manufacturer:"Sun Pharma",
image:"images/products/paracetamol.jpg",
description:"Effective relief from fever and mild to moderate pain."
},

{
id:2,
name:"Amoxicillin 500mg",
category:"Antibiotics",
manufacturer:"Cipla",
image:"images/products/amoxicillin.jpg",
description:"Broad-spectrum antibiotic for bacterial infections."
},

{
id:3,
name:"Azithromycin 500mg",
category:"Antibiotics",
manufacturer:"Abbott",
image:"images/products/azithromycin.jpg",
description:"Treatment for respiratory and bacterial infections."
},

{
id:4,
name:"Vitamin C Tablets",
category:"Supplements",
manufacturer:"Himalaya",
image:"images/products/vitaminc.jpg",
description:"Boosts immunity and antioxidant protection."
},

{
id:5,
name:"Calcium Tablets",
category:"Supplements",
manufacturer:"Cipla",
image:"images/products/calcium.jpg",
description:"Supports healthy bones and teeth."
},

{
id:6,
name:"ORS Powder",
category:"Healthcare",
manufacturer:"FDC",
image:"images/products/ors.jpg",
description:"Helps restore hydration and electrolytes."
},

{
id:7,
name:"Ibuprofen 400mg",
category:"Pain Relief",
manufacturer:"Dr. Reddy's",
image:"images/products/ibuprofen.jpg",
description:"Relieves pain, fever and inflammation."
},

{
id:8,
name:"Pantoprazole 40mg",
category:"Gastro",
manufacturer:"Torrent",
image:"images/products/pantoprazole.jpg",
description:"Reduces stomach acid and treats acidity."
},

{
id:9,
name:"Cetirizine",
category:"Allergy",
manufacturer:"Cipla",
image:"images/products/cetirizine.jpg",
description:"Relief from allergies and seasonal cold symptoms."
},

{
id:10,
name:"Cough Syrup",
category:"Syrups",
manufacturer:"Dabur",
image:"images/products/cough.jpg",
description:"Provides relief from dry and wet cough."
}

];

/* ==========================================
   RENDER PRODUCTS
========================================== */

const productContainer = document.getElementById("productContainer");

function displayProducts(list){

if(!productContainer) return;

productContainer.innerHTML="";

list.forEach(product=>{

productContainer.innerHTML+=`

<div class="col-lg-4 col-md-6 mb-4">

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-content">

<h3>${product.name}</h3>

<p>${product.description}</p>

<span class="badge bg-success mb-2">${product.category}</span>

<p><strong>${product.manufacturer}</strong></p>

<a href="product-details.html?id=${product.id}" class="btn btn-primary">

View Details

</a>

</div>

</div>

</div>

`;

});

}

displayProducts(products);

/* ==========================================
   SEARCH
========================================== */

const search=document.getElementById("productSearch");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(value) ||

product.category.toLowerCase().includes(value) ||

product.manufacturer.toLowerCase().includes(value)

);

displayProducts(filtered);

});

}

/* ==========================================
   CATEGORY FILTER
========================================== */

const categoryFilter=document.getElementById("categoryFilter");

if(categoryFilter){

categoryFilter.addEventListener("change",()=>{

const selected=categoryFilter.value;

if(selected==="All"){

displayProducts(products);

return;

}

const filtered=products.filter(product=>

product.category===selected

);

displayProducts(filtered);

});

}

/* ==========================================
   PRODUCT DETAILS
========================================== */

const details=document.getElementById("productDetails");

if(details){

const params=new URLSearchParams(window.location.search);

const id=parseInt(params.get("id"));

const product=products.find(item=>item.id===id);

if(product){

details.innerHTML=`

<div class="row align-items-center">

<div class="col-lg-6">

<img src="${product.image}"

class="img-fluid rounded shadow">

</div>

<div class="col-lg-6">

<h2>${product.name}</h2>

<h5>${product.manufacturer}</h5>

<p>${product.description}</p>

<p>

<strong>Category:</strong>

${product.category}

</p>

<a href="products.html"

class="btn btn-success">

Back to Products

</a>

</div>

</div>

`;

}

}

/* ==========================================
   FEATURED PRODUCTS
========================================== */

const featured=document.getElementById("featuredProducts");

if(featured){

const featuredItems=products.slice(0,4);

featuredItems.forEach(product=>{

featured.innerHTML+=`

<div class="col-lg-3 col-md-6">

<div class="product-card">

<img src="${product.image}">

<div class="product-content">

<h3>${product.name}</h3>

<p>${product.category}</p>

<a href="product-details.html?id=${product.id}"

class="btn btn-outline-success">

View

</a>

</div>

</div>

</div>

`;

});

}

/* ==========================================
   STATS
========================================== */

console.log("Total Products :",products.length);

console.log("products.js loaded successfully");