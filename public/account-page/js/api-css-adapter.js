// Getting style sheet
var styleSheets = document.styleSheets;

var cssFileName = "/customx.css";

for (var i = 0; i < document.styleSheets.length; i++) {
    if (styleSheets[i].href.endsWith(cssFileName)) {
        var myCss = styleSheets[i];
    }
}

// Bow Valley Mockup
var mockedUpResponse = {
    name: "Bow Valley College",
    description: "lorem lorem",
    "logoUrl": "https://pbs.twimg.com/profile_images/694569186547228672/OUBh79wL_400x400.jpg",
    styles: {
        color1: "rgba(32,62,106,1)", // Darker Blue
        color2: "rgba(30,75,148,1)", // Dark Blue
        color3: "rgba(73,162,219,1)", // Light Blue
        color4: "rgba(242,150,41,1)", // Gold
        color5: "rgba(244,244,244,1)", // White
        color6: "rgba(255,255,255,1)", // Pure white
        lightTextColor: "white",
        darkTextColor: "black",
        fontType: "Verdana"
    },
    Status: "success"
}

// // University of Calgary
// var mockedUpResponse = {
//     name: "University of Calgary",
//     description: "lorem lorem",
//     "logoUrl": "https://yt3.ggpht.com/a-/AAuE7mCg15NJiXLuB_mwFigZqjx6jOzNmoPNAdsWZQ=s288-mo-c-c0xffffffff-rj-k-no",
//     styles: {
//         color1: "rgba(220,0,18,1)",
//         color2: "rgba(170,32,41,1)",
//         color3: "rgba(246,164,34,1)",
//         color4: "rgba(246,164,34,1)",
//         color5: "rgba(244,244,244,1)",
//         color6: "rgba(255,255,255,1)",
//         lightTextColor: "white",
//         darkTextColor: "black",
//         fontType: "\"Source Sans Pro\", \"Arial\", sans-serif;"
//     },
//     Status: "success"
// }

// // Apple
// var mockedUpResponse = {
//     name: "Apple",
//     description: "lorem lorem",
//     "logoUrl": "https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/OS_Apple.png",
//     styles: {
//         color1: "rgba(50,50,50,1)",
//         color2: "rgba(50,50,50,1)",
//         color3: "rgba(180,180,180,1)",
//         color4: "rgba(0,0,0,1)",
//         color5: "rgba(250,250,250,1)",
//         color6: "rgba(255,255,255,1)",
//         lightTextColor: "white",
//         darkTextColor: "black",
//         fontType: "\"Myriad Regular\", sans-serif;"
//     },
//     Status: "success"
// }

// // City of Calgary
// var mockedUpResponse = {
//     name: "City of Calgary",
//     description: "lorem lorem",
//     "logoUrl": "https://pbs.twimg.com/profile_images/690204409905590272/sLiJo9yx.png",
//     styles: {
//         color1: "rgba(194,0,49,1)",
//         color2: "rgba(194,0,49,1)",
//         color3: "rgba(63,63,63,1)",
//         color4: "rgba(63,63,63,1)",
//         color5: "rgba(250,250,250,1)",
//         color6: "rgba(163,163,163,1)",
//         lightTextColor: "white",
//         darkTextColor: "black",
//         fontType: "\"Myriad Regular\", sans-serif;"
//     },
//     Status: "success"
// }



var resultJSON = JSON.stringify(mockedUpResponse);

var result = JSON.parse(resultJSON);

console.log(result["styles"]["fontType"]);






// Top Nav-bar
/* Background Color Top Bar */
changeBackgroundColor(0, result["styles"]["color1"], result["styles"]["color2"]);

/* Nav-bar Icons color */
changeColor(1, result["styles"]["lightTextColor"]);

/* Search Icon */
changeColor(2, result["styles"]["lightTextColor"]);

/* Badge Counter */
changeColor(3, result["styles"]["color1"]);

/* Button color */
changeBackgroundColor(4, result["styles"]["color3"], result["styles"]["color3"]);
// End Top Nav-bar



// Main Content
/* Content Background */
changeBackgroundColor(5, result["styles"]["color5"], result["styles"]["color5"]);

/* Card Header Background */
changeBackgroundColor(6, result["styles"]["color2"], result["styles"]["color2"]);

/* Card Header Font */
changeColor(7, result["styles"]["lightTextColor"]);

/* Card Body Background */
changeBackgroundColor(8, result["styles"]["color6"], result["styles"]["color6"]);

/* Table Background */
changeBackgroundColor(9, result["styles"]["color5"], result["styles"]["color5"]);

/* Hovering color */
changeBackgroundColor(10, result["styles"]["color4"], result["styles"]["color4"]);

/* Start Button Text Color */
changeColor(20, result["styles"]["lightTextColor"]);

/* A Simulation Table Font Color */
changeColor(11, result["styles"]["darkTextColor"]);

/* Simulation Details Font Color */
changeColor(12, result["styles"]["darkTextColor"]);

/* Module Label Font Color */
changeColor(13, result["styles"]["darkTextColor"]);
// End Main Content



// Sidebar
/* Background Color */
changeBackgroundColor(14, result["styles"]["color2"], result["styles"]["color1"]);

/* Icon Color */
changeColor(15, "rgb(255, 255, 255)");

/* Font Color */
changeColor(16, "rgb(255, 255, 255)");
// End Sidebar



// Footer
/* Footer Background */
changeBackgroundColor(17, result["styles"]["color1"], result["styles"]["color2"]);

/* Footer Text */
changeColor(18, result["styles"]["lightTextColor"]);

/* Font Type */
changeFont(19, result["styles"]["fontType"])

/* Change Avatar */
changeAvatar(result["logoUrl"]);

/* Change Partner Name */
changePartner(result["name"]);






// Functions

function changeBackgroundColor(index, leftColorRgb, rightColorRgb) {
    var cssText = myCss.cssRules[index].style.cssText;
    myCss.cssRules[index].style.cssText = cssText.replace(
        "background-image: linear-gradient(to left, rgb(50, 50, 50), rgb(50, 50, 50));",
        "background-image: linear-gradient(to left, " + rightColorRgb + ", " + leftColorRgb + ");"
    );
}

function changeColor(index, colorRgb) {
    var cssText = myCss.cssRules[index].style.cssText;
    myCss.cssRules[index].style.cssText = cssText.replace(
        "color: rgb(255, 255, 255);",
        "color: " + colorRgb + ";"
    );
}

function changeFont(index, fontType) {
    var cssText = myCss.cssRules[index].style.cssText;
    myCss.cssRules[index].style.cssText = cssText.replace(
        "font-family: Arial;",
        "font-family: " + fontType + ";"
    );
}

function changePartner(name) {
    document.getElementById("copyright").innerHTML = "Copyright © " + name + " 2019";
}

function changeAvatar(url) {
    document.getElementById("avatar").setAttribute("src", url);
}
