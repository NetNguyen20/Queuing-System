import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Nvabar from "../Nvabar/nvabar"
import to from "../../image/to.png"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Add from "../../image/Add.png"

interface IVaitro {
    VT:{
      vaitro:string,
      mota:string

    }[]
  }
const Vaitro = ()=>{
    const [search, setSearch] = useState("")
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [vaitros, setVaitros] = useState<IVaitro["VT"]>([]);
    const vaitrocollectionRef = collection(db, "vaitro");

    useEffect( () => {

        const getVaitro = async () => {
            const data = await getDocs(vaitrocollectionRef)
            console.log(data.docs);
            setVaitros(data.docs.map((doc: any) => ({...doc.data(), id: doc.id})))
        };

        getVaitro();

    }, []);

    useEffect(() => {
        setFilteredContacts(
            vaitros.filter(
                (vaitro1) =>
                    vaitro1.vaitro.toString().includes(search.toString()) ||
                    vaitro1.mota.toString().includes(search.toString())
            )
        );
    }, [search, vaitros]);

    return(
        <div>
            <Nvabar/>
            <div className="tieude">
                <p>Cài đặt hệ thống</p>
                <img src={to} />
                <h5>Quản lý vai trò</h5>
            </div>
            <div className="thongtin">
                <h5>Danh sách vai trò</h5>    
            </div>
            <div className="search">
                <p>Từ khóa</p>
                <input type="text" placeholder="Nhập từ khóa" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="listvaitro">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{width: "224px",height: "49px" , borderRadius: "12px 0px 0px 0px"}}> Tên vai trò</th>
                            <th style={{width: "224px", height: "49px"}}> Số người dùng</th>
                            <th style={{width: "537px",height: "49px"}}> Mô tả</th>
                            <th style={{width: "125px",height: "49px", borderRadius: "0px 12px 0px 0px"}}>  </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                        filteredContacts.map((listvaitro)=>{
                            return(
                                <tr>
                                    <td style={{width:"224px", height:"49px"}}>{listvaitro.vaitro}</td>
                                    <td style={{width: "224px",height: "49px"}}>
                                        6
                                    </td>
                                    <td style={{width: "537px", height:"49px"}}>{listvaitro.mota}</td>     
                                    <td>
                                        <label></label>
                                        <NavLink to={"/Page-capnhatvaitro"} style={{width:"125px", height:"49px", textDecoration: "none"}}>
                                            Cập nhật
                                        </NavLink>
                                        
                                    </td>

                                </tr>
                                
                            );
                        })}
                    
                    </tbody>
                </table>
            </div>
            <NavLink  style={{width: "85px", textAlign: 'center', textDecoration:'none', color: "#FF7506"}} className="themtaikhoan" to="/Page-themvaitro">
                <img src={Add} />
                Thêm vai trò
            </NavLink>       

        </div>
    )
}

export default Vaitro