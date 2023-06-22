import React from "react";

const Spinner = ({ className }) => {
    return (
        <div
            className={
                className
                    ? `${className} text-warning d-flex flex-row justify-content-center align-items-center mx-auto`
                    : "my-5 text-warning d-flex flex-row justify-content-center p-3 align-items-center mx-auto"
            }
        >
            <div className="spinner-border spinner-success"></div>
            <p className="m-0 mx-3">Loading...</p>
        </div>
    );
};

export default Spinner;
