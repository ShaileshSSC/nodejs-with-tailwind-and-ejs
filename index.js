const express = require('express');
const app = express();

const router = require('./router/router')

const port = 3000;

app.use(express.static('public'))

app.use('/', router);

app.listen(port, ()=> {
    console.log(`listening on port yeyt ${port}`)
})