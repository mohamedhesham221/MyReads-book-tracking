import Books from "./Books";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksApi";
import { useEffect, useState } from "react";

const InpSearch = () => {
  const [errMsg, setErrMsg] = useState(null);
  let [serachReturnedBooks, setReturnedBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  let bookFound;

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setAllBooks(books);
    });
  }, [allBooks]);

  serachReturnedBooks.map((bookS) => {
    bookFound = allBooks.find((bookA) => {
      return bookS.id === bookA.id
    });
    if (bookFound) {
      bookS.shelf = bookFound.shelf
    } else {
      bookS.shelf = "none"
    }
  })
  return (
    <>
      <header className="search-header">
        <Link to="/" className="btn-back" title="to bookshelf">
          ⇦
        </Link>
        {/*get books while typing in input filed with search method*/}
        <input
          type="search"
          placeholder="Serach by title, author or ISBN"
          onChange={(e) => {
            const query = e.target.value;
            if (query.length) {
              BooksAPI.search(query.trim()).then((data) => {
                if (data.error) {
                  setReturnedBooks([]);
                  setErrMsg("Sorry, we aren't found any books try again");
                } else {
                  setReturnedBooks(data);
                  setErrMsg(null);
                }
              });
            } else {
              setReturnedBooks([]);
            }
          }}
        />
      </header>
      <Books books={serachReturnedBooks} />
      {/*repreasent books that came from search method to books component*/}
      {errMsg ? <NotFound msg={errMsg} /> : null}
      {/*repreasent <Notfound /> component if no result matches input filed*/}
    </>
  );
};
export default InpSearch;
