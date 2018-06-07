let mainWindow

const EXTERNAL_API = "externalAPI"

module.exports = {
    init: function (window) {
        mainWindow = window
    },

    next: function () {
        callApi("next()")
    },

    prev: function () {
        callApi("prev()")
    },

    togglePause: function () {
        callApi("togglePause()")
    }
}

function callApi(command) {
    mainWindow.webContents.executeJavaScript(EXTERNAL_API + "." + command)
}