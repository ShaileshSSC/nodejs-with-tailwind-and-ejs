import { createServer } from "http";
import { Server } from "socket.io";

import UIHandler from "./UIHandler.js";
import ActionCreateRoom from "./ActionCreateRoom.js";
import RoomManager from "./RoomManager.js";
import GameLogic from "./GameLogic.js";

export default class GameServer {
    constructor() {
        const httpServer = createServer();
        this.io = new Server(httpServer, {
            cors: {
                origin: "http://localhost:5000",
                methods: ["GET", "POST"]
            }
        });
        this.actionCreateRoom = new ActionCreateRoom(); //from socket
        this.roomManager = new RoomManager(); //for game
        this.actionCreateRoom.subscribe(this.roomManager.createRoom.bind(this.roomManager)); // bind 

        this.gameLogic = new GameLogic(this.io);
    }

    init() {
        console.log('game server started');
        this.io.on("connection", (socket) => {
            //this.actionCreateRoom.init(socket);
            console.log("new USER");
            socket.emit("loadPage", 'Home');
            // this.gameLogic.update(socket);
        })
        this.io.listen(3000);
    }

    onConnection() {
        //this.uiHandler.init(socket);
    }


}
