import { createServer } from "http";
import { Server } from "socket.io";

export default class ConnectHandler {
    constructor() {
        const httpServer = createServer();
        this.io = new Server(httpServer, {
            cors: {
             origin: "http://localhost:5000",
             methods: ["GET", "POST"]
           }
         });
    }

    init() {
        console.log('connection Listener inited..');
        this.io.on("connection", (socket) => {
            console.log(`new user ${socket.id} joined the game!`);
            // this.game.players
            socket.emit("loadPage", 'Home');
        });
        
        this.io.listen(3000);
    }


}