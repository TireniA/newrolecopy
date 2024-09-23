import React from 'react'

const JobType = ({ pfp, title }) => {
    return (
        <div className='jobtitle'>
            <div className="jobtitleimg">
                <img src={pfp} alt="" className="img-fluid" />
            </div>
            <p className='m-0'>{title}</p>
        </div>
    )
}

export default JobType
