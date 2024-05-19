import Router from './Router.js';
import ConnectHandler from './ConnectHandler.js';
import Game from './Game.js';

export default class GameServer {
    constructor() {
        this.router = new Router();
        this.connectHandler = new ConnectHandler();
        this.game = new Game();
    }

    init() {
        this.router.init();
        this.connectHandler.init();
        console.log('game init..');
    }

    update() {

    }
}
