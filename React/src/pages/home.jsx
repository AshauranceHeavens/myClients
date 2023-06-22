import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/layout";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import Spinner from "../components/spinner";
import Paginate from "../components/paginate";

const Home = () => {
    const [_clients, setClients] = useState(false);
    const [links, setLinks] = useState(false);
    const [meta, setMeta] = useState(false);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("ACCESS_TOKEN");
    const nameRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        clients("clients");
    }, []);

    const clients = async (page = null, e = null) => {
        if (e != null) {
            e.preventDefault();
        }

        if (!page) {
            return;
        }

        try {
            const res = await axiosClient.get(`${page}`);

            const data = await res.data;
            setClients(data.data);
            setLinks(data.links);
            setMeta(data.meta);

            console.log(data.meta);
            console.log(data.links);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const findClient = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axiosClient.post(`/clients`, {
                name: nameRef.current.value,
            });

            const data = await res.data;
            // console.log("data = ", data.links);
            setClients(data.data);
            setLinks(data.links);
            setMeta(data.meta);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    const deleteClient = async (e, id) => {
        e.preventDefault();

        const client = _clients.filter((aClient) => aClient.id == id);

        if (
            window.confirm("Are you sure you want to delete " + client[0].name)
        ) {
            try {
                const res = await axiosClient.delete(`/clients/${id}/delete/`);
                const data = await res.data;

                if (res.status == 200) {
                    clients("clients");
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <div className="container  ">
                <h2>Clients</h2>

                <Link
                    className="btn btn-warning btn-sm my-3"
                    to="/clients/add_client"
                >
                    Add Client
                </Link>

                {_clients.length > 0 ? (
                    <>
                        <form onSubmit={(e) => findClient(e)}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    name="name"
                                    placeholder="name"
                                    ref={nameRef}
                                />
                                <input
                                    type="submit"
                                    className="btn btn-warning btn-sm"
                                    value="Submit"
                                />
                            </div>
                        </form>
                        <div className="table-responsive my-4">
                            <table className="table table-hover table-sm ">
                                <thead>
                                    <tr>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Number</th>
                                        <th scope="col">website</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Deposit</th>
                                        <th scope="col">Created at</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {_clients.map((client) => {
                                        return (
                                            <tr key={client.id}>
                                                {/* <td>{client.id}</td> */}
                                                <td>
                                                    {client.name}{" "}
                                                    {client.middle_name}{" "}
                                                    {client.surname}{" "}
                                                </td>
                                                <td>
                                                    <a
                                                        href={`mailto:${client.email}`}
                                                        className="text-dark text-decoration-none"
                                                    >
                                                        {client.email}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href={`tel:${client.number}`}
                                                        className="text-dark text-decoration-none"
                                                    >
                                                        {client.number}
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        target="_blank"
                                                        href={`${client.website}`}
                                                        className="text-dark text-decoration-none"
                                                    >
                                                        {client.website}
                                                    </a>
                                                </td>
                                                <td>{client.price}</td>
                                                <td>{client.deposit}</td>
                                                <td>{client.created_at}</td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Link
                                                            to={`/clients/update_client/${client.id}`}
                                                            className="btn btn-outline-success btn-sm mx-1"
                                                        >
                                                            Update
                                                        </Link>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={(e) =>
                                                                deleteClient(
                                                                    e,
                                                                    client.id
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="my-4">
                                <Paginate
                                    func={clients}
                                    links={links}
                                    meta={meta}
                                />
                            </div>
                        </div>
                    </>
                ) : loading ? (
                    <Spinner />
                ) : (
                    <p className="text-center h4 mt-5">
                        Your clients will appear here
                    </p>
                )}
            </div>
        </>
    );
};

export default Home;
