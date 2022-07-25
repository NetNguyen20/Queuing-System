import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { quanlythietbiRef } from "../../context/firestorecollection";
import Select from 'react-select'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import Nvabar from "../Nvabar/nvabar";
import { NavLink } from "react-router-dom";
import to from "../../image/to.png"


const Themthietbi = () => {
    const [mathietbi, setMathietbi] = useState("");
    const [loaithietbi, setLoaithietbi] = useState("");
    const [tenthietbi, setTenthietbi] = useState("");
    const [tendangnhap, setTendangnhap] = useState("");
    const [diachiip, setDiachiip] = useState("");
    const [matkhau, setMatkhau] = useState("");
    const [dichvu, setDichvu] = useState("");
    
    const options1 = [
        { value: 'Kiosk', label: 'Kiosk' },
        { value: 'Display counter', label: 'Display counter' }
       
    ]

    const options2 = [
        { value: 'Khám tim mạch', label: 'Khám tim mạch' },
        { value: 'Khám sản - Phụ khoa', label: 'Khám sản - Phụ khoa' },
        { value: 'Khám răng hàm mặt', label: 'Khám răng hàm mặt' },
        { value: 'Khám tai mũi họng', label: 'Khám tai mũi họng' },
        { value: 'Khám hô hấp', label: 'Khám hô hấp' },
        { value: 'Khám tổng quát', label: 'Khám tổng quát' }

    ]


    const  handleOnchange  =  val  => {setDichvu(val)}

    function handleSubmit(e){
        e.preventDefault()
        if(mathietbi === "" || loaithietbi === "" || tenthietbi === "" || tendangnhap === "" || diachiip === "" || matkhau === "" || dichvu === ""){
            return
        }
        // const thietbiCollectionRef = collection(db, 'thietbi')
        addDoc(quanlythietbiRef, {mathietbi, loaithietbi, tenthietbi, tendangnhap, diachiip, matkhau, dichvu }).then(response=>{
            console.log(response.id)
        }).catch(error=>{
            console.log(error.message)
        })

    }


    return (
        <div>
            <Nvabar/>
            <div className="tieude">
                <p style={{top: "10px"}}>Thiết bị</p>
                <img style={{left: "308px", top: "20px"}} src={to} />
                <h5 style={{left:"520px", top: "10px"}}>Thêm thiết bị</h5>
                <img style={{left: "505px", top: "20px"}} src={to} />
                <p style={{left:"330px",width:"160px" ,top: "10px"}}>Danh sách thiết bị</p>

            </div>

    
            <img src={to} alt="" />

            <form onSubmit={handleSubmit}>
                
                <div className="quanlythietbi">
                    Quản lý thiết bị
                </div>
                <div className="listthietbi">
                    <div className="thongtinthietbi" >
                        Thông tin thiết bị
                    </div>
                    <div className="mathietbi1">
                        <label htmlFor="mathietbi1">Mã thiết bị:</label>
                        <input style={{width:"540px"}} id="mathietbi" onChange={(e) => setMathietbi(e.target.value)} value={mathietbi} type="text" className="form-control" placeholder="Nhập mã thiết bị "></input>
                    </div>
                    <div className="loaithietbi1">
                        <label htmlFor="loaithietbi1">Loại thiết bị:</label>
                        <Select options={options1} onChange={(e) => setLoaithietbi(e.value)} placeholder="Chọn loại thiết bị"/>
                    </div>
                    <div className="tenthietbi1">
                        <label htmlFor="tenthietbi1">Tên thiết bị:</label>
                        <input style={{width:"540px"}} id="tenthietbi" onChange={(e) => setTenthietbi(e.target.value)} value={tenthietbi} type="text" className="form-control" placeholder="Nhập tên thiet bi"></input>
                    </div>
                    <div className="tendangnhap1">
                        <label htmlFor="tendangnhap1">Tên đăng nhập:</label>
                        <input style={{width:"540px"}} id="tendangnhap" onChange={(e) => setTendangnhap(e.target.value)} value={tendangnhap} type="text" className="form-control" placeholder="Nhập ten dang nhap"></input>
                    </div>
                    <div className="diachiip1">
                        <label htmlFor="diachiip1">Địa chỉ IP:</label>
                        <input style={{width:"540px"}} id="diachiip" onChange={(e) => setDiachiip(e.target.value)} value={diachiip} type="text" className="form-control" placeholder="Nhập dia chi IP"></input>
                    </div>
                    <div className="matkhau1">
                        <label htmlFor="matkhau1">Mật khẩu:</label>
                        <input style={{width:"540px"}} id="password" onChange={(e) => setMatkhau(e.target.value)} value={matkhau} type="password" className="form-control" placeholder="Nhập mat khau"></input>
                    </div>
                    <div className="dichvu1">
                        <label htmlFor="dichvu1">Dịch vụ sử dụng:</label>
                        <p hidden>{dichvu}</p>
                        <MultiSelect style={{width:"1100px"}}  onChange={handleOnchange} options={options2} placeholder="Chọn loại dịch vụ" />
                    </div>
                    
                </div>
                <button className="themthietbi" type="submit">
                        <p>Thêm thiết bị</p>
                </button>
                <NavLink className="huythietbi" to={"/Page-thietbi"}>
                        Hủy bỏ
                </NavLink>
            </form>
        </div>

    );
};

export default Themthietbi;