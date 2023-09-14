import React from 'react'
import BookCard from './BookCard'
import { useDispatch, useSelector } from 'react-redux'

const Books = ({setBookId}) => {
  const store = useSelector(state => state.Book)
  const dispatch = useDispatch()
  return (
    <div>
       <div className="lws-bookContainer" >
       {store.book.map((books) => {
       
        return(
          <BookCard book={books} key={books.id} setBookId={setBookId}/>
        );
       })
       
       }
      
          
    </div>
    </div>
  )
}

export default Books
