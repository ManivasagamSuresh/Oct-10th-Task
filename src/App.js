import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './Sidebar';
import './sb-admin-2.css'
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users';
// import { useEffect } from 'react';
import User_create from './User_create';
import View_User from './View_User';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar/>
        {/* {useEffect(()=>{
          <Dashboard/>
        },[])} */}
        <Routes>
        <Route path="" element={<Dashboard/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/user_create" element={<User_create/>}></Route>
          <Route path="/user/:id" element={<View_User/>}></Route>
        </Routes>
        {/* <Dashboard/> */}
      </div>
      </div>  
    </div>
    </BrowserRouter>
  );
}

export default App;
