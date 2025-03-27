// Lädt die vorhandenen Todos vom Server
function loadTodos() {
    // Holt die Daten von todo.php
    fetch('todo.php')
        .then(response => response.json()) // Antwort wird als JSON gelesen
        .then(todos => {
            console.log(todos); // Ausgabe zur Kontrolle in der Konsole

            const todoList = document.getElementById('todoList'); // Zugriff auf die UL-Liste
            todoList.innerHTML = ''; // Liste leeren, bevor neue Einträge hinzugefügt werden

            // Alle Todos durchgehen und in die Liste einfügen
            todos.forEach(todo => {
                const li = document.createElement('li'); // Neuen Listeneintrag erstellen
                li.textContent = todo; // Textinhalt des Todos setzen
                todoList.appendChild(li); // Eintrag zur Liste hinzufügen
            });
        });
}

// Wenn die Seite geladen ist, Todos vom Server abrufen
window.addEventListener("load", (event) => {
    loadTodos(); // Todos laden, sobald Seite fertig geladen ist
});

// Ereignis-Listener für das Formular: Bei Absenden neuen Todo hinzufügen
document.getElementById('todoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Standardverhalten (Seite neu laden) verhindern

    const todoInput = document.getElementById('todoInput').value; // Eingabetext auslesen

    console.log(JSON.stringify({ todo: todoInput })); // Ausgabe des JSON zum Debuggen

    // Daten per POST an todo.php senden
    fetch('todo.php', {
        method: 'POST', // Methode: POST
        headers: {
            'Content-Type': 'application/json', // Inhaltstyp: JSON
        },
        body: JSON.stringify({ todo: todoInput }), // Daten als JSON senden
    })
    .then(response => response.json()) // Antwort wieder als JSON lesen
    .then((result) => {
        console.log(result); // Serverantwort in der Konsole zeigen
        loadTodos(); // Liste neu laden, damit neues Todo angezeigt wird
        document.getElementById('todoInput').value = ''; // Eingabefeld leeren
    })
    .catch(error => console.error(`Fehler beim Senden des Todos: ${error}`)) // Fehler anzeigen
});
