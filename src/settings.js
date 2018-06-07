const settings = require('electron-settings')

const IS_INITIALIZED_KEY = "is_initialized"
const DISPLAY_TEASER_KEY = "display_teaser"

module.exports = {
    init: function () {
        if (!settings.has(IS_INITIALIZED_KEY)) {
            setDefaultValues()
        }
    },

    isTeaserDisplayed: function () {
        return settings.get(DISPLAY_TEASER_KEY)
    },

    setTeaserDisplayed: function (flag) {
        settings.set(DISPLAY_TEASER_KEY, flag)
    }
}

function setDefaultValues() {
    settings.set(IS_INITIALIZED_KEY, true)
    // some may like it i guess
    settings.set(DISPLAY_TEASER_KEY, true)
}
