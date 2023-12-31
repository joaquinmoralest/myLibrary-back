import express from "express";
import { booksRouter } from "./routes/books.js";
import { corsMiddleware } from "./middlewares/cors.js";
import { editionRouter } from "./routes/edition.js";
import { formatRouter } from "./routes/format.js";

const app = express();
const PORT = process.env.PORT ?? 1234;

app.use(corsMiddleware());
app.use("/books", booksRouter);
app.use("/editions", editionRouter);
app.use("/formats", formatRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
