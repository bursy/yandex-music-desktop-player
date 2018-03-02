const electron = require('electron')
const {app, globalShortcut} = require('electron')
const BrowserWindow = electron.BrowserWindow

const player = require('./player')

const url = require('url')
const path = require('path')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        icon: path.join(__dirname, "src/resources/icon/logo.png"),
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

    exports.mainWindow = mainWindow
}

app.on('ready', () => {
    createWindow()

    globalShortcut.register('MediaPlayPause', () => player.playPause())
    globalShortcut.register('MediaNextTrack', () => player.nextTrack())
    globalShortcut.register('MediaPreviousTrack', () => player.previousTrack())
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
