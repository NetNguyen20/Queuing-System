    import React, { useState } from "react";
    import Nvabar from "../Nvabar/nvabar"
    import { NavLink } from "react-router-dom";
    import DangCho from "../../image/dangcho.png"
    import DaSuDung from "../../image/dasudung.png"
    import Select from 'react-select'
    import to from "../../image/to.png"
    import Add from "../../image/Add.png"
    import time from "../../image/time.png"


    const Capso = () => {
        const [search, setSearch] = useState("")

        const options1 = [
            { value: 'Tất cả', label: 'Tất cả' },
            { value: 'Khám tim mạch', label: 'Khám tim mạch' },
            { value: 'Khám sản - Phụ khoa', label: 'Khám sản - Phụ khoa' },
            { value: 'Khám răng hàm mặt', label: 'Khám răng hàm mặt' },
            { value: 'Khám tai mũi họng', label: 'Khám tai mũi họng' },
            { value: 'Khám hô hấp', label: 'Khám hô hấp' },
            { value: 'Khám tổng quát', label: 'Khám tổng quát' }

        ]
        const options2 = [
            { value: 'Tất cả', label: 'Tất cả' },
            { value: 'Đang chờ', label: 'Đang chờ' },
            { value: 'Đã sử dụng', label: 'Đã sử dụng' },
            { value: 'Bỏ qua', label: 'Bỏ qua' },


        ]
        const options3 = [
            { value: 'Tất cả', label: 'Tất cả' },
            { value: 'Kiosk', label: 'Kiosk' },
            { value: 'Hệ thống', label: 'Hệ thống' },
        

        ]
        const [date, setDate] = useState<any | null>(null)
        const [date1, setDate1] = useState<any | null>(null)
        var showdate = new Date()
        var displaydate = showdate.getHours() + '/' + (showdate.getMonth()+ 1) +  '/' + showdate.getFullYear() + '  ' + showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds()

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
                <div style={{ width: "154px", left:"420px" }} className="searchvaitro">
                    <p style={{ width: "83px" }}>Tình trạng</p>
                    <Select options={options2} onChange={(e) => setSearch(e.value)} placeholder="Tất cả" />
                </div>
                <div style={{ width: "154px", left:"590px" }} className="searchvaitro">
                    <p style={{ width: "83px" }}>Nguồn cấp</p>
                    <Select options={options3} onChange={(e) => setSearch(e.value)} placeholder="Tất cả" />
                </div>
                <div className="thoigian" style={{left:"770px", top:"187px"}}>
                    <label htmlFor="">Chọn thời gian</label>
                    <input className="from" type="date" placeholder="10/07/2021" onChange={e => setDate(e.target.value)} value={date}/>
                    <img src={time} alt="" />
                    <input className="to" type="date" placeholder="10/07/2021" onChange={e => setDate1(e.target.value)} value={date1}/>

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
                                <td style={{ width: "161px", height: "49px" }}>14:35 - 25/07/2022</td>
                                <td style={{ width: "174px", height: "49px" }}>14:35 - 25/11/2022</td>
                                <td style={{ width: "147px", height: "49px" }}>
                                    <img src={DangCho} style={{ width: "8px", height: "8px" }} />&nbsp;
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
                                <td style={{ width: "161px", height: "49px" }}>14:35 - 25/07/2022</td>
                                <td style={{ width: "174px", height: "49px" }}>14:35 - 25/11/2022</td>
                                <td style={{ width: "147px", height: "49px" }}>
                                    <img src={DaSuDung} style={{ width: "8px", height: "8px" }} />&nbsp;
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
                                <td style={{ width: "161px", height: "49px" }}>14:35 - 25/07/2022</td>
                                <td style={{ width: "174px", height: "49px" }}>14:35 - 25/11/2022</td>
                                <td style={{ width: "147px", height: "49px" }}>
                                    <img src={DangCho} style={{ width: "8px", height: "8px" }} />&nbsp;
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
                                <td style={{ width: "161px", height: "49px" }}>14:35 - 25/07/2022</td>
                                <td style={{ width: "174px", height: "49px" }}>14:35 - 25/11/2022</td>
                                <td style={{ width: "147px", height: "49px" }}>
                                    <img src={DaSuDung} style={{ width: "8px", height: "8px" }} />&nbsp;
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
                    
                </div>
                <NavLink  style={{width: "72px", textAlign: 'center', textDecoration:'none', color: "#FF7506"}} className="themtaikhoan" to="/Page-capsomoi">
                    <img src={Add} />
                    Cấp số mới
                </NavLink> 
            </div>
        )
    }

    export default Capso