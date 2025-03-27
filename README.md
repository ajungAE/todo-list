# TODO-Liste (Einfaches Webprojekt)

Dies ist eine einfache webbasierte To-Do-Liste mit HTML, JavaScript und PHP. Die Aufgaben werden lokal in einer JSON-Datei gespeichert. Dieses Projekt eignet sich gut für Einsteiger in Webentwicklung und Backend-Logik mit PHP.

---

## Funktionen

- Aufgaben hinzufügen
- Aufgaben löschen
- Aufgaben werden lokal in `todo.json` gespeichert
- Interaktive Benutzeroberfläche mit JavaScript
- Kommunikation mit Backend via `fetch()` und `todo.php`

---

## Projektstruktur

```
todo-liste/
├── index.html       # Frontend: Formular und Anzeige der Aufgaben
├── scripts.js       # Frontend-Logik: Hinzufügen/Löschen über JS
├── todo.php         # Backend: Verarbeitet GET- und POST-Anfragen
└── todo.json        # JSON-Datei zum Speichern der Aufgaben
```

---

## Installation

1. Repository klonen oder herunterladen:
   ```bash
   git clone https://github.com/dein-benutzername/todo-liste.git
   cd todo-liste
   ```

2. Projekt in einem lokalen Webserver-Umfeld verwenden, z. B.:
   - [XAMPP](https://www.apachefriends.org/)
   - [MAMP](https://www.mamp.info/)
   - oder direkt auf einem Apache/Nginx-Server mit PHP-Unterstützung

3. Stelle sicher, dass der Webserver Schreibrechte auf `todo.json` hat.

---

## Nutzung

1. Öffne `index.html` im Browser (idealerweise über `localhost`)
2. Gib eine Aufgabe ein und klicke auf **Hinzufügen**
3. Aufgaben erscheinen unter dem Eingabefeld
4. Mit einem Klick auf **[X]** wird die Aufgabe gelöscht

---

## Hinweise

- `todo.php` nimmt POST-Anfragen für neue Aufgaben entgegen und GET-Anfragen zur Anzeige.
- Die Speicherung erfolgt nicht in einer Datenbank, sondern in einer lokalen Datei `todo.json`.

---

## Lizenz

Dieses Projekt ist Open Source. Nutze es gern für eigene Lernzwecke.
