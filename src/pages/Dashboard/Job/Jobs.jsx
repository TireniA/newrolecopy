import React from 'react'
import { Link } from 'react-router-dom'

const Jobs = ({ pfp, title, id }) => {
    return (
        <Link to={`/job/${id}`} style={{textDecoration: 'none'}}>
            <div className='jobpicks text-black'>
                <img src={pfp} alt="" className="img-fluid" />
                <div className="">
                    <h6>{title}</h6>
                    <p>Dropbox . Paris, France</p>
                    <div>
                        <small>Full-Time</small>
                        <small>Marketing</small>
                        <small>Design</small>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Jobs
