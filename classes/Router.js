import express from 'express';
const app = express()

export default class Router {
    constructor(){

    }

    init(){
        console.log('router init..');
        app.set('view engine', 'ejs')
        app.use(express.static('public'))
        app.get('/*', (req, res) => {
            res.render('app');
        })
        app.listen(5000, (req, res)=> {
            console.log(`router listening on port 5000`);
        })
    }


}