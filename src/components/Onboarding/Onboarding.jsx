import React, { useState } from 'react'
import SignOut from '../SignOut'
import '../Onboarding/Onboarding.css'
import { FaCheck } from 'react-icons/fa6'
import Progress from './Progress'
import OnboardingC from './OnboardingC'
import OnboardingLast from './OnboardingLast'
import smart from '../../assets/smart.png'
import auto from '../../assets/auto.png'
import skill from '../../assets/skill.png'
import interview from '../../assets/interview.png'
import { useNavigate } from 'react-router-dom'

const Onboarding = () => {
    const [step, setStep] = useState(1)
    const [completed, setCompleted] = useState(false)
    const totalSteps = 4

    const navigate = useNavigate()


    // const handleNext = () => {
    //     if (step < 4) {
    //         setStep(prevStep => prevStep + 1)
    //     }
    //     else if (step === totalSteps){
    //         setCompleted(true)
    //     }
    // }

    const handleNext = () => {
        navigate('/obl')
    }

    const data = [
        {
            pic: smart,
            header: 'Smart Resume Optimizer'           
        },
        {
            pic: auto,
            header: 'Auto Apply'           
        },
        {
            pic: skill,
            header: 'Skill Assessment'           
        },
        {
            pic: interview,
            header: 'Interview Prep'           
        }
    ]
    return (
        // completed ? <OnboardingLast/> : 
        <div className='container-fluid py-4'>
            <SignOut />
            <div className="container mt-4 d-flex align-items-center justify-content-center onboard">
                <div className="onboard-main  px-sm-5 text-center">
                    <h5>Nextrole is Amazing!</h5>
                    <p>Our Services Include...</p>
                    <div className="onboardimggrid w-100 my-3">
                        {data.map((item, index) => (
                            <div className='onboardimgdis'>
                                <img src={item.pic} alt="" className="img-fluid" />
                                <h5 className='mb-0'>{item.header}</h5>
                            </div>
                        ))}
                    </div>
                    <button className="button rounded mt-3" onClick={handleNext}>Proceed</button> 

                    {/* <div className="progres">
                        <Progress totalSteps={totalSteps} step={step} />
                        <div className={step >= 1 ? 'procircle active' : 'procircle'}><FaCheck size={14} color='white' /></div>
                        <div className={step >= 2 ? 'procircle active' : 'procircle'}><FaCheck size={14} color='white' /></div>
                        <div className={step >= 3 ? 'procircle active' : 'procircle'}><FaCheck size={14} color='white' /></div>
                        <div className={step >= 4 ? 'procircle active' : 'procircle'}><FaCheck size={14} color='white' /></div>
                    </div>

                    <OnboardingC step={step} />

                    <button className="button rounded" onClick={handleNext}>Proceed</button> */}
                </div>
            </div>
        </div>
    )
}

export default Onboarding
