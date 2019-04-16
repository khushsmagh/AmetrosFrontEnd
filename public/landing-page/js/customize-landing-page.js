

window.addEventListener('load', function () {
    //get text color
    let textColor = document.getElementById('parner-info').style.color;
    let textColorInputNode = document.getElementById('textColorInput');
    textColorInputNode.value = textColor === "" ? "#010101" : textColor;

    //show default values in form
    let partnerData = JSON.parse(sessionStorage.getItem("partnerData"));
    document.getElementById('partnerNameInput').value = partnerData.name;
    document.getElementById('partnerDesriptionInput').value = partnerData.description;
    document.getElementById('partnerUrlInput').value = partnerData.url;
    document.getElementById('partnerLogoInput').value = partnerData.logoUrl;
    document.getElementById('partner-logo').src = partnerData.logoUrl;
    document.getElementById('textColorInput').value = partnerData.color1;
    document.getElementById('color1Input').value = partnerData.styles.color2;
    document.getElementById('color2Input').value = partnerData.styles.color3;
    document.getElementById('color3Input').value = partnerData.styles.color4;
    document.getElementById('color4Input').value = partnerData.styles.color5;
    document.getElementById('color5Input').value = partnerData.styles.color6;

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
   

    function updateColor(textColor, color1, color2, color3, color4, color5) {
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
        const simHeaders = document.getElementsByClassName('sim-theme');
        for (let index = 0; index < simHeaders.length; index++) {
            const sim = simHeaders[index];
            sim.style.color = textColor;
            sim.style.background = color4;
        }
    }

    //initialize page
    const partnerInfo = JSON.parse(sessionStorage.getItem('partnerData'));
    const styles = partnerInfo.styles;
    updateColor(styles.color1, styles.color2, styles.color3, styles.color4, styles.color5, styles.color6);
    document.getElementById('partner-name').innerHTML = partnerInfo.name;
    document.getElementById('partner-description').innerHTML = partnerInfo.description;
    document.getElementById('partner-logo').innerHTML = partnerInfo.logoUrl;


    //add event listner for color input change
    color1InputNode.addEventListener('change', function(e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value, color4InputNode.value, color5InputNode.value);
    });
    color2InputNode.addEventListener('change', function (e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value, color4InputNode.value, color5InputNode.value);
    });
    color3InputNode.addEventListener('change', function (e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value, color4InputNode.value, color5InputNode.value);
    });
    color4InputNode.addEventListener('change', function (e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value, color4InputNode.value, color5InputNode.value);
    });
    color5InputNode.addEventListener('change', function (e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value, color4InputNode.value, color5InputNode.value);
    });
    //event listner for text color on change
    textColorInputNode.addEventListener('change', function (e) {
        updateColor(textColorInputNode.value, color1InputNode.value, color2InputNode.value, color3InputNode.value, color4InputNode.value, color5InputNode.value);
    });

    //submit btn event listner
    document.getElementById('submitCustomizeForm').addEventListener('click', function (e) {
       const postUrl = " http://ametrosapi.x10.mx/styles";
       const logoInput = document.getElementById("partnerLogoInput").value;
       const urlInput = document.getElementById('partnerUrlInput').value;
       const nameInput = document.getElementById('partnerNameInput').value;
       const descriptionInput = document.getElementById('partnerDesriptionInput').value;
       if (nameInput === "" || logoInput === "" || urlInput === "" || descriptionInput === "") {
           alert('please fill all the required field.');
           return;
       }
       const data = {
           name : nameInput,
           description : descriptionInput,
           url : urlInput,
           logoUrl : logoInput,
           styles : {
                color1: textColorInputNode.value,
                color2: color1InputNode.value,
                color3: color2InputNode.value,
                color4: color3InputNode.value,
                color5: color4InputNode.value,
                color6: color5InputNode.value,
           },
           token: sessionStorage.getItem("token")
       }
       console.log(JSON.stringify(data));
       const postBody = {
            method: "POST",
            body: JSON.stringify(data),
       };
       fetch(postUrl, postBody)
       .then(response => {
               return response.json();
           })
        .then((data) => {
            if (data.Status && data.Status === "error") {
                alert("Error occured updating content. PLease try again.");
                return;
            }
            window.location.href = "../html/landing-page.html";
        })
        .catch(() => {
            alert("Error occured updating content. PLease try again.");
        });
    });

    //cancel btn event listner
    document.getElementById('cancelCustomizeForm').addEventListener('click', function (e) {
        window.location.href = "../html/landing-page.html";
    });
});