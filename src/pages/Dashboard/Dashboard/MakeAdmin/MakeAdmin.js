import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleAdmin = e => {
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="text-primary mt-3">Make Admin</h2>
            <hr className="w-25 text-primary border border-info mx-auto" />
            <form onsubmit={handleAdmin}>
            <input className="mb-3 p-2 w-25 border border-primary rounded-3" placeholder="Input Email You Have to Make Admin" />
                <br />
                <input className="btn btn-primary" value="Make Admin" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;