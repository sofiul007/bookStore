import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../redux/books/thunk/updateBook";

function EditBook({ setEditMode, editMode, editBook }) {
  const [name, setName] = useState(editBook.name);
  const [author, setAuthor] = useState(editBook.author);
  const [thumbnail, setThumbnail] = useState(editBook.thumbnail);
  const [price, setPrice] = useState(editBook.price);
  const [rating, setRating] = useState(editBook.rating);
  const [featured, setFeatured] = useState(editBook.featured);
  const dispatch = useDispatch();
  const reset = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBook({
        id: editBook.id,
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      })
    );
    setEditMode(false);
    reset()
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Edit The Book</h4>
        <form className="book-form" onSubmit={submitHandler}>
          <div className="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label for="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            <label for="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Edit Book
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditBook;
