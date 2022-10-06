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
        </Routes>
        {/* <Dashboard/> */}
      </div>
      </div>  
    </div>
    </BrowserRouter>
  );
}

export default App;
