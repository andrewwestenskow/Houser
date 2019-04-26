import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import store, { MORTGAGE, RENT, CLEAR } from './../../../store'
import axios from 'axios'

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
    await axios.post('/api/house', house)
    
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
      <div>STEP 3
        <h1>Recommended Rent: {this.state.mortgage * 1.25}</h1>
        <input onChange={this.handleInput} type='number' name='mortgage' value={this.state.mortgage} />
        <input onChange={this.handleInput} type='number' name='rent' value={this.state.rent} />
        <Link to='/wizard/step2'>
          <button>Go Back</button>
        </Link>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Step3