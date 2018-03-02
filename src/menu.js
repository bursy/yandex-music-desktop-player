const {app, Menu} =  require('electron')
const player = require('./player')

const menu = [
    {
        label: 'Edit',
        submenu: [
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {role: 'selectall'}
        ]
    },
    {
        label: 'View',
        submenu: [
            {role: 'reload'},
            {role: 'togglefullscreen'}
        ]
    },
    {
        label: 'Playback',
        submenu: [
            {
                label: 'Play / Pause',
                click: () => player.playPause()
            },
            {
                label: 'Previous Track',
                click: () => player.previousTrack()
            },
            {
                label: 'Next Track',
                click: () => player.nextTrack()
            }
        ]
    },
    {
        label: 'Window',
        role: 'window',
        submenu: [
            {role: 'minimize'},
            {role: 'close'}
        ]
    }
];

if (process.platform === 'darwin') {
    menu.unshift({
        label: app.getName(),
        submenu: [
            {role: 'about'},
            {type: 'separator'},
            {role: 'hide'},
            {role: 'hideothers'},
            {role: 'unhide'},
            {type: 'separator'},
            {role: 'quit'}
        ]
    });
    menu[4].submenu.push(
        {type: 'separator'},
        {role: 'front'}
    );
}

module.exports = {
    init: function () {
        Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
    }
}
