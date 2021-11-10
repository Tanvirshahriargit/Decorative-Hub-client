import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src="https://i.ibb.co/2dBh2Hj/not-found-01.png" alt="" />
            <br />
            <Link to="/home"><Button className="btn btn-primary">Back to Home</Button></Link>
        </div>
    );
};

export default NotFound;