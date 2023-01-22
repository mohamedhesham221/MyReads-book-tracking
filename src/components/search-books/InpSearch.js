import Books from "./Books";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../BooksApi";
import { useState } from "react";

const InpSearch = () => {
  const [books, setBooks] = useState([]);
  const [errMsg, setErrMsg] = useState(null);


  return (
    <>
      <header className="search-header">
        <Link
          to="/"
          className="btn-back"
          title="to bookshelf"
        >
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
                console.log(data)
                if (data.error) {
                  setBooks([]);
                  setErrMsg("Sorry, we aren't found any books try again");
                } else {
                  setBooks(data);
                  setErrMsg(null);
                }
              });
            } else {
              setBooks([]);
            }
          }}
        />
      </header>
      <Books books={books} /> {/*repreasent books that came from search method to books component*/}
      {errMsg ? <NotFound msg={errMsg} /> : null} {/*repreasent <Notfound /> component if no result matches input filed*/}
    </>
  );
};
export default InpSearch;
