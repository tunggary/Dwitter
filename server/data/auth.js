import { db } from "../db/database.js";

export async function findByUsername(username) {
  return db
    .execute("SELECT * FROM users where username = ?", [username])
    .then((res) => res[0][0]);
}

export async function findById(id) {
  return db
    .execute("SELECT * FROM users where id = ?", [id])
    .then((res) => res[0][0]);
}

export async function createUser(user) {
  const { username, password, name, email, url } = user;
  return db
    .execute(
      "INSERT INTO users (username, password, name, email, url) VALUES (?,?,?,?,?)",
      [username, password, name, email, url]
    )
    .then((res) => res[0].insertId);
}
