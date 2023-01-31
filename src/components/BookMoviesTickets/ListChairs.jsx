import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LIST_DATA_BOOKING_TICKETS } from '../../asset/constant'
import { bookingChairAction } from '../../redux/action/bookTicketAction';
class ListChairs extends Component {
    renderChairs = () => {
        return LIST_DATA_BOOKING_TICKETS.map((item) => {
            const { hang, danhSachGhe } = item;
            let styleTextAlpha = {};
            if (hang === '') {
                styleTextAlpha = {
                    marginLeft: '4.8%',
                }
            }
            else {
                styleTextAlpha = {
                    fontSize: '20px',
                }
            }
            return (
                <div className={`text-light m-2 `} style={styleTextAlpha}> <span> {hang}</span>  {danhSachGhe.map((itemChair, indexbtn) => {
                    // style gế đã đặt 
                    let styleBookedchair = '';
                    let disableChair = false;

                    if (itemChair.daDat === true) {
                        styleBookedchair = 'gheDuocChon';
                        disableChair = true
                    }

                    // style ghế đang đặt
                    let styleBookingChair = '';

                    // danh sach ghế đang đặt
                    let indexBookingChair = this.props.listBooking.findIndex(bookingChair => bookingChair.soGhe === itemChair.soGhe)
                    if (indexBookingChair !== -1) {
                        styleBookingChair = 'gheDangChon';
                    }

                    // { return this.renderRowButtunOrSpan(hang, disableChair, styleBookedchair, indexbtn, styleTextAlpha, styleBookingChair, itemChair) }
                    if (hang === '') {
                        return <span className='rowNumber' style={styleTextAlpha}>{indexbtn + 1}</span>
                    }
                    else {
                        return <button
                            disabled={disableChair}
                            className={`ghe ${styleBookedchair} ${styleBookingChair}`}
                            onClick={() => this.props.bookingChair(itemChair)
                            }
                        >{indexbtn + 1}</button>
                    }
                })
                }</div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderChairs()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        listBooking: state.bookSticketsReducerStore.listBooking
    }
}
const mapDispathToDrops = dispath => {
    return {
        bookingChair: (aChair) => {
            dispath(bookingChairAction(aChair))
        }
    }
}
export default connect(mapStateToProps, mapDispathToDrops)(ListChairs)