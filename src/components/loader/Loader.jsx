import React from 'react'
import ReactDOM from "react-dom"
import loaderImg from "../../assets/loader.gif"

const Loader = () => {
  return ReactDOM.createPortal (
    <div className='loaderWrapper'>
      <div className='loader'>
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>, document.getElementById("loader")
  )
}

export default Loader