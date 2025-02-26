// Description: This file is used to update the product page with the passed data from the previous page.
// The data is passed via URL parameters and is decoded to display on the page.
// The main image, brand name, and product title are updated with the passed data.
// The data is extracted from the URL and updated on the page.
  

// Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const imgSrc = urlParams.get("img");
const brand = urlParams.get("brand");
const title = urlParams.get("title");

// Select elements to update
let mainImg = document.getElementById("mainImg");
let brandName = document.querySelector(".brand-name");
let productTitle = document.querySelector(".brand-type");

// Update the page with passed data
if (mainImg && imgSrc) {
    mainImg.src = decodeURIComponent(imgSrc);
}

if (brandName && brand) {
    brandName.textContent = decodeURIComponent(brand);
}

if (productTitle && title) {
    productTitle.textContent = decodeURIComponent(title);
}
