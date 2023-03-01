import React, { useEffect, useRef, useState } from 'react'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import Button from '../button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { myCartNum } from '../../redux/slice/CartSlice'
import { myCart } from '../../redux/slice/CartSlice'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { catstate, CAT_STATE } from '../../redux/slice/CategorySlice'

const ShopNav = () => {
  const cartValue = useSelector(myCartNum)
  const catstateSet = useSelector(catstate)
  const CART = useSelector(myCart)
  const [sneakCartDisplay, setSneakCartDisplay] = useState(true)
  const ref = useRef()
  const [cartIconColor, setCartIconColor] = useState("black")
  const [search_query, setSearch_query] = useState("") 
  const dispatch = useDispatch()
  useEffect(()=>{
    if(window.innerWidth > 709){
      ref.current.onmouseover = ()=>{
        setSneakCartDisplay(false)
        setCartIconColor("#bf8a24")
      }
      ref.current.onmouseleave = ()=>{
        setSneakCartDisplay(true)
        setCartIconColor("black")
      }
    }
  }, [CART])
  const handleHam = () => {
    if(catstateSet){
      dispatch(CAT_STATE(false))
    }
    else{
      dispatch(CAT_STATE(true))
    }
  }
  const norun = (val)=>{

  }
  return (
    <div className="storeMainContNav">
      <div className={catstateSet ? "navHam active" : "navHam"}>
      <GiHamburgerMenu onClick={handleHam} size={20} />
      </div>
        <div className="storeMainContNav__searchCont">
        <input onChange={(e)=>setSearch_query(e.target.value)} value={search_query} placeholder='Search Products and categories' type="text"  />
        <Link to={search_query.trimStart() && `/store/results?search_query=${search_query?.trimStart().replace(" ", "+")}`}><button className='btn-primary'>Search</button></Link>
        </div>
        <div ref={ref} className="storeMainContNav__cart">
          <Link to="cart">
             <FaShoppingCart color={cartIconColor} size={20} />
          </Link>
          <span>{CART.length}</span>
        </div>
        <div className={sneakCartDisplay ? "sneakCartDisplay opacity_Zero": "sneakCartDisplay"}>
          <ul>
            {CART.map((product)=>{
              return(
                <li>
                  <div className="imgCont">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="productDetail">
                    <h3>{product.productName}</h3>
                  </div>
                </li>
              )
            })
            }
          </ul>
          
        </div>
    </div>
  )
}

export default ShopNav