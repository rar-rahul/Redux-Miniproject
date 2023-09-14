import React, { useState } from 'react'
import Navbar from './Navbar'
import Books from './Books'
import BookForm from './BookForm'
import BookCard from './BookCard'
import {useSelector,useDispatch} from 'react-redux'
import { addBook } from '../redux/book'
const Main = () => {
  const [bookId,setBookId] = useState()
  const store = useSelector(state => state.Book)
  const dispatch = useDispatch()
  console.log(bookId)
 
  return (
    <div>
        <Navbar/>
    <div className="py-12 2xl:px-6">
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button>All</button>
            <button>Featured</button>
          </div>
        </div>
        <Books setBookId={setBookId}/>
      </div>
      <div>
        <BookForm setBookId={setBookId} bookId={bookId}/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Main
