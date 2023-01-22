import { useState } from "react";
import * as BooksAPI from "../../BooksApi"

const Read = ({shelf}) => {
  const [isVisible, setVisible] = useState(null);

  console.log(shelf);
    return (
    <>
    <section>
    <h2 className="mybooks-heading">Read</h2>
    <div className="books-container">
      {/*book details*/}
    {shelf.map((book) => {
            return (
              <figure key={book.id} className="book">
                <img
                  src={book.imageLinks.thumbnail}
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
                  BooksAPI.update(book, e.target.value)
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
    </section>
    </>
  )
}
export default Read;