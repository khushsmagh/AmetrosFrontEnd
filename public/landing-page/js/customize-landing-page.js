window.addEventListener('load', function () {
    //get text color
    let textColor = document.getElementById('parner-info').style.color;
    let textColorInputNode = document.getElementById('textColorInput');
    textColorInputNode.value = textColor === "" ? "#010101" : textColor;
    //get banner background color
    let bannerBgColor = document.getElementById('banner-background').style.backgroundColor;
    let bannerBackgroundInputNode = document.getElementById('bannerBackgroundInput');
    bannerBackgroundInputNode.value = bannerBgColor === "" ? "#E9ECEF" : bannerBgColor;

    //event listner for partner name change
    const defaultPartnerName = document.getElementById('partner-name').innerHTML;
    document.getElementById('partnerNameInput').addEventListener('keyup', function (e) {
        let partnerNameNode = document.getElementById('partner-name');
        partnerNameNode.innerHTML = e.target.value === "" ? defaultPartnerName : e.target.value;
    });

    //event listner for partner description change
    const defaultPartnerDescription = "Welcome to " + defaultPartnerName;
    document.getElementById('partnerDesriptionInput').addEventListener('keyup', function (e) {
        if (e.target.value.length > 500) {
            return;
        }
        let partnerDescriptionNode = document.getElementById('partner-description');
        partnerDescriptionNode.innerHTML = e.target.value === "" ? defaultPartnerDescription : e.target.value;
    });

    //event listner for text color on change
    textColorInputNode.addEventListener('change', function (e) {
        document.getElementById('parner-info').style.color = e.target.value;
    });

    //event listner for banner background on change
    bannerBackgroundInputNode.addEventListener('change', function (e) {
        document.getElementById('banner-background').style.backgroundColor = e.target.value;
    });

    //event listner for changing partner logo
    document.getElementById('fileUploadInput').addEventListener('change', function (e) {
        let fileName = e.target.value.split("\\").pop();
        document.getElementById("file-name").innerHTML = fileName;
    });
});