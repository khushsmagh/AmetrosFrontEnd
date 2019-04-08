// References for html elements
const partnerName = document.getElementById('partner-name');
const partnerDescription = document.getElementById('partner-description');
const partnerLogo = document.getElementById('partner-logo');
const partnerBanner = document.getElementById('banner-background');
const wholePage = document.getElementsByTagName('body');

window.addEventListener('load', function() {
    //displayPartnerInfo();
    //displaySimulationsOfPartner();
});

function displayPartnerInfo() {
    /** 
     * Examplr of response obj after fetch api for
     * partner information
     * partner = {
     *  "name" : "Bow Valley",
     *  "url" : "bvc",
     *  "description" : "lorem lorem lorem",
     *  "logo_url" : "https://bvc.logo.png",
     *  "backgroundColor" : "#ff076",
     *  "textColor" : "#000",
     *  "theme" : "theme1"
     * }
    */
    const URL = "https://jsonplaceholder.typicode.com/users";
    
    fetch(URL)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            // mapping data to html elements for partner info
            partnerName.innerHTML = jsonData.name;
            partnerDescription.innerHTML = jsonData.description;
            partnerLogo.setAttribute('src', jsonData.logo_url);
            partnerBanner.style.backgroundColor = jsonData.backgroundColor;
            partnerBanner.style.color = jsonData.textColor;
            // apply partner current theme to whole page
            wholePage.setAttribute('class', jsonData.theme);
        })
        .catch(err => console.log(err));
}

function displaySimulationsOfPartner() {
    /*
        Example of api response
        sims = [
            {
                simID : 1,
                simName: "Soft Software Simulations",
                simPhotoURL: "",
                simPrice: 300,
                simStartDate: "",
                simEndDate: "",
                simLimitSeats: 30
            },
            {
                simID : 2,
                simName: "Math Simulations",
                simPhotoURL: "",
                simPrice: 400,
                simStartDate: "",
                simEndDate: "",
                simLimitSeats: 35
            },
            {
                simID : 3,
                simName: "Science Simulations",
                simPhotoURL: "",
                simPrice: 450,
                simStartDate: "",
                simEndDate: "",
                simLimitSeats: 40
            }
        ]
    */
    const simsURL = "https://bowvalley/sims";
    fetch(simsURL)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            // populate sims using response data
            populateSims(jsonData);
        })
        .catch(error => console.error(error));
}

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
        let liNodeAttrForName = 'list-group-item active';

        // adding class attr for all li and append
        // sim data to it
        liNodeForSimName.setAttribute('class', liNodeAttrForName);
        liNodeForSimName.innerHTML = sim.simName;

        liNodeForSimPrice.setAttribute('class', liNodeAttr);
        liNodeForSimPrice.innerHTML = sim.simPrice;

        liNodeForSimStartDate.setAttribute('class', liNodeAttr);
        liNodeForSimStartDate.innerHTML = sim.simStartDate;

        liNodeForSimEndDate.setAttribute('class', liNodeAttr);
        liNodeForSimEndDate.innerHTML = sim.simEndDate;

        liNodeForSimSeatAvailable.setAttribute('class', liNodeAttr);
        liNodeForSimSeatAvailable.innerHTML = sim.simSeatAvailable;

        // append all li nodes to ul
        ul.appendChild(liNodeForSimName);
        ul.appendChild(liNodeForSimPrice);
        ul.appendChild(liNodeForSimStartDate);
        ul.appendChild(liNodeForSimEndDate);
        ul.appendChild(liNodeForSimSeatAvailable);

        // build buttons for each sim
        let buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('class', 'd-flex justify-content-center');

        let aNode = document.createElement('a');
        aNode.setAttribute('href', '../../sim/sim-registration.html');
        let registerButton = document.createElement('button');
        registerButton.setAttribute('class', 'btn btn-success my-4');
        registerButton.innerHTML = "Register";
        aNode.appendChild(registerButton);

        let addToCartButton = document.createElement('button');
        addToCartButton.setAttribute('class', 'btn btn-primary my-4 ml-3');
        addToCartButton.innerHTML = "Add To Cart";

        // Handle event click for add to cart button
        let counter = 0;
        addToCartButton.addEventListener('click', function () {
            counter++;
            if (counter > 1) {
                return;
            }
            // access to sims col info
            let parentNode = this.parentElement.parentElement;
            // Retrieve sim data
            let simName = parentNode.firstChild.childNodes[0].innerHTML;
            let simPrice = parentNode.firstChild.childNodes[1].innerHTML;
            let simStartDate = parentNode.firstChild.childNodes[2].innerHTML;
            let simEndDate = parentNode.firstChild.childNodes[3].innerHTML;
            let simSeatAvailable = parentNode.firstChild.childNodes[4].innerHTML;

            // Build Sim Obj containing sim data
            let simObj = {
                simName: simName,
                simPrice: simPrice,
                simStartDate: simStartDate,
                simEndDate: simEndDate,
                simSeatAvailable: simSeatAvailable
            };

            // add clicked sim obj to list
            simList.push(simObj);
            console.log(simList);

            // save list of simObj to session storage
            sessionStorage.setItem('simsList', JSON.stringify(simList));
        });

        // append two buttons to container
        buttonsContainer.appendChild(aNode);
        buttonsContainer.appendChild(addToCartButton);

        // append both ul and button contaner to
        // btColSimInfo
        btColSimInfo.appendChild(ul);
        btColSimInfo.appendChild(buttonsContainer);

        // append colImage and colInfo to row
        btRow.appendChild(btColSimImage);
        btRow.appendChild(btColSimInfo);

        // append all col sim to root div
        rootDiv.appendChild(btRow);
    });
}

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