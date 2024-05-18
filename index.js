const express = require('express')
const app = express()

//io
const server = require('http').createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:5000",
      methods: ["GET", "POST"]
    }
});


//use template engine ejs
app.set('view engine', 'ejs')

app.use(express.static('public'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/*', (req, res) => {
  res.render('index');
})

app.listen(5000, (req, res)=> {
    console.log(`server listening on port 5000`);
})

io.on("connection", (socket) => {
    console.log(socket.id);
});

io.listen(3000);