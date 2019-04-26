import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {NAME, ADDRESS, CITY, STATE, ZIP} from './../../../store'

class Step1 extends Component {
  constructor(props){
    super(props)
    const reduxState = store.getState()
    this.state={
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

  render(){
    return(
      <div>STEP 1
        <input onChange={this.handleInput} type="text" name='name' value={this.state.name} />
        <input onChange={this.handleInput} type="text" name='address' value={this.state.address} />
        <input onChange={this.handleInput} type="text" name='city' value={this.state.city} />
        <input onChange={this.handleInput} type="text" name='state' value={this.state.state} maxLength='2' />
        <input onChange={this.handleInput} type='number' name='zip' value={this.state.zip} />
        <Link to='/wizard/step2'>
          <button onClick={() => this.saveChanges()}>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default Step1