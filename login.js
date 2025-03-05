document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    fetch("https://script.google.com/macros/s/AKfycbzIp7oJloKXHuwX5qXICmLaIf1aZxCkx0UAaa8S6IbxZMP1G5gH3687ppc8bXaNUDgL/exec", {  // Deine Web-App-URL hier einfügen
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username: username, password: password})
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            window.location.href = "dashboard.html"; // Erfolgreicher Login
        } else {
            document.getElementById("errorMessage").style.display = "block";
        }
    })
    .catch(error => console.error("Fehler:", error));
});
