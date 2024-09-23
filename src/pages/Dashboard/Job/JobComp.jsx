import React from 'react'

const JobComp = ({ job }) => {
    return (
        <div className='container-fluid py-0 px-3 rcomp'>
            <div className="d-flex flex-column align-items-center">
                <img src={job.pfp} alt="" className="img-fluid" />
                <h5 className='mb-0 mt-2'>{job.name}</h5>
            </div>

            <hr />

            <div className="d-flex flex-column align-items-center text-center">
                <h5>Company overview</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatibus voluptas sequi a eligendi quae, in totam eius corrupti labore esse commodi quia sit suscipit inventore eos necessitatibus rerum? Error perferendis asperiores porro labore placeat saepe dolores sit consectetur voluptas eveniet amet laboriosam nisi explicabo consequuntur, deserunt fugiat recusandae illo itaque a, sunt mollitia. Debitis nemo eius reiciendis nostrum repellendus suscipit quasi velit provident ipsum perferendis accusantium delectus nobis eos blanditiis, quidem accusamus odio deserunt esse sint cupiditate? Aut inventore quas nobis doloremque amet, excepturi corporis eaque. Quibusdam ex unde dicta dolores fuga nostrum provident odit, enim consequatur inventore voluptatem.</p>
            </div>
        </div>
    )
}

export default JobComp
