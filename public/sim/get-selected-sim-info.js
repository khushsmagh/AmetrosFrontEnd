const getSelectedInfo = JSON.parse(sessionStorage.getItem('selectedSim'));
console.log(getSelectedInfo[0].title);
window.addEventListener('load', function () {
    let simulationNameInfo = getSelectedInfo[0].title;
    let seatsAvailableInfo = getSelectedInfo[0].seatsAvailable;
    let priceInfo = getSelectedInfo[0].price;
    let startDateInfo = getSelectedInfo[0].startDate;
    let endDateInfo = getSelectedInfo[0].endDate;
    document.getElementById("simulationName").innerHTML = simulationNameInfo;
    document.getElementById("seatsLeft").innerHTML = seatsAvailableInfo;
    document.getElementById("price").innerHTML = priceInfo;
    document.getElementById("startDate").innerHTML = startDateInfo;
    document.getElementById("endDate").innerHTML = endDateInfo;
});