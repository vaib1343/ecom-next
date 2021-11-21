import React, { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Button from '../common/Button';
import { useForm } from 'react-hook-form';

type formData = {
    email: String;
    password: String;
}

const LoginCard: FC = () => {
    const { handleSubmit, watch, formState: { errors }, register } = useForm<formData>();

    const onSubmit = (data) => {
        console.log("data 800", data)
    }
    return <>
        <div className="loginContainer">
            <div className="loginCard">
                <div className="loginLogo">
                    {/* <Image src="/public/images/" alt="logo" /> */}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="xyz@gmail.com" id="email" {...register("email", { required: true })} />
                        {errors.email && <span className="error-text">This field is required</span>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" placeholder="******" id="password" {...register("password", { required: true })} />
                        {errors.password && <span className="error-text">This field is required</span>}
                    </div>
                    <div className="d-flex justify-content-center ">
                        {/* <Button primary={true} text="Login" customClass="m-3" /> */}
                        <button className={`bg-gradient primary m-4`} type="submit">Login</button>
                    </div>
                    <div className="d-flex justify-content-center"><Link href="/register"><a>Dont have account?</a></Link></div>
                </form>
            </div>
        </div>
    </>
}

export { LoginCard }