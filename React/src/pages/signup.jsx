import { Link, Navigate, useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import React, { useRef, useState } from "react";
import axiosClient from "../axios-client";

const Signup = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const password_confirmationRef = useRef();
    const [message, setMessage] = useState("");

    const send = async (ev) => {
        ev.preventDefault();
        setMessage("");

        try {
            const res = await axiosClient.post(`/signup`, {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                password_confirmation: password_confirmationRef.current.value,
            });

            const data = await res.data;

            if (res.status == 200) {
                localStorage.setItem("ACCESS_TOKEN", data.token);
                return navigate("/user");
            }

            // console.log(data);
            setMessage(data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-100">
            <div className="container py-5 h-75 d-flex justify-content-center align-items-center">
                <div className="bg-white p-4 rounded shadow-sm">
                    <h2 className="text-center">Signup</h2>

                    <form>
                        {message && (
                            <div className="bg-danger text-white p-3 rounded">
                                <p className="text-center m-0">{message}</p>
                            </div>
                        )}
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control my-3"
                        />

                        <input
                            ref={passwordRef}
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control my-3"
                        />
                        <input
                            ref={password_confirmationRef}
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm password"
                            className="form-control my-3"
                        />
                        <input
                            type="submit"
                            value="Signup"
                            onClick={(e) => send(e)}
                            className="btn btn-warning"
                        />
                    </form>
                    <p className="text-center my-3">
                        Already have an account?{" "}
                        <Link to="/login" className="text-warning">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
