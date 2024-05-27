import { createServer } from "http";
import { Server } from "socket.io";

// import UIHandler from "./UIHandler.js";
// import ActionCreateRoom from "./ActionCreateRoom.js";
// import RoomManager from "./RoomManager.js";
// import GameLogic from "./GameLogic.js";
// import ConnectionHandler from "./ConnectionHandler.js";
// import Player from "./Player.js";
// import Room from "./Room.js";
import Game from "./Game.js";

export default class GameServer {
    constructor() {
        const httpServer = createServer();
        this.io = new Server(httpServer, {
            cors: {
                origin: "http://localhost:5000",
                methods: ["GET", "POST"]
            }
        });
        this.game = new Game(this.io);
        // this.UIhandler = new UIHandler(); //observer of subject connectionHandler
        // this.room = new Room();
        // this.connectionHandler = new ConnectionHandler(); //subject

        // this.connectionHandler.subscribe(this.UIhandler.onConnection.bind(this.UIhandler))//binded whenever a trigger happens
        // this.connectionHandler.subscribe(this.room.onConnection.bind(this.room))//binded whenever a trigger happens

        // this.actionCreateRoom = new ActionCreateRoom(); 
        // this.roomManager = new RoomManager(); 
        // this.actionCreateRoom.subscribe(this.roomManager.createRoom.bind(this.roomManager)); 
        // this.connections = [];
        // this.gameLogic = new GameLogic(this.io);
    }

    async init() {
        await this.game.init();
        this.io.on("connection", (socket) => {
            const player = this.game.createPlayer(socket);
            this.game.addEvents(player);
        });
    }

    update() {
        this.game.update();
        this.io.listen(3000);
    }


}
