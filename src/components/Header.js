import React from 'react'
import './Header.css'
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div className='Header_app'>
    <img src={logo} alt='logo' />
    </div>
  )
}

export default Header