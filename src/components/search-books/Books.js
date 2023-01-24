import PropTypes from "prop-types";
import Book from "../Book";
const Books = ({ books}) => {
  
  return (
    <Book books={books}/>
  );
};
export default Books;
Books.prototype = {
  books: PropTypes.array,
};
