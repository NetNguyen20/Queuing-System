import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { db } from "../firebase";
import Nvabar from "../component/nvabar";
import { setTimeout } from "timers/promises";
import { async } from "@firebase/util";
import Thietbiservice from "../context/servicethietbi"
import { Alert } from "react-bootstrap";


const Themthietbi = ({id, setThietbiId}) => {
    const [mathietbi, setMathietbi] = useState("");
    const [loaithietbi, setLoaithietbi] = useState("");
    const [tenthietbi, setTenthietbi] = useState("");
    const [tendangnhap, setTendangnhap] = useState("");
    const [diachiip, setDiachiip] = useState("");
    const [matkhau, setMatkhau] = useState("");
    const [dichvu, setDichvu] = useState("");
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (mathietbi === "" || loaithietbi === "" || tenthietbi === "" || tendangnhap === "" || diachiip === "" || matkhau === "" || dichvu === "") {
            setMessage({ error: true, msg: "Nhap tat ca thong tin!" });
            return;
        }
        const newthietbi = {
            mathietbi, loaithietbi, tenthietbi, tendangnhap, diachiip, matkhau, dichvu
        }
        console.log(newthietbi);

        try{ 
            if(id !== undefined && id !== ""){
                await Thietbiservice.updateThietbi(id, newthietbi);
                setThietbiId("");
                setMessage({error:false, msg: "Cap nhat thiet bi moi thanh cong!"});

            }else{
                await Thietbiservice.addThietbi(newthietbi);
                setMessage({error:false, msg: "Them thiet bi moi thanh cong!"});
            }
            
        }catch(err){
            setMessage({error:true, msg: err.message});
        }

        setMathietbi("");
        setLoaithietbi("");
        setTenthietbi("");
        setTendangnhap("");
        setDiachiip("");
        setMatkhau("");
        setDichvu("");

    };

    const editHandler = async() =>{
        try{
            const docSnap = await Thietbiservice.getThietbi(id);
            console.log("the record is:", docSnap.data());
            setMathietbi(docSnap.data().mathietbi);
            setLoaithietbi(docSnap.data().loaithietbi);
            setTenthietbi(docSnap.data().tenthietbi);
            setTendangnhap(docSnap.data().tendangnhap);
            setDiachiip(docSnap.data().diachiip);
            setMatkhau(docSnap.data().matkhau);
            setDichvu(docSnap.data().dichvu);

        }catch(err){
            setMessage({error: true, msg: err.message});
        }
    }

    useEffect(()=>{
        console.log("The id here is: ", id)
        if(id !== undefined && id !== ""){
            editHandler();
        }
    }, [id]) 




    return (
        <div>
            {message?.msg && (<Alert variant={message?.error ? "danger" : "success"}>{message?.msg}</Alert>)}
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="">
                        <label>Ma thiet bi</label>
                        <input onChange={(e) => setMathietbi(e.target.value)} value={mathietbi} type="text" className="form-control" placeholder="Nhập ma thiet bi"></input>
                    </div>
                    <div className="">
                        <label>Loai thiet bi</label>
                        <input onChange={(e) => setLoaithietbi(e.target.value)} value={loaithietbi} type="text" className="form-control" placeholder="Nhập loai thiet bi"></input>
                    </div>
                    <div className="">
                        <label>Ten thiet bi</label>
                        <input onChange={(e) => setTenthietbi(e.target.value)} value={tenthietbi} type="text" className="form-control" placeholder="Nhập tên thiet bi"></input>
                    </div>
                    <div className="">
                        <label>Ten dang nhap</label>
                        <input onChange={(e) => setTendangnhap(e.target.value)} value={tendangnhap} type="text" className="form-control" placeholder="Nhập ten dang nhap"></input>
                    </div>
                    <div className="">
                        <label>Dia chi IP</label>
                        <input onChange={(e) => setDiachiip(e.target.value)} value={diachiip} type="text" className="form-control" placeholder="Nhập dia chi IP"></input>
                    </div>
                    <div className="">
                        <label>Mat khau</label>
                        <input onChange={(e) => setMatkhau(e.target.value)} value={matkhau} type="password" className="form-control" placeholder="Nhập mat khau"></input>
                    </div>
                    <div className="">
                        <label>Dich vu su dung</label>
                        <input onChange={(e) => setDichvu(e.target.value)} value={dichvu} type="text" className="form-control" placeholder="Nhập dich vu"></input>
                    </div>

                    <button type="submit">
                        Them thiet bi
                    </button>
                </div>
            </form>
        </div>

    );
};

export default Themthietbi;