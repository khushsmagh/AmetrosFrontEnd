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

    let cartProducts;

    // Function to add simulations to an array
    function addToCart(event){
        let buttonAdd = event.target;
        let itemSimulation = buttonAdd.parentElement.parentElement.parentElement;
        let simulationTitle = itemSimulation.getElementsByClassName('title-simulation')[0].innerHTML;
        let priceSimulation  = itemSimulation.getElementsByClassName('price-simulation')[0].innerHTML;
        let startDateSimulation = itemSimulation.getElementsByClassName('start-simulation')[0].innerHTML;
        let endDateSimulation = itemSimulation.getElementsByClassName('end-simulation')[0].innerHTML;
        let seatsAvailable = itemSimulation.getElementsByClassName('seats-simulation')[0].innerHTML;

        // get the current items in the cart
        let currentSimsList = JSON.parse(sessionStorage.getItem('cartProducts'));
        
        // check if any duplicated sim found
        if (currentSimsList) {
            let filterdSimList = currentSimsList.filter(sim =>
                sim.title === simulationTitle
            );
            // if there is duplication, stop adding to cart
            if (filterdSimList.length > 0) {
                return;
            }
        }

        // array containing the products in the cart
        let currentSimsInCart = JSON.parse(sessionStorage.getItem('cartProducts'));
        if (!currentSimsInCart) {
            cartProducts = [];
        } else {
            cartProducts = currentSimsInCart;
        }

        let newSimulation = new Simulation(simulationTitle, priceSimulation, startDateSimulation, endDateSimulation, seatsAvailable);
        cartProducts.push(newSimulation);
        // Saving array of simulation objects in local storage
        sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts));

        //Increase the number of sims within the cart icon
        displayCartItemsNumber();

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

