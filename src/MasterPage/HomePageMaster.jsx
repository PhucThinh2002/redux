import React from 'react'
import HeaderMenu from '../Component/HeaderMenu'
import { Outlet } from 'react-router-dom'

const HomePageMaster = () => {
  return (
    <>
        <HeaderMenu/>
        <div style={{minHeight:650}} className='content'>
            <Outlet/>    
        </div>    
        <footer className='fs-1 bg-dark text-white text-center'>
            Footer
        </footer>
    </>
  )
}

export default HomePageMaster