// Google API-Client Initialisierung
function initClient() {
    gapi.client.init({
        apiKey: 'YOUR_API_KEY',  // Dein API Key hier einfügen
        clientId: 'YOUR_CLIENT_ID',  // Deine Client ID hier einfügen
        scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        console.log('Google API client initialized');
    });
}

gapi.load('client:auth2', initClient);

// Überprüfung der Login-Daten
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Google Sheets API Daten abrufen
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: 'YOUR_SHEET_ID',  // Spreadsheet ID hier einfügen
        range: 'BenutzerDaten!A2:B', // Annahme: A2:B für die Benutzerdaten
    }).then(function(response) {
        var rows = response.result.values;
        var validUser = false;

        if (rows) {
            rows.forEach(function(row) {
                var storedUsername = row[0]; // Benutzername
                var storedPassword = row[1]; // Passwort

                // Benutzername und Passwort überprüfen
                if (storedUsername === username && storedPassword === password) {
                    validUser = true;
                }
            });

            if (validUser) {
                window.location.href = "dashboard.html"; // Weiterleitung zu einer anderen Seite
            } else {
                document.getElementById("errorMessage").style.display = "block";
            }
        }
    });
});
