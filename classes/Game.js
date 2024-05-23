import UIHandler from './UIHandler.js';
import MenuLogic from './MenuLogic.js';
import Player from './Player.js';

export default class Game {
    constructor() {
        this.players = [];
        this.UIhandler = new UIHandler();
        this.menuLogic = new MenuLogic(this.UIhandler);
        this.started = true;
    }

    init() {
        this.menuLogic.init();
    }

    //probleem hoe moet ik player updaten inside menu
    async update(socket) {
        let player = new Player(socket);
        this.players.push(player);

        while(this.started) {
            this.menuLogic.update(player);
            await Promise.all([
                this.menuLogic.onExit(player),
                player.update()
            ])
            this.UIhandler.load(this.menuLogic.pages.Lobby, player);
                
        }
    }
}