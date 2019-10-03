const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

nextApp.prepare()
    .then(()=>{
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(8080, (err) => {
            if(err) throw err;
            console.log("> Ready on Server Port: 8080")
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    })