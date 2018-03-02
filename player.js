const controlButtonsPrefix = "player-controls__btn"
const playButtonSuffix = "_play"
const pauseButtonSuffix = "_pause"
const nextButtonSuffix = "_next"
const previousButtonSuffix = "_prev"

const playButtonClass = controlButtonsPrefix + " " + controlButtonsPrefix + playButtonSuffix
// not a typo, actually has 3 classes
const pauseButtonClass = playButtonClass + " " + controlButtonsPrefix + pauseButtonSuffix
const nextButtonClass = controlButtonsPrefix + " " + controlButtonsPrefix + nextButtonSuffix
const previousButtonClass = controlButtonsPrefix + " " + controlButtonsPrefix + previousButtonSuffix

let playing = false

module.exports = {
    playPause: function (mainWindow) {
        var buttonClass = playing ? pauseButtonClass : playButtonClass
        playing = !playing
        click(mainWindow, buttonClass)
    },

    nextTrack: function (mainWindow) {
        playing = true
        click(mainWindow, nextButtonClass)
    },

    previousTrack: function (mainWindow) {
        playing = true
        click(mainWindow, previousButtonClass)
    }
}

// dumb ways of doing things 101: simulating button clicks
function click(mainWindow, buttonClass) {
    mainWindow.webContents.executeJavaScript("document.querySelectorAll('[class=\"" + buttonClass + "\"]')[0].click()")
}

