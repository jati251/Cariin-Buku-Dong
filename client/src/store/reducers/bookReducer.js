import { FETCH_BOOKS, FETCH_BOOK_DETAIL } from "../actions/actionType"

const initialState = {
    books: [],
    book: {}
}
function bookReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case FETCH_BOOK_DETAIL:
            return {
                ...state,
                book: action.payload
            }
        default:
            return state
    }



}

export default bookReducer