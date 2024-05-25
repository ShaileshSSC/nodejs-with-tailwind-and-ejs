import UIHandler from './UIHandler.js';
import MenuLogic from './MenuLogic.js';
import Player from './Player.js';
import GameLogic from './GameLogic.js';
import Room from './Room.js';

export default class Game {
    constructor() {
        this.players = {};
        this.started = true;
        this.UIhandler = new UIHandler();
        this.rooms = [];
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

        player.socket.on("createRoom", () => {
            let room = new Room();
            room.addPlayer(player);
            this.rooms.push(room);
            player.socket.emit("createRoom", {userName: player.name})
         });
    }

    async update() {


    }

    createPlayer(socket) {
        let player = new Player(socket);
        player.addEvents();
        this.players[socket.id] = player;
        console.log(`new connection: ${socket.id}`);
        return player;
    }


}