import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Book from "./components/Book";

export default function App() {
  const [books, setBooks] = useState([]);

  //   run getBooks on page load
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = "http://localhost:8080/books";
    const res = await axios.get(API);
    setBooks(res.data);
    console.log(res.data);
  }

  async function postBook() {
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, form);
    console.log(res.data);
  }

  async function deleteBook(id) {
    const API = `http://localhost:8080/books/${id}`;
    await axios.delete(API);
    getBook();
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">
      <h1>Books</h1>
      <form onSubmit={postBook}>
        <input name="title" placeholder="title" onChange={handleChange} />
        <input name="description" placeholder="description" onChange={handleChange} />
        <input name="status" placeholder="status" onChange={handleChange} />
        <input type="submit" />
      </form>
      <div className="book-wrap">
        {books.map((book) => {
          return (
            <div>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>{book.status}</p>
              <button onClick={() => deleteBook(book._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
