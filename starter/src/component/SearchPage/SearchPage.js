import { useState, useEffect } from "react";
import { BookStorage } from "../../component";
import { getAll, update, search } from "../../BooksAPI";
import "./SearchPage.scss";
const defaultUrl =
  "http://books.google.com/books/content?id=X8diAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api";

const SearchPage = () => {
  const [listBook, setListBook] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [listSearchBook, setListSearchBook] = useState([]);
  useEffect(() => {
    const fetchSearchBooks = async () => {
      try {
        const books = await search(searchValue, 10);
        if (!books.error) {
          setListSearchBook(books);
        } else {
          setListSearchBook([]);
        }
      } catch (error) {
        setListSearchBook([]);
      }
    };
    fetchSearchBooks();
  }, [searchValue]);
  const fetchBooks = async () => {
    const books = await getAll();
    setListBook(books);
  };
  const updateBook = async (book, shelf) => {
    await update(book, shelf);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const onChangeCategory = (selectedValue, bookInfo) => {
    updateBook(bookInfo, selectedValue);
  };
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const checkShelfBook = (bookId) => {
    const book = listBook.find((item) => item.id === bookId);
    if (book) {
      return book.shelf;
    } else {
      return null;
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onChangeSearchValue}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {listSearchBook.length === 0
            ? null
            : listSearchBook.map((item) => (
                <li key={item.id}>
                  <BookStorage
                    bookId={item.id}
                    bookTitle={item.title}
                    bookAuthors={item.authors}
                    bookUrl={item.imageLinks?.thumbnail || defaultUrl}
                    bookShelf={checkShelfBook(item.id)}
                    onChangeCategory={onChangeCategory}
                  ></BookStorage>
                </li>
              ))}
        </ol>
      </div>
    </div>
  );
};
export default SearchPage;
