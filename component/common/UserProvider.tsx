import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const UserProvider: FC = ({ children }) => {
    const dispatch = useDispatch()
    // const user = useSelector()
    useEffect(() => {
        
    }, [])
    return <>
        {children}
    </>
}