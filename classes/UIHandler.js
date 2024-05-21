export default class UIHandler {
    constructor() {
    }

    init() {
        console.log("UI INIT");
        // io.on("createRoomPage", (page) => {
        //     console.log(page);
        // })
    }

    load(socket, page, data) {
        socket.emit("loadPage", page);
    }

    onConnection(socket) {
        socket.emit("loadPage", 'Home');
        socket.on("createRoomPage", () => {
            console.log("LOADD");
            socket.emit("loadPage", 'CreateRoom');
          });
        socket.on("homePage", () => {
            socket.emit("loadPage", 'Home');
        });
    }

    
}