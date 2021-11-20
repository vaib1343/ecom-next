import React, { FC, useEffect } from 'react';
import Link from 'next/link'

const RegisterCard: FC = () => {
    useEffect(() => {

    }, [])
    return <>
        <div className="loginContainer">
            <div className="loginCard w-50">
                <div className="input-container">
                    <label htmlFor="name">
                        FullName
                    </label>
                    <input name="name" type="text" placeholder="john wick" id="name" />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" placeholder="xyz@gmail.com" id="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input name="password" type="password" placeholder="******" id="password" />
                </div>
                <div className="input-container">
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input name="confirmPassword" type="password" placeholder="******" id="confirmPassword" />
                </div>

                <div className="d-flex justify-content-center ">
                    <button className="bg-gradient primary m-3">Register</button>
                </div>
                <div className="d-flex justify-content-center"><Link href="/login"><a>Already have an account?</a></Link></div>
            </div>
        </div></>
}

export { RegisterCard }