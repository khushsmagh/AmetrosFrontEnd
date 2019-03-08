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
        let tableRow = document.createElement('tr');

        // step 2 create table cells(td) elements
        let tableCellNumber = document.createElement('td');
        let tableCellName = document.createElement('td');
        let tableCellPrice = document.createElement('td');
        let tableCellStartDate = document.createElement('td');
        let tableCellEndDate = document.createElement('td');
        let tableCellSeatAvailable = document.createElement('td');
        let tableCellRemoveButton = document.createElement('td');

        // create remove button for each row
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn btn-danger');
        deleteButton.innerHTML = "X";

        // append data to each cell
        tableCellNumber.append(index + 1);
        tableCellName.append(item.Name);
        tableCellPrice.append("$" + item.Price);
        tableCellStartDate.append(item.StartDate);
        tableCellEndDate.append(item.EndDate);
        tableCellSeatAvailable.append(item.SeatAvailable);
        tableCellRemoveButton.append(deleteButton);

        // step 3 append all cells to the table row
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