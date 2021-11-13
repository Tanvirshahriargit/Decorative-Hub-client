import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-earth-85911.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
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
                    fetch(`https://enigmatic-earth-85911.herokuapp.com/products/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                                const orderRemaining = products.filter(product => product._id != id)
                                setProducts(orderRemaining)
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
            <table className="table table-warning">
                <thead>
                    <tr>
                        <th scope="col">Products Id {products.length}</th>
                        <th scope="col">Name Products</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    products.map(product => <tbody key={product._id}>
                        <tr>
                            <th scope="row">{product._id}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => handleDeletedOrder(product._id)} className='btn btn-danger'><i className="fas fa-trash-alt me-1"></i></button> </td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageProducts;