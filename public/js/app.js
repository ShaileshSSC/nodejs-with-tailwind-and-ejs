import pageLoader from './pageLoader.js';
// import user from './user.js';

export default class App{
    constructor() {
        const socket = io("http://localhost:3000");
        this.socket = socket;
        pageLoader(this.socket);
        // user(socket);
    }
}

new App();




