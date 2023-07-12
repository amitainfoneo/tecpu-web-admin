import './App.css';
import { Routes, Route } from "react-router-dom"
import Index from './Pages/Index';
import Table from './Pages/Table';
import Form from './Pages/Form';
import Layout from './Components/Layout';


function App() {
  return (
    <div className="App">
    
      <Routes>
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
