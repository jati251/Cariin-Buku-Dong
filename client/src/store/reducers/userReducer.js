import { USER_LOGIN } from "../actions/actionType"

const initialState = {
    user:{}
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default userReducer