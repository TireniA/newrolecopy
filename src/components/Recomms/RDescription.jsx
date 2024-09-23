import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import '../../styles/Styles.css'

const RDescription = () => {
    return (
        <div className='container-fluid py-0 px-3 rdes'>
            <div className="d-flex justify-content-between divo">
                <div className="d-flex align-items-center gap-2">
                    <div className="rdesimg"></div>
                    <h5>Google</h5>
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
                <div className="">
                    <div className="mb-1 rdivtf">
                        <small>PART-TIME</small>
                        <small>DESIGN</small>
                    </div>
                    <div className=" ">
                        <small>CONSULTING</small>
                        <small>TECHNOLOGY</small>
                    </div>
                </div>
            </div>
            <hr className='mt-lg-1 mt-3' />
            <h5>Description</h5>
            <p className='rdessedp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eos quia vero debitis modi omnis adipisci, beatae rerum necessitatibus ipsum cumque praesentium tenetur incidunt quibusdam similique consequatur quae veniam reiciendis error mollitia! Enim ducimus perspiciatis modi dolore id accusamus inventore facere veniam adipisci, amet repellendus ullam est nulla, ad provident!</p>
            <h5>Requirements</h5>
            <ul className='rdeslist'>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente?</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, sapiente?</li>
            </ul>
        </div>
    )
}

export default RDescription
