import React from "react";
import Banner2 from "../../image/Banner2.png"
import logo1 from "../../image/logo1.png"
import {NavLink} from "react-router-dom"

const ConfirmPass = ()=>{

    return(
        
        <div className="forgetpass">
            <div className="Banner2">
                <img src={Banner2}  />

            </div>
            <div className="formforget">
                <img src={logo1} />
                <h2>Đặt lại mật khẩu</h2>
                <input type="email" />
                <p>Mật khẩu</p>
                <input type="password" style={{top: '489px'}}/>
                <p style={{top: '450px'}}>Nhập lại mật khẩu</p>
                <input type="password" />
             
                <NavLink to="/">
                    <button className="tieptuc">
                        Xác nhận
                    </button>
                </NavLink>
                
            </div>

        </div>
        
        
    )
}

export default ConfirmPass