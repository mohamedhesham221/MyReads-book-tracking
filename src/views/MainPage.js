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
  const [booksState, setBooksState] = useState([]);

  // get all the books from the backend server and and filter it into 3 shelves
  useEffect(() => {
    //get books for first time component render
    BooksAPI.getAll().then((books) => {
      setBooksState(books);
    });
  }, []);
  const getMyBooks = () => {
    //get books for every time component update
    BooksAPI.getAll().then((books) => {
      setBooksState(books);
    });
  };
  useEffect(() => { 
    // handle books for own shelf
    setCrrBooks(booksState.filter((book) => book.shelf === "currentlyReading"));
    setWantToBooks(booksState.filter((book) => book.shelf === "wantToRead"));
    setRead(booksState.filter((book) => book.shelf === "read"));
  }, [booksState]);
  return (
    <>
      <header className="reads-header">
        <h1>MyReads</h1>
      </header>
      <div className="container">
        <Link to="/search-page" className="add-book" title="add new book">
          ✚
        </Link>
        <CurrRead shelf={currentlyReading} getMyBooks={getMyBooks} />
        <WantToRead shelf={wantToRead} getMyBooks={getMyBooks} />
        <Read shelf={read} getMyBooks={getMyBooks} />
      </div>
    </>
  );
};
export default BookShelfPage;
