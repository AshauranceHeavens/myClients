import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ links, meta, func }) => {
    return (
        <div>
            {links && (
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <span>{meta.from} </span>
                        <span>To {meta.to} </span>
                        <span>Of {meta.total} Results </span>
                        <span className="mx-2"> {meta.per_page} per page</span>
                    </div>

                    <div>
                        <Link
                            className="mx-2 text-dark "
                            onClick={(e) => func(meta.path, e)}
                        >
                            First
                        </Link>
                        <Link
                            disabled={links.prev == null ? "True" : "false"}
                            className={`${
                                links.prev == null ? "text-muted" : null
                            } mx-2 text-dark`}
                            onClick={(e) => func(links.prev, e)}
                        >
                            <i className="bi-arrow-left"></i>
                        </Link>
                        <Link
                            className="mx-2 text-dark "
                            onClick={(e) =>
                                func(
                                    meta.path + "?page=" + meta.current_page,
                                    e
                                )
                            }
                        >
                            {meta.current_page}
                        </Link>
                        <Link
                            disabled={links.next == null ? "True" : "false"}
                            className={`${
                                links.next == null ? "text-muted" : null
                            } mx-2 text-dark`}
                            onClick={(e) => func(links.next, e)}
                        >
                            <i className="bi-arrow-right"></i>
                        </Link>
                        <Link
                            className="mx-2 text-dark "
                            onClick={(e) => func(links.last, e)}
                        >
                            Last
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Paginate;
