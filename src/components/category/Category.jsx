import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { allProducts } from '../../redux/slice/AllProductsSlice'
import { RENDER } from '../../redux/slice/CategorySlice'

const Category = () => {
  const myCategories = ["Home and Office", "Phones and Tablets", "Fashion", "Computing"]
  return (
    <div className="storeMainContCategories">
      <ul>
        {
          myCategories.map((category)=>{
            return(
              <Link to={`/store/${category.split(' ').join('').toLowerCase()}`}>
                <li key={category}>{category}</li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Category