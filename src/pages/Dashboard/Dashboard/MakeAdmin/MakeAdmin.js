import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://https://enigmatic-earth-85911.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
            if (data.modifiedCount) {
                swal("Wow", "Your Successfully Added A Admin!", "success");
                }
                reset()
        })
  };
    return (
        <div>
            <h2 className="text-primary mt-3">Make Admin</h2>
            <hr className="w-25 text-primary border border-info mx-auto" />
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className="ms-4 mb-1 p-2 w-50 border border-primary rounded-3"
                        placeholder="Input New Admin Email"
                        name="email"
                        type="email"
                        {...register("email", { required: true })} />
                <br />
                <input className="btn btn-primary mt-2" value="Make Admin" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;