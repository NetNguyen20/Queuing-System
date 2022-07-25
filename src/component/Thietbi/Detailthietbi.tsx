import React from "react";
import Nvabar from "../Nvabar/nvabar"
import to from "../../image/to.png"

const Chitietthietbi = () => {


    return (
        <div>
            <Nvabar />
            <div className="tieude">
                <p style={{top: "10px"}}>Thiết bị</p>
                <img style={{left: "308px", top: "20px"}} src={to} />
                <p style={{left:"330px",width:"160px" ,top: "10px"}}>Danh sách thiết bị</p>
                <img style={{left: "505px", top: "20px"}} src={to} />
                <h5 style={{left:"520px", top: "10px"}}>Chi tiết thiết bị</h5>
            </div>
            <div className="thongtin">
                <h5>Quản lý thiết bị</h5>    
            </div>
            <div className="chitietthietbi">
                <div className="thongtinthietbi">
                        Thông tin thiết bị
                </div>
                <div className="mathietbi2">
                    <h5>Mã thiết bị:</h5>
                    <p style={{top: "-1px", left: "148px"}}>KIO_01</p>
                </div>
                <div className="loaithietbi2">
                    <h5>Loại thiết bị:</h5>
                    <p style={{top: "-1px", left: "148px"}}>Kiosk</p>
                </div>
                <div className="tenthietbi2">
                    <h5>Tên thiết bị:</h5>
                    <p style={{top: "-1px", left: "148px"}}>Kiosk</p>
                </div>
                <div className="tendangnhap2">
                    <h5>Tên đăng nhập:</h5>
                    <p style={{top: "-1px", left: "148px"}}>THUANNGUYEN88</p>
                </div>
                <div className="diachiip2">
                    <h5>Địa chỉ IP:</h5>
                    <p style={{top: "-1px", left: "148px"}}>128.172.308</p>
                </div>
                <div className="matkhauthietbi">
                    <h5 >Mật khẩu:</h5>
                    <p style={{top: "-1px", left: "148px"}}>CMS</p>
                </div>
                <div className="dichvu2">
                    <h5>Dịch vụ sử dụng:</h5>
                    <p style={{top: "36px", left: "1px"}}>Khám tim mạch, Khám sản-Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</p>
                </div>


            </div>
        </div>
    )
}

export default Chitietthietbi 