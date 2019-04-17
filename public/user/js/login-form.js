let userToken = sessionStorage.getItem("token");
let admin = sessionStorage.getItem("admin");
//not valid token go back to login page
if (userToken !== null && admin !== null) {
    window.location = "../../landing-page/html/landing-page.html";
}

document.getElementById("loginBtn").addEventListener('click',function(e){
    e.preventDefault();
    const loginUrl = "http://ametrosapi.x10.mx/login";
    
    const data = {
        login: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    const postBody = {
        method : "POST",
        body : JSON.stringify(data),
    };
    fetch(loginUrl,postBody)
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        if(jsonData.token){
            sessionStorage.setItem("token", jsonData.token);
            sessionStorage.setItem("admin", jsonData.isadmin);
            console.log(jsonData.token);
            window.location.href = "../landing-page/html/landing-page.html";
    }
        else{
            alert("Please check username or password");
            console.log(jsonData.Status);
        }
    })
    .catch(error => console.log(error));
});