import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import './ResumeBuilder.css';
import { BiSolidSchool } from 'react-icons/bi';

const Education = () => {
    const [educationEntries, setEducationEntries] = useState([{}, {}]); // Initialize with two empty objects

    const handleAddEducation = () => {
        setEducationEntries([...educationEntries, {}]);
    };

    const handleChange = (index, event) => {
        const newEntries = [...educationEntries];
        newEntries[index][event.target.name] = event.target.value;
        setEducationEntries(newEntries);
    };

    return (
        <div className='frmf'>
            <form className='edu'>
                {educationEntries.map((entry, index) => (
                    <div key={index}>
                        <h6>{`Education ${index + 1}`} <span><BiSolidSchool/></span></h6>
                        <div className="frminpu">
                            <label htmlFor={`schoolName${index}`}>School Name</label>
                            <input
                                type="text"
                                placeholder='Type here'
                                name="schoolName"
                                id={`schoolName${index}`}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </div>

                        <div className="edugridone row g-3 mt-0">
                            <div className="edugridin col-sm-5 col-12">
                                <label htmlFor={`major${index}`}>Major</label>
                                <input
                                    type="text"
                                    placeholder='Type here'
                                    name="major"
                                    id={`major${index}`}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div className="edugridin col-sm-4 col-6">
                                <label htmlFor={`degreeType${index}`}>Degree Type</label>
                                <input
                                    type="text"
                                    placeholder='Type here'
                                    name="degreeType"
                                    id={`degreeType${index}`}
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div className="edugridin col-sm-3 col-6">
                                <label htmlFor={`grade${index}`}>Grade</label>
                                <input
                                    type="text"
                                    placeholder='Type here'
                                    name="grade"
                                    id={`grade${index}`}
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
                        <hr className='mt-4' />
                    </div>
                ))}
                <h6 className='mb-4' onClick={handleAddEducation} style={{ cursor: 'pointer' }}>
                    <AiFillPlusCircle /> Add Education
                </h6>
            </form>
        </div>
    );
};

export default Education;
