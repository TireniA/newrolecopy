import React, { useState } from 'react'
import './Dashboard.css'
import DNavbar from '../../components/DNavbar'
import RDescription from '../../components/Recomms/RDescription'
import RCompany from '../../components/Recomms/RCompany'


const Rslide = () => {
  const [nav, setNav] = useState('description')
  const handleNav = () => {
    if(nav === 'description'){
      return <RDescription/>
    }
    else{
      return <RCompany/>
    }
  }
  return (
    <div className='rcslide '>
      <DNavbar setNav = {setNav} nav={nav}/>
      <hr className='mt-1' />
      {handleNav()}
    </div>
  )
}

export default Rslide
