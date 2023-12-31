import mysql from "mysql2/promise";
import "dotenv/config.js";

const DEFAULT_CONFIG = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "librarydb",
};

const connectionConfig = process.env.DATABASE_URL ?? DEFAULT_CONFIG;
const connection = await mysql.createConnection(connectionConfig);

export class BookModel {
  static async getAll() {
    const [books] = await connection.query("SELECT * FROM book ORDER BY id");

    return books;
  }

  static async getById({ id }) {
    const [book] = await connection.query("SELECT * FROM book WHERE id = ?", [
      id,
    ]);

    return book;
  }
}
