export default class UIHandler {
    constructor() {

    }

    init(socket) {
        socket.emit("loadPage", 'Home');
    }

    load(socket, page, data) {
        socket.emit("loadPage", page);
    }

    
}