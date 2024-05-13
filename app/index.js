const express = require('express');
const app = express();
const path = require('path');

const router = require('./router/router')

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));

console.log(path.join(__dirname, '/public'))
console.log('test23');

app.use(express.static('app/public'))

app.use('/', router);

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})