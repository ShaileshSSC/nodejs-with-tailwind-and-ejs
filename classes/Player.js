export default class Player{
    constructor(socket, name) {
        this.socket = socket;
        this.id = socket.id;
        this.name = name;
    }

    
}