const electron = require('electron')
const {app, globalShortcut} = require('electron')
const BrowserWindow = electron.BrowserWindow

const player = require('./player')
const url = require('url')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        title: "Yandex Music Desktop Player",
        webPreferences: {
            nodeIntegration: false
        }
    })

    mainWindow.loadURL(url.format({
        pathname: 'music.yandex.ru',
        protocol: 'https:',
        slashes: true
    }))

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', () => {
    createWindow()

    globalShortcut.register('MediaPlayPause', () => player.playPause(mainWindow))
    globalShortcut.register('MediaNextTrack', () => player.nextTrack(mainWindow))
    globalShortcut.register('MediaPreviousTrack', () => player.previousTrack(mainWindow))
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})
