export default class GameLogic {
    constructor(io) {
        this.started = true;
        this.rounds = 3;
        this.io = io;
        this.players = [];
    }

    //  async update(socket) {
    //     if(this.started) {
    //         // load correct pages
    //         for (let i = 1; i <= this.rounds; i++) {
    //             console.log("ROUND: " + i);
    //             await this.waitForStop(socket);
    //         }
    //         console.log("finishd game");

    //     }
    async update() {
        if(this.started) {
            // step 1 load correct pages
            // start round loop x rounds
                // wacht totad speler stop heeft gezegd
                // daarna load animation STOP! disable input
                // laat 1.5 seconde zien wie wat had vanaf degene die stop zei -- host kan hier op next klikke voor skip en pauze
                // na iedereen laat alles zien van iedereen en hoeveel punten diegen zichzelf geeft
                // wacht totad host next round heeft geklikt (host kan game altijd eindigen en pauzeren?)
            // show finished game animation
            // show degene die heeft gewonnen YOU won en derest zijn 2de of 3de plek
            // daarna show alle scores met plek
            await this.waitForInterval(15, 1500, (c) => {
                let rnd = Math.floor(Math.random() * 3);
                let page = this.pages[rnd].name;
                this.io.emit("loadPage", page);
                console.log(`loading new page: ${page}`);
            });
            console.log("finishd game");

        }
    }

    waitForInterval(times, interval, callback) {
        return new Promise((resolve) => {
            let counter = 0;
            const id = setInterval(() => {
                counter++;
                callback();  // Execute the callback function
                if (counter === times) {
                    clearInterval(id);
                    resolve(counter);
                }
            }, interval);
        });
    }

    waitForStop(socket) {
        return new Promise((resolve) => {
            socket.once('stop', (data) => {
                resolve(data);
            });
        });
    }
}

