import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const emailField = e => {
        setEmail(e.target.value);
    }
    const handelAdmin = e => {
        const user = { email }
        fetch("https://secret-reaches-41807.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an new admin by email</h2>
            <div className="mt-5">
                <form onSubmit={handelAdmin}>
                    <input
                        onBlur={emailField}
                        type="email"
                        maxLength="50"
                        className="w-25 py-2 text-center"
                        placeholder="Type an Email" /> <br />
                    <Button className="mt-5 btn btn-outline-warning" type="submit">Make Admin</Button>
                </form>
            </div>
        </div >
    );
};

export default MakeAdmin;