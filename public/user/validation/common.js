const nameRegex = new RegExp(/^[a-zA-Z\-]+$/);
const emailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\A-Z"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);
const Passwordregex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");

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



function submitForm() {
    alert(validChecked);
    if(validEmail && validFname && validlname && !validChecked && (validPassword == validCpassword)){
        return true;
    }
    else {
        return false;
    }
}




function resetForm() {
    document.getElementById("signUpForm").reset();
}

