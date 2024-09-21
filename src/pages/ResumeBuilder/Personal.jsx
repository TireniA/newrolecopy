import React from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import './ResumeBuilder.css'
import { MdInfo } from 'react-icons/md'


const Personal = () => {
    return (
        <div className=' frmf'>
            
            <form action="">
                <h6>Personal Information</h6>

                <div className="frminpu">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Type here' name="" id="" className="" />
                </div>

                <div className="frminpu my-2">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Type here' name="" id="" className="" />
                </div>
                
                <h6>Resume Upload</h6>
                <div className="d-flex gap-3 frmupld rounded p-2">
                    <div className="icon"><MdInfo size={15}/></div>
                    <div className="">
                        <h6>Skip most of the steps</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="rbupload mt-3">
                    <div className="icon"><FiUploadCloud size={30}/></div>
                    <div className="up">
                        <h6>Upload CV or Resume</h6>
                        <p>JPG, PNG or PDF, file size no more than 10MB</p>
                    </div>
                    <div className="">
                        <input type="file" name="" id="file" />
                        <label htmlFor="file">SELECT FILE</label>
                    </div>

                </div>
                
            </form>
        </div>
    )
}

export default Personal
