import React, { FC, useEffect } from 'react';
import Link from 'next/link'
import { useForm } from 'react-hook-form';

interface formData {
    name: String,
    email: String,
    password: String,
    confirmPassword: String
}

const RegisterCard: FC = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm<formData>()
    const onSubmit = (data) => {
        console.log("data", data)
    }
    useEffect(() => {

    }, [])
    return <>
        <div className="loginContainer">
            <div className="loginCard w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <label htmlFor="name">
                            FullName
                        </label>
                        <input type="text" placeholder="john wick" id="name" {...register('name', { required: true })} />
                        {errors.name && <span className="error-text">This is a required field</span>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="xyz@gmail.com" id="email"  {...register('email', { required: true })} />
                        {errors.email && <span className="error-text">This is a required field</span>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" placeholder="******" id="password" {...register("password", { required: true })} />
                        {errors.password && <span className="error-text">This is a required field</span>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input type="password" placeholder="******" id="confirmPassword" {...register('confirmPassword', { required: true })} />
                        {errors.confirmPassword && <span className="error-text">This is a required field</span>}
                    </div>

                    <div className="d-flex justify-content-center ">
                        <button className="bg-gradient primary m-3" type='submit'>Register</button>
                    </div>
                    <div className="d-flex justify-content-center"><Link href="/login"><a>Already have an account?</a></Link></div>
                </form>
            </div>
        </div></>
}

export { RegisterCard }