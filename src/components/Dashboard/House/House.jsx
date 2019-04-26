import React from 'react'
import './House.css'
import image from './../../../assets/delete.png'
export default function House(props) {

  const { id, name, address, city, state, zip, img, mortgage, rent } = props
  return (
    <div className='HouseContainer'>
      <div className='house-detail-image'>
        <img className='house-image' src={img} alt={name} />
      </div>
      <div className='house-detail'>
        <p className='house-text'>Property Name: {name}</p>
        <p className='house-text'> Address: {address}</p>
        <p className='house-text'> City: {city}</p>
        <p className='house-text'> State: {state}</p>
        <p className='house-text'>Zip: {zip}</p>
      </div>
      <div className="house-detail">
        <p className='house-text'>Mortgage: {mortgage}</p>
        <p className='house-text'> Desired Rent: {rent}</p>
      </div>
      <img src={image} className='delete' alt='Delete' onClick={() => props.handleDelete(id, name)}/>
    </div>
  )
}