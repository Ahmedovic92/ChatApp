Voraussetzungen:

Bevor Sie diese Chat-Anwendung ausführen, stellen Sie sicher, dass Folgendes auf Ihrem System installiert ist:

- Node.js (https://nodejs.org/) (empfohlen: v14.0.0)
- npm (im Lieferumfang von Node.js enthalten)

Hinweis: Eine vollständige Installation von Visual Studio ist 'nicht'dringend erforderlich.



Technischer Stack & Abhängigkeiten:

- Desktop-Framework: [Electron](https://www.electronjs.org/)
- Backend-Framework: [Express.js](https://expressjs.com/)
- Echtzeit-Engine: [Socket.IO](https://socket.io/)
- Frontend: HTML5, CSS3, JavaScript


Erster Schritt:

Option A mit Git:

1. Git installieren: (https://git-scm.com/)

2.'cmd' öffnen

3. mit 'git clone <Repository-URL>' aus Github klonen

4. Adresse kopieren: 'cd <Name des Repository-Ordners>'

Option B ohne Git:

1. 'cmd' öffnen

2. Adresse des Ordners kopieren

3. mit 'cd' die Adresse einfügen: 'cd <kopierte Adresse>'


Zweiter Schritt:

1. 'npm install'

2. Für 'Package.json', wenn sie es nicht haben: 'npm init -y'

3. Installation für Electron, Express und Socket.io: 'npm install electron socket.io express'

Dritter Schritt:

Ausführung der ChatApp:

Option A: Als Webseite: 'node server.js'

Ergebnis: http://localhost:3000

Option B: Als Applikation: 'npx electron main.js'

Test:

Um zu testen, ob die Applikation funktioniert, erstelle einen anderen Nutzer oder hole einen Partner.

