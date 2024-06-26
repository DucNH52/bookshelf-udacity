import { useState, useEffect } from "react";
import { BookShelf } from "../../component";
import { getAll, update } from "../../BooksAPI";
import "./IndexPage.scss";
const IndexPage = () => {
  const [listBook, setListBook] = useState([]);

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

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            listBook={listBook}
            onChangeCategory={onChangeCategory}
            category={"currentlyReading"}
          ></BookShelf>
          <BookShelf
            title={"Want to Read"}
            listBook={listBook}
            onChangeCategory={onChangeCategory}
            category={"wantToRead"}
          ></BookShelf>
          <BookShelf
            title={"Read"}
            listBook={listBook}
            onChangeCategory={onChangeCategory}
            category={"read"}
          ></BookShelf>
        </div>
      </div>
      <div className="open-search">
        <a href="/search">Add a book</a>
      </div>
    </div>
  );
};
export default IndexPage;
