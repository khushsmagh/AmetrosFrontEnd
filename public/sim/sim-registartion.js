class SelectedSimulation {
    constructor(title, price, startDate, endDate, seatsAvailable) {
        this.title = title;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.seatsAvailable = seatsAvailable;
    }
}

window.addEventListener('load', function () {

    var selectedSim = [];

    function showRegistrationInfo(event) {
        let buttonAdd = event.target;
        let itemSimulation = buttonAdd.parentElement.parentElement.parentElement;
        let simulationTitle = itemSimulation.getElementsByClassName('title-simulation')[0].innerHTML;
        let priceSimulation = itemSimulation.getElementsByClassName('price-simulation')[0].innerHTML;
        let startDateSimulation = itemSimulation.getElementsByClassName('start-simulation')[0].innerHTML;
        let endDateSimulation = itemSimulation.getElementsByClassName('end-simulation')[0].innerHTML;
        let seatsAvailable = itemSimulation.getElementsByClassName('seats-simulation')[0].innerHTML;

        let newSimulation = new SelectedSimulation(simulationTitle, priceSimulation, startDateSimulation, endDateSimulation, seatsAvailable);
        selectedSim.push(newSimulation);
        // Saving array of simulation objects in local storage
        sessionStorage.setItem('selectedSim', JSON.stringify(selectedSim));
        // Displaying all simulations objects in console log
        for (let index = 0; index < selectedSim.length; index++) {
            console.log(selectedSim[index]);
        }
    }
    let registeredButton = document.getElementsByClassName("registerSimulation");
    for (let index = 0; index < registeredButton.length; index++) {
        registeredButton[index].addEventListener('click', showRegistrationInfo);
    };
});