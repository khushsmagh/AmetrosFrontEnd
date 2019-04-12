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

    //get color input node refs
    let color1InputNode = document.getElementById('color1Input');
    let color2InputNode = document.getElementById('color2Input');
    let color3InputNode = document.getElementById('color3Input');
    let color4InputNode = document.getElementById('color4Input');
    let color5InputNode = document.getElementById('color5Input');

    function updateColor(textColor, color1, color2, color3) {
        console.log(color1 + " " + color2);
        //update banner background color
        document.getElementById('banner-background').style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
        //update nav background color
        document.getElementsByClassName('navbar')[0].style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
        //update footer
        document.getElementById('footer').style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
        //update banner text color
        document.getElementById('banner-background').style.color = `${textColor}`;

        // select all a tags within navbar
        let aTags = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
        for (let index = 0; index < aTags.length; index++) {
            aTags[index].style.color = `${textColor}`;
        }
        document.getElementsByClassName('navbar')[0].style.color = `${textColor}`;
        document.getElementById('footer').style.color = `${textColor}`;
    }

    //add event listner for color input change
    color1InputNode.addEventListener('change', function(e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value);
    });
    color2InputNode.addEventListener('change', function (e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value);
    });
    color3InputNode.addEventListener('change', function (e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value);
    });
    //event listner for text color on change
    textColorInputNode.addEventListener('change', function (e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value);
    });

    //submit btn event listner
    document.getElementById('submitCustomizeForm').addEventListener('click', function (e) {
       const postUrl = "https://localhost:8000/partner";
       const data = {
           name : "Bow Valley College",
           description : "welcome to our page.",
           url : "bvc",
           logo : "bvc.ca",
           color1 : textColorInputNode.value,
           color2 : color1InputNode.value,
           color3 : color2InputNode.value,
           color4 : color3InputNode.value,
           color5 : color4InputNode.value,
           color6 : color5InputNode.value,
       }
       const postBody = {
            method: "POST",
            mode: "cors",
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", 
            referrer: "no-referrer",
            body: JSON.stringify(data),
       };
       fetch(postUrl, postBody)
        .then(console.log)
        .catch(console.log);
    });

    //cancel btn event listner
    document.getElementById('cancelCustomizeForm').addEventListener('click', function (e) {
        window.location.href = "../html/landing-page.html";
    });
});