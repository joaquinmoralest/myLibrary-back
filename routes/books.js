import { Router } from "express";
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

export const booksRouter = Router();

booksRouter.get("/", async (req, res) => {
  const [books] = await connection.query("SELECT * FROM book");

  res.json(books);
});

booksRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const [book] = await connection.query(`SELECT * FROM book WHERE id = ${id}`);

  res.json(book);
});
