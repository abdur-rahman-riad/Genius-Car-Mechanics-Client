import axios from 'axios';
import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post("https://polar-wildwood-91820.herokuapp.com/services", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Addedd Successfully");
                    reset();
                }
            })
    };

    return (
        <div className="add-service">
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Service Name" {...register("name")} />
                <textarea placeholder="Short Description" {...register("description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="Image Url" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;