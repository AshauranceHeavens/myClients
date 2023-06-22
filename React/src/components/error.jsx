import React from "react";

const Error = ({ message }) => {
    return (
        <div className="bg-danger text-white p-3 rounded">
            <p className="text-center m-0">{message}</p>
        </div>
    );
};

export default Error;
