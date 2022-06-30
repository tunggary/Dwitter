import { sequelize } from "../db/database.js";
import SQ from "sequelize";
const DataTypes = SQ.DataTypes;

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

export async function findByUsername(username) {
  return User.findOne({ where: { username } });
  // return db.execute("SELECT * FROM users where username = ?", [username]).then((res) => res[0][0]);
}

export async function findById(id) {
  return User.findByPk(id);
  // return db.execute("SELECT * FROM users where id = ?", [id]).then((res) => res[0][0]);
}

export async function createUser(user) {
  return User.create(user).then((data) => data.dataValues.id);
  // const { username, password, name, email, url } = user;
  // return db.execute("INSERT INTO users (username, password, name, email, url) VALUES (?,?,?,?,?)", [username, password, name, email, url]).then((res) => res[0].insertId);
}
