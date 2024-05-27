import Room from "./Room.js";

export default class ActionCreateRoom {
    constructor(rooms, players, UI) {
        this.players = players;
        this.rooms = rooms;
        this.UI = UI;
    }

    addEvents(player) {
        player.socket.on("ActionCreateRoom", (userName) => {
            let newPlayer = this.attachUsernameHost(player, userName); 
            let room = this.createRoom(); 
            room.addNewPlayer(newPlayer);
            this.rooms.push(room);
            this.UI.render(this.UI.pages.Lobby, newPlayer)
                .then(()=> {
                    let joinedPlayers = room.getJoinedPlayers(player.id);
                    player.socket.emit("userName", userName)
                    console.log(joinedPlayers);
                    player.socket.emit("joinedPlayers", joinedPlayers)
                })
                // .then(player.socket.emit("joinedPlayers", room.players)));
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