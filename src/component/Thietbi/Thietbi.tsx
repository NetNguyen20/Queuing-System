import { useEffect, useState } from "react";
import Nvabar from "../Nvabar/nvabar"
import {  NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Add from "../../image/Add.png"
import Ketnoi from "../../image/ketnoi.png"
import Select from 'react-select'
import to from "../../image/to.png"

interface IThietbi {
    thietbi:{
      mathietbi:string,
      tenthietbi:string,
      diachiip:string,
      tendangnhap:number,
      matkhau:string,
      dichvu: string,
      loaithietbi:string
      trangthai:string,
      ketnoi:string
    }[]
  }
const Thietbi = () => {
    const thietbiCollectionRef = collection(db, "thietbi");
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [thietbis, setThietbis] = useState<IThietbi["thietbi"]>([]);
    const [search, setSearch] = useState("")

    const options1 = [
        { value: 'Tất cả', label: 'Tất cả' },
        { value: 'Hoạt động', label: 'Hoạt động' },
        { value: 'Ngừng hoạt động', label: 'Ngừng hoạt động' }
    ]
    const options2 = [
        { value: 'Tất cả', label: 'Tất cả' },
        { value: 'Kết nối', label: 'Kết nối' },
        { value: 'Mất kết nối', label: 'Mất kết nối' }
    ]
    
    useEffect( () => {

        const getThietbis = async () => {
            const data = await getDocs(thietbiCollectionRef)
            console.log(data.docs);
            setThietbis(data.docs.map((doc: any) => ({...doc.data(), id: doc.id})))
        };

        getThietbis();

    }, []);

    // function edittb(id){
    //     const docRef = doc(db, 'thietbi', id)
    //     updateDoc(docRef, { mathietbi, loaithietbi, tenthietbi, tendangnhap, diachiip, matkhau, dichvu }).then(response=>{
    //         console.log(response)

    //     }).catch(error=>console.log(error.message))
    // }

     useEffect(() => {
        setFilteredContacts(
            thietbis.filter(
                (thietbi) =>
                    thietbi.mathietbi.toString().includes(search.toString()) ||
                    thietbi.loaithietbi.toString().includes(search.toString()) ||
                    thietbi.tenthietbi.toString().includes(search.toString()) ||
                    thietbi.tendangnhap.toString().includes(search.toString()) ||
                    thietbi.diachiip.toString().includes(search.toString()) ||
                    thietbi.matkhau.toString().includes(search.toString()) ||
                    thietbi.dichvu.toString().includes(search.toString()) 
                   
            )
        );
    }, [search, thietbis]);

    

    return (
        <div style={{ top: "0px"}}>
            <Nvabar/>
            <div className="tieude">
                <p>Thiết bị</p>
                <img style={{left: "310px"}} src={to} />
                <h5 style={{left:"330px",}}>Danh sách thiết bị</h5>
            </div>

            <div className="thongtin">
                <h5>Danh sách thiết bị</h5>    
            </div>
            <div className="searchvaitro">
                <p>Tên vai trò</p>
                <Select options={options1} onChange={(e) => setSearch(e.value)} placeholder="Tất cả" />
            </div>
            <div className="searchtrangthai">
                <p>Trạng thái kết nối</p>
                <Select options={options2} onChange={(e) => setSearch(e.value)} placeholder="Tất cả" />
            </div>
            <div className="search">
                <p>Từ khóa</p>
                <input type="text" placeholder="Nhập từ khóa" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <table className="styled-table" > 
                <thead>
                    <tr>
                        <th style={{width: "103px",height: "49px", borderRadius: "  12px 0px 0px 0px "}}> Mã thiết bị</th>
                        <th style={{width: "99px", height: "49px"}}> Tên thiết bị</th>
                        <th style={{width: "138px",height: "49px"}}> Địa chỉ IP</th>
                        <th style={{width: "171px",height: "49px"}}> Trạng thái hoạt động</th>
                        <th style={{width: "145px",height: "49px"}}> Trạng thái kết nối</th>
                        <th style={{width: "268px",height: "49px"}}> Dịch vụ sử dụng</th>
                        <th style={{width: "82px",height: "49px"}}>  </th>
                        <th style={{width: "106px",height: "49px", borderRadius: " 0px 12px 0px 0px "}}>  </th>

                    </tr>
                </thead>
                <tbody>
                    {
                    filteredContacts.map((thietbilist)=>{
                        return(
                            <tr>
                                <td style={{width:"103px", height:"49px"}}>{thietbilist.mathietbi}</td>
                                <td style={{width: "109px", height:"49px"}}>{thietbilist.tenthietbi}</td>
                                <td style={{width: "138px",height: "49px"}}>{thietbilist.diachiip}</td>
                                <td style={{width: "171px",height: "49px"}}>
                                    <img src={Ketnoi} style={{width: "8px", height:"8px"}} />&nbsp;
                                    Hoạt động
                                </td>
                                <td style={{width: "145px",height: "49px"}}>
                                    <img src={Ketnoi} style={{width: "8px", height:"8px"}} />&nbsp;
                                    Kết nối
                                </td>
                                <td style={{width: "268px",height: "49px"}}>{thietbilist.dichvu}</td>
                                <td>
                                    <NavLink style={{ textDecoration:"none"}} to="/Page-chitietthietbi">
                                        Chi tiết
                                    </NavLink>
                                </td>
                                <td>
                                    <label htmlFor="id"></label>
                                    <NavLink to={"/Page-capnhatthietbi"} style={{ textDecoration: "none"}}>
                                        Cập nhật
                                    </NavLink>                                    
                                </td>

                            </tr>
                            
                        );
                    })}
                   
                </tbody>
            </table>
            <NavLink  style={{width: "85px", textAlign: 'center', textDecoration:'none', color: "#FF7506"}} className="themtaikhoan" to="/Page-themthietbi">
                <img src={Add} />
                Thêm thiết bị
            </NavLink>       

    </div>
    )
}

export default Thietbi