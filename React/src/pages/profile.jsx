import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Wrapper from "../components/wrapper";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import Spinner from "../components/spinner";

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        setLoading(true);

        try {
            const res = await axiosClient.get("/user");
            // console.log(res.data.user);
            setUser(res.data.user);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    return (
        <>
            <h2>Profile</h2>

            {loading ? (
                <Spinner />
            ) : (
                user && (
                    <div className="mt-3">
                        <Link
                            to="/user/profile_update"
                            className="mt-3 mb-2 btn btn-sm btn-warning"
                        >
                            Edit
                        </Link>
                        <ul className="fs-5 list-unstyled">
                            <li>
                                Name: {user.name} {user.middle_name}{" "}
                                {user.surname}{" "}
                            </li>
                            <li>Email: {user.email}</li>
                            <li>Joined: {user.created_at}</li>
                        </ul>
                        <p>You have {user.clients} client(s)</p>
                    </div>
                )
            )}
        </>
    );
};

export default Profile;
