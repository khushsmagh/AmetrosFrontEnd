// Reference to the tbody of table
// on which the sin data will be displayed as row
const tableBody = document.getElementById('table-content');
window.addEventListener('load' , function(){

    // Get list of selected sim from session storage
    const listSims = getLatestListSim();

    // for each element in the data list
    // follow these steps below
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

        // step 5 append row to table body
        tableBody.appendChild(tableRow);
    });   
});

function createHtmlElement(element) {
    return document.createElement(element);
}

function getLatestListSim() {
    return JSON.parse(sessionStorage.getItem('cartProducts'));
}
