import express from 'express';
import fs from 'fs';
import path from 'path';
const app = express();

export default class Router {
    constructor(){

    }

    async init(){
        console.log('router initialized');
        const file = path.join('public', 'screen.html');
        app.use(express.static('public'))
        app.get('/*', (req, res) => {
            fs.readFile(file, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
                res.type('text/html');
                res.send(data);
            });
        })
        app.listen(5000, (req, res)=> {
            console.log(`router listening on port 5000`);
        })
    }


}