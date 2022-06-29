import mysql from "mysql2";
import { config } from "../config.js";

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
});

export const db = pool.promise();
