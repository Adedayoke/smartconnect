import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'
import CardWrapper from '../../components/card/CardWrapper'
import { allProducts } from '../../redux/slice/AllProductsSlice'
import { RENDER_SEARCH_RESULT, searchResults } from '../../redux/slice/CategorySlice'

const SearchResult = () => {
    const SearchResults = useSelector(searchResults)
    const AllProducts = useSelector(allProducts)
    const dispatch = useDispatch()
    const [searchParams, setsearchParams] = useSearchParams()
    const search = searchParams.get("search_query")
    useEffect(()=>{
        const searchFilter = AllProducts.filter((product) => product.productName.toLowerCase().includes(search.toLowerCase())|| product.category.toLowerCase().includes(search.toLowerCase()))
        dispatch(RENDER_SEARCH_RESULT(searchFilter))
    }, [search])
  return (
    <div className='eshopsearchResult'>
        <div className="innerLayer">
        {
            SearchResults?.map(product => {
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

export default SearchResult