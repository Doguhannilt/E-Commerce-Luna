const products = [
  {
    "id": "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    "image": "C:/Users/doguy/Desktop/Youtube Front-End/E-Commerce-Luna/images/product-images/a1.png",
    "name": "The Dawud Prophet Sculpture 300x300",
    "rating": {
      "stars": 4.5,
      "count": 87
    },
    "priceCents": 30010,
    "keywords": [
      "Dawud",
      "prophet",
      "sculpture"
    ]
  },
  {
    "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    "image": "C:/Users/doguy/Desktop/Youtube Front-End/E-Commerce-Luna/images/product-images/a2.png",
    "name": "The Cyprus Zenon Sculpture 150x150",
    "rating": {
      "stars": 4.5,
      "count": 17
    },
    "priceCents": 45010,
    "keywords": [
      "Zenon",
      "sculpture",
      "stoicism"
    ]
  },
  {
    "id": "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    "image": "C:/Users/doguy/Desktop/Youtube Front-End/E-Commerce-Luna/images/product-images/a3.jpg",
    "name": "The Platon Sculpture 200x200",
    "rating": {
      "stars": 4.5,
      "count": 17
    },
    "priceCents": 12010,
    "keywords": [
      "Platon",
      "sculpture"
    ]
  },
  {
    "id": "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    "image": "C:/Users/doguy/Desktop/Youtube Front-End/E-Commerce-Luna/images/product-images/a4.png",
    "name": "Platon - Der Staat Book",
    "rating": {
      "stars": 4,
      "count": 200
    },
    "priceCents": 1300,
    "keywords": [
      "Der Staat",
      "Platon",
      "book"
    ]
  }
];
console.log("Script is running...");

let productHtml = '';

products.forEach((product) => {
  console.log("Image Path:", product.image);

    // Ekstra sınıf eklemek için bir koşul kontrolü
    let extraClass = "";
    if (product.image.includes("a3.jpg")) {
      extraClass = "fixed_size";
    }
    else if (product.image.includes("a4.png")) {
      extraClass = "fixed_size_a4";
    }
  productHtml +=  `
      
      <div class="product-container">
      <img src="${product.image}" class="product-images image-2 ${extraClass}">
      <p class="product-name">${product.name}</p>
  
          <div class="star-container">
              <img src="images/stars/rating-45.png" class="product-stars">
              <p class="product-stars-numbers">${product.rating.count}</p>
          </div>
  
          <p class="product-cost">$${(product.priceCents / 100).toFixed(2)}</p>

          <select class = "select-product-number">
          <option selected value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
          <option value = "6">6</option>
          <option value = "7">7</option>
          <option value = "8">8</option>
          <option value = "9">9</option>
          <option value = "10">10</option>
      </select>
      <button class = "add-to-cart-options button">Add to Cart</button>
      </div>`;

    });

    document.querySelector('.js-products-grid').innerHTML = productHtml;