<?php
// Setzt den Content-Type der Antwort auf JSON (für JavaScript fetch)
header('Content-Type: application/json');

// Pfad zur Datei, in der die Todos gespeichert werden
$file = 'todo.json';

// Prüfen, ob die Datei existiert und bestehende Todos laden
if (file_exists($file)) {
    // Liest den Inhalt der JSON-Datei
    $json_data = file_get_contents($file);
    // Wandelt die JSON-Daten in ein PHP-Array um
    $todos = json_decode($json_data, true);
} else {
    // Falls Datei nicht existiert, mit leerer Liste starten
    $todos = [];
}

// Prüft, ob eine POST-Anfrage eingegangen ist (neues Todo)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Liest den Inhalt der Anfrage und dekodiert das JSON
    $input = json_decode(file_get_contents('php://input'), true);

    // Fügt das neue Todo an das bestehende Array an
    $todos[] = $input['todo'];

    // Speichert das aktualisierte Array wieder als JSON in die Datei
    file_put_contents($file, json_encode($todos));

    // Gibt eine Erfolgsnachricht im JSON-Format zurück
    echo json_encode(['status' => 'success']);
    exit;
}

// Wenn es keine POST-Anfrage ist, werden einfach alle Todos zurückgegeben
echo json_encode($todos);
?>
