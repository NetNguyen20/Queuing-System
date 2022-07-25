import Nvabar from "../Nvabar/nvabar"
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";
import React, { useEffect, useState } from "react";
import Add from "../../image/Add.png"
import Select from 'react-select'
import to from "../../image/to.png"
import Ketnoi from "../../image/ketnoi.png"

interface IUser {
    user:{
      id:string,
      email:string,
      name:string,
      phone:number,
      username:string,
      vaitro: string,
      tinhtrang:string

    }[]
  }
const Quanlytaikhoan = () => {
    const options1 = [
        { value: 'Kế toán', label: 'Kế toán' },
        { value: 'Quản lý', label: 'Quản lý' },
        { value: 'Admin', label: 'Admin' }
    ]
    const [search, setSearch] = useState("")
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [users, setUsers] = useState<IUser["user"]>([]);
    const usersCollectionRef = collection(db, "users");

    useEffect( () => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            console.log(data.docs);
            setUsers(data.docs.map((doc: any) => ({...doc.data(), id: doc.id})))
        };

        getUsers();

    }, []);

    useEffect(() => {
        setFilteredContacts(
            users.filter(
                (user) =>
                    user.username.toString().includes(search.toString()) ||
                    user.name.toString().includes(search.toString()) ||
                    user.phone.toString().includes(search.toString()) ||
                    user.email.toString().includes(search.toString()) ||
                    user.tinhtrang.toString().includes(search.toString()) ||
                    user.vaitro.toString().includes(search.toString())

            )
        );
    }, [search, users]);




    return (
        <div>
            <Nvabar />
            <div className="tieude">
                <p>Cài đặt hệ thống</p>
                <img src={to} />
                <h5>Quản lý tài khoản</h5>
            </div>

            <div className="thongtin">
                <h5>Danh sách tài khoản</h5>    
            </div>
            <div className="searchvaitro">
                <p>Tên vai trò</p>
                <Select options={options1} onChange={(e) => setSearch(e.value)} placeholder="Tất cả" />
            </div>
            <div className="search">
                <p>Từ khóa</p>
                <input type="text" placeholder="Nhập từ khóa" onChange={(e) => setSearch(e.target.value)} />
            </div>

            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ width: "150px", height: "49px" }}> Tên đăng nhập</th>
                        <th style={{ width: "166px", height: "49px" }}> Họ tên</th>
                        <th style={{ width: "130px", height: "49px" }}> Số điện thoại</th>
                        <th style={{ width: "255px", height: "49px" }}> Email</th>
                        <th style={{ width: "114px", height: "49px" }}> Vai trò</th>
                        <th style={{ width: "193px", height: "49px" }}> Trạng thái hoạt động</th>
                        <th style={{ width: "99px", height: "49px" }}> </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        filteredContacts.map((listtaikhoan) => {
                            return (
                                <tr>
                                    <td>{listtaikhoan.username}</td>
                                    <td>{listtaikhoan.name}</td>
                                    <td>{listtaikhoan.phone}</td>
                                    <td>{listtaikhoan.email}</td>
                                    <td>{listtaikhoan.vaitro}</td>
                                    <td>
                                        <img src={Ketnoi} style={{width: "8px", height:"8px"}} /> &nbsp;

                                        {listtaikhoan.tinhtrang}
                                    </td>
                                    <td><NavLink to={"/Page-nguoidung"}>Cập nhật</NavLink></td>
                                </tr>
                            );
                        }
                        )
                    }
                </tbody>
            </table>

            <NavLink style={{textDecoration:'none'}} className="themtaikhoan" to="/Page-nguoidung">
                <img src={Add} />
                <label style={{ width: "92px", height: "38px", textAlign: "center", color: "#FF7506",  }}>Thêm người dùng</label>
            </NavLink>

        </div>

    );
}

export default Quanlytaikhoan
