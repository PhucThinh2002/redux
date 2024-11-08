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
              <NavLink to="/" className="link my-2">Home</NavLink>
              <NavLink to="/admin" className="link">Products</NavLink>
              <NavLink to="/admin/crypto" className="link my-2">Crypto Portfolio</NavLink>
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
