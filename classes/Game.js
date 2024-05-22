import Player from "./Player.js";

export default class Game {
    constructor() {
        this.players = [];
    }

    init() {
        
    }

    //probleem hoe moet ik player updaten inside menu
    async update(socket) {
        let player = new Player(socket, 'shai');
        this.players.push(player);
        while(true) {
            await this.MenuLogic.update();
            await this.GameLogic.update();
        }
    }
}