import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "509@+MYsql",
    database: "blog",
    multipleStatements: true,
})