// Beispiel-Benutzerdaten
const validUsername = "admin";
const validPassword = "passwort123";

// Event-Listener für das Formular
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Benutzereingaben holen
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Überprüfen, ob die Eingabedaten korrekt sind
    if (username === validUsername && password === validPassword) {
        // Erfolgreiche Anmeldung
        window.location.href = "dashboard.html"; // Weiterleitung zu einer Dashboard-Seite (hier ein Beispiel)
    } else {
        // Fehlermeldung anzeigen
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = "Benutzername oder Passwort ist falsch!";
        errorMessage.style.display = "block";
    }
});
