// prdouch in the cart is a list hence we use array 
export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
    }];
}


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId){
    let matchingId;
        
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingId = cartItem;
            //console.log(matchingId);//! cartItem is the object in the cart array and we are storing that object inside the productName.
        }
    })

    if(matchingId){
        matchingId.quantity += 1; // matchingId.quantity===cartItem.quantity 
    }else{
        cart.push({
            productId: productId,
            quantity: 1,
        })
    }
    saveToStorage();
}


//1st create a new cart 
//pass the product id
//if existing cart contains that product id then dont push that value to the newCart 

export function removeFromCart (productId){
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    })

    cart = newCart;
    saveToStorage();
}