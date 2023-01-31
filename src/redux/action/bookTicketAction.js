// booking tickets section
import { BOOKING_CHAIR, CANCELED_BOOKING, RESET_BOOKING } from "../type/bookTicketsType";

export const bookingChairAction = (aChair) => {
    return {
        type: BOOKING_CHAIR,
        payload: aChair
    }
}
export const cancledBookingChair = (idChair) => {
    return {
        type: CANCELED_BOOKING,
        payload: idChair
    }
}

export const resetBooking = () => {
    return {
        type: RESET_BOOKING
    }
}