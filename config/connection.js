//requires mysql for connection
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql",
    database: "burgers_db",
  });
}
//makes the connection
connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`Connected at ${connection.threadId} \n`);
});
//exports
module.exports = connection;