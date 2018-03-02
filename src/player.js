const utils = require('./utils')

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
    playPause: function () {
        var buttonClass = playing ? pauseButtonClass : playButtonClass
        playing = !playing
        utils.click(buttonClass)
    },

    nextTrack: function () {
        playing = true
        utils.click(nextButtonClass)
    },

    previousTrack: function () {
        playing = true
        utils.click(previousButtonClass)
    }
}
