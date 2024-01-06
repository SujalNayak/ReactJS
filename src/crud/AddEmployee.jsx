import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddEmployee = () => {
    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate()

    const submitHandler = async(data) => {
        const empobj = {
        name: data.name,
        email: data.email,
        age: data.age,
        isActive: data.isActive === "true" ? true : false
        }
        console.log(empobj);
        const res = await axios.post("https://node5.onrender.com/user/user",empobj);
        reset();
        navigate("/EmployeeList");
        toast.success("Employee Added Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return(
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                    <label htmlFor="name">NAME</label>
                    <input type="text" name="name" id="name" {...register("name")} />
                </div>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" id="email" {...register("email")} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" {...register("age")} />
                </div>
                <div>
                    <label htmlFor="isActive">STATUS</label>
                    ACtive : <input type="radio" name="isActive" id="isActive" value="true" {...register("isActive")} /><br></br>
                    Inactive : <input type="radio" name="isActive" id="isActive" value="false" {...register("isActive")} />
                </div>
                <div>
                    <input type="submit" value="ADD EMPLOYEE" />
                </div>
            </form>
        </div>
    )
}
