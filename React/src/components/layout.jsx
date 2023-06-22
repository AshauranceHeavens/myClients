import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
    return (
        <div className="bg-light vh-100">
            <Header />
            {children}
        </div>
    );
};

export default Layout;
