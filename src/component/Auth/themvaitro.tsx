import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";
import { NavLink } from "react-router-dom";
import Nvabar from "../nvabar";
import to from "../../image/to.png"

const Themvaitro = () => {
    const [vaitro, setVaitro] = useState("")
    const [mota, setMota] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        if (vaitro === "" || mota === "") {
            return
        }
        const themvaitroRef = collection(db, 'vaitro')
        addDoc(themvaitroRef, { vaitro, mota }).then(response => {
            console.log(response.id)
        }).catch(error => {
            console.log(error.message)
        })

    }
    return (
        <div>
            <Nvabar/>
            <div className="tieude">
                <p style={{top: "-10px"}}>Cài đặt hệ thống</p>
                <img style={{left: "382px", top: "1px"}} src={to} />
                <p style={{left:"400px",width:"160px" ,top: "-10px"}}>Quản lý vai trò</p>
                <img style={{left: "555px", top: "1px"}} src={to} />
                <h5 style={{left:"580px", top: "-10px"}}>Thêm vai trò</h5>
            </div>
            <div className="thongtin">
                <h5>Danh sách vai trò</h5>    
            </div>
            <form onSubmit={handleSubmit}>
                <div className="Themvaitro">
                    <label className="thongtinvaitro">Thông tin vai trò</label>
                    <div className="tenvaitro">
                        <label>Tên vai trò</label>
                        <input id="tenvaitro" onChange={(e) => setVaitro(e.target.value)} value={vaitro} type="text" placeholder="Nhập tên vai trò "></input>
                    </div>
                    <div className="mota">
                        <label>Mô tả</label>
                        <input id="mota" onChange={(e) => setMota(e.target.value)} value={mota} type="text" placeholder="Nhập mô tả "></input>
                    </div>
                    <div className="phanquyenchucnang">
                        <label style={{top: "10px"}}>Phân quyền chức năng</label>
                    </div>
                    <div className="boxphanquyen">
                        <div className="phanquyena">
                            <h2>Nhóm chức năng A </h2>
                            <input style={{left: "24px" , top:"58px"}} type="checkbox"/>
                            <p style={{left: "55px", top: "56px"}}>Tất cả</p> 
                            <input style={{left: "24px" , top:"88px"}} type="checkbox"/> 
                            <p style={{left: "55px", top: "46px"}}>Chức năng x</p> 
                            <input style={{left: "24px" , top:"118px"}} type="checkbox"/> 
                            <p style={{left: "55px", top: "38px"}}>Chức năng y</p>
                            <input style={{left: "24px" , top:"148px"}} type="checkbox"/> 
                            <p style={{left: "55px", top: "28px"}}>Chức năng z</p>
                        </div>
                    

                        <div className="phanquyenb">
                            <h2>Nhóm chức năng B</h2>
                            <input style={{left: "24px" , top:"248px"}} type="checkbox"/>
                            <p style={{left: "55px", top: "86px"}}>Tất cả</p> 
                            <input style={{left: "24px" , top:"278px"}} type="checkbox"/> 
                            <p style={{left: "55px", top: "76px"}}>Chức năng x</p> 
                            <input style={{left: "24px" , top:"308px"}} type="checkbox"/> 
                            <p style={{left: "55px", top: "66px"}}>Chức năng y</p>
                            <input style={{left: "24px" , top:"338px"}} type="checkbox"/> 
                            <p style={{left: "55px", top: "56px"}}>Chức năng z</p>
                        </div>

                        
                    </div>
                </div>
                <button className="themthietbi" type="submit">
                        <p>Thêm vai trò</p>
                </button>
                <NavLink className="huythietbi" to={"/Page-vaitro"}>
                    Hủy bỏ
                </NavLink>
            </form>

        </div>
    )
}

export default Themvaitro