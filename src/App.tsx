import './App.css';
import Login from "./component/Auth/login"

import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import TrangChu from './component/Trangchu';
import Thietbi from './component/Thietbi/Thietbi';
import Editnguoidung from './component/Auth/capnhatnguoidung';
import Retpassword from './component/Auth/resetpassword';
import Quanlytaikhoan from './component/Auth/Quanlytaikhoan';
import Themnguoidung from './component/Auth/Themnguoidung';
import Themthietbi from './component/Thietbi/Themthietbi';
import Editthietbi from './component/Thietbi/Editthietbi';
import ConfirmPass from './component/Auth/confirmpass';
import ForgotPas from './component/Auth/forgotpass';
import Chitietthietbi from './component/Thietbi/Detailthietbi';
import Nhatkyhoatdong from './component/Auth/nhatky';
import Vaitro from './component/Auth/vaitro';
import Themvaitro from './component/Auth/themvaitro';
import Capsomoi from './component/Capso/Capsomoi'
import Capso from './component/Capso/Capso'
import Chitietcapso from './component/Capso/Chitietcapso';
import Themdichvu from './component/Dichvu/Themdichvu';
import Dichvu from './component/Dichvu/Dichvu';
import Chitietdichvu from './component/Dichvu/Chitietdichvu';
import Baocao from './component/Baocao';
import Capnhatvaitro from './component/Auth/capnhatvaitro';
function App() {
  

  return (
    <div className="App" >
                      
      <BrowserRouter>
        <Routes>  
          <Route path='/' element ={<Login/>}/>
          <Route path='/Page-home' element ={<TrangChu/>}/>
          <Route path='/Page-dashboard' element ={<Dashboard/>}/>
          <Route path='/Page-thietbi' element ={<Thietbi/>}/>
          <Route path='/Page-capnhatnguoidung' element ={<Editnguoidung/>}/>
          <Route path='/Page-reset' element ={<Retpassword/>}/>
          <Route path='/Page-quanly' element ={<Quanlytaikhoan/>}/>
          <Route path='/Page-nguoidung' element ={<Themnguoidung/>}/>
          <Route path='/Page-themthietbi' element ={<Themthietbi/>}/>
          <Route path='/Page-capnhatthietbi' element ={<Editthietbi/>}/>
          <Route path='/Page-confirm' element={<ConfirmPass/>}/>
          <Route path='/Page-forgot' element={<ForgotPas/>}/>
          <Route path='/Page-chitietthietbi' element={<Chitietthietbi/>}/>
          <Route path='/Page-nhatkyhoatdong' element={<Nhatkyhoatdong/>}/>
          <Route path='/Page-vaitro' element={<Vaitro/>}/>
          <Route path='/Page-themvaitro' element={<Themvaitro/>}/>
          <Route path='/Page-capsomoi' element={<Capsomoi/>}/>
          <Route path='/Page-capso' element={<Capso/>}/>
          <Route path='/Page-chitietcapso' element={<Chitietcapso/>}/>
          <Route path='/Page-themdichvu' element={<Themdichvu/>}/>
          <Route path='/Page-dichvu' element={<Dichvu/>}/>
          <Route path='/Page-chitietdichvu' element={<Chitietdichvu/>}/>
          <Route path='/Page-baocao' element={<Baocao/>}/>
          <Route path='/Page-capnhatvaitro' element={<Capnhatvaitro/>}/>



        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;