import React, { useState } from 'react'
import SignOut from '../SignOut'
import '../Onboarding/Onboarding.css'
import resume from '../../assets/resume.png'
import job from '../../assets/job.png'
import { useNavigate } from 'react-router-dom'


const OnboardingLast = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/resumebuilder')
    }

    return (
        <div className='container-fluid omg py-4'>
            {/* <Background/> */}
            {/* <div className="olbg"></div> */}
            <SignOut />
            <div className="container mt-4 d-flex align-items-center justify-content-center onboard">
                <div className=" px-sm-5 text-center onboard-lmain">
                    <h5>Almost there! Let's Get you Started.</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eius magni. Nihil earum ex perferendis ea magni molestiae autem voluptates.</p>
                    <div className="olgrid my-2">
                        <div className="olbox  rounded-3">
                            <img src={resume} alt="" />
                            <h5>Resume Builder</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse consequatur soluta delectus saepe voluptatibus vitae.</p>
                        </div>
                        <div className="olbox  rounded-3">
                            <img src={job} alt="" />
                            <h5>Job Matching</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quidem.</p>
                        </div>
                    </div>
                    <button className="button rounded  mt-4" onClick={handleNavigate} >Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default OnboardingLast
