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

export const editionRouter = Router();

editionRouter.get("/", async (req, res) => {
  const [editions] = await connection.query(
    "SELECT * FROM edition ORDER BY id"
  );

  res.json(editions);
});
