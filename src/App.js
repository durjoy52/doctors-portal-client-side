import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import AddDoctor from "./pages/Dashboard/AddDoctor";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyHistory from "./pages/Dashboard/MyHistory";
import Payment from "./pages/Dashboard/Payment";
import Review from "./pages/Dashboard/Review";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAdmin from "./pages/Login/RequireAdmin";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import Navbar from "./pages/Shared/Navbar";

function App() {
  const [dark,setDark] =useState(false)
  return (
    <div data-theme={dark ? 'dark' : 'light'}>
      <Navbar dark={dark} setDark={setDark} />
      <div className="px-2">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route path="payment/:id" element={<Payment/>}></Route>
          <Route index element={<MyAppointment/>}></Route>
          <Route path="review" element={<Review/>}></Route>
          <Route path="myhistory" element={<MyHistory/>}></Route>
          <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="managedoctor" element={<RequireAdmin><ManageDoctors/></RequireAdmin>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
