import { timeStamp } from "console";
import { TIMEOUT } from "dns";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Nvabar from "../Nvabar/nvabar"
import time from "../../image/time.png"
import to from "../../image/to.png"

interface IUser {
    user: {
        name: string,
        timeStamp: number
    }[]
}
const Nhatkyhoatdong = () => {
    const [users, setUsers] = useState<IUser["user"]>([]);
    const usersCollectionRef = collection(db, "users");
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [search, setSearch] = useState("")
    const [date, setDate] = useState<any | null>(null)
    const [date1, setDate1] = useState<any | null>(null)

    var showdate = new Date()
    var displaydate = showdate.getDate() + '/' + (showdate.getMonth()+ 1) +  '/' + showdate.getFullYear() + '  ' + showdate.getHours() + ':' + showdate.getMinutes() + ':' + showdate.getSeconds()

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            console.log(data.docs);
            setUsers(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })))
        };

        getUsers();

    }, []);

    useEffect(() => {
        setFilteredContacts(
            users.filter(
                (user) =>
                    user.timeStamp.toString().includes(search.toString()) ||
                    user.name.toString().includes(search.toString())
            )
        );
    }, [search, users]);


    return (
        <div>
            <Nvabar />
            <div className="tieude">
                <p>Cài đặt hệ thống</p>
                <img src={to} />
                <h5>Nhật ký hoạt động</h5>
            </div>

            <div className="thoigian">
                <label htmlFor="">Chọn thời gian</label>
                <input className="from" type="date" placeholder="10/07/2021" onChange={e => setDate(e.target.value)} value={date}/>
                <img src={time} alt="" />
                <input className="to" type="date" placeholder="10/07/2021" onChange={e => setDate1(e.target.value)} value={date1}/>

            </div>
            <div className="search">
                <p>Từ khóa</p>
                <input type="text" placeholder="Nhập từ khóa" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ width: "266px", height: "49px", borderRadius: "12px 0px 0px 0px" }}> Tên đăng nhập</th>
                        <th style={{ width: "240px", height: "49px" }}> Thời gian tác động</th>
                        <th style={{ width: "216px", height: "49px" }}> IP thực hiện</th>
                        <th style={{ width: "386px", height: "49px", borderRadius: " 0px 12px 0px 0px" }}> Thao tác thực hiện</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        filteredContacts.map((nguoidung) => {
                            return (
                                <tr>
                                    <td>{nguoidung.name}</td>
                                    <td>{displaydate}</td>
                                    <td>
                                        192.168.3.1
                                    </td>
                                    <td>
                                        Cập nhật thông tin dịch vụ 
                                    </td>
                                </tr>
                            );
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Nhatkyhoatdong