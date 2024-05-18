import Router from './Router.js';
import ConnectionListener from './ConnectionListener.js';

export default class Game {
    constructor() {
        this.router = new Router();
        this.ConnectionListener = new ConnectionListener();
    }

    init() {
        this.router.init();
        this.ConnectionListener.init();
        console.log('game init..');
    }

    update() {
        
    }
}
