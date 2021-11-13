import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");

    useEffect(() => {
        const url = "https://enigmatic-earth-85911.herokuapp.com/orders"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                // console.log(data);
            })
    }, [])

     // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
    };
    
    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://enigmatic-earth-85911.herokuapp.com/orders/${orderId}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      };
    return (
        <div>
            <table className="table table-info">
                <thead>
                    <tr>
                        <th scope="col">Products Id {orders.length}</th>
                        <th scope="col">Name Products</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <tbody key={order._id}>
                        <tr>
                            <th scope="row">{order._id}</th>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                            <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(order?._id)}
                                        {...register("status")}
                                    >
                                        <option value={order?.status}>{order?.status}</option>
                                        <option value="approve">approve</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <input className="btn btn-primary m-2" type="submit" />
                                </form>
                            </td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageAllOrders;