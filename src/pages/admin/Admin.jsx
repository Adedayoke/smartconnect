import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSide from '../../components/AdminSideBar/AdminSide'
import Head from '../../components/head/Head'

const Admin = () => {
  return (
    <>
    <Head>Admin</Head>
    <div className="admin">
        <AdminSide />
        <Outlet />
    </div>
    </>
  )
}

export default Admin