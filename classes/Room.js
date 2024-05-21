export default class Room {
    constructor() {
        this.players = [];
    }

    create(socket) {
        socket.join("some room");
    }

    join(socket, roomId) {
        socket.join(roomId);
    }
}