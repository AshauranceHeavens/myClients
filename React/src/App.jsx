import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Home from "./pages/home";
import AddClient from "./pages/addClient";
import Login from "./pages/login";
import Profile from "./pages/profile";
import ProfileEdit from "./pages/profileEdit";
import ClientUpdate from "./pages/clientUpdate";
import GuestLayout from "./components/GuestLayout";
import AuthLayout from "./components/AuthLayout";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<GuestLayout />}>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>

            <Route path="/user" element={<AuthLayout />}>
                <Route index element={<Profile />} />
                <Route path="profile_update" element={<ProfileEdit />} />
            </Route>

            <Route path="/clients" element={<AuthLayout />}>
                <Route index element={<Home />} />
                <Route path="add_client" element={<AddClient />} />
                <Route path="update_client/:id" element={<ClientUpdate />} />
            </Route>

            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
