import React, { useState } from 'react'
import './ResumeBuilder.css'
import SignOut from '../../components/SignOut'
import { LuUser } from 'react-icons/lu'
import { BiSolidSchool } from 'react-icons/bi'
import { TiBusinessCard } from 'react-icons/ti'
import { IoLinkOutline } from 'react-icons/io5'
import { PiReadCvLogo } from 'react-icons/pi'
import RbProgress from './RbProgress'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'
import Eeo from './Eeo'
import Links from './Links'
import { useNavigate } from 'react-router-dom'

const ResumeBuilder = () => {
    const [step, setStep] = useState(1)
    const [completed, setCompleted] = useState(false)
    const totalSteps = 5
    const navigate = useNavigate()

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(prevStep => prevStep + 1)
        }
        else if (step === totalSteps){
            setCompleted(true)
        }
    }

    const handleNavigate = () => {
        navigate('/recommendation')
    }
    const renderStepContent = () => {
        switch (step) {
            case 1:
                return { component: <Personal />, title: "Let's Build your Profile"};
            case 2:
                return { component: <Education />, title: "Add your Education History" };
            case 3:
                return { component: <Experience />, title: "Add your Work Experience" };
            case 4:
                return { component: <Eeo />, title: "Add your Equal Employment Information" };
            case 5:
                return { component: <Links />, title: "Add your Personal Links" };
            default:
                return { component: null, title: "", description: "" };
        }
    };

    const { component, title } = renderStepContent();
    return (
        <div className='container-fluid py-4 rsbb'>
            <SignOut />
            <div className="container ">
                <div className="frmfh mt-4">
                    <h5 className='my-0'>{title}</h5>
                    <p className='my-0'>Stand out to Recruiters.</p>
                </div>
                <div className="row mt-sm-0 mt-2 d-flex  justify-content-center rb ">
                    <div className="col-3 ">
                        <div className="rprogress">
                            <RbProgress step={step} totalSteps={totalSteps} />
                            <div className={step >= 1 ? 'rcircle ractive' : 'rcircle'} data-title='Personal'><LuUser /></div>
                            <div className={step >= 2 ? 'rcircle ractive' : 'rcircle'} data-title='Education'><BiSolidSchool /></div>
                            <div className={step >= 3 ? 'rcircle ractive' : 'rcircle'} data-title='Experience'><PiReadCvLogo /></div>
                            <div className={step >= 4 ? 'rcircle ractive' : 'rcircle'} data-title='EE0'><TiBusinessCard /></div>
                            <div className={step >= 5 ? 'rcircle ractive' : 'rcircle'} data-title='Links'><IoLinkOutline /></div>
                        </div>
                    </div>
                    <div className="col-9 pt-4  rbformcon">
                        {component}
                    </div>
                </div>
                <div className="text-center mt-4 mt-md-0">
                    <button className='rbbtn rounded' onClick={completed ?  handleNavigate : handleNext}>Next</button>
                </div>

            </div>
        </div>
    )
}

export default ResumeBuilder
