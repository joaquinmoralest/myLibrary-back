import { BookModel } from "../models/book.js";

export class BookController {
  static async getAll(req, res) {
    const books = await BookModel.getAll();

    res.json(books);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const book = await BookModel.getById({ id });

    res.json(book);
  }
}
