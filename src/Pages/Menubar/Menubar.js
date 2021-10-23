import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <div className="mb-5 mt-3 ">
                <Link className="m-2 p-2" style={{ textDecoration: "none", color: "purple" }} to="/home">
                    Home
                </Link>
                <Link className="m-2 p-2 items" style={{ textDecoration: "none", color: "purple" }} to="/add">
                    Add User
                </Link>
                <Link className="m-2 p-2 items" style={{ textDecoration: "none", color: "purple" }} to="/delete">
                    Delete User
                </Link>
            </div>
        </div >
    );
};

export default Menubar;