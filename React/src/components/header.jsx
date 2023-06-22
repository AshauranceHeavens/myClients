import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";

const Header = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const LogOut = async (ev) => {
        ev.preventDefault();

        try {
            const res = await axiosClient.post(`/logout`);

            if (res.status == 204) {
                localStorage.removeItem("ACCESS_TOKEN");
                return navigate("/login");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        {import.meta.env.VITE_APP_URL}
                    </Link>

                    <button
                        className="navbar-toggler "
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <i className="navbar-toggler-icon"></i>
                    </button>

                    <div
                        className="collapse navbar-collapse "
                        data-bs-
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav ms-auto ">
                            {!token ? (
                                <>
                                    <li className="nav-item">
                                        <Link
                                            to="/signup"
                                            className="nav-link mx-md-2"
                                        >
                                            Signup
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            Login
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link
                                            to="/user"
                                            className="nav-link mx-md-2"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/clients"
                                            className="nav-link mx-md-2"
                                        >
                                            Clients
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <span
                                            className="nav-link mx-md-2"
                                            style={{ cursor: "pointer" }}
                                            onClick={(e) => LogOut(e)}
                                        >
                                            LogOut
                                        </span>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
