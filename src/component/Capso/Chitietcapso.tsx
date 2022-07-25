import React from "react";
import Nvabar from "../Nvabar/nvabar"
import to from "../../image/to.png"
import DangCho from "../../image/dangcho.png"

const Chitietcapso = () => {


    return (
        <div>
            <Nvabar />
            <div className="tieude">
                <p style={{top: "10px"}}>Cấp số</p>
                <img style={{left: "308px", top: "20px"}} src={to} />
                <p style={{left:"330px",width:"160px" ,top: "10px"}}>Danh sách cấp số</p>
                <img style={{left: "505px", top: "20px"}} src={to} />
                <h5 style={{left:"520px", top: "10px"}}>Chi tiết</h5>
            </div>
            <div className="thongtin">
                <h5>Quản lý cấp số</h5>    
            </div>
            <div className="chitietthietbi">
                <div className="thongtinthietbi">
                        Thông tin cấp số
                </div>
                <div className="mathietbi2">
                    <h5>Họ tên:</h5>
                    <p style={{top: "-1px", left: "148px", width: "145px"}}>Nguyễn Phúc Thuần</p>
                </div>
                <div className="loaithietbi2">
                    <h5>Nguồn cấp:</h5>
                    <p style={{top: "-1px", left: "148px"}}>Kiosk</p>
                </div>
                <div className="tenthietbi2">
                    <h5>Tên dịch vụ:</h5>
                    <p style={{top: "-1px", left: "148px", width:"155px"}}>Khám tổng quát</p>
                </div>
                <div className="tendangnhap2">
                    <h5>Trạng thái:</h5>
                    <p style={{top: "-1px", left: "148px", width:"150px"}}><img src={DangCho} style={{ width: "8px", height: "8px" }} /> &nbsp;  Đang chờ</p>
                </div>
                <div className="diachiip2">
                    <h5>Số thứ tự:</h5>
                    <p style={{top: "-1px", left: "148px"}}>2001201</p>
                </div>
                <div className="matkhauthietbi">
                    <h5 >Số điện thoại:</h5>
                    <p style={{top: "-1px", left: "148px"}}>0363319416</p>
                </div>
                <div className="thoigiancap">
                    <h5 >Thời gian cấp:</h5>
                    <p style={{top: "-1px", left: "148px", width:"155px"}}>14:35 - 07/11/2021</p>
                </div>
                <div className="diachiemail">
                    <h5 >Địa chỉ Email:</h5>
                    <p style={{top: "-1px", left: "148px", width:"155px"}}>thuan88@gmail.com</p>
                </div>
                <div className="hansudung">
                    <h5 >Hạn sử dụng:</h5>
                    <p style={{top: "-1px", left: "148px", width:"155px"}}>14:35 - 07/11/2021</p>
                </div>

            </div>
        </div>
    )
}

export default Chitietcapso