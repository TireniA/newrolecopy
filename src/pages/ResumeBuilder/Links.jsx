import React from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import './ResumeBuilder.css'
import { MdInfo } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaTv } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'


const Links = () => {
    return (
        <div className=' frmf'>
            
            <form action="">

                <div className="frminpu link">
                    <label htmlFor=""><FaLinkedin color='blue'/> Linkedin</label>
                    <input type="text" placeholder='Type here' name="" id="" className="" />
                </div>
                <div className="frminpu link mt-3">
                    <label htmlFor=""><FaGithub /> Github</label>
                    <input type="text" placeholder='Type here' name="" id="" className="" />
                </div>
                <div className="frminpu link mt-3">
                    <label htmlFor=""><FaTv/> Portfolio</label>
                    <input type="text" placeholder='Type here' name="" id="" className="" />
                </div>
                <div className="frminpu link mt-3">
                    <label htmlFor=""><IoIosLink/> Other</label>
                    <input type="text" placeholder='Type here' name="" id="" className="" />
                </div>

                
                
    
                
            </form>
        </div>
    )
}

export default Links
