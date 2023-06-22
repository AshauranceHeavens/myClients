import React from "react";

const Success = ({ message }) => {
    return (
        <div className="bg-success text-white p-3 rounded">
            <p className="text-center m-0">{message}</p>
        </div>
    );
};

export default Success;
