export default class Room {
    constructor(roomId) {
        //somwhere here create random room id
        this.players = [];
        this.roomId = roomId;
    }

    addEvents(player) {
        player.socket.on("createRoomLoaded", () => {
            //player.socket.emit("userName", player.name);
        })
    }

    addNewPlayer(player) {
        this.players.push(player);
    }

    addPlayer(player) {
        player.socket.join(this.roomId);
        this.players.push(player);
    }

    join(player) {
        player.socket.join(this.roomId);
    }

    leave(socket, roomId) {

    }

    onConnection(socket) {
        socket.on("createRoom", () => {
            this.create(socket);
        })
    }
}