import GameLogic from './GameLogic.js';
import MenuLogic from './MenuLogic.js';

export default class Program {
    constructor(player, UI) {
        this.player = player;
        this.UI = UI;
    }

    init() {
        this.menuLogic = new MenuLogic(this.UI);
        this.gameLogic = new GameLogic(this.UI);
    }

    addEvents(player) {
        this.menuLogic.addEvents(player);
        this.gameLogic.addEvents(player)
    }

    async update() {

        while(true) {
            this.menuLogic.update();
                console.log('updated game');
                await this.menuLogic.waitingForExit();
                    console.log('exited');
                    
        }
    }


}