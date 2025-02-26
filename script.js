document.addEventListener("DOMContentLoaded", () => {
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    // console.log("Navbar toggled!");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    // console.log("Navbar remove!");
  });
}


// Ensure the DOM is fully loaded before accessing elements

let MainImg = document.getElementById("mainImg");
let smallImg = document.querySelectorAll(".small-img");
let brandName = document.querySelector(".brand-name");

// Image swapping on small image click
smallImg.forEach((img) => {
    img.addEventListener("click", (e) => {
        if (MainImg && e.target) {
            let tempSrc = MainImg.src;
            MainImg.src = e.target.src;
            e.target.src = tempSrc;
        } else {
            console.error("MainImg or clicked image not found.");
        }
    });
});

// Update the brand name on the page

document.querySelectorAll(".pro").forEach((product) => {
  product.addEventListener("click", (e) => {
      e.preventDefault();

      let img = product.querySelector("img").src;
      let brand = product.querySelector(".des span").textContent;
      let title = product.querySelector(".des h5").textContent;

      // Encode and pass data via URL
      const imgSrc = encodeURIComponent(img);
      const brandName = encodeURIComponent(brand);
      const productTitle = encodeURIComponent(title);

      // Redirect to sproduct.html with data
      window.location.href = `sproduct.html?img=${imgSrc}&brand=${brandName}&title=${productTitle}`;
      console.log(window.location.href);
  });
});
});
