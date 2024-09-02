const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sneakers',
    password: '',
});

module.exports = pool.promise();