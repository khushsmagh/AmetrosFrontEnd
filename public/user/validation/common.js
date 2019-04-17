const nameRegex = new RegExp(/^[a-zA-Z\-]+$/);
const emailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\A-Z"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);
const Passwordregex = new RegExp("^(?=.*)(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

//hide all the warning messages.
document.getElementById("invalid-email").style.display = "none";
document.getElementById("invalid-fname").style.display = "none";
document.getElementById("invalid-lname").style.display = "none";
document.getElementById("invalid-password").style.display = "none";
document.getElementById("invalid-Cpassword").style.display = "none";
document.getElementById("T&C").style.display = "none";

var validEmail = "";
var validFname = "";
var validlname = "";
var validPassword = "";
var validCpassword = "";
var validChecked = "";



//event listner for email
document.getElementById("email").addEventListener("keyup",function(e){
    validEmail = e.target.value.match(emailRegex);
    if(!validEmail) {
        document.getElementById("invalid-email").style.display = "block";
    }
    else {
        document.getElementById("invalid-email").style.display = "none";
    }
})

//event listner for firstname'
document.getElementById("firstName").addEventListener("keyup",function(e){
     validFname = e.target.value.match(nameRegex);
    if(!validFname) {
        document.getElementById("invalid-fname").style.display = "block";
    }
    else {
        document.getElementById("invalid-fname").style.display = "none";
    }
})

//event listner for lastname
document.getElementById("lastName").addEventListener("keyup",function(e){
    validlname = e.target.value.match(nameRegex);
    if(!validlname) {
        document.getElementById("invalid-lname").style.display = "block";
    }
    else {
        document.getElementById("invalid-lname").style.display = "none";
    }
})

//event listner for password.
document.getElementById("password").addEventListener("keyup",function(e){
     validPassword = e.target.value.match(Passwordregex);
    if(!validPassword) {
        document.getElementById("invalid-password").style.display = "block";
    }
    else {
        document.getElementById("invalid-password").style.display = "none";
    }
})

//event listner for confirm password
document.getElementById("confirmPassword").addEventListener("keyup",function(e){
     validCpassword = e.target.value;
     validPassword = document.getElementById("password").value;
    if(validCpassword != validPassword) {
        document.getElementById("invalid-Cpassword").style.display = "block";
    }
    else {
        document.getElementById("invalid-Cpassword").style.display = "none";
    }
})

document.getElementById("terms").addEventListener("keyup",function(e){
     validChecked = e.target.checked;
    if(validChecked) {
        document.getElementById("T&C").style.display = "block";
    }
    else {
        document.getElementById("T&C").style.display = "none";
        
    }
})



document.getElementById("signupBtn").addEventListener('click',function(e){
    if(validEmail && validFname && validlname && !validChecked && (validPassword === validCpassword)){
        e.preventDefault();
        authenticateSignUp();
    }
});

function authenticateSignUp(){
    var op = document.getElementById("partner-select");
    var selected = document.getElementById("partner-select").selectedIndex;
    const loginUrl = "http://ametrosapi.x10.mx/register";
    var selectedPartner = document.getElementById("partner-select");
    
    const data = {
        name: document.getElementById("firstName").value + " " + document.getElementById("lastName").value,
        login: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        partner: op.options[selected].value,
    }
    console.log("partnerId " + data.partner);

    const postBody = {
        method : "POST",
        body : JSON.stringify(data),
    };
    fetch(loginUrl,postBody)
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        if(jsonData.message){
            // sessionStorage.setItem("token", jsonData.token);
            // sessionStorage.setItem("admin", jsonData.isadmin);
            console.log("message -- " + jsonData.message);
            window.location.href = "../user/login.html";
    }
    })
    .catch(error => alert("username already taken"));
}




// function resetForm() {
//     document.getElementById("signUpForm").reset();
// }

