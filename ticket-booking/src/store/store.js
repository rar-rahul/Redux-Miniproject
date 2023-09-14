import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore} from '@reduxjs/toolkit'
import {bookingReducer} from '../redux/booking/bookingReducer'

export const store = configureStore({
    reducer: {
       booking:bookingReducer
      },
})