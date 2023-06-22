import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import Spinner from "../components/spinner";
import Error from "../components/error";

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const send = async (e) => {
        e.preventDefault();
        setError(false);
        setLoading(true);

        try {
            const res = await axiosClient.post("/login", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });

            const data = await res.data;
            if (res.status == 200) {
                localStorage.setItem("ACCESS_TOKEN", data.token);
                // setToken(data.token);
                setLoading(false);
                return navigate("/clients");
            } else {
                setError(data.message);
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    return (
        <div className="mt-5 d-flex justify-content-center align-items-center">
            <div className="bg-white shadow-sm rounded  p-4">
                <form className="" onSubmit={(e) => send(e)}>
                    <h2 className="text-center">Login</h2>
                    {error ? (
                        <Error message={error} />
                    ) : (
                        loading && <Spinner className="my-1" />
                    )}

                    <input
                        type="email"
                        ref={emailRef}
                        name="Email"
                        placeholder="email"
                        className="form-control my-3"
                    />
                    <input
                        type="password"
                        ref={passwordRef}
                        name="password"
                        placeholder="Password"
                        className="form-control my-3"
                    />
                    <input
                        type="submit"
                        className="btn btn-warning "
                        value="Login"
                    />
                </form>
                <p className="m-0 text-center mt-3">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-warning text-decoration-none"
                    >
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
