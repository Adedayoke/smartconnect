import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components'
import logo from "../../assets/smartconnect.svg"


const NoCodeReg = () => {

  const referral = null
  return (
    <div className='signUpCont'>
    <div className='logo'>
      <img width="200px" src={logo} alt="" />
    </div>
    <section className="signUp">
      <div className='formCont'>
      <form className='form'>
        <p>No code registration restricts access to Smartcash Earning</p>
        <div className="form-inputCont">
          <input placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>First Name</label>
        </div>
        <div className="form-inputCont">
          <input placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>Last Name</label>
        </div>
        <div className="form-inputCont">
          <input placeholder=" " className='form__input' type="email" required/> <label for="" className='form__label'>Email</label>
        </div>
        <div className="form-inputCont">
          <input placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>Username</label>
        </div>
        <div className="form-inputCont">
          <input placeholder=" " className='form__input' type="number" required/> <label for="" className='form__label'>Phone</label>
        </div>
        <div className="form-inputCont">
          <input placeholder=" " className='form__input' type="password" required/> <label for="" className='form__label'>Password</label>
        </div>
        <p>Do u have a code? <Link to="/signup">Register With code</Link></p>
        {
          referral && <div>
          <input type="text" required/>
          <label htmlFor=""></label>
        </div>
        }
        <div className='box'>
          <input required type="checkbox" />
          <label>By clicking "Register", you agree to our terms of service, privacy policy and cookie policy</label>
        </div>
        <button>Register</button>
      </form>
      <p className='p-already'>Already registered? <Link>Sign In</Link></p>
      </div>
    </section>
    </div>
  )
}

export default NoCodeReg