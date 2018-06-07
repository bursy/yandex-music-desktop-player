let mainWindow

module.exports = {
    init: function (window) {
        mainWindow = window
    },

    // dumb ways of doing things 101: simulating button clicks
    click: function (buttonClass) {
        executeJS(selectOneElementByClass(buttonClass) + ".click()")
    },

    hideBlock: function (blockClass) {
        executeJS(selectOneElementByClass(blockClass) + ".style.display = \"none\"")
    },

    showBlock: function (blockClass) {
        executeJS(selectOneElementByClass(blockClass) + ".style.display = \"block\"")
    }
}

function selectOneElementByClass(elementClass) {
    return querySelectorAll("[class=\"" + elementClass + "\"]") + "[0]"
}

function querySelectorAll(query) {
    return "document.querySelectorAll('" + query + "')"
}

function executeJS(js) {
    mainWindow.webContents.executeJavaScript(js)
}