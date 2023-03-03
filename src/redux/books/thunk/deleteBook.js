import { deleteBooks } from "../actionCreator";

export const deleteBook = (id) => {
  return async(dispatch)=>{
    console.log(id);
  const resoponse=await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
    });

    dispatch(deleteBooks(id));
  };
};
