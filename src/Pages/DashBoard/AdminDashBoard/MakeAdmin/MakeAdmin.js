import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [successful, setSuccessFul] = useState(false)
    const emailField = e => {
        setEmail(e.target.value);
    }
    const handelAdmin = e => {
        const user = { email }
        fetch("http://localhost:5000/users/admin", {
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
            <form onSubmit={handelAdmin}>
                <input onBlur={emailField} type="email" placeholder="type an email" /> <br />
                <Button type="submit">Make Admin</Button>
            </form>
        </div >
    );
};

export default MakeAdmin;