import React, { useEffect, useState } from "react";
import Nvabar from "../Nvabar/nvabar";
import to from "../../image/to.png"
import { NavLink, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Capnhatdichvu = () => {
    const [madichvu, setmadichvu] = useState("");
    const [tendichvu, settendichvu] = useState("");
    const [mota, setmota] = useState("");
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault()
        if (madichvu === "" || tendichvu === "" || mota === "") {
            return
        }
        const docRef = doc(db, 'dichvu', "ACHNfFIQ3BROctMj2VsM")
        updateDoc(docRef, {madichvu, tendichvu, mota}).then(response=>{
            console.log(response)

        }).catch(error=>console.log(error.message))


    }


    return (
        <div>
            <Nvabar />
            <div className="tieude">
                <p style={{ top: "10px" }}>Dịch vụ</p>
                <img style={{ left: "308px", top: "20px" }} src={to} />
                <h5 style={{ left: "480px", top: "10px" }}>Danh sách dịch vụ</h5>
                <img style={{ left: "460px", top: "20px" }} src={to} />
                <p style={{ left: "330px", width: "160px", top: "10px" }}>Thêm dịch vụ</p>
                <div className="thongtin">
                    <h5>Quản lý dịch vụ</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="themdichvu">
                        <div className="thongtinthietbi" >
                            Thông tin dịch vụ
                        </div>
                        <div className="madichvu">
                            <label htmlFor="">Mã dịch vụ:</label>
                            <input id="madichvu" onChange={(e) => setmadichvu(e.target.value)} value={madichvu} type="text" className="form-control" placeholder="Nhập mã thiết bị "></input>
                        </div>

                        <div className="tendichvu">
                            <label htmlFor="">Tên dịch vụ :</label>
                            <input id="tendichvu" onChange={(e) => settendichvu(e.target.value)} value={tendichvu} type="text" className="form-control" placeholder="Nhập mã thiết bị "></input>
                        </div>
                        <div className="motadichvu">
                            <label htmlFor="">Mô tả:</label>
                            <input id="mota" onChange={(e) => setmota(e.target.value)} value={mota} type="text" className="form-control" placeholder="Nhập mã thiết bị "></input>
                        </div>
                        <div style={{ top: "238px" }} className="thongtinthietbi">
                            Quy tắc cấp số <br />

                        </div>
                        <div className="tangtudongtu">
                            <input className="checkbox" type="checkbox" /><p style={{ top: "290px", left: "50px" }}>Tăng tự động từ:</p>
                            <input style={{ top: "280px", left: "187px", width: "49px" }} placeholder="0001" className="so" type="text" /> <p>đến</p>
                            <input style={{ top: "280px", left: "285px", width: "49px" }} placeholder="9999" className="so" type="text" />
                        </div>
                        <div className="tangtudongtu">
                            <input style={{ top: "345px" }} className="checkbox" type="checkbox" /><p style={{ top: "345px", left: "50px" }}>Prefix:</p>
                            <input style={{ top: "335px", left: "187px", width: "49px" }} placeholder="0001" className="so" type="text" /> <p>đến</p>
                        </div>
                        <div className="tangtudongtu">
                            <input style={{ top: "400px" }} className="checkbox" type="checkbox" /><p style={{ top: "400px", left: "50px" }}>Surfix:</p>
                            <input style={{ top: "390px", left: "187px", width: "49px" }} placeholder="0001" className="so" type="text" /> <p>đến</p>
                        </div>
                        <div className="tangtudongtu">
                            <input style={{ top: "455px" }} className="checkbox" type="checkbox" /><p style={{ top: "455px", left: "50px" }}>Reset mỗi ngày</p>
                        </div>


                    </div>
                    <button style={{ left: "850px", color: "#ffffff" }} className="themthietbi" type="submit">
                        Cập nhật
                    </button>
                    <NavLink className="huythietbi" to={"/Page-dichvu"}>
                        Hủy bỏ
                    </NavLink>
                </form>




            </div>

        </div>
    )
}

export default Capnhatdichvu