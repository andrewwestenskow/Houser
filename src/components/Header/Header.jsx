import React from 'react'
import houser from './../../assets/houser.png'
import './Header.css'

export default function Header() {
  return(
    <div className='Header'>
    <div className="logo-hold">
      <img className='logo' src={houser} alt="houser"/>
      <h1 className='logo-text'>Houser</h1>
    </div>
    </div>
  )
}