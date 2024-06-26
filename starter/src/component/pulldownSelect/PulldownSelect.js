import "./PulldownSelect.scss";
const PulldownSelect = (props) => {
  const { bookShelf } = props.bookInfo;

  return (
    <div className="book-shelf-changer">
      <select
        value={bookShelf === null ? "none" : bookShelf}
        onChange={(e) => props.onChangeCategory(e.target.value, props.bookInfo)}
      >
        <option value="title" disabled>
          {props.type === "Add" ? "Add..." : "Move to..."}
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default PulldownSelect;
