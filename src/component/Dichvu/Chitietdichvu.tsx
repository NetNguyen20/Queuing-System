import React, { useState } from "react";
import to from "../../image/to.png"
import Nvabar from "../Nvabar/nvabar"
import Select from 'react-select'
import time from "../../image/time.png"
import { NavLink } from "react-router-dom";
import Ketnoi from "../../image/ketnoi.png"
import Add from "../../image/Add.png"
import Back from "../../image/back-square.png"
import Capnhat from "../../image/capnhat.png"

const Chitietdichvu = () => {
    const [date, setDate] = useState<any | null>(null)
    const [date1, setDate1] = useState<any | null>(null)
    const [search, setSearch] = useState("")
    var showdate = new Date()
    var displaydate = showdate.getHours() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear() + '  ' + showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds()
    const options1 = [
        { value: 'Tất cả', label: 'Tất cả' },
        { value: 'Đã hoàn thành', label: 'Đã hoàn thành' },
        { value: 'Đã thực hiện', label: 'Đã thực hiện' },
        { value: 'Vắng', label: 'Vắng' }

    ]
    return (
        <div>
            <Nvabar />

            <div className="tieude">
                <p style={{ top: "10px" }}>Dịch vụ</p>
                <img style={{ left: "308px", top: "20px" }} src={to} />
                <p style={{ left: "330px", width: "170px", top: "10px" }}>Danh sách dịch vụ</p>
                <img style={{ left: "505px", top: "20px" }} src={to} />
                <h5 style={{ left: "520px", top: "10px" }}>Chi tiết</h5>
            </div>
            <div className="thongtin">
                <h5>Quản lý dịch vụ</h5>
            </div>
            <div className="thongtindichvu">
                <label >Thông tin dịch vụ</label>
                <div className="chitietdichvu">
                    <h5>Mã dịch vụ: </h5> <p>201</p>
                    <h5 style={{ top: "94px" }}>Tên dịch vụ: </h5>  <p style={{ top: "94px" }}>Khám tim mạch</p>
                    <h5 style={{ top: "130px" }}>Mô tả:</h5> <p style={{ top: "130px" }}>Chuyên các bệnh lý về tim</p>
                </div>
                <label style={{ top: "170px" }}>Quy tắc cấp số</label>
                <div className="chitietquytac">
                    <h5>Tăng tự động: </h5> <input type="text" placeholder="0001" /> <p>đến</p> <input style={{ left: "221px" }} type="text" placeholder="9999" />
                    <h5 style={{ top: "278px" }}>Prefix:</h5>    <input style={{ top: "268px" }} type="text" placeholder="0001" />
                    <h5 style={{ top: "324px" }}>Reset mỗi ngày</h5>
                    <h4 >Ví dụ: 201-2001</h4>

                </div>
                <div className="dichvubox">
                    <div className="trangthaidichvu">
                        <p>Trạng thái</p>
                        <Select options={options1} onChange={(e) => setSearch(e.value)} placeholder="Tất cả" />
                    </div>
                    <div className="thoigiandichvu">
                        <label htmlFor="">Chọn thời gian</label>
                        <input className="from" type="date" placeholder="10/07/2021" onChange={e => setDate(e.target.value)} value={date} />
                        <img src={time} alt="" />
                        <input className="to" type="date" placeholder="10/07/2021" onChange={e => setDate1(e.target.value)} value={date1} />

                    </div>
                    <div className="searchdichvu">
                        <p>Từ khóa</p>
                        <input type="text" placeholder="Nhập từ khóa" onChange={(e) => setSearch(e.target.value)} />
                    </div>

                    <div className="listcapso">
                        <table style={{ left: "25px", top: "100px", width: "710px" }} className="styled-table">
                            <thead>
                                <tr>
                                    <th style={{ width: "334px", height: "49px", borderRadius: "12px 0px 0px 0px" }}> Số thứ tự</th>
                                    <th style={{ width: "334px", height: "49px", borderRadius: "0px 12px 0px 0px" }}> Trạng thái </th>


                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td style={{ width: "334px", height: "49px" }}>2010001</td>
                                    <td style={{ width: "334px", height: "49px" }}>
                                        <img src={Ketnoi} style={{ width: "8px", height: "8px" }} />&nbsp;

                                        Đã hoàn thành
                                    </td>


                                </tr>
                                <tr>
                                    <td style={{ width: "334px", height: "49px" }}>2010002</td>
                                    <td style={{ width: "334px", height: "49px" }}>
                                        <img src={Ketnoi} style={{ width: "8px", height: "8px" }} />&nbsp;

                                        Đã hoàn thành
                                    </td>

                                </tr>
                                <tr>
                                    <td style={{ width: "334px", height: "49px" }}>2010003</td>
                                    <td style={{ width: "334px", height: "49px" }}>
                                        <img src={Ketnoi} style={{ width: "8px", height: "8px" }} />&nbsp;

                                        Đã hoàn thành
                                    </td>                        </tr>
                                <tr>
                                    <td style={{ width: "334px", height: "49px" }}>2010004</td>
                                    <td style={{ width: "334px", height: "49px" }}>
                                        <img src={Ketnoi} style={{ width: "8px", height: "8px" }} />&nbsp;

                                        Đã hoàn thành
                                    </td>

                                </tr>



                            </tbody>
                        </table>
                    </div>
                </div>
                <NavLink style={{ width: "95px", textAlign: 'center', textDecoration: 'none', color: "#FF7506", top: "10px", left: "1200px" }} className="themtaikhoan" to="/Page-themdichvu">
                    <img src={Capnhat} />
                    Cập nhật danh sách
                </NavLink>
                <NavLink style={{ width: "95px", textAlign: 'center', textDecoration: 'none', color: "#FF7506", top: "120px", left: "1200px" }} className="themtaikhoan" to="/Page-dichvu">
                    <img src={Back} />
                    Quay lại
                </NavLink>
            </div>
        </div>
    )
}

export default Chitietdichvu