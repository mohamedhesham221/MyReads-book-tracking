import { Link } from "react-router-dom";
import BookShelf from "../components/book-shelf/BookShelf";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksApi";

const BookShelfPage = () => {
  const [currentlyReading, setCrrBooks] = useState([]);
  const [wantToRead, setWantToBooks] = useState([]);
  const [read, setRead] = useState([]);
  const [booksShelves, setBookShelves] = useState([]);

  // get all the books from the backend server and and filter it into 3 shelves
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setCrrBooks(books.filter((book) => book.shelf === "currentlyReading"));
      setWantToBooks(books.filter((book) => book.shelf === "wantToRead"));
      setRead(books.filter((book) => book.shelf === "read"));
    });
    // handle books for own shelf
    setBookShelves([
      {
        name: "currentlyReading",
        section: currentlyReading,
      },
      {
        name: "wantToRead",
        section: wantToRead,
      },
      {
        name: "read",
        section: read,
      },
    ]);
  }, [currentlyReading, wantToRead, read]);
  return (
    <>
      <header className="reads-header">
        <h1>MyReads</h1>
      </header>
      <div className="container">
        <Link to="/search" className="add-book" title="add new book">
          ✚
        </Link>
        <BookShelf shelves={booksShelves} />
      </div>
    </>
  );
};
export default BookShelfPage;
