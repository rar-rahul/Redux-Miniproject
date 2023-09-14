import {CREATE,REMOVE} from './actionType'

const initialState = { 
    booking:[]
}

export const bookingReducer = (state=initialState,action) => { 

    switch(action.type){
        case CREATE:
            return { 
                ...state,booking:[...state.booking,action.payload]
            }
            case REMOVE:
                return{
                    ...state,booking:state.booking.filter((b) => b.id !== action.payload.id)
                }

            default:
                return state
    }



}

 