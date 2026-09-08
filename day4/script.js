function login() {
    let u = "admin", p = "1234";

    for (let i = 0; i < 10; i++) {
        let user = prompt("Username:"), pass = prompt("Password:");
        if (user == u && pass == p) {
            alert("Login Successful!");
            break;
        }
        if (!confirm("Invalid credentials. Try again?")) break;
    }
}