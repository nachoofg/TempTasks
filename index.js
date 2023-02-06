const { join } = require('path');
const { app, BrowserWindow } = require('electron');

const win = () => {
    const win2 = new BrowserWindow({
        width: 800,
        minWidth: 550,
        minHeight: 440,
        height: 600,
        frame: false,
        titleBarStyle: 'hidden',
        icon: join(process.cwd(), 'source', 'pics', 'ICON.png'),
        titleBarOverlay: {
            color: '#202225',
            symbolColor: '#B9BBBE',
            height: 0.50
        },
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    win2.loadFile(join(process.cwd(), 'source', 'frontend', 'html', 'index.html'));
    win2.setOverlayIcon((join(process.cwd(), 'source', 'frontend', 'pics', 'ICON.png')), 'TempTasks');
    win2.setAppDetails({ relaunchDisplayName: "TempTasks" })
};

app.whenReady().then(() => { win(); app.on('activate', () => { win(); }); });
app.on('window-all-closed', () => { app.quit(); });
