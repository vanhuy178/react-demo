import { BOOKING_CHAIR, CANCELED_BOOKING, RESET_BOOKING } from "../type/bookTicketsType";

const initialBookSticketState = {
    listBooking: [
        // { soGhe: 'A1', gia: 100000 } //vd dễ hiểu
    ]
}

export const bookSticketsReducer = (state = initialBookSticketState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case BOOKING_CHAIR:
            {
                let updatedListBookingChair = [...state.listBooking];
                let index = updatedListBookingChair.findIndex(item => item.soGhe === action.payload.soGhe);
                if (index !== -1) {
                    updatedListBookingChair.splice(index, 1);
                }
                else {
                    updatedListBookingChair.push(action.payload);
                }
                state.listBooking = updatedListBookingChair;
                // console.log(state);
                return { ...state }
            }
        case CANCELED_BOOKING: {
            let updatedListBookingChair = [...state.listBooking];
            let index = updatedListBookingChair.findIndex(item => item.soGhe === action.payload);
            if (index !== -1) {
                updatedListBookingChair.splice(index, 1);
            };
            state.listBooking = updatedListBookingChair;
            // console.log(state);
            return { ...state }
        }
        case RESET_BOOKING: {
            let updatedListBookingChair = []
            state.listBooking = updatedListBookingChair
            return { ...state }

        }

        default:
            return { ...state }
    }
}