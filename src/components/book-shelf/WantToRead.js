import PropTypes from "prop-types";
import Book from "../Book";

const WantToRead = ({shelf}) => {
    return (
    <>
    <section>
    <h2 className="mybooks-heading">Want to read</h2>
    <Book books={shelf} />

    </section>
    </>
  )
}
export default WantToRead;
WantToRead.prototype = {
  shelf: PropTypes.array,
};
