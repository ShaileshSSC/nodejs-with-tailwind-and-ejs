export default class GameLogic {
    constructor(io) {
        this.started = true;
        this.rounds = 3;
        this.io = io;
    }

     async update(socket) {
        if(this.started) {
            // load correct pages
            for (let i = 1; i <= this.rounds; i++) {
                console.log("ROUND: " + i);
                await this.waitForStop(socket);
            }
            console.log("finishd game");

        }
    }

    waitForStop(socket) {
        return new Promise((resolve) => {
            socket.once('stop', (data) => {
                resolve(data);
            });
        });
    }
}

