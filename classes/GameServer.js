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
        this.game = new Game();
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

    init() {
        this.game.init();
    }

    update() {
        // this.UIhandler.init();
        console.log('game server started');
        // this.io.on("connection", (socket) => {
        //     let player = new Player(socket, 'Shai');
        //     this.connections.push(player);
        //     //this.actionCreateRoom.init(socket);
        //     console.log("new USER");
        //     socket.emit("loadPage", 'Home');
        // })
        this.io.on("connection", (socket) => {
            this.game.update(socket);
        });
        this.io.listen(3000);
    }

    async hasConnection() {
       
    }

    onConnection() {
        //this.uiHandler.init(socket);
    }


}
