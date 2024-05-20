export default class ActionCreateRoom {
    constructor() {
        this.registeredMethods = [];
    }

    init(socket) {
        // socket.on("ActionCreateRoom", () => {
        //     this.trigger(socket);
        // })
        this.trigger(socket);
    }

    subscribe(func) {
        this.registeredMethods.push(func);
    }

    trigger(socket) {
        this.registeredMethods.forEach(func => func(socket));
    }


}