export default class CreatePlayer {
    constructor() {

    }

    update(socket){
        socket.on("CreatePlayer")
    }
}