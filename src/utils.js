const main = require('./main')

module.exports = {
    // dumb ways of doing things 101: simulating button clicks
    click: function (buttonClass) {
        main.mainWindow.webContents.executeJavaScript(
            "document.querySelectorAll('[class=\"" + buttonClass + "\"]')[0].click()")
    }
}
