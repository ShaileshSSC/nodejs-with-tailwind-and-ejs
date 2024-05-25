import fs from 'fs';
import path from 'path';

export default class UIHandler {
    constructor() {
        this.EVENT = "UI";
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