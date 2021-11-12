import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const Myorders = () => {
    const { user } = useAuth()
    const [ orders, setOrders ] = useState([]);
    
    useEffect(() => {
        const  url = `http://localhost:5000/orders?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data);
        })
    }, [user?.email])
    
    const handleDeletedOrder = (id) => {
        const deletedProcess = swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
            .then((deletedProcess) => {
                if (deletedProcess) {
                    fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                              });
                            const orderRemaining = orders.filter(order => order._id != id)
                            setOrders(orderRemaining)
                        }
                        else {
                            swal("Your imaginary file is safe!");
                        }
                })
                }
        })
    }
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div className="row gx-0 gy-4 p-4">
            {
                    orders.map(order => <div key={order._id} className="col-12 col-md-6 pe-4">
                    <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={order.img} className="img-fluid rounded-start m-3" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title"><i className="fas fa-user-circle me-2"></i>Name: {order.name}</h5>
                                        <p><i className="fas fa-map-marked-alt text-success me-2"></i>{order.location}</p>
                                        <p> <i className="fas fa-dollar-sign text-primary me-1"></i>{ order.price}</p>
                                        <p className="card-text"><i className="fas fa-mobile me-2"></i>{order.phoneNumber}</p>
                                        <button className='btn btn-primary me-4'><i className="fas fa-trash-alt me-2"></i>{order.status}</button>
                                        
                                        <button onClick={()=> handleDeletedOrder(order._id)} className='btn btn-danger'><i className="fas fa-trash-alt me-2"></i>Detete Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>)
           }
            </div>
            
        </div>
    );
};

export default Myorders;