const api = require('./api')

module.exports = {
    playPause: function () {
        api.togglePause()
    },

    nextTrack: function () {
        api.next()
    },

    previousTrack: function () {
        api.prev()
    }
}
