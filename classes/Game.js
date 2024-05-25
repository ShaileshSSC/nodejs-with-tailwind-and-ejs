import UIHandler from './UIHandler.js';

import Player from './Player.js';

import Program from './Program.js';

export default class Game {
    constructor() {
        this.programs = {};
        this.started = true;
        this.UIhandler = new UIHandler();
    }

    async init() {
        await this.UIhandler.init();
        // this.menuLogic.subscribe(this.switchState.bind(this));
    }

    addEvents(player) {
        
    }

    //probleem hoe moet ik player updaten inside menu
    async update(socketId) {

        this.programs[socketId].update();
            // await Promise.all([
            //     this.currentState.onExit(player),
            //     player.waitForUserName()
            // ])
            // await this.currentState.onExit(player);
            // player.update()
            // await player.waitForUserName();
            //     console.log(player.name)
    }

    async createProgram(socket) {
        let player = new Player(socket);
        let program = new Program(player, this.UIhandler)
        program.init();
        program.addEvents(player)
        this.programs[socket.id] = program;
        console.log(`new connection: ${socket.id}`);
        return program;
    }


}