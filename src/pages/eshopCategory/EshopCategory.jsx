import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import CardWrapper from '../../components/card/CardWrapper'
import { allProducts } from '../../redux/slice/AllProductsSlice'
import { currentlyRendered, RENDER } from '../../redux/slice/CategorySlice'

const EshopCategory = () => {
  const CurrentlyRendered = useSelector(currentlyRendered)
  const AllProducts = useSelector(allProducts)
  const {category} = useParams();
  const dispatch = useDispatch()

  useEffect(()=>{
    if (category === "homeandoffice"){
        const RenderedProducts = AllProducts.filter((product)=>product.category === "Home and Office")
        dispatch(RENDER(RenderedProducts))
    }
    if (category === "phonesandtablets"){
        const RenderedProducts = AllProducts.filter((product)=>product.category === "Phones and Tablets")
        dispatch(RENDER(RenderedProducts))
    }
    if (category === "fashion"){
        const RenderedProducts = AllProducts.filter((product)=>product.category === "Fashion")
        dispatch(RENDER(RenderedProducts))
    }
    if (category === "computing"){
        const RenderedProducts = AllProducts.filter((product)=>product.category === "Computing")
        dispatch(RENDER(RenderedProducts))
    }
  }, [category])
  return (
    <div className='eshopCategory'>
        <div className="innerLayer">
        {
            CurrentlyRendered?.map(product => {
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
}

export default EshopCategory