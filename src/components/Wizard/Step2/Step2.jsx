import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {IMG} from './../../../store'
import './../Wizard.css'

class Step2 extends Component {
  constructor(props){
    super(props)
    const reduxState = store.getState()
    this.state={
      reduxState: reduxState,
      img: reduxState.img
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  saveChanges = () => {
    store.dispatch({
      type: IMG, payload: this.state.img
    })
  }

  render(){
    return(
      <div className='step-2'>
        <div className="inputs-hold-long">
        <p className='input-label'>Image URL</p>
        <input className='long-input' onChange={this.handleInput} type="text" name='img' value={this.state.img} /></div>
        
        
        
        <div className="buttons-hold"><Link to='/wizard/step1'>
        <button className='nav-button'>Go back</button>
        </Link>
        
        <Link to='/wizard/step3'>
        <button className='nav-button' onClick={()=>this.saveChanges()}>Next Step</button>
        </Link></div>
      </div>
    )
  }
}

export default Step2