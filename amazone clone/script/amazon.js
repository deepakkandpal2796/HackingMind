
import {cart, addToCart} from '../data/cart.js'
import {products} from '../data/products.js' 
import { formatCurrency } from '../utils/money.js';

// import {cart as myCart} from '../data/cart' //! we we want to use the different name.

//steps to make the project 
// step 1: save the data 
// step 2: generate the html

//==========STEP 1 SAVING DATA=============

//Products are the list so we are creating array for that. (Array to make a list)
// But inside every product we have many values for that we will create object for every product.(object to group multiple values together)

//! For understanging
//! We have the product file in the data folder

// const products = [{
//     image: "images/products/athletic-cotton-socks-6-pairs.jpg",
//     name:"Black and Gray Athletic Cotton Socks - 6 pairs",
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     pricePaise: 20090
// }, {
//     image: "images/products/intermediate-composite-basketball.jpg",
//     name:"Intermediate Size Basketball",
//     rating: {
//         stars: 4,
//         count: 127
//     },
//     pricePaise: 200099
// }, {
//     image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     name:"Adults Plain Cotton T-Shirt - 2 Pack",
//     rating: {
//         stars: 4.5,
//         count: 56
//     },
//     pricePaise: 70099
// }]

//===========STEP 2: GENERATING HTML===============

let productHTML = "";

products.forEach((product) => {
    productHTML += `
    <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
            ${product.rating.count}
        </div>
        </div>

        <div class="product-price">
        ₹${formatCurrency(product.pricePaise)}
        </div>

        <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
        Add to Cart
        </button>
    </div>
    `
});

//===========ADDING DIV TO CONTAINER===============

document.querySelector('.js-products-grid').innerHTML = productHTML;

//===========ADDING CLICK EVENT ON ADD TO CART ===============

//STEP1: Add click event on all the add to cart button.
//STEP2: How we going to know Which product is clicked? for that add data-attributes 
//STEP3: Push the add to cart element in the cart array as an object with the name and the quantity.
//STEP4: for the same product clicked again we dont want to create a new object in the cart list. We just want to increase the quantity of the object.
//STEP 5: Two products can have the same name so we are using the product ID instead of the name.


function updateCartQuantity() {
        let cartQuantity = 0;

        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity
        })

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button)=> {
    button.addEventListener('click', () => {

        // console.log(button); //! <button class="add-to-cart-button button-primary js-add-to-cart"> Add to Cart </button>
        
        //console.log(button.dataset) //!it return the object of all the datasets present on that selected html.
        // data-product-id="${product.id}"
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity()
        
    })
})

//===========USING MODULE===============

// We have the cart array in another file and if we use the cart array in any other file we will see there is a error that we cant use the variable again.
//Also we have to maintaine the order of the script tags that are being used in the amazon.html file. if cart is declared at the last the page wont work.
//To come out of these issue we are using here the module 

//! Module is a type which helps use to export and import variables form other files, we have to declare this type in the script tag.

// import {cart as myCart} from '../data/cart'
// import {products} from '../data/products' 

//===========MAKE CODE READABLE===============

// using function we can do that 
// I have seprated the code which are updating the cart in the cart .js and the one which updating the amazon page in amazon js 

//==================================================
// Adding checkout page 