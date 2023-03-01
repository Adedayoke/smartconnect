import React from 'react'
import Head from '../../components/head/Head'
import MyStore from '../myStore/MyStore'
import {Routes, Route, Outlet} from 'react-router-dom'
import ShopNav from '../../components/shopNav/ShopNav'
import Category from '../../components/category/Category'
import ProductDisplay from '../productDisplay/ProductDisplay'
import { catstate } from '../../redux/slice/CategorySlice'
import { useSelector } from 'react-redux'

const Eshop = () => {
  const catstateSet = useSelector(catstate)
  return (
    <div className='eshop'>
      <Head>Shop</Head>
      <ShopNav />
      { catstateSet && <Category />}
      <Outlet />
    </div>
  )
}

export default Eshop
