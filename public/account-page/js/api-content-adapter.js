

displayUserSimulations("b898362328b50e50bea680d4d3544e0d641a350669eb443104");

var mockedUpData = {
    "testUser":
        [
            {
                "sim-id": "1",
                "name": "Analysis and Critical Thinking",
                "start-date": "2019-02-08",
                "end-date": "2019-04-08",
                "status": "active",
                "avg-score": "80",
                "prg-modules": ["80", "85", "75", "90", "70", "0"]
            },
            {
                "sim-id": "2",
                "name": "Change Management",
                "start-date": "2019-02-23",
                "end-date": "2019-04-23",
                "status": "active",
                "avg-score": "80",
                "prg-modules": ["100", "70", "85", "65", "0", "0"]
            },
            {
                "sim-id": "3",
                "name": "Crisis Communication",
                "start-date": "2019-03-01",
                "end-date": "2019-05-01",
                "status": "active",
                "avg-score": "90",
                "prg-modules": ["100", "80", "90", "0", "0", "0"]
            }
        ]
};

var resultAPI = JSON.stringify(mockedUpData);

var result = JSON.parse(resultAPI);

var simulations = result['testUser'];

// console.log(simulations[0]["prg-modules"][0]);

userSimulations(result);

// Update Simulation Details
function showDetails(id) {
    // console.log(id);
    const detailsElement = document.getElementById("sim-details");
    const detailsTitle = document.getElementById("title-details");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const status = document.getElementById("status");
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

function userSimulations(result) {
    var tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];;
    var rows = "";
    for (let i = 0; i < result['testUser'].length; i++) {
        const element = result['testUser'][i];
        var row = '<tr class="table-row"><td id ="' + element['sim-id'] + '" class="table-data custom-font" onclick = "showDetails(' + element['sim-id'] + ');" > ' + element['name'] + ' </td ></tr >'
        rows += '\r\n' + (row) + '\r\n';
    }
    tableBody.innerHTML = rows;
}

function displayUserSimulations(token) {
    const simsURL = "http://ametrosapi.x10.mx/simulations";
    let url = simsURL + "?token=" + token;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData);
            for (let i = 0; i < jsonData.length; i++) {
                console.log(jsonData[i]);
            }
        })
        .catch(error => console.log(error));
}

// Hide Simulation Details
(function () {
    document.getElementById("sim-details").style.display = "none";
})();