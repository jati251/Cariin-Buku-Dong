import { FETCH_WISHLIST, USER_LOGIN } from "../actions/actionType"

const initialState = {
    user:{},
    wishlist:[]
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case FETCH_WISHLIST:
            return {
                ...state,
                wishlist: action.payload
            }
        default:
            return state
    }
}

export default userReducer