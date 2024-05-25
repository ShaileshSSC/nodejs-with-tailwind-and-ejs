export default class MenuLogic {
    constructor(UIhandler) {
        this.UIhandler = UIhandler;
        this.mainloop = true;
    }

    addEvents(player) {

        this.UIhandler.load(this.UIhandler.pages.Home, player)

        player.socket.on("createRoomPage", () => {
           // console.log(`${player.id} visiting createRoomPage`);
            this.UIhandler.load(this.UIhandler.pages.CreateRoom, player);
            this.action(['create', player]);
        });

        player.socket.on("homePage", () => {
            //console.log(`${player.id} visiting homePage`);
            this.UIhandler.load(this.UIhandler.pages.Home, player);
            this.action(['home', player]);
        });

        player.socket.on("createRoom", () => {
             //console.log(`${player.id} wants to create a Room`);
                this.exit(['game', player]);
                this.mainloop = false;
                // Ensure the promise is resolved only once
        });
    }

    init() {
    }

    async update () {

        this.mainloop = true;

        while(this.mainloop) {
            const action = await Promise.race([
                this.waitingForAction()
            ]);

            console.log(action[0], action[1].id);
        }
    }

    waitingForAction() {
        return new Promise((resolve) => {
            this.action = resolve;
          });
      }

    waitingForExit() {
        return new Promise((resolve) => {
            this.exit = resolve;
          });
      }

}