import React from 'react'

const Button = ({children, clickEvent, idd}) => {
  return (
    <button onClick={()=>clickEvent(idd)} className='btn-primary'>{children}</button>
  )
}

export default Button;