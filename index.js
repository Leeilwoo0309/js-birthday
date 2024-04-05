const { app, BrowserWindow, Menu, dialog } = require('electron');
const menuTemplate = [
    {
        id: 'setting', 
        label: '제도법',
        submenu: [
            {
                id: 'language',
                label: '표현',
                click: async () => {
                    let result = dialog.showMessageBoxSync({
                        title: "포고",
                        message: "전달의 순번을 결정하다.",
                        buttons: [
                            "영국인",
                            "한국인"
                        ]
                    })

                    dialog.showMessageBox({
                        title: "포고",
                        message: result == 0 ? '영국군은 설마 동원중인 의사 소통 능력이다.' : '한국인 관능은 채비를 갖춘 존재이다',
                    })
                }
                
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(menuTemplate);
// Menu.setApplicationMenu(menu)

function createWindow () {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    win.loadFile('src/html/index.html');
}

app.on('ready',createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})