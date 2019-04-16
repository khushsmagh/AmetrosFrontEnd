// Simulation class with properties
class Simulation {
    constructor(title, price, startDate, endDate, seatsAvailable) {
        this.title = title;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.seatsAvailable = seatsAvailable;
    }
}

// References for html elements
const partnerName = document.getElementById('partner-name');
const partnerDescription = document.getElementById('partner-description');
const partnerLogo = document.getElementById('partner-logo');
const partnerBanner = document.getElementById('banner-background');
let messageDiv = document.getElementById('addCart-message');
// by default it is hidden 
messageDiv.setAttribute('style', 'visibility: hidden');
let cartProducts;

window.addEventListener('load', function () {
    displayCartItemsNumber();
    displaySimulationsOfPartner();
});

/**
 * This method is to fecht data for partner infomartion
 * and populate it 
 */
function displayPartnerInfo() {
    const URL = "https://localhost:8000/styles/bvc";
    fetch(URL)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            // store the partner data into session storage
            sessionStorage.setItem('partnerData', JSON.stringify(jsonData));
            // mapping data to html elements for partner info
            partnerName.innerHTML = jsonData.name;
            partnerDescription.innerHTML = jsonData.description;
            partnerLogo.setAttribute('src', jsonData.logoUrl);
            // apply partner current color theme to whole page
            applyColorTheme(jsonData.styles.color1, jsonData.styles.color2, jsonData.styles.color3,
                jsonData.styles.color4, jsonData.styles.color5, jsonData.styles.color6);
        })
        .catch(err => console.log(err));
}

/**
 * This method is to appply styles data of currenr partner
 * to corresponding html elements
 * @param {*} textColor 
 * @param {*} color1 
 * @param {*} color2 
 * @param {*} color3 
 */
function applyColorTheme(textColor, color1, color2, color3, color4, color5) {

    //update banner background color
    document.getElementById('banner-background').style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
    //update nav background color
    document.getElementsByClassName('navbar')[0].style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
    //update footer
    document.getElementById('footer').style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
    //update banner text color
    document.getElementById('banner-background').style.color = `${textColor}`;

    // select all a tags within navbar
    let aTags = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
    for (let index = 0; index < aTags.length; index++) {
        aTags[index].style.color = `${textColor}`;
    }
    document.getElementsByClassName('navbar')[0].style.color = `${textColor}`;
    document.getElementById('footer').style.color = `${textColor}`;

    const simHeaders = document.getElementsByClassName('sim-theme');
    for (let index = 0; index < simHeaders.length; index++) {
        const sim = simHeaders[index];
        sim.style.color = textColor;
        sim.style.background = color5;
    }
    const simBtns = document.getElementsByClassName("sim-btn");
    for (let index = 0; index < simBtns.length; index++) {
        const btn = simBtns[index];
        btn.style.color = textColor;
        btn.style.background = color5;
    }
}

/**
 * This method is to fetch all simulations of current partner
 * and display them
 */
function displaySimulationsOfPartner() {
    const simsURL = "https://localhost:8000/sims";
    fetch(simsURL)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            // populate sims using response data
            populateSims(jsonData.sims);
            displayPartnerInfo();
        })
        .catch(error => console.log(error));
}

/**
 * This method is to build html view for each simulation
 * based on the data response from api
 * @param {*} jsonObject 
 */
