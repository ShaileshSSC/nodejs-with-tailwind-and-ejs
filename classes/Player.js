export default class Player {
    constructor(socket) {
        this.socket = socket;
        this.id = socket.id;
        this.name = 'no_username';
    }

    addEvents() {

        this.socket.on("userName", (userName) => {
            this.name = userName;
        })

        this.socket.on("createRoomLoaded", () => {
            this.socket.emit("userName", this.name)
        })

    }

    async update() {
        this.socket.on("setUsername", (name) => {
            this.handleSetUsername(name);
        });
    }

    setUsername(name) {
       this.name = name;
    }

}