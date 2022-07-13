import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import Nvabar from "../component/nvabar"
import Thietbiservice from "../context/servicethietbi";
import { NavLink } from "react-router-dom";

const Thietbi = ({getThietbiId}) => {
    const [thietbi, setThietbi] = useState([]);
    useEffect(() =>{
        getThietbi();
    }, []);

    const getThietbi = async() =>{
        const data = await Thietbiservice.getAllThietbi();
        console.log(data.docs);
        setThietbi(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }


    return (
        <div style={{ top: "0px"}}>
            <Nvabar/>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{width: "10px",height: "49px"}}> NO</th>
                        <th style={{width: "150px",height: "49px"}}> Tên đăng nhập</th>
                        <th style={{width: "166px",height: "49px"}}> Họ tên</th>
                        <th style={{width: "130px",height: "49px"}}> Số điện thoại</th>
                        <th style={{width: "255px",height: "49px"}}> Email</th>
                        <th style={{width: "114px",height: "49px"}}> Vai trò</th>
                        <th style={{width: "193px",height: "49px"}}> Trạng thái hoạt động</th>
                        <th style={{width: "99px",height: "49px"}}> Dich vu</th>
                        <th style={{width: "99px",height: "49px"}}> Cap nhat </th>

                    </tr>
                </thead>
                <tbody>
                    {
                    thietbi.map((doc, index)=>{
                        return(
                            <tr key= {doc.id}>
                                <td>{index +1}</td>
                                <td>{doc.mathietbi}</td>
                                <td>{doc.loaithietbi}</td>
                                <td>{doc.tenthietbi}</td>
                                <td>{doc.tendangnhap}</td>
                                <td>{doc.diachiip}</td>
                                <td>{doc.matkhau}</td>
                                <td>{doc.dichvu}</td>
                                <td>
                                    <NavLink to={"/Page-themthietbi"}>
                                    <button  onClick={(e)=> getThietbiId(doc.id)}>Cập nhật</button>
                                    </NavLink>
                                </td>

                            </tr>
                            
                        );
                    })}
                   
                </tbody>
            </table>
            <NavLink className="themtaikhoan" to="/Page-themthietbi">
                Thêm người dùng
            </NavLink>       

    </div>
    )
}

export default Thietbi