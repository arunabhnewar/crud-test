import React, { useState } from 'react';
import './AddUser.css';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getName = e => {
        setName(e.target.value);
    };
    const getEmail = e => {
        setEmail(e.target.value);
    };
    const getPassword = e => {
        setPassword(e.target.value);
    };

    const handleAddUser = () => {
        console.log({ name, email, password });
        const data = { name, email, password };

        fetch('http://localhost:5000/addUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };

    return (
        <div>
            <h3>Add User</h3>

            <div>
                <input onChange={getName} type="text" placeholder="Name" className="p-1 mt-1 w-25" />
                <br /> <br />
                <input onChange={getEmail} type="email" name="" id="" placeholder="Email" className="p-1 mt-1 w-25" />
                <br /> <br />
                <input onChange={getPassword} type="password" name="" id="" placeholder="Password" className="p-1 mt-1 w-25" />
                <br /> <br />
                <button onClick={handleAddUser} className="btn btn-success w-25">Add</button>
            </div>
        </div>
    );
};

export default AddUser;