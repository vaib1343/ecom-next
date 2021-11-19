import React, { FC } from 'react'
import styles from '../../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt, faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Link from 'next/link'
const Navbar: FC = () => {
    return <>
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}><span>logo</span></div>
            <div className="navbar-option">
                <ul className={styles.NavbarList}>
                    <li><Link href="/"><a><span><FontAwesomeIcon icon={faHome} /></span>Home</a></Link></li>
                    <li><Link href="/login"><a><span><FontAwesomeIcon icon={faSignInAlt} /></span>Login</a></Link></li>
                    <li><Link href="/register"><a><span><FontAwesomeIcon icon={faUserPlus} /></span>Register</a></Link></li>
                </ul>
            </div>
        </div>
    </>
};

export { Navbar }