const { app, BrowserWindow } = require('electron')
const { setMainMenu } = require('./menu.js')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 500,
    minHeight: 500,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
  setMainMenu(mainWindow)
}

app.whenReady().then(() => {
  createWindow()
})

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit()
// })

// darwin->macos
// linux->linux
// win32->window
