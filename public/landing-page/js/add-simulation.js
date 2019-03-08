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
    // array containing the products in the cart
    var cartProducts = [];
    // Function to add simulations to an array
    function addToCart(event){
        let buttonAdd = event.target;
        let itemSimulation = buttonAdd.parentElement.parentElement;
        let simulationTitle = itemSimulation.getElementsByClassName('title-simulation')[0].innerHTML
        let priceSimulation  = itemSimulation.getElementsByClassName('price-simulation')[0].innerHTML
        let startDateSimulation = itemSimulation.getElementsByClassName('start-simulation')[0].innerHTML
        let endDateSimulation = itemSimulation.getElementsByClassName('end-simulation')[0].innerHTML
        let seatsAvailable = itemSimulation.getElementsByClassName('seats-simulation')[0].innerHTML
        
        let newSimulation = new Simulation(simulationTitle, priceSimulation, startDateSimulation, endDateSimulation, seatsAvailable);
        cartProducts.push(newSimulation);
        console.log(cartProducts[0]);  
    };

    let addToCartButtons = document.getElementsByClassName('simulationAdd');
    for (let index = 0; index < addToCartButtons.length; index++) {
        addToCartButtons[index].addEventListener('click', addToCart);   
    }; 
});
