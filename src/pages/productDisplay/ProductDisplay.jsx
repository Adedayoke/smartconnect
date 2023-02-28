import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { allProducts, SET_PRODUCT_STATE_false, SET_PRODUCT_STATE_true } from '../../redux/slice/AllProductsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { Button } from '../../components'
import { ADD_TO_CART, myCart, REMOVE_FROM_CART } from '../../redux/slice/CartSlice'


const ProductDisplay = () => {
  const {id} = useParams()
  const AllProducts = useSelector(allProducts)
  const cartContent = useSelector(myCart)
  const dispatch = useDispatch()
  const [currentProduct, setCurrentProduct] = useState([])
  const [state, setState]= useState(false)
  useEffect(()=>{
    const Product = AllProducts.filter((product)=>product.id == id)
    setCurrentProduct(Product)

    // const similarProduct = cartContent.find((product)=>product.id == id)
  }, [AllProducts])
  const handleAddToCart = (idd) =>{
    AllProducts.forEach(product => {
      if (product.id === idd){
        if (product.state === false){
          dispatch(SET_PRODUCT_STATE_true(idd))
          dispatch(ADD_TO_CART(currentProduct[0]))
        }
        else{
          dispatch(SET_PRODUCT_STATE_false(idd))
          dispatch(REMOVE_FROM_CART(currentProduct[0]))
        }
      }
    });
    
  }
  return (
    <div className="productDisplay">
      {
        currentProduct.map((product)=>{
          return(
            <div key={id} className='innerLayer'>
              <div className="left">
                <img src={product.img} alt="" />
              </div>
              <div className="right">
                <div className="level1">
                  <h1>{product.productName}</h1>
                  <p className="category">
                    <span >Category :</span>&nbsp;
                    <span>{product.category}</span>
                  </p>
                  <div className="rating">
                    <FaStar color='gold' size="15px" />
                    <FaStar color='gold' size="15px" />
                    <FaStar color='gold' size="15px" />
                    <FaStar color='gold' size="15px" />
                    <FaStar color='gold' size="15px" />
                  </div>
                  <hr />
                </div>
                <div className="level2">
                  <div className="prices">
                    <h1 className='discountPrice'><span>#</span> <span>{product.price}</span></h1>
                    <ul>
                      <li className='originalPrice'>#{product.initialPrice}</li>
                      <li className='percentOff'>{product.percentOff}</li>
                    </ul>
                  </div>
                  <div className="addButton">
                    <Button clickEvent={()=>handleAddToCart(product.id)}>{product.state ? "REMOVE FROM CART" : "ADD TO CART"}</Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductDisplay