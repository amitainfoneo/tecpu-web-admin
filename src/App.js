import './App.css';
import { Routes, Route } from "react-router-dom"
import Index from './Pages/Index';
import Role from './Pages/Role';
import Form from './Pages/Form';
import Layout from './Components/Layout';
import axiosInstance from '../src/axiosInstance';
import { useEffect } from 'react';

function App() 
{
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/userTypes/getAll');
        console.log(response.data); // Do something with the response
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
    
      <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index/>} />
        {/* <Route path="/form"  element={<Form/>} /> */}
        <Route path="/roles"  element={<Role/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
