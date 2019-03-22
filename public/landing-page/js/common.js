function displayCartItemsNumber() {
    // This function is to display current
    // sims within the user's cart
    let cartNumberIcon = document.getElementById('cart-quantity');
    let listOfSimsInCart = JSON.parse(sessionStorage.getItem('cartProducts'));
    if (listOfSimsInCart) {
        let numberOfItems = listOfSimsInCart.length;
        cartNumberIcon.innerHTML = numberOfItems;
    }
}
// by default , display current item for cart
// when page load
displayCartItemsNumber();