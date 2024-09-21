import React, { useState } from 'react'
import SignOut from '../SignOut'
import '../Onboarding/Onboarding.css'
import { FaCheck } from 'react-icons/fa6'
import Progress from './Progress'
import OnboardingC from './OnboardingC'
import OnboardingLast from './OnboardingLast'

const Onboarding = () => {
    const [step, setStep] = useState(1)
    const [completed, setCompleted] = useState(false)
    const totalSteps = 4

    const handleNext = () => {
        if (step < 4) {
            setStep(prevStep => prevStep + 1)
        }
        else if (step === totalSteps){
            setCompleted(true)
        }
    }
    return (
        completed ? <OnboardingLast/> : 
        <div className='container-fluid py-4'>
            <SignOut />
            <div className="container mt-4 d-flex align-items-center justify-content-center onboard">
                <div className="onboard-main  px-sm-5 text-center">
                    <h5>Nextrole is Amazing!</h5>
                    <p>Our Services Include...</p>
                    <div className="progres">
                        <Progress totalSteps={totalSteps} step={step} />
                        <div className={step >= 1 ? 'procircle active' : 'procircle'}><FaCheck size={14} color='white' /></div>
                        <div className={step >= 2 ? 'procircle active' : 'procircle'}><FaCheck size={14} color='white' /></div>
                        <div className={step >= 3 ? 'procircle active' : 'procircle'}><FaCheck size={14} color='white' /></div>
                        <div className={step >= 4 ? 'procircle active' : 'procircle'}><FaCheck size={14} color='white' /></div>
                    </div>

                    <OnboardingC step={step} />

                    <button className="button rounded" onClick={handleNext}>Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default Onboarding
