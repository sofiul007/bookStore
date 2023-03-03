import { updateBooks } from "../actionCreator"

export const updateBook=(book) =>{

  return async (dispatch) =>{

    const response = await fetch(`http://localhost:9000/books/${book.id}`,{
        method:"PATCH",
        body:JSON.stringify(book),
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
    })

  const  books = await response.json()

  dispatch(updateBooks(books))


  }
} 