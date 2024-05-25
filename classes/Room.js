export default class Room {
    constructor() {
        this.players = [];
        this.roomId = 'room1';
    }

    addEvents(player) {

    }

    addPlayer(player) {
        player.socket.join(this.roomId);
        this.players.push(player);
    }

    join(socket, roomId) {
        socket.join(roomId);
    }

    leave(socket, roomId) {

    }

    onConnection(socket) {
        socket.on("createRoom", () => {
            this.create(socket);
        })
    }
}