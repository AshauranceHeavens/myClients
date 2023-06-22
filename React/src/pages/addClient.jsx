import React, { useRef, useState } from "react";
import Layout from "../components/layout";
import Wrapper from "../components/wrapper";
import { Navigate, useNavigate } from "react-router-dom";
import Error from "../components/error";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import Success from "../components/success";

const AddClient = () => {
    const nameRef = useRef();
    const middle_nameRef = useRef();
    const surnameRef = useRef();
    const numberRef = useRef();
    const emailRef = useRef();
    const websiteRef = useRef();
    const depositRef = useRef();
    const priceRef = useRef();
    const token = localStorage.getItem("ACCESS_TOKEN");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    if (!token) {
        return navigate("/login");
    }

    const Submit = async (ev) => {
        ev.preventDefault();

        try {
            const res = await axiosClient.post(`/clients/store`, {
                name: nameRef.current.value,
                middle_name: middle_nameRef.current.value,
                surname: surnameRef.current.value,
                number: numberRef.current.value,
                email: emailRef.current.value,
                website: websiteRef.current.value,
                deposit: depositRef.current.value,
                price: priceRef.current.value,
            });

            const data = await res.data;

            // console.log(res);

            if (res.status == 200) {
                setError("");
                setSuccess(data.message);
            } else {
                setSuccess("");
                setError(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h2>Add A New Client</h2>

            <Link to="/clients" className="btn btn-dark btn-sm mt-3">
                Back
            </Link>

            <form className="mt-4 mx-2" onSubmit={(ev) => Submit(ev)}>
                {error ? (
                    <Error message={error} />
                ) : (
                    success && <Success message={success} />
                )}
                <div className="row w-100 my-3 ">
                    <input
                        type="text"
                        ref={nameRef}
                        placeholder="Name"
                        className="col-md mx-1 form-control my-sm-2"
                    />
                    <input
                        type="text"
                        ref={middle_nameRef}
                        placeholder="Middle Name"
                        className="col-md mx-1 form-control my-sm-2"
                    />
                </div>
                <div className="row w-100 my-3">
                    <input
                        type="text"
                        ref={surnameRef}
                        placeholder="Surname"
                        className="col-md mx-1 form-control my-sm-2"
                    />
                    <input
                        type="text"
                        ref={numberRef}
                        placeholder="Number"
                        className="col-md mx-1 form-control my-sm-2"
                    />
                </div>
                <div className="row w-100 my-3">
                    <input
                        type="email"
                        ref={emailRef}
                        placeholder="Email"
                        className="col-md mx-1 form-control my-sm-2"
                    />
                    <input
                        type="url"
                        ref={websiteRef}
                        placeholder="Website"
                        className="col-md mx-1 form-control my-sm-2"
                    />
                </div>
                <div className="row w-100 my-3">
                    <input
                        type="number"
                        ref={priceRef}
                        placeholder="Price"
                        className="col-md mx-1 form-control my-sm-2"
                    />
                    <input
                        type="number"
                        ref={depositRef}
                        placeholder="Deposit"
                        className="col-md mx-1 form-control my-sm-2"
                    />
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-sm btn-warning my-1 mx-0"
                />
            </form>
        </>
    );
};

export default AddClient;
