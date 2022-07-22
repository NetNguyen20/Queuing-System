import React, { useState } from "react";
import Nvabar from "../nvabar"
import { NavLink } from "react-router-dom";
import DangCho from "../../image/dangcho.png"
import DaSuDung from "../../image/dasudung.png"
import Select from 'react-select'
import to from "../../image/to.png"
import Add from "../../image/Add.png"


const Capso = () => {
    const [search, setSearch] = useState("")

    const options1 = [
        { value: 'Khám tim mạch', label: 'Khám tim mạch' },
        { value: 'Khám sản - Phụ khoa', label: 'Khám sản - Phụ khoa' },
        { value: 'Khám răng hàm mặt', label: 'Khám răng hàm mặt' },
        { value: 'Khám tai mũi họng', label: 'Khám tai mũi họng' },
        { value: 'Khám hô hấp', label: 'Khám hô hấp' },
        { value: 'Khám tổng quát', label: 'Khám tổng quát' }

    ]

    return (
        <div>
            <Nvabar />
            <div className="tieude">
                <p>Cấp số</p>
                <img style={{ left: "300px" }} src={to} />
                <h5 style={{ left: "320px" }}>Danh sách cấp số</h5>
            </div>

            <div className="thongtin">
                <h5>Quản lý cấp số</h5>
            </div>
            <div style={{ width: "154px" }} className="searchvaitro">
                <p style={{ width: "83px" }}>Tên dịch vụ</p>
                <Select options={options1} onChange={(e) => setSearch(e.value)} placeholder="Tất cả" />
            </div>
            <div className="search">
                <p>Từ khóa</p>
                <input type="text" placeholder="Nhập từ khóa" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="listcapso">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ width: "93px", height: "49px" }}> STT</th>
                            <th style={{ width: "162px", height: "49px" }}> Tên khách hàng</th>
                            <th style={{ width: "171px", height: "49px" }}> Tên dịch vụ </th>
                            <th style={{ width: "161px", height: "49px" }}> Thời gian cấp</th>
                            <th style={{ width: "174px", height: "49px" }}> Hạn sử dụng</th>
                            <th style={{ width: "147px", height: "49px" }}> Trạng thái</th>
                            <th style={{ width: "120px", height: "49px" }}> Nguồn cấp </th>
                            <th style={{ width: "78px", height: "49px" }}>  </th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td style={{ width: "93px", height: "49px" }}>2010001</td>
                            <td style={{ width: "162px", height: "49px" }}>Nguyễn Phúc Thuần</td>
                            <td style={{ width: "171px", height: "49px" }}>Khám tổng quát</td>
                            <td style={{ width: "161px", height: "49px" }}>14:35 - 07/11/2021</td>
                            <td style={{ width: "174px", height: "49px" }}>14:35 - 12/11/2021</td>
                            <td style={{ width: "147px", height: "49px" }}>
                                <img src={DangCho} style={{ width: "8px", height: "8px" }} />
                                Đang chờ
                            </td>
                            <td style={{ width: "120px", height: "49px" }}>Kiosk</td>

                            <td>
                                <label htmlFor="id"></label>
                                <NavLink to={"/Page-chitietcapso"} style={{ textDecoration: "none" }}>
                                    Chi tiết
                                </NavLink>


                            </td>

                        </tr>
                        <tr>
                            <td style={{ width: "93px", height: "49px" }}>2010002</td>
                            <td style={{ width: "162px", height: "49px" }}>Lê Huỳnh Ái Vân</td>
                            <td style={{ width: "171px", height: "49px" }}>Khám sản - Phụ Khoa</td>
                            <td style={{ width: "161px", height: "49px" }}>14:35 - 07/11/2021</td>
                            <td style={{ width: "174px", height: "49px" }}>14:35 - 12/11/2021</td>
                            <td style={{ width: "147px", height: "49px" }}>
                                <img src={DaSuDung} style={{ width: "8px", height: "8px" }} />
                                Đã sử dụng
                            </td>
                            <td style={{ width: "120px", height: "49px" }}>Kiosk</td>

                            <td>
                                <label htmlFor="id"></label>
                                <NavLink to={"/Page-chitietcapso"} style={{ textDecoration: "none" }}>
                                    Chi tiết
                                </NavLink>


                            </td>

                        </tr>
                        <tr>
                            <td style={{ width: "93px", height: "49px" }}>2010003</td>
                            <td style={{ width: "162px", height: "49px" }}>Lê Huỳnh Nghĩa</td>
                            <td style={{ width: "171px", height: "49px" }}>Khám hô hấp</td>
                            <td style={{ width: "161px", height: "49px" }}>14:35 - 07/11/2021</td>
                            <td style={{ width: "174px", height: "49px" }}>14:35 - 12/11/2021</td>
                            <td style={{ width: "147px", height: "49px" }}>
                                <img src={DangCho} style={{ width: "8px", height: "8px" }} />
                                Đang chờ
                            </td>
                            <td style={{ width: "120px", height: "49px" }}>Hệ thống</td>

                            <td>
                                <label htmlFor="id"></label>
                                <NavLink to={"/Page-chitietcapso"} style={{ textDecoration: "none" }}>
                                    Chi tiết
                                </NavLink>


                            </td>

                        </tr>
                        <tr>
                            <td style={{ width: "93px", height: "49px" }}>2010004</td>
                            <td style={{ width: "162px", height: "49px" }}>Phạm Văn Mạnh</td>
                            <td style={{ width: "171px", height: "49px" }}>Khám tai mũi họng</td>
                            <td style={{ width: "161px", height: "49px" }}>14:35 - 07/11/2021</td>
                            <td style={{ width: "174px", height: "49px" }}>14:35 - 12/11/2021</td>
                            <td style={{ width: "147px", height: "49px" }}>
                                <img src={DaSuDung} style={{ width: "8px", height: "8px" }} />
                                Đã sử dụng
                            </td>
                            <td style={{ width: "120px", height: "49px" }}>Hệ thống</td>

                            <td>
                                <label htmlFor="id"></label>
                                <NavLink to={"/Page-chitietcapso"} style={{ textDecoration: "none" }}>
                                    Chi tiết
                                </NavLink>


                            </td>

                        </tr>



                    </tbody>
                </table>
                <NavLink  style={{width: "72px", textAlign: 'center', textDecoration:'none', color: "#FF7506"}} className="themtaikhoan" to="/Page-themthietbi">
                <img src={Add} />
                Cấp số mới
            </NavLink>  
            </div>
        </div>
    )
}

export default Capso