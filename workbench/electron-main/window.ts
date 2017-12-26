import * as Electron from 'electron';

export interface IWindowConfiguration {
    windowId: number;
    appRoot: string;
    width: number;
    height: number;
    url: string;
}

export interface IJukuWindow {
    id: number;
    window: Electron.BrowserWindow | null;
    config: IWindowConfiguration;
    isClosed: boolean;

    close(): void;
    reopen(): void;
}

export class JukuWindow implements IJukuWindow {
    private _id: number;
    private _config: IWindowConfiguration;
    window: Electron.BrowserWindow | null;

    constructor(config: IWindowConfiguration) {
        this.createWindow(config)
    }

    private createWindow(config: IWindowConfiguration) {
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

    get isClosed(): boolean {
        return !!this.window;
    }

    close(): void {
        this.window = null;
    }

    reopen(): void {
        this.createWindow(this._config);
    }
}
