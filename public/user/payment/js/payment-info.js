// Reference to the tbody of table
// on which the sin data will be displayed as row
const tableBody = document.getElementById('table-content');
window.addEventListener('load' , function(){

    var loaderSpin = setTimeout(showPaymentPage, 3000);

    // Get list of selected sim from session storage
    const listSims = getLatestListSim();


    // for each element in the data list
    // follow these steps below
    var totalPrice = 0;
    listSims.forEach((item, index) => {
        // step 1 create table row (tr) element
        let tableRow = createHtmlElement('tr');

        // step 2 create table cells(td) elements
          
        let tableCellNumber = createHtmlElement('td');
        let tableCellName = createHtmlElement('td');
        let tableCellPrice = createHtmlElement('td');

        tableCellNumber.append(index + 1);
        tableCellName.append(item.title);
        tableCellPrice.append("$" + item.price);

        // step 4 append all cell elements to the table row
        tableRow.appendChild(tableCellNumber);
        tableRow.appendChild(tableCellName);
        tableRow.appendChild(tableCellPrice);

        console.log(item.price);
        //add item price
        totalPrice += parseInt(item.price);

        // step 5 append row to table body
        tableBody.appendChild(tableRow);
    });  
    
        //total
        let tableRow = createHtmlElement('tr');
        let tableCellNumber = createHtmlElement('td');
        let tableCellName = createHtmlElement('td');
        let tableCellPrice = createHtmlElement('td');

       //making bold
        let name = document.createElement("b");
        name.textContent = "Total: ";
        let tot = document.createElement("b");
        tot.textContent = "$" + totalPrice;
        
        tableCellNumber.append();
        tableCellName.append(name);
        tableCellPrice.append(tot);
        tableRow.appendChild(tableCellNumber);
        tableRow.appendChild(tableCellName);
        tableRow.appendChild(tableCellPrice);

        tableBody.appendChild(tableRow);

        sessionStorage.removeItem('cartProducts');
    console.log(totalPrice);
    
});

let pdata = JSON.parse(sessionStorage.getItem('partnerData'));
document.getElementsByClassName('navbar')[0].style.background = `linear-gradient(90deg, ${pdata.styles.color2}, ${pdata.styles.color3}, ${pdata.styles.color4})`;


function createHtmlElement(element) {
    return document.createElement(element);
}

function getLatestListSim() {
    return JSON.parse(sessionStorage.getItem('cartProducts'));
}

function showPaymentPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("displayPaymentInfo").style.display = "block";
}

