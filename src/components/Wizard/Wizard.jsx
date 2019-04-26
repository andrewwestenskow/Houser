import React from 'react'
import { Link } from 'react-router-dom'
import store,{ CLEAR } from '../../store';
import './Wizard.css'



export default function Wizard({children}){

    return (
      <div className='Wizard'>
      <div className="wizard-button-text-hold">
      <h2 className='wizard-text'>Add New Listing</h2>
        <Link to='/'>
          <button className='cancel' onClick={()=>{store.dispatch({type:CLEAR})}}>Cancel</button>
        </Link>
      </div>
        {children}     
      </div>
    )
  }
