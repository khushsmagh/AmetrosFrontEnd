

function validateUsername(){
 //   alert("work");
    var nameRegex = new RegExp(/^[a-zA-Z\-]+$/);
    var emailRegex = new RegExp(/^(([^<>()\[\]\.,;:\s@\A-Z"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);

    var validfirstUsername = document.getElementById("firstName").value.match(nameRegex);
    var validLastName = document.getElementById("lastName").value.match(nameRegex);
    var validEmail = document.getElementById("email").value.match(emailRegex);
    var checkTNC = document.getElementById("terms").checked;
    var validPassword = document.getElementById("password").value;
    var validConfirmPassword = document.getElementById("confirmPassword").value;
    if(!validfirstUsername){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        return false;
    }
    else if(!validLastName){
        alert("Your lastName name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        return false;
    }
    else if(!validEmail){
        alert("Your email is not valid.");
        return false;
    }
    else if(!checkTNC){
        alert("you have to check the terms and conditions");
        return false;
    }
    else if(validPassword == null){
        alert("you have to insert password");
        return false;
    }
    else if(validConfirmPassword == null){
        alert("you have to insert password");
        return false;
    }
    else if(validPassword !== validConfirmPassword){
        alert("check your password");
        return false;
    }
    else{
        return true;
    }
}

function resetForm(){
    document.getElementById("signUpForm").reset();
}

