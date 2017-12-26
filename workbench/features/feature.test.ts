import {Application} from 'spectron';
const path = require('path');

const forIt = time => new Promise(r => setTimeout(r, time));

const seconds = (s: number) => s * 1000;

describe("Application launch", () => {

    jest.setTimeout(seconds(30));

    const basePath = path.join(__dirname, '..');
    const electronBinary = path.join(basePath, 'node_modules', '.bin', 'electron');

    const app = new Application({
        path: electronBinary,
        args: [basePath]
    });

    beforeAll(async () => {
        await app.start();
    });

    afterAll(() => {
        app.stop();
    });

    it('loads an initial window', async () => {
        await app.client.waitUntilWindowLoaded();
        const windows = await app.client.getWindowCount();
        expect(windows).toBe(1);
    });
});