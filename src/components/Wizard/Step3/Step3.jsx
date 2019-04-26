import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import store, { MORTGAGE, RENT, CLEAR } from './../../../store'
import axios from 'axios'
import './../Wizard.css'

class Step3 extends Component {

  constructor(props) {
    super(props)
    const reduxState = store.getState()
    this.state = {
      reduxState: reduxState,
      toDashboard: false,
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      toDashboard: false
    })
  }

  handleInput = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  saveChanges = () => {
    store.dispatch({
      type: MORTGAGE, payload: this.state.mortgage
    })

    store.dispatch({
      type: RENT, payload: this.state.rent
    })
  }

  async handleSubmit() {
    const { mortgage, rent } = this.state
    const { name, address, city, state, zip, img } = this.state.reduxState
    let house = {
      name,
      address,
      city,
      state,
      zip,
      img,
      mortgage,
      rent
    }
    await axios.post('/api/house', house).catch(err => console.log(err))
    
      store.dispatch({ type: CLEAR })

      this.setState({
        toDashboard: true
      })

  }


  render() {

    if (this.state.toDashboard) {
      return <Redirect to='/' />
    }

    return (
      <div className='step-3'>

        <div className="inputs-hold"><h1>Recommended Rent: {this.state.mortgage * 1.25}</h1>

        <p className='input-label'>Monthly Mortgage</p>
        <input className='long-input' onChange={this.handleInput} type='number' name='mortgage' value={this.state.mortgage} />
        <p className='input-label'>Desired Monthly Rent</p>
        <input className='long-input' onChange={this.handleInput} type='number' name='rent' value={this.state.rent} /></div>


        <div className="buttons-hold"><Link to='/wizard/step2'>
        <button className='nav-button'>Go Back</button>

        
        </Link>
        <button title='Delete House' className='submit' onClick={this.handleSubmit}>Complete</button></div>
      </div>
    )
  }
}

export default Step3