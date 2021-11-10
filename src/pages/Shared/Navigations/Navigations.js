import React from 'react';
import "./Navigations.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
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
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigations;