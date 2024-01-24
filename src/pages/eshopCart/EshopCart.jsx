import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DECREASE_QUANTITY, INCREASE_QUANTITY, myCart, REMOVE_FROM_CART } from '../../redux/slice/CartSlice'
import {SET_PRODUCT_STATE_false} from '../../redux/slice/AllProductsSlice'
import { FaTrash } from 'react-icons/fa'
import { db } from '../../firebase/firebase'
import { selectuserId } from '../../redux/slice/AuthSlice'
import { doc, updateDoc } from 'firebase/firestore'
import { PopUp } from '../../components'
import { Link } from 'react-router-dom'

const EshopCart = () => {
    const CART = useSelector(myCart);
    const [cart, setcart] = useState([])
    const [subTotal, setsubTotal] = useState(0)
    const [PopUpState, setPopUpState] = useState(false)
    const UserId = useSelector(selectuserId)
    const updateOnUser = async ()=>{
        const docRef = doc(db, "users", UserId);
        await updateDoc(docRef, {
            cart: [...cart]
        });
    }
    useEffect(()=>{
        setcart(CART)
        setsubTotal(cart?.reduce((acc, curr)=>acc + Number(curr.price.split(",").join(""))*curr.quantity, 0))
        
    }, [CART])
    
    useEffect(()=>{
        setsubTotal(cart?.reduce((acc, curr)=>acc + Number(curr.price.split(",").join(""))*curr.quantity, 0))
        updateOnUser()
    }, [cart])
    const dispatch = useDispatch()
    const handleIncrease = (idd)=>{
        dispatch(INCREASE_QUANTITY(idd))
    }
    const handleDecrease = (idd)=>{
        cart.forEach(filter => {
            if (filter.id === idd){
                dispatch(DECREASE_QUANTITY(idd))
                if(filter.quantity <= 1){
                    dispatch(SET_PRODUCT_STATE_false(idd))
                    
                   dispatch(REMOVE_FROM_CART(filter))
                }
            }
        });
    }
    const handleRemove = (idd)=>{
        cart.forEach((product)=>{
            if (product.id === idd){
                dispatch(SET_PRODUCT_STATE_false(idd))
                dispatch(REMOVE_FROM_CART(product))
            }
        })
    }
    const onCheckout = () =>{
        if(UserId){

        }else{
            setPopUpState(true)
        }
    }
  return (
    <>
    <div className='eshopCart'>
        <div className="innerLayer">
            <h1>Cart({cart.length})</h1>
            <hr />
            <ul>
                {
                    cart?.map((product)=>{
                        return(
                            <li className='eachProduct'>
                                <div className="details">
                                <div className="left">
                                  <img src={product?.img} alt="" />
                                </div>
                                <div className="right">
                                    <h1>{product?.productName}</h1>
                                    <p className="category">
                                        <span >Category :</span>&nbsp;
                                        <span>{product?.category}</span>
                                    </p>
                                </div>
                                <div className="secondRight">
                                    <div className="prices">
                                        <h1 className='discountPrice'><span>#</span> <span>{product?.price}</span></h1>
                                        <ul>
                                            <li className='originalPrice'>{product?.initialPrice}</li>
                                            <li className='percentOff'>{product?.percentOff}</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="otherFunc">
                                    <div onClick={()=>handleRemove(product?.id)} className="remove">
                                        <FaTrash size="15px" />
                                        <span>Remove</span>
                                    </div>
                                    <div className="adjustNum">
                                        <div onClick={()=>handleDecrease(product?.id)}>-</div>
                                        <span>{product?.quantity}</span>
                                        <div onClick={()=>handleIncrease(product?.id)}>+</div>
                                    </div>
                                </div>
                            </li>
                            
                         )
                    })
                } 
            </ul>
        </div>
        <div className="checkout">
            <div className="checkoutMenu">
                <h1>Cart Summary</h1>
                <hr />
                <div className="subtotal">
                    <h2>Subtotal</h2>
                    <h2>$ {subTotal.toLocaleString()}</h2>
                </div>
                <p>Delivery fees not included yet.</p>
                <hr />
                <div className="butt">
                <button onClick={onCheckout} className='btn-primary'>Checkout ({subTotal.toLocaleString()})</button>
                </div>
            </div>
        </div>
    </div>
    {
        PopUpState && 
        <PopUp>
            <h2 onClick={()=>setPopUpState(false)} className='closePopup'><span>cancel</span></h2>
            <h1><span className='login'><Link to="/login">Login</Link></span> or <span className='login'><Link to="/signup">Signup</Link></span> to checkout </h1>
        </PopUp>
    }
    </>
  )
}

export default EshopCart