import React, { Component } from 'react'

export default class ModalCar extends Component {
    render() {
        const { id, name, img, price } = this.props.dataFromCarStore;
        const nameUpper = name.toUpperCase();
        return (
            <div className="modal fade" id={`exampleModal-${id}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title " id="exampleModalLabel">{nameUpper}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={img} style={{ width: '100%' }} alt={`${id}-${name}`} />
                            <p className='mt-2'>Giá: {price}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
