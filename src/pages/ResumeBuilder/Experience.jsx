import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import './ResumeBuilder.css';
import { BiSolidSchool } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';

const Experience = () => {
    const [experienceEntries, setExperienceEntries] = useState([{}, {}]); // Initialize with two empty objects

    const handleAddExperience = () => {
        setExperienceEntries([...experienceEntries, {}]);
    };

    const handleChange = (index, event) => {
        const newEntries = [...experienceEntries];
        newEntries[index][event.target.name] = event.target.value;
        setExperienceEntries(newEntries);
    };

    return (
        <div className='frmf'>
            <form className='edu'>
                <div className="excheck d-flex gap-2 mb-3">
                    <input type="checkbox" name="" id='' />
                    <label htmlFor=''><strong>I have No Prior Experience</strong></label>
                </div>
                {experienceEntries.map((entry, index) => (
                    <div key={index}>
                        <h6>{`Experience ${index + 1}`} <span><CgDetailsMore /></span></h6>
                        <div className="edugridone row g-3 mt-0">
                            <div className="edugridin col-7">
                                <label htmlFor={`compname${index}`}>Company Name</label>
                                <input
                                    type="text"
                                    placeholder='Type here'
                                    name="compname"
                                    id={`compname${index}`}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div className="edugridin col-5">
                                <label htmlFor={`location${index}`}>Location</label>
                                <input
                                    type="text"
                                    placeholder='Type here'
                                    name="location"
                                    id={`location${index}`}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                        </div>

                        <div className="edugridone row g-3 mt-0">
                            <div className="edugridin col-7">
                                <label htmlFor={`compname${index}`}>Company Name</label>
                                <input
                                    type="text"
                                    placeholder='Type here'
                                    name="compname"
                                    id={`compname${index}`}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div className="edugridin col-5">
                                <label htmlFor={`location${index}`}>Location</label>
                                <input
                                    type="text"
                                    placeholder='Type here'
                                    name="location"
                                    id={`location${index}`}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                        </div>

                        <div className="edugridone row g-2 mt-1">
                        <div className="edugridin col-6" >
                                <label htmlFor={`startMonth${index}`}>Start Date</label>
                                <input
                                    type="date"
                                    placeholder='Type here'
                                    name="startMonth"
                                    id={`startMonth${index}`}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div className="edugridin col-6" >
                                <label htmlFor={`endMonth${index}`}>End Date</label>
                                <input
                                    type="date"
                                    placeholder='Type here'
                                    name="endMonth"
                                    id={`endMonth${index}`}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>


                        </div>
                        <hr className='mt-3 mb-2' />
                        <div className="excheck d-flex gap-2 mb-3">
                            <input type="checkbox" name="" id={`workcurrent${index}`} onChange={(e) => handleChange(index, e)} />
                            <label htmlFor={`workcurrent${index}`}>I currently work here</label>
                        </div>
                    </div>
                ))}
                <h6 className='mb-4' onClick={handleAddExperience} style={{ cursor: 'pointer' }}>
                    <AiFillPlusCircle /> Add Experience
                </h6>
            </form>
        </div>
    );
};

export default Experience;
