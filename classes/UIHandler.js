export default class UIHandler {
    constructor() {
        this.EVENT = "UI";
    }

    init() {
        console.log("ui init");
        //load all the UI for SSR, needs to be tsested first
    }

    onConnection(socket) {
        // when there is a new connection load the home page
        socket.emit(this.EVENT, 'Home');

        socket.on("createRoomPage", () => {
            socket.emit(this.EVENT, 'CreateRoom');
          });

        socket.on("createRoom", () => {
            socket.emit(this.EVENT, 'Lobby');
        });

        socket.on("homePage", () => {
            socket.emit(this.EVENT, 'Home');
        });
    }

    
}