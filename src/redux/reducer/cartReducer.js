const initialCartState = {
    cart:
        [
            // dễ hình dung 
            // { idCartItem: 1, nameCartItem: "hello my friend", pictureCartItem: '', amount: 1, price: 10000000 }
        ]
}
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            {// findIndex trả lại -1 khi dk sai, còn lại trả lại index;
                let updatedProductCart = [...state.cart];
                let index = updatedProductCart.findIndex(product => product.idCartItem === action.payload.idCartItem);
                // nếu như sản phẩm tồn tại giống nhau thì sẽ khác -1 còn như nếu ;
                if (index !== -1) {
                    updatedProductCart[index].amount += 1;
                }
                else {
                    updatedProductCart.push(action.payload);
                }

                return { ...state, cart: updatedProductCart };
            }
        case 'DELETE_CART_ITEM':
            {// tạo ra biến deep copy không ảnh hưởng đến state cũ khi đang xử lý
                let updatedProductCart = [...state.cart];

                let index = updatedProductCart.findIndex(item => item.idCartItem === action.payload);

                if (index !== -1) {
                    updatedProductCart.splice(index, 1);
                }

                // state.cart = updatedProductCart;
                return {
                    ...state,
                    cart: updatedProductCart
                }
            }
        case 'INCREASE_OR_DECREASE': {
            let updatedProductCart = [...state.cart];
            let index = updatedProductCart.findIndex(item => item.idCartItem === action.payload.idCartItem);

            // if (index !== -1) {
            //     if (action.payload.status) {
            //         updatedProductCart[index].amount += 1;
            //     }
            //     else {
            //         if (updatedProductCart[index].amount > 1) {
            //             updatedProductCart[index].amount -= 1
            //         }
            //         else {..xử lý sự kiện}
            //     }

            // }
            if (index !== -1) {
                if (updatedProductCart[index].amount < 1 && action.payload.status === -1) {
                    updatedProductCart[index].amount = 0;
                }
                else {
                    updatedProductCart[index].amount += action.payload.status;
                }
            }

            return { ...state, cart: updatedProductCart }
        }
        default:
            return { ...state }
    }
}

export default cartReducer;