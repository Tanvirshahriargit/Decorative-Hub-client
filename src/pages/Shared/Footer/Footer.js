import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark mt-4">
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* logo and about sections */}
                        <img className="mt-2 img-fluid" src="https://i.ibb.co/R4Fk0sj/logo-01.png" alt="" />
                        <p className='text-light mt-3'>An Nich website, by definition, is a website that allows you to buy and sell tangible goods, digital products or services online. Trade.</p>

                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* footer Pages sections */}
                        <h4 className="text-light mt-2">Pages</h4>
                        <p><NavLink className="link text-light" to="/home">Home</NavLink></p>
                        <p><NavLink className="link text-light" to="/exploreproducts">exploreproducts</NavLink></p>
                        <p><NavLink className="link text-light" to="/aboutus">About Us</NavLink></p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* footer location section*/}
                        <div>
                            <h4 className="text-light text-start mt-2">Location</h4>
                            <div className="d-flex mt-2">
                                <div><p><i className="fa fa-location-arrow text-light"></i></p></div>
                                <div className="ms-3 text-light">
                                    <h6>
                                        Bristone, New York
                                        <br />
                                        bronex 15423,USA </h6>
                                </div>
                            </div>
                            <div className="d-flex mt-2">
                                <div><p><i className="fas fa-phone-alt text-light"></i></p></div>
                                <div className="ms-3 text-light">
                                    <h6> +111222444 </h6>
                                </div>
                            </div>
                            <div className="d-flex mt-2">
                                <div><p><i className="fa fa-envelope text-light" aria-hidden="true"></i></p></div>
                                <div className="ms-3 text-light">
                                    <h6> contact@decorativehub.com </h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="text-primary" />
                {/* footer button */}
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        {/* footer copywrites section */}
                        <p variant="white" className="pt-4 text-light">© 2021 decorativehub. All Rights Reserved.</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* Icons sections */}
                        <p className='text-dark fs-4 m-3'><i className="fab fa-instagram text-light"></i><i className="fab fa-facebook ms-2 text-light"></i><i className="fab fa-youtube ms-2 text-light"></i><i className="fab fa-linkedin ms-2 text-light"></i></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;