import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout";
import Wrapper from "../components/wrapper";
import ClientForm from "../components/ClientForm";
import axiosClient from "../axios-client";
import Spinner from "../components/spinner";

const ClientUpdate = () => {
    const [client, setClient] = useState({
        name: "",
        middle_name: "",
        surname: "",
        number: "",
        email: "",
        website: "",
        price: "",
        deposit: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getClient();
    }, []);

    const getClient = async () => {
        setLoading(true);
        try {
            const res = await axiosClient.get(`/clients/${id}/show`);
            const data = await res.data;

            if (res.status == 200) {
                setClient(data.client);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    const updateClient = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axiosClient.put(`/clients/${id}/update`, {
                name: client.name,
                middle_name: client.middle_name,
                surname: client.surname,
                number: client.number,
                email: client.email,
                website: client.website,
                deposit: client.deposit,
                price: client.price,
            });

            const data = await res.data;

            if (res.status == 200) {
                setError("");
                setSuccess(data.message);
            } else {
                setSuccess("");
                setError(data.message);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    return (
        <>
            <h2>Update A Client</h2>

            <Link to="/clients" className="btn btn-dark btn-sm mt-3">
                Back
            </Link>

            {client ? (
                <ClientForm
                    state={client}
                    setState={(e) => setClient(e)}
                    error={error}
                    success={success}
                    submit={(e) => updateClient(e)}
                />
            ) : loading ? (
                <Spinner />
            ) : (
                <p className="h4 text-center my-3">Client not found</p>
            )}
        </>
    );
};

export default ClientUpdate;
