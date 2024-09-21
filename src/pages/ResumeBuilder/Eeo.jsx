import React from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import './ResumeBuilder.css'
import { MdInfo } from 'react-icons/md'


const Eeo = () => {
    return (
        <div className=' frmf'>

            <form className='eeo'>
                <div className="frminpu">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Type here' name="" id="" className="" />
                </div>

                <div className="excheck d-flex gap-2 mt-3">
                    <input type="checkbox" name="" id='' />
                    <label htmlFor=''>I refuse to state</label>
                </div>

                <div className="eeoflex mt-3 d-flex align-items-center justify-content-between">
                    <div className="eeoq">Do you have a disability?</div>
                    <div className="d-flex">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1"  />
                            <label className="form-check-label"  htmlFor="radio1">Yes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                            <label className="form-check-label" htmlFor="radio2">No</label>
                        </div>
                    </div>
                </div>

                <div className="eeoflex mt-3 d-flex align-items-center justify-content-between">
                    <div className="eeoq">Are you a Veteran?</div>
                    <div className="d-flex">
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1"  />
                            <label className="form-check-label"  htmlFor="radio1">Yes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                            <label className="form-check-label" htmlFor="radio2">No</label>
                        </div>
                    </div>
                </div>

                <div className="eeoflex mt-3 row">
                    <div className="eeoq col-sm-6">What is your gender?</div>
                    <div className="col-sm-6 d-flex ">
                        <div className="form-check mt-2 mt-sm-0">
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1"  />
                            <label className="form-check-label"  htmlFor="radio1">Male</label>
                        </div>
                        <div className="form-check mt-2 mt-sm-0">
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2" />
                            <label className="form-check-label" htmlFor="radio2">Female</label>
                        </div>
                        <div className="form-check mt-2 mt-sm-0">
                            <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option2" />
                            <label className="form-check-label" htmlFor="radio3">Prefer not to say</label>
                        </div>
                    </div>
                </div>



            </form>
        </div>
    )
}

export default Eeo
