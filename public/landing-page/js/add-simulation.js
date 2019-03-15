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
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
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
