import { Router } from "express";
import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "librarydb",
};

const db = await mysql.createConnection(config);

export const booksRouter = Router();

booksRouter.get("/", async (req, res) => {
  const [books] = await db.query("SELECT * FROM book");

  res.json(books);
});

booksRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const [book] = await db.query(`SELECT * FROM book WHERE id = ${id}`);

  res.json(book);
});
