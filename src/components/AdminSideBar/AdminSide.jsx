import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DASHBOARD, dashboardActive, ORDER, orderActive, PRODUCTS, productsActive, STATISTICS, statisticsActive } from '../../redux/slice/AdminSlice';

const AdminSide = () => {
  const DashboardActive = useSelector(dashboardActive);
  const ProductsActive = useSelector(productsActive);
  const OrderActive = useSelector(orderActive);
  const StatisticsActive = useSelector(statisticsActive);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(DASHBOARD())
  }, [])

  const ActivateDashboard = ()=>{
    dispatch(DASHBOARD())
  }
  const ActivateProducts = ()=>{
    dispatch(PRODUCTS())
    console.log(productsActive)
  }
  const ActivateOrder = ()=>{
    dispatch(ORDER())
  }
  const ActivateStatistics = ()=>{
    dispatch(STATISTICS())
  }
  return (
    <div className='adminside'>
      <ul>
          <Link to="/admin/dashboard">
            <li onClick={ActivateDashboard} className={DashboardActive ? "active" : ""}>
              Dashboard
            </li>
          </Link>
          <Link to="/admin/products">
            <li onClick={ActivateProducts} className={ProductsActive ? "active" : ""}>
              Products
            </li>
          </Link>
          <Link to="/admin/orders">
            <li onClick={ActivateOrder} className={OrderActive ? "active" : ""}>
              Orders
            </li>
          </Link>
          <Link to="/admin/statistics">
            <li onClick={ActivateStatistics} className={StatisticsActive ? "active" : ""}>
              Statistics
            </li>
          </Link>
      </ul>
    </div>
  )
}

export default AdminSide