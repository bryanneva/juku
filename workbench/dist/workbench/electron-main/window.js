"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Electron = require("electron");
class JukuWindow {
    constructor(config) {
        this.createWindow(config);
    }
    createWindow(config) {
        this._config = config;
        this.window = new Electron.BrowserWindow({
            width: config.width,
            height: config.height
        });
        this._id = this.window.id;
        this.window.loadURL(config.url);
        // this.window.webContents.openDevTools();
        this.window.on('closed', () => this.close());
    }
    get config() {
        return this._config;
    }
    get id() {
        return this._id;
    }
    get isClosed() {
        return !!this.window;
    }
    close() {
        this.window = null;
    }
    reopen() {
        this.createWindow(this._config);
    }
}
exports.JukuWindow = JukuWindow;
//# sourceMappingURL=window.js.map