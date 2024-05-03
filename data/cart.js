export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
    }];
}


export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
            
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}



export function addToCart(productId) {
    
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    });

    let selectElement = document.querySelector(`.js-quantity-selector-${productId}`);
    let selectElementValue = Number(selectElement.value); 
    
    if (matchingItem) {
        matchingItem.quantity += selectElementValue;
    } else {
        cart.push({
            productId: productId,
            quantity: selectElementValue,
            deliveryOptionId: '1',
        })
    }
    saveToStorage();
}


export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }
    });

    cart = newCart;

    saveToStorage();
}

export function updateCheckoutQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
        
    })

    if (cartQuantity === 0) {
        document.querySelector('.js-items').innerHTML = '';
    } else {
        document.querySelector('.js-items').innerHTML = `${cartQuantity} items`;
    }
    
    
}



export function updateQuantity(productId, newQuantity) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    });

    matchingItem.quantity = newQuantity

    saveToStorage();
}



export function updateDeliveryOption(productId, deliveryOptionId)  {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}