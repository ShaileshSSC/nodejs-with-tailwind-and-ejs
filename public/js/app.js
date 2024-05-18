import pageLoader from './pageLoader.js';
import user from './user.js';

export default function App(){
    const socket = io("http://localhost:3000");
    pageLoader(socket);
    user(socket);
}

App();



