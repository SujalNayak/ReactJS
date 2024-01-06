import React from 'react'
import { useForm } from "react-hook-form";
export const UserReg = () => {

    const { register, handleSubmit } = useForm();
    const submitHandler = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h1>--------------------Form------------------</h1><br /><br />
            <form onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor='name'>Name : </label>
                <input type='name' {...register("name")} /> <br /><br />
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" {...register("email")} /> <br /><br />
                <label htmlFor='gender'>Gender : </label> <br />
                <input type="radio" value="male" name='gender' {...register("gender")} /> Male <br />
                <input type="radio" value="female" name='gender' {...register("gender")} /> Female <br /><br />
                <input type="submit" />
            </form>
        </div>
    )
}
