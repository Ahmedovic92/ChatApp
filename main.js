const { app, BrowserWindow } = require('electron');
const path = require('path');

// existing node/express 
require('./server.js'); 

function createWindow() {
    // native browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Chat Application",
        autoHideMenuBar: true, // Hides the top file/edit menu so it looks like a real app
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // local express server URL
    mainWindow.loadURL('http://localhost:3000');
}

// when electron is ready, open the window
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});