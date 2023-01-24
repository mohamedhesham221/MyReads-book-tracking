import PropTypes from "prop-types";
import Book from "../Book";

const CuurRead = ({ shelf }) => {
  return (
    <>
      <section>
        <h2 className="mybooks-heading">Currently Reading</h2>
        <Book books={shelf} />
      </section>
    </>
  );
};
export default CuurRead;
CuurRead.prototype = {
  shelf: PropTypes.array,
}