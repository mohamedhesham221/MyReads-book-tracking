import { Link } from "react-router-dom";
import CurrRead from "../components/book-shelf/CurrRead";
import WantToRead from "../components/book-shelf/WantToRead";
import Read from "../components/book-shelf/Read";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksApi";

const BookShelfPage = () => {
  const [currentlyReading, setCrrBooks] = useState([]);
  const [wantToRead, setWantToBooks] = useState([]);
  const [read, setRead] = useState([]);

  // get all the books from the backend server and and filter it into 3 shelves
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setCrrBooks(books.filter((book) => book.shelf === "currentlyReading"));
      setWantToBooks(books.filter((book) => book.shelf === "wantToRead"));
      setRead(books.filter((book) => book.shelf === "read"));
    });
  }, []);
  return (
    <>
      <header className="reads-header">
        <h1>MyReads</h1>
      </header>
      <div className="container">
        <Link to="/search-page" className="add-book" title="add new book">
          ✚
        </Link>
        <CurrRead shelf={currentlyReading} />
        <WantToRead shelf={wantToRead} />
        <Read shelf={read} />
      </div>
    </>
  );
};
export default BookShelfPage;
