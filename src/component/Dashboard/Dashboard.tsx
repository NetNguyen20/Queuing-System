import Nvabar from "../Nvabar/nvabar";
import icon1 from "../../image/icon1.png"
import icon2 from "../../image/icon2.png"
import icon3 from "../../image/icon3.png"
import icon4 from "../../image/icon4.png"
import ellipse1 from "../../image/ellipse1.png"
import ellipse2 from "../../image/ellipse2.png"
import ellipse3 from "../../image/ellipse3.png"

import arrowup from "../../image/arrowup.png"
import arrowdown from "../../image/arrowdown.png"
import monitor1 from "../../image/monitor1.png"
import ask from "../../image/ask.png"
import data1 from "../../image/data.png"

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import ApexCharts, { Props } from 'react-apexcharts';


import { useState } from "react";

import Select from 'react-select'
import { NavLink } from "react-router-dom";


const Dashboard = () => {
    const [value, onChange] = useState(new Date());
    const [dashboard, setDashboar] = useState("");

    const options = {
        chart: {

            height: 0,

            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100]

                }
            },
        },
        xaxis: {
            categories: [1, 7, 11, 13, 15, 19, 21, 26, 31]
        },
        dataLabels: {
            enabled: false
        }
    };
    const series = [
        {
            data: [2500, 4200, 3100, 3500, 3100, 4221, 3500, 4350, 3500]
        }

    ];

    const options1 = [
        { value: 'Ngày', label: 'Ngày' },
        { value: 'Tuần', label: 'Tuần' },
        { value: 'Tháng', label: 'Tháng' }

       
    ]

    return (
        <div>
            <Nvabar />
            <div className="tieude">
                <p>Dashboard</p>
            </div>
            <div className="thongtin">
                <h5 style={{ left: "210px", fontWeight: 700, fontSize: "24px" }}>Biểu đồ cấp số</h5>
            </div>
            <div className="sothutu">
                <div className="sothutudacap">
                    <img src={icon1} />
                    <p>Số thứ tự đa cấp</p>
                    <h2>4.221</h2>
                    <div className="sophantram1">
                        <img src={arrowup} />
                        <p>32,41%</p>
                    </div>

                </div>
                <div className="sothutudasudung">
                    <img src={icon2} />
                    <p>Số thứ tự đã sử dụng</p>
                    <h2>3.721</h2>
                    <div className="sophantram2">
                        <img src={arrowdown} />
                        <p>32,41%</p>
                    </div>

                </div>
                <div className="sothutudangcho">
                    <img src={icon3} />
                    <p>Số thứ tự đang chờ</p>
                    <h2>468</h2>
                    <div className="sophantram3">
                        <img src={arrowup} />
                        <p>56,41%</p>
                    </div>

                </div>
                <div className="sothutuboqua">
                    <img src={icon4} />
                    <p>Số thứ tự đã bỏ qua</p>
                    <h2>32</h2>
                    <div className="sophantram4">
                        <img src={arrowdown} />
                        <p>22,41%</p>
                    </div>
                </div>
            </div>

            <div className="tongquan">

                <h1>Tổng quan</h1>
                <div className="tongquanthietbi">
                    <img src={ellipse1} />
                    <h2>4221</h2>
                    <img src={monitor1} style={{ width: "14px", height: "14px", left: "88px", top: "50px" }} />
                    <p>Thiết bị</p>
                    <h4 className="hd">Đang hoạt động <p style={{ top: "1px" }}>3.799</p></h4>
                    <h4 className="nhd">Ngừng hoạt động <p style={{ top: "1px" }}>422</p></h4>


                </div>
                <div className="tongquandichvu">
                    <img src={ellipse2} />
                    <h2>276</h2>
                    <img src={ask} style={{ width: "14px", height: "14px", left: "88px", top: "50px" }} />
                    <p>Dịch vụ</p>
                    <h4 className="hd1">Đang hoạt động <p style={{ top: "1px" }}>210</p></h4>
                    <h4 className="nhd1">Ngừng hoạt động <p style={{ top: "1px" }}>66</p></h4>
                </div>

                <div className="tongquancapso">
                    <img src={ellipse3} />
                    <h2>4.221</h2>
                    <img src={data1} style={{ width: "14px", height: "14px", left: "88px", top: "50px" }} />
                    <p>Cấp số</p>
                    <h4 className="dsu">Đã sử dụng <p style={{ top: "1px" }}>3.721</p></h4>
                    <h4 className="dc">Đang chờ <p style={{ top: "1px" }}>486</p></h4>
                    <h4 className="bq">Bỏ qua <p style={{ top: "1px" }}>32</p></h4>

                </div>

                <div className="calendar">
                    <Calendar onChange={onChange} value={value} />
                </div>

            </div>

            <div className="chart">
                <h1>Xem theo</h1>
                <div className="dashboardoption">
                    <Select  options={options1} onChange={(e) => setDashboar(e.value)}/>
                </div>
                <label>Bảng thống kê theo ngày</label>
                <p>Tháng 7/2022</p>
                <ApexCharts
                    type="area"
                    options={options}
                    series={series}
                    width={820}
                    height={380}
                />

                <h5>sl /</h5>
                <h4>ngày</h4>
            </div>


        </div>
    );
};

export default Dashboard;