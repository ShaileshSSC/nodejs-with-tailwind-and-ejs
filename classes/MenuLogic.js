export default class MenuLogic {
    constructor(UIhandler) {
        this.UIhandler = UIhandler;
    }

    addEvents(player) {

        this.UIhandler.load(this.UIhandler.pages.Home, player)

        player.socket.on("createRoomPage", () => {
           // console.log(`${player.id} visiting createRoomPage`);
            this.UIhandler.load(this.UIhandler.pages.CreateRoom, player);
        });

        player.socket.on("homePage", () => {
            //console.log(`${player.id} visiting homePage`);
            this.UIhandler.load(this.UIhandler.pages.Home, player);
        });

        player.socket.on("createRoom", () => {
             //console.log(`${player.id} wants to create a Room`);
             this.UIhandler.load(this.UIhandler.pages.Lobby, player);
        });
    }

    init() {
    }

    async update () {

       
    }


}