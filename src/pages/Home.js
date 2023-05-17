import { Link } from "react-router-dom";

export default function Home({ books, form, handleChange, postBook, deleteBook }) {
  return (
    <div>
      <form onSubmit={postBook}>
        <input name="title" placeholder="Title" onChange={handleChange} value={form.title} />
        <input name="description" placeholder="Description" onChange={handleChange} value={form.description} />
        <input name="status" placeholder="Status" onChange={handleChange} value={form.status} />
        <input type="submit" />
      </form>
      <br />
      <br />
      <div className="book-wrap">
        {books.map((book) => {
          return (
            <div>
              <h3>
                <Link to={`/books/${book._id}`}>{book.name}</Link>
              </h3>
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
