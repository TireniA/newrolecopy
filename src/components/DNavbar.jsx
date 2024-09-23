import React from 'react'
import { CiBookmark } from 'react-icons/ci'
import logo from '../assets/logo.png'

const DNavbar = ({setNav, nav}) => {
  return (
    <div className='container-fluid pt-2 px-4'>
        <div className="dnavbar d-flex">
            <ul className='dnavmenu p-0 mt-2'>
                <li onClick={() => setNav('description')} className={nav==='description' ? 'dnavitem dnavactive' : 'dnavitem'}>Description</li>
                <li onClick={() => setNav('company')} className={nav==='company' ? 'dnavitem dnavactive' : 'dnavitem'}>Company</li>
            </ul>
            <div className="dnavactions my-1 my-lg-0">
                <button className='dnavsave'><CiBookmark/> Save</button>
                <button className='dnavapply d-flex align-items-center justify-content-center gap-1 '>
                    <img src={logo} alt="" className="img-fluid" />
                    Apply
                </button>
            </div>
        </div>
    </div>
  )
}

export default DNavbar
