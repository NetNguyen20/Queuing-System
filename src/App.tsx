import './App.css';
import Login from "./component/Auth/login"

import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import TrangChu from './component/Trangchu';
import Thietbi from './component/Thietbi/Thietbi';
import Register from './component/Auth/register';
import Retpassword from './component/Auth/resetpassword';
import Quanlytaikhoan from './component/Auth/Quanlytaikhoan';
import Themnguoidung from './component/Auth/Themnguoidung';
import Themthietbi from './component/Thietbi/Themthietbi';
import Check from './component/filetest';
import Editthietbi from './component/Thietbi/Editthietbi';
import ConfirmPass from './component/Auth/confirmpass';
import ForgotPas from './component/Auth/forgotpass';
import Chitietthietbi from './component/Thietbi/Detailthietbi';
import Nhatkyhoatdong from './component/Auth/nhatky';
import Vaitro from './component/Auth/vaitro';
import Themvaitro from './component/Auth/themvaitro';


function App() {
  

  return (
    <div className="App" >
                      
      <BrowserRouter>
        <Routes>  
          <Route path='/' element ={<Login/>}/>
          <Route path='/Page-home' element ={<TrangChu/>}/>
          <Route path='/Page-dashboard' element ={<Dashboard/>}/>
          <Route path='/Page-thietbi' element ={<Thietbi/>}/>
          <Route path='/Page-register' element ={<Register/>}/>
          <Route path='/Page-reset' element ={<Retpassword/>}/>
          <Route path='/Page-quanly' element ={<Quanlytaikhoan/>}/>
          <Route path='/Page-nguoidung' element ={<Themnguoidung/>}/>
          <Route path='/Page-themthietbi' element ={<Themthietbi/>}/>
          <Route path='/Page-capnhatthietbi' element ={<Editthietbi/>}/>
          <Route path='/Page-check' element={<Check/>}/>
          <Route path='/Page-confirm' element={<ConfirmPass/>}/>
          <Route path='/Page-forgot' element={<ForgotPas/>}/>
          <Route path='/Page-chitietthietbi' element={<Chitietthietbi/>}/>
          <Route path='/Page-nhatkyhoatdong' element={<Nhatkyhoatdong/>}/>
          <Route path='/Page-vaitro' element={<Vaitro/>}/>
          <Route path='/Page-themvaitro' element={<Themvaitro/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;