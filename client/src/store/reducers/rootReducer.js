import { combineReducers } from 'redux'
import bookReducer from './bookReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    books: bookReducer,
    user: userReducer
})

export default rootReducer