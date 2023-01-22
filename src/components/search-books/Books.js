import { useState } from "react";
import * as BooksAPI from "../../BooksApi";

const Books = ({ books}) => {
  const [isVisible, setVisible] = useState(null);
  return (
    <div className="books-container">
      {/*book details*/}
      {books.map((book) => {
        const placeholderImg = "https://via.placeholder.com/100.png"
        return (
          <figure key={book.id} className="book">
            <img
              src={!book.imageLinks ? placeholderImg : book.imageLinks.thumbnail}
              alt={book.title}
              className="book-thumb"
            />
            <figcaption>
              <p className="book-title">{book.title}</p>
              <p className="book-author">
                {book.authors && book.authors.join(`\n`)}
              </p>
            </figcaption>
            <button
              className="open-selectbox"
              onClick={() => {
                setVisible(book.title);
              }}
            >
              ▼
            </button>
            <div className="shelf-changer">
              <select
                size="5"
                value={book.shelf}
                className={isVisible === book.title ? "show-selectbox" : null}
                onChange={(e) => {
                  BooksAPI.update(book, e.target.value) //update method for updating book shelf in server
                }}
              >
                <option disabled>move to ...</option>
                <option value="currentlyReading">currently reading</option>
                <option value="wantToRead">Want to read</option>
                <option value="read">read</option>
                <option value="none">none</option>
              </select>
            </div>
          </figure>
        );
      })}
    </div>
  );
};
export default Books;
