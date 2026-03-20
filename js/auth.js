const ADMIN_PASSWORD = "#@MyStyle20@#";

function loginAdmin() {

    const pass = document.getElementById("admin-password").value;

    if (pass === ADMIN_PASSWORD) {

        localStorage.setItem("admin", "true");
        window.location.href = "admin.html";

    } else {

        alert("Contraseña incorrecta");

    }

}

function checkAdmin() {

    if (localStorage.getItem("admin") !== "true") {

        window.location.href = "index.html";

    }

}