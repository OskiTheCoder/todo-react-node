const Pool = require("pg").Pool;
const pass = require("./pass");

const pool = new Pool({
  user: "postgres",
  password: pass.pass,
  host: "localhost",
  port: 5432,
  database: "todo_app",
});

module.exports = pool;
