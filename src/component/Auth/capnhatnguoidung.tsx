import {  useState } from "react";
import { NavLink } from "react-router-dom";
import {  db } from "../../firebase";
import {  doc, updateDoc } from "firebase/firestore"
import Nvabar from "../Nvabar/nvabar";
import Select from 'react-select'
import to from "../../image/to.png"



const Editnguoidung = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [vaitro, setVaitro] = useState("");
    const [tinhtrang, setTinhtrang] = useState("");
    const [phone, setPhone] = useState<number | string>(0);
    const options1 = [
        { value: 'Kế toán', label: 'Kế toán' },
        { value: 'Quản lý', label: 'Quản lý' },
        { value: 'Admin', label: 'Admin' }
    ]
    const options2 = [
        { value: 'Tất cả', label: 'Tất cả'},
        { value: 'Ngừng hoạt động', label: 'Ngừng hoạt động'},
        { value: 'Hoạt động', label: 'Hoạt động'  }
    ]
    

    const [id, setId] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        if (username === "" || email === "" || vaitro === "" || password === "" || name === "" || tinhtrang === "" || phone === "") {
            return
        }
        const docRef = doc(db, 'users', "788YbpSCfnmWymsiRwKa")
        updateDoc(docRef, {username, email, vaitro, password, name, tinhtrang, phone }).then(response=>{
            console.log(response)

        }).catch(error=>console.log(error.message))
    }

    return (<div>
            <Nvabar />
            <div className="tieude">
                <p style={{top: "10px"}}>Cài đặt hệ thống</p>
                <img style={{left: "382px", top: "20px"}} src={to} />
                <p style={{left:"400px",width:"160px" ,top: "10px"}}>Quản lý tài khoản</p>
                <img style={{left: "562px", top: "20px"}} src={to} />
                <h5 style={{left:"580px", top: "10px"}}>Thêm tài khoản</h5>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="Themnguoidung">
                <h5>Thông tin tài khoản</h5>
                <div className="hotennd">
                    <p>Họ tên</p>
                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className="form-control" placeholder="Nhập họ tên"></input>
                </div>
                <div className="tendangnhapnd">
                    <p>Tên đăng nhập</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Nhập tên đăng nhập"></input>
                </div>
                <div className="sodienthoaind">
                    <p>Số điện thoại</p>
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="form-control" placeholder="Nhập số điện thoại"></input>
                </div>
                <div className="matkhaund">
                    <p>Mật khẩu</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" placeholder="Nhập mật khẩu"></input>
                </div>
                <div className="nhapmatkhaund">
                    <p>Nhập lại mật khẩu</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" placeholder="Nhập lại mật khẩu"></input>
                </div>
                <div className="emailnd">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" placeholder="Nhập email"></input>
                </div>

                <div className="vaitrond">
                    <p>Vai trò</p>
                    <Select options={options1} onChange={(e) => setVaitro(e.value)} placeholder="Chọn vai trò..."/>
                
                </div>
                <div className="tinhtrangnd">
                    <p>Tình trạng</p>
                    <Select options={options2} onChange={(e) => setTinhtrang(e.value)} placeholder="Chọn tình trạng..."/>
                </div>

                <div className="">
                    <input id="id" onChange={(e) => setId(e.target.value)} value={"788YbpSCfnmWymsiRwKa"} type="hidden" className="form-control" placeholder="Nhập dich vu"></input>
                </div>

            </div>
            <div className="nutchon">
                
                <button className="huybo">
                    {/* <NavLink to="/Page-nguoidung"></NavLink> */}
                    <NavLink style={{textDecoration:'none'}} to="/Page-quanly"><p>Hủy bỏ</p></NavLink>
                </button>
                <button type="submit" className="them">
                       <p style={{width: "150px"}}>Cập nhật người dùng</p> 
                </button>
            </div>
        </form>
        
    </div>


    );
}
export default Editnguoidung