import UIHandler from './UIHandler.js';
import MenuLogic from './MenuLogic.js';
import Player from './Player.js';
import GameLogic from './GameLogic.js';
import Room from './Room.js';

export default class Game {
    constructor(io) {
        this.players = {};
        this.started = true;
        this.UIhandler = new UIHandler();
        this.rooms = [];
        this.io = io;
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
         });

        player.socket.on("findGame", (roomId) => {
            this.rooms.forEach(room => {
                if(roomId == room.roomId) {
                    room.join(this.players[player.id])
                    this.menuLogic.UIhandler.load(this.menuLogic.UIhandler.pages.LobbyGuest, this.players[player.id])
                    return;
                }
            });
         });

        player.socket.on("userName", (userName) => {
            for (const key in this.players) {
                console.log(`${key}: ${this.players[key].name}`);
            }
        })

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