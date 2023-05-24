import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home";
import "./index.css"
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Forgot from "./Pages/auth/Forgot";
import Reset from "./Pages/auth/Reset";
import SideBar from "./components/siderbar/SideBar";
import Layout from "./components/layout/Layout";
import Dashboard from "./Pages/dashboard/Dashboard";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true;
function App() {
  return (
   <BrowserRouter>
    <ToastContainer/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/resetpassword/:resetToken" element={<Reset/>}/>

      
      <Route path="/dashboard" element={
        <SideBar>
          <Layout>
            <Dashboard/>
          </Layout>
        </SideBar>
      }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;