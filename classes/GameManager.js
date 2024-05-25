import Router from './Router.js';
import GameServer from './GameServer.js';

export default class GameManager {
    constructor() {
        this.router = new Router();
        this.gameServer = new GameServer();
    }

    async init() {
        await this.router.init();
        await this.gameServer.init();
    }

    update() {
        this.gameServer.update();
    }
}
