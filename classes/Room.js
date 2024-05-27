export default class Room {
    constructor(roomId) {
        //somwhere here create random room id
        this.players = [];
        this.roomId = roomId;
    }

    addNewPlayer(player) {
        this.players.push(player);
    }

    getJoinedPlayers(playerId) {
        let joinedPlayers = []
        this.players.forEach(player => {
            joinedPlayers.push({
                name: player.name
            })
        });
        return joinedPlayers;
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
}