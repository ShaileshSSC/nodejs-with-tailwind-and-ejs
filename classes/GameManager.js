import Router from './Router.js';
import GameServer from './GameServer.js';
import Game from './Game.js';

export default class GameManager {
    constructor() {
        this.router = new Router();
        this.gameServer = new GameServer();
        // this.game = new Game();
    }

    init() {
        this.router.init();
        // this.gameServer.init();
        // console.log('game init.. started status:' + this.game.started);
    }

    async update() {
        this.gameServer.update();
        // while (true) {
        //     console.log("loop");
        //     const socket = await this.gameServer.hasConnection();
        //     console.log("There is a connection:", socket.id);
        // }
            // const connection  = this.gameServer.getConnection();
            // await this.UIhandler.update();
            //     console.log("Game started");
    }
}
