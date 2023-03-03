import { loadBooks } from "../actionCreator";

export const fetchBook = (value) => {
  
  return async (dispatch) => {
    let queryString = "";
    if (typeof value === "string") {
      queryString = `name_like=${value}`;
    }
    if (value === "featured") {
      queryString = `featured_like=${true}`;
    }
    if(value ==="all"){
      queryString=""
    }

    const response = await fetch(`http://localhost:9000/books?${queryString}`);
    const books = await response.json();

    dispatch(loadBooks(books));
  };
};
