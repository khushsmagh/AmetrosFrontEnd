if (sessionStorage.getItem("refresh") !== null && sessionStorage.getItem("refresh") === "true") {
    getUserSimulations(sessionStorage.getItem("token"));
}
sessionStorage.setItem("refresh", true);

var result = JSON.parse(sessionStorage.getItem("user-simulations"));

var simulations = result;

// Hide Simulation Details
(function () {
    document.getElementById("sim-details").style.display = "none";
})();

userSimulations(result);

// Update Simulation Details
function showDetails(id) {
    // console.log(id);
    const detailsElement = document.getElementById("sim-details");
    const detailsTitle = document.getElementById("title-details");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const status = document.getElementById("status");
    const avgScore = document.getElementById("avgScore");
    const module1Score = document.getElementById("module1Score");
    const module2Score = document.getElementById("module2Score");
    const module3Score = document.getElementById("module3Score");
    const module4Score = document.getElementById("module4Score");
    const module5Score = document.getElementById("module5Score");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    const bar4 = document.getElementById("bar4");
    const bar5 = document.getElementById("bar5");

    detailsElement.style.display = "block";

    (function () {
        simulations.forEach(simulation => {
            // console.log(result);
            if (simulation["sim-id"] == id) {
                detailsTitle.innerHTML = simulation["name"];
                startDate.innerHTML = simulation["start-date"];
                endDate.innerHTML = simulation["end-date"];
                status.innerHTML = simulation["status"];
                avgScore.innerHTML = simulation["avg-score"];
                module1Score.innerHTML = simulation["prg-modules"][0];
                module2Score.innerHTML = simulation["prg-modules"][1];
                module3Score.innerHTML = simulation["prg-modules"][2];
                module4Score.innerHTML = simulation["prg-modules"][3];
                module5Score.innerHTML = simulation["prg-modules"][4];
                bar1.style.width = simulation["prg-modules"][0] + "%";
                bar2.style.width = simulation["prg-modules"][1] + "%";
                bar3.style.width = simulation["prg-modules"][2] + "%";
                bar4.style.width = simulation["prg-modules"][3] + "%";
                bar5.style.width = simulation["prg-modules"][4] + "%";
            }
        });
    })()
};

function userSimulations(mResult) {
    var tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];;
    var rows = "";
    for (let i = 0; i < mResult.length; i++) {
        const element = mResult[i];
        var row = '<tr class="table-row"><td id ="' + element['sim-id'] + '" class="table-data custom-font" onclick = "showDetails(' + element['sim-id'] + ');" > ' + element['name'] + ' </td ></tr >'
        rows += '\r\n' + (row) + '\r\n';
    }
    tableBody.innerHTML = rows;
}

function getUserSimulations(token) {
    const simsURL = "http://ametrosapi.x10.mx/simulations";
    let url = simsURL + "?token=" + token;
    fetch(url, {cache: "no-cache"})
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            sessionStorage.setItem('user-simulations', JSON.stringify(jsonData));
            sessionStorage.setItem("refresh", false);
            window.location.reload(true);
        })
        .catch(error => console.log(error));
}

function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("user-simulations");
}

