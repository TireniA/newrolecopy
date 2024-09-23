import React, { useState } from 'react'
import './Job.css'
import { CiSearch } from 'react-icons/ci'
import { jobs, jobtype } from '../../../utils/data'
import JobType from './JobType'
import Jobs from './Jobs'

const Job = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };
    return (
        <div className='container-fluid  recc jobs'>
            <h5>Job Board</h5>
            <div className="d-flex justify-content-between align-items-center">
                <div className="jobdropdown">
                    <button type="button" className="btn  bg-white dropdown-toggle" onClick={toggleDropdown}>
                        <span className='me-2'>Filter Jobs</span>
                    </button>
                    {isOpen && (
                        <ul className="dropdown-menu show">
                            <li><a className="dropdown-item" href="#">A-Z</a></li>
                            {/* <li><a className="dropdown-item" href="#">Link 2</a></li>
                            <li><a className="dropdown-item" href="#">Link 3</a></li> */}
                        </ul>
                    )}
                </div>
                <div className="jobsearch d-flex align-items-center">
                    <input type="text" placeholder='Search' />
                    <CiSearch />
                </div>
            </div>
            <div className="jobtypegrid">
                {jobtype.map(item => (
                    <JobType key={item.id} pfp={item.pfp} title={item.title} />
                ))}
            </div>
            <div className="jobsjobs mt-2">
                {jobs.map(item => (
                    <Jobs key={item.id} pfp={item.pfp} title={item.title} id={item.id}  />
                ))}
            </div>
        </div>
    )
}

export default Job
