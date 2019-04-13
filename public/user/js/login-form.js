document.getElementById("loginBtn").addEventListener('click',function(e){
    const loginUrl = "http://localhost:8000/users/login";
    
    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    const postBody = {
        method : "POST",
        mode : "cors",
        cache : "no-cache",
        credentials : "same-origin",
        headers : {
            "Content-Type" : "application/json",
        },
        redirect : "follow",
        referrer : "no-referrer",
        body : JSON.stringify(data),
    };
    fetch(loginUrl,postBody)
    .then(console.log("This is the response "+ res.body))
    .catch(console.log("tEST"));
});