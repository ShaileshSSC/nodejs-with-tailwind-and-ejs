import UIHandler from './UIHandler.js';
import MenuLogic from './MenuLogic.js';
import Player from './Player.js';
import GameLogic from './GameLogic.js';

export default class Game {
    constructor() {
        this.players = {};
        this.started = true;
        this.UIhandler = new UIHandler();
    }

    async init() {
        await this.UIhandler.init();
        this.menuLogic = new MenuLogic(this.UIhandler);
        this.gameLogic = new GameLogic(this.UIhandler);
        this.menuLogic.init();
        this.gameLogic.init();
        // this.menuLogic.subscribe(this.switchState.bind(this));
    }

    addEvents(player) {
        this.menuLogic.addEvents(player);
        this.gameLogic.addEvents(player)
    }

    //probleem hoe moet ik player updaten inside menu
    async update() {

        while(true) {
            this.menuLogic.update();
                await this.menuLogic.waitingForExit();
                    this.gameLogic.update();
                await this.gameLogic.waitingForExit();
        }
            // await Promise.all([
            //     this.currentState.onExit(player),
            //     player.waitForUserName()
            // ])
            // await this.currentState.onExit(player);
            // player.update()
            // await player.waitForUserName();
            //     console.log(player.name)
    }

    createPlayer(socket) {
        let player = new Player(socket);
        this.players[socket.id] = player;
        console.log(`new connection: ${socket.id}`);
        return player;
    }


}