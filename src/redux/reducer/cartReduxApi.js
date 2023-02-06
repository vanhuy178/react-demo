
import { GET_ALL_PRODUCT, GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../type/cartApiRedux';

const initProduct = {
	numberCartProduct: 0,
	Carts: [], // nơi nhận được xử lý để có dữ liệu để thao tác trên giao diện
	_products: [] // hứng dữ liệu từ call api
}

export const cartApiReduxReducer = (state = initProduct, action) => {
	switch (action.type) {
		case GET_ALL_PRODUCT:
			return {
				...state,
				_products: action.payload
			}
		case GET_NUMBER_CART:
			return {
				...state
			}
		case ADD_CART:
			if (state.numberCartProduct === 0) {
				let cart = {
					id: action.payload.id,
					quantity: 1,
					title: action.payload.title,
					image: action.payload.image,
					price: action.payload.price
				}
				state.Carts.push(cart);
			}
			else {
				let check = false;
				state.Carts.map((item, key) => {
					if (item.id === action.payload.id) {
						state.Carts[key].quantity++;
						check = true;
					}
				}
				);
				if (!check) {
					let _cart = {
						id: action.payload.id,
						quantity: 1,
						title: action.payload.title,
						image: action.payload.image,
						price: action.payload.price
					}
					state.Carts.push(_cart);
				}
			}
			return {
				...state,
				numberCartProduct: state.numberCartProduct + 1
			}
		case INCREASE_QUANTITY:
			state.numberCartProduct++
			// take index from array Carts 

			state.Carts[action.payload].quantity++;

			return {
				...state
			}
		case DECREASE_QUANTITY:
			// take index from array Carts 
			let quantity = state.Carts[action.payload].quantity;
			if (quantity > 1) {
				state.numberCartProduct--;
				state.Carts[action.payload].quantity--;
			}

			return {
				...state
			}
		case DELETE_CART:
			// take index from array Carts 
			let quantity_ = state.Carts[action.payload].quantity;
			return {
				...state,
				numberCartProduct: state.numberCartProduct - quantity_,
				Carts: state.Carts.filter(item => {
					return item.id !== state.Carts[action.payload].id
				})

			}
		default:
			return { ...state }
	}
}
