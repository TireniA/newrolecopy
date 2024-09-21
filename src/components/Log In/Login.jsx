import React, { useContext } from 'react'
import './Login.css'
import LNavbar from './LNavbar'
import logo from '../../assets/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa6'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const { status, setStatus } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/ob')
    }

    return (
        <div className='container-fluid login p-0 py-2'>
            <LNavbar />
            <div className="logincon d-flex align-items-center justify-content-center">
                <form className="loginform shadow rounded-5 d-flex align-items-center justify-content-center flex-column bg-white py-4">
                    <img src={logo} alt="" className="img-fluid" />
                    <h5 className='mt-3 mb-4'>{status === 'login' ? 'Log In to Nextrole' : 'Sign Up to Nextrole'}</h5>
                    {status === 'login' ?
                        <div>
                            <input type="text" placeholder='Type here' className='w-100 mt-2' />
                            <input type="text" placeholder='Type here' className='w-100' />
                        </div> :
                        <div className='w-100'>
                            <div className="loginin  ">
                                <label htmlFor="">Full Name</label>
                                <input type="text" placeholder='Type here' className='w-100' />
                            </div>
                            <div className="loginin">
                                <label htmlFor="">Email Address</label>
                                <input type="email" placeholder='Type here' className='w-100' />
                                {/* <p>hjkllkjh</p> */}
                            </div>
                            <div className="loginin mb-2">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='Type here' className='w-100' />
                            </div>
                        </div>}

                    <button onClick={handleLogin} className='shadow-sm' type="submit">Register</button>
                    {status === 'login' ?
                        <p className='mt-2'>Don't have an account? <a onClick={() => setStatus('signup')} href="#">Log In</a></p> :
                        <p className='mt-2'>Already have an account? <a href="#" onClick={() => setStatus('login')}>Log In</a></p>}
                    <div className="hh text-center p-0 w-100">
                        <small>Or</small>
                    </div>
                    <div className="d-flex align-items-center logwith mt-2">
                        <FcGoogle />
                        <p>Log In with Google</p>
                    </div>
                    <div className="d-flex align-items-center logwith mt-2">
                        <FaApple />
                        <p>Log In with Apple</p>
                    </div>
                    {/* <span className='lpriv mt-3'>By Creating an Account, it means you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a></span> */}
                </form>
            </div>
        </div>
    )
}

export default Login
