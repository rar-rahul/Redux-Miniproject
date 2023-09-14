import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    book: [],
  };

export const BookSlice = createSlice({
    name:"Books",
    initialState,
    reducers:{
        addBook:( state,action ) => {
            return { ...state, book:[...state.book,action.payload] };
        },
        updateBook:(state,action) => {
            console.log("test update")
         },
        deletBook:(state,action) => { 
           
            return {...state, 
            book:state.book.filter((item) => item.id !== action.payload.id )
             }
        }
    }
})

export const {addBook,updateBook,deletBook} = BookSlice.actions
export const BookReducer = BookSlice.reducer