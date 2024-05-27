export default class Room {
    constructor() {
        //somwhere here create random room id
        this.players = [];
        this.roomId = 'room1';
    }

    addEvents(player) {
        player.socket.on("createRoomLoaded", () => {
            //player.socket.emit("userName", player.name);
        })
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