import { useState } from 'react';
import './App.css';
import Login from "./component/login"

import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import TrangChu from './component/Trangchu';
import Thietbi from './component/Thietbi';
import Register from './component/register';
import Retpassword from './component/resetpassword';
import Quanlytaikhoan from './component/Quanlytaikhoan';
import Themnguoidung from './component/Themnguoidung';
import Themthietbi from './component/Themthietbi';
import Check from './component/filetest';

function App() {
  const [thietbiId, setThietbiId] = useState("");

  const getThietbiIdHandler = (id) =>{
    console.log("The ID of thietbi to be update: ", id);
    setThietbiId(id);
  };
  

  return (
    <div className="App" >
                      
      <BrowserRouter>
        <Routes>  
          <Route path='/Page-login' element ={<Login/>}/>
          <Route path='/Page-home' element ={<TrangChu/>}/>
          <Route path='/Page-dashboard' element ={<Dashboard/>}/>
          <Route path='/Page-thietbi' element ={<Thietbi  getThietbiId={getThietbiIdHandler}/>}/>
          <Route path='/Page-register' element ={<Register/>}/>
          <Route path='/Page-reset' element ={<Retpassword/>}/>
          <Route path='/Page-quanly' element ={<Quanlytaikhoan/>}/>
          <Route path='/Page-nguoidung' element ={<Themnguoidung/>}/>
          <Route path='/Page-themthietbi' element ={<Themthietbi id={thietbiId} setThietbiId={setThietbiId}/>}/>
          <Route path='/Page-check' element={<Check/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;