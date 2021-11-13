import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Product from './Product/Product';

const ExploreProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-earth-85911.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
            setProducts(data)
        })
    },[])
    return (
        <div>
            {/* <h2>Explore Products {products.length}</h2> */}
            {products.length ===0 ?<Spinner animation="border" variant="info" /> :
                <Row xs={1} md={3} className="gx-0 gy-4 mt-1">
                {
                    products.map(product => <Product
                        key={product._id}
                        product ={product} 
                    ></Product>)
                }
            </Row>}
        </div>
    );
};

export default ExploreProducts;