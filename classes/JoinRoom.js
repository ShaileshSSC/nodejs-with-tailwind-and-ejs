export default class JoinRoomHandler {
    constructor(io, roomId, player) {
        this.io = io;
        this.player = player;
    }

    handle() {
        this.io.on("joinRoom", (socket) => {
            
        })
    }

}