import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { NAME, ADDRESS, CITY, STATE, ZIP } from './../../../store'
import './../Wizard.css'

class Step1 extends Component {
  constructor(props) {
    super(props)
    const reduxState = store.getState()
    this.state = {
      reduxState: reduxState,
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
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
      type: NAME, payload: this.state.name
    })
    store.dispatch({
      type: ADDRESS, payload: this.state.address
    })
    store.dispatch({
      type: CITY, payload: this.state.city
    })
    store.dispatch({
      type: STATE, payload: this.state.state
    })
    store.dispatch({
      type: ZIP, payload: this.state.zip
    })
  }

  render() {
    return (
      <div className='steps'>
        <div className="inputs-hold">

          <div className="input-hold">
            <p className='input-label'>Property Name</p>
            <input onChange={this.handleInput} type="text" name='name' value={this.state.name} /></div>

          <div className="input-hold-long">
            <p className='input-label'>Address</p>
            <input className='long-input' onChange={this.handleInput} type="text" name='address' value={this.state.address} /></div>

          <div className='three-inputs'>
            <div className="input-hold">
              <p className='input-label'>City</p>
              <input className='small-input' onChange={this.handleInput} type="text" name='city' value={this.state.city} /></div>

            <div className="input-hold">
              <p className='input-label'>State</p>
              <input className='small-input' onChange={this.handleInput} type="text" name='state' value={this.state.state} maxLength='2' /></div>

            <div className="input-hold">
              <p className='input-label'>Zip Code</p>
              <input className='small-input' onChange={this.handleInput} type='number' name='zip' value={this.state.zip} /></div>
          </div>
        </div>

        <div className="buttons-hold">

          <Link to='/wizard/step2'>
            <button className='first-next' onClick={() => this.saveChanges()}>Next Step</button>
          </Link></div>
      </div>
    )
  }
}

export default Step1