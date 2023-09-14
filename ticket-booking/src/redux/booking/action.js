import {CREATE,REMOVE} from './actionType'

export const create = (value) => { 
        return {
             type:CREATE,
             payload:value
        }
}

export const remove = (value) => { 
    return {
         type:REMOVE,
         payload:value
    }
}