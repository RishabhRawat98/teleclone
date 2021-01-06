// const db = require ('../db/config')
// const SQL = require("sql-template-strings");
// const { resolve } = require('path');
// const { rejects } = require('assert');

// class Tele {
//     constructor(data){
//         this.id = data.id
//         this.title = data.title
//         this.user = data.user
//         this.body = data.body
//     }

//     // static get all() {
//     //     return new Promise (async (resolve, reject) => {
//     //         const teleData = await db.run(SQL `SELECT * FROM tele;`)
//     //         const tel =
//     //     })
//     // }
//     static create(title, user, body, ts) {
//         return new Promise (async (resolve, reject) => {
//             try{
//                 let teleData = await db.run(SQL `INSERT INTO tele (title, user, body, ts) VALUES (${title}, ${user}, ${body}, ${ts}) RETURNING *`);
//                 let newTele = new Tele(teleData.rows[0]);
//                 resolve (newTele);
//             }catch(err) {
//                 reject('Error creating article')
//             }
//         });

//     }
// }

// module.exports = Tele;