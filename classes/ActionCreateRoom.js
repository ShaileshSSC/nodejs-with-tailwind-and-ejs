import Room from "./Room.js";

export default class ActionCreateRoom {
    constructor(rooms, players, UI) {
        this.players = players;
        this.rooms = rooms;
        this.UI = UI;
    }

    addEvents(player) {
        player.socket.on("createRoom", (userName) => {
            let player = this.attachUsernameHost(player, userName); 
            let room = this.createRoom(); 
            room.addNewPlayer(player);
            this.rooms.push(room);
            this.UI.render(this.UI.pages.Lobby, player)
                .then(socket.emit("userName", userName)
                .then(socket.emit("joinedPlayers", room.players)));
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