import React from "react";
import Layout from "../components/layout";
import Wrapper from "../components/wrapper";

const NotFound = () => {
    return (
        <Layout>
            <Wrapper>
                <div className="text-start my-3 ">
                    <h1 style={{ fontSize: "9rem" }}>
                        <i className="bi-info-circle me-4"></i>
                        404
                    </h1>
                    <p className="fs-1 my-3">
                        The page you are looking for was not found
                    </p>
                </div>
            </Wrapper>
        </Layout>
    );
};

export default NotFound;
