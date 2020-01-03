const { app, BrowserWindow } = require('electron')

let mainWindow
const windowWidth = 800
const windowHeight = 600

function createFixedWindow(width, height) {
  let window = new BrowserWindow({
    minWidth: width,
    maxWidth: width,
    width: width,
    minHeight: height,
    maxHeight: height,
    height: height
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