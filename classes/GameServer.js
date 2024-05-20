import { createServer } from "http";
import { Server } from "socket.io";

import UIHandler from "./UIHandler.js";
import ActionCreateRoom from "./ActionCreateRoom.js";
import RoomManager from "./RoomManager.js";

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
    }

    init() {
        console.log('game server started');
        this.io.on("connection", (socket) => {
            this.actionCreateRoom.init(socket);
        })
        this.io.listen(3000);
    }

    onConnection() {
        //this.uiHandler.init(socket);
    }


}
