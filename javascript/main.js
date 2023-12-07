import { cart } from './cart.js';
import { products } from './products.js';

console.log("Script is running...");

/* 
1-) Create a loop for each product (product.forEach) 
2-) if displayed image is a3 then apply "fixed_size" class
3-) if displayed image is a4 then apply "fixed_size_a4" class
4-) Create a product code that appears inside each product-grid
*/

let productHtml = '';
products.forEach((product) => {


    let extraClass = "";
    if (product.image.includes("a3.jpg")) {
      extraClass = "fixed_size";
    }
    else if (product.image.includes("a4.png")) {
      extraClass = "fixed_size_a4";
    }

      // Generate the whole code inside js-product-grid
      /*
      We used data attribute to store product name and product id, the main objective to use data attribute is to
      take the data immediately when loop is activated 
      */ 
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
      <button class = "add-to-cart-options button js-add-to-cart-button"
      data-product-name = "${product.name}"
      data-product-id = "${product.id}" 
      >Add to Cart</button>
      </div>`;
    });
    document.querySelector('.js-products-grid').innerHTML = productHtml;


    /*
    Create a class named js-add-to-cart-button
    Loop it for a function that is used to create an event listener 
    and storing the product Name and product Id
    */ 
    document.querySelectorAll('.js-add-to-cart-button').forEach((button) =>{
      button.addEventListener('click', () => {
        const productName = button.dataset.productName;
        const productId = button.dataset.productId;
        

        // Create a foreach and function that we can use to rechange the quantity of the products
        let matchingItem;
        cart.forEach((item) => {
          if(productName === item.productName){
            matchingItem = item;
          }
        });
        if (matchingItem) {
          matchingItem.quantity += 1,
          productId
        } else {
          cart.push({
            productName: productName,
            quantity: 1,
            productId
          });
        }
        let cartQuantity = 0;
        cart.forEach((item) => {
          cartQuantity += item.quantity;

        })
        console.log(cart)
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity

      });
    });

