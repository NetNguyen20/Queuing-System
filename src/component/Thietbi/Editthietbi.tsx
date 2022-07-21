import { addDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { quanlythietbiRef } from "../../context/firestorecollection";
import { db } from "../../firebase";

const Editthietbi = () => {

    const [mathietbi, setMathietbi] = useState("")
    const [loaithietbi, setLoaithietbi] = useState("")
    const [tenthietbi, setTenthietbi] = useState("")
    const [tendangnhap, setTendangnhap] = useState("")
    const [diachiip, setDiachiip] = useState("")
    const [matkhau, setMatkhau] = useState("")
    const [dichvu, setDichvu] = useState("")
    const [id, setId] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        if (mathietbi === "" || loaithietbi === "" || tenthietbi === "" || tendangnhap === "" || diachiip === "" || matkhau === "" || dichvu === "") {
            return
        }
        const docRef = doc(db, 'thietbi', id)
        updateDoc(docRef, {mathietbi, loaithietbi, tenthietbi, tendangnhap, diachiip, matkhau, dichvu }).then(response=>{
            console.log(response)

        }).catch(error=>console.log(error.message))


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="">
                        <label htmlFor="mathietbi">Ma thiet bi</label>
                        <input id="mathietbi" onChange={(e) => setMathietbi(e.target.value)} value={mathietbi} type="text" className="form-control" placeholder="Nhập ma thiet bi"></input>
                    </div>
                    <div className="">
                        <label htmlFor="loaithietbi">Loai thiet bi</label>
                        <input id="loaithietbi" onChange={(e) => setLoaithietbi(e.target.value)} value={loaithietbi} type="text" className="form-control" placeholder="Nhập loai thiet bi"></input>
                    </div>
                    <div className="">
                        <label htmlFor="tenthietbi">Ten thiet bi</label>
                        <input id="tenthietbi" onChange={(e) => setTenthietbi(e.target.value)} value={tenthietbi} type="text" className="form-control" placeholder="Nhập tên thiet bi"></input>
                    </div>
                    <div className="">
                        <label htmlFor="tendangnhap">Ten dang nhap</label>
                        <input id="tendangnhap" onChange={(e) => setTendangnhap(e.target.value)} value={tendangnhap} type="text" className="form-control" placeholder="Nhập ten dang nhap"></input>
                    </div>
                    <div className="">
                        <label htmlFor="diachiip">Dia chi IP</label>
                        <input id="diachiip" onChange={(e) => setDiachiip(e.target.value)} value={diachiip} type="text" className="form-control" placeholder="Nhập dia chi IP"></input>
                    </div>
                    <div className="">
                        <label htmlFor="matkhau">Mat khau</label>
                        <input id="password" onChange={(e) => setMatkhau(e.target.value)} value={matkhau} type="password" className="form-control" placeholder="Nhập mat khau"></input>
                    </div>
                    <div className="">
                        <label htmlFor="dichvu">Dich vu su dung</label>
                        <input id="dichvu" onChange={(e) => setDichvu(e.target.value)} value={dichvu} type="text" className="form-control" placeholder="Nhập dich vu"></input>
                    </div>

                    <button type="submit">
                        Cap nhat thiet bi
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Editthietbi