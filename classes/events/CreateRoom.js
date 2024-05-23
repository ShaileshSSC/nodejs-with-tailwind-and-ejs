
export default class CreateRoom {
    constructor() {

    }

    update(socket) {
        socket.on("createRoom", (data) => {
            let player = new Player(socket, data.name)
        })
    }
}