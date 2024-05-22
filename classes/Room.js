export default class Room {
    constructor() {
        this.players = [];
    }

    create(socket) {
        // socket.join("some room");
        console.log("createRoom");
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