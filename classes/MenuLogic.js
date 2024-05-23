import fs from 'fs';
import path from 'path';

export default class MenuLogic {
    constructor(UIhandler) {
        this.UIhandler = UIhandler;
        this.pages = {};
    }

    async init() {
        const pagesDirectory = path.join('public', 'pages');
        this.loadPages(pagesDirectory).then(pages => {
            this.pages = pages;
        });
    }

    async onExit(player) {
        await this.waitForCreateRoomEvent(player);
    }

    update(player) {
        this.UIhandler.load(this.pages.Home, player);

        player.socket.on("createRoomPage", () => {
            this.UIhandler.load(this.pages.CreateRoom, player);
        });

        player.socket.on("homePage", () => {
            this.UIhandler.load(this.pages.Home, player);
        });
    }

    waitForCreateRoomEvent(player) {
        return new Promise(resolve => {
            // Wait for the "createRoom" event on the player's socket
            player.socket.once("createRoom", () => {
                // Update the flag when the event is received
                console.log("exit");
                resolve();
            });
        });
    }

    async loadPages(directory) {
        const pages = {};

        try {
            const files = await fs.promises.readdir(directory);
    
            const readFilePromises = files.map(file => {
                const filePath = path.join(directory, file);
                return fs.promises.readFile(filePath, 'utf8').then(content => {
                    const fileName = path.basename(file, path.extname(file));
                    pages[fileName] = content.replace(/(\r\n|\n|\r)/gm, ''); // Remove all newlines
                });
            });
    
            await Promise.all(readFilePromises);
            return pages;
        } catch (err) {
            console.error('Error reading files:', err);
        }
    }
}