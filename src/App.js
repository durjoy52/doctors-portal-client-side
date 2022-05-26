import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyHistory from "./pages/Dashboard/MyHistory";
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
    <div className="max-w-7xl mx-auto px-12" data-theme={dark ? 'dark' : 'light'}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyAppointment/>}></Route>
          <Route path="review" element={<Review/>}></Route>
          <Route path="myhistory" element={<MyHistory/>}></Route>
          <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
