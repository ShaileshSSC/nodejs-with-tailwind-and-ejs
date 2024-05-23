export default class Player{
    constructor(socket) {
        this.socket = socket;
        this.id = socket.id;
        this.name = 'no_username';
    }

    async update() {
        this.socket.on("setUsername", (name) => {
            this.handleSetUsername(name);
        });
    }

    handleSetUsername(name) {
       this.name = name;
    }

    async waitForUserName() {
        //  deze code moet in update komen
        return new Promise(resolve=> {
            //deze moet waitforusername heten 
            this.update();
            resolve()
        })
    }

    
}