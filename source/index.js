const { join } = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

const win = () => {
  const win2 = new BrowserWindow({
    width: 800,
    minWidth: 550,
    minHeight: 440,
    height: 600,
    frame: false,
    titleBarStyle: "hidden",
    icon: join(process.cwd(), "source", "frontend", "pics", "ICON.ico"),
    titleBarOverlay: {
      color: "#202225",
      symbolColor: "#B9BBBE",
      height: 0.5,
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win2.loadFile(
    join(process.cwd(), "source", "frontend", "html", "index.html")
  );
  win2.setAppDetails({ relaunchDisplayName: "TempTasks" });
};
ipcMain.on("open-options", () => {
  const optionsWindow = new BrowserWindow({
    width: 800,
    minWidth: 550,
    minHeight: 440,
    height: 600,
    frame: false,
    titleBarStyle: "hidden",
    icon: join(process.cwd(), "source", "frontend", "pics", "ICON.ico"),
    titleBarOverlay: {
      color: "#202225",
      symbolColor: "#B9BBBE",
      height: 0.5,
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  optionsWindow.loadFile(
    join(process.cwd(), "source", "frontend", "html", "options.html")
  );
});
app.whenReady().then(() => {
  win();
  app.on("activate", () => {
    win();
  });
});
app.on("window-all-closed", () => {
  app.quit();
});
