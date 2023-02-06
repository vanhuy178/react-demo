import callApi from "../../api/cart-redux-api";
import { GET_ALL_PRODUCT } from '../type/cartApiRedux';
export const fecthProductRequest = () => {
    return dispatch => callApi('/products', 'GET', null).then(res => dispatch(getAllProduct(res.data)))
}

// ACTION CREATOR

// GET ALL PRODUCT
export const getAllProduct = (payload) => {
    return {
        type: GET_ALL_PRODUCT,
        payload
    }
}
/*GET NUMBER CART*/
export function GetNumberCart() {
    return {
        type: 'GET_NUMBER_CART'
    }
}

export function AddCart(payload) {
    return {
        type: 'ADD_CART',
        payload
    }
}
export function UpdateCart(payload) {
    return {
        type: 'UPDATE_CART',
        payload
    }
}
export function DeleteCart(payload) {
    return {
        type: 'DELETE_CART',
        payload
    }
}

export function IncreaseQuantity(payload) {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}
export function DecreaseQuantity(payload) {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}


