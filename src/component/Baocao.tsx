    import React, { useState } from "react";
    import Nvabar from "./Nvabar/nvabar"
    import Select from 'react-select'
    import { NavLink } from "react-router-dom";
    import to from "../image/to.png"
    import DangCho from "../image/dangcho.png"
    import DaSuDung from "../image/dasudung.png"
    import Add from "../image/Add.png"
    import time from "../image/time.png"
    import BoQua from "../image/boqua.png"
    import Tai from "../image/Download.png"

    import { CSVLink, CSVDownload } from "react-csv";

    const Baocao = () => {
        const options1 = [
            { value: 'Kiosk', label: 'Kiosk' },
            { value: 'Display counter', label: 'Display counter' }

        ]
        const [loaithietbi, setLoaithietbi] = useState("");
        const [date, setDate] = useState<any | null>(null)
        const [date1, setDate1] = useState<any | null>(null)
        var showdate = new Date()
        var displaydate = showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear() + '  ' + showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds()
        const csvData = [
            ["Số thứ tự", "Tên dịch vụ", "Thời gian cấp", "Tình trạng", "Nguồn cấp"],
            ["2010001", "Khám tim mạch", "1/8/2022 9:7:12", "Đang chờ", "Kiosk"],
            ["2010002", "Khám sản - phụ khoa", "1/8/2022 9:7:12", "Đã sử dụng", "Kiosk"],
            ["2010003", "Răng hàm mặt", "1/8/2022 9:7:12", "Đang chờ", "Kiosk"],
            ["2010004", "Khám tổng quát", "1/8/2022 9:7:12", "Bỏ qua", "Kiosk"]

          ];
        return (
            <div>
                <div>
                    <Nvabar />
                </div>

                <div className="tieude">
                    <p>Báo cáo</p>
                    <img style={{ left: "300px" }} src={to} />
                    <h5 style={{ left: "320px" }}>Lập báo cáo</h5>
                </div>
                <div className="thoigian" style={{ left: "230px", top: "187px" }}>
                    <label htmlFor="">Chọn thời gian</label>
                    <input className="from" type="date" placeholder="10/07/2021" onChange={e => setDate(e.target.value)} value={date} />
                    <img src={time} alt="" />
                    <input className="to" type="date" placeholder="10/07/2021" onChange={e => setDate1(e.target.value)} value={date1} />

                </div>
                <table className="styled-table" >
                    <thead>
                        <tr>
                            <th style={{ borderRadius: "12px 0px 0px 0px" }} >
                                <select name="" id="baocaostt">
                                    <option value="Số thứ tự">Số thứ tự</option>
                                    <option value="Tất cả">Tất cả</option>
                                    <option value="2010001">2010001</option>
                                    <option value="2010002">2010002</option>
                                    <option value="2010003">2010003</option>
                                    <option value="2010004">2010004</option>
                                    <option value="2010005">2010005</option>
                                </select>
                            </th>
                            <th>
                                <select name="" id="baocaostt">
                                    <option value="Tên dịch vụ">Tên dịch vụ</option>
                                    <option value="Tất cả">Tất cả</option>
                                    <option value="Khám tim mạch">Khám tim mạch</option>
                                    <option value="Răng hàm mặt">Răng hàm mặt</option>
                                    <option value="Khoa sản - phụ khoa">Khoa sản - phụ khoa</option>
                                    <option value="Tai mũi họng">Tai mũi họng</option>
                                    <option value="Khám tổng quát">Khám tổng quát</option>
                                </select>
                            </th>

                            <th>
                                <select name="" id="baocaostt">
                                    <option value="Số thứ tự">Thời gian cấp</option>
                                    <option value="Tất cả">Tất cả</option>
                                    <option value="1">07:10  01/10/2021</option>
                                    <option value="2">07:15  01/10/2021</option>
                                    <option value="3">07:28  01/10/2021</option>
                                    <option value="4">07:35  01/10/2021</option>
                                    <option value="5">07:40  01/10/2021</option>

                                </select>
                            </th>

                            <th>
                                <select name="" id="baocaostt">
                                    <option value="Số thứ tự">Tình trạng</option>
                                    <option value="Tất cả">Tất cả</option>
                                    <option value="Đang chờ">Đang chờ</option>
                                    <option value="Đã sử dụng">Đã sử dụng</option>
                                    <option value="Bỏ qua">Bỏ qua</option>

                                </select>
                            </th>

                            <th style={{ borderRadius: " 0px 12px 0px 0px " }}>
                                <select name="" id="baocaostt">
                                    <option value="Nguồn cấp">Nguồn cấp</option>
                                    <option value="Tất cả">Tất cả</option>
                                    <option value="Kiosk">Kiosk</option>
                                    <option value="Hệ thống">Hệ thống</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        

                            <tr>
                                <td style={{ width: "103px", height: "49px" }}>2010001</td>
                                <td style={{ width: "109px", height: "49px" }}>Khám tim mạch</td>
                                <td style={{ width: "138px", height: "49px" }}>{displaydate}</td>
                                <td style={{ width: "171px", height: "49px" }}>
                                    <img src={DangCho} style={{ width: "8px", height: "8px" }} />&nbsp;
                                    Đang chờ
                                </td>
                                <td style={{ width: "268px", height: "49px" }}>Kiosk</td>
                            </tr>
                            <tr>
                                <td style={{ width: "103px", height: "49px" }}>2010002</td>
                                <td style={{ width: "109px", height: "49px" }}>Khám sản - phụ khoa</td>
                                <td style={{ width: "138px", height: "49px" }}>{displaydate}</td>
                                <td style={{ width: "171px", height: "49px" }}>
                                    <img src={DaSuDung} style={{ width: "8px", height: "8px" }} />&nbsp;
                                    Đã sử dụng
                                </td>
                                <td style={{ width: "268px", height: "49px" }}>Kiosk</td>
                            </tr>
                            <tr>
                                <td style={{ width: "103px", height: "49px" }}>2010003</td>
                                <td style={{ width: "109px", height: "49px" }}>Răng hàm mặt</td>
                                <td style={{ width: "138px", height: "49px" }}>{displaydate}</td>
                                <td style={{ width: "171px", height: "49px" }}>
                                    <img src={DangCho} style={{ width: "8px", height: "8px" }} />&nbsp;
                                    Đang chờ
                                </td>
                                <td style={{ width: "268px", height: "49px" }}>Kiosk</td>
                            </tr>
                            <tr>
                                <td style={{ width: "103px", height: "49px" }}>2010004</td>
                                <td style={{ width: "109px", height: "49px" }}>Khám tổng quát</td>
                                <td style={{ width: "138px", height: "49px" }}>{displaydate}</td>
                                <td style={{ width: "171px", height: "49px" }}>
                                    <img src={BoQua} style={{ width: "8px", height: "8px" }} />&nbsp;
                                    Bỏ qua
                                </td>
                                <td style={{ width: "268px", height: "49px" }}>Kiosk</td>
                            </tr>


                            


                        

                    </tbody>
                </table>
                <CSVLink className="themtaikhoan" style={{ position:"absolute", top:"250px", left:"1380px", width: "75px", textDecoration: 'none', color: "#FF7506" }} data={csvData}>
                    <img src={Tai} alt="" />
                    Tải về
                </CSVLink>;

            </div>
        )
    }

    export default Baocao