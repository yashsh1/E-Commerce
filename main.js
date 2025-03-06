let product = document.querySelector(".pro-container");

const prodectItemData = [
    { id: 1, name: "Adidas Floral Printed Shirt", price: 78, image: "img/products/f1.jpg", brand: "Adidas" },
    { id: 2, name: "Nike Floral Printed Shirt", price: 78, image: "img/products/f2.jpg", brand: "Nike" },
    { id: 3, name: "Puma Floral Printed Shirt", price: 78, image: "img/products/f3.jpg", brand: "Puma" },
    { id: 4, name: "Adidas Floral Printed Shirt", price: 78, image: "img/products/f4.jpg", brand: "Adidas" },
    { id: 5, name: "Nike Floral Printed Shirt", price: 78, image: "img/products/f5.jpg", brand: "Nike" },
    { id: 6, name: "Puma Floral Printed Shirt", price: 78, image: "img/products/f6.jpg", brand: "Puma" },
    { id: 7, name: "Adidas Floral Printed Shirt", price: 78, image: "img/products/f7.jpg", brand: "Adidas" },
    { id: 8, name: "Nike Floral Printed Shirt", price: 78, image: "img/products/f8.jpg", brand: "Nike" },
    { id: 9, name: "Light Blue Shirt", price: 78, image: "img/products/n1.jpg", brand: "Adidas" },
    { id: 10, name: "Dark Blue Checkered Shirt", price: 78, image: "img/products/n2.jpg", brand: "Adidas" },
    { id: 11, name: "White Shirt", price: 78, image: "img/products/n3.jpg", brand: "Adidas" },
    { id: 12, name: "Beige Patterned Shirt", price: 78, image: "img/products/n4.jpg", brand: "Adidas" },
    { id: 13, name: "Denim Shirt", price: 78, image: "img/products/n5.jpg", brand: "Adidas" },
    { id: 14, name: "Light Gray Striped Shorts", price: 78, image: "img/products/n6.jpg", brand: "Adidas" },
    { id: 15, name: "Brown Shirt", price: 78, image: "img/products/n7.jpg", brand: "Adidas" },
    { id: 16, name: "Dark Gray Shirt", price: 78, image: "img/products/n8.jpg", brand: "Adidas" }
  ];
  

let generatedProduct = () => {
    product.innerHTML += prodectItemData.map((item) => {
        let { id, name, price, image, brand } = item;
        return  ` <div id="${id}" class="pro">
        <img src="${image}" alt="T-Shirts" />
        <div class="des">
          <span>${brand}</span>
          <h5 class="item-type" >${name}</h5>
          <div class="star">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"i></i>
          </div>
          <h4>$${price}</h4>
        </div>
        <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
      </div>`;
    }).join(''); // ✅ Converts array to string
};

// Call function to generate products
generatedProduct();
