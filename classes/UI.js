import fs from 'fs';
import path from 'path';

export default class UI {
    constructor() {
        this.EVENT = "UI";
    }

    addEvents(player) {

        this.render(this.pages.Home, player);

        player.socket.on("createRoomPage", () => {
           // console.log(`${player.id} visiting createRoomPage`);
            this.render(this.pages.CreateRoom, player);
        });

        player.socket.on("homePage", () => {
            //console.log(`${player.id} visiting homePage`);
            this.render(this.pages.Home, player);
        });

        player.socket.on("joinRoomPage", () => {
            //console.log(`${player.id} visiting homePage`);
            this.render(this.pages.JoinRoom, player);
        });

        player.socket.on("createRoom", () => {
             //console.log(`${player.id} wants to create a Room`);
             this.render(this.pages.Lobby, player);
        });

        player.socket.on("foundGame", () => {
            //console.log(`${player.id} wants to create a Room`);
            console.log("SERVER");
       });
    }

    async init() {
        console.log("ui init");
        const pagesDirectory = path.join('public', 'pages');
        await this.loadPages(pagesDirectory).then(pages => {
            this.pages = pages;
        });
    }

    load(page, player) {
        player.socket.emit(this.EVENT, page);
    }

    async render(page, player) {
        return new Promise((resolve) => {
            // Emit the event to send the page to the player
            player.socket.emit(this.EVENT, page);
    
            // Set up a listener for the "loaded" event
            player.socket.once("loaded", () => {
                resolve('baboe');
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