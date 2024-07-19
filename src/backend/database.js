const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "1521",
  user: "root",
  password: "220723",
  database: "weather_test",
});

module.exports = connection;

// port, user, password 만 사용자에 따라 바꿔주면 된다.