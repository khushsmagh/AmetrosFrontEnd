// Simulation class with properties
class Simulation{
    constructor(title, price, startDate, endDate, seatsAvailable){
        this.title = title;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.seatsAvailable = seatsAvailable;  
    }
}

window.addEventListener('load', function() {
    // reference of alert div element
    let messageDiv = document.getElementById('addCart-message');
    // by default it is hidden 
    messageDiv.setAttribute('style', 'visibility: hidden');

    // Display number of current sims within user's cart
    displayCartItemsNumber();

    // array containing the products in the cart
    var cartProducts = [];
    // Function to add simulations to an array
    function addToCart(event){
        let buttonAdd = event.target;
        let itemSimulation = buttonAdd.parentElement.parentElement.parentElement;
        let simulationTitle = itemSimulation.getElementsByClassName('title-simulation')[0].innerHTML;
        let priceSimulation  = itemSimulation.getElementsByClassName('price-simulation')[0].innerHTML;
        let startDateSimulation = itemSimulation.getElementsByClassName('start-simulation')[0].innerHTML;
        let endDateSimulation = itemSimulation.getElementsByClassName('end-simulation')[0].innerHTML;
        let seatsAvailable = itemSimulation.getElementsByClassName('seats-simulation')[0].innerHTML;

        let newSimulation = new Simulation(simulationTitle, priceSimulation, startDateSimulation, endDateSimulation, seatsAvailable);
        cartProducts.push(newSimulation);
        // Saving array of simulation objects in local storage
        sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts));

        // Increase the number of sims within the cart icon
        displayCartItemsNumber();

        // Displaying all simulations objects in console log
        for (let index = 0; index < cartProducts.length; index++) {
            console.log(cartProducts[index]);
        }

        // Pop up add to cart success message after 
        // simulation was added to cart
        messageDiv.setAttribute('style', 'visibility: visible');
        // disappear the message after 2s
        let timeToShowMessage = 2000;
        setTimeout(() => {
            messageDiv.setAttribute('style', 'visibility: hidden');
        }, timeToShowMessage);
    };

    let addToCartButtons = document.getElementsByClassName('simulationAdd');
    for (let index = 0; index < addToCartButtons.length; index++) {
        addToCartButtons[index].addEventListener('click', addToCart);   
    };  
});

function displayCartItemsNumber() {
    // This function is to display current
    // sims within the user's cart
    let cartNumberIcon = document.getElementById('cart-quantity');
    let currenNumberOfSimsInCart = JSON.parse(sessionStorage.getItem('cartProducts')).length;
    cartNumberIcon.innerHTML = currenNumberOfSimsInCart;
}
