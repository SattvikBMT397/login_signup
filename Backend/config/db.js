// const mysql = require("mysql2")
// const dotenv = require("dotenv").config();
// const db = mysql.createConnection({
// host: process.env.DATABASE_HOST, 
// user: process.env.DATABASE_USER,
// password: process.env.DATABASE_PASSWORD,
// database: process.env.DATABASE
// }
// )
// db.connect((err)=>{
//     if(err){
//     console.log("Error Connecting to the database",err.stack);
//     return;
//     }
//     else{
//         console.log("Connected to the database as id");
//     }
// })

// module.exports= db;

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
