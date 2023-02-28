import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import Head from '../../components/head/Head'
import {FaShoppingCart, FaTimes, FaUserCircle} from "react-icons/fa"
import CardWrapper from '../../components/card/CardWrapper'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../../redux/slice/CartSlice'
import { ADD_PRODUCT, allProducts } from '../../redux/slice/AllProductsSlice'
import { PHONES_AND_TABLETS, COMPUTING, fashion, computing, phoneandtablet, FASHION } from '../../redux/slice/CategorySlice'
import { myCart } from '../../redux/slice/CartSlice'
// import { computing, phoneandtablet } from '../../redux/slice/CategorySlice'
import cardDetails from '../../redux/CardDetails'
import {Link, NavLink} from 'react-router-dom'
const MyStore = () => {
  
const dispatch = useDispatch()


let value = 1

const AllProducts = useSelector(allProducts)

const [AllCategories, setAllCategories] = useState([])
const Phones_Tablets = useSelector(phoneandtablet)
const Computing = useSelector(computing)
const Fashion = useSelector(fashion)


useEffect(()=>{
  let phones = []
  let comp = []
  let fash = []
  AllProducts.forEach((detail)=>{
    if(detail.category === "Phones and Tablets"){
      phones = [...phones, detail]
      dispatch(PHONES_AND_TABLETS(phones))
    }
    else if(detail.category === "Computing"){
      comp = [...comp, detail]
      dispatch(COMPUTING(comp))
    }
    else if(detail.category === "Fashion"){
      fash = [...fash, detail]
      dispatch(FASHION(fash))
    }
  })
  
  return setAllCategories([{name: "Phones and Tablets", cat: Phones_Tablets}, {name: "Computing", cat: Computing}, {name : "Fashion", cat: Fashion}])
}, [AllCategories])



  return (
    <div className='store'>
        <div className="storeMainCont">
        <div className="storeMainContsneakdisplay">
          {
            AllCategories.map((category)=>{
              return(
                <div className="sneakDisplay" key={category.name}>
                  <div className="heading">
                    <h1>{category.name}</h1>
                  </div>
                  <div className="products .snaps-inline">
                    {
                      category.cat.map((product)=>{
                        return(
                          <CardWrapper key={product.price}>
                            <NavLink to={`/store/products/${product.id}`}>
                            <img src={product.img} alt="" />
                            <div className="content">
                              <p>{product.productName}</p>
                              <p>{product.price}</p>
                            </div>
                          </NavLink>
                          </CardWrapper>
                        )
                      })
                    }
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

export default MyStore