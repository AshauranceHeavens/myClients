import React, { useState } from "react";
import Layout from "./layout";
import { Outlet, Navigate } from "react-router-dom";
import Wrapper from "./wrapper";

const AuthLayout = () => {
    const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    if (!token || token === "undefined") {
        localStorage.removeItem("ACCESS_TOKEN");
        return <Navigate to="/login" />;
    }

    return (
        <Layout>
            <Wrapper>
                <Outlet />
            </Wrapper>
        </Layout>
    );
};

export default AuthLayout;
