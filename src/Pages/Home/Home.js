import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [user, setUser] = useState([]);
    const [deleteCount, setDeleteCount] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(result => setUser(result))
    }, [deleteCount]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteUser/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(result => setDeleteCount(result))
    };
    console.log(user);
    return (
        <div>
            <h1>Welcome to Food Master</h1>

            <div className="">
                <div className="row">
                    {
                        user?.map((pd) => (
                            <div className="col-md-4">
                                <div className="user border border p-2 m-2">
                                    <h1>{pd.name}</h1>
                                    <h6>{pd.email}</h6>
                                    <h6>{pd.password}</h6>
                                    <button onClick={() => handleDelete(pd._id)} className="btn btn-danger p-1 m-2">Delete</button>
                                    <Link to={`/update/${pd._id}`}>
                                        <button className="btn btn-success p-1 m-2">Update</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;