import React from 'react'

const Progress = ({totalSteps, step}) => {
    const progress = ((step-1) / (totalSteps-1) * 100)
  return (
    <div className='progresbar' style={{height : '3px',
        width : '100%',
        transition : 'all 300ms ease-in',
        backgroundColor : '#D1D5DB'
    }} >
        <div style={{height : '3px',
        width : `${progress}%`,
        transition : 'all 300ms ease-in',
        backgroundColor : '#000'
    }}></div>
      
    </div>
  )
}

export default Progress
