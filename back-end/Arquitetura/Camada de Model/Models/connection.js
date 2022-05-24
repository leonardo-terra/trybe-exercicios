const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'leonardo-user',
  password: 2019,
  database: 'model_example'
});

module.exports = connection;