const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 1920,
    user: "root",
    password: "Stomas.2024",
    database: "api_rest"
});

connection.connect((err) => {

    if (err) {
        console.log(err);
    } else {
        console.log("Conectado a MySQL");
    }

});

module.exports = connection;