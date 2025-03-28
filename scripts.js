// Lädt die vorhandenen Todos vom Server
function loadTodos() {
    // Holt die Daten von todo.php
    fetch('todo.php')
        .then(response => response.json()) // Antwort wird als JSON gelesen
        .then(todos => {
            console.log(todos); // Ausgabe zur Kontrolle in der Konsole

            const todoList = document.getElementById('todoList'); // Zugriff auf die UL-Liste --> unsortierte Liste
            const todoListOrdered = document.getElementById('todoListOrdered'); // Zugriff auf die OL-Liste --> sortierte Liste (NEU)

            todoList.innerHTML = ''; // 1. Liste leeren, bevor neue Einträge hinzugefügt werden
            todoListOrdered.innerHTML = ''; // 2. Liste leeren, bevor neue Einträge hinzugefügt werden (NEU)

            // Alle Todos durchgehen und in die Liste einfügen
            todos.forEach(todo => {
                const li = document.createElement('li'); // Listenelement für 1. Liste erstellen
                li.textContent = todo; // Textinhalt des Todos setzen
                todoList.appendChild(li); // Eintrag zur Liste hinzufügen

                const li2 = document.createElement('li'); // Listenelement für 2. Liste erstellen (NEU)
                li2.textContent = todo; // Textinhalt des Todos setzen (NEU)
                todoListOrdered.appendChild(li2); // Eintrag zur Liste hinzufügen (NEU)
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
