import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const AddReviews = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log("added oroducts", data)

        fetch('https://enigmatic-earth-85911.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                // console.log(data);
                if (data.insertedId) {
                    alert("Your Reviews Successfully Added!")
                }
                reset()
            })
    };
    return (
        <div>
            <h2 className="text-primary my-2">Provide Your Valuable Review</h2>
            <hr className="w-25 text-primary border border-info mx-auto" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 p-2 w-25 mt-2 border border-primary rounded-3"
                defaultValue={user?.email}
                    placeholder="Input a Decorative Product Name" {...register("email")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-primary rounded-3" placeholder="Input Your Review Massage" {...register("massage")} />
                <br />
                <h4>Select Your Rating  <select className=' btn btn-outline-dark' {...register("rate")} placeholder="Input Your Rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="3">5</option>
                </select></h4>
                <br />
                <input className="btn btn-primary" value="Add Product" type="submit" />
            </form>

        </div>
    );
};

export default AddReviews;