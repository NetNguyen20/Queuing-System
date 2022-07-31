import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth";
import Nvabar from "../Nvabar/nvabar";
import Select from 'react-select'
import to from "../../image/to.png"



const Themnguoidung = (props:any) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [vaitro, setVaitro] = useState("");
    const [tinhtrang, setTinhtrang] = useState("");
    const [phone, setPhone] = useState<number | string>(0);
    const [user, loading, error] = useAuthState(auth);        
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
    
    // const styles = {
    //     option: (provided, state) => ({
    //       ...provided,
    //       fontWeight: state.isSelected ? "bold" : "normal",
    //       color: "white",
    //       backgroundColor: state.data.color,
    //       fontSize: state.selectProps.myFontSize
    //     }),
    //     singleValue: (provided, state) => ({
    //       ...provided,
    //       color: state.data.color,
    //       fontSize: state.selectProps.myFontSize
    //     })
    //   }


    const navigate = useNavigate();
    const createUser = async (username: string, name: string, email: string, password: string, phone: number | string, vaitro:string, tinhtrang:string) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                username,
                name,
                authProvider: "local",
                email,
                timeStamp: serverTimestamp(),
                vaitro,
                tinhtrang,
                phone,
                password

            });
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    };
    const themtaikhoan = () => {
        if (!name) alert("Please enter name");
        createUser(username, name, email, password, phone, vaitro, tinhtrang);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate('', { replace: true });
    }, [user, loading]);

    return (<div>
            <Nvabar />
            <div className="tieude">
                <p style={{top: "10px"}}>Cài đặt hệ thống</p>
                <img style={{left: "382px", top: "20px"}} src={to} />
                <p style={{left:"400px",width:"160px" ,top: "10px"}}>Quản lý tài khoản</p>
                <img style={{left: "562px", top: "20px"}} src={to} />
                <h5 style={{left:"580px", top: "10px"}}>Thêm tài khoản</h5>
            </div>
            
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

        </div>
        <div className="nutchon">
            
            <button className="huybo">
                {/* <NavLink to="/Page-nguoidung"></NavLink> */}
                <NavLink style={{textDecoration:'none'}} to="/Page-quanly"><p>Hủy bỏ</p></NavLink>
            </button>
            <button onClick={themtaikhoan} className="them">
                <p>Thêm</p>
            </button>
        </div>
    </div>


    );
}
export default Themnguoidung;