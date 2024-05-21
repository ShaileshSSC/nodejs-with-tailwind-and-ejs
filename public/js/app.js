const pageLoader = require('./pageLoader');
// import user from './user.js';

class App{
    constructor() {
        const socket = io("http://localhost:3000");
        this.socket = socket;
        pageLoader(this.socket);
        // user(socket);
    }
}





