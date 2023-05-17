import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookPage from "../src/pages/BookPage";

export default function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
  });

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
    getBooks();
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Books</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<Home books={books} form={form} handleChange={handleChange} postBook={postBook} deleteBook={deleteBook} />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<BookPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
