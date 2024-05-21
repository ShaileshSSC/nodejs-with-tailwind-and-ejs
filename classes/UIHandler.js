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

    loadHomePage(socket) {
        console.log(`sent homepageeee too ${socket.id} !!`);
    }

    
}