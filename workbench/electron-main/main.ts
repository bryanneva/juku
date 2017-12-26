import {createWindow} from "./startup";
import {app} from 'electron';

if(createWindow !== undefined) {
    app.on('ready', createWindow.bind(this, app));
} else {
    throw new Error('could not find createWindow function');
}
