// Getting style sheet
var styleSheets = document.styleSheets;

var cssFileName = "/customx.css";

for (var i = 0; i < document.styleSheets.length; i++) {
    if (styleSheets[i].href.endsWith(cssFileName)) {
        var myCss = styleSheets[i];
    }
}
// End Getting style sheet

// If JSON.parse(sessionStorage.getItem('partnerData')) is not set it should return to login page
try {
    var result = JSON.parse(sessionStorage.getItem('partnerData'));
    loadTheme();
} catch (error) {
    location.href = "/public/user/login.html";
}

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

function changePartnerLink(url) {
    document.getElementById("avatarLink").setAttribute("href", url);
}

function loadTheme() {
    var lightTextColor = "white";

    var darkTextColor = "black";

    var fontType = "Verdana";



    // Top Nav-bar
    /* Background Color Top Bar */
    changeBackgroundColor(0, result["styles"]["color1"], result["styles"]["color2"]);

    /* Nav-bar Icons color */
    changeColor(1, lightTextColor);

    /* Search Icon */
    changeColor(2, lightTextColor);

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
    changeColor(7, lightTextColor);

    /* Card Body Background */
    changeBackgroundColor(8, result["styles"]["color6"], result["styles"]["color6"]);

    /* Table Background */
    changeBackgroundColor(9, result["styles"]["color5"], result["styles"]["color5"]);

    /* Hovering color */
    changeBackgroundColor(10, result["styles"]["color4"], result["styles"]["color4"]);

    /* Start Button Text Color */
    changeColor(20, lightTextColor);

    /* A Simulation Table Font Color */
    changeColor(11, darkTextColor);

    /* Simulation Details Font Color */
    changeColor(12, darkTextColor);

    /* Module Label Font Color */
    changeColor(13, darkTextColor);
    // End Main Content



    // Sidebar
    /* Background Color */
    changeBackgroundColor(14, result["styles"]["color2"], result["styles"]["color1"]);

    /* Icon Color */
    changeColor(15, "rgb(255, 255, 255)");

    /* Font Color */
    changeColor(16, "rgb(255, 255, 255)");
    // End Sidebar



    // Footer and Extras
    /* Footer Background */
    changeBackgroundColor(17, result["styles"]["color1"], result["styles"]["color2"]);

    /* Footer Text */
    changeColor(18, lightTextColor);

    /* Font Type */
    changeFont(19, fontType)

    /* Change Avatar */
    changeAvatar(result["logoUrl"]);

    /* Change Partner Link */
    changePartnerLink(result["url"])

    /* Change Partner Name */
    changePartner(result["name"]);
}