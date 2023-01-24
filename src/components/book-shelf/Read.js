import PropTypes from "prop-types";
import Book from "../Book";

const Read = ({ shelf }) => {
  return (
    <>
      <section>
        <h2 className="mybooks-heading">Read</h2>
        <Book books={shelf} />
      </section>
    </>
  );
};
export default Read;
Read.prototype = {
  shelf: PropTypes.array,
};
