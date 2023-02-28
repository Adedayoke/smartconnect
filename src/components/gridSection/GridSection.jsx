import React from 'react'

const GridSection = ({children}) => {
  return (
    <div className='gridSection'>
      <div className='gridSection__Cont'>
      {children}
      </div>
    </div>
  )
}

export default GridSection