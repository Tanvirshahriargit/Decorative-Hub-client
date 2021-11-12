import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, material, des, price, img } = product;
    return (
        <div>
            <Col className="px-3">
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    <small>By { (material).charAt(0).toUpperCase() + (product.material).slice(1)}</small>
                                </Card.Text>
                                <Card.Text className="text-primary">
                                    $ { (price)}
                                </Card.Text>
                                <Card.Text>
                                    { (des).slice(0, 150)}
                                </Card.Text>
                                <Card.Text>
                                    <Link to={`/purches/${product._id}`}><button className="btn btn-outline-info text-dark">Purches Now</button></Link>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>
        </div>
    );
};

export default Product;