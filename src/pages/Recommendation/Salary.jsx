import React, { useState } from 'react'
import SignOut from '../../components/SignOut'
import './Recommendation.css'
import { useNavigate } from 'react-router-dom'


const Salary = () => {
    const [salary, setSalary] = useState(0)
    const handleSlider = (e) => {
        setSalary(e.target.value)
    }
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/db')
    }
    return (
        <div className='container-fluid py-4'>
            <SignOut />
            <div className="container mt-4 d-flex flex-column onboard justify-content-center align-items-center slry">
                <h5>What is your minimum expected salary</h5>
                <div className="rrange mt-4">
                    <h6>My minimum expectation is ${salary}</h6>
                </div>
                <input type="range" min={100} max={100000} value={salary} id=""  onChange={(e) =>handleSlider(e)} className='slider my-5 w-50'/>
                <div className="recomsb w-100">
                <button onClick={handleNavigate}>Proceed</button>
            </div>
            </div>
        </div>
    )
}

export default Salary
