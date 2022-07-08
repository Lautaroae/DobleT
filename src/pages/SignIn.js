import React, { useState } from 'react'
import NavBar from '../components/navBar/navBar'
import Signin from '../components/SignIn/SignIn'

const SignIn = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <NavBar toggle={toggle} />
            <Signin />
        </>
    )
}

export default SignIn