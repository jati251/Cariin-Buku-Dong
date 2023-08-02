import { FETCH_BOOK_DETAIL, FETCH_BOOKS, FETCH_WISHLIST, USER_LOGIN } from "./actionType"
const baseUrl = "http://localhost:3000/";

import Swal from 'sweetalert2'

export const fetchBooksSuccess = (payload) => {
    return {
        type: FETCH_BOOKS,
        payload: payload
    }
}

export const fetchWishlistSuccess = (payload) => {
    return {
        type: FETCH_WISHLIST,
        payload: payload
    }
}

export const fetchBookDetailSuccess = (payload) => {
    return {
        type: FETCH_BOOK_DETAIL,
        payload: payload
    }
}

export const userLoginSuccess = (payload) => {
    return {
        type: USER_LOGIN,
        payload: payload
    }
}

export const fetchBooksSearch = (keyword) => {
    const token = localStorage.access_token;
    return async (dispatch) => {
        try {
            let response = await fetch(
                baseUrl + "books?keyword="+keyword, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );
            let result = await response.json();
            await dispatch(fetchBooksSuccess(result.items));
        } catch (error) {
            console.log(error);
        }
    }
}

export const findBook = (id) => {
    return async (dispatch) => {
        const token = localStorage.access_token;
        try {
            let response = await fetch(
                baseUrl + "/item/" + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': token
                }
            }
            );
            let result = await response.json();
            // console.log(result.item);
            await dispatch(fetchBookDetailSuccess(result.item));
        } catch (error) {
            console.log(error);
        }
    }
}

export const registerUser = (payload) => {
    const token = localStorage.access_token;
    return async (dispatch) => {
        try {
            let response = await fetch(
                baseUrl + "/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': token
                },
                body: JSON.stringify(payload),
            }
            );
            let result = await response.json();
            if(!response.ok) throw {res:response.status,result} 
            // console.log(result);
            Swal.fire({
                icon: 'success',
                title: 'Success register user',
                showConfirmButton: false,
                timer: 1500
              })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: `Error ${error.res}`,
                text: error.result.message
              })
        }
    }
}

export const loginUser = (payload) => {
    return async (dispatch) => {
        try {
            let response = await fetch(baseUrl + `login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            console.log(response);
            let result = await response.json();
            if(!response.ok) throw {res:response.status,result} 
            localStorage.access_token = result.access_token;
            localStorage.userId = result.userId;
            localStorage.email = result.email;
            dispatch(userLoginSuccess(result))
            Swal.fire({
                icon: 'success',
                title: 'Success logged in',
                showConfirmButton: false,
                timer: 1500
              })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: `Error ${error.res}`,
                text: error.result.message
              })
        }
    }
}
