window.addEventListener('load' , function(){
    var selectPartnerName = document.getElementById("partner-select");
    const simsURL = "http://ametrosapi.x10.mx/partners";
    fetch(simsURL)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData);
            for (let i = 0; i < jsonData.length; i++) {
                var name = jsonData[i].partnerName;
                var id = jsonData[i].partnerID;
                console.log("name " + name);
                console.log("id " + id);
                var option = document.createElement("option");
                option.textContent = name;
                option.value = id;
                selectPartnerName.appendChild(option);
                console.log(jsonData[i].partnerName);
            }
        })
        .catch(error => console.log(error));
});