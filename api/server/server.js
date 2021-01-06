// const express = require('express');
// const cors = require('cors');


// const server = express();
// server.use(cors());
// server.use(express.json());

// server.get('/', (req, res) => res.send('Welcome to our app!'))

//  module.exports = ser

const SQL = require('sql-template-strings');
const express = require('express');
const server = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const { Pool } = require("pg");
const pool = new Pool({database: 'tele'});

const run = (q, values, callback) => pool.query(q, values, callback);

server.use(cors());
server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.send('Hello!')
})

// server.post('/', async (req, res) => {
//     try {
//         const q = `SELECT * FROM cats;`
//         const dbData = await run(q)
//         const cats = dbData.rows 
//         res.status(200).json(cats)
//     } catch(err) {
//         console.error(err);
//         res.status(500).end()
//     }
// });

// app.get('/cats/:id', async (req, res) => {
//     try {
//         const q = `SELECT * FROM cats WHERE id = $1;`;
//         const dbData = await run(q, [req.params.id]);
//         const cat = dbData.rows[0] ;
//         res.status(200).json(cat);
//     } catch(err) {
//         console.error(err);
//         res.status(500).end();
//     }
// })

server.get('/post', (req, res) => {
    res.send('Hello here!')
})

//removed async
server.post('/post', async (req, res) => {
    try {
        const q = SQL`INSERT INTO tele (title, userName, article) VALUES ('title', 'userName', 'body') RETURNING *;`;
       //removed await before run
        const dbData = await run( q, [req.body.title, req.body.userName, req.body.article]);
        const newPost = dbData.rows[0];
        res.status(201).json(newPost);
        //res.status(201).send('info received')
        //res.json(newPost);
    } catch(err) {
        res.status(500).end();
    }   
})

server.listen(3000, () => console.log('serving on 3000'))