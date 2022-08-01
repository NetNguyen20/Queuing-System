    import React, { useEffect, useState } from "react";
    import Nvabar from "../Nvabar/nvabar"
    import Ketnoi from "../../image/ketnoi.png"
    import to from "../../image/to.png"
    import Add from "../../image/Add.png"
    import { NavLink } from "react-router-dom";
    import time from "../../image/time.png"
    import Select from 'react-select'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


interface IDichvu {
    dichvu:{
      madichvu:string,
      tendichvu:string,
      mota:string
      
    }[]
  }
    const Dichvu = () => {
        const [date, setDate] = useState<any | null>(null)
        const [date1, setDate1] = useState<any | null>(null)
        const dichvuCollectionRef = collection(db, "dichvu");
        const [dichvu, setDichvu] = useState<IDichvu["dichvu"]>([]);
        const [filteredContacts, setFilteredContacts] = useState([]);
        const [search, setSearch] = useState("")
        var showdate = new Date()
        var displaydate = showdate.getHours() + '/' + (showdate.getMonth()+ 1) +  '/' + showdate.getFullYear() + '  ' + showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds()
        const options1 = [
            { value: 'Tất cả', label: 'Tất cả' },
            { value: 'Hoạt động', label: 'Hoạt động' },
            { value: 'Ngừng hoạt động', label: 'Ngừng hoạt động' }
        ]

        useEffect( () => {

            const getDichvu = async () => {
                const data = await getDocs(dichvuCollectionRef)
                console.log(data.docs);
                setDichvu(data.docs.map((doc: any) => ({...doc.data(), id: doc.id})))
            };
    
            getDichvu();
    
        }, []);
    

        useEffect(() => {
            setFilteredContacts(
                dichvu.filter(
                    (user) =>
                        user.madichvu.toString().includes(search.toString()) ||
                        user.tendichvu.toString().includes(search.toString()) ||
                        user.mota.toString().includes(search.toString())
                )
            );
        }, [search, dichvu]);
        return (
            <div>
                <Nvabar />
                <div className="tieude">
                        <p>Dịch vụ</p>
                        <img style={{ left: "300px" }} src={to} />
                        <h5 style={{ left: "320px" }}>Danh sách dịch vụ</h5>
                    </div>

                    <div className="thongtin">
                        <h5>Quản lý dịch vụ</h5>
                    </div>
                <div className="searchvaitro">
                    <p style={{width:"155px"}}>Trạng thái hoạt động</p>
                    <Select options={options1} onChange={(e) => setSearch(e.value)} placeholder="Tất cả" />
                </div>
                <div style={{left:"600px", top:"185px"}} className="thoigian">
                    <label htmlFor="">Chọn thời gian</label>
                    <input className="from" type="date" placeholder="10/07/2021" onChange={e => setDate(e.target.value)} value={date}/>
                    <img src={time} alt="" />
                    <input className="to" type="date" placeholder="10/07/2021" onChange={e => setDate1(e.target.value)} value={date1}/>

                </div>
                <div className="search">
                    <p>Từ khóa</p>
                    <input type="text" placeholder="Nhập từ khóa" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="listcapso">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th style={{ width: "150px", height: "49px" , borderRadius: "12px 0px 0px 0px" }}> Mã dịch vụ</th>
                                <th style={{ width: "224px", height: "49px" }}> Tên dịch vụ </th>
                                <th style={{ width: "230px", height: "49px" }}> Mô tả </th>
                                <th style={{ width: "253px", height: "49px" }}> Trạng thái hoạt động</th>
                                <th style={{ width: "125px", height: "49px" }}> </th>
                                <th style={{ width: "125px", height: "49px" , borderRadius: "0px 12px 0px 0px"}}> </th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredContacts.map((listdichvu) => {
                                    return(

                                    <tr>
                                    <td style={{ width: "150px", height: "49px" }}>KIO_01</td>
                                    <td style={{ width: "224px", height: "49px" }}>Kiosk</td>
                                    <td style={{ width: "230px", height: "49px" }}>{listdichvu.mota}</td>
                                    <td style={{ width: "253px", height: "49px" }}>
                                        <img src={Ketnoi} style={{ width: "8px", height: "8px" }} />&nbsp;
                                        Hoạt động
                                    </td>

                                    <td>
                                        <label htmlFor="id"></label>
                                        <NavLink to={"/Page-chitietdichvu"} style={{ textDecoration: "none" }}>
                                            Chi tiết
                                        </NavLink>


                                    </td>
                                    <td>
                                        <label htmlFor="id"></label>
                                        <NavLink to={"/Page-capnhatdichvu"} style={{ textDecoration: "none" }}>
                                            Cập nhật
                                        </NavLink>
                                    </td>

                                </tr>
                                );
                            }
                            )
                        }

                        </tbody>
                    </table>
                </div>
                <NavLink  style={{width: "75px", textAlign: 'center', textDecoration:'none', color: "#FF7506"}} className="themtaikhoan" to="/Page-themdichvu">
                    <img src={Add} />
                    Thêm dịch vụ
                </NavLink>       

            </div>
        )
    }

    export default Dichvu