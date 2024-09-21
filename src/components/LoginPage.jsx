import React from 'react'
import '../styles/Styles.css'
import logo from '../assets/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

const LoginPage = () => {
    return (
        <div className='login min-vh-100 justify-content-center align-items-center d-flex container-fluid'>
            <div className="bg-white  form px-5 py-3 shadow-sm rounded-5">
                <img src={logo} alt="" />
                <h3 className='my-3'>Log In to Nextrole</h3>

                <form action="" className='w-100'>
                    <div className="">
                        <label htmlFor="" className=" mb-1 form-label">Email Address</label>
                        <input type="email" name="" id="" className="form-control" placeholder='Type here' />
                    </div>

                    <div className="mt-1">
                        <label htmlFor="" className="mb-1 form-label">Password</label>
                        <input type="password" name="" id="" className="form-control" placeholder='Type here' />
                    </div>

                    <button className="btn reg w-100 btn-dark mt-3">Register</button>
                </form>

                <div className="w-100 bottom text-center mt-3">
                    <p className='dont'>Don't have an account? <a href="">Log In</a></p>
                    <p className='or  '>Or</p>

                    <div className="d-flex flex-column gap-2 social">
                        <button className='btn'><FcGoogle /> Log In with Google</button>
                        <button className='btn '><FaApple /> Log In with Apple</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginPage
