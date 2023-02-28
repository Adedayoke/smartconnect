import React from 'react'
import Head from '../../components/head/Head'
import Merchants from '../../redux/Merchants'
import { FaStar, FaWhatsapp } from 'react-icons/fa'

const SmartVendors = () => {
  return (
    <div className='smartVendors'>
        <Head>Coupon Merchants</Head>
        <div className="smartVendorsCont">
          <div className="layer1">
            <h2>Activate Your Account</h2>
            <p>Get your code from any of our verified Merchants.</p>
            <span><b>NB:</b><b><i>Do not pay to anyone that is not listed below </i></b></span>
          </div>
          <hr />
          <div className="gridCont">
            {
              Merchants.map((merchant)=>{
                return(
                  <div className="eachMerchant">
                    <div className="imgCont">
                      <img src={merchant.img} alt="" />
                    </div>
                    <ul>
                      <li>{merchant.name}</li>
                      <li>Bank: {merchant.bank}</li>
                    </ul>
                    <div className="Wimage">
                      <a href="#" target="_blank"><FaWhatsapp size="25px" /></a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default SmartVendors