import { combineReducers } from 'redux';
import { bookSticketsReducer } from './reducer/bookTicketsReducer';
// combineReducer kết hợp reducer lại với nhau

// import cart reducer
import cartReducer from './reducer/cartReducer';
import { cartApiReduxReducer } from './reducer/cartReduxApi';
import diceReducer from './reducer/diceReducer';
import { keobuabaoReducer } from './reducer/keobuabaoReducer';

// store chứa tổng toàn bộ ứng dụng
const rootReducers = combineReducers({
    cartReducerStore: cartReducer,
    diceReducerStore: diceReducer,
    keobuabaoReducerStore: keobuabaoReducer,
    bookSticketsReducerStore: bookSticketsReducer,
    _todoPoduct: cartApiReduxReducer

});

export default rootReducers;