const mysql = require("mysql");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cupid123',
  insecureAuth: true
});

db.connect();

module.exports = db;
