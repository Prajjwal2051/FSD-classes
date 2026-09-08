let form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    let username=document.getElementById("username").value 
    let email=document.getElementById("email").value
    let mobile=document.getElementById("mobile").value
    let password=document.getElementById("password").value
    let confirm = document.getElementById("confirmPassword").value

    let valid = true;
    if (username.length<6){
        document.getElementById("usernameMsg").innerText="Username must include atleast 6 characters"
        valid=false;
    }else{
        document.getElementById("usernameMSg").innerText="";
    }

    // now let;s check for the email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById("emailMsg").innerText="Enter a valud email"
        valid=false
    }
    else{
        document.getElementById("emailMsg").innerText="";
    }
    // Password
    if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
        document.getElementById("passwordMsg").innerText =
            "Password must contain a letter and number";
        valid = false;
    } else {
        document.getElementById("passwordMsg").innerText = "";
    }

    // Confirm Password
    if (password !== confirm) {
        document.getElementById("confirmMsg").innerText =
            "Passwords do not match";
        valid = false;
    } else {
        document.getElementById("confirmMsg").innerText = "";
    }

    if (valid) {
        alert("Registration successful!");
        form.reset();
    }
});