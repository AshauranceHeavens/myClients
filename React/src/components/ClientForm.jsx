import React, { useState } from "react";
import Success from "./success";
import Error from "./error";

const ClientForm = ({ state, setState, error, success, submit }) => {
    return (
        <form className="mt-4 mx-2" onSubmit={(ev) => submit(ev)}>
            {error ? (
                <Error message={error} />
            ) : (
                success && <Success message={success} />
            )}
            <div className="row w-100 my-3 ">
                <input
                    type="text"
                    value={state.name}
                    onChange={(e) => {
                        setState({ ...state, name: e.target.value });
                    }}
                    placeholder="Name"
                    className="col-md mx-1 form-control my-sm-2"
                />
                <input
                    type="text"
                    value={state.middle_name}
                    onChange={(e) => {
                        setState({ ...state, middle_name: e.target.value });
                    }}
                    placeholder="Middle Name"
                    className="col-md mx-1 form-control my-sm-2"
                />
            </div>
            <div className="row w-100 my-3">
                <input
                    type="text"
                    value={state.surname}
                    onChange={(e) => {
                        setState({ ...state, surname: e.target.value });
                    }}
                    placeholder="Surname"
                    className="col-md mx-1 form-control my-sm-2"
                />
                <input
                    type="number"
                    value={state.number}
                    onChange={(e) => {
                        setState({ ...state, number: e.target.value });
                    }}
                    placeholder="Number"
                    className="col-md mx-1 form-control my-sm-2"
                />
            </div>
            <div className="row w-100 my-3">
                <input
                    type="email"
                    value={state.email}
                    onChange={(e) => {
                        setState({ ...state, email: e.target.value });
                    }}
                    placeholder="Email"
                    className="col-md mx-1 form-control my-sm-2"
                />
                <input
                    type="url"
                    value={state.website}
                    onChange={(e) => {
                        setState({ ...state, website: e.target.value });
                    }}
                    placeholder="Website"
                    className="col-md mx-1 form-control my-sm-2"
                />
            </div>
            <div className="row w-100 my-3">
                <input
                    type="number"
                    value={state.price}
                    onChange={(e) => {
                        setState({ ...state, price: e.target.value });
                    }}
                    placeholder="Price"
                    className="col-md mx-1 form-control my-sm-2"
                />
                <input
                    type="number"
                    value={state.deposit}
                    onChange={(e) => {
                        setState({ ...state, deposit: e.target.value });
                    }}
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
    );
};

export default ClientForm;
