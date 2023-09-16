const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
    win = new BrowserWindow({ width: 500, height: 600 })
    win.loadFile('index.html')
}

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    mainWindow.loadFile('index.html');
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})