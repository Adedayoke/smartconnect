import React from 'react'

const Head = ({children}) => {
  return (
    <div className='head'>
        <h1>{children}</h1>
    </div>
  )
}

export default Head