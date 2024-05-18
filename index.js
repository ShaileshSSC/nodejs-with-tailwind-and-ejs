const express = require('express')
const app = express()

//use template engine ejs
app.set('view engine', 'ejs')

app.use(express.static('views'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render('./home/home');
})

app.post('/lobby', (req, res) => {
    res.render('./lobby/lobby');
})

app.listen(5000, (req, res)=> {
    console.log(`server listening on port 5000`);
})