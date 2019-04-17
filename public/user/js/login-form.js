if (sessionStorage.getItem('token') !== null && sessionStorage.getItem("admin") !== null) {
    window.location.replace("../../landing-page/html/landing-page.html");
}

document.getElementById("loginBtn").addEventListener('click',function(e){
    e.preventDefault();
    const loginUrl = "https://ametrosapi.x10.mx/login";
    
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
            console.log(jsonData.Status)
        }
    })
    .catch(error => console.log(error));
});