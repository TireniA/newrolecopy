import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DNavbar from '../../../components/DNavbar'
import { jobs } from '../../../utils/data'
import JobDescri from './JobDescri'
import JobComp from './JobComp'

const JobMain = () => {
    const { id } = useParams()
    const jobId = parseInt(id)
    const job = jobs.find(item => item.id === jobId)
    const [nav, setNav] = useState('description')
    const handleNav = () => {
        if (nav === 'description') {
            return <JobDescri job={job}/>
        }
        else {
            return <JobComp job={job} />
        }
    }
    return (
        <div className='container-fluid  recc jobs'>
            <h5>Job Board</h5>
            <div className="jobscont bg-white pb-5">
                <DNavbar setNav = {setNav} nav={nav} />
                <hr />
                <div className="jobscontcont">
                    {handleNav()}
                </div>
            </div>

        </div>
    )
}

export default JobMain
