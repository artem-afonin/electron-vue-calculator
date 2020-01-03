const { app, BrowserWindow } = require('electron')

let mainWindow
const windowWidth = 800
const windowHeight = 600

function createFixedWindow(width, height) {
  let window = new BrowserWindow({
    width: width,
    height: height,
    resizable: false,
    fullscreenable: false
  });

  window.on('closed', () => window = null)

  return window
}

app.on('ready', () => {
  mainWindow = createFixedWindow(windowWidth, windowHeight)
  mainWindow.loadFile('dist/index.html')
  mainWindow.webContents.openDevTools()
})

app.on('window-all-closed', () => {
  app.quit()
})