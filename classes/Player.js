export default class Player{
    constructor(socket) {
        this.socket = socket;
        this.id = socket.id;
        this.name = 'no_username';
    }

    async update() {
        await this.waitForUserName();
    }

    async waitForUserName() {
        return new Promise(resolve=> { 
            this.socket.once("setUsername", (name) => {
                this.name = name;
                console.log(name);
                resolve();
            })
        })
    }

    
}