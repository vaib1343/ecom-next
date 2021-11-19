import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const HomeIcon = () => {
    return <>
        <div className="d-flex" style={{ justifyContent: "start" }}>
            <Link href="/">
                <a>
                    <FontAwesomeIcon icon={faHome} size="lg" color="" />
                </a>
            </Link>
        </div>
    </>
};

export { HomeIcon }