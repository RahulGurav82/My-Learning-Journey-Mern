let password = document.getElementById("password");
show = () => {
    if(password.type === "password"){
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}