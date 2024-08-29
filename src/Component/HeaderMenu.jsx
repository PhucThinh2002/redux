import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <header className='bg-dark text-white'>
      <nav className='p-2'>
        <NavLink to="" className={(props) => props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' :'mx-2 text-white link'}>Home</NavLink>
        <NavLink to="/form" className={(props) => (props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' :'mx-2 text-white link')}>Form</NavLink>
        <NavLink to="/ViTien" className={(props) => (props.isActive ? 'mx-2 bg-white text-dark p-3 text-decoration-none' :'mx-2 text-white link')}>ViTien</NavLink>
      </nav>
    </header>
  )
}

export default HeaderMenu