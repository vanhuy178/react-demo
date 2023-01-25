import React, { Component } from 'react'
import './style.css';
import DataFilm from '../../asset/dataCar.json';
export default class RenderFilm extends Component {

    renderFilm() {

        return DataFilm.map((item, index) => {
            return (
                <div className="col-md-3">
                    <div className=" card" style={{ width: '18rem' }}>
                        <img src={item.hinhAnh} className="card-img-top" alt={item.biDanh} style={{ height: "300px" }} />
                        <div className="card-body" style={{ fontSize: "13px" }}>
                            <h5 className="card-title text-left">{item.tenPhim}</h5>
                            <p className="card-text">{item.moTa.length > 80 ? item.moTa.substring(0, 80) : item.moTa}...</p>
                            <p className="card-text">{item.ngayKhoiChieu}</p>
                            <a className="card-text">{item.trailer}</a>
                        </div>
                    </div>
                </div>
            )
        });
    }
    render() {
        console.log(DataFilm);
        return (
            <div className="film">
                <div className="" style={{ backgroundColor: "rgba(0, 0, 0, .5)", height: "100vh" }}>
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgba(87, 83, 149, .6)" }}>
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>



                    <div className="film-body container-fluid">
                        <div className="row mt-5">
                            {this.renderFilm()}
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}
