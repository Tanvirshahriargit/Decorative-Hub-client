import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { user, handleLogin, googleSignIn, loading, error } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log("added login user", data)
        handleLogin(data.email, data.password)
        reset()
    };
    return (
        <Row xs={1} md={2} className="gx-0 gy-2">
            <Col>
                <img className="img-fluid mt-5 ms-5" src="https://i.ibb.co/R4Fk0sj/logo-01.png" alt="" />
                {
                    user?.email ? <h4 className="text-success ms-5 mb-2">Good job! Login Successfully</h4> :
                    <h4 className="mb-2 text-primary ms-5">Login Your Account</h4>
                }
                {!loading && <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Email  <input className="ms-4 mb-1 p-2 w-50 mt-4 border border-primary rounded-3"
                        placeholder="Input Your Email Address"
                        name="email"
                        type="email"
                        {...register("email", { required: true })} /></p>
                    <p>Password <input className="ms-1 p-2 w-50 border border-primary rounded-3"
                        name="password"
                        type="password"
                        placeholder="Type Your Password"
                        {...register("password", { required: true })} /></p>
                    <input className="btn btn-primary ms-4" value="login" type="submit" />
                </form>}
                {
                    loading && <Spinner animation="border" variant="info" />
                }
                {
                    error && <h5 className="text-danger mt-4">{error} </h5>
                }
                <h4 className="ms-5 mt-3">------------- or ---------------</h4>
                <button onClick={googleSignIn} className="my-2 ms-4 btn btn-primary">Log In with Google</button>
                <p>Don't Have an Account Please! <Link to="/register">Register</Link></p>
            </Col>
            <Col>
                <img className="img-fluid mt-5" src="https://i.ibb.co/5FsYGmv/login-2-01.png" alt="" />
            </Col>
        </Row>
    );
};

export default Login;