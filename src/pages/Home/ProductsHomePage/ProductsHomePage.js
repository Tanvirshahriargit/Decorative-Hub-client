import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsHomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://enigmatic-earth-85911.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <h1 className="text-primary mt-3">Products</h1>
            <hr className="w-25 text-primary border border-info mx-auto" />
            {/* <p>Products {products.length}</p> */}
            <Row xs={1} md={3} className="gx-0 gy-4">
                {products.map( (product , index) => index < 6 && (
                    <Col key={product._id} className="px-3">
                        <Card>
                            <Card.Img variant="top" src={ product.img} />
                            <Card.Body>
                                <Card.Title>{ product.name}</Card.Title>
                                <Card.Text>
                                    <small>By { (product.material).charAt(0).toUpperCase() + (product.material).slice(1)}</small>
                                </Card.Text>
                                <Card.Text className="text-primary">
                                    $ { (product.price)}
                                </Card.Text>
                                <Card.Text>
                                    { (product.des).slice(0, 150)}
                                </Card.Text>
                                <Card.Text>
                                    <Link to={`/purches/${product._id}`}><button className="btn btn-outline-info text-dark">Purches Now<i className="fas fa-cart-plus ms-1"></i></button></Link>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Link to="/exploreproducts"><button className="btn btn-primary mt-3"><i className="fas fa-expand me-2"></i>More Products</button></Link>

        </div>
    );
};

export default ProductsHomePage;