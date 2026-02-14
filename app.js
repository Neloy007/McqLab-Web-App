function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const user = { name, email, password, role };

    localStorage.setItem(email, JSON.stringify(user));
    alert("Account created!");
    window.location.href = "index.html";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password && user.role === role) {
        localStorage.setItem("loggedInUser", email);

        if (role === "teacher") {
            window.location.href = "teacher.html";
        } else {
            window.location.href = "student.html";
        }
    } else {
        alert("Invalid credentials");
    }
}
