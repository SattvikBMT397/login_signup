// const db = require('../config/db');

// const User ={
//     create:(user,callback)=>{
//         const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
//         db.query(query,[user.username, user.email, user.password], callback);
//     },
//     findbyEmail:(email,callback)=>{
//         const query = 'SELECT * FROM users WHERE email = ?';
//         db.query(query, [email], callback);
//     },
//     updateOtp: (email, otp, callback) => {
//         const query = 'UPDATE users SET otp = ? WHERE email = ?';
//         db.query(query, [otp, email], callback);
//     },  
//     clearOtp: (email, callback) => {
//         const query = 'UPDATE users SET otp = NULL WHERE email = ?';
//         db.query(query, [email], callback);
//     }
// }
// module.exports = User;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    otp: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
      tableName: 'Users'
});

module.exports = User;
