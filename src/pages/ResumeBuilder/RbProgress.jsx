import React from 'react'

const RbProgress = ({step, totalSteps}) => {
    const progress = ((step-1) / (totalSteps-1) * 100)
    return (
      <div className='rprogessbar' style={{height : '100%',
          width : '2px',
          transition : 'all 300ms ease-in',
          backgroundColor : '#D1D5DB'
      }} >
          <div style={{width : '2px',
          height : `${progress}%`,
          transition : 'all 300ms ease-in',
          backgroundColor : '#000'
      }}></div>
        
      </div>
  )
}

export default RbProgress
