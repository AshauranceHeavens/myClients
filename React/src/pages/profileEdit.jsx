import React, { useRef, useEffect, useState } from "react";
import axiosClient from "../axios-client";
import Spinner from "../components/spinner";
import Error from "../components/error";
import Success from "../components/success";

const ProfileEdit = () => {
    const [name, setName] = useState("");
    const [middle_name, setMiddle_name] = useState("");
    const [surname, setSurname] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        setLoading(true);

        try {
            const res = await axiosClient.get("/user");
            // console.log(res.data.user);
            setUser(res.data.user);
            const data = res.data.user;

            setName(data.name);
            setMiddle_name(data.middle_name);
            setSurname(data.surname);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    const update = async (ev) => {
        ev.preventDefault();
        setLoading(true);

        try {
            const res = await axiosClient.put("/user/update", {
                name: name,
                middle_name: middle_name,
                surname: surname,
            });

            const data = await res.data;

            if (res.status == 200) {
                setSuccess(data.message);
                setError("");
                getUser();
            } else {
                setSuccess("");
                setError(data.message);
            }

            setLoading(false);
        } catch (error) {
            // alert(res.data);
            setLoading(false);
            console.error(error);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="bg-white rounded shadow-sm px-4 py-3">
                    {loading ? (
                        <Spinner />
                    ) : (
                        <form className="" onSubmit={(ev) => update(ev)}>
                            <h2 className="text-center mb-3">
                                Update Your Details
                            </h2>
                            {error ? (
                                <Error message={error} />
                            ) : (
                                success && <Success message={success} />
                            )}
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Name"
                                className="form-control my-3"
                            />
                            <input
                                type="text"
                                onChange={(e) => setMiddle_name(e.target.value)}
                                value={middle_name}
                                placeholder="Middle name"
                                className="form-control my-3"
                            />
                            <input
                                type="text"
                                onChange={(e) => setSurname(e.target.value)}
                                value={surname}
                                placeholder="Surname"
                                className="form-control my-3"
                            />
                            {/* <input
                                    type="text"
                                    value={user.number}
                                    placeholder="Number"
                                    className="form-control my-3"
                                /> */}
                            <input
                                type="text"
                                disabled
                                value={user.email}
                                placeholder="Email"
                                className="form-control my-3"
                            />
                            <input
                                type="submit"
                                value="Submit"
                                className="btn btn-warning btn-sm "
                            />
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProfileEdit;
