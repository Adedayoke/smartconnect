import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Header } from '../../components'
import logo from "../../assets/smartconnect.svg"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import { useDispatch } from 'react-redux'
import { SET_CURRENT_USER } from '../../redux/slice/AuthSlice'
import { ToastContainer, toast } from 'react-toastify';
import { async } from '@firebase/util'
import { doc, getDoc } from 'firebase/firestore'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      const response = await signInWithEmailAndPassword(auth, email, password)
      const docRef = doc(db, "couponcodes", "WLAwRtfCVXRu4LdUjPZ5");
      const docSnap = await getDoc(docRef)
      const userData = docSnap.data()
      dispatch(SET_CURRENT_USER({email: response.user.email,userName: `${userData.name}`, userID: response.user.uid}))
      navigate("/")
      toast.success("User Logged In")
    }catch(err){
      toast.error("Error logging in")
    }
  }
  return (
    <div className='signUpCont'>
    <div className='logo'>
      <img width="200px" src={logo} alt="" />
    </div>
    <section className="signUp">
      <div className='formCont loginForm'>
      <form onSubmit={handleSubmit} className='form'>
        <div className="form-inputCont">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder=" " className='form__input' type="email" required/> <label for="" className='form__label'>Email</label>
        </div>
        <div className="form-inputCont">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder=" " className='form__input' type="password" required/> <label for="" className='form__label'>Password</label>
        </div>
        <button>Login</button>
      </form>
      <p className='p-already'>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </section>
    </div>
  )
}

export default Login;