import Room from "./Room";

export default class ActionCreateRoom {
    constructor(rooms, players) {
        this.players = players;
        this.rooms = rooms;
    }

    addEvents(player) {
        player.socket.on("createRoom", (userName) => {
            let player = this.attachUsernameHost(player, userName);
            let room = this.createRoom();
            room.addNewPlayer(player);
            this.rooms.push(room)
        })
    }

    attachUsernameHost(player, userName) {
        player.name = userName;
        return player;
    }

    createRoom() {
        const randomRoomId = Math.floor(Math.random() * 990) + 1;
        return new Room(randomRoomId);
    }


}