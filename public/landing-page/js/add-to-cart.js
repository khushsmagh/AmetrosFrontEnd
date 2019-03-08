// dummy data
const listSims = [
    {
        Name: "Soft-skills",
        Price: 200,
        StartDate: '2019-03-02',
        EndDate : '2023-03-02',
        SeatAvailable : 20
    },
    {
        Name: "Hard-skills",
        Price: 400,
        StartDate: '2019-03-02',
        EndDate: '2023-03-02',
        SeatAvailable: 30
    },
    {
        Name: "Web-skills",
        Price: 700,
        StartDate: '2019-03-02',
        EndDate: '2023-03-02',
        SeatAvailable: 40
    }
];

const tableBody = document.getElementById('table-content');

window.addEventListener('load' , function(){
    // for each element in the data list
    // follow these steps below
    listSims.forEach((item, index) => {
        // step 1 create table row (tr) element
        let tableRow = createHtmlElement('tr');

        // step 2 create table cells(td) elements
        let tableCellNumber = createHtmlElement('td');
        let tableCellName = createHtmlElement('td');
        let tableCellPrice = createHtmlElement('td');
        let tableCellStartDate = createHtmlElement('td');
        let tableCellEndDate = createHtmlElement('td');
        let tableCellSeatAvailable = createHtmlElement('td');
        let tableCellRemoveButton = createHtmlElement('td');

        // create remove button for each row
        let deleteButton = createRemovedButton();

        // step 3 append data to all cells
        tableCellNumber.append(index + 1);
        tableCellName.append(item.Name);
        tableCellPrice.append("$" + item.Price);
        tableCellStartDate.append(item.StartDate);
        tableCellEndDate.append(item.EndDate);
        tableCellSeatAvailable.append(item.SeatAvailable);
        tableCellRemoveButton.append(deleteButton);

        // step 4 append all cell elements to the table row
        tableRow.appendChild(tableCellNumber);
        tableRow.appendChild(tableCellName);
        tableRow.appendChild(tableCellPrice);
        tableRow.appendChild(tableCellStartDate);
        tableRow.appendChild(tableCellEndDate);
        tableRow.appendChild(tableCellSeatAvailable);
        tableRow.appendChild(tableCellRemoveButton);

        // step 4 append row to table body
        tableBody.appendChild(tableRow);
    });   
});

function createRemovedButton(){
    // create delete button
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'btn btn-danger');
    deleteButton.innerHTML = "X";
    // adding click event for delete button
    deleteButton.addEventListener('click', function() {
        // get the row that contains the button
        let currentRow = this.parentElement.parentElement;
        // get the table that contains the row
        let currentTable = currentRow.parentElement;
        // remove the row from the table
        currentTable.removeChild(currentRow);
    });
    return deleteButton;
}

function createHtmlElement(element) {
    return document.createElement(element);
}
