import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import './Job.css'

const JobDescri = ({job}) => {
    return (
        <div className='jobdescri'>
            <div className="d-flex justify-content-between divo">
                <div className="d-flex align-items-center gap-2">
                    <img src={job.pfp} alt="" className="img-fluid" />
                </div>

                <div className="rdesloc mt-2 mt-lg-0">
                    <p><CiLocationOn /> Lekki, Lagos, Nigeria </p>
                    <p className="rdesmatch">70% match</p>
                </div>
            </div>
            <div className="d-flex divt align-items-start justify-content-between mt-4">
                <div className="">
                    <h5 className='m-0'>Product Designer</h5>
                    <p>Posted on 08/09/2024</p>
                </div>
            </div>
            <hr className='mt-2 mb-4' />
            <h5>Description</h5>
            <p className='rdessedp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eos quia vero debitis modi omnis adipisci, beatae rerum necessitatibus ipsum cumque praesentium tenetur incidunt quibusdam similique consequatur quae veniam reiciendis error mollitia! Enim ducimus perspiciatis modi dolore id accusamus inventore facere veniam adipisci, amet repellendus ullam est nulla, ad provident!</p>
            <h5>Requirements</h5>
            <ul className='rdeslist'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam perferendis architecto laborum autem asperiores.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam perferendis architecto laborum autem asperiores.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam perferendis architecto laborum autem asperiores.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam perferendis architecto laborum autem asperiores.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quisquam perferendis architecto laborum autem asperiores.</li>
            </ul>
            <h5>Matching</h5>
        </div>
    )
}

export default JobDescri
