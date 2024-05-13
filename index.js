const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/public'));

console.log(path.join(__dirname, '/public'))

app.use(express.static('app/public'))

app.use('/*', (req, res) => {
    res.send('index');
});

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})