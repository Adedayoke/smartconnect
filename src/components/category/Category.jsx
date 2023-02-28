import React from 'react'

const Category = () => {
  const myCategories = ["Home & Office", "Phones & Tablets", "Fashion", "Computing"]
  return (
    <div className="storeMainContCategories">
      <ul>
        {
          myCategories.map((category)=>{
            return(
              <li key={category}>{category}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Category