import React, { useState } from "react";
import Layout from "./layout";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Wrapper from "./wrapper";

const GuestLayout = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    if (token) {
        return <Navigate to="/user" />;
    }

    return (
        <Layout>
            <Wrapper>
                <Outlet />
            </Wrapper>
        </Layout>
    );
};

export default GuestLayout;
