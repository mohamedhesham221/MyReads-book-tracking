import PropTypes from "prop-types";
import Book from "../Book";
const BookShelf = ({ shelves }) => {
  return (
    <>
      {shelves.map((shelf) => {
        return (
          <section key={shelf.name}>
            <h2 className="mybooks-heading">{shelf.name}</h2>
            <Book books={shelf.section} />
          </section>
        );
      })}
    </>
  );
};
export default BookShelf;
BookShelf.prototype = {
  shelves: PropTypes.array,
};
