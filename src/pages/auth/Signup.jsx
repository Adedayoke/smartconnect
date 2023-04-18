import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import logo from "../../assets/smartconnect.svg"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import { useDispatch } from 'react-redux'
import { SET_CURRENT_USER } from '../../redux/slice/AuthSlice'
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import {Loader} from '../../components'

const Signup = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const referral = searchParams?.get("ref");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setuserName] = useState("");
  const [phone, setPhone] = useState("");
  const [couponcode, setcouponCode] = useState("");
  const [refName, setrefName] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkRefName = async ()=>{
    try {
      const docSnap4 = await getDoc(doc(db, "users", referral))
      if(docSnap4.exists()){
        setrefName(docSnap4.data().userName)
      }
    } catch (error) {
      toast.error(`${error}`)
    }
  }
  useEffect(()=>{
    if(referral){
      checkRefName()
    }
  }, [referral])

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setisLoading(true)
    try {
      const docRef = doc(db, "couponcodes", "WLAwRtfCVXRu4LdUjPZ5");
      const docRef2 = doc(db, "Registeredcodes", "QjYAvLACV5D0GYPuskmQ");
      const docSnap = await getDoc(docRef);
      const docSnap2 = await getDoc(docRef2);
      // if (docSnap.exists()) {
      const couponcodes = docSnap.data();
      const registeredcodes = docSnap2.data();
      if (couponcodes.codes.includes(couponcode)){
        if (registeredcodes.codes.includes(couponcode)){
          setisLoading(false)
          toast.error("Coupon code is already in use")
        }
        else{
          const response = await createUserWithEmailAndPassword(auth, email, password)
          dispatch(SET_CURRENT_USER({email: response.user.email, userName: `${firstname} ${lastName}`, userID: response.user.uid}))
          if(referral){
            const docRef3 = doc(db, "accountBalance", referral)
            const docSnap3 = await getDoc(docRef3)
            if (docSnap3.exists()){
              await setDoc(doc(db, "users", response.user.uid), {
                name: `${firstname} ${lastName}`,
                userName: userName,
                phone: phone,
                couponcode: couponcode,
                referrer: referral,
                cart: []
              });
              await setDoc(doc(db, "accountBalance", referral), {
                balance: docSnap3.data().balance + 3000
              })
            }
            else{
              setisLoading(false)
              toast.error("Referrer does not exist")
            }
          }
          else{
            await setDoc(doc(db, "users", response.user.uid), {
              name: `${firstname} ${lastName}`,
              userName: userName,
              phone: phone,
              couponcode: couponcode,
              cart: []
            });
          }
          await setDoc(doc(db, "accountBalance", response.user.uid), {balance: 0.00})
          await setDoc(doc(db, "Registeredcodes", "QjYAvLACV5D0GYPuskmQ"), {
            codes: [...registeredcodes.codes, couponcode]
          })
          setisLoading(false)
          toast.success("User registered successfully")
          navigate("/")
        }
      }
      else{
        setisLoading(false)
        toast.error("Invalid coupon code")
      }
        
      // } else {
      // // doc.data() will be undefined in this case
      // console.log("No such document!");
      // }
    

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
        <div className="form-inputCont">
          <input value={couponcode} onChange={(e)=>setcouponCode(e.target.value)} placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>Coupon Code</label>
        </div>
        <p>Don't have a code? <Link to="/coupon-merchants">Get Code</Link> Or <Link to="/no-code-signup">Register Without code</Link></p>
        {
          referral && <div className="form-inputCont">
          <input value={refName} placeholder=" " className='form__input' type="text" required/> <label for="" className='form__label'>Referrer</label>
        </div>
        }
        <div className='box'>
          <input required type="checkbox" />
          <label>By clicking "Register", you agree to our terms of service, privacy policy and cookie policy</label>
        </div>
        <button>Register</button>
      </form>
      <p className='p-already'>Already registered? <Link to="/login">Login</Link></p>
      </div>
    </section>
    </div>
    </>
  )
}

export default Signup