document.getElementById("loginBtn").addEventListener('click',function(e){
    e.preventDefault();
    const loginUrl = "http://localhost:8000/users/login";
    console.log("TEst console");
    
    const data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    const postBody = {
        method : "POST",
        mode : "cors",
        cache : "no-cache",
        credentials : "omit",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(data),
    };
    fetch(loginUrl,postBody)
    .then(res => console.log(res.json()))
    .catch(console.log("tEST"));
});