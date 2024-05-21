import Player from "./Player.js";

export default class ConnectionHandler {
    constructor() {
        this.connections = [];
        this.registeredMethods = [];
    }

    init(socket) {
        // let player = new Player(socket, "default");
        console.log("hallo");
        this.trigger(socket);
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