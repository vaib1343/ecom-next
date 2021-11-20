import React, { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Button from '../common/Button';
const LoginCard: FC = () => {
    return <>
        <div className="loginContainer">
            <div className="loginCard">
                <div className="loginLogo">
                    {/* <Image src="/public/images/" alt="logo" /> */}
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="xyz@gmail.com" id="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input name="password" type="password" placeholder="******" id="password" />
                </div>
                <div className="d-flex justify-content-center ">
                    <Button primary={true} text="Login" customClass="m-3" />
                </div>
                <div className="d-flex justify-content-center"><Link href="/register"><a>Dont have account?</a></Link></div>
            </div>
        </div>
    </>
}

export { LoginCard }