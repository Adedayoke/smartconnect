import React from 'react'
import { useSelector } from 'react-redux'
import { searchResults } from '../../redux/slice/CategorySlice'

const SearchResult = () => {
    const SearchResults = useSelector(searchResults)
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