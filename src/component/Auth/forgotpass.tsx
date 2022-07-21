import React from "react";
import Banner2 from "../../image/Banner2.png"
import logo1 from "../../image/logo1.png"
import {NavLink} from "react-router-dom"

const ForgetPass = ()=>{

    return(
        
        <div className="confirmpass">
            <div className="Banner2">
                <img src={Banner2}  />

            </div>
            <div className="formconfirm">
                <img src={logo1} />
                <h2>Đặt lại mật khẩu</h2>
                <p>Vui lòng nhập email để đặt lại mật khẩu của bạn</p>
                <input type="email" />
                <NavLink to="/">
                    <button className="huy" style={{left: "100px"}}>
                        Hủy
                    </button>
                </NavLink>
                <NavLink to="/Page-confirm">
                    <button className="tieptuc">
                        Tiếp tục
                    </button>
                </NavLink>

            </div>

        </div>
        
        
    )
}

export default ForgetPass