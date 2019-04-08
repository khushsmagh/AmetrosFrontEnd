// References for html elements
const partnerName = document.getElementById('partner-name');
const partnerDescription = document.getElementById('partner-description');
const partnerLogo = document.getElementById('partner-logo');
const partnerBanner = document.getElementById('banner-background');
const wholePage = document.getElementsByTagName('body');

window.addEventListener('load', function() {
    displayPartnerInfo();
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