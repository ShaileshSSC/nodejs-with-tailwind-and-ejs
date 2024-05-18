import express from 'express';
const app = express()

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
   cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"]
  }
});

// Game classes
import Game from './classes/Game.js';

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/*', (req, res) => {
  res.render('app');
})

let game = new Game();

game.init();

app.listen(5000, (req, res)=> {
    console.log(`server listening on port 5000`);
})

io.on("connection", (socket) => {
    console.log(`new user ${socket.id} joined the game!`);

    socket.emit("loadPage", 'Home');
});

io.listen(3000);