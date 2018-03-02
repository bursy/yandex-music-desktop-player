let mainWindow

module.exports = {
    init: function (window) {
        mainWindow = window
    },

    // dumb ways of doing things 101: simulating button clicks
    click: function (buttonClass) {
        mainWindow.webContents.executeJavaScript(
            "document.querySelectorAll('[class=\"" + buttonClass + "\"]')[0].click()")
    }
}
