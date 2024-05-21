export default class GameLogic {
    constructor(io) {
        this.started = true;
        this.rounds = 3;
        this.io = io;
    }

    async update() {
        if(this.started) {
            // load correct pages
            for (let i = 0; i < this.rounds.length; i++) {
                this.waitForStop().then((data) => {
                    console.log("say stop! " + i);
                })
            }

        }
    }

    waitForStop() {
        return new Promise((resolve) => {
            this.io.once('stop', (data) => {
                resolve(data);
            });
        });
    }
}

