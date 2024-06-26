import "./BookStorage.scss";
import { PulldownSelect } from "../index";
const Book = (props) => {
  const {
    bookTitle,
    bookAuthors,
    bookUrl,
    onChangeCategory,
    bookId,
    bookShelf,
  } = props;
  const bookInfo = { bookTitle, bookAuthors, bookUrl, bookId, bookShelf };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${bookUrl}")`,
          }}
        ></div>
        <PulldownSelect
          onChangeCategory={onChangeCategory}
          bookInfo={bookInfo}
          bookShelf={bookShelf}
          type={bookShelf === null ? "Add" : "Move"}
        ></PulldownSelect>
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthors}</div>
    </div>
  );
};

export default Book;
