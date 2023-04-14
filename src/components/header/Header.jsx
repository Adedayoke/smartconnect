import React, {useState} from 'react';
import logo from "../../assets/smartconnect.svg"
import avatar from "../../assets/avatar.png"
import Button from '../button/Button';
import { Link, useSearchParams } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectuserEmail } from '../../redux/slice/AuthSlice';


const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const userEmail = useSelector(selectuserEmail)
  const adminUsers = ["adedayoke2006@gmail.com", "okeibraheem267@gmail.com"]
  
  const [View, setView] = useState(true);

  const norun = (val)=>{

  }
  return (
    <div className='header'>
      <Link to="/">
      <img width="100px" className='header__logo' src={logo} alt="" />
      </Link>
      <ul>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/store'>Smart Store</Link></li>
        <li><Link to='/top-earners'>Top Earners</Link></li>
        <li><Link to='/adverts'>Advert</Link></li>
        <li><Link to='/coupon-checker'>Coupon Checker</Link></li>
        <li><Link to='/raffle-winners'>Raffle</Link></li>
        <li><Link to='/coupon-merchants'>Smart Vendors</Link></li>
        {adminUsers.includes(userEmail) &&  
          <li><Link to='/admin/dashboard'>Admin</Link></li>
        }
        {
          !isLoggedIn ? 
          <Button><Link to='/signup'>Get Started</Link></Button>:
          <div className='avatar'>
            <img onClick={()=>setView(!View)} src={avatar} alt="" />
            <div className={View ? "noView" : "view"}>
              <ul className="acctInfo">
                <Link onClick={()=>setView(true)} to="/account">
                  <li>Account</li>
                </Link>
                <Link onClick={()=>setView(true)} to="/signup">
                  <li>Register User</li>
                </Link>
                <Link onClick={()=>setView(true)}>
                  <li>Log Out</li>
                </Link>
              </ul>
            </div>
          </div>
        } 
      </ul>
      <div className="ham">
        <GiHamburgerMenu size={20} />
      </div>
    </div>
  )
}

export default Header