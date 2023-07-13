import './App.css';
import { Routes, Route } from "react-router-dom"
import Index from './Pages/Index';
import Table from './Pages/Table';
import Form from './Pages/Form';
import Layout from './Components/Layout';
import Login from './Auth/Login';
import ForgetPassword from './Auth/ForgetPassword';
import SignUp from './Auth/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        
      <Route path="/login"  element={<Login/>} />
      <Route path="/sign-up"  element={<SignUp/>} />
      <Route path="/forget-password"  element={<ForgetPassword/>} />


        <Route element={<Layout />}>
        <Route index element={<Index/>} />
        <Route path="/form"  element={<Form/>} />
        <Route path="/table"  element={<Table/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
