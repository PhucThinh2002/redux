import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../assets/scss/ProductLayoutComponent.scss'

const ProductLayoutComponent = () => {
  return (
    <>
      <div className='product'>
        <div className='w-25'>
          <ul className='nav'>
            <h3><i className="fa fa-home"></i> DashBoard</h3>
            <li>
              <NavLink to="/product-management" className="link">Products</NavLink>
            </li>
          </ul>
        </div>
        <div className="w-75">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ProductLayoutComponent
