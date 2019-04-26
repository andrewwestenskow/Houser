import React from 'react'
import './House.css'
export default function House (props) {

  const {id, name, address, city, state, zip, img, mortgage, rent} = props
  return(
    <div className='HouseContainer'>
      <span>{name}</span>
      <span>{id}</span>
      <span>{address}</span>
      <span>{city}</span>
      <span>{state}</span>
      <span>{zip}</span>
      <span><img src={img} alt={name}/></span>
      <span>{mortgage}</span>
      <span>{rent}</span>
      <button onClick={()=>props.handleDelete(id, name)}>DELETE</button>
    </div>
  )
}