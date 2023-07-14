import './App.css';
import { Routes, Route,useNavigate } from "react-router-dom"
import Index from './Pages/Index';
import Role from './Pages/Role';
import Form from './Pages/Form';
import Layout from './Components/Layout';
import axiosInstance from '../src/axiosInstance';
import Login from './Auth/Login';
import ForgetPassword from './Auth/ForgetPassword';
import SignUp from './Auth/SignUp';
import { useEffect } from 'react';
import User from './Pages/User';



function App() 
{
  const navigate  = useNavigate();
  useEffect(() => {
   
  let token = localStorage.getItem('token');
  console.log("token",token)
  if(!token)
  {
    navigate('/login');
  }
    
  }, []);
  return (
    <div className="App">
      <Routes>
      <Route index  element={<Login/>} />
      <Route path="/login"  element={<Login/>} />
      <Route path="/sign-up"  element={<SignUp/>} />
      <Route path="/forget-password"  element={<ForgetPassword/>} />


        <Route element={<Layout />}>
        <Route path="/dashboard" element={<Index/>} />
        <Route path="/roles"  element={<Role/>} />
        <Route path="/users"  element={<User/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
