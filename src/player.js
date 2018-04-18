const utils = require('./windowUtils')

const CONTROL_BUTTONS_PREFIX = "player-controls__btn"
const PLAY_BUTTON_PREFIX = "_play"
const PAUSE_BUTTON_PREFIX = "_pause"
const NEXT_BUTTON_PREFIX = "_next"
const PREVIOUS_BUTTON_PREFIX = "_prev"

const PLAY_BUTTON_CLASS = CONTROL_BUTTONS_PREFIX + " " + CONTROL_BUTTONS_PREFIX + PLAY_BUTTON_PREFIX
// not a typo, actually has 3 classes
const PAUSE_BUTTON_CLASS = PLAY_BUTTON_CLASS + " " + CONTROL_BUTTONS_PREFIX + PAUSE_BUTTON_PREFIX
const NEXT_BUTTON_CLASS = CONTROL_BUTTONS_PREFIX + " " + CONTROL_BUTTONS_PREFIX + NEXT_BUTTON_PREFIX
const PREVIOUS_BUTTON_CLASS = CONTROL_BUTTONS_PREFIX + " " + CONTROL_BUTTONS_PREFIX + PREVIOUS_BUTTON_PREFIX

let playing = false

module.exports = {
    playPause: function () {
        var buttonClass = playing ? PAUSE_BUTTON_CLASS : PLAY_BUTTON_CLASS
        playing = !playing
        utils.click(buttonClass)
    },

    nextTrack: function () {
        playing = true
        utils.click(NEXT_BUTTON_CLASS)
    },

    previousTrack: function () {
        playing = true
        utils.click(PREVIOUS_BUTTON_CLASS)
    }
}
