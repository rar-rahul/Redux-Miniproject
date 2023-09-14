import React, { useState, useId, useEffect } from "react";
import { addBook,updateBook } from "../redux/book";

import { useSelector, useDispatch } from "react-redux";
const initialBook = {
  id: Math.random() * 10,
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",
  featured: false,
};
const BookForm = ({ bookId, setBookId }) => {
  const [bookData, setBookData] = useState(initialBook);
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Book);

  const fetchEdit = store.book.filter(bookitem => bookitem.id === bookId)[0]
  console.log("edit=",fetchEdit)

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     if(bookId){
      dispatch(updateBook(bookId,bookData))
     }else{
      dispatch(addBook(bookData));
     }
    setBookData(initialBook);
    setBookId(null)
  };

  useEffect(() => { 
    fetchEdit && setBookData(fetchEdit)
  },[fetchEdit])

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={bookData.name}
              onChange={handleChange}
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
              value={bookData.author}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              value={bookData.thumbnail}
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              onChange={handleChange}
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
                value={bookData.price}
                onChange={handleChange}
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
                max="5"
                value={bookData.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              checked=""
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              value={bookData.featured}
              onChange={handleChange}
            />
            <label for="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
