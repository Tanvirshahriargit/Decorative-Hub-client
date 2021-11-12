import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';

const Purches = () => {
    const { id } = useParams();
    const {user} = useAuth()
    const [product, setProduct] = useState([])
    const { register, handleSubmit, reset } = useForm();

    // Single Products Load from server
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    const onSubmit = (data) => {
        console.log(product.name);
        console.log(user);
        data.email = user?.email;
        data.text = user?.displayName;
        data.status = "pending";
        console.log("added login user", data)
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data);
            if (data.insertedId) {
                swal("Good job!", "Your Order Placed Successfully", "success");
                }
                reset()
        })
        reset()
    };
    return (
        <Row xs={1} md={2} className="gx-0 gy-2">
            <Col className="mt-4">
                <div className="card mb-3">
                <div className="card-body">
                            <img src={product.img} className="img-fluid rounded-start" alt="..." />
                                <h5 className="card-title mt-2"><i className="fas fa-user-circle me-2"></i>Name: {product.name}</h5>
                                <p><small>By {(product.material)}</small></p>
                                <p> <i className="fas fa-dollar-sign text-primary me-1"></i>{product.price}</p>
                                <p className="card-text">{product.des}</p>
                            </div>
                </div>
            </Col>
            <Col>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="ms-4 mb-1 p-2  mt-4 w-50  border border-primary rounded-3"     
                        placeholder="Input Your name"
                        value={user?.displayName}
                        {...register("text")} />
                    <br/>
                <input className="ms-4 mt-4  p-2 w-50 border border-primary rounded-3"
                        placeholder="Input Your Email Address"
                        value={user?.email}
                        {...register("email")} />
                    <br/>
                    <input className="ms-4 mt-4 p-2 w-50 border border-primary rounded-3"
                        placeholder="Input Your Product Name"
                        value={product?.name}
                        {...register("name")} />
                    <br/>
                    <input className="ms-4 mt-4 p-2 w-50 border border-primary rounded-3"
                        placeholder="Input Your Product Price"
                        value={product?.price}
                        {...register("price")} />
                    <br />
                    <input className="ms-4 mt-4 p-2 w-50 border border-primary rounded-3"
                        // defaultValue={product?.img}
                    value={product?.img}
                        {...register("img")} />
                    <br/>
                    <input className="ms-4 mt-4 p-2 w-50 border border-primary rounded-3"
                        placeholder="Input Your Phone Number "
                        name="number"
                        type="number"
                        {...register("number", { required: true })} />
                    <br/>
                    <input className="ms-4 mt-4 p-2 w-50 border border-primary rounded-3"
                        placeholder="Input Your Shipping Address"
                        name="address"
                        type="address"
                        {...register("address", { required: true })} />
                    <br/>                 
                    <input className="btn btn-primary mt-4 ms-4" value="Order Now" type="submit" />
                </form>
            </Col>
        </Row>
    );
};

export default Purches;