import Player from './Player.js';
import ActionCreateRoom from './ActionCreateRoom.js';
import UI from './UI.js';

export default class Game {
    constructor(io) {
        this.players = {};
        this.rooms = [];
        this.started = true;
        this.UI = new UI();
        this.io = io;
        this.actionCreateRoom = new ActionCreateRoom(this.rooms, this.players, this.UI);
    }

    async init() {
        await this.UI.init();
        // this.menuLogic.subscribe(this.switchState.bind(this));
    }

    addEvents(player) {
        this.UI.addEvents(player);
        this.actionCreateRoom.addEvents(player);

        // player.socket.on("createRoom", () => {
        //     let room = new Room();
        //     room.addPlayer(player);
        //     this.rooms.push(room);
        //  });

        player.socket.on("findGame", (roomId) => {
            this.rooms.forEach(room => {
                if(roomId == room.roomId) {
                    room.join(this.players[player.id])
                    this.UI.load(this.UI.pages.LobbyGuest, this.players[player.id])
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