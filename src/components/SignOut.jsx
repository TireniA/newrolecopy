import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Styles.css'
import { FaSignOutAlt } from 'react-icons/fa'
import { CiLogout } from 'react-icons/ci'

const SignOut = () => {
    return (
        <div className='container'>
            <div className="d-flex align-items-center justify-content-between signout">
                <div className="d-flex align-items-center gap-2 justify-content-center img">
                    <img src={logo} alt="" className="img-fluid" />
                    <span>Nextrole</span>
                </div>
                <div className="out">
                    <h6>Sign Out</h6>
                    <span><CiLogout /></span>
                </div>
            </div>
        </div>
    )
}

export default SignOut
