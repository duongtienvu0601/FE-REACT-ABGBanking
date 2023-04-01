import React from "react";

function DataBase() {
  const { createPool } = require("mysql");
  const { Result } = require("postcss");

  const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "abgbanking",
    connectionLimit: 10,
  });
  pool.query(`select * from users`, (err, result, fields) => {
    if (err) {
      return console.log(err);
    }
    return console.log(result);
  });
}
export default DataBase;
