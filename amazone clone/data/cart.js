// prdouch in the cart is a list hence we use array 
export const cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
},
{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
}];

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
}
