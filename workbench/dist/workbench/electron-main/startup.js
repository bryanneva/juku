"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const window_1 = require("./window");
const url = require('url');
const path = require('path');
let window;
function startup(configuration) {
    window = new window_1.JukuWindow(configuration);
}
exports.startup = startup;
function createWindow(app) {
    const configuration = {
        windowId: 0,
        appRoot: app,
        width: 800,
        height: 600,
        url: url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: `file:`,
            slashes: true
        })
    };
    startup(configuration);
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
    //TODO: Get activate to work
    app.on('activate', () => {
        if (!window || window.isClosed) {
            window.reopen();
        }
    });
}
exports.createWindow = createWindow;
//# sourceMappingURL=startup.js.map