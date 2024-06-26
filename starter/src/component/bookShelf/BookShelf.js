import "./BookShelf.scss";
import { BookStorage } from "../index";
const defaultUrl =
  "http://books.google.com/books/content?id=X8diAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api";

const BookShelf = (props) => {
  const { listBook, title, onChangeCategory, category } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {listBook.map((item) =>
            item.shelf === category ? (
              <li key={item.id}>
                <BookStorage
                  bookId={item.id}
                  bookTitle={item.title}
                  bookAuthors={item.authors}
                  bookUrl={item.imageLinks?.thumbnail || defaultUrl}
                  onChangeCategory={onChangeCategory}
                  bookShelf={item.shelf}
                ></BookStorage>
              </li>
            ) : null
          )}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
