import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "../redux/books/thunk/fetchBooks";
import AddBook from "./AddBook";
import Book from "./Book";
import EditBook from "./EditBook";

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const[editBook,setEditBook]=useState({})
  const [status,setStatus]=useState("")

  const editData = (data) => {
    setEditBook(data)
  };
  const filterHandler =(value) =>{
    dispatch(fetchBook(value))
    setStatus(value)
  }


  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  return (
    <>
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button className={`filter-btn ${status==="all" && "active-filter"} `} id="lws-filterAll"onClick={()=>filterHandler("all")}
            >
              All
            </button>
            <button className={`filter-btn ${status==="featured" && "active-filter"} `} id="lws-filterFeatured" onClick={()=>filterHandler("featured")}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="lws-bookContainer">
          {books.map((book) => (
            <Book book={book} key={book.id} setEditMode={setEditMode} editMode={editMode} editData={editData} />
          ))}
        </div>
      </div>
      {editMode ? (
        <EditBook setEditMode={setEditMode} editMode={editMode} editBook={editBook} />
      ) : (
        <AddBook setEditMode={setEditMode} editMode={editMode} editData={editData} />
      )}
    </>
  );
}

export default BookList;
