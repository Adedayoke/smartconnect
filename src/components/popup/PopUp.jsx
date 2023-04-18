import React from 'react';
import ReactDOM from "react-dom";

const PopUp = ({children}) => {
    return ReactDOM.createPortal (
        <div className='popupWrapper'>
          <div className='popup'>
            {children}
          </div>
        </div>, document.getElementById("popup")
    )
}

export default PopUp