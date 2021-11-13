import React from 'react';
import "./Navigations.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigations = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img className="img-fluid" width="50px" src="https://i.ibb.co/R4Fk0sj/logo-01.png" alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="link p-2" to="/home">Home</NavLink>
                            <NavLink className="link p-2" to="/exploreproducts">Exploreproducts</NavLink>
                            <NavLink className="link p-2" to="/aboutus">About Us</NavLink>
                        </Nav>
                        <Nav>
                            {
                                !user?.email && <NavLink className="link p-2" to="/register">Register</NavLink>
                            }
                            {
                                user?.email && <NavLink className="link p-2" to="/dashboard">Dashboard</NavLink>
                            }

                            {
                                user?.email ? <button onClick={logOut} className="btn btn-light">Logout</button> :
                                    <NavLink className="link p-2" to="/login">Login</NavLink>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigations;