const utils = require('./windowUtils')
const settings = require('./settings')

const TEASER_CONTENT_CLASS = "teaser__content teaser__content_type_full"
const TEASER_INIT_RETRY_INTERVAL = 250
const TEASER_INIT_RETRY_COUNT = 20

module.exports = {
    init: function () {
        initTeaserWithRetries(TEASER_INIT_RETRY_COUNT)
    },

    alert: function () {
        utils.alert()
    },

    toggleTeaser: function () {
        settings.setTeaserDisplayed(!settings.isTeaserDisplayed())
        updateTeaser()
    }
}

// you may consider me special, this attempts to update the block status on init because it's not inited right away
function initTeaserWithRetries(retries) {
    setTimeout(function(){
        updateTeaser()
        if (retries > 0) {
            initTeaserWithRetries(retries - 1)
        }
    }, TEASER_INIT_RETRY_INTERVAL);
}

function updateTeaser() {
    settings.isTeaserDisplayed() ? utils.showBlock(TEASER_CONTENT_CLASS) : utils.hideBlock(TEASER_CONTENT_CLASS)
}