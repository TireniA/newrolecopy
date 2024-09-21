import React from 'react'
import SignOut from '../../components/SignOut'
import './Recommendation.css'
import { useNavigate } from 'react-router-dom'
import Salary from './Salary'

const Recommendation = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/salary')
    }
    return (
        <div className='container-fluid py-4'>
            <SignOut />
            <div className="container  mt-4 d-flex flex-column justify-content-center recomms onboard">
                <h5>Almost there! Let's Get you Started</h5>

                <div className="d-flex flex-column w-100 mt-5">
                    <h6>What Industry are you Interested In</h6>
                    <label htmlFor="">Feel free to pick more than one</label>
                    <select name="" id="" className='w-100'></select>
                </div>

                <div className="d-flex flex-column mt-3">
                    <h6>What Industry are you Interested In</h6>
                    <label htmlFor="">Feel free to pick more than one</label>
                    <select name="" id="" className='w-100'></select>
                </div>

                <div className="d-flex flex-column mt-3">
                    <h6>What Industry are you Interested In</h6>
                    <label htmlFor="">Feel free to pick more than one</label>
                    <select name="" id="" className='w-100'></select>
                </div>

                <div className="d-flex flex-column mt-3">
                    <h6>What Industry are you Interested In</h6>
                    <label htmlFor="">Feel free to pick more than one</label>
                    <select name="" id="" className='w-100'></select>
                </div>

                <div className="d-flex flex-column mt-3">
                    <h6>What Industry are you Interested In</h6>
                    <label htmlFor="">Feel free to pick more than one</label>
                    <select name="" id="" className='w-100'></select>
                </div>

                <div className="d-flex flex-column my-3">
                    <h6>What Industry are you Interested In</h6>
                    <label htmlFor="">Feel free to pick more than one</label>
                    <select name="" id="" className='w-100'></select>
                </div>
            </div>
            <div className="recomsb w-100">
                <hr />
                <button onClick={handleNavigate}>Proceed</button>
            </div>

        </div>
    )
}

export default Recommendation
