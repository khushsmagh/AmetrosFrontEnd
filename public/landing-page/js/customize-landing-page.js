window.addEventListener('load', function () {
    //get text color
    let textColor = document.getElementById('parner-info').style.color;
    let textColorInputNode = document.getElementById('textColorInput');
    textColorInputNode.value = textColor === "" ? "#010101" : textColor;

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

    //get color input node refs
    let color1InputNode = document.getElementById('color1Input');
    let color2InputNode = document.getElementById('color2Input');
    let color3InputNode = document.getElementById('color3Input');

    //function to update color in dom
    function updateColor(color1, color2, color3) {
        //update banner background color
        document.getElementById('banner-background').style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
        //update nav background color
        document.getElementsByClassName('navbar')[0].style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
        //update footer
        document.getElementById('footer').style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
    }

    //add event listner for color input change
    color1InputNode.addEventListener('change', function(e) {
        updateColor(color1InputNode.value, color2InputNode.value, color3InputNode.value)
    });
    color2InputNode.addEventListener('change', function (e) {
        updateColor(color1InputNode.value, color2InputNode.value, color3InputNode.value)
    });
    color3InputNode.addEventListener('change', function (e) {
        updateColor(color1InputNode.value, color2InputNode.value, color3InputNode.value)
    });

    //event listner for changing partner logo
    document.getElementById('fileUploadInput').addEventListener('change', function (e) {
        let fileName = e.target.value.split("\\").pop();
        document.getElementById("file-name").innerHTML = fileName;
    });
});