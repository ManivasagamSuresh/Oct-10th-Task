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
import Edit_User from './Edit_User';
import Edit_Profile from './Edit_Profile';
import { useContext } from 'react';
import { UserContext } from './context';
import Login from './Login'
import PortalLayout from './PortalLayout'

function App() {
  const userdata = useContext(UserContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path='/Portal' element={<PortalLayout />}>

          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="Users/user_create" element={<User_create />}></Route>
          <Route path="Users/user/:id" element={<View_User />}></Route>
          <Route path="Users/edituser/:id" element={<Edit_User />}></Route>
          <Route path="Users/user/:id/editprofile" element={<Edit_Profile />}></Route>

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
