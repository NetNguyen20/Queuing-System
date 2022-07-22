import React, { Component, useState } from "react";
import Nvabar from "../nvabar";
import to from "../../image/to.png"
import Select from 'react-select'
import { NavLink } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import Popup from "./Popup";

const Capsomoi = () => {
    const [dichvu, setDichvu] = useState("");

    const options = [
        { value: 'Khám tim mạch', label: 'Khám tim mạch' },
        { value: 'Khám sản - Phụ khoa', label: 'Khám sản - Phụ khoa' },
        { value: 'Khám răng hàm mặt', label: 'Khám răng hàm mặt' },
        { value: 'Khám tai mũi họng', label: 'Khám tai mũi họng' },
        { value: 'Khám hô hấp', label: 'Khám hô hấp' },
        { value: 'Khám tổng quát', label: 'Khám tổng quát' }

    ]

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    var showdate = new Date()
    var displaydate = showdate.getDate() + '/' + (showdate.getMonth()+ 1) +  '/' + showdate.getFullYear()

    return (
        <div>
            <Nvabar />
            <div className="tieude">
                <p style={{ top: "10px" }}>Cấp số</p>
                <img style={{ left: "302px", top: "20px" }} src={to} />
                <p style={{ left: "320px", width: "160px", top: "10px" }}>Danh sách cấp số</p>
                <img style={{ left: "495px", top: "20px" }} src={to} />
                <h5 style={{ left: "520px", top: "10px" }}>Cấp số mới</h5>
            </div>
            <div className="thongtin">
                <h5>Quản lý cấp số</h5>
            </div>

            <div className="capsomoi">
                <label> CẤP SỐ MỚI</label>
                <h5>Dịch vụ khách hàng lựa chọn</h5>

                <div className="capsodichvu">
                    <Select options={options} onChange={(e) => setDichvu(e.value)} placeholder="Chọn dịch vụ" />
                </div>

                <button style={{ width: "115px", height: "48px", top: "300px", left: "450px" }} className="huybo">
                    <NavLink style={{ textDecoration: 'none' }} to="/Page-capso"><p>Hủy bỏ</p></NavLink>
                </button>
              

            </div>
            <div className="popup">
                <input style={{ width: "115px", height: "48px", top: "164px", left: "680px", color:"#FFFFFF" }} className="them"
                    type="button"
                    value="In số"
                    onClick={togglePopup}
                />
                {isOpen && <Popup 
                    content={ 
                        <div className="sothutuduoccap">
                            <label>Số thứ tự được cấp</label>
                            <h2>2001201</h2>
                            <p>DV: {dichvu} <a>(tại quầy số 1)</a></p>
                            <div className="thoihan">
                                <p>Thời gian cấp: 09:30 {displaydate} </p> <br />
                                <p>Hạn sử dụng: 17:30 {displaydate}</p>
                            </div>
                        </div>
                    }
                    handleClose={togglePopup}
                />}
            </div>
        </div>
    )
}

export default Capsomoi