function populateSims(jsonObject) {

    // loop for each sim data and display it 
    // on landing page
    jsonObject.forEach(sim => {
        // build a boostrap row. bt = boostrap
        let btRow = document.createElement('div');
        let btRowClassAttributes = 'row bg-light mt-4 border border-dark rounded';
        btRow.setAttribute('class', btRowClassAttributes);

        // build a boostrap col to contain
        // sim image
        let btColSimImage = document.createElement('div');
        btColSimImage.setAttribute('class', 'col-md-3 my-3');

        // create image element and set src attrs
        // then append it to col image
        let simImage = document.createElement('img');
        simImage.setAttribute('src', sim.simPhotoURL);
        simImage.setAttribute('class', 'img-fluid');
        simImage.setAttribute('alt', 'sim-image');
        btColSimImage.appendChild(simImage);

        // build a bootstrap col to contain
        // sim info
        let btColSimInfo = document.createElement('div');
        let btColSimInfoAttributes = 'col-md-9 mt-3';
        btColSimInfo.setAttribute('class', btColSimInfoAttributes);

        // build ul node to contains list of data of current sim
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'list-group');
        // build list of li node for each sim data
        let liNodeForSimName = document.createElement('li');
        let liNodeForSimPrice = document.createElement('li');
        let liNodeForSimStartDate = document.createElement('li');
        let liNodeForSimEndDate = document.createElement('li');
        let liNodeForSimSeatAvailable = document.createElement('li');

        let liNodeAttr = 'list-group-item';
        let liNodeAttrForName = 'list-group-item sim-title sim-theme text-center title-simulation';

        // adding class attr for all li and append
        // sim data to it

        // For Sim Name
        liNodeForSimName.setAttribute('class', liNodeAttrForName);
        liNodeForSimName.innerHTML = sim.simName;

        // For Sim Price
        liNodeForSimPrice.setAttribute('class', liNodeAttr);
        let spanPrice = document.createElement('span');
        spanPrice.setAttribute('class', 'price-simulation');
        spanPrice.append(sim.simPrice);
        let textPrice = document.createTextNode('Price: $');
        liNodeForSimPrice.append(spanPrice);
        spanPrice.parentNode.insertBefore(textPrice, spanPrice);

        // For Sim Start Date
        liNodeForSimStartDate.setAttribute('class', liNodeAttr);
        let spanStartDate = document.createElement('span');
        spanStartDate.setAttribute('class', 'start-simulation');
        spanStartDate.append(sim.simStartDate);
        let textStartDate = document.createTextNode('Start Date: ');
        liNodeForSimStartDate.append(spanStartDate);
        spanStartDate.parentNode.insertBefore(textStartDate, spanStartDate);

        // For Sim End Date
        liNodeForSimEndDate.setAttribute('class', liNodeAttr);
        let spanEndDate = document.createElement('span');
        spanEndDate.setAttribute('class', 'end-simulation');
        spanEndDate.append(sim.simEndDate);
        let textEndDate = document.createTextNode('End Date: ');
        liNodeForSimEndDate.append(spanEndDate);
        spanEndDate.parentNode.insertBefore(textEndDate, spanEndDate);

        // For Seat Available
        liNodeForSimSeatAvailable.setAttribute('class', liNodeAttr);
        let spanSeatAvailable = document.createElement('span');
        spanSeatAvailable.setAttribute('class', 'badge badge-secondary seats-simulation');
        spanSeatAvailable.append(sim.simLimitSeats);
        let textSeatAvailable = document.createTextNode('Seat Available: ');
        liNodeForSimSeatAvailable.append(spanSeatAvailable);
        spanSeatAvailable.parentNode.insertBefore(textSeatAvailable, spanSeatAvailable);

        // append all li nodes to ul
        ul.appendChild(liNodeForSimName);
        ul.appendChild(liNodeForSimPrice);
        ul.appendChild(liNodeForSimStartDate);
        ul.appendChild(liNodeForSimEndDate);
        ul.appendChild(liNodeForSimSeatAvailable);

        // build buttons for each sim
        let buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('class', 'd-flex justify-content-center');

        let addToCartButton = document.createElement('button');
        addToCartButton.setAttribute('class', 'btn sim-btn btn-primary my-4 ml-3 simulationAdd');
        addToCartButton.innerHTML = "Add To Cart";

        // add event click handler for add-to-cart button
        addToCartButton.addEventListener('click', addToCart);

        // append two buttons to container
        buttonsContainer.appendChild(addToCartButton);

        // append both ul and button contaner to
        // btColSimInfo
        btColSimInfo.appendChild(ul);
        btColSimInfo.appendChild(buttonsContainer);

        // append colImage and colInfo to row
        btRow.appendChild(btColSimImage);
        btRow.appendChild(btColSimInfo);

        // append all col sim to root div
        rootDiv = document.getElementById('sims-container');
        if (rootDiv !== null) {
            rootDiv.appendChild(btRow);
        }
    });
}

/**
 * This method is an event-handler to add the simulation to cart
 * @param {*} event 
 */
function addToCart(event) {
    let buttonAdd = event.target;
    let itemSimulation = buttonAdd.parentElement.parentElement.parentElement;
    let simulationTitle = itemSimulation.getElementsByClassName('title-simulation')[0].innerHTML;
    let priceSimulation = itemSimulation.getElementsByClassName('price-simulation')[0].innerHTML;
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

/**
 * This method is to display the current number  of 
 * simulations in the cart
 */
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
