import Player from "./Player.js";

export default class ConnectionHandler {
    constructor() {
        this.connections = [];
        this.registeredMethods = [];
    }

    init(socket) {
        // let player = new Player(socket, "default");
        this.trigger(socket);
        console.log("user connection");
        socket.on("disconnect", () => {
            console.log("user disconnected");
        })
    }

    subscribe(func) {
        this.registeredMethods.push(func);
    }

    trigger(socket) {
        this.registeredMethods.forEach(func => func(socket));
    }

    // getConnections() {
    //     return this.connections;
    // }
}