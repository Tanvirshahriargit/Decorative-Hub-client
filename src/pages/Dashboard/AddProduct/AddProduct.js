import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        // console.log("added oroducts", data)

        fetch('https://enigmatic-earth-85911.herokuapp.com/products', {
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
                alert("Your product Added SuccessFully")
                }
                reset()
        })
    };
    return (
        <div>
            <h2 className="text-primary my-2">Add A Product Here</h2>
            <hr className="w-25 text-primary border border-info mx-auto" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 p-2 w-25 mt-2 border border-primary rounded-3" placeholder="Input a Decorative Product Name" {...register("name")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-primary rounded-3" placeholder="Input Product Material  Name" {...register("material")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-primary rounded-3" placeholder="Input Product Description" {...register("des")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-primary rounded-3" placeholder="Input Product Price" type="number"  {...register("price")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-primary rounded-3" placeholder="Input Product Image Url" {...register("img")} />
                <br />
                <input className="btn btn-primary" value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;