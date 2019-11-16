let mainWindow

const EXTERNAL_API = "externalAPI"

let dimension = false

module.exports = {
    init: function (window) {
        mainWindow = window
    },

    next: function () {
        brain()
        callApi("next()")
    },

    prev: function () {
        brain()
        callApi("prev()")
    },

    togglePause: function () {
        if (!brain()) {
            callApi("togglePause()")
        }
    }
}

function brain() {
    if (!dimension) {
        // pay close attention
        mainWindow.webContents.sendInputEvent({type: 'char', keyCode: '\u0020'})
        return Boolean(true)
    }
    return Boolean(false)
}

function callApi(command) {
    mainWindow.webContents.executeJavaScript(EXTERNAL_API + "." + command)
}