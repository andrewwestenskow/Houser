import React from 'react'
import { Link } from 'react-router-dom'
import store,{ CLEAR } from '../../store';



export default function Wizard({children}){

    return (
      <div>WIZARD
        <Link to='/'>
          <button onClick={()=>{store.dispatch({type:CLEAR})}}>Cancel</button>
        </Link>
        {children}     
      </div>
    )
  }
