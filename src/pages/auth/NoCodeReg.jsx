import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Header, Loader } from '../../components'
import logo from "../../assets/smartconnect.svg"
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { SET_CURRENT_USER } from '../../redux/slice/AuthSlice'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase/firebase'
import { toast } from 'react-toastify'


const NoCodeReg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setuserName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setisLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      dispatch(SET_CURRENT_USER({email: response.user.email, userName: `${firstname} ${lastName}`, userID: response.user.uid}))
      
      await setDoc(doc(db, "users", response.user.uid), {
        name: `${firstname} ${lastName}`,
        userName: userName,
        phone: phone,
        couponcode: null,
        cart: []
      });
      
      await setDoc(doc(db, "accountBalance", response.user.uid), {balance: null})
      setisLoading(false)
      toast.success("Account created successfully")
      navigate("/")
    } catch (err) {
      setisLoading(false)
      toast.error(`${err}`)
    }
  }
  return (
    <>
    {
      isLoading && <Loader />
    }
    <div className='signUpCont'>
    <div className='logo'>
      <img width="200px" src={logo} alt="" />
    </div>
    <section className="signUp">
      <div className='formCont'>
      <form onSubmit={handleSubmit} className='form'>
        <p>No code registration restricts access to Smartcash Earning</p>
        <div className="form-inputCont">
          <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>First Name</label>
        </div>
        <div className="form-inputCont">
          <input value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>Last Name</label>
        </div>
        <div className="form-inputCont">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder=" " className='form__input' type="email" required/> <label for="" className='form__label'>Email</label>
        </div>
        <div className="form-inputCont">
          <input value={userName} onChange={(e)=>setuserName(e.target.value)} placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>Username</label>
        </div>
        <div className="form-inputCont">
          <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>Phone</label>
        </div>
        <div className="form-inputCont">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder=" " className='form__input' type="password" required/> <label for="" className='form__label'>Password</label>
        </div>
        <p>Do u have a code? <Link to="/signup">Register With code</Link></p>
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
    </>
  )
}

export default NoCodeReg