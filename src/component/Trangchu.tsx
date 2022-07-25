import { auth, db } from "../firebase";
import React, { useContext, useEffect, useRef, useState } from "react";
import anhdaidien from "../image/anhdaidien.png"
import Nvabar from "./Nvabar/nvabar"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";

const TrangChu = () => {
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState<number>(0);
    const [password, setPassword] = useState("");
    const [vaitro, setVaitro] = useState("");

    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            setPhone(data.phone);
            setPassword(data.password);
            setUserName(data.username);
            setEmail(data.email);
            setVaitro(data.vaitro);

        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/Page-login");
        fetchUserName();
    }, [user, loading]);


    return (<div>
        <div>
            <Nvabar />
            <div className="tieude">
                <p style={{width: "200px", color:"#FF9138"}}>Thông tin cá nhân</p>
            </div>
        </div>
        <div className="informationUser">
            <ul className="detail">
                <img src={anhdaidien} />
                <div className="hovaten">
                    <p>{username}</p>
                </div>
                <div className="tennguoidung">
                    <p>Tên người dùng</p><br />
                    <form style={{color: "#535261", opacity:"0.5"}} action="">{username}</form>
                </div>
                <li className="tennguoidung1">
                    <p>Tên đăng nhập</p>
                    <form style={{color: "#535261", opacity:"0.5"}}action="">{name}</form>
                </li>
                <li className="tennguoidung2">
                    <p>Số điện thoại</p>
                    <form style={{color: "#535261", opacity:"0.5"}} action="">{phone}</form>
                </li>
                <li className="tennguoidung3">
                    <p>Mật khẩu</p>
                    <form style={{color: "#535261", opacity:"0.5"}} action="">{password}</form>
                </li>
                <li className="tennguoidung4">
                    <p>Email</p>
                    <form style={{color: "#535261", opacity:"0.5"}} action="">{email}</form>
                </li>
                <li className="tennguoidung5">
                    <p>Vai trò</p>
                    <form style={{color: "#535261", opacity:"0.5"}} action="">{vaitro}</form>
                </li>
            </ul>
        </div>
    </div>);



}

export default TrangChu