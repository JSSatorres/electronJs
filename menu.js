const { Menu } = require('electron')

const setMainMenu = (mainWindow) => {
  const template = [
    {
      label: 'file',
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Editar',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'view',
      submenu: [
        {
          label: 'light',
          click: () => {
            mainWindow.webContens.send('theme', 'light')
          }
        },
        {
          label: 'dark',
          click: () => {
            mainWindow.webContens.send('theme', 'dark')
          }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

module.exports = {
  setMainMenu
}